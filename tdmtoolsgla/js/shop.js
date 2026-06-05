(function () {
    'use strict';

    if (!window.location.href.includes('mod=packages')) {
        return;
    }

    const SHOP_SIZE = { width: 6, height: 8 };
    const INVENTORY_SIZE = { width: 8, height: 5 };
    const FALLBACK_INVENTORY_BAGS = [512, 513, 514, 515];
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
            amount: parseInt(item.dataset.amount || '1', 10) || 1,
            width: parseInt(item.dataset.measurementX || '1', 10) || 1,
            height: parseInt(item.dataset.measurementY || '1', 10) || 1,
        };
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

        const items = Array.from(document.querySelectorAll('#packages .packageItem'))
            .map(getPackageItemData)
            .filter(Boolean)
            .sort(function (left, right) {
                return (left.width * left.height) - (right.width * right.height);
            });

        if (!items.length) {
            setStatus('Khong co item de ban.');
            return;
        }

        if (!getSecureHash()) {
            setStatus('Khong tim thay sh. Hay reload trang packages roi thu lai.');
            return;
        }

        if (!confirm(`Ban ${items.length} item dang hien thi vao shop?`)) {
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
            if (sold || skipped) {
                setStatus(`Da ban ${sold}/${items.length} item, bo qua ${skipped}.`);
            } else {
                setStatus(finalStatus || `Da ban ${sold}/${items.length} item, bo qua ${skipped}.`);
            }
        }
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
    }

    addButton();
})();
