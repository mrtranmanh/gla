(function () {
    'use strict';

    const DEFAULT_SHORTCUTS = ['overview', 'packages', 'auction', 'guildMarket', 'training', 'forge', 'smeltery', 'guildBankingHouse', 'messages'];
    const SHORTCUTS = [
        { key: 'overview', label: 'Overview', title: 'Overview', params: { mod: 'overview' } },
        { key: 'packages', label: 'Packages', title: 'Packages', params: { mod: 'packages' } },
        { key: 'auction', label: 'Auction', title: 'Auction', params: { mod: 'auction' } },
        { key: 'guildMarket', label: 'Guild Market', title: 'Guild Market', params: { mod: 'market' } },
        { key: 'training', label: 'Training', title: 'Training', params: { mod: 'training' } },
        { key: 'forge', label: 'Forge', title: 'Forge', params: { mod: 'forge' } },
        { key: 'smeltery', label: 'Smeltery', title: 'Smeltery', params: { mod: 'smeltery' } },
        { key: 'workbench', label: 'Workbench', title: 'Workbench', params: { mod: 'workbench' } },
        { key: 'guildBankingHouse', label: 'Guild Bank', title: 'Guild Banking House', params: { mod: 'guildBankingHouse' } },
        { key: 'messages', label: 'Messages', title: 'Messages', params: { mod: 'messages' } },
        { key: 'arena', label: 'Arena', title: 'Arena', params: { mod: 'arena' } },
        { key: 'dungeon', label: 'Dungeon', title: 'Dungeon', params: { mod: 'dungeon' } },
        { key: 'quests', label: 'Quests', title: 'Quests', params: { mod: 'quests' } }
    ];

    let auctionStatusTimer = null;

    function isEnabled(key, defaultValue) {
        const savedValue = localStorage.getItem(key);
        return savedValue === null ? defaultValue : savedValue === 'true';
    }

    function getSelectedShortcuts() {
        try {
            const savedShortcuts = JSON.parse(localStorage.getItem('tdmShortcutButtons'));
            if (Array.isArray(savedShortcuts)) {
                const selectedShortcuts = savedShortcuts.map(function (shortcut) {
                    return shortcut === 'market' ? 'guildMarket' : shortcut;
                }).filter(function (shortcut, index, shortcuts) {
                    if (shortcuts.indexOf(shortcut) !== index) {
                        return false;
                    }
                    return SHORTCUTS.some(function (option) { return option.key === shortcut; });
                });
                localStorage.setItem('tdmShortcutButtons', JSON.stringify(selectedShortcuts));
                return selectedShortcuts;
            }
        } catch (error) {
            return DEFAULT_SHORTCUTS;
        }

        return DEFAULT_SHORTCUTS;
    }

    function getSecureHash() {
        const url = new URL(window.location.href);
        const queryHash = url.searchParams.get('sh');
        if (queryHash) {
            return queryHash;
        }

        const hashInput = document.querySelector('input[name="sh"], input[name="secureHash"]');
        return hashInput ? hashInput.value : '';
    }

    function buildGameUrl(params) {
        const url = new URL('/game/index.php', window.location.origin);
        Object.keys(params).forEach(function (key) {
            url.searchParams.set(key, params[key]);
        });

        const secureHash = getSecureHash();
        if (secureHash) {
            url.searchParams.set('sh', secureHash);
        }

        return url.toString();
    }

    function removeNode(id) {
        const node = document.getElementById(id);
        if (node) {
            node.remove();
        }
    }

    function renderShortcutsBar() {
        removeNode('tdm-shortcuts-bar');

        if (!isEnabled('tdmShortcutsBarEnabled', true)) {
            return;
        }

        const header = document.getElementById('header_game');
        if (!header) {
            return;
        }

        const selectedShortcuts = getSelectedShortcuts();
        if (!selectedShortcuts.length) {
            return;
        }

        const shortcutsBar = document.createElement('div');
        shortcutsBar.id = 'tdm-shortcuts-bar';

        selectedShortcuts.forEach(function (shortcutKey) {
            const shortcut = SHORTCUTS.find(function (option) { return option.key === shortcutKey; });
            if (!shortcut) {
                return;
            }

            const link = document.createElement('a');
            link.className = 'tdm-shortcut-button';
            link.href = buildGameUrl(shortcut.params);
            link.title = shortcut.title;
            link.textContent = shortcut.label;
            shortcutsBar.appendChild(link);
        });

        header.appendChild(shortcutsBar);
    }

    function renderAuctionStatusBar() {
        removeNode('tdm-auction-status-bar');
        clearAuctionTimer();

        if (!isEnabled('tdmAuctionStatusBarEnabled', true)) {
            return;
        }

        const header = document.getElementById('header_game');
        if (!header) {
            return;
        }

        const statusBar = document.createElement('div');
        statusBar.id = 'tdm-auction-status-bar';
        statusBar.innerHTML = [
            '<a id="tdm-auction-status-gladiator" class="tdm-auction-status-item" href="' + buildGameUrl({ mod: 'auction', itemLevel: '999', itemQuality: '2' }) + '">Gladiator: ...</a>',
            '<a id="tdm-auction-status-mercenary" class="tdm-auction-status-item" href="' + buildGameUrl({ mod: 'auction', ttype: '3', itemLevel: '999', itemQuality: '2' }) + '">Mercenary: ...</a>'
        ].join('');
        header.appendChild(statusBar);

        updateAuctionStatus();
        auctionStatusTimer = window.setInterval(updateAuctionStatus, 60000);
    }

    function clearAuctionTimer() {
        if (auctionStatusTimer) {
            window.clearInterval(auctionStatusTimer);
            auctionStatusTimer = null;
        }
    }

    function updateAuctionStatus() {
        fetchAuctionStatus('gladiator', { mod: 'auction', itemLevel: '999', itemQuality: '2' });
        fetchAuctionStatus('mercenary', { mod: 'auction', ttype: '3', itemLevel: '999', itemQuality: '2' });
    }

    function fetchAuctionStatus(type, params) {
        const statusNode = document.getElementById('tdm-auction-status-' + type);
        if (!statusNode) {
            return;
        }

        fetch(buildGameUrl(params), { credentials: 'include' })
            .then(function (response) { return response.text(); })
            .then(function (html) {
                const status = parseAuctionStatus(html);
                statusNode.textContent = status.label + ': ' + status.value;
            })
            .catch(function () {
                statusNode.textContent = typeLabel(type) + ': error';
            });
    }

    function parseAuctionStatus(html) {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const nameNode = doc.querySelector('.awesome-tabs.current');
        const statusNode = doc.querySelector('span.description_span_right b');

        return {
            label: nameNode ? nameNode.textContent.trim() : 'Auction',
            value: statusNode ? statusNode.textContent.trim() : 'unknown'
        };
    }

    function typeLabel(type) {
        return type === 'mercenary' ? 'Mercenary' : 'Gladiator';
    }

    function renderFeatures() {
        renderShortcutsBar();
        renderAuctionStatusBar();
    }

    window.addEventListener('tdmGcaFeaturesChanged', renderFeatures);
    window.addEventListener('storage', function (event) {
        if (['tdmShortcutsBarEnabled', 'tdmAuctionStatusBarEnabled', 'tdmShortcutButtons'].includes(event.key)) {
            renderFeatures();
        }
    });

    renderFeatures();
})();
