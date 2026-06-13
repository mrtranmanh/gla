function heal() {
    const INVENTORY_SIZE = { width: 8, height: 5 };
    const DEFAULT_TAB_1_BAG = 512;
    const REFILL_COOLDOWN_MS = 10 * 60 * 1000;
    const REFILL_CHECKED_AT_KEY = 'tdmHealFoodRefillCheckedAt';
    const MARKET_SCAN_CHECKED_AT_KEY = 'tdmHealFoodMarketScanCheckedAt';
    const MARKET_FOOD_PRICE_MULTIPLIER = getMarketFoodPriceMultiplier();
    const MARKET_SCAN_INTERVAL_MS = getMarketScanIntervalMs();

    if (sessionStorage.getItem('autoGoActive') !== 'true') {
        console.log('Heal khong chay vi Auto GO dang tat');
        return;
    }

    const enableHeal = localStorage.getItem('healEnabled') === null ? true : localStorage.getItem('healEnabled') === "true";
    const enableMarketFoodBuy = localStorage.getItem('tdmHealMarketBuyEnabled') === null ? true : localStorage.getItem('tdmHealMarketBuyEnabled') === "true";
    const savedUnderHP = Number(localStorage.getItem('healUnderHP'));
    const underHP = Number.isNaN(savedUnderHP) || savedUnderHP < 1 ? 40 : Math.min(100, savedUnderHP);
    const healTabs = getHealTabs();
    const currentPlayerId = getCurrentPlayerId();
    
    const player = {
        level: Number(document.getElementById("header_values_level").textContent.trim()),
        hp: Number(document.getElementById("header_values_hp_percent").textContent.trim().replace(/[^0-9]/g, '')),
        gold: Number(document.getElementById("sstat_gold_val").textContent.trim().replace(/\./g, '')),
    };
    
    const mainMenu = {
        overview: document.querySelector('#mainmenu a.menuitem[title="Overview"]'),
    }

    const avatar = document.querySelector('#avatar .ui-droppable');

    if (enableMarketFoodBuy) {
        runMarketFoodScan();

        if (!window.tdmHealMarketScanTimer) {
            window.tdmHealMarketScanTimer = setInterval(runMarketFoodScan, MARKET_SCAN_INTERVAL_MS);
        }
    }
    
    if (enableHeal && !window.location.href.includes("mod=auction") && !window.location.href.includes("mod=training")) {
        console.log('Heal đã được bật tại HP dưới: ' + underHP + ', tabs: ' + healTabs.join(', '));
    
        if (player.hp < underHP && !window.location.href.includes("mod=overview")) {
            mainMenu.overview.click();
        } else if (player.hp < underHP && window.location.href.includes("mod=overview")) {

            const mainDoll1Active = document.querySelector('.charmercsel.active .charmercpic.doll1');
            const mainDoll1 = document.querySelector('.charmercsel .charmercpic.doll1');

            if (!mainDoll1Active) {
                mainDoll1.click();
            }

            if (avatar) {
                function Ka() {
                    const tabs = document.querySelectorAll('#inventory_nav .awesome-tabs');
                    const selectedTabs = healTabs
                        .map(function (tab) {
                            return {
                                number: tab,
                                element: tabs[tab - 1]
                            };
                        })
                        .filter(function (tab) {
                            return tab.element;
                        });

                    const A = avatar.getBoundingClientRect();
                    const x = A.left;
                    const y = A.top;

                    if (!selectedTabs.length) {
                        console.log('❌ Chưa chọn tab inventory để heal.');
                        return;
                    }

                    tryHealFromTab(0, selectedTabs, x, y);
                }

                function tryHealFromTab(index, selectedTabs, x, y) {
                    const selectedTab = selectedTabs[index];

                    if (!selectedTab) {
                        console.log('❌ Không có item ở các tab đã chọn. Thử lấy food từ packages vào tab 1.');
                        refillFoodFromPackages();
                        return;
                    }

                    selectedTab.element.click();

                    setTimeout(() => {
                        let item = findHealItemInInventory();

                        if (item) {
                            dragItemToAvatar(item, x, y);
                            return;
                        }

                        console.log('❌ Không có item ở tab ' + selectedTab.number + ', chuyển tab tiếp theo');
                        tryHealFromTab(index + 1, selectedTabs, x, y);
                    }, 300);
                }

                function dragItemToAvatar(item, x, y) {
                    const mousedown = new MouseEvent('mousedown', {
                        bubbles: true,
                        cancelable: true,
                        view: window
                    });
                    item.dispatchEvent(mousedown);

                    const mousemove = new MouseEvent('mousemove', {
                        bubbles: true,
                        cancelable: true,
                        view: window,
                        clientX: x + 10,
                        clientY: y + 10
                    });
                    document.dispatchEvent(mousemove);

                    const mouseup = new MouseEvent('mouseup', {
                        bubbles: true,
                        cancelable: true,
                        view: window,
                        clientX: x + 10,
                        clientY: y + 10
                    });
                    document.dispatchEvent(mouseup);

                    console.log('✅ Đã kéo item tới avatar tại tọa độ:', x, y);
                }

                Ka();
            }
        }
    } else {
        console.log('Heal đang tắt');
    }

    function getHealTabs() {
        if (!localStorage.getItem('healTabs')) {
            return [5, 4, 1];
        }

        try {
            const savedTabs = JSON.parse(localStorage.getItem('healTabs'));

            if (!Array.isArray(savedTabs)) {
                return [5, 4, 1];
            }

            return savedTabs
                .map(function (tab) {
                    return Number(tab);
                })
                .filter(function (tab, index, tabs) {
                    return tab >= 1 && tab <= 5 && tabs.indexOf(tab) === index;
                });
        } catch (error) {
            return [5, 4, 1];
        }
    }

    function getMarketScanIntervalMs() {
        const savedInterval = Number(localStorage.getItem('tdmHealMarketScanIntervalMinutes'));
        const intervalMinutes = Number.isNaN(savedInterval) ? 10 : Math.max(1, savedInterval);

        return intervalMinutes * 60 * 1000;
    }

    function getMarketFoodPriceMultiplier() {
        const savedMultiplier = Number(localStorage.getItem('tdmHealMarketFoodPriceMultiplier'));

        return Number.isNaN(savedMultiplier) ? 1.2 : Math.max(0.1, savedMultiplier);
    }

    function getItemType(item) {
        const basis = item.dataset.basis || '';
        return basis.split('-')[0] || item.dataset.contentType || '';
    }

    function getItemTooltip(item) {
        return (item.getAttribute('data-tooltip') || '').toLowerCase();
    }

    function getCurrentPlayerId() {
        const scriptText = Array.from(document.scripts).map(function (script) {
            return script.textContent || '';
        }).join('\n');
        const playerIdMatch = scriptText.match(/\bplayerId\s*=\s*["']?(\d+)["']?/);

        return playerIdMatch ? playerIdMatch[1] : '';
    }

    function isSoulboundItem(item) {
        const soulboundTo = item.dataset.soulboundTo || '';

        if (soulboundTo) {
            return !currentPlayerId || soulboundTo !== currentPlayerId;
        }

        return getItemTooltip(item).includes('soul bound to:');
    }

    function isHealingFoodTooltip(tooltip) {
        return tooltip.includes('using: heals') ||
            tooltip.includes('heals ') ||
            tooltip.includes('healing') ||
            tooltip.includes('health') ||
            tooltip.includes('life points');
    }

    function isHealInventoryItem(item) {
        if (!item || getItemType(item) !== '7') {
            return false;
        }

        if (isSoulboundItem(item)) {
            return false;
        }

        const utilityUsables = ['7-23', '7-24', '7-25', '7-26', '7-27', '7-29', '7-31'];
        if (utilityUsables.includes(item.dataset.basis || '')) {
            return false;
        }

        return isHealingFoodTooltip(getItemTooltip(item));
    }

    function findHealItemInInventory() {
        return Array.from(document.querySelectorAll('#inv .ui-draggable.ui-droppable'))
            .find(isHealInventoryItem) || null;
    }

    function getSecureHash() {
        const queryHash = new URLSearchParams(window.location.search).get('sh');
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
        const query = new URLSearchParams();

        Object.keys(params).forEach(function (key) {
            if (params[key] !== undefined && params[key] !== null) {
                query.set(key, params[key]);
            }
        });

        if (sh && !query.has('sh')) {
            query.set('sh', sh);
        }

        return `${file}?${query.toString()}`;
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

    async function gameMove(params) {
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

        try {
            return JSON.parse(text);
        } catch (error) {
            return text;
        }
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
                    return { x, y };
                }
            }
        }

        return null;
    }

    function getTab1BagNumber() {
        const tab = document.querySelector('#inventory_nav .awesome-tabs[data-bag-number], #inventory_nav [data-bag-number]');
        const bag = tab && parseInt(tab.getAttribute('data-bag-number'), 10);

        return Number.isNaN(bag) || !bag ? DEFAULT_TAB_1_BAG : bag;
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
            grid: createGrid(size.width, size.height, items),
        };
    }

    function getPackagePageNumbers(root) {
        const pageRoot = root || document;
        const pages = Array.from(pageRoot.querySelectorAll('.pagination .paging_numbers a, .pagination .paging_numbers_current'))
            .map(function (page) {
                return parseInt(page.textContent.trim(), 10);
            })
            .filter(function (page) {
                return !Number.isNaN(page) && page > 0;
            });

        Array.from(pageRoot.querySelectorAll('.pagination a[href*="page="]')).forEach(function (link) {
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

    function getPackageItemData(packageItem) {
        const item = packageItem.querySelector('[data-content-type]');
        const input = packageItem.querySelector('input[value]');

        if (!item) {
            return null;
        }

        const basis = item.dataset.basis || '';
        const contentType = item.dataset.contentType || '';
        const itemType = basis.split('-')[0] || contentType;
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
            tooltip: item.getAttribute('data-tooltip') || '',
            soulboundTo: item.dataset.soulboundTo || '',
            amount: parseInt(item.dataset.amount || '1', 10) || 1,
            width: parseInt(item.dataset.measurementX || '1', 10) || 1,
            height: parseInt(item.dataset.measurementY || '1', 10) || 1,
        };
    }

    function isFoodPackageItem(item) {
        if (!item || item.itemType !== '7') {
            return false;
        }

        if (item.soulboundTo) {
            if (!currentPlayerId || item.soulboundTo !== currentPlayerId) {
                return false;
            }
        } else if ((item.tooltip || '').toLowerCase().includes('soul bound to:')) {
            return false;
        }

        const utilityUsables = ['7-23', '7-24', '7-25', '7-26', '7-27', '7-29', '7-31'];
        if (utilityUsables.includes(item.basis)) {
            return false;
        }

        const tooltip = item.tooltip.toLowerCase();
        return isHealingFoodTooltip(tooltip);
    }

    async function findFoodPackageItem() {
        const packageParams = {
            mod: 'packages',
            page: 1,
            f: '7',
            fq: '-1',
            qry: '',
        };
        const firstPageHtml = await gameGet('index.php', packageParams);
        const firstPageDoc = parseHtml(firstPageHtml);
        const pages = getPackagePageNumbers(firstPageDoc);

        for (const page of pages) {
            let doc = firstPageDoc;

            if (page !== 1) {
                const html = await gameGet('index.php', Object.assign({}, packageParams, {
                    page,
                }));
                doc = parseHtml(html);
            }

            const food = Array.from(doc.querySelectorAll('#packages .packageItem, .packageItem'))
                .map(getPackageItemData)
                .filter(Boolean)
                .find(isFoodPackageItem);

            if (food) {
                return food;
            }
        }

        return null;
    }

    async function refillFoodFromPackages() {
        const lastCheckedAt = Number(sessionStorage.getItem(REFILL_CHECKED_AT_KEY) || '0');
        if (Date.now() - lastCheckedAt < REFILL_COOLDOWN_MS) {
            console.log('TDM Heal: Vừa kiểm tra packages, chờ thêm trước khi thử lại.');
            return;
        }

        sessionStorage.setItem(REFILL_CHECKED_AT_KEY, String(Date.now()));

        try {
            const bag = getTab1BagNumber();
            const bagState = await loadInventoryBag(bag);
            const food = await findFoodPackageItem();

            if (!food) {
                console.log('TDM Heal: Không tìm thấy food usable trong packages.');
                return;
            }

            const spot = findGridSpot(food.width, food.height, bagState.grid);
            if (!spot) {
                console.log('TDM Heal: Tab 1 không có ô trống cho food ' + food.width + 'x' + food.height + '.');
                return;
            }

            const moved = await gameMove({
                mod: 'inventory',
                submod: 'move',
                from: `-${food.containerId}`,
                fromX: 1,
                fromY: 1,
                to: bag,
                toX: spot.x + 1,
                toY: spot.y + 1,
                amount: food.amount,
            });

            if (moved && moved.error) {
                console.warn('TDM Heal: Lỗi lấy food từ packages:', moved);
                return;
            }

            sessionStorage.removeItem(REFILL_CHECKED_AT_KEY);
            console.log('TDM Heal: Đã lấy food từ packages vào tab 1. Reload Overview để heal tiếp.');
            setTimeout(function () {
                window.location.reload();
            }, 800);
        } catch (error) {
            console.warn('TDM Heal: Lỗi refill food từ packages:', error);
        }
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

    function parseHealValue(tooltip) {
        const match = String(tooltip || '').match(/heals\s+([\d.]+)\s+(?:of\s+)?life/i);
        return match ? parseGoldValue(match[1]) : 0;
    }

    function getMarketPageNumbers(root) {
        const pageRoot = root || document;
        const pages = Array.from(pageRoot.querySelectorAll('.pagination .paging_numbers a, .pagination .paging_numbers_current'))
            .map(function (page) {
                return parseInt(page.textContent.trim(), 10);
            })
            .filter(function (page) {
                return !Number.isNaN(page) && page > 0;
            });

        Array.from(pageRoot.querySelectorAll('.pagination a[href*="p="], a[href*="page="]')).forEach(function (link) {
            const href = link.getAttribute('href') || '';
            const matches = href.match(/(?:[?&])(?:p|page)=(\d+)/g) || [];
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

    function getMarketItemData(form) {
        const fallbackRow = form.nextElementSibling && form.nextElementSibling.matches('tr') ? form.nextElementSibling : null;
        const item = form.querySelector('[data-content-type]') || (fallbackRow && fallbackRow.querySelector('[data-content-type]'));
        const buyIdInput = form.querySelector('input[name="buyid"]');
        const row = item && (item.closest('tr') || fallbackRow);

        if (!item || !buyIdInput || !row) {
            return null;
        }

        const basis = item.dataset.basis || '';
        const itemType = basis.split('-')[0] || item.dataset.contentType || '';
        const tooltip = item.getAttribute('data-tooltip') || '';
        const cells = row.querySelectorAll('td');
        const price = cells.length >= 3 ? parseGoldValue(cells[2].textContent) : 0;
        const healValue = parseHealValue(tooltip);

        return {
            form,
            buyId: buyIdInput.value,
            fields: getMarketBuyFields(form, buyIdInput.value),
            itemType,
            basis,
            tooltip,
            soulboundTo: item.dataset.soulboundTo || '',
            price,
            healValue,
            maxPrice: Math.floor(healValue * MARKET_FOOD_PRICE_MULTIPLIER),
        };
    }

    function getMarketBuyFields(form, buyId) {
        const fields = {
            buyid: buyId,
            qry: '',
            seller: '',
            f: '7',
            fl: '0',
            fq: '-1',
            s: 'p',
            p: '1',
            buy: 'Buy',
        };

        Array.from(form.querySelectorAll('input[name]')).forEach(function (input) {
            fields[input.name] = input.value || '';
        });
        fields.buyid = fields.buyid || buyId;
        fields.buy = fields.buy || 'Buy';

        return fields;
    }

    function isMarketFoodItem(item) {
        if (!item || item.itemType !== '7') {
            return false;
        }

        if (item.soulboundTo || String(item.tooltip || '').toLowerCase().includes('soul bound to:')) {
            return false;
        }

        const utilityUsables = ['7-23', '7-24', '7-25', '7-26', '7-27', '7-29', '7-31'];
        if (utilityUsables.includes(item.basis)) {
            return false;
        }

        return item.healValue > 0 && item.price > 0 && item.price <= item.maxPrice;
    }

    async function findMarketFoodItem() {
        const marketParams = {
            mod: 'market',
            fl: '0',
            fq: '-1',
            f: '7',
            qry: '',
            seller: '',
            s: 'p',
            p: 1,
        };
        const firstPageHtml = await gameGet('index.php', marketParams);
        const firstPageDoc = parseHtml(firstPageHtml);
        const pages = getMarketPageNumbers(firstPageDoc);
        const candidates = [];

        for (const page of pages) {
            let doc = firstPageDoc;

            if (page !== 1) {
                const html = await gameGet('index.php', Object.assign({}, marketParams, {
                    p: page,
                }));
                doc = parseHtml(html);
            }

            const pageItems = Array.from(doc.querySelectorAll('#market_table form[name="buyForm"], form[name="buyForm"]'))
                .map(getMarketItemData)
                .filter(isMarketFoodItem);

            candidates.push.apply(candidates, pageItems);
        }

        return candidates.sort(function (left, right) {
            const leftRatio = left.price / left.healValue;
            const rightRatio = right.price / right.healValue;
            return leftRatio - rightRatio || right.healValue - left.healValue;
        })[0] || null;
    }

    async function buyMarketItem(item) {
        const formData = new URLSearchParams();
        Object.keys(item.fields).forEach(function (key) {
            formData.set(key, item.fields[key]);
        });

        const action = item.form.getAttribute('action') || buildGameUrl('index.php', { mod: 'market' });
        const response = await fetch(action, {
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
            throw new Error(`HTTP ${response.status}: ${text.slice(0, 120)}`);
        }

        return text;
    }

    async function buyFoodFromMarket() {
        const lastMarketScanAt = Number(localStorage.getItem(MARKET_SCAN_CHECKED_AT_KEY) || '0');
        if (Date.now() - lastMarketScanAt < MARKET_SCAN_INTERVAL_MS) {
            console.log('TDM Heal: Vừa quét market tìm food, chờ đủ ' + Math.round(MARKET_SCAN_INTERVAL_MS / 60000) + ' phút trước khi thử lại.');
            return false;
        }

        localStorage.setItem(MARKET_SCAN_CHECKED_AT_KEY, String(Date.now()));

        const food = await findMarketFoodItem();

        if (!food) {
            console.log('TDM Heal: Không có food market hợp lệ, không soulbound, giá <= heal x ' + MARKET_FOOD_PRICE_MULTIPLIER + '.');
            return false;
        }

        if (player.gold > 0 && food.price > player.gold) {
            console.log('TDM Heal: Food market hợp lệ nhưng không đủ gold. Giá: ' + food.price + ', gold: ' + player.gold + '.');
            return false;
        }

        await buyMarketItem(food);
        console.log('TDM Heal: Đã mua food market buyid ' + food.buyId + ', heal ' + food.healValue + ', giá ' + food.price + '.');
        return true;
    }

    function runMarketFoodScan() {
        buyFoodFromMarket().catch(function (error) {
            console.warn('TDM Heal: Lỗi quét market mua food:', error);
        });
    }
}
heal();
