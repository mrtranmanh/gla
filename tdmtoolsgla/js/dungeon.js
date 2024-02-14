function dungeon() {
    const enableDungeon = 1;

    if (enableDungeon === 1) {
        console.log('Dungeon da duoc bat');

        const player = {
            level: Number(document.getElementById("header_values_level").textContent.trim()),
            hp: Number(document.getElementById("header_values_hp_percent").textContent.trim().replace(/[^0-9]/g, '')),
            gold: Number(document.getElementById("sstat_gold_val").textContent.trim().replace(/\./g, '')),
        };

        if ( player.level > 100 && window.location.href.includes("mod=dungeon")) {

            const dungeonMonster = document.querySelectorAll('#content .map_label');
            const dungeonCancel = document.querySelector('#content form .button1[type="submit"]');
        
            let checkBoss = false;
            dungeonMonster.forEach(monster => {
                if (monster.textContent.trim() === 'Boss') {
                    console.log('Have Boss.');
                    checkBoss = true;
                } else {
                    console.log('No boss');    
                }
            });
        
            if (checkBoss) {
                dungeonCancel.click();
            }
        }

    } else {
        console.log('Dungeon chua duoc bat');
    }
}
dungeon();