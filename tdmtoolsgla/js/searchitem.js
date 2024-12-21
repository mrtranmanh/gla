const enableSearchItem = 1;
const shouldEnableSearchItem = enableSearchItem === 1 ? true : false;

if (shouldEnableSearchItem) {
    console.log('SearchItem co hoat dong');

    const searchType = {
        back: document.querySelector('#blackoutDialog .action_buttons #back_to_safety'),
        quick: document.querySelector('#blackoutDialog .action_buttons #back_to_safety + button'),
        thorough: document.querySelector('#blackoutDialog .action_buttons #back_to_safety + button + button'),
    };

    if (searchType.thorough) {
        searchType.thorough.click();
    }
} else {
    console.log('SearchItem khong hoat dong');
}
