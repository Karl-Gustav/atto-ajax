(function(global) {
    global.atto = function(config) {
        var _doneHandler, _errorHandler, _finallyHandler;
        var request = new XMLHttpRequest();
        request.open(config.method || 'GET', config.url, true);

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                _doneHandler && _doneHandler(request.responseText, request);
            } else {
                _errorHandler && _errorHandler(
                    new Error(request.responseText || request.statusText), request
                );
            }
            _finallyHandler && _finallyHandler(null, request)
        };

        for (var key in config.headers) {
            if (config.headers.hasOwnProperty(key)) {
                request.setRequestHeader(key, config.headers[key]);
            }
        }

        request.onerror = function() {
            var e = new Error('Connection error');
            _errorHandler && _errorHandler(e, {});
            _finallyHandler && _finallyHandler(e)
        };
        setTimeout(function() {
            request.send(config.data);
        });


        return {
            done: function (doneHandler) {
                _doneHandler = doneHandler;
                return this;
            },
            error: function (errorHandler) {
                _errorHandler = errorHandler;
                return this;
            },
            finally: function (finallyHandler) {
                _finallyHandler = finallyHandler;
                return this;
            }
        };
    }
}(window))
