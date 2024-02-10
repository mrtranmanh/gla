if (window.location.href.includes("mod=arena") && window.location.href.includes("submod=serverArena")) {
    // Mục tiêu cần quan sát
    const targetNode = document.body;

    // Tạo một đối tượng MutationObserver với một hàm callback
    const observer = new MutationObserver(function(mutationsList, observer) {
        // Kiểm tra mỗi mutation
        for (const mutation of mutationsList) {
            // Kiểm tra nếu có thêm phần tử mới
            if (mutation.type === 'childList') {
                // Kiểm tra xem phần tử blackoutDialogbod có xuất hiện trong body hay không
                const blackoutDialogbod = document.querySelector('#blackoutDialogbod.cancel_confirm');
                const goBlackoutDialogbod = document.querySelector('#blackoutDialogbod.cancel_confirm #linkbod');

                if (blackoutDialogbod) {
                    // Kiểm tra xem blackoutDialogbod có display: block không
                    const computedStyle = window.getComputedStyle(blackoutDialogbod);
                    const displayValue = computedStyle.getPropertyValue('display');

                    if (displayValue === 'block') {
                        // Phần tử blackoutDialogbod có display: block
                        console.log('Phần tử blackoutDialogbod đã xuất hiện và có display: block');
                        goBlackoutDialogbod.click();
                    } else {
                        console.log('Phần tử blackoutDialogbod đã xuất hiện nhưng không có display: block');
                    }

                    // Ngừng quan sát sau khi thực hiện hành động
                    // observer.disconnect();
                }
            }
        }
    });

    // Thiết lập các loại mutation bạn muốn quan sát (ở đây là thêm nút con)
    const config = { childList: true };

    // Bắt đầu quan sát trên targetNode với các thiết lập đã cung cấp
    observer.observe(targetNode, config);
}
