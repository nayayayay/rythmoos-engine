"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Time = /** @class */ (function () {
    function Time() {
    }
    Time._setFrame = function (frame) {
        this._deltaTime = frame - this._time;
        this._time = frame;
    };
    Object.defineProperty(Time, "deltaTime", {
        get: function () {
            return this._deltaTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Time, "time", {
        get: function () {
            return this._time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Time, "FPS", {
        get: function () {
            return 1000 / this._deltaTime;
        },
        enumerable: true,
        configurable: true
    });
    Time._deltaTime = 0;
    Time._time = 0;
    return Time;
}());
exports.Time = Time;
//# sourceMappingURL=Time.js.map