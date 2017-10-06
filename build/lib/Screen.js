"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class represents the game's screen (canvas).<br>
 * It makes it easy to access the width, height and offsets properties of the
 * game's screen from anywhere in your game.
 */
var Screen = /** @class */ (function () {
    function Screen() {
    }
    Object.defineProperty(Screen, "width", {
        /**
         * The width of the game's canvas.
         */
        get: function () {
            return this._canvas.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Screen, "height", {
        /**
         * The height of the game's canvas.
         */
        get: function () {
            return this._canvas.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Screen, "offsetWidth", {
        /**
         * The offset width of the game's canvas.
         */
        get: function () {
            return this._canvas.offsetWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Screen, "offsetHeight", {
        /**
         * The offset height of the game's canvas.
         */
        get: function () {
            return this._canvas.offsetHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Screen, "offsetX", {
        /**
         * The offset left of the game canvas.
         */
        get: function () {
            return this._canvas.offsetLeft;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Screen, "offsetY", {
        /**
         * The offset top of the game canvas.
         */
        get: function () {
            return this._canvas.offsetTop;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Used internally to initialise the Screen class.
     * @param canvas The game's canvas.
     */
    Screen._init = function (canvas) {
        this._canvas = canvas;
    };
    return Screen;
}());
exports.Screen = Screen;
//# sourceMappingURL=Screen.js.map