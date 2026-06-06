(function () {
    'use strict';

    const auctionEnabled = localStorage.getItem('auctionEnabled') === null ?
        true :
        localStorage.getItem('auctionEnabled') === 'true';

    if (!auctionEnabled || !window.location.href.includes('mod=auction')) {
        console.log('Auction khong hoat dong');
        return;
    }

    const auctionStatus = document.querySelector('#content article span.description_span_right');
    const activeStatuses = ['short', 'very short'];

    if (auctionStatus && !activeStatuses.includes(auctionStatus.textContent.trim().toLowerCase())) {
        console.log('Chua den gio');
        return;
    }

    const goldValueElement = document.getElementById('sstat_gold_val');
    const currentGold = parseGold(goldValueElement && goldValueElement.textContent);
    const auctionItems = document.querySelectorAll('#auction_table tr td');

    auctionItems.forEach(function (auctionItem) {
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
            bidBtn.click();
        } else {
            console.log('san pham nay gia cao qua hoac het gold');
        }
    });

    function parseTooltipValue(tooltip) {
        const valueMatch = (tooltip || '').match(/Value\s+([\d.]+)/i);
        return valueMatch ? parseGold(valueMatch[1]) : 0;
    }

    function parseGold(text) {
        return Number(String(text || '').replace(/[^\d]/g, '')) || 0;
    }
})();
