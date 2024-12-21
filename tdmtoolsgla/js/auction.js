let enableAuction = 1;
let shouldEnableAuction = enableAuction === 1 ? true : false;

const auctionStatus = document.querySelector('#content article span.description_span_right');
const dataStatus = {
    veryShort: 'very short',
    short: 'Short',
    middle: 'Middle',
    long: 'long',
    veryLong: 'very long'
}
if (auctionStatus) {
    if (shouldEnableAuction && (auctionStatus.textContent == dataStatus.short || auctionStatus.textContent == dataStatus.veryShort)) {
        shouldEnableAuction = true;
    } else if (shouldEnableAuction) {
        shouldEnableAuction = false;
        console.log('Chua den gio');
    }
}

//window.location.href.includes("itemType=9")
if (shouldEnableAuction && window.location.href.includes("mod=auction")) {
    const auctionData = {
        goldValueElement: document.getElementById('sstat_gold_val')
    };

    const auctionItems = document.querySelectorAll('#auction_table tr td');

    let bidBtn; // Khai báo ở mức độ toàn cục

    for (let i = 0; i < auctionItems.length; i++) {
    // for (let i = 0; i < 20; i++) {
        const auctionItemDiv = auctionItems[i].querySelector('.auction_item_div');
        const auctionBidDiv = auctionItems[i].querySelector('.auction_bid_div');

        let priceMatch;
        let valueElement;
        let skipNameElement;

        if (auctionItemDiv) {
            valueElement = auctionItemDiv.querySelector('[data-tooltip*="Value"]');
            skipNameElement = [
                auctionItemDiv.querySelector('[data-tooltip*="Lucius"]'),
                auctionItemDiv.querySelector('[data-tooltip*="Antonius"]'),
                auctionItemDiv.querySelector('[data-tooltip*="Ichorus"]'),
                auctionItemDiv.querySelector('[data-tooltip*="T\u00e1liths"]')
            ]

            if (valueElement) {
                var tooltipData = valueElement.getAttribute('data-tooltip');
                var valueMatch = tooltipData.match(/Value (\d+\.\d+)/);
                if (valueMatch) {
                    var value = valueMatch[1];
                    console.log(value);
                }
            }

            // if (skipNameElement.length > 0) {
            //     skipNameElement = false;
            //     console.log('Day la hang hot');
            // }
        }

        if (auctionBidDiv && skipNameElement) {
            var lowestPriceElement = auctionBidDiv.querySelector('div:nth-child(2)');
            bidBtn = auctionBidDiv.querySelector('input.awesome-button[name="bid"]');

            if (lowestPriceElement) {
                const lowestPriceText = lowestPriceElement.textContent.trim();
                priceMatch = lowestPriceText.match(/(\d+\.\d+)/);
                if (priceMatch) {
                    const priceValue = parseFloat(priceMatch[1]);
                    console.log(priceValue);
                }

                if (priceMatch < (value + 2) && value < auctionData.goldValueElement) {
                    console.log('san pham nay gia ok');
                    bidBtn.click();
                } else {
                    console.log('san pham nay gia cao qua hoac het gold');
                }
            }
        }
    }
} else {
    console.log('Auction khong hoat dong');
}
