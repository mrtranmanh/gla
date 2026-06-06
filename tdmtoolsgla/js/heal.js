function heal() {
    if (sessionStorage.getItem('autoGoActive') !== 'true') {
        console.log('Heal khong chay vi Auto GO dang tat');
        return;
    }

    const enableHeal = localStorage.getItem('healEnabled') === null ? true : localStorage.getItem('healEnabled') === "true";
    const savedUnderHP = Number(localStorage.getItem('healUnderHP'));
    const underHP = Number.isNaN(savedUnderHP) || savedUnderHP < 1 ? 40 : Math.min(100, savedUnderHP);
    const healTabs = getHealTabs();
    
    const player = {
        level: Number(document.getElementById("header_values_level").textContent.trim()),
        hp: Number(document.getElementById("header_values_hp_percent").textContent.trim().replace(/[^0-9]/g, '')),
        gold: Number(document.getElementById("sstat_gold_val").textContent.trim().replace(/\./g, '')),
    };
    
    const mainMenu = {
        overview: document.querySelector('#mainmenu a.menuitem[title="Overview"]'),
    }

    const avatar = document.querySelector('#avatar .ui-droppable');
    
    if (enableHeal && !window.location.href.includes("mod=auction") && !window.location.href.includes("mod=training")) {
        console.log('Heal đã được bật tại HP dưới: ' + underHP + ', tabs: ' + healTabs.join(', '));
    
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
                    const selectedTabs = healTabs
                        .map(function (tab) {
                            return {
                                number: tab,
                                element: tabs[tab - 1]
                            };
                        })
                        .filter(function (tab) {
                            return tab.element;
                        });

                    const A = avatar.getBoundingClientRect();
                    const x = A.left;
                    const y = A.top;

                    if (!selectedTabs.length) {
                        console.log('❌ Chưa chọn tab inventory để heal.');
                        return;
                    }

                    tryHealFromTab(0, selectedTabs, x, y);
                }

                function tryHealFromTab(index, selectedTabs, x, y) {
                    const selectedTab = selectedTabs[index];

                    if (!selectedTab) {
                        console.log('❌ Không có item ở các tab đã chọn.');
                        return;
                    }

                    selectedTab.element.click();

                    setTimeout(() => {
                        let item = document.querySelector('#inv .ui-draggable.ui-droppable.ui-draggable-handle');

                        if (item) {
                            dragItemToAvatar(item, x, y);
                            return;
                        }

                        console.log('❌ Không có item ở tab ' + selectedTab.number + ', chuyển tab tiếp theo');
                        tryHealFromTab(index + 1, selectedTabs, x, y);
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

    function getHealTabs() {
        if (!localStorage.getItem('healTabs')) {
            return [5, 4, 1];
        }

        try {
            const savedTabs = JSON.parse(localStorage.getItem('healTabs'));

            if (!Array.isArray(savedTabs)) {
                return [5, 4, 1];
            }

            return savedTabs
                .map(function (tab) {
                    return Number(tab);
                })
                .filter(function (tab, index, tabs) {
                    return tab >= 1 && tab <= 5 && tabs.indexOf(tab) === index;
                });
        } catch (error) {
            return [5, 4, 1];
        }
    }
}
heal();
