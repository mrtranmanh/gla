const enableReloadpage = 1;
const shouldEnableReload = enableReloadpage === 1 ? true : false;

if (shouldEnableReload) {
    console.log('reloadpage co hoat dong');
    setInterval(function () {
        const autoGoActive = sessionStorage.getItem('autoGoActive') === "true";
        if (autoGoActive) {
            console.log('autoGoActive is active -> reloadpage');
            location.reload();
        } else {
            console.log('autoGoActive is inactive -> skip reloadpage');
        }
    }, 3 * 60 * 1000);
} else {
    console.log('reloadpage khong hoat dong');
}
