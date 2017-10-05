"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Store time values and make them easy to access from anywhere
 * in your game just by importing this static class.
 */
var Time = /** @class */ (function () {
    function Time() {
    }
    /**
     * Used internally to update the time data.
     * @param frame The total time elapsed in milliseconds, passed in by the browser.
     */
    Time._setFrame = function (frame) {
        this._deltaTime = frame - this._time;
        this._time = frame;
    };
    Object.defineProperty(Time, "deltaTime", {
        /**
         * The time elapsed since the last frame, in milliseconds.<br>
         * Useful for smooth animations that will run at the same speed regardless
         * of the rendering speed.
         */
        get: function () {
            return this._deltaTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Time, "time", {
        /**
         * The time elapsed since the game has started being rendered, in milliseconds.
         */
        get: function () {
            return this._time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Time, "second", {
        /**
         * The deltaTime in second. Useful for animations.<br>
         * Let's say we want our gameObject.x property to move 10 pixels per second, we can do that:
         * gameObject.x += 10 * Time.second;
         */
        get: function () {
            return 1 / this._deltaTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Time, "FPS", {
        /**
         * The average amount of frames per second based on the current deltaTime.
         */
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