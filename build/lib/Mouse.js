"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Map the mouse input.
 */
var Mouse = /** @class */ (function () {
    function Mouse() {
    }
    Object.defineProperty(Mouse, "cursorX", {
        /**
         * The X position of the cursor in the window.
         */
        get: function () {
            return this._cursorX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "cursorY", {
        /**
         * The Y position of the cursor in the window.
         */
        get: function () {
            return this._cursorY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "movementX", {
        /**
         * The cursor movement in the X axis, in pixels.
         */
        get: function () {
            return this._movementX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "movementY", {
        /**
         * The cursor movement in the Y axis, in pixels.
         */
        get: function () {
            return this._movementY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "leftButtonDown", {
        /**
         * Whether the left button is down or not.
         */
        get: function () {
            return this._leftButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "middleButtonDown", {
        /**
         * Whether the middle (wheel) button is down or not.
         */
        get: function () {
            return this._middleButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "rightButtonDown", {
        /**
         * Whether the right button is down or not.
         */
        get: function () {
            return this._rightButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "leftButtonUp", {
        /**
         * Whether the left button is up or not.
         */
        get: function () {
            return !this._leftButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "middleButtonUp", {
        /**
         * Whether the middle button (wheel) is up or not.
         */
        get: function () {
            return !this._middleButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "rightButtonUp", {
        /**
         * Whether the right button is up or not.
         */
        get: function () {
            return !this._rightButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "leftClick", {
        /**
         * Evaluate to true when a left click occurs.
         */
        get: function () {
            return this._leftClick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "middleClick", {
        /**
         * Evaluate to true when a middle (wheel) click occurs.
         */
        get: function () {
            return this._middleClick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "rightClick", {
        /**
         * Evaluate to true when a right click occurs.
         */
        get: function () {
            return this._rightClick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollX", {
        /**
         * The scroll movement in the X axis.<br>
         * Possible values: -1 (scroll to -x), 0 (no scroll x), 1 (scroll to +x).
         */
        get: function () {
            return this._scrollX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollY", {
        /**
         * The scroll movement in the Y axis.<br>
         * Possible values: -1 (scroll to -y), 0 (no scroll y), 1 (scroll to +y).
         */
        get: function () {
            return this._scrollY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollUp", {
        /**
         * Evaluate to true when the user is scrolling up.
         */
        get: function () {
            return this._scrollY === -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollDown", {
        /**
         * Evaluate to true when the user is scrolling down.
         */
        get: function () {
            return this._scrollY === 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollLeft", {
        /**
         * Evaluate to true when the user is scrolling left.
         */
        get: function () {
            return this._scrollX === -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollRight", {
        /**
         * Evaluate to true when the user is scrolling right.
         */
        get: function () {
            return this._scrollY === 1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Used internally to initialise the mouse input.
     * @param canvas The game's canvas.
     */
    Mouse._init = function (canvas) {
        var _this = this;
        canvas.addEventListener('mousemove', function (e) {
            _this._cursorX = e.clientX - canvas.offsetLeft;
            _this._cursorY = e.clientY - canvas.offsetTop;
            _this._movementX += e.movementX;
            _this._movementY += e.movementY;
        });
        canvas.addEventListener('mousedown', function (e) {
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
                if (!_this._leftButton && !_this._middleButton && !_this._rightButton)
                    return;
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
            canvas.addEventListener('contextmenu', function (e) {
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
    /**
     * Used internally to update the mouse input states.
     */
    Mouse._update = function () {
        this._movementX = 0;
        this._movementY = 0;
        this._scrollX = 0;
        this._scrollY = 0;
        this._leftClick = false;
        this._middleClick = false;
        this._rightClick = false;
    };
    Mouse._cursorX = 0;
    Mouse._cursorY = 0;
    Mouse._movementX = 0;
    Mouse._movementY = 0;
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