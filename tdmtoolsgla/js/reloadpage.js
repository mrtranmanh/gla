(function () {
    'use strict';

    const enableReloadpage = 1;
    if (enableReloadpage !== 1) {
        console.log('reloadpage khong hoat dong');
        return;
    }

    console.log('reloadpage co hoat dong');

    // Thoi gian toi da cho phep trang dung yen: 3 phut
    const STUCK_TIMEOUT_MS = 3 * 60 * 1000;
    // Chu ky kiem tra: moi 15 giay
    const CHECK_INTERVAL_MS = 15 * 1000;

    let lastProgressTime = Date.now();
    let lastCountdownText = '';
    let lastUserActionTime = 0;

    // Ghi nhan tuong tac cua nguoi dung de tranh reload khi nguoi dung dang thao tac tay
    ['click', 'keydown', 'wheel'].forEach(function (eventType) {
        window.addEventListener(eventType, function () {
            lastUserActionTime = Date.now();
        }, { passive: true });
    });

    function isSafeToReload() {
        // Neu nguoi dung vua thao tac tay trong vong 20 giay: tam hoan reload
        if (Date.now() - lastUserActionTime < 20 * 1000) {
            return false;
        }

        const currentMod = new URLSearchParams(window.location.search).get('mod') || '';
        // Chi bo qua cac trang thao tac thu cong de tranh mat du lieu/do
        const skipMods = ['guildMarket', 'forge', 'guildStorage', 'packages'];
        if (skipMods.includes(currentMod)) {
            return false;
        }

        return true;
    }

    function checkStuck() {
        const autoGoActive = sessionStorage.getItem('autoGoActive') === "true";
        if (!autoGoActive) {
            return;
        }

        if (!isSafeToReload()) {
            lastProgressTime = Date.now();
            return;
        }

        const nextActionWindow = document.getElementById("nextActionWindow");
        if (nextActionWindow) {
            const currentText = nextActionWindow.innerText.trim();

            // Neu dong ho dem nguoc van dang nhay so binh thuong thi khong reload
            if (currentText !== lastCountdownText) {
                lastCountdownText = currentText;
                lastProgressTime = Date.now();

                // Neu dong ho da ve 0:00:00 ma qua 15 giay van ket tai cho: bi treo
                if (currentText.includes("0:00:00")) {
                    const zeroTime = Number(sessionStorage.getItem('tdmZeroCountdownAt') || 0);
                    if (!zeroTime) {
                        sessionStorage.setItem('tdmZeroCountdownAt', String(Date.now()));
                    } else if (Date.now() - zeroTime > 15 * 1000) {
                        console.log('[TDM Reload] Dem nguoc da ve 0 nhung bot bi ket khong chuyen trang -> reload');
                        sessionStorage.removeItem('tdmZeroCountdownAt');
                        location.reload();
                        return;
                    }
                } else {
                    sessionStorage.removeItem('tdmZeroCountdownAt');
                }
                return;
            }
        }

        // Neu khong co bang dem nguoc (vi du dang o trang quests hoac cac trang khac)
        // hoac bang dem nguoc bi dong bang dung im qua 2.5 phut:
        const idleDuration = Date.now() - lastProgressTime;
        if (idleDuration >= STUCK_TIMEOUT_MS) {
            console.log('[TDM Reload] Trang dung yen qua ' + Math.round(idleDuration / 1000) + 's -> reload');
            sessionStorage.removeItem('tdmZeroCountdownAt');
            location.reload();
        }
    }

    setInterval(checkStuck, CHECK_INTERVAL_MS);
})();
