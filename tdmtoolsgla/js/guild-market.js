(function () {
    'use strict';

    const ENABLED_KEY = 'tdmGuildMarketAutoBuyEnabled';
    const MAX_PRICE_KEY = 'tdmGuildMarketAutoBuyMaxPrice';
    const BOUGHT_IDS_KEY = 'tdmGuildMarketAutoBuyBoughtIds';
    const MIN_GOLD_KEY = 'tdmGuildMarketAutoBuyMinGold';
    const DEFAULT_MAX_PRICE = 100000;
    const DEFAULT_MIN_GOLD = 100000;
    const SELL_DURATION_24H = '3';
    const RUN_COOLDOWN_MS = 3000;
    const INVENTORY_SIZE = { width: 8, height: 5 };
    const FALLBACK_INVENTORY_BAGS = [512, 513, 514, 515];
    const PACKAGE_SCAN_EDGE_PAGES = 2;

    let isRunning = false;

    function parseGold(text) {
        return Number(String(text || '').replace(/[^\d]/g, '')) || 0;
    }

    function formatGold(value) {
        return String(Number(value) || 0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    function getPlayerGold() {
        const goldNode = document.getElementById('sstat_gold_val');
        return goldNode ? parseGold(goldNode.textContent) : 0;
    }

    function getMaxPrice() {
        const saved = parseGold(localStorage.getItem(MAX_PRICE_KEY));
        return saved > 0 ? saved : DEFAULT_MAX_PRICE;
    }

    function setMaxPrice(value) {
        const nextValue = Math.max(1, parseGold(value) || DEFAULT_MAX_PRICE);
        localStorage.setItem(MAX_PRICE_KEY, String(nextValue));
        return nextValue;
    }

    function getMinGold() {
        const saved = parseGold(localStorage.getItem(MIN_GOLD_KEY));
        return saved > 0 ? saved : DEFAULT_MIN_GOLD;
    }

    function setMinGold(value) {
        const nextValue = Math.max(1, parseGold(value) || DEFAULT_MIN_GOLD);
        localStorage.setItem(MIN_GOLD_KEY, String(nextValue));
        return nextValue;
    }

    function isEnabled() {
        return localStorage.getItem(ENABLED_KEY) !== 'false';
    }

    function isAutoGoActive() {
        return sessionStorage.getItem('autoGoActive') === 'true';
    }

    function isGuildMarketPage() {
        const url = new URL(window.location.href);
        return url.searchParams.get('mod') === 'guildMarket';
    }

    function getSecureHash() {
        const url = new URL(window.location.href);
        const queryHash = url.searchParams.get('sh');
        if (queryHash) {
            return queryHash;
        }

        if (typeof secureHash !== 'undefined' && secureHash) {
            return secureHash;
        }

        const hashInput = document.querySelector('input[name="sh"], input[name="secureHash"]');
        return hashInput ? hashInput.value : '';
    }

    function buildGuildMarketUrl() {
        const url = new URL('/game/index.php', window.location.origin);
        url.searchParams.set('mod', 'guildMarket');

        const hash = getSecureHash();
        if (hash) {
            url.searchParams.set('sh', hash);
        }

        return url.toString();
    }

    function maybeGoToGuildMarket() {
        if (!isEnabled() || !isAutoGoActive() || isGuildMarketPage()) {
            return false;
        }

        if (getPlayerGold() < getMinGold()) {
            return false;
        }

        window.location.href = buildGuildMarketUrl();
        return true;
    }

    function setEnabled(enabled) {
        localStorage.setItem(ENABLED_KEY, enabled ? 'true' : 'false');
    }

    function getBoughtIds() {
        try {
            const value = JSON.parse(sessionStorage.getItem(BOUGHT_IDS_KEY) || '[]');
            return Array.isArray(value) ? value : [];
        } catch (error) {
            return [];
        }
    }

    function rememberBoughtId(buyId) {
        const ids = getBoughtIds();
        if (!ids.includes(buyId)) {
            ids.push(buyId);
            sessionStorage.setItem(BOUGHT_IDS_KEY, JSON.stringify(ids.slice(-100)));
        }
    }

    function parseHtml(html) {
        return new DOMParser().parseFromString(html, 'text/html');
    }

    function buildGameUrl(file, params) {
        const sh = getSecureHash();
        const next = new URLSearchParams();

        if (sh) {
            next.set('sh', sh);
        }

        Object.keys(params).forEach(function (key) {
            if (params[key] !== undefined && params[key] !== null) {
                next.set(key, params[key]);
            }
        });

        return file + '?' + next.toString();
    }

    async function gameGet(file, params) {
        const response = await fetch(buildGameUrl(file, params), {
            credentials: 'same-origin',
        });
        const text = await response.text();

        if (!response.ok) {
            throw new Error('HTTP ' + response.status + ': ' + text.slice(0, 120));
        }

        return text;
    }

    async function gameMove(params) {
        const response = await fetch(buildGameUrl('ajax.php', Object.assign({
            a: Date.now(),
        }, params)), {
            credentials: 'same-origin',
            redirect: 'manual',
        });
        const text = await response.text();

        if (response.type === 'opaqueredirect' || response.status === 0) {
            throw new Error('Game redirect sang lobby khi move item.');
        }

        if (!response.ok) {
            throw new Error('HTTP ' + response.status + ': ' + text.slice(0, 120));
        }

        try {
            return JSON.parse(text);
        } catch (error) {
            return text;
        }
    }

    function getInventoryItemIds(root) {
        return Array.from(root.querySelectorAll('#inv [data-item-id]'))
            .map(function (item) {
                return item.dataset.itemId || item.getAttribute('data-item-id') || '';
            })
            .filter(Boolean);
    }

    function getAvailableInventoryBags() {
        const bags = Array.from(document.querySelectorAll('#inventory_nav [data-bag-number]'))
            .filter(function (bag) {
                return bag.getAttribute('data-available') === 'true';
            })
            .map(function (bag) {
                return parseInt(bag.getAttribute('data-bag-number'), 10);
            })
            .filter(function (bag) {
                return !Number.isNaN(bag);
            });

        return bags.length ? bags : FALLBACK_INVENTORY_BAGS;
    }

    function getGridItems(container) {
        return Array.from(container.querySelectorAll('.ui-draggable')).map(function (item) {
            return {
                x: Math.floor(parseInt(item.style.left || item.dataset.positionX || '0', 10) / 32),
                y: Math.floor(parseInt(item.style.top || item.dataset.positionY || '0', 10) / 32),
                w: parseInt(item.dataset.measurementX || '1', 10),
                h: parseInt(item.dataset.measurementY || '1', 10),
                element: item,
            };
        }).filter(function (item) {
            return !Number.isNaN(item.x) && !Number.isNaN(item.y) && item.w > 0 && item.h > 0;
        });
    }

    function createGrid(width, height, items) {
        const grid = [];

        for (let y = 0; y < height; y++) {
            grid[y] = [];
            for (let x = 0; x < width; x++) {
                grid[y][x] = false;
            }
        }

        items.forEach(function (item) {
            for (let y = 0; y < item.h; y++) {
                for (let x = 0; x < item.w; x++) {
                    if (grid[item.y + y] && grid[item.y + y][item.x + x] !== undefined) {
                        grid[item.y + y][item.x + x] = true;
                    }
                }
            }
        });

        return grid;
    }

    function findGridSpot(width, height, grid) {
        for (let y = 0; y <= grid.length - height; y++) {
            for (let x = 0; x <= grid[y].length - width; x++) {
                let free = true;

                for (let dy = 0; dy < height && free; dy++) {
                    for (let dx = 0; dx < width; dx++) {
                        if (!grid[y + dy] || grid[y + dy][x + dx]) {
                            free = false;
                            break;
                        }
                    }
                }

                if (free) {
                    return { x, y };
                }
            }
        }

        return null;
    }

    async function loadInventoryBag(bag) {
        const html = await gameGet('ajax.php', {
            mod: 'inventory',
            submod: 'loadBag',
            bag,
            shopType: 0,
        });
        const doc = parseHtml('<div>' + html + '</div>');
        const container = doc.querySelector('#inv') || doc.body;
        const items = getGridItems(container);

        return {
            bag,
            items,
            grid: createGrid(INVENTORY_SIZE.width, INVENTORY_SIZE.height, items),
        };
    }

    async function getInventorySpot(width, height) {
        for (const bag of getAvailableInventoryBags()) {
            const bagState = await loadInventoryBag(bag);
            const spot = findGridSpot(width, height, bagState.grid);

            if (spot) {
                return { bag, spot };
            }
        }

        return null;
    }

    function getFallbackRow(form) {
        let node = form.nextElementSibling;
        while (node && !node.matches('tr')) {
            node = node.nextElementSibling;
        }
        return node && node.matches('tr') ? node : null;
    }

    function getBuyFields(form, buyId) {
        const fields = {
            buyid: buyId,
            qry: '',
            seller: '',
            f: '0',
            fl: '0',
            fq: '-1',
            s: '',
            p: '1',
            buy: 'Buy',
        };

        if (form) {
            Array.from(form.querySelectorAll('input[name]')).forEach(function (input) {
                fields[input.name] = input.value || '';
            });
        }

        fields.buyid = fields.buyid || buyId;
        fields.buy = fields.buy || 'Buy';
        return fields;
    }

    function getPriceFromRow(row) {
        const cells = row ? row.querySelectorAll('td') : [];
        return cells.length >= 3 ? parseGold(cells[2].textContent) : 0;
    }

    function getGuildMarketItem(form, index) {
        const fallbackRow = form ? getFallbackRow(form) : null;
        const item = (form && form.querySelector('[data-item-id]')) || (fallbackRow && fallbackRow.querySelector('[data-item-id]'));
        const buyIdInput = form && form.querySelector('input[name="buyid"]');
        const row = item && (item.closest('tr') || fallbackRow);

        if (!item || !buyIdInput || !row) {
            return null;
        }

        const submit = form.querySelector('input[type="submit"][name="buy"]') || row.querySelector('input[type="submit"][name="buy"]');
        const price = getPriceFromRow(row);

        return {
            form,
            action: form.getAttribute('action') || '',
            buyId: buyIdInput.value,
            fields: getBuyFields(form, buyIdInput.value),
            price,
            item,
            submit,
            index,
        };
    }

    function getGuildMarketItemFromRow(row, index, forms, buyIdInputs) {
        const item = row.querySelector('[data-item-id]');
        const submit = row.querySelector('input[type="submit"][name="buy"]');
        const buyIdInput = row.querySelector('input[name="buyid"]') || buyIdInputs[index];
        const form = (submit && submit.form) || (buyIdInput && buyIdInput.form) || (item && item.closest('form')) || forms[index] || null;

        if (!item || !buyIdInput) {
            return null;
        }

        return {
            form,
            action: (form && form.getAttribute('action')) || (forms[0] && forms[0].getAttribute('action')) || '',
            buyId: buyIdInput.value,
            fields: getBuyFields(form, buyIdInput.value),
            price: getPriceFromRow(row),
            item,
            submit,
            index,
        };
    }

    function getGuildMarketItems() {
        const forms = Array.from(document.querySelectorAll('#market_table form[name="buyForm"], form[name="buyForm"]'));
        const itemsFromForms = forms
            .map(function (form, index) {
                return getGuildMarketItem(form, index);
            })
            .filter(Boolean);

        if (itemsFromForms.length) {
            return itemsFromForms;
        }

        const rows = Array.from(document.querySelectorAll('#market_item_table tr'))
            .filter(function (row) {
                return row.querySelector('[data-item-id]') || row.querySelector('input[type="submit"][name="buy"]');
            });
        const buyIdInputs = Array.from(document.querySelectorAll('#market_table input[name="buyid"], input[name="buyid"]'));

        return rows
            .map(function (row, index) {
                return getGuildMarketItemFromRow(row, index, forms, buyIdInputs);
            })
            .filter(Boolean);
    }

    function getBuyableItems(remainingGold) {
        const maxPrice = getMaxPrice();
        const boughtIds = getBoughtIds();
        const items = getGuildMarketItems();
        const buyableItems = items
            .filter(function (item) {
                return item &&
                    item.buyId &&
                    item.price > 0 &&
                    item.price <= maxPrice &&
                    item.price <= remainingGold &&
                    !boughtIds.includes(item.buyId) &&
                    (!item.submit || !item.submit.disabled);
            })
            .sort(function (left, right) {
                return left.price - right.price;
            });

        if (!buyableItems.length) {
            const prices = items
                .map(function (item) {
                    return item.price;
                })
                .filter(function (price) {
                    return price > 0;
                })
                .slice(0, 5)
                .map(formatGold);
            setStatus('Da doc ' + items.length + ' mon, gia thay duoc: ' + (prices.join(', ') || 'khong doc duoc gia') + '.');
        }

        return buyableItems;
    }

    async function buyGuildMarketItem(item) {
        const beforeInventoryIds = getInventoryItemIds(document);
        const beforePackages = await getLikelyPackageSnapshot();
        const formData = new URLSearchParams();
        Object.keys(item.fields).forEach(function (key) {
            formData.set(key, item.fields[key]);
        });

        const response = await fetch(item.action || (item.form && item.form.getAttribute('action')) || window.location.href, {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            credentials: 'same-origin',
            redirect: 'manual',
        });

        const text = await response.text();
        if (response.type === 'opaqueredirect' || response.status === 0) {
            throw new Error('Game redirect sang lobby. Hay reload trang roi thu lai.');
        }

        if (!response.ok) {
            throw new Error('HTTP ' + response.status + ': ' + text.slice(0, 120));
        }

        return {
            html: text,
            beforeInventoryIds,
            beforePackages,
        };
    }

    function findBoughtInventoryItem(doc, item, beforeInventoryIds) {
        const beforeIds = beforeInventoryIds || [];
        const inventoryItems = Array.from(doc.querySelectorAll('#inv [data-item-id]'));
        const newItem = inventoryItems.find(function (inventoryItem) {
            return !beforeIds.includes(inventoryItem.dataset.itemId || '');
        });

        if (newItem) {
            return newItem;
        }

        const boughtHash = item.item.dataset.hash || '';
        const boughtPriceGold = item.item.dataset.priceGold || '';

        return inventoryItems.find(function (inventoryItem) {
            if (boughtHash && inventoryItem.dataset.hash === boughtHash) {
                return true;
            }

            if (item.buyId && inventoryItem.dataset.itemId === item.buyId) {
                return true;
            }

            return boughtPriceGold && inventoryItem.dataset.priceGold === boughtPriceGold;
        }) || null;
    }

    function getPackagePageNumbers(root) {
        const pages = Array.from(root.querySelectorAll('.pagination .paging_numbers a, .pagination .paging_numbers_current'))
            .map(function (page) {
                return parseInt(page.textContent.trim(), 10);
            })
            .filter(function (page) {
                return !Number.isNaN(page) && page > 0;
            });

        Array.from(root.querySelectorAll('a[href*="page="]')).forEach(function (link) {
            const matches = (link.getAttribute('href') || '').match(/(?:[?&])page=(\d+)/g) || [];
            matches.forEach(function (match) {
                const page = parseInt(match.replace(/^\D+/, ''), 10);
                if (!Number.isNaN(page) && page > 0) {
                    pages.push(page);
                }
            });
        });

        const maxPage = pages.length ? Math.max.apply(null, pages) : 1;
        const pageNumbers = [];
        for (let page = 1; page <= maxPage; page++) {
            pageNumbers.push(page);
        }

        return pageNumbers;
    }

    function getLikelyPackagePageNumbers(root) {
        const pages = getPackagePageNumbers(root);
        const maxPage = pages.length ? Math.max.apply(null, pages) : 1;
        const selected = [];

        for (let page = maxPage; page > Math.max(0, maxPage - PACKAGE_SCAN_EDGE_PAGES); page--) {
            selected.push(page);
        }

        for (let page = 1; page <= Math.min(PACKAGE_SCAN_EDGE_PAGES, maxPage); page++) {
            selected.push(page);
        }

        return selected.filter(function (page, index, list) {
            return page > 0 && list.indexOf(page) === index;
        });
    }

    function getPackageItemData(packageItem) {
        const item = packageItem.querySelector('[data-content-type]');
        const input = packageItem.querySelector('input[value]');

        if (!item) {
            return null;
        }

        const itemType = (item.dataset.basis || '').split('-')[0] || item.dataset.contentType || '';
        const containerId = (input && input.value) || item.dataset.containerNumber || packageItem.dataset.containerNumber;

        if (!containerId) {
            return null;
        }

        return {
            element: packageItem,
            containerId: String(containerId).replace(/^-/, ''),
            item,
            itemId: item.dataset.itemId || '',
            hash: item.dataset.hash || '',
            basis: item.dataset.basis || '',
            priceGold: item.dataset.priceGold || '',
            amount: parseInt(item.dataset.amount || '1', 10) || 1,
            width: itemType === '14' ? 1 : parseInt(item.dataset.measurementX || '1', 10) || 1,
            height: itemType === '14' ? 1 : parseInt(item.dataset.measurementY || '1', 10) || 1,
        };
    }

    function packageMatchesBoughtItem(packageItem, boughtMarketItem) {
        const boughtHash = boughtMarketItem.item.dataset.hash || '';
        const boughtBasis = boughtMarketItem.item.dataset.basis || '';
        const boughtPriceGold = boughtMarketItem.item.dataset.priceGold || '';

        if (boughtHash && packageItem.hash === boughtHash) {
            return true;
        }

        if (boughtBasis && packageItem.basis === boughtBasis && boughtPriceGold && packageItem.priceGold === boughtPriceGold) {
            return true;
        }

        return false;
    }

    async function loadPackagePageItems(page, firstPageDoc) {
        const doc = page === 1 && firstPageDoc ? firstPageDoc : parseHtml(await gameGet('index.php', {
            mod: 'packages',
            f: '0',
            fq: '-1',
            qry: '',
            page,
        }));

        return Array.from(doc.querySelectorAll('#packages .packageItem'))
            .map(getPackageItemData)
            .filter(Boolean)
            .map(function (packageItem) {
                packageItem.page = page;
                return packageItem;
            });
    }

    async function getLikelyPackageSnapshot() {
        const firstPageHtml = await gameGet('index.php', {
            mod: 'packages',
            f: '0',
            fq: '-1',
            qry: '',
            page: 1,
        });
        const firstPageDoc = parseHtml(firstPageHtml);
        let pages = getLikelyPackagePageNumbers(firstPageDoc);

        if (pages.length === 1 && pages[0] === 1) {
            const highPageDoc = parseHtml(await gameGet('index.php', {
                mod: 'packages',
                f: '0',
                fq: '-1',
                qry: '',
                page: 999,
            }));
            pages = getLikelyPackagePageNumbers(highPageDoc);

            if (pages.length === 1 && pages[0] === 1) {
                pages = [999, 998, 1, 2];
            }
        }

        const items = [];

        for (const page of pages) {
            items.push.apply(items, await loadPackagePageItems(page, firstPageDoc));
        }

        return {
            pages,
            items,
            containerIds: items.map(function (packageItem) {
                return packageItem.containerId;
            }),
        };
    }

    async function findBoughtPackageItem(boughtMarketItem, beforePackages) {
        const afterPackages = await getLikelyPackageSnapshot();
        const beforeIds = beforePackages && Array.isArray(beforePackages.containerIds) ? beforePackages.containerIds : [];
        const newPackage = afterPackages.items.find(function (packageItem) {
            return !beforeIds.includes(packageItem.containerId);
        });

        if (newPackage) {
            setStatus('Tim thay package moi o page ' + newPackage.page + ', container ' + newPackage.containerId + '.');
            return newPackage;
        }

        const matchedPackage = afterPackages.items.find(function (packageItem) {
            return packageMatchesBoughtItem(packageItem, boughtMarketItem);
        });

        if (matchedPackage) {
            setStatus('Tim thay package khop item o page ' + matchedPackage.page + '.');
            return matchedPackage;
        }

        setStatus('Da quet package pages ' + afterPackages.pages.join(', ') + ' nhung chua thay package moi.');
        return null;
    }

    async function movePackageToInventory(packageItem) {
        const inventory = await getInventorySpot(packageItem.width, packageItem.height);

        if (!inventory) {
            throw new Error('Khong co o trong trong inventory de lay item tu Packages.');
        }

        const moved = await gameMove({
            mod: 'inventory',
            submod: 'move',
            from: '-' + packageItem.containerId,
            fromX: 1,
            fromY: 1,
            to: inventory.bag,
            toX: inventory.spot.x + 1,
            toY: inventory.spot.y + 1,
            amount: packageItem.amount,
        });

        if (!moved || moved.error) {
            throw new Error('Loi move package vao inventory: ' + JSON.stringify(moved));
        }

        return inventory;
    }

    async function findMovedInventoryItem(packageItem, inventory) {
        const bagState = await loadInventoryBag(inventory.bag);

        return bagState.items
            .map(function (gridItem) {
                return gridItem.element;
            })
            .find(function (inventoryItem) {
                if (packageItem.hash && inventoryItem.dataset.hash === packageItem.hash) {
                    return true;
                }

                if (packageItem.basis && inventoryItem.dataset.basis === packageItem.basis && packageItem.priceGold && inventoryItem.dataset.priceGold === packageItem.priceGold) {
                    return true;
                }

                return inventoryItem.dataset.positionX === String(inventory.spot.x + 1) &&
                    inventoryItem.dataset.positionY === String(inventory.spot.y + 1);
            }) || null;
    }

    async function sellBoughtItem(buyResult, item) {
        const doc = parseHtml(buyResult.html);
        const sellForm = doc.getElementById('sellForm') || document.getElementById('sellForm');
        let boughtInventoryItem = findBoughtInventoryItem(doc, item, buyResult.beforeInventoryIds);

        if (!sellForm) {
            throw new Error('Khong tim thay sellForm sau khi mua.');
        }

        if (!boughtInventoryItem) {
            setStatus('Khong thay item trong inventory, dang tim trong Packages...');
            const packageItem = await findBoughtPackageItem(item, buyResult.beforePackages);

            if (!packageItem) {
                throw new Error('Da mua nhung khong tim thay item trong Packages de ban lai.');
            }

            const inventory = await movePackageToInventory(packageItem);
            boughtInventoryItem = await findMovedInventoryItem(packageItem, inventory);

            if (!boughtInventoryItem) {
                throw new Error('Da lay package vao inventory nhung khong tim thay item vua move.');
            }
        }

        const sellId = boughtInventoryItem.dataset.itemId || boughtInventoryItem.getAttribute('data-item-id');
        const formData = new URLSearchParams();
        formData.set('sellid', sellId);
        formData.set('preis', String(item.price));
        formData.set('dauer', SELL_DURATION_24H);
        formData.set('anbieten', 'Offer');

        const response = await fetch(sellForm.getAttribute('action') || window.location.href, {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            credentials: 'same-origin',
            redirect: 'manual',
        });

        const text = await response.text();
        if (response.type === 'opaqueredirect' || response.status === 0) {
            throw new Error('Game redirect sang lobby khi ban lai. Hay reload trang roi thu lai.');
        }

        if (!response.ok) {
            throw new Error('Loi ban lai HTTP ' + response.status + ': ' + text.slice(0, 120));
        }

        return text;
    }

    function setStatus(message) {
        console.log('TDM Guild Market:', message);
    }

    async function runAutoBuy() {
        if (isRunning || !isEnabled()) {
            return;
        }

        const lastRunAt = Number(sessionStorage.getItem('tdmGuildMarketAutoBuyLastRunAt') || '0');
        if (Date.now() - lastRunAt < RUN_COOLDOWN_MS) {
            return;
        }
        sessionStorage.setItem('tdmGuildMarketAutoBuyLastRunAt', String(Date.now()));

        let remainingGold = getPlayerGold();
        const minGold = getMinGold();
        const maxPrice = getMaxPrice();
        const candidates = getBuyableItems(remainingGold);

        if (!isAutoGoActive()) {
            setStatus('Dang cho Auto Go bat de check giong auction.');
            return;
        }

        if (remainingGold < 1) {
            setStatus('Khong doc duoc gold hien tai.');
            return;
        }

        if (remainingGold < minGold) {
            setStatus('Gold chua du ' + formatGold(minGold) + ', dung check.');
            return;
        }

        if (!candidates.length) {
            setStatus('Dang bat, chua co mon <= ' + formatGold(maxPrice) + ' phu hop.');
            return;
        }

        isRunning = true;
        let bought = 0;
        let spent = 0;

        try {
            for (const item of candidates) {
                if (!isEnabled() || item.price > remainingGold) {
                    break;
                }

                setStatus('Dang mua buyid ' + item.buyId + ' gia ' + formatGold(item.price) + '...');
                const buyResult = await buyGuildMarketItem(item);
                rememberBoughtId(item.buyId);

                setStatus('Da mua buyid ' + item.buyId + ', dang ban lai 24h gia ' + formatGold(item.price) + '...');
                await sellBoughtItem(buyResult, item);

                bought += 1;
                spent += item.price;
                remainingGold -= item.price;

                break;
            }

            if (bought > 0) {
                setStatus('Da mua va ban lai ' + bought + ' mon, gia ' + formatGold(spent) + '. Dang reload...');
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            }
        } catch (error) {
            console.warn('TDM Guild Market auto buy failed:', error);
            setStatus('Loi auto buy: ' + (error.message || error));
        } finally {
            isRunning = false;
        }
    }

    function init() {
        if (!isGuildMarketPage()) {
            maybeGoToGuildMarket();
            return;
        }

        setTimeout(runAutoBuy, 500);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
