"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Map_1 = require("./Map");
/**
 * A scene contains all the game objects in a specific "word" of your game.<br>
 * For example, you may have a "MainScreen" scene that will contain everything
 * that is in the main screen of your game.<br>
 * You could then have a "Level1" scene that will contain the level 1 of you game. etc.
 */
var Scene = /** @class */ (function (_super) {
    __extends(Scene, _super);
    function Scene() {
        var _this = _super.call(this) || this;
        _this.create();
        return _this;
    }
    /**
     * Called the the scene is created.<br>
     * You can set your game objects (UI, characters, music, etc) from here.
     */
    Scene.prototype.create = function () {
    };
    /**
     * Run every frame to update the scene.<br>
     * This is useful when you want an update to run as long as your scene is
     * being rendered, independently from the game objects it contains.
     */
    Scene.prototype.update = function () {
    };
    /**
     * Used internally to update the scene and its game objects.
     */
    Scene.prototype._runUpdate = function () {
        this.update();
        for (var _i = 0, _a = this.getAll(); _i < _a.length; _i++) {
            var gameObject = _a[_i];
            gameObject.update();
        }
    };
    /**
     * Used internally by the renderer to render the scene.
     * @param context The renderer's context, automatically passed in.
     */
    Scene.prototype._runRender = function (context) {
        for (var _i = 0, _a = this.getAll(); _i < _a.length; _i++) {
            var gameObject = _a[_i];
            gameObject.render(context);
        }
    };
    return Scene;
}(Map_1.Map));
exports.Scene = Scene;
//# sourceMappingURL=Scene.js.map