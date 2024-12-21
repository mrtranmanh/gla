// ==UserScript==
// @name         Auction Gla
// @namespace    http://tampermonkey.net/
// @version      2024-01-15
// @description  try to take over the world!
// @author       You
// @match        https://s66-en.gladiatus.gameforge.com/game/index.php?mod=auction*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gameforge.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

const enableAuction = 1;
const shouldEnableAuction = enableAuction === 1 ? true : false;

document.addEventListener("DOMContentLoaded", function() {
if ( shouldEnableAuction) {
    console.log('Auction co hoat dong');

    const auctionData = {
        goldValueElement: document.getElementById('sstat_gold_val'),
        filterForm: {
            filterSubmit: document.querySelector('form[name="filterForm"] input[type="submit"]')
        }
    };
    
    if (auctionData.filterForm.filterSubmit) {
        console.log('filterSubmit co hoat dong');
        setInterval(function () {
            auctionData.filterForm.filterSubmit.click();
        }, 5 * 60 * 1000);
    } else {
        console.log('filterSubmit khong hoat dong');
    }
    
    const auctionItems = document.querySelectorAll('#auction_table tr td');
    
    for (let i = 0; i < auctionItems.length; i++) {
        const auctionItemDiv = auctionItems[i].querySelector('.auction_item_div');
        const auctionBidDiv = auctionItems[i].querySelector('.auction_bid_div');
    
        let priceMatch; // Đặt priceMatch ở đây để nó có phạm vi toàn cục
    
        if (auctionItemDiv) {
            var valueElement = auctionItemDiv.querySelector('[data-tooltip*="Value"]');
            if (valueElement) {
                // Lấy giá trị từ thuộc tính data-tooltip
                var tooltipData = valueElement.getAttribute('data-tooltip');
    
                // Sử dụng regex để trích xuất giá trị Value
                priceMatch = tooltipData.match(/Value (\d+\.\d+)/);
    
                // Kiểm tra xem có giá trị khớp không
                if (priceMatch) {
                    var value = priceMatch[1];
                    console.log(value);
                }
            }
        }
    
        if (auctionBidDiv) {
            var lowestPriceElement = auctionBidDiv.querySelector('div:nth-child(2)');
            var bidBtn = auctionBidDiv.querySelector('input.awesome-button[name="bid"]');
    
            if (lowestPriceElement) {
                // Lấy giá trị từ thuộc tính
                const lowestPriceText = lowestPriceElement.textContent.trim();
                const priceMatch = lowestPriceText.match(/(\d+\.\d+)/);
                if (priceMatch) {
                    // Lấy giá trị số từ kết quả của regex
                    const priceValue = parseFloat(priceMatch[1]);
                    // In ra giá trị số
                    console.log(priceValue);
                }
            }
        }
    
        if (auctionItemDiv && auctionBidDiv && bidBtn && priceMatch < (valueElement + 2) && valueElement < auctionData.goldValueElement) {
            bidBtn.click();
        } else {
            console.log('san pham nay gia cao qua')
        }
    }
    
}  else {
    console.log('Auction khong hoat dong');
}
});

})();