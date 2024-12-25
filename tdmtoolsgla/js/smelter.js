const enableSmelter = 1;
const shouldEnableSmelter = enableSmelter === 1;

if (shouldEnableSmelter) {
    console.log('Smelter có hoạt động');    
    
    const params = new URLSearchParams(window.location.search);

    //Kiem tra xem co thong bao hoan thanh Smelter khong
    function checkBoxFinishSmelter() {
        const boxFinishSmelter = document.querySelector('.notification-area .notification-box.notification-success');
        if (boxFinishSmelter) {
            localStorage.setItem('haveBoxFinishSmelter', true);
        } else {
            localStorage.setItem('haveBoxFinishSmelter', false);
        }
        return localStorage.getItem('haveBoxFinishSmelter') === 'true';
    }
    const haveBoxFinishSmelter = checkBoxFinishSmelter();

    //Kiem tra xem co Smelter hoan thanh khong
    function checkForgeFinishedSucceeded() {
        if (params.get('mod') === 'forge' && params.get('submod') === 'smeltery') {
            const forgeFinishedSucceeded = document.querySelector('#forge_nav .forge_finished-succeeded');

            if (forgeFinishedSucceeded) {
                localStorage.setItem('haveForgeFinishedSucceeded', true);
            } else {
                localStorage.setItem('haveForgeFinishedSucceeded', false);
            }
            return localStorage.getItem('haveForgeFinishedSucceeded') === 'true';
        }
    }
    const haveForgeFinishedSucceeded = checkForgeFinishedSucceeded();

    //Kiem tra xem co Smelter trong khong
    function checkForgeClosed() {
        if (params.get('mod') === 'forge' && params.get('submod') === 'smeltery') {
            const forgeClosed = document.querySelector('#forge_nav .forge_closed');

            if (forgeClosed) {
                localStorage.setItem('haveForgeClosed', true);
            } else {
                localStorage.setItem('haveForgeClosed', false);
            }
            return localStorage.getItem('haveForgeClosed') === 'true';
        }
    }
    const haveForgeClosed = checkForgeClosed();

    //Kiem tra xem trang 3 hom do co trong khong
    function checkInv3 {        
        if (params.get('mod') === 'forge' && params.get('submod') === 'smeltery') {
            const inventoryNav3 = document.querySelector('#inventory_nav a.awesome-tabs:nth-child(3)');
            const invItem3 = document.querySelector('#inv [class^="item-i-"]');

            if (invItem3) {
                localStorage.setItem('haveInvItem3', true);
            } else {
                localStorage.setItem('haveInvItem3', false);
            }
            return localStorage.getItem('haveInvItem3') === 'true';
        }
    }
    const haveInvItem3 = checkInv3();

    
    // Điều kiện chuyển hướng
    if (haveBoxFinishSmelter || haveForgeFinishedSucceeded || haveForgeClosed) {
        console.log('Đang chuyển hướng đến smeltery...');
        window.location.href = 'https://s66-en.gladiatus.gameforge.com/game/index.php?mod=forge&submod=smeltery';
    } else {
        console.log('Không tìm thấy boxFinishSmelter hoặc trạng thái cần thiết.');
    }
    

    const storeResources = Array.from(document.querySelectorAll('a.awesome-button')).find(el => el.textContent.includes('Store resources'));
    const inventoryNav3 = document.querySelector('#inventory_nav a.awesome-tabs:nth-child(3)');    

    if (storeResources) {
        storeResources.click();
    }
    
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
