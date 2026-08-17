(function () {
    'use strict';

    if (new URLSearchParams(window.location.search).get('mod') !== 'overview') {
        return;
    }

    function getSecureHash() {
        const queryHash = new URLSearchParams(window.location.search).get('sh');
        if (queryHash) {
            return queryHash;
        }

        if (window.secureHash) {
            return window.secureHash;
        }

        const hashSource = document.querySelector('a[href*="sh="], form[action*="sh="]');
        const source = hashSource && (hashSource.getAttribute('href') || hashSource.getAttribute('action'));
        const hashMatch = source && source.match(/[?&]sh=([^&]+)/);

        return hashMatch ? hashMatch[1] : '';
    }

    function getCurrentDoll() {
        const dollInput = document.getElementById('plDoll') || document.getElementById('doll');
        const doll = parseInt(dollInput && dollInput.value, 10);

        return Number.isFinite(doll) && doll > 0 ? doll : 1;
    }

    function getWorkbenchUrl() {
        const params = new URLSearchParams({
            mod: 'forge',
            submod: 'workbench',
        });
        const hash = getSecureHash();

        if (hash) {
            params.set('sh', hash);
        }

        return `index.php?${params.toString()}`;
    }

    function flattenTooltipRows(value, rows) {
        if (!Array.isArray(value)) {
            return;
        }

        if (typeof value[0] === 'string') {
            rows.push(value);
        }

        value.forEach(function (child) {
            flattenTooltipRows(child, rows);
        });
    }

    function getConditionPercent(item) {
        const tooltip = item.getAttribute('data-tooltip') || '';

        try {
            const rows = [];
            flattenTooltipRows(JSON.parse(tooltip), rows);
            const row = rows.find(function (tooltipRow) {
                return /^Conditioning\s+/i.test(tooltipRow[0] || '');
            });
            const match = row && String(row[0]).match(/\((\d+)%\)/);

            return match ? parseInt(match[1], 10) : null;
        } catch (error) {
            const match = tooltip.match(/Conditioning[^"]*\((\d+)%\)/i);

            return match ? parseInt(match[1], 10) : null;
        }
    }

    function countWorkbenchItems() {
        return Array.from(document.querySelectorAll('#char [data-item-id][data-tooltip]')).filter(function (item) {
            const percent = getConditionPercent(item);

            return percent !== null && percent < 100;
        }).length;
    }

    function setGameTooltip(button) {
        const workbenchItemCount = countWorkbenchItems();
        const text = workbenchItemCount > 0
            ? `Workbench (${workbenchItemCount} equipped items not full conditioning)`
            : 'Workbench';

        button.title = text;
        button.setAttribute('data-tooltip', `[[["${text}","#00ff00"],["If Gladiatus Time Saver is loaded, this uses its workbench workflow. Otherwise it opens Workbench.","#808080",280]]]`);
    }

    function wait(ms) {
        return new Promise(function (resolve) {
            setTimeout(resolve, ms);
        });
    }

    function getReversedText(text) {
        return text.split('').reverse().join('');
    }

    function getGtsGlobal(name) {
        return window[name] || window[getReversedText(name)];
    }

    function getGtsResolverCandidates() {
        const methodKey = getGtsGlobal('method') || getGtsGlobal('dohtem');
        const randomKey = getGtsGlobal('randomId') || getGtsGlobal('dImodnar');
        const candidates = [];

        if (methodKey && randomKey && typeof window[methodKey + randomKey] === 'function') {
            candidates.push(window[methodKey + randomKey]);
        }

        if (methodKey) {
            Object.getOwnPropertyNames(window).forEach(function (key) {
                try {
                    if (
                        key.indexOf(methodKey) === 0 &&
                        typeof window[key] === 'function' &&
                        candidates.indexOf(window[key]) < 0
                    ) {
                        candidates.push(window[key]);
                    }
                } catch (error) {
                    // Some browser globals throw on access.
                }
            });
        }

        return candidates;
    }

    function logGtsStatus(message, extra) {
        console.warn('[TDM workbench] ' + message, Object.assign({
            hasGtsMain: Boolean(window.gts_main),
            hasWorkflow: Boolean(window.gts_main && window.gts_main.workflow),
            method: window.method,
            randomId: window.randomId,
            resolverType: window.method && window.randomId ? typeof window[window.method + window.randomId] : 'missing',
        }, extra || {}));
    }

    function getGtsWorkbenchRunner() {
        try {
            if (!window.gts_main || !window.gts_main.workflow) {
                return null;
            }

            const resolvers = getGtsResolverCandidates();
            for (const resolveWorkflow of resolvers) {
                const runWorkbench = resolveWorkflow(window.gts_main.workflow, 102);
                if (runWorkbench) {
                    return runWorkbench;
                }
            }
        } catch (error) {
            console.warn('[TDM workbench]', error);
        }

        return null;
    }

    async function requestWorkbenchViaGts(doll) {
        for (let attempt = 0; attempt < 20; attempt += 1) {
            const runWorkbench = getGtsWorkbenchRunner();

            if (runWorkbench) {
                const result = runWorkbench(doll, doll > 2, true);

                if (result && typeof result.then === 'function') {
                    const resolvedResult = await result;
                    return resolvedResult !== false;
                }

                return result !== false;
            }

            await wait(250);
        }

        logGtsStatus('Can not find Gladiatus Time Saver workbench workflow.');
        return false;
    }

    function requestWorkbenchViaGtsButtonHandler(button) {
        const externalButton = document.querySelector('#char .repair:not(.tdm-workbench)');
        const jQueryInstance = window.jQuery;
        const eventData = externalButton &&
            jQueryInstance &&
            typeof jQueryInstance._data === 'function' &&
            jQueryInstance._data(externalButton, 'events');
        const clickHandlers = eventData && eventData.click;

        if (!clickHandlers || !clickHandlers.length) {
            return false;
        }

        const clickHandler = clickHandlers.find(function (eventHandle) {
            return typeof eventHandle.handler === 'function';
        });

        if (!clickHandler) {
            return false;
        }

        clickHandler.handler.call(button, {
            currentTarget: button,
            target: button,
            preventDefault: function () {},
            stopPropagation: function () {},
            type: 'click',
        });

        return true;
    }

    async function handleWorkbenchClick(button) {
        const doll = getCurrentDoll();
        button.disabled = true;
        button.classList.add('tdm-workbench-pending');

        try {
            const handledByGts = requestWorkbenchViaGtsButtonHandler(button) || await requestWorkbenchViaGts(doll);

            if (!handledByGts) {
                sessionStorage.setItem('tdmWorkbenchRequestedDoll', String(doll));
                window.location.href = getWorkbenchUrl();
            }
        } finally {
            setTimeout(function () {
                button.disabled = false;
                button.classList.remove('tdm-workbench-pending');
            }, 500);
        }
    }

    function addWorkbenchButton() {
        const char = document.getElementById('char');
        if (!char || char.querySelector('.tdm-workbench')) {
            return;
        }

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'awesome-button tdm-workbench';
        button.innerHTML = '&#9874;';
        setGameTooltip(button);
        button.addEventListener('click', function () {
            handleWorkbenchClick(button);
        });
        applyWorkbenchButtonStyle(button, Boolean(char.querySelector('.repair:not(.tdm-workbench)')));

        char.appendChild(button);
    }

    function applyWorkbenchButtonStyle(button, hasExternalRepairButton) {
        Object.assign(button.style, {
            bottom: '23px',
            display: 'block',
            fontSize: '16px',
            height: '19px',
            lineHeight: '1',
            padding: '0px',
            position: 'absolute',
            right: hasExternalRepairButton ? '38px' : '14px',
            visibility: 'visible',
            width: '20px',
            zIndex: '50',
        });
    }

    function waitForCharacterPanel() {
        let attempts = 0;
        const maxAttempts = 100;

        function tick() {
            addWorkbenchButton();

            if (document.querySelector('#char .tdm-workbench') || attempts >= maxAttempts) {
                return;
            }

            attempts += 1;
            setTimeout(tick, 200);
        }

        tick();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForCharacterPanel);
    } else {
        waitForCharacterPanel();
    }
})();
