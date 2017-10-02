"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Renderer_1 = require("./Renderer");
var Scene_1 = require("./Scene");
var Loop_1 = require("./Loop");
var Mouse_1 = require("./Mouse");
var Keyboard_1 = require("./Keyboard");
var Loader_1 = require("./Loader");
var Game = /** @class */ (function () {
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
        Loader_1.Loader._init(this);
    }
    Game.prototype.load = function () {
    };
    Game.prototype.create = function () {
    };
    Game.prototype.update = function () {
    };
    Game.prototype._start = function () {
        var _this = this;
        if (this._running)
            return;
        this._running = true;
        this.create();
        Mouse_1.Mouse._init();
        Keyboard_1.Keyboard._init();
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