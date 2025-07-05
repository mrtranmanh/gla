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
        console.log('Heal da duoc bat tai:' + underHP);
    
        if ( player.hp < underHP && !window.location.href.includes("mod=overview")) {
            mainMenu.overview.click();
        } else if ( player.hp < underHP && window.location.href.includes("mod=overview")) {
            
            const mainDoll1Active = document.querySelector('.charmercsel.active .charmercpic.doll1');
            const mainDoll1 = document.querySelector('.charmercsel .charmercpic.doll1');

            if (!mainDoll1Active) {
                mainDoll1.click();
            }

            if (avatar) {
                function Ka() {
                    const tabs = document.querySelectorAll('#inventory_nav .awesome-tabs');
                    const itemTab4 = tabs[3]; // index 3 = tab thứ 4
                    const itemTab1 = tabs[0]; // index 0 = tab thứ 1
                
                    const A = avatar.getBoundingClientRect();
                    const x = A.left;
                    const y = A.top;
                
                    itemTab4.click();
                
                    setTimeout(() => {
                        let item = document.querySelector('#inv .ui-draggable.ui-droppable.ui-draggable-handle');
                
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
                            }, 300); // delay chờ tab 1 load
                        } else {
                            dragItemToAvatar(item, x, y);
                        }
                    }, 300); // delay chờ tab 4 load
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
        console.log('Heal dang tat');
    }
}
heal();