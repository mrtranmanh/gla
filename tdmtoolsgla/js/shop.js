(function () {
    'use strict';

    if (!window.location.href.includes('mod=packages')) {
        return;
    }

    const SHOP_SIZE = { width: 6, height: 8 };
    const INVENTORY_SIZE = { width: 8, height: 5 };
    const FALLBACK_INVENTORY_BAGS = [512, 513, 514, 515];
    const SELL_FILTER_STORAGE = {
        itemTypes: 'tdmSellShopItemTypes',
        itemQualities: 'tdmSellShopItemQualities',
        goldLimit: 'tdmSellShopGoldLimit',
    };
    const ITEM_TYPES = [
        { value: '1', icon: 'item-i-1-13', label: 'Weapons' },
        { value: '2', icon: 'item-i-2-10 icon-big-size', label: 'Shields' },
        { value: '3', icon: 'item-i-3-2 icon-big-size', label: 'Chest Armour' },
        { value: '4', icon: 'item-i-4-11 icon-big-size', label: 'Helmets' },
        { value: '5', icon: 'item-i-5-7 icon-big-size', label: 'Gloves' },
        { value: '8', icon: 'item-i-8-10 icon-big-size', label: 'Shoes' },
        { value: '6', icon: 'item-i-6-1 icon-small-size', label: 'Rings' },
        { value: '9', icon: 'item-i-9-1 icon-small-size', label: 'Amulets' },
        { value: '7', icon: 'item-i-7-1 icon-small-size', label: 'Usable' },
        { value: '21', icon: 'item-i-21-6 icon-small-size', label: 'Event Items' },
        { value: '11', icon: 'item-i-11-5 icon-medium-size', label: 'Reinforcements' },
        { value: '12', icon: 'item-i-12-17 icon-medium-size', label: 'Upgrades' },
        { value: '15', icon: 'item-i-15-5 icon-medium-size', label: 'Mercenary' },
        { value: '13', icon: 'item-i-13-2 icon-medium-size', label: 'Recipes' },
        { value: '18', icon: 'item-i-18-4 icon-medium-size', label: 'Forging goods' },
        { value: '19', icon: 'item-i-19-11 icon-medium-size', label: 'Tools' },
        { value: '20', icon: 'item-i-20-13 icon-medium-size', label: 'Scroll' },
        { value: '12-2', icon: 'item-i-12-2 icon-medium-size', label: 'Grindstone' },
        { value: '12-1', icon: 'item-i-12-1 icon-medium-size', label: 'Small Grindstone' },
        { value: '12-4', icon: 'item-i-12-4 icon-medium-size', label: 'Protective Gear' },
        { value: '12-3', icon: 'item-i-12-3 icon-medium-size', label: 'Shred of leather' },
        { value: '12-22', icon: 'item-i-12-22 icon-medium-size', label: 'Damage Oil' },
        { value: '12-20', icon: 'item-i-12-20 icon-medium-size', label: 'Armour Oil' },
        { value: '12-19', icon: 'item-i-12-19 icon-medium-size', label: 'Dexterity Oil' },
        { value: '12-21', icon: 'item-i-12-21 icon-medium-size', label: 'Agility Oil' },
        { value: '12-18', icon: 'item-i-12-18 icon-medium-size', label: 'Charisma Oil' },
        { value: '12-23', icon: 'item-i-12-23 icon-medium-size', label: 'Intelligence Oil' },
        { value: '12-8', icon: 'item-i-12-8 icon-medium-size', label: 'Yellow powder' },
        { value: '12-10', icon: 'item-i-12-10 icon-medium-size', label: 'Green powder' },
        { value: '12-6', icon: 'item-i-12-6 icon-medium-size', label: 'Blue powder' },
        { value: '12-17', icon: 'item-i-12-17 icon-medium-size', label: 'Red powder' },
        { value: '12-12', icon: 'item-i-12-12 icon-medium-size', label: 'Orange powder' },
        { value: '12-14', icon: 'item-i-12-14 icon-medium-size', label: 'Violet powder' },
        { value: '12-7', icon: 'item-i-12-7 icon-medium-size', label: 'Yellow dust' },
        { value: '12-9', icon: 'item-i-12-9 icon-medium-size', label: 'Green dust' },
        { value: '12-5', icon: 'item-i-12-5 icon-medium-size', label: 'Blue dust' },
        { value: '12-16', icon: 'item-i-12-16 icon-medium-size', label: 'Red dust' },
        { value: '12-11', icon: 'item-i-12-11 icon-medium-size', label: 'Orange dust' },
        { value: '12-13', icon: 'item-i-12-13 icon-medium-size', label: 'Violet dust' },
        { value: '7-23', icon: 'item-i-7-23 icon-medium-size', label: '+1 dungeon point' },
        { value: '7-24', icon: 'item-i-7-24 icon-medium-size', label: '+1 expedition point' },
        { value: '7-25', icon: 'item-i-7-25 icon-medium-size', label: 'Skip dungeon cooldown' },
        { value: '7-26', icon: 'item-i-7-26 icon-medium-size', label: 'Skip expedition cooldown' },
        { value: '7-27', icon: 'item-i-7-27 icon-medium-size', label: '+4 hours stable boy wages' },
        { value: '7-29', icon: 'item-i-7-29 icon-medium-size', label: '+1 ruby' },
        { value: '7-31', icon: 'item-i-7-31 icon-medium-size', label: 'Skip quest cooldown' },
    ];
    const ITEM_QUALITIES = [
        { value: '-1', label: 'White', color: 'white' },
        { value: '0', label: 'Green', color: 'green' },
        { value: '1', label: 'Blue', color: 'blue' },
        { value: '2', label: 'Purple', color: 'purple' },
        { value: '3', label: 'Orange', color: 'orange' },
        { value: '4', label: 'Red', color: 'red' },
    ];
    const SHOP_PAGES = [
        { sub: 1, subsub: 2 },
        { sub: 2, subsub: 2 },
        { sub: 3, subsub: 2 },
        { sub: 4, subsub: 2 },
        { sub: 5, subsub: 2 },
        { sub: 5, subsub: 1 },
        { sub: 6, subsub: 2 },
    ];

    let isSelling = false;
    let shouldStop = false;

    function getQuery() {
        return new URLSearchParams(window.location.search);
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

        const hashLink = document.querySelector('a[href*="sh="], form[action*="sh="]');
        const hashSource = hashLink && (hashLink.getAttribute('href') || hashLink.getAttribute('action'));
        const hashMatch = hashSource && hashSource.match(/[?&]sh=([^&]+)/);
        if (hashMatch) {
            return hashMatch[1];
        }

        return '';
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

        return `${file}?${next.toString()}`;
    }

    async function gameMove(params) {
        const response = await fetch(buildGameUrl('ajax.php', Object.assign({
            a: Date.now(),
        }, params)), {
            credentials: 'same-origin',
            redirect: 'manual',
        });

        if (response.type === 'opaqueredirect' || response.status === 0) {
            throw new Error('Game redirect sang lobby. Hay reload trang packages hoac dang nhap lai.');
        }

        const text = await response.text();

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${text.slice(0, 120)}`);
        }

        try {
            return JSON.parse(text);
        } catch (error) {
            return text;
        }
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

    function parseHtml(html) {
        return new DOMParser().parseFromString(html, 'text/html');
    }

    function getGridItems(container) {
        return Array.from(container.querySelectorAll('.ui-draggable')).map(function (item) {
            return {
                x: Math.floor(parseInt(item.style.left || item.dataset.positionX || '0', 10) / 32),
                y: Math.floor(parseInt(item.style.top || item.dataset.positionY || '0', 10) / 32),
                w: parseInt(item.dataset.measurementX || '1', 10),
                h: parseInt(item.dataset.measurementY || '1', 10),
                amount: parseInt(item.dataset.amount || '1', 10) || 1,
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

    function cloneGrid(grid) {
        return grid.map(function (row) {
            return row.slice();
        });
    }

    function markGrid(grid, x, y, width, height, value) {
        for (let itemY = 0; itemY < height; itemY++) {
            for (let itemX = 0; itemX < width; itemX++) {
                if (grid[y + itemY] && grid[y + itemY][x + itemX] !== undefined) {
                    grid[y + itemY][x + itemX] = value;
                }
            }
        }
    }

    function getGridSize(container, fallback) {
        const style = container.getAttribute('style') || '';
        const widthMatch = style.match(/width\s*:\s*(\d+)px/i);
        const heightMatch = style.match(/height\s*:\s*(\d+)px/i);
        const width = widthMatch ? Math.floor(parseInt(widthMatch[1], 10) / 32) : fallback.width;
        const height = heightMatch ? Math.floor(parseInt(heightMatch[1], 10) / 32) : fallback.height;

        return { width, height };
    }

    function findGridSpot(width, height, grid) {
        for (let y = 0; y <= grid.length - height; y++) {
            for (let x = 0; x <= grid[0].length - width; x++) {
                let fits = true;

                for (let itemY = 0; itemY < height && fits; itemY++) {
                    for (let itemX = 0; itemX < width; itemX++) {
                        if (grid[y + itemY][x + itemX]) {
                            fits = false;
                            break;
                        }
                    }
                }

                if (fits) {
                    for (let itemY = 0; itemY < height; itemY++) {
                        for (let itemX = 0; itemX < width; itemX++) {
                            grid[y + itemY][x + itemX] = true;
                        }
                    }

                    return { x, y };
                }
            }
        }

        return null;
    }

    function itemOverlapsRect(item, x, y, width, height) {
        return item.x < x + width &&
            item.x + item.w > x &&
            item.y < y + height &&
            item.y + item.h > y;
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

    async function loadInventoryBag(bag) {
        const html = await gameGet('ajax.php', {
            mod: 'inventory',
            submod: 'loadBag',
            bag,
            shopType: 0,
        });
        const doc = parseHtml(`<div>${html}</div>`);
        const container = doc.querySelector('#inv') || doc.body;
        const size = getGridSize(container, INVENTORY_SIZE);
        const items = getGridItems(container);

        return {
            bag,
            size,
            items,
            grid: createGrid(size.width, size.height, items),
        };
    }

    function getPackageItemData(packageItem) {
        const item = packageItem.querySelector('[data-content-type]');
        const input = packageItem.querySelector('input[value]');

        if (!item) {
            return null;
        }

        const basis = item.dataset.basis || '';
        const contentType = item.dataset.contentType || '';
        const itemType = basis.split('-')[0] || contentType;

        if (itemType === '14') {
            return null;
        }

        const inputContainerId = input && input.value;
        const dataContainerId = item.dataset.containerNumber || packageItem.dataset.containerNumber;
        const containerId = inputContainerId || dataContainerId;

        if (!containerId) {
            return null;
        }

        return {
            element: packageItem,
            containerId: String(containerId).replace(/^-/, ''),
            itemType,
            basis,
            quality: item.dataset.quality || '0',
            amount: parseInt(item.dataset.amount || '1', 10) || 1,
            width: parseInt(item.dataset.measurementX || '1', 10) || 1,
            height: parseInt(item.dataset.measurementY || '1', 10) || 1,
        };
    }

    function getStoredFilterValues(key, fallback) {
        const savedValue = localStorage.getItem(key);
        if (!savedValue) {
            return fallback.slice();
        }

        try {
            const parsedValue = JSON.parse(savedValue);
            if (Array.isArray(parsedValue)) {
                return parsedValue.map(String);
            }
        } catch (error) {
            return savedValue.split(',').map(function (value) {
                return value.trim();
            }).filter(Boolean);
        }

        return fallback.slice();
    }

    function setStoredFilterValues(key, values) {
        localStorage.setItem(key, JSON.stringify(values));
    }

    function parseGoldValue(value) {
        if (value === null || value === undefined) {
            return 0;
        }

        const normalizedValue = String(value).trim().toLowerCase();
        if (!normalizedValue) {
            return 0;
        }

        const multiplier = normalizedValue.endsWith('k') ? 1000 :
            normalizedValue.endsWith('m') ? 1000000 : 1;
        const numericValue = Number(normalizedValue
            .replace(/[km]$/i, '')
            .replace(/[^\d]/g, ''));

        return Number.isFinite(numericValue) ? numericValue * multiplier : 0;
    }

    function formatGoldValue(value) {
        return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    function getStoredGoldLimit() {
        return parseGoldValue(localStorage.getItem(SELL_FILTER_STORAGE.goldLimit));
    }

    function getActiveGoldLimit() {
        const goldLimitInput = document.getElementById('tdm-sell-shop-gold-limit');
        if (!goldLimitInput) {
            return getStoredGoldLimit();
        }

        const goldLimit = setStoredGoldLimit(goldLimitInput.value);
        goldLimitInput.value = goldLimit > 0 ? formatGoldValue(goldLimit) : '';

        return goldLimit;
    }

    function setStoredGoldLimit(value) {
        const goldLimit = parseGoldValue(value);

        if (goldLimit > 0) {
            localStorage.setItem(SELL_FILTER_STORAGE.goldLimit, String(goldLimit));
        } else {
            localStorage.removeItem(SELL_FILTER_STORAGE.goldLimit);
        }

        return goldLimit;
    }

    function getCurrentGold() {
        const gold = document.getElementById('sstat_gold_val');
        return parseGoldValue(gold && gold.textContent);
    }

    function getSellFilters() {
        return {
            itemTypes: getStoredFilterValues(SELL_FILTER_STORAGE.itemTypes, ITEM_TYPES.map(function (type) {
                return type.value;
            })),
            itemQualities: getStoredFilterValues(SELL_FILTER_STORAGE.itemQualities, ITEM_QUALITIES.map(function (quality) {
                return quality.value;
            })),
        };
    }

    function packageItemMatchesSellFilters(item, filters) {
        return (filters.itemTypes.includes(item.itemType) || filters.itemTypes.includes(item.basis)) &&
            filters.itemQualities.includes(item.quality);
    }

    function getPackageFilterParams() {
        const query = getQuery();
        const filterForm = document.getElementById('pf');
        const formData = filterForm ? new FormData(filterForm) : null;

        return {
            f: formData && formData.get('f') !== null ? formData.get('f') : (query.get('f') || '0'),
            fq: formData && formData.get('fq') !== null ? formData.get('fq') : (query.get('fq') || '-1'),
            qry: formData && formData.get('qry') !== null ? formData.get('qry') : (query.get('qry') || ''),
        };
    }

    function getPackagePageNumbers() {
        const pages = Array.from(document.querySelectorAll('.pagination .paging_numbers a, .pagination .paging_numbers_current'))
            .map(function (page) {
                return parseInt(page.textContent.trim(), 10);
            })
            .filter(function (page) {
                return !Number.isNaN(page) && page > 0;
            });

        Array.from(document.querySelectorAll('.pagination a[href*="page="]')).forEach(function (link) {
            const matches = link.getAttribute('href').match(/(?:[?&])page=(\d+)/g) || [];
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

    function getCurrentPackagePage() {
        const currentPage = document.querySelector('.pagination .paging_numbers_current');
        if (currentPage) {
            const page = parseInt(currentPage.textContent.trim(), 10);
            if (!Number.isNaN(page) && page > 0) {
                return page;
            }
        }

        return parseInt(getQuery().get('page') || '1', 10);
    }

    async function getPackageItemsFromPage(page, filters) {
        const currentPage = getCurrentPackagePage();
        let doc = document;

        if (page !== currentPage) {
            setStatus(`Dang tai package page ${page}...`);
            const html = await gameGet('index.php', Object.assign({
                mod: 'packages',
                page,
            }, getPackageFilterParams()));
            doc = parseHtml(html);
        }

        return Array.from(doc.querySelectorAll('#packages .packageItem'))
            .map(getPackageItemData)
            .filter(Boolean)
            .filter(function (item) {
                return packageItemMatchesSellFilters(item, filters);
            })
            .map(function (item) {
                item.page = page;
                return item;
            });
    }

    async function getFilteredPackageItems(filters) {
        const pages = getPackagePageNumbers();
        const items = [];

        for (const page of pages) {
            if (shouldStop) {
                break;
            }

            const pageItems = await getPackageItemsFromPage(page, filters);
            items.push.apply(items, pageItems);
        }

        return items.sort(function (left, right) {
            return (left.width * left.height) - (right.width * right.height);
        });
    }

    function setStatus(text) {
        let status = document.getElementById('tdm-sell-shop-status');

        if (!status) {
            status = document.createElement('span');
            status.id = 'tdm-sell-shop-status';
            status.style.marginLeft = '8px';
            status.style.color = '#f3d27a';
            const actions = document.getElementById('tdm-sell-shop-actions');
            if (actions) {
                actions.appendChild(status);
            }
        }

        status.textContent = text;
        console.log(`TDM sell to shop: ${text}`);
    }

    function describeApiError(result) {
        if (!result) {
            return 'Khong co response tu game.';
        }

        if (typeof result === 'string') {
            return result.replace(/\s+/g, ' ').slice(0, 160);
        }

        if (result.error) {
            return typeof result.error === 'string' ? result.error : JSON.stringify(result.error).slice(0, 160);
        }

        if (result.message) {
            return result.message;
        }

        return JSON.stringify(result).slice(0, 160);
    }

    function updateGold(header) {
        if (!header || !header.gold) {
            return;
        }

        const gold = document.getElementById('sstat_gold_val');
        if (gold) {
            gold.textContent = header.gold.text || header.gold.value;
        }
    }

    function getUpdatedGold(header) {
        if (header && header.gold) {
            return parseGoldValue(header.gold.text || header.gold.value);
        }

        return getCurrentGold();
    }

    async function getInventorySpot(width, height) {
        for (const bag of getAvailableInventoryBags()) {
            const bagState = await loadInventoryBag(bag);
            const spot = findGridSpot(width, height, cloneGrid(bagState.grid));

            if (spot) {
                return { bag, spot };
            }
        }

        return null;
    }

    function findMovableRoomPlan(bagState, width, height) {
        for (let y = 0; y <= bagState.size.height - height; y++) {
            for (let x = 0; x <= bagState.size.width - width; x++) {
                const blockers = bagState.items.filter(function (item) {
                    return itemOverlapsRect(item, x, y, width, height);
                });

                if (!blockers.length) {
                    return { spot: { x, y }, moves: [] };
                }

                const plannedGrid = cloneGrid(bagState.grid);
                markGrid(plannedGrid, x, y, width, height, true);

                const moves = [];
                const sortedBlockers = blockers.slice().sort(function (left, right) {
                    return (right.w * right.h) - (left.w * left.h);
                });

                for (const blocker of sortedBlockers) {
                    const destination = findGridSpot(blocker.w, blocker.h, plannedGrid);
                    if (!destination) {
                        moves.length = 0;
                        break;
                    }

                    moves.push({
                        fromX: blocker.x + 1,
                        fromY: blocker.y + 1,
                        toX: destination.x + 1,
                        toY: destination.y + 1,
                        amount: blocker.amount,
                    });
                }

                if (moves.length === blockers.length) {
                    return { spot: { x, y }, moves };
                }
            }
        }

        return null;
    }

    async function moveInventoryWithinBag(bag, move) {
        return gameMove({
            mod: 'inventory',
            submod: 'move',
            from: bag,
            fromX: move.fromX,
            fromY: move.fromY,
            to: bag,
            toX: move.toX,
            toY: move.toY,
            amount: move.amount,
        });
    }

    async function getInventorySpotWithCleanup(width, height) {
        const directSpot = await getInventorySpot(width, height);
        if (directSpot) {
            return directSpot;
        }

        for (const bag of getAvailableInventoryBags()) {
            const bagState = await loadInventoryBag(bag);
            const plan = findMovableRoomPlan(bagState, width, height);

            if (!plan || !plan.moves.length) {
                continue;
            }

            setStatus(`Dang don tui ${bag} de tao o ${width}x${height}...`);
            let movedAll = true;

            for (const move of plan.moves) {
                const moved = await moveInventoryWithinBag(bag, move);
                if (!moved || moved.error) {
                    console.warn('TDM sell to shop: cleanup inventory move failed', moved);
                    movedAll = false;
                    break;
                }
            }

            if (movedAll) {
                return { bag, spot: plan.spot };
            }
        }

        return null;
    }

    async function getShopMaps() {
        const maps = [];

        for (const page of SHOP_PAGES) {
            const html = await gameGet('index.php', Object.assign({ mod: 'inventory' }, page));
            const doc = parseHtml(html);
            const shop = doc.querySelector('#shop');

            if (!shop) {
                continue;
            }

            const containerId = shop.getAttribute('data-container-number');
            if (!containerId) {
                continue;
            }

            const size = getGridSize(shop, SHOP_SIZE);

            maps.push({
                containerId,
                grid: createGrid(size.width, size.height, getGridItems(shop)),
            });
        }

        return maps;
    }

    function findShopSpot(shopMaps, width, height) {
        for (const shopMap of shopMaps) {
            const spot = findGridSpot(width, height, shopMap.grid);

            if (spot) {
                return {
                    containerId: shopMap.containerId,
                    spot,
                    grid: shopMap.grid,
                };
            }
        }

        return null;
    }

    async function movePackageToInventory(item, inventory) {
        return gameMove({
            mod: 'inventory',
            submod: 'move',
            from: `-${item.containerId}`,
            fromX: 1,
            fromY: 1,
            to: inventory.bag,
            toX: inventory.spot.x + 1,
            toY: inventory.spot.y + 1,
            amount: item.amount,
        });
    }

    async function moveInventoryToShop(item, inventory, shop) {
        return gameMove({
            mod: 'inventory',
            submod: 'move',
            from: inventory.bag,
            fromX: inventory.spot.x + 1,
            fromY: inventory.spot.y + 1,
            to: shop.containerId,
            toX: shop.spot.x + 1,
            toY: shop.spot.y + 1,
            amount: item.amount,
        });
    }

    async function sellVisiblePackages(button) {
        if (isSelling) {
            shouldStop = true;
            setStatus('Dang dung...');
            return;
        }

        if (!getSecureHash()) {
            setStatus('Khong tim thay sh. Hay reload trang packages roi thu lai.');
            return;
        }

        const filters = getSellFilters();
        const goldLimit = getActiveGoldLimit();
        const currentGold = getCurrentGold();

        if (goldLimit > 0 && currentGold >= goldLimit) {
            setStatus(`Gold hien tai da dat gioi han ${formatGoldValue(goldLimit)}.`);
            return;
        }

        setStatus('Dang quet cac page packages...');
        const items = await getFilteredPackageItems(filters);

        if (!items.length) {
            setStatus('Khong co item khop filter de ban.');
            return;
        }

        const limitText = goldLimit > 0 ? `\nDung khi gold dat ${formatGoldValue(goldLimit)}.` : '';
        if (!confirm(`Ban ${items.length} item khop filter trong tat ca page packages vao shop?${limitText}`)) {
            return;
        }

        isSelling = true;
        shouldStop = false;
        button.textContent = 'Stop sell';

        let sold = 0;
        let skipped = 0;
        let finalStatus = '';

        try {
            setStatus('Dang kiem tra o trong shop...');
            const shopMaps = await getShopMaps();

            if (!shopMaps.length) {
                finalStatus = 'Khong tim thay shop.';
                setStatus(finalStatus);
                return;
            }

            for (let index = 0; index < items.length; index++) {
                if (shouldStop) {
                    break;
                }

                if (goldLimit > 0 && getCurrentGold() >= goldLimit) {
                    finalStatus = `Da dat gioi han ${formatGoldValue(goldLimit)} gold.`;
                    setStatus(finalStatus);
                    break;
                }

                const item = items[index];
                setStatus(`Dang ban ${index + 1}/${items.length}...`);

                const shop = findShopSpot(shopMaps, item.width, item.height);
                if (!shop) {
                    finalStatus = 'Shop da day.';
                    setStatus(finalStatus);
                    break;
                }

                const inventory = await getInventorySpotWithCleanup(item.width, item.height);
                if (!inventory) {
                    skipped++;
                    finalStatus = `Bo qua item ${item.width}x${item.height}: shop co cho, nhung inventory khong co o tam.`;
                    setStatus(finalStatus);
                    continue;
                }

                const moved = await movePackageToInventory(item, inventory);
                if (!moved || moved.error || !moved.to) {
                    console.warn('TDM sell to shop: move package failed', moved);
                    finalStatus = `Loi lay item tu package: ${describeApiError(moved)}`;
                    setStatus(finalStatus);
                    continue;
                }

                const soldResult = await moveInventoryToShop(item, inventory, shop);
                if (!soldResult || soldResult.error) {
                    console.warn('TDM sell to shop: sell failed', soldResult);
                    finalStatus = `Loi ban vao shop: ${describeApiError(soldResult)}`;
                    setStatus(finalStatus);
                    continue;
                }

                updateGold(soldResult.header);
                if (goldLimit > 0 && getUpdatedGold(soldResult.header) >= goldLimit) {
                    shouldStop = true;
                    finalStatus = `Da dat gioi han ${formatGoldValue(goldLimit)} gold.`;
                }

                markGrid(shop.grid, shop.spot.x, shop.spot.y, item.width, item.height, true);
                item.element.remove();
                sold++;
            }
        } catch (error) {
            console.error('TDM sell to shop failed', error);
            finalStatus = `Loi: ${error.message || error}`;
            setStatus(finalStatus);
        } finally {
            isSelling = false;
            shouldStop = false;
            button.textContent = 'Sell to shop';
            if (finalStatus && goldLimit > 0 && getCurrentGold() >= goldLimit) {
                setStatus(`${finalStatus} Da ban ${sold}/${items.length} item, bo qua ${skipped}.`);
            } else if (sold || skipped) {
                setStatus(`Da ban ${sold}/${items.length} item, bo qua ${skipped}.`);
            } else {
                setStatus(finalStatus || `Da ban ${sold}/${items.length} item, bo qua ${skipped}.`);
            }
        }
    }

    function createFilterLabel(text) {
        const label = document.createElement('div');
        label.className = 'tdm-sell-shop-filter-label';
        label.textContent = text;
        return label;
    }

    function toggleFilterValue(values, value) {
        const index = values.indexOf(value);
        if (index > -1) {
            values.splice(index, 1);
        } else {
            values.push(value);
        }
    }

    function createFilterActions(container, values, storageKey, allValues, rerender) {
        const selectAll = document.createElement('a');
        selectAll.href = 'javascript:void(0)';
        selectAll.textContent = 'Select All';
        selectAll.addEventListener('click', function () {
            values.length = 0;
            allValues.forEach(function (value) {
                values.push(value);
            });
            setStoredFilterValues(storageKey, values);
            rerender();
        });

        const clearAll = document.createElement('a');
        clearAll.href = 'javascript:void(0)';
        clearAll.textContent = 'Clear All';
        clearAll.addEventListener('click', function () {
            values.length = 0;
            setStoredFilterValues(storageKey, values);
            rerender();
        });

        container.appendChild(selectAll);
        container.appendChild(document.createTextNode(' - '));
        container.appendChild(clearAll);
    }

    function addSellFilters(actions) {
        const existingFilters = document.getElementById('tdm-sell-shop-filters');
        if (existingFilters) {
            existingFilters.remove();
        }

        const filters = getSellFilters();
        const filterBox = document.createElement('div');
        filterBox.id = 'tdm-sell-shop-filters';

        const goldLimitRow = document.createElement('div');
        goldLimitRow.className = 'tdm-sell-shop-filter-row';
        goldLimitRow.appendChild(createFilterLabel('Gold limit'));

        const goldLimitControls = document.createElement('div');
        goldLimitControls.className = 'tdm-sell-shop-gold-limit';

        const goldLimitInput = document.createElement('input');
        goldLimitInput.type = 'text';
        goldLimitInput.id = 'tdm-sell-shop-gold-limit';
        goldLimitInput.placeholder = 'VD: 500k';
        goldLimitInput.value = getStoredGoldLimit() > 0 ? formatGoldValue(getStoredGoldLimit()) : '';
        goldLimitInput.addEventListener('change', function () {
            const goldLimit = setStoredGoldLimit(goldLimitInput.value);
            goldLimitInput.value = goldLimit > 0 ? formatGoldValue(goldLimit) : '';
        });

        goldLimitControls.appendChild(goldLimitInput);
        goldLimitRow.appendChild(goldLimitControls);
        filterBox.appendChild(goldLimitRow);

        const typeRow = document.createElement('div');
        typeRow.className = 'tdm-sell-shop-filter-row';
        typeRow.appendChild(createFilterLabel('Item types'));
        const typeList = document.createElement('div');
        typeList.className = 'tdm-sell-shop-filter-list';

        ITEM_TYPES.forEach(function (type) {
            const chip = document.createElement('button');
            chip.type = 'button';
            chip.className = 'tdm-sell-shop-filter-chip';
            chip.title = type.label;
            chip.setAttribute('aria-label', type.label);

            if (filters.itemTypes.includes(type.value)) {
                chip.classList.add('active');
            }

            const icon = document.createElement('i');
            icon.className = `${type.icon} tdm-sell-shop-filter-icon`;
            chip.appendChild(icon);
            chip.addEventListener('click', function () {
                toggleFilterValue(filters.itemTypes, type.value);
                setStoredFilterValues(SELL_FILTER_STORAGE.itemTypes, filters.itemTypes);
                addSellFilters(actions);
            });
            typeList.appendChild(chip);
        });

        const typeActions = document.createElement('span');
        typeActions.className = 'tdm-sell-shop-filter-actions';
        createFilterActions(typeActions, filters.itemTypes, SELL_FILTER_STORAGE.itemTypes, ITEM_TYPES.map(function (type) {
            return type.value;
        }), function () {
            addSellFilters(actions);
        });
        typeList.appendChild(typeActions);
        typeRow.appendChild(typeList);
        filterBox.appendChild(typeRow);

        const qualityRow = document.createElement('div');
        qualityRow.className = 'tdm-sell-shop-filter-row';
        qualityRow.appendChild(createFilterLabel('Item qualities'));
        const qualityList = document.createElement('div');
        qualityList.className = 'tdm-sell-shop-filter-list';

        ITEM_QUALITIES.forEach(function (quality) {
            const chip = document.createElement('button');
            chip.type = 'button';
            chip.className = 'tdm-sell-shop-quality-chip';
            chip.title = quality.label;
            chip.setAttribute('aria-label', quality.label);

            if (filters.itemQualities.includes(quality.value)) {
                chip.classList.add('active');
            }

            const swatch = document.createElement('span');
            swatch.className = 'tdm-sell-shop-quality-swatch';
            swatch.style.backgroundColor = quality.color;
            chip.appendChild(swatch);
            chip.addEventListener('click', function () {
                toggleFilterValue(filters.itemQualities, quality.value);
                setStoredFilterValues(SELL_FILTER_STORAGE.itemQualities, filters.itemQualities);
                addSellFilters(actions);
            });
            qualityList.appendChild(chip);
        });

        const qualityActions = document.createElement('span');
        qualityActions.className = 'tdm-sell-shop-filter-actions';
        createFilterActions(qualityActions, filters.itemQualities, SELL_FILTER_STORAGE.itemQualities, ITEM_QUALITIES.map(function (quality) {
            return quality.value;
        }), function () {
            addSellFilters(actions);
        });
        qualityList.appendChild(qualityActions);
        qualityRow.appendChild(qualityList);
        filterBox.appendChild(qualityRow);

        actions.parentNode.insertBefore(filterBox, actions);
    }

    function addButton() {
        if (document.getElementById('tdm-sell-shop-actions')) {
            return;
        }

        const packages = document.getElementById('packages');
        if (!packages) {
            return;
        }

        const actions = document.createElement('div');
        actions.id = 'tdm-sell-shop-actions';
        actions.style.margin = '8px 0';

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'awesome-button';
        button.textContent = 'Sell to shop';
        button.addEventListener('click', function () {
            sellVisiblePackages(button);
        });

        actions.appendChild(button);
        packages.parentNode.insertBefore(actions, packages);
        addSellFilters(actions);
    }

    addButton();
})();
