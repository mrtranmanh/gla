(function () {
    'use strict';

    const auctionEnabled = localStorage.getItem('auctionEnabled') === null ?
        true :
        localStorage.getItem('auctionEnabled') === 'true';
    const autoGoActive = sessionStorage.getItem('autoGoActive') === 'true';

    if (!autoGoActive || !auctionEnabled || !window.location.href.includes('mod=auction')) {
        console.log('Auction khong hoat dong');
        return;
    }

    const url = new URL(window.location.href);
    const auctionType = url.searchParams.get('ttype') === '3' ? 'mercenary' : 'gladiator';
    const auctionStatus = getAuctionStatus(document);
    const activeStatuses = getActiveStatuses();
    const mercenaryChecked = hasRecentlyCheckedMercenary();
    const goldValueElement = document.getElementById('sstat_gold_val');
    const currentGold = parseGold(goldValueElement && goldValueElement.textContent);
    const auctionMinGold = getAuctionMinGold();
    if (currentGold <= 0 || currentGold < auctionMinGold) {
        console.log('Gold thap hon muc toi thieu, dung mua auction');
        return;
    }

    if (auctionStatus && !isActiveAuctionStatus(auctionStatus)) {
        checkOtherAuctionStatus(auctionType).then(function (otherAuction) {
            if (otherAuction.active) {
                goToAuctionAmulets(otherAuction.type);
            } else {
                console.log('Chua den gio');
            }
        });
        return;
    }

    if (auctionType === 'gladiator' && !mercenaryChecked) {
        checkOtherAuctionStatus('gladiator').then(function (otherAuction) {
            if (otherAuction.active) {
                goToAuctionAmulets('mercenary');
            } else {
                markMercenaryChecked();
                buyCurrentAuction();
            }
        });
        return;
    }

    buyCurrentAuction();

    function buyCurrentAuction() {
        const itemType = url.searchParams.get('itemType') || getSelectedFilterValue('itemType') || getHiddenFilterValue('itemType');

        if (itemType !== '9') {
            goToAuctionAmulets(auctionType);
            return;
        }

        const auctionItems = Array.from(document.querySelectorAll('#auction_table tr td')).reverse();
        let boughtItem = false;

        auctionItems.forEach(function (auctionItem) {
            if (boughtItem) {
                return;
            }

            const auctionItemDiv = auctionItem.querySelector('.auction_item_div');
            const auctionBidDiv = auctionItem.querySelector('.auction_bid_div');

            if (!auctionItemDiv || !auctionBidDiv) {
                return;
            }

            const valueElement = auctionItemDiv.querySelector('[data-tooltip*="Value"]');
            const lowestPriceElement = auctionBidDiv.querySelector('div:nth-child(2)');
            const bidBtn = auctionBidDiv.querySelector('input.awesome-button[name="bid"]');

            if (!valueElement || !lowestPriceElement || !bidBtn) {
                return;
            }

            const itemValue = parseTooltipValue(valueElement.getAttribute('data-tooltip'));
            const lowestPrice = parseGold(lowestPriceElement.textContent);

            if (!itemValue || !lowestPrice) {
                return;
            }

            if (lowestPrice < itemValue + 2 && lowestPrice <= currentGold) {
                console.log('san pham nay gia ok');
                boughtItem = true;
                bidBtn.click();
            } else {
                console.log('san pham nay gia cao qua hoac het gold');
            }
        });

        if (boughtItem) {
            clearMercenaryChecked();
            return;
        }

        if (auctionType === 'mercenary') {
            markMercenaryChecked();
            goToAuctionAmulets('gladiator');
            return;
        }

        if (auctionType === 'gladiator') {
            clearMercenaryChecked();
        }
    }

    function goToAuctionAmulets(type) {
        const nextUrl = new URL('/game/index.php', window.location.origin);
        nextUrl.searchParams.set('mod', 'auction');
        nextUrl.searchParams.set('itemType', '9');
        nextUrl.searchParams.set('itemQuality', getSelectedFilterValue('itemQuality') || url.searchParams.get('itemQuality') || '-1');

        if (type === 'mercenary') {
            nextUrl.searchParams.set('ttype', '3');
        }

        const secureHash = getSecureHash();
        if (secureHash) {
            nextUrl.searchParams.set('sh', secureHash);
        }

        window.location.href = nextUrl.toString();
    }

    function hasRecentlyCheckedMercenary() {
        const checkedAt = Number(sessionStorage.getItem('tdmAuctionMercenaryCheckedAt') || '0');
        return checkedAt > 0 && Date.now() - checkedAt < 120000;
    }

    function markMercenaryChecked() {
        sessionStorage.setItem('tdmAuctionMercenaryCheckedAt', String(Date.now()));
    }

    function clearMercenaryChecked() {
        sessionStorage.removeItem('tdmAuctionMercenaryCheckedAt');
    }

    function checkOtherAuctionStatus(currentType) {
        const otherType = currentType === 'mercenary' ? 'gladiator' : 'mercenary';
        const statusUrl = new URL('/game/index.php', window.location.origin);
        statusUrl.searchParams.set('mod', 'auction');

        if (otherType === 'mercenary') {
            statusUrl.searchParams.set('ttype', '3');
        }

        const secureHash = getSecureHash();
        if (secureHash) {
            statusUrl.searchParams.set('sh', secureHash);
        }

        return fetch(statusUrl.toString(), { credentials: 'include' })
            .then(function (response) { return response.text(); })
            .then(function (html) {
                const doc = new DOMParser().parseFromString(html, 'text/html');
                return {
                    type: otherType,
                    active: isActiveAuctionStatus(getAuctionStatus(doc))
                };
            })
            .catch(function () {
                return {
                    type: otherType,
                    active: false
                };
            });
    }

    function getAuctionStatus(root) {
        const statusElement = root.querySelector('#content article span.description_span_right');
        return statusElement ? statusElement.textContent.trim().toLowerCase() : '';
    }

    function isActiveAuctionStatus(status) {
        return activeStatuses.includes(String(status || '').trim().toLowerCase());
    }

    function getActiveStatuses() {
        const defaultStatuses = ['short', 'very short'];

        try {
            const savedStatuses = JSON.parse(localStorage.getItem('tdmAuctionBuyStatuses'));
            if (Array.isArray(savedStatuses)) {
                return savedStatuses.map(function (status) {
                    return String(status).trim().toLowerCase();
                });
            }
        } catch (error) {
            return defaultStatuses;
        }

        return defaultStatuses;
    }

    function getAuctionMinGold() {
        return parseGold(localStorage.getItem('tdmAuctionMinGold'));
    }

    function getSelectedFilterValue(name) {
        const selectedOption = document.querySelector(`select[name="${name}"] option:checked`);
        return selectedOption ? selectedOption.value : '';
    }

    function getHiddenFilterValue(name) {
        const input = document.querySelector(`#auction_table input[type="hidden"][name="${name}"]`);
        return input ? input.value : '';
    }

    function getSecureHash() {
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

    function parseTooltipValue(tooltip) {
        const valueMatch = (tooltip || '').match(/Value\s+([\d.]+)/i);
        return valueMatch ? parseGold(valueMatch[1]) : 0;
    }

    function parseGold(text) {
        return Number(String(text || '').replace(/[^\d]/g, '')) || 0;
    }
})();
