const GLADIATUS_URL_PATTERN = 'https://*.gladiatus.gameforge.com/*';
const WATCHDOG_ALARM = 'gladiatusWatchdog';
const CHECK_INTERVAL_MINUTES = 0.5;
const MIN_RELOAD_GAP_MS = 45 * 1000;
const MAX_BACKOFF_MS = 10 * 60 * 1000;

const tabState = new Map();

function getState(tabId) {
    if (!tabState.has(tabId)) {
        tabState.set(tabId, {
            failCount: 0,
            lastReloadAt: 0
        });
    }

    return tabState.get(tabId);
}

function isGladiatusUrl(url) {
    try {
        const parsedUrl = new URL(url);
        return parsedUrl.protocol === 'https:' && parsedUrl.hostname.endsWith('.gladiatus.gameforge.com');
    } catch (error) {
        return false;
    }
}

function getReloadDelay(failCount) {
    const backoff = Math.min(MAX_BACKOFF_MS, Math.pow(2, Math.max(0, failCount - 1)) * MIN_RELOAD_GAP_MS);
    return backoff + Math.floor(Math.random() * 5000);
}

async function checkUrl(url) {
    const controller = new AbortController();
    const timeoutId = setTimeout(function () {
        controller.abort();
    }, 12000);

    try {
        const response = await fetch(url, {
            method: 'HEAD',
            credentials: 'include',
            cache: 'no-store',
            redirect: 'follow',
            signal: controller.signal
        });

        if (response.status === 405) {
            const parsedUrl = new URL(url);
            const safeUrl = new URL('/game/index.php', parsedUrl.origin).href;
            const safeResponse = await fetch(safeUrl, {
                method: 'GET',
                credentials: 'include',
                cache: 'no-store',
                redirect: 'follow',
                signal: controller.signal
            });

            return {
                ok: safeResponse.status < 500,
                status: safeResponse.status
            };
        }

        return {
            ok: response.status < 500,
            status: response.status
        };
    } catch (error) {
        return {
            ok: false,
            status: 'fetch_failed'
        };
    } finally {
        clearTimeout(timeoutId);
    }
}

async function reloadTab(tab, reason) {
    const state = getState(tab.id);
    const now = Date.now();
    const delay = getReloadDelay(state.failCount);

    if (now - state.lastReloadAt < delay) {
        return;
    }

    state.lastReloadAt = now;
    console.log('[TDM watchdog] reload tab', tab.id, reason, tab.url);

    try {
        await chrome.tabs.reload(tab.id, {
            bypassCache: true
        });
    } catch (error) {
        console.warn('[TDM watchdog] reload failed', tab.id, error);
    }
}

async function reloadTabById(tabId, url, reason) {
    if (tabId < 0 || !isGladiatusUrl(url)) {
        return;
    }

    await reloadTab({
        id: tabId,
        url
    }, reason);
}

async function checkTab(tab) {
    if (!tab.id || !isGladiatusUrl(tab.url)) {
        return;
    }

    const state = getState(tab.id);
    const result = await checkUrl(tab.url);

    if (result.ok) {
        state.failCount = 0;
        return;
    }

    state.failCount += 1;
    await reloadTab(tab, result.status);
}

async function checkGladiatusTabs() {
    const tabs = await chrome.tabs.query({
        url: GLADIATUS_URL_PATTERN
    });

    await Promise.all(tabs.map(checkTab));
}

chrome.runtime.onInstalled.addListener(function () {
    chrome.alarms.create(WATCHDOG_ALARM, {
        periodInMinutes: CHECK_INTERVAL_MINUTES
    });
});

chrome.runtime.onStartup.addListener(function () {
    chrome.alarms.create(WATCHDOG_ALARM, {
        periodInMinutes: CHECK_INTERVAL_MINUTES
    });
});

chrome.alarms.onAlarm.addListener(function (alarm) {
    if (alarm.name === WATCHDOG_ALARM) {
        checkGladiatusTabs();
    }
});

chrome.tabs.onRemoved.addListener(function (tabId) {
    tabState.delete(tabId);
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && isGladiatusUrl(tab.url)) {
        checkTab(tab);
    }
});

chrome.webRequest.onCompleted.addListener(function (details) {
    if (details.tabId < 0 || !isGladiatusUrl(details.url)) {
        return;
    }

    const state = getState(details.tabId);

    if (details.statusCode >= 500) {
        state.failCount += 1;
        reloadTabById(details.tabId, details.url, details.statusCode);
        return;
    }

    state.failCount = 0;
}, {
    urls: [GLADIATUS_URL_PATTERN],
    types: ['main_frame']
});

chrome.webNavigation.onErrorOccurred.addListener(function (details) {
    if (details.frameId !== 0 || details.tabId < 0 || !isGladiatusUrl(details.url)) {
        return;
    }

    const state = getState(details.tabId);
    state.failCount += 1;
    reloadTabById(details.tabId, details.url, details.error);
}, {
    url: [{
        hostSuffix: 'gladiatus.gameforge.com',
        schemes: ['https']
    }]
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request && request.type === 'tdmFetchEquipmentStats') {
        fetchEquipmentStats(request.payload)
            .then(function (html) {
                sendResponse({
                    success: true,
                    html
                });
            })
            .catch(function (error) {
                sendResponse({
                    success: false,
                    error: error.message || String(error)
                });
            });

        return true;
    }

    const color = '#3aa757';

    chrome.storage.sync.set({ color }, function () {
        sendResponse({ success: true });
    });

    return true;
});

async function fetchEquipmentStats(payload) {
    if (!payload || !payload.item) {
        throw new Error('Thieu cong thuc item.');
    }

    const params = new URLSearchParams();
    params.set('prefix', payload.prefix || '0');
    params.set('item', payload.item);
    params.set('suffix', payload.suffix || '0');

    const response = await fetch('https://en.gladiatus-tools.com/ajax.php?mode=equipment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest'
        },
        body: params.toString(),
        credentials: 'omit',
        cache: 'no-store'
    });

    const text = await response.text();
    if (!response.ok) {
        throw new Error(`Gladiatus Tools HTTP ${response.status}: ${text.slice(0, 120)}`);
    }

    return text;
}
