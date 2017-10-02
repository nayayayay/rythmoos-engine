"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Time_1 = require("./Time");
/**
 * Used internally to run the game.
 */
var Loop = /** @class */ (function () {
    function Loop() {
    }
    Loop.start = function (callback) {
        var _this = this;
        if (this._animationFrame === 0) {
            this._callback = callback;
            this._animationFrame = window.requestAnimationFrame(function (frame) {
                _this._update(frame);
            });
        }
    };
    Loop.stop = function () {
        if (this._animationFrame !== 0) {
            window.cancelAnimationFrame(this._animationFrame);
            this._animationFrame = 0;
        }
    };
    Loop._update = function (frame) {
        var _this = this;
        this._animationFrame = window.requestAnimationFrame(function (frame) {
            _this._update(frame);
        });
        Time_1.Time._setFrame(frame);
        this._callback();
    };
    Loop._animationFrame = 0;
    return Loop;
}());
exports.Loop = Loop;
//# sourceMappingURL=Loop.js.map