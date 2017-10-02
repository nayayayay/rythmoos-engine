"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Map_1 = require("./Map");
var Keyboard = /** @class */ (function () {
    function Keyboard() {
    }
    Keyboard.keyDown = function (key) {
        return this._keys.get(key) || false;
    };
    Keyboard.keyPressed = function (key) {
        return this._pressed.indexOf(key) !== -1;
    };
    Keyboard._init = function () {
        var _this = this;
        this._keys = new Map_1.Map();
        window.addEventListener('keydown', function (e) {
            e.preventDefault();
            _this._keys.set(e.code, true);
            _this._pressed.push(e.code);
        });
        window.addEventListener('keyup', function (e) {
            e.preventDefault();
            _this._keys.set(e.code, false);
        });
        window.addEventListener('keypress', function (e) {
            e.preventDefault();
        });
    };
    Keyboard._update = function () {
        this._pressed = [];
    };
    return Keyboard;
}());
exports.Keyboard = Keyboard;
//# sourceMappingURL=Keyboard.js.map