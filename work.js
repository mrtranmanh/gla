// ==UserScript==
// @name         Work Gla
// @namespace    http://tampermonkey.net/
// @version      2024-01-08
// @description  try to take over the world!
// @author       Tran Manh
// @match        *://*.gladiatus.gameforge.com/game/index.php?mod=work*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gameforge.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


// Thiết lập interval để reload trang mỗi 5 phút
setInterval(function () {
    location.reload();
}, 5 * 60 * 1000);

//Work
const workBlacksmith = document.querySelector('#job_row_7');
const workTime = document.querySelector('#workTime');
const workDoWork = document.querySelector('#doWork');

if (workBlacksmith) {
    workBlacksmith.click();
}
if (workTime) {
    workTime.value = '1';
}
if (workDoWork && workTime.value == '1') {
    workDoWork.click();
}


})();