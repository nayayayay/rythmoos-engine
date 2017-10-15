"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Map_1 = require("./Map");
/**
 * Map the keyboard and the state of each keys.
 */
var Keyboard = /** @class */ (function () {
    function Keyboard() {
    }
    /**
     * Check if a key is down.
     * @param key The key to check.
     */
    Keyboard.keyDown = function (key) {
        return this._keys.get(key) || false;
    };
    /**
     * Check if a key is pressed (fires only when the key is clicked).
     * @param key The key to check.
     */
    Keyboard.keyPressed = function (key) {
        return this._pressed.indexOf(key) !== -1;
    };
    Object.defineProperty(Keyboard, "lastKey", {
        /**
         * Tast key that was pressed.<br>
         * Can for example be used in a settings menu when asking the user the desired
         * key-binding.<br>
         * The value is reset to null or to the new last key each frame.
         */
        get: function () {
            return this._lastKey;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Used internally to initialise the keyboard input.
     */
    Keyboard._init = function () {
        var _this = this;
        this.preventDefault = false;
        this._keys = new Map_1.Map();
        this._pressed = [];
        this._lastKey = null;
        window.addEventListener('keydown', function (e) {
            if (_this.preventDefault)
                e.preventDefault();
            _this._keys.set(e.code, true);
            _this._pressed.push(e.code);
            _this._lastKey = e.code;
        });
        window.addEventListener('keyup', function (e) {
            if (_this.preventDefault)
                e.preventDefault();
            _this._keys.set(e.code, false);
        });
        window.addEventListener('keypress', function (e) {
            if (_this.preventDefault)
                e.preventDefault();
        });
    };
    /**
     * Used internally to update the keyboard's keys state.
     */
    Keyboard._update = function () {
        this._pressed = [];
        this._lastKey = null;
    };
    return Keyboard;
}());
exports.Keyboard = Keyboard;
//# sourceMappingURL=Keyboard.js.map