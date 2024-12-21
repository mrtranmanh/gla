const enableReloadpage = 1;
const shouldEnableReload = enableReloadpage === 1 ? true : false;

if (shouldEnableReload) {
    console.log('reloadpage co hoat dong');
    setInterval(function () {
        location.reload();
    }, 3 * 60 * 1000);
} else {
    console.log('reloadpage khong hoat dong');
}
