// ==UserScript==
// @name         Gladiatus Script
// @version      2.6.4
// @description  Dodatek do gry Gladiatus
// @author       Eryk Bodziony
// @match        *://*.gladiatus.gameforge.com/game/index.php*
// @exclude      *://*.gladiatus.gameforge.com/game/index.php?mod=start
// @downloadURL  https://github.com/ebodziony/gladiatus-script/raw/master/gladiatus-script.js
// @updateURL    https://github.com/ebodziony/gladiatus-script/raw/master/gladiatus-script.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @resource     customCSS_global  https://raw.githubusercontent.com/ebodziony/gladiatus-script/master/global.css?ver=2.6.4
// ==/UserScript==


(function() {
    'use strict';

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

})();