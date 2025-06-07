function heal() {
    const enableHeal = 1;
    const underHP = 40;
    
    const player = {
        level: Number(document.getElementById("header_values_level").textContent.trim()),
        hp: Number(document.getElementById("header_values_hp_percent").textContent.trim().replace(/[^0-9]/g, '')),
        gold: Number(document.getElementById("sstat_gold_val").textContent.trim().replace(/\./g, '')),
    };
    
    const mainMenu = {
        overview: document.querySelector('#mainmenu a.menuitem[title="Overview"]'),
    }

    const avatar = document.querySelector('#avatar .ui-droppable');
    
    if (enableHeal === 1 && !window.location.href.includes("mod=auction") && !window.location.href.includes("mod=training")) {
        console.log('Heal đã được bật tại HP dưới: ' + underHP);
    
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
                    const itemTab1 = tabs[0]; // tab 1
                    const itemTab4 = tabs[3]; // tab 4
                    const itemTab5 = tabs[4]; // tab 5

                    const A = avatar.getBoundingClientRect();
                    const x = A.left;
                    const y = A.top;

                    // Ưu tiên tab 5, rồi tab 4, sau đó tab 1
                    itemTab5.click();

                    setTimeout(() => {
                        let item = document.querySelector('#inv .ui-draggable.ui-droppable.ui-draggable-handle');

                        if (!item) {
                            console.log('❌ Không có item ở tab 5, chuyển sang tab 4');
                            itemTab4.click();

                            setTimeout(() => {
                                item = document.querySelector('#inv .ui-draggable.ui-droppable.ui-draggable-handle');

                                if (!item) {
                                    console.log('❌ Không có item ở tab 4, chuyển sang tab 1');
                                    itemTab1.click();

                                    setTimeout(() => {
                                        item = document.querySelector('#inv .ui-draggable.ui-droppable.ui-draggable-handle');

                                        if (!item) {
                                            console.log('❌ Không có item ở tab 1 luôn.');
                                            return;
                                        }
                                        dragItemToAvatar(item, x, y);
                                    }, 300);
                                } else {
                                    dragItemToAvatar(item, x, y);
                                }
                            }, 300);
                        } else {
                            dragItemToAvatar(item, x, y);
                        }
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
}
heal();
