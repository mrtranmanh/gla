// buy market
function buy_market() {
    const elements = document.querySelectorAll('#market_table .awesome-button');
    let delay = 0;

    elements.forEach((element, index) => {
        setTimeout(() => {
            element.click();
            console.log(`Clicked element ${index + 1}`);
        }, delay);
        delay += 200;
    });
}
buy_market();

//sell guild market
function buy__guild_market() {
    const elements = document.querySelectorAll('#inv > div');
    let delay = 0;

    elements.forEach((element, index) => {
        setTimeout(() => {
            element.click();
            console.log(`Clicked element ${index + 1}`);
        }, delay);
        delay += 200;
    });
}
buy__guild_market();