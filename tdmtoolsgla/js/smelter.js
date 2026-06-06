(function () {
    'use strict';

    const SMELT_CONTAINER_ID = '384';
    const PACKAGE_PAGE_LIMIT = 20;
    const START_PENDING_KEY = 'tdmSmelterStartPending';
    const LAST_ACTION_KEY = 'tdmSmelterLastActionAt';
    const SMELTABLE_ITEM_TYPES = new Set(['1', '2', '3', '4', '5', '6', '8', '9', '15']);

    let isRunning = false;

    if (!isSmelterEnabled()) {
        return;
    }

    setTimeout(runSmelter, 800);

    async function runSmelter() {
        if (isRunning || shouldThrottle()) {
            return;
        }

        if (!isSmelteryPage()) {
            if (hasFinishedSmelterNotice()) {
                goToSmeltery();
                return;
            }

            if (isPackagesPage() && pageHasSmeltablePackageItem(document)) {
                goToSmeltery();
            }
            return;
        }

        isRunning = true;

        try {
            if (await storeFinishedResources()) {
                markAction();
                reloadSmeltery(1200);
                return;
            }

            if (await finishPendingStart()) {
                markAction();
                return;
            }

            if (!hasOpenSmelterSlot()) {
                return;
            }

            await selectClosedSlotIfAvailable();

            if (!isSmelterInputEmpty()) {
                sessionStorage.setItem(START_PENDING_KEY, '1');
                await finishPendingStart();
                return;
            }

            const item = await findNextSmeltablePackageItem();
            if (!item) {
                console.log('[TDM Smelter] Khong tim thay item trong packages de phan giai.');
                return;
            }

            await movePackageToSmelter(item);
            sessionStorage.setItem(START_PENDING_KEY, '1');
            markAction();
            reloadSmeltery(900);
        } catch (error) {
            console.error('[TDM Smelter]', error);
        } finally {
            isRunning = false;
        }
    }

    function isSmelterEnabled() {
        if (!localStorage.getItem('smelterEnabled')) {
            return true;
        }

        return localStorage.getItem('smelterEnabled') === 'true';
    }

    function shouldThrottle() {
        const lastActionAt = Number(sessionStorage.getItem(LAST_ACTION_KEY) || '0');
        return lastActionAt > 0 && Date.now() - lastActionAt < 3000;
    }

    function markAction() {
        sessionStorage.setItem(LAST_ACTION_KEY, String(Date.now()));
    }

    function getQuery() {
        return new URLSearchParams(window.location.search);
    }

    function isSmelteryPage() {
        const params = getQuery();
        return params.get('mod') === 'forge' && params.get('submod') === 'smeltery';
    }

    function isPackagesPage() {
        return getQuery().get('mod') === 'packages';
    }

    function hasFinishedSmelterNotice() {
        return document.body.textContent.includes('The item was successfully melted down');
    }

    function getSecureHash() {
        const queryHash = getQuery().get('sh');
        if (queryHash) {
            return queryHash;
        }

        const inputHash = document.querySelector('input[name="sh"]');
        if (inputHash && inputHash.value) {
            return inputHash.value;
        }

        const hashSource = document.querySelector('a[href*="sh="], form[action*="sh="]');
        const source = hashSource && (hashSource.getAttribute('href') || hashSource.getAttribute('action'));
        const hashMatch = source && source.match(/[?&]sh=([^&]+)/);

        return hashMatch ? hashMatch[1] : '';
    }

    function buildGameUrl(file, params) {
        const sh = getSecureHash();
        const next = new URLSearchParams();

        Object.keys(params).forEach(function (key) {
            if (params[key] !== undefined && params[key] !== null) {
                next.set(key, params[key]);
            }
        });

        if (sh && !next.has('sh')) {
            next.set('sh', sh);
        }

        return `${file}?${next.toString()}`;
    }

    function goToSmeltery() {
        window.location.href = buildGameUrl('index.php', {
            mod: 'forge',
            submod: 'smeltery',
        });
    }

    function reloadSmeltery(delay) {
        setTimeout(goToSmeltery, delay);
    }

    async function gameGet(file, params) {
        const response = await fetch(buildGameUrl(file, params), {
            credentials: 'same-origin',
        });
        const text = await response.text();

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${text.slice(0, 120)}`);
        }

        return text;
    }

    async function gameAction(params) {
        const response = await fetch(buildGameUrl('ajax.php', Object.assign({
            a: Date.now(),
        }, params)), {
            credentials: 'same-origin',
            redirect: 'manual',
        });
        const text = await response.text();

        if (response.type === 'opaqueredirect' || response.status === 0) {
            throw new Error('Game redirect sang lobby. Hay reload trang roi thu lai.');
        }

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${text.slice(0, 120)}`);
        }

        return text;
    }

    function parseHtml(html) {
        return new DOMParser().parseFromString(html, 'text/html');
    }

    function getSlotsData(doc) {
        const scripts = Array.from((doc || document).querySelectorAll('script'));
        const script = scripts.find(function (node) {
            return node.textContent.includes('var slotsData');
        });

        if (!script) {
            return [];
        }

        const match = script.textContent.match(/var\s+slotsData\s*=\s*(\[.*?\]);\s*var\s+mode/s);
        if (!match) {
            return [];
        }

        try {
            return JSON.parse(match[1]);
        } catch (error) {
            console.warn('[TDM Smelter] Khong parse duoc slotsData.', error);
            return [];
        }
    }

    function getSlotNumber(slotData, fallback) {
        const rawSlot = slotData && slotData['forge_slots.slot'];
        const slot = Number(rawSlot);
        return Number.isFinite(slot) ? slot : fallback;
    }

    async function storeFinishedResources() {
        const slots = getSlotsData();
        const finishedSlots = slots
            .map(function (slotData, index) {
                return {
                    state: slotData && (slotData.state || slotData['forge_slots.state']),
                    slot: getSlotNumber(slotData, index),
                };
            })
            .filter(function (slotData) {
                return slotData.state === 'finished-succeeded';
            });

        if (!finishedSlots.length && !hasFinishedSmelterNotice()) {
            return false;
        }

        if (!finishedSlots.length) {
            const visibleStoreButton = document.querySelector('#forge_horreum:not(.hidden)');
            if (visibleStoreButton) {
                visibleStoreButton.click();
                return true;
            }

            finishedSlots.push({ slot: 0 });
        }

        for (const finishedSlot of finishedSlots) {
            await gameAction({
                mod: 'forge',
                submod: 'storeSmelted',
                mode: 'smelting',
                slot: finishedSlot.slot,
            });
        }

        return true;
    }

    function hasOpenSmelterSlot() {
        const slots = getSlotsData();
        if (!slots.length) {
            return true;
        }

        return slots.some(function (slotData) {
            const state = slotData && (slotData.state || slotData['forge_slots.state']);
            return state === 'closed';
        });
    }

    async function selectClosedSlotIfAvailable() {
        const closedSlot = document.querySelector('#forge_nav .forge_closed');
        if (!closedSlot || !isVisible(closedSlot)) {
            return false;
        }

        closedSlot.click();
        await wait(700);
        return true;
    }

    function isSmelterInputEmpty() {
        const input = document.querySelector(`#itembox[data-container-number="${SMELT_CONTAINER_ID}"]`);
        return !input || !input.querySelector('[data-content-type], .ui-draggable, [class*="item-i-"]');
    }

    async function finishPendingStart() {
        if (sessionStorage.getItem(START_PENDING_KEY) !== '1') {
            return false;
        }

        if (isSmelterInputEmpty()) {
            return false;
        }

        const goldRentButton = document.querySelector('#rent [data-rent="2"]');
        if (goldRentButton && isVisible(goldRentButton)) {
            goldRentButton.click();
            await wait(900);
        }

        const startButton = document.getElementById('forge_start');
        if (startButton && isVisible(startButton)) {
            startButton.click();
            sessionStorage.removeItem(START_PENDING_KEY);
            reloadSmeltery(1200);
            return true;
        }

        return false;
    }

    function isVisible(element) {
        return element && element.offsetParent !== null && !element.classList.contains('hidden');
    }

    function wait(ms) {
        return new Promise(function (resolve) {
            setTimeout(resolve, ms);
        });
    }

    async function findNextSmeltablePackageItem() {
        const firstPageHtml = await gameGet('index.php', {
            mod: 'packages',
            f: 0,
            fq: -1,
            qry: '',
            page: 1,
        });
        const firstPageDoc = parseHtml(firstPageHtml);
        const pages = getPackagePageNumbers(firstPageDoc).slice(0, PACKAGE_PAGE_LIMIT);

        for (const page of pages) {
            let doc = firstPageDoc;

            if (page !== 1) {
                const html = await gameGet('index.php', {
                    mod: 'packages',
                    f: 0,
                    fq: -1,
                    qry: '',
                    page,
                });
                doc = parseHtml(html);
            }

            const item = findSmeltablePackageItemInDoc(doc);

            if (item) {
                return item;
            }
        }

        return null;
    }

    function getPackagePageNumbers(doc) {
        const pageNumbers = Array.from(doc.querySelectorAll('.pagination a, .pagination span'))
            .map(function (element) {
                const textPage = parseInt(element.textContent.trim(), 10);
                const href = element.getAttribute('href') || '';
                const hrefMatch = href.match(/[?&]page=(\d+)/g);
                const hrefPage = hrefMatch ? parseInt(hrefMatch[hrefMatch.length - 1].replace(/\D/g, ''), 10) : NaN;

                return !Number.isNaN(textPage) ? textPage : hrefPage;
            })
            .filter(function (page) {
                return Number.isFinite(page) && page > 0;
            });

        if (!pageNumbers.length) {
            pageNumbers.push(1);
        }

        return Array.from(new Set(pageNumbers)).sort(function (left, right) {
            return left - right;
        });
    }

    function pageHasSmeltablePackageItem(doc) {
        return Boolean(findSmeltablePackageItemInDoc(doc));
    }

    function findSmeltablePackageItemInDoc(doc) {
        return Array.from(doc.querySelectorAll('#packages .packageItem, .packageItem'))
            .map(getPackageItemData)
            .find(isSmeltablePackageItem) || null;
    }

    function getPackageItemData(packageItem) {
        const item = packageItem.querySelector('[data-content-type]');
        const input = packageItem.querySelector('input[value]');

        if (!item) {
            return null;
        }

        const basis = item.dataset.basis || '';
        const itemType = basis.split('-')[0];
        const inputContainerId = input && input.value;
        const dataContainerId = item.dataset.containerNumber || packageItem.dataset.containerNumber;
        const containerId = inputContainerId || dataContainerId;

        if (!containerId || !itemType) {
            return null;
        }

        return {
            containerId: String(containerId).replace(/^-/, ''),
            itemType,
            basis,
            amount: parseInt(item.dataset.amount || '1', 10) || 1,
        };
    }

    function isSmeltablePackageItem(item) {
        if (!item) {
            return false;
        }

        return SMELTABLE_ITEM_TYPES.has(item.itemType);
    }

    async function movePackageToSmelter(item) {
        return gameAction({
            mod: 'inventory',
            submod: 'move',
            from: `-${item.containerId}`,
            fromX: 1,
            fromY: 1,
            to: SMELT_CONTAINER_ID,
            toX: 1,
            toY: 1,
            amount: item.amount,
        });
    }
})();
