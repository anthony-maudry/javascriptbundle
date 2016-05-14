var listener = new function ActionListener() {
    var registered = [];

    this.register = function (action, callback) {
        registered[action] = callback;
    };

    this.unregister = function (action) {
        registered[action] = null;
        delete(registered[action]);
    };

    document.querySelector('body').addEventListener('click', function (e) {
        var target = e.target;
        do {
            var action = target.dataset ? target.dataset.action : null;
            if (action && registered[action]) {
                registered[action].apply(target, [e]);
            }
        } while (target = target.parentNode);
    }, true);
};