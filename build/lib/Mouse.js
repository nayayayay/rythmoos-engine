"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mouse = /** @class */ (function () {
    function Mouse() {
    }
    Object.defineProperty(Mouse, "cursorX", {
        get: function () {
            return this._cursorX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "cursorY", {
        get: function () {
            return this._cursorY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "leftButtonDown", {
        get: function () {
            return this._leftButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "middleButtonDown", {
        get: function () {
            return this._middleButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "rightButtonDown", {
        get: function () {
            return this._rightButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "leftClick", {
        get: function () {
            return this._leftClick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "middleClick", {
        get: function () {
            return this._middleClick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "rightClick", {
        get: function () {
            return this._rightClick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollX", {
        get: function () {
            return this._scrollX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollY", {
        get: function () {
            return this._scrollY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollTop", {
        get: function () {
            return this._scrollY === -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollDown", {
        get: function () {
            return this._scrollY === 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollLeft", {
        get: function () {
            return this._scrollX === -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollRight", {
        get: function () {
            return this._scrollY === 1;
        },
        enumerable: true,
        configurable: true
    });
    Mouse._init = function () {
        var _this = this;
        window.addEventListener('mousemove', function (e) {
            _this._cursorX = e.clientX;
            _this._cursorY = e.clientY;
        });
        window.addEventListener('mousedown', function (e) {
            e.preventDefault();
            switch (e.button) {
                case 0:
                    _this._leftButton = true;
                    _this._leftClick = true;
                    break;
                case 1:
                    _this._middleButton = true;
                    _this._middleClick = true;
                    break;
                case 2:
                    _this._rightButton = true;
                    _this._rightClick = true;
                    break;
                default:
                    break;
            }
            window.addEventListener('mouseup', function (e) {
                e.preventDefault();
                switch (e.button) {
                    case 0:
                        _this._leftButton = false;
                        break;
                    case 1:
                        _this._middleButton = false;
                        break;
                    case 2:
                        _this._rightButton = false;
                        break;
                    default:
                        break;
                }
            });
            window.addEventListener('contextmenu', function (e) {
                e.preventDefault();
            });
            window.addEventListener('wheel', function (e) {
                e.preventDefault();
                if (e.deltaX > 0) {
                    _this._scrollX = 1;
                }
                else if (e.deltaX < 0) {
                    _this._scrollX = -1;
                }
                else {
                    _this._scrollX = 0;
                }
                if (e.deltaY > 0) {
                    _this._scrollY = 1;
                }
                else if (e.deltaY < 0) {
                    _this._scrollY = -1;
                }
                else {
                    _this._scrollY = 0;
                }
            });
            window.addEventListener('blur', function () {
                _this._leftButton = false;
                _this._middleButton = false;
                _this._rightButton = false;
            });
        });
    };
    Mouse._update = function () {
        this._scrollX = 0;
        this._scrollY = 0;
        this._leftClick = false;
        this._middleClick = false;
        this._rightClick = false;
    };
    Mouse._cursorX = 0;
    Mouse._cursorY = 0;
    Mouse._leftButton = false;
    Mouse._leftClick = false;
    Mouse._middleButton = false;
    Mouse._middleClick = false;
    Mouse._rightButton = false;
    Mouse._rightClick = false;
    Mouse._scrollX = 0;
    Mouse._scrollY = 0;
    return Mouse;
}());
exports.Mouse = Mouse;
//# sourceMappingURL=Mouse.js.map