(function () {
    'use strict';

    if (!window.location.href.includes('mod=guildStorage')) {
        return;
    }

    const STORAGE_KEY = 'tdmGuildStorageHideRedLevel';
    const HIDDEN_CLASS = 'tdm-guild-storage-hidden-red-level';
    let observer = null;

    function isHideEnabled() {
        return localStorage.getItem(STORAGE_KEY) !== 'false';
    }

    function setHideEnabled(enabled) {
        localStorage.setItem(STORAGE_KEY, enabled ? 'true' : 'false');
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

    function hasRedLevelTooltip(item) {
        const tooltip = item.getAttribute('data-tooltip') || '';

        try {
            const rows = [];
            flattenTooltipRows(JSON.parse(tooltip), rows);

            return rows.some(function (row) {
                return /^Level\s+\d+/i.test(row[0] || '') && String(row[1] || '').toLowerCase().includes('#ff0000');
            });
        } catch (error) {
            return /"Level\s+\d+"\s*,\s*"#ff0000/i.test(tooltip);
        }
    }

    function getStorageItems() {
        return Array.from(document.querySelectorAll('#shop [data-item-id][data-tooltip]'));
    }

    function applyFilter() {
        const enabled = isHideEnabled();
        let hiddenCount = 0;

        getStorageItems().forEach(function (item) {
            const shouldHide = enabled && hasRedLevelTooltip(item);
            item.classList.toggle(HIDDEN_CLASS, shouldHide);

            if (shouldHide) {
                hiddenCount += 1;
            }
        });

        updateControls(enabled, hiddenCount);
    }

    function updateControls(enabled, hiddenCount) {
        const button = document.getElementById('tdm-guild-storage-hide-red-level');
        const status = document.getElementById('tdm-guild-storage-hide-red-level-status');

        if (!button || !status) {
            return;
        }

        button.classList.toggle('active', enabled);
        button.setAttribute('aria-pressed', String(enabled));
        button.title = enabled ? 'Show red level items' : 'Hide red level items';
        button.innerHTML = [
            '<span class="tdm-guild-storage-filter-icon">Lv</span>',
            '<span class="tdm-guild-storage-filter-count">',
            String(hiddenCount),
            '</span>'
        ].join('');
        status.textContent = enabled ? 'red hidden' : 'red shown';
    }

    function createControls() {
        if (document.getElementById('tdm-guild-storage-red-level-controls')) {
            return;
        }

        const shopNav = document.getElementById('shop_nav');
        if (!shopNav) {
            return;
        }

        const controls = document.createElement('div');
        controls.id = 'tdm-guild-storage-red-level-controls';

        const button = document.createElement('button');
        button.id = 'tdm-guild-storage-hide-red-level';
        button.type = 'button';
        button.className = 'tdm-guild-storage-filter-button';
        button.addEventListener('click', function () {
            setHideEnabled(!isHideEnabled());
            applyFilter();
        });

        const status = document.createElement('span');
        status.id = 'tdm-guild-storage-hide-red-level-status';

        controls.appendChild(button);
        controls.appendChild(status);
        shopNav.appendChild(controls);
    }

    function initObserver() {
        const shop = document.getElementById('shop');
        if (!shop || observer) {
            return;
        }

        observer = new MutationObserver(function () {
            applyFilter();
        });

        observer.observe(shop, {
            childList: true,
            subtree: true
        });
    }

    function init() {
        createControls();
        applyFilter();
        initObserver();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
