function buymerchan() {

    const enableBuymerchan = 0;
    const aboveGold = 20.000;

    const player = {
        level: Number(document.getElementById("header_values_level").textContent.trim()),
        hp: Number(document.getElementById("header_values_hp_percent").textContent.trim().replace(/[^0-9]/g, '')),
        gold: Number(document.getElementById("sstat_gold_val").textContent.trim().replace(/\./g, '')),
    };

    const menuItems = document.querySelectorAll('#mainmenu #submenu1 a.menuitem');

    if (enableBuymerchan === 1) {
        console.log('buymerchan da duoc bat');

        if ( player.gold > aboveGold && !window.location.href.includes("mod=inventory&sub=1")) { 
            menuItems.forEach(menuItem => {
                if (menuItem.textContent.trim() === "Weapon smith") {
                    menuItem.click()
                }
            });
        } else if ( player.gold > aboveGold && window.location.href.includes("mod=inventory&sub=1")) {

            var itemTab1 = document.querySelector('#inventory_nav .awesome-tabs');
            itemTab1.click();

         }

    } else {
        console.log('buymerchan dang tat');
    }

}
buymerchan();
