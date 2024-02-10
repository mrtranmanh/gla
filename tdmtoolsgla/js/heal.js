function heal() {
    const enableHeal = 1;
    const underHP = 35;
    
    const player = {
        level: Number(document.getElementById("header_values_level").textContent.trim()),
        hp: Number(document.getElementById("header_values_hp_percent").textContent.trim().replace(/[^0-9]/g, '')),
        gold: Number(document.getElementById("sstat_gold_val").textContent.trim().replace(/\./g, '')),
    };
    
    const mainMenu = {
        overview: document.querySelector('#mainmenu a.menuitem[title="Overview"]'),
    }
    
    const avatar = document.querySelector('#avatar .ui-droppable');
    
    if (enableHeal === 1) {
        console.log('Heal da duoc bat');
    
        if ( player.hp < underHP && !window.location.href.includes("mod=overview")) {
            mainMenu.overview.click();
        } else if ( player.hp < underHP && window.location.href.includes("mod=overview")) {
            
            if (avatar) {
                function Ka() {    
                    var A = avatar.getBoundingClientRect();
                    var x = A.left;
                    var y = A.top;
    
                    window.scrollBy(x, y);
    
                    var itemTab1 = document.querySelector('#inventory_nav .awesome-tabs');
                    itemTab1.click();
    
                    var item = document.querySelector('.inventory_options_group #inv .ui-draggable.ui-droppable.ui-draggable-handle');
    
                    var mousedown = new MouseEvent('mousedown', {
                        bubbles: true,
                        cancelable: true,
                        view: window
                    });
                    item.dispatchEvent(mousedown);
    
                    var mousemove = new MouseEvent('mousemove', {
                        bubbles: true,
                        cancelable: true,
                        view: window,
                        clientX: x + 10,
                        clientY: y + 10 
                    });
                    document.dispatchEvent(mousemove);
    
                    var mouseup = new MouseEvent('mouseup', {
                        bubbles: true,
                        cancelable: true,
                        view: window,
                        clientX: x + 10,
                        clientY: y + 10 
                    });
                    document.dispatchEvent(mouseup);
                    
                    console.log('vi tri can hoi mau la:' + x + '/' + y);
                }
                Ka();
            }
        }
    
    } else {
        console.log('Heal dang tat');
    }
}
heal();