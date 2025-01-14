const enableSmelter = 0;
const shouldEnableSmelter = enableSmelter === 1;

if (shouldEnableSmelter) {
    console.log('Smelter có hoạt động');

    const boxFinishSmelter = document.querySelector('.notification-area .notification-box.notification-success');

    if (boxFinishSmelter) {
        console.log('Đang chuyển hướng đến smeltery...');
        window.location.href = 'https://s66-en.gladiatus.gameforge.com/game/index.php?mod=forge&submod=smeltery';
    } else {
        console.log('Không tìm thấy boxFinishSmelter');
    }

    const forgeFinishedSucceeded = document.querySelector('#forge_nav .forge_finished-succeeded');
    const forgeClosed = document.querySelector('#forge_nav .forge_closed');
    const storeResources = Array.from(document.querySelectorAll('a.awesome-button')).find(el => el.textContent.includes('Store resources'));
    const inventoryNav3 = document.querySelector('#inventory_nav a.awesome-tabs:nth-child(3)');    

    if (storeResources) {
        storeResources.click();
    }

    const params = new URLSearchParams(window.location.search);
    if (params.get('mod') === 'forge' && params.get('submod') === 'smeltery') {
        if (inventoryNav3) {
            console.log('Đang click vào tab Inventory Nav 3...');        
            inventoryNav3.click();
            setTimeout(() => {
                const startMeltButton = document.querySelector('.smelter-actions button.awesome-button:first-of-type');

                if (startMeltButton && startMeltButton.textContent.trim() === 'Start melt') {
                    console.log('Đang click vào nút Start melt...');
                    startMeltButton.click();
                } else {
                    console.log('Không tìm thấy nút Start melt');
                }

                // const invItems = document.querySelectorAll('#inv [class^="item-i-"]');

                // if (invItems) {
                //     invItems.forEach(item => {
                //         item.click();
                //         console.log('Đã click vào:', item);
                //     });
                // }

                const invItem = document.querySelector('#inv [class^="item-i-"]');
                invItem.click();

            }, 1000);
        } else {
            console.log('Không tìm thấy inventoryNav3');
        }
    }
} else {
    console.log('Smelter không hoạt động');
}
