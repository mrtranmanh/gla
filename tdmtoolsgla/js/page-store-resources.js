(function () {
    'use strict';

    const script = document.currentScript;
    const requestId = script && script.dataset.requestId;
    const url = script && script.dataset.url;

    function done(detail) {
        if (!requestId) {
            return;
        }

        window.dispatchEvent(new CustomEvent(requestId, { detail }));
    }

    if (!requestId || !url) {
        done({ ok: false, error: 'Missing store resources request data.' });
        return;
    }

    try {
        if (window.jQuery && window.jQuery.post) {
            window.jQuery.post(url, {})
                .done(function (data, textStatus, xhr) {
                    done({
                        ok: true,
                        status: xhr && xhr.status,
                        text: typeof data === 'string' ? data : '',
                    });
                })
                .fail(function (xhr, textStatus, errorThrown) {
                    done({
                        ok: false,
                        status: xhr && xhr.status,
                        text: xhr && xhr.responseText,
                        error: errorThrown || textStatus,
                    });
                });
            return;
        }

        const xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.onload = function () {
            done({
                ok: xhr.status >= 200 && xhr.status < 300,
                status: xhr.status,
                text: xhr.responseText || '',
            });
        };
        xhr.onerror = function () {
            done({ ok: false, status: xhr.status, error: 'XHR error' });
        };
        xhr.send('');
    } catch (error) {
        done({ ok: false, error: error && (error.message || String(error)) });
    }
})();
