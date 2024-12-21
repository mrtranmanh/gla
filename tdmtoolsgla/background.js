let color = '#3aa757';
chrome.runtime.onMessage.addListener(function() {
    Chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
});  