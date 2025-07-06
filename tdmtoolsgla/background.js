let color = '#3aa757';

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    chrome.storage.sync.set({ color }, () => {
        console.log('Default background color set to %cgreen', `color: ${color}`);
        sendResponse({ success: true });
    });
    
    return true; // giữ message channel mở cho async callback
});