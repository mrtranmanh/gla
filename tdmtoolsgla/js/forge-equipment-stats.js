(function () {
    'use strict';

    if (!window.location.href.includes('mod=forge')) {
        return;
    }

    const TOOLS_BASE_URL = 'https://en.gladiatus-tools.com';
    const CACHE_PREFIX = 'tdmForgeEquipmentStats:';
    const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000;
    const STAT_LABELS = [
        'Damage',
        'Armour',
        'Health',
        'Strength',
        'Dexterity',
        'Agility',
        'Constitution',
        'Charisma',
        'Intelligence',
        'Healing',
        'Critical attack value',
        'Critical healing value',
        'Block value',
        'Threat',
        'hardening value',
        'Level',
        'Value'
    ];

    let debounceTimer = 0;
    let requestSeq = 0;
    let scrollStatsActiveRequests = 0;
    let scrollBookInitTimer = 0;
    let scrollStatsTotal = 0;
    let scrollStatsDone = 0;
    let scrollBookLevelSortAsc = true;
    const scrollStatsQueue = [];
    const SCROLL_STATS_MAX_REQUESTS = 3;

    function getSelects() {
        return {
            prefix: document.getElementById('prefix0'),
            item: document.getElementById('basic0'),
            suffix: document.getElementById('suffix0')
        };
    }

    function getCurrentFormula() {
        const selects = getSelects();

        if (!selects.prefix || !selects.item || !selects.suffix) {
            return null;
        }

        return {
            prefix: selects.prefix.value || '0',
            item: selects.item.value || '',
            suffix: selects.suffix.value || '0',
            prefixName: getSelectedText(selects.prefix),
            itemName: getSelectedText(selects.item),
            suffixName: getSelectedText(selects.suffix)
        };
    }

    function getSelectedText(select) {
        return select.selectedOptions && select.selectedOptions[0]
            ? select.selectedOptions[0].textContent.trim()
            : '';
    }

    function getFormulaKey(formula) {
        return `${formula.prefix},${formula.item},${formula.suffix}`;
    }

    function parseFormulaKey(key) {
        const parts = String(key || '').split(',');
        if (parts.length !== 3 || !parts[1]) {
            return null;
        }

        return {
            prefix: parts[0] || '0',
            item: parts[1],
            suffix: parts[2] || '0',
            prefixName: '',
            itemName: parts[1],
            suffixName: ''
        };
    }

    function getFormulaFromToolsUrl(href) {
        try {
            const url = new URL(href, window.location.href);
            return parseFormulaKey(url.searchParams.get('item'));
        } catch (error) {
            return null;
        }
    }

    function createPanel() {
        if (document.getElementById('tdm-forge-equipment-stats')) {
            return document.getElementById('tdm-forge-equipment-stats');
        }

        const forgeBox = document.getElementById('forge_box');
        const panel = document.createElement('div');
        panel.id = 'tdm-forge-equipment-stats';
        panel.innerHTML = [
            '<div class="tdm-forge-equipment-stats-header">',
            '  <span>Equipment stats</span>',
            '  <a id="tdm-forge-equipment-stats-link" target="_blank" rel="noopener noreferrer">Tools</a>',
            '</div>',
            '<div id="tdm-forge-equipment-stats-status">Dang doc cong thuc...</div>',
            '<div id="tdm-forge-equipment-stats-body"></div>'
        ].join('');

        forgeBox.parentNode.insertBefore(panel, forgeBox.nextSibling);
        return panel;
    }

    function setStatus(text, isError) {
        const status = document.getElementById('tdm-forge-equipment-stats-status');
        if (!status) {
            return;
        }

        status.textContent = text;
        status.classList.toggle('error', Boolean(isError));
    }

    function setToolsLink(formula) {
        const link = document.getElementById('tdm-forge-equipment-stats-link');
        if (!link || !formula) {
            return;
        }

        link.href = `${TOOLS_BASE_URL}/equipment?item=${encodeURIComponent(getFormulaKey(formula))}`;
    }

    function readCache(key) {
        try {
            const raw = localStorage.getItem(CACHE_PREFIX + key);
            if (!raw) {
                return null;
            }

            const cached = JSON.parse(raw);
            if (!cached || Date.now() - cached.createdAt > CACHE_TTL_MS) {
                localStorage.removeItem(CACHE_PREFIX + key);
                return null;
            }

            return cached.html || null;
        } catch (error) {
            return null;
        }
    }

    function writeCache(key, html) {
        try {
            localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({
                createdAt: Date.now(),
                html
            }));
        } catch (error) {
            // Cache is optional.
        }
    }

    function fetchEquipmentStats(formula) {
        return new Promise(function (resolve, reject) {
            chrome.runtime.sendMessage({
                type: 'tdmFetchEquipmentStats',
                payload: {
                    prefix: formula.prefix,
                    item: formula.item,
                    suffix: formula.suffix
                }
            }, function (response) {
                if (chrome.runtime.lastError) {
                    reject(new Error(chrome.runtime.lastError.message));
                    return;
                }

                if (!response || !response.success) {
                    reject(new Error(response && response.error ? response.error : 'Khong lay duoc du lieu.'));
                    return;
                }

                resolve(response.html || '');
            });
        });
    }

    function getTextLines(element) {
        if (!element) {
            return [];
        }

        const clone = element.cloneNode(true);
        clone.querySelectorAll('br').forEach(function (br) {
            br.replaceWith('\n');
        });

        return (clone.textContent || '').replace(/\u00a0/g, ' ').split(/\n+/).map(function (line) {
            return line.replace(/\s+/g, ' ').trim();
        }).filter(Boolean);
    }

    function extractEquipmentCards(html) {
        const doc = new DOMParser().parseFromString(html, 'text/html');

        return Array.from(doc.querySelectorAll('.card')).map(function (card) {
            return {
                title: getTextLines(card.querySelector('.card-header')).join(' / '),
                stats: getTextLines(card.querySelector('.card-block'))
            };
        }).filter(function (card) {
            if (!card.title || !card.stats.length) {
                return false;
            }

            return !/^(Recipe|Share link)/i.test(card.title);
        });
    }

    function renderCompactStatsHtml(html) {
        const cards = extractEquipmentCards(html);
        if (!cards.length) {
            return '<span class="tdm-scroll-book-stats-empty">Khong co chi so</span>';
        }

        const first = cards[0];
        const summary = first.stats.filter(function (line) {
            return !/^Max (durability|conditioning)/i.test(line);
        }).join(' | ');

        return [
            '<details class="tdm-scroll-book-stats-details">',
            '<summary>',
            escapeHtml(summary || first.title),
            '</summary>',
            cards.map(function (card) {
                return [
                    '<div class="tdm-scroll-book-stats-card">',
                    '<div class="tdm-scroll-book-stats-title">',
                    escapeHtml(card.title),
                    '</div>',
                    '<div>',
                    card.stats.map(escapeHtml).join('<br>'),
                    '</div>',
                    '</div>'
                ].join('');
            }).join(''),
            '</details>'
        ].join('');
    }

    function sanitizeEquipmentHtml(html) {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const root = doc.body || doc;

        root.querySelectorAll('script, style, iframe, object, embed, input, button, textarea, select').forEach(function (node) {
            node.remove();
        });

        const directLink = Array.from(root.querySelectorAll('a')).find(function (link) {
            return /equipment\?item=/i.test(link.getAttribute('href') || '');
        });
        if (directLink) {
            directLink.remove();
        }

        const table = root.querySelector('table');
        const preferredResult = table || root;
        const container = document.createElement('div');
        container.appendChild(sanitizeNode(preferredResult));

        if (container.textContent.trim()) {
            if (table) {
                return container.innerHTML;
            }

            return '<div class="tdm-forge-equipment-results-grid">' + container.innerHTML + '</div>';
        }

        const rows = extractStatLines(root);
        if (!rows.length) {
            return '<div class="tdm-forge-equipment-empty">Khong tim thay chi so trong ket qua.</div>';
        }

        return '<table class="tdm-forge-equipment-table"><tbody>' + rows.map(function (row) {
            return '<tr><th>' + escapeHtml(row.label) + '</th><td>' + escapeHtml(row.value) + '</td></tr>';
        }).join('') + '</tbody></table>';
    }

    function sanitizeNode(sourceNode) {
        const allowedTags = {
            TABLE: true,
            THEAD: true,
            TBODY: true,
            TFOOT: true,
            TR: true,
            TH: true,
            TD: true,
            DIV: true,
            SPAN: true,
            P: true,
            BR: true,
            B: true,
            STRONG: true,
            SMALL: true
        };

        if (sourceNode.nodeType === Node.TEXT_NODE) {
            return document.createTextNode(sourceNode.textContent);
        }

        if (!allowedTags[sourceNode.nodeName]) {
            const fragment = document.createDocumentFragment();
            Array.from(sourceNode.childNodes).forEach(function (child) {
                fragment.appendChild(sanitizeNode(child));
            });
            return fragment;
        }

        const node = document.createElement(sourceNode.nodeName.toLowerCase());
        ['colspan', 'rowspan'].forEach(function (attribute) {
            const value = sourceNode.getAttribute(attribute);
            if (value && /^\d+$/.test(value)) {
                node.setAttribute(attribute, value);
            }
        });

        const allowedClasses = (sourceNode.getAttribute('class') || '').split(/\s+/).filter(function (className) {
            return [
                'row',
                'col-lg-4',
                'card',
                'card-header',
                'card-block'
            ].indexOf(className) !== -1;
        });
        if (allowedClasses.length) {
            node.setAttribute('class', allowedClasses.join(' '));
        }

        Array.from(sourceNode.childNodes).forEach(function (child) {
            node.appendChild(sanitizeNode(child));
        });

        return node;
    }

    function extractStatLines(root) {
        const text = (root.textContent || '').replace(/\u00a0/g, ' ');
        const lines = text.split(/\n+/).map(function (line) {
            return line.replace(/\s+/g, ' ').trim();
        }).filter(Boolean);

        const rows = [];
        lines.forEach(function (line) {
            STAT_LABELS.forEach(function (label) {
                if (rows.some(function (row) { return row.raw === line; })) {
                    return;
                }

                const pattern = new RegExp('^' + escapeRegExp(label) + '\\s*(.*)$', 'i');
                const match = line.match(pattern);
                if (match && match[1]) {
                    rows.push({
                        raw: line,
                        label,
                        value: match[1].trim()
                    });
                }
            });
        });

        return rows;
    }

    function renderStats(formula, html) {
        const body = document.getElementById('tdm-forge-equipment-stats-body');
        if (!body) {
            return;
        }

        body.innerHTML = [
            '<div class="tdm-forge-equipment-title">',
            escapeHtml(formula.prefixName || '-'),
            ' / ',
            escapeHtml(formula.itemName || '-'),
            ' / ',
            escapeHtml(formula.suffixName || '-'),
            '</div>',
            sanitizeEquipmentHtml(html)
        ].join('');
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function escapeRegExp(value) {
        return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function scheduleUpdate() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(updateStats, 350);
    }

    function initScrollBookStats() {
        const links = Array.from(document.querySelectorAll('#content_2nd .scroll-books-table a[href*="gladiatus-tools.com/equipment?item="]'));
        if (!links.length) {
            return;
        }

        createScrollBookControls(links.length);

        links.forEach(function (link) {
            const row = link.closest('tr');
            const linkCell = link.closest('td');
            const formula = getFormulaFromToolsUrl(link.href);
            if (!row || !linkCell || !formula || row.dataset.tdmStatsReady === '1') {
                return;
            }

            row.dataset.tdmStatsReady = '1';

            const statsRow = document.createElement('tr');
            statsRow.className = 'tdm-scroll-book-stats-row';

            const statsCell = document.createElement('td');
            statsCell.colSpan = Math.max(1, row.children.length);

            const stats = document.createElement('div');
            stats.className = 'tdm-scroll-book-stats-cell';
            stats.dataset.formulaKey = getFormulaKey(formula);
            stats.textContent = 'Chua update';
            statsCell.appendChild(stats);
            statsRow.appendChild(statsCell);
            row.parentNode.insertBefore(statsRow, row.nextSibling);

            const cachedHtml = readCache(getFormulaKey(formula));
            if (cachedHtml) {
                stats.innerHTML = renderCompactStatsHtml(cachedHtml);
                fillUnknownScrollName(row, formula, cachedHtml);
                stats.dataset.state = 'done';
            }
        });
    }

    function createScrollBookControls(count) {
        if (document.getElementById('tdm-scroll-book-stats-controls')) {
            updateScrollBookStatus();
            return;
        }

        const table = document.querySelector('#content_2nd .scroll-books-table');
        if (!table || !table.parentNode) {
            return;
        }

        const controls = document.createElement('div');
        controls.id = 'tdm-scroll-book-stats-controls';
        controls.innerHTML = [
            '<button type="button" id="tdm-scroll-book-update" class="awesome-button">Update stats</button>',
            '<button type="button" id="tdm-scroll-book-export" class="awesome-button">Export JSON</button>',
            '<button type="button" id="tdm-scroll-book-import" class="awesome-button">Import JSON</button>',
            '<button type="button" id="tdm-scroll-book-sort-id" class="awesome-button">Sort #</button>',
            '<button type="button" id="tdm-scroll-book-sort-level" class="awesome-button">Sort level</button>',
            '<input type="file" id="tdm-scroll-book-import-file" accept="application/json,.json" hidden>',
            '<span id="tdm-scroll-book-update-status"></span>'
        ].join('');

        table.parentNode.insertBefore(controls, table);

        const button = document.getElementById('tdm-scroll-book-update');
        if (button) {
            button.addEventListener('click', updateAllScrollBookStats);
        }

        const exportButton = document.getElementById('tdm-scroll-book-export');
        if (exportButton) {
            exportButton.addEventListener('click', exportScrollBookStatsJson);
        }

        const importButton = document.getElementById('tdm-scroll-book-import');
        const importInput = document.getElementById('tdm-scroll-book-import-file');
        if (importButton && importInput) {
            importButton.addEventListener('click', function () {
                importInput.click();
            });
            importInput.addEventListener('change', importScrollBookStatsJson);
        }

        const sortIdButton = document.getElementById('tdm-scroll-book-sort-id');
        if (sortIdButton) {
            sortIdButton.addEventListener('click', function () {
                sortScrollBookTables('id');
            });
        }

        const sortLevelButton = document.getElementById('tdm-scroll-book-sort-level');
        if (sortLevelButton) {
            sortLevelButton.addEventListener('click', function () {
                sortScrollBookTables('level', scrollBookLevelSortAsc);
                scrollBookLevelSortAsc = !scrollBookLevelSortAsc;
                sortLevelButton.textContent = scrollBookLevelSortAsc ? 'Sort level ↑' : 'Sort level ↓';
            });
        }

        const status = document.getElementById('tdm-scroll-book-update-status');
        if (status) {
            status.textContent = ` Cache: ${getRenderedCachedStatsCount()} / ${count}`;
        }
    }

    function scheduleScrollBookStatsInit() {
        clearTimeout(scrollBookInitTimer);
        scrollBookInitTimer = setTimeout(initScrollBookStats, 150);
    }

    function updateAllScrollBookStats() {
        const cells = Array.from(document.querySelectorAll('#content_2nd .tdm-scroll-book-stats-cell'));
        scrollStatsQueue.length = 0;
        scrollStatsDone = 0;
        scrollStatsTotal = cells.length;

        cells.forEach(function (cell) {
            const formula = parseFormulaKey(cell.dataset.formulaKey);
            const statsRow = cell.closest('tr');
            const sourceRow = statsRow ? statsRow.previousElementSibling : null;
            if (formula) {
                enqueueScrollBookStats(formula, cell, sourceRow, true);
            }
        });

        updateScrollBookStatus();
        processScrollBookStatsQueue();
    }

    function enqueueScrollBookStats(formula, cell, row, force) {
        if (!force && cell.dataset.state) {
            return;
        }

        cell.dataset.state = 'queued';
        scrollStatsQueue.push({
            formula,
            cell,
            row
        });
        processScrollBookStatsQueue();
    }

    function processScrollBookStatsQueue() {
        while (scrollStatsActiveRequests < SCROLL_STATS_MAX_REQUESTS && scrollStatsQueue.length) {
            const item = scrollStatsQueue.shift();
            scrollStatsActiveRequests += 1;
            loadScrollBookStats(item.formula, item.cell, item.row).finally(function () {
                scrollStatsActiveRequests -= 1;
                processScrollBookStatsQueue();
            });
        }
    }

    async function loadScrollBookStats(formula, cell, row) {
        const key = getFormulaKey(formula);
        cell.dataset.state = 'loading';
        cell.textContent = 'Dang lay...';
        updateScrollBookStatus();

        try {
            const html = await fetchEquipmentStats(formula);
            writeCache(key, html);

            cell.innerHTML = renderCompactStatsHtml(html);
            fillUnknownScrollName(row, formula, html);
            cell.dataset.state = 'done';
        } catch (error) {
            cell.textContent = 'Loi lay stats';
            cell.title = error.message || String(error);
            cell.dataset.state = 'error';
        } finally {
            scrollStatsDone += 1;
            updateScrollBookStatus();
        }
    }

    function updateScrollBookStatus() {
        const status = document.getElementById('tdm-scroll-book-update-status');
        const button = document.getElementById('tdm-scroll-book-update');
        if (!status) {
            return;
        }

        const pending = scrollStatsQueue.length + scrollStatsActiveRequests;
        if (scrollStatsTotal > 0 && (scrollStatsDone < scrollStatsTotal || pending > 0)) {
            status.textContent = ` Updating: ${scrollStatsDone} / ${scrollStatsTotal}`;
            if (button) {
                button.disabled = true;
            }
            return;
        }

        if (button) {
            button.disabled = false;
        }
        status.textContent = ` Cache: ${getRenderedCachedStatsCount()} / ${document.querySelectorAll('#content_2nd .tdm-scroll-book-stats-cell').length}`;
    }

    function getRenderedCachedStatsCount() {
        return Array.from(document.querySelectorAll('#content_2nd .tdm-scroll-book-stats-cell')).filter(function (cell) {
            return cell.dataset.state === 'done';
        }).length;
    }

    function exportScrollBookStatsJson() {
        const items = {};

        Object.keys(localStorage).forEach(function (key) {
            if (!key.startsWith(CACHE_PREFIX)) {
                return;
            }

            try {
                const value = JSON.parse(localStorage.getItem(key));
                if (value && value.html) {
                    items[key.slice(CACHE_PREFIX.length)] = value;
                }
            } catch (error) {
                // Skip invalid cache entries.
            }
        });

        const payload = JSON.stringify({
            version: 1,
            exportedAt: new Date().toISOString(),
            source: 'tdmForgeEquipmentStats',
            items
        }, null, 2);

        const blob = new Blob([payload], {
            type: 'application/json'
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');

        link.href = url;
        link.download = 'tdm-forge-equipment-stats.json';
        document.body.appendChild(link);
        link.click();
        link.remove();

        setTimeout(function () {
            URL.revokeObjectURL(url);
        }, 1000);
    }

    function importScrollBookStatsJson(event) {
        const file = event.target.files && event.target.files[0];
        if (!file) {
            return;
        }

        const reader = new FileReader();
        reader.onload = function () {
            try {
                const payload = JSON.parse(String(reader.result || '{}'));
                const items = payload.items || {};
                let count = 0;

                Object.keys(items).forEach(function (key) {
                    const value = items[key];
                    if (!value || !value.html) {
                        return;
                    }

                    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({
                        createdAt: value.createdAt || Date.now(),
                        html: value.html
                    }));
                    count += 1;
                });

                reloadRenderedScrollBookStatsFromCache();
                updateScrollBookStatus();

                const status = document.getElementById('tdm-scroll-book-update-status');
                if (status) {
                    status.textContent = ` Imported: ${count}`;
                }
            } catch (error) {
                const status = document.getElementById('tdm-scroll-book-update-status');
                if (status) {
                    status.textContent = ' Import JSON failed';
                }
            } finally {
                event.target.value = '';
            }
        };
        reader.readAsText(file);
    }

    function reloadRenderedScrollBookStatsFromCache() {
        Array.from(document.querySelectorAll('#content_2nd .tdm-scroll-book-stats-cell')).forEach(function (cell) {
            const formula = parseFormulaKey(cell.dataset.formulaKey);
            if (!formula) {
                return;
            }

            const html = readCache(getFormulaKey(formula));
            if (!html) {
                return;
            }

            const statsRow = cell.closest('tr');
            const sourceRow = statsRow ? statsRow.previousElementSibling : null;
            cell.innerHTML = renderCompactStatsHtml(html);
            fillUnknownScrollName(sourceRow, formula, html);
            cell.dataset.state = 'done';
        });
    }

    function sortScrollBookTables(mode, ascending) {
        Array.from(document.querySelectorAll('#content_2nd .scroll-books-table tbody')).forEach(function (tbody) {
            const groups = [];
            let row = tbody.firstElementChild;

            while (row) {
                const next = row.nextElementSibling;
                if (row.classList.contains('tdm-scroll-book-stats-row')) {
                    row = next;
                    continue;
                }

                const statsRow = next && next.classList.contains('tdm-scroll-book-stats-row') ? next : null;
                groups.push({
                    row,
                    statsRow,
                    id: getScrollRowId(row),
                    level: getScrollRowLevel(row)
                });

                row = statsRow ? statsRow.nextElementSibling : next;
            }

            groups.sort(function (left, right) {
                if (mode === 'level') {
                    const byLevel = left.level - right.level;
                    const result = byLevel || left.id - right.id;
                    return ascending ? result : -result;
                }

                return left.id - right.id;
            });

            groups.forEach(function (group) {
                tbody.appendChild(group.row);
                if (group.statsRow) {
                    tbody.appendChild(group.statsRow);
                }
            });
        });
    }

    function getScrollRowId(row) {
        const text = row.children[0] ? row.children[0].textContent : '';
        const match = text.match(/\d+/);
        return match ? parseInt(match[0], 10) : Number.MAX_SAFE_INTEGER;
    }

    function getScrollRowLevel(row) {
        const text = row.children[2] ? row.children[2].textContent.trim() : '';
        const match = text.match(/\d+/);
        return match ? parseInt(match[0], 10) : Number.MAX_SAFE_INTEGER;
    }

    function fillUnknownScrollName(row, formula, html) {
        if (!row) {
            return;
        }

        const nameCell = row.children[1];
        const name = extractScrollNameFromStats(formula, html);
        if (nameCell && name && (nameCell.textContent.trim() === '????' || nameCell.classList.contains('tdm-scroll-book-real-name'))) {
            nameCell.textContent = name;
            nameCell.classList.add('tdm-scroll-book-real-name');
        }

        const levelCell = row.children[2];
        const scrollLevel = extractScrollLevelFromStats(html);
        if (levelCell && scrollLevel !== null && (levelCell.textContent.trim() === '??' || levelCell.classList.contains('tdm-scroll-book-real-level'))) {
            levelCell.textContent = String(scrollLevel);
            levelCell.classList.add('tdm-scroll-book-real-level');
        }
    }

    function extractScrollNameFromStats(formula, html) {
        const cards = extractEquipmentCards(html);
        if (!cards.length) {
            return '';
        }

        const title = cards[0].title.split(' / ').filter(Boolean)[0] || '';
        return cleanupEquipmentTitle(title, formula.item);
    }

    function extractScrollLevelFromStats(html) {
        const cards = extractEquipmentCards(html);
        if (!cards.length) {
            return null;
        }

        for (const card of cards) {
            const levelLine = card.stats.find(function (line) {
                return /^Level\s+\d+/i.test(line);
            });
            if (!levelLine) {
                continue;
            }

            const match = levelLine.match(/\d+/);
            if (match) {
                return Math.max(0, parseInt(match[0], 10) - 1);
            }
        }

        return null;
    }

    function cleanupEquipmentTitle(title, itemKey) {
        const itemName = getItemNameFromKey(itemKey);
        let name = String(title || '').replace(/\+/g, '').replace(/\s+/g, ' ').trim();

        if (itemName) {
            name = name
                .replace(new RegExp('(^|\\s)' + escapeRegExp(itemName) + '(\\s|$)', 'i'), ' ')
                .replace(/\s+/g, ' ')
                .trim();
        }

        return name;
    }

    function getItemNameFromKey(itemKey) {
        const option = Array.from(document.querySelectorAll('#basic0 option')).find(function (itemOption) {
            return itemOption.value === itemKey;
        });
        return option ? option.textContent.trim() : '';
    }

    async function updateStats() {
        const formula = getCurrentFormula();
        if (!formula || !formula.item) {
            setStatus('Chua tim thay select prefix/item/suffix.', true);
            return;
        }

        const key = getFormulaKey(formula);
        const seq = ++requestSeq;
        setToolsLink(formula);

        const cachedHtml = readCache(key);
        if (cachedHtml) {
            setStatus('Da lay tu cache.');
            renderStats(formula, cachedHtml);
            return;
        }

        setStatus('Dang lay chi so tu Gladiatus Tools...');

        try {
            const html = await fetchEquipmentStats(formula);
            if (seq !== requestSeq) {
                return;
            }

            writeCache(key, html);
            renderStats(formula, html);
            setStatus('Da cap nhat.');
        } catch (error) {
            if (seq !== requestSeq) {
                return;
            }

            setStatus(error.message || 'Lay chi so that bai.', true);
        }
    }

    function init() {
        scheduleScrollBookStatsInit();

        document.addEventListener('click', function (event) {
            if (event.target.closest('.gca-icon-book, .gca-header-buttons-wrapper')) {
                scheduleScrollBookStatsInit();
                setTimeout(initScrollBookStats, 500);
                setTimeout(initScrollBookStats, 1200);
            }
        }, true);

        const observer = new MutationObserver(function (mutations) {
            const shouldScan = mutations.some(function (mutation) {
                if (mutation.type === 'attributes') {
                    return mutation.target.nodeType === Node.ELEMENT_NODE && (
                        mutation.target.id === 'content_2nd' ||
                        mutation.target.classList.contains('scroll-books-table')
                    );
                }

                return Array.from(mutation.addedNodes).some(function (node) {
                    return node.nodeType === Node.ELEMENT_NODE && (
                        node.id === 'content_2nd' ||
                        node.matches('.scroll-books-table') ||
                        node.querySelector('#content_2nd .scroll-books-table')
                    );
                });
            });

            if (shouldScan) {
                scheduleScrollBookStatsInit();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style', 'class']
        });
    }

    init();
})();
