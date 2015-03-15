(function() {
    function PageStateTracker(doc) {
        var port = chrome.extension.connect({name : "page-state-tracker"});
        doc.addEventListener("webkitvisibilitychange", onVisibilityChange, false);
        onVisibilityChange();

        function onVisibilityChange() {
            port.postMessage(doc.webkitVisibilityState);
        }
    }

    new PageStateTracker(document);
})();
