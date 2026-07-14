const enableReloadpage = 1;
const shouldEnableReload = enableReloadpage === 1 ? true : false;

if (shouldEnableReload) {
    console.log('reloadpage co hoat dong');
    setInterval(function () {
        const autoGoActive = sessionStorage.getItem('autoGoActive') === "true";
        if (autoGoActive) {
            const currentMod = new URLSearchParams(window.location.search).get('mod');
            if (currentMod === 'quests') {
                console.log('autoGoActive is active -> skip reloadpage on quests');
                return;
            }

            console.log('autoGoActive is active -> reloadpage');
            location.reload();
        } else {
            console.log('autoGoActive is inactive -> skip reloadpage');
        }
    }, 3 * 60 * 1000);
} else {
    console.log('reloadpage khong hoat dong');
}
