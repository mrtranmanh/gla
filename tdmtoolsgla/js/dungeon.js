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