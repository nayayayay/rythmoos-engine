"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Renderer_1 = require("./Renderer");
var Scene_1 = require("./Scene");
var Loop_1 = require("./Loop");
var Mouse_1 = require("./Mouse");
var Keyboard_1 = require("./Keyboard");
var Screen_1 = require("./Screen");
var Loader_1 = require("./Loader");
var State_1 = require("./State");
/**
 * The base class of any game.
 */
var Game = /** @class */ (function () {
    /**
     * Create a Game.
     * @param width The width of the game.
     * @param height The height of the game.
     * @param container The HTML parent element for the game's canvas.
     */
    function Game(width, height, container) {
        this.width = width;
        this.height = height;
        this.container = container;
        this.scene = new Scene_1.Scene();
        this._canvas = document.createElement('canvas');
        this._renderer = new Renderer_1.Renderer(this._canvas.getContext('2d'));
        this._running = false;
        this._canvas.width = this.width;
        this._canvas.height = this.height;
        this.container.appendChild(this._canvas);
        Screen_1.Screen._init(this._canvas);
        Mouse_1.Mouse._init(this._canvas);
        Keyboard_1.Keyboard._init();
        State_1.State._init();
        Loader_1.Loader._init(this);
    }
    /**
     * Called when the game is launched.<br>
     * Useful for assets loading.
     */
    Game.prototype.load = function () {
    };
    /**
     * Called when the game is ready to run, just before it starts.<br>
     * You can set a scene and access the loaded assets safely from here.
     */
    Game.prototype.create = function () {
    };
    /**
     * Called before rendering a frame.<br>
     * You can specify things to run every frame as long as your game is running.
     */
    Game.prototype.update = function () {
    };
    /**
     * Used internally to start the game.
     */
    Game.prototype._start = function () {
        var _this = this;
        if (this._running)
            return;
        this._running = true;
        this.create();
        window.focus();
        Loop_1.Loop.start(function () {
            _this.update();
            _this.scene._runUpdate();
            _this._renderer.render(_this.scene);
            Mouse_1.Mouse._update();
            Keyboard_1.Keyboard._update();
        });
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=Game.js.map