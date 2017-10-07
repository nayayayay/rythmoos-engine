"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Renderer_1 = require("./Renderer");
var Scene_1 = require("./Scene");
var Mouse_1 = require("./Mouse");
var Keyboard_1 = require("./Keyboard");
var Screen_1 = require("./Screen");
var Loader_1 = require("./Loader");
var State_1 = require("./State");
var Time_1 = require("./Time");
var VirtualContext_1 = require("./VirtualContext");
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
        this._container = container;
        this._scene = new Scene_1.Scene();
        this._scene.game = this;
        this._canvas = document.createElement('canvas');
        this._renderer = new Renderer_1.Renderer(this._canvas.getContext('2d'));
        this._running = false;
        this._framerate = 60;
        this._frameID = 0;
        this._startTime = 0;
        this._loopEngine = 0;
        if (window.performance !== undefined) {
            if (performance.now !== undefined) {
                this._now = function () {
                    return performance.now();
                };
            }
            else {
                this._now = function () {
                    return Date.now();
                };
            }
        }
        else {
            this._now = function () {
                return Date.now();
            };
        }
        this._canvas.width = width;
        this._canvas.height = height;
        this._container.appendChild(this._canvas);
        VirtualContext_1.VirtualContext._init();
        Screen_1.Screen._init(this._canvas);
        Mouse_1.Mouse._init(this._canvas);
        Keyboard_1.Keyboard._init();
        State_1.State._init();
        Loader_1.Loader._init(this);
    }
    Object.defineProperty(Game.prototype, "width", {
        /**
         * The width of the game's canvas.
         */
        get: function () {
            return this._canvas.width;
        },
        set: function (width) {
            this._canvas.width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "height", {
        /**
         * The height of the game's canvas.
         */
        get: function () {
            return this._canvas.height;
        },
        set: function (height) {
            this._canvas.height = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "container", {
        /**
         * The HTML element that contains the game's canvas.
         */
        get: function () {
            return this._container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "canvas", {
        /**
         * The game's canvas object.
         */
        get: function () {
            return this._canvas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "running", {
        /**
         * Whether the game is running or not.
         */
        get: function () {
            return this._running;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "renderer", {
        /**
         * The game's renderer.
         */
        get: function () {
            return this._renderer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "scene", {
        /**
         * The game's current scene.
         */
        get: function () {
            return this._scene;
        },
        set: function (scene) {
            scene.game = this;
            this._scene = scene;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "framerate", {
        /**
         * The framerate of the game.<br>
         * If you need the actual FPS the game is rendering, refer to Time#FPS.
         */
        get: function () {
            return this._framerate;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set a new framerate for the game.<br>
     * Set to 0 to uncap the framerate (some chromium based browsers will cap it at 250fps).
     * @param framerate The new framerate to use.
     */
    Game.prototype.setFramerate = function (framerate) {
        if (this._framerate === framerate)
            return;
        if (this._loopEngine === 0) {
            cancelAnimationFrame(this._frameID);
        }
        else {
            clearInterval(this._frameID);
        }
        this._framerate = framerate;
        this._startLoop();
    };
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
        if (this._running)
            return;
        this._running = true;
        this.create();
        window.focus();
        this._startTime = this._now();
        this._startLoop();
    };
    Game.prototype._startLoop = function () {
        var _this = this;
        if (this.framerate === 60) {
            this._loopEngine = 0;
            this._loop();
        }
        else {
            this._loopEngine = 1;
            this._frameID = setInterval(function () {
                _this._loop();
            }, 1000 / this.framerate);
        }
    };
    Game.prototype._loop = function () {
        var _this = this;
        // Request update if needed
        if (this._loopEngine === 0) {
            this._frameID = requestAnimationFrame(function () {
                _this._loop();
            });
        }
        // Update time
        Time_1.Time._setFrame(this._getNewTime());
        // Update game, scene, game objects
        this.update();
        this._scene.update();
        for (var _i = 0, _a = this._scene.getAll(); _i < _a.length; _i++) {
            var gameObject = _a[_i];
            gameObject.update();
        }
        // Render scene
        this._renderer.render(this._scene);
        // Update input states
        Mouse_1.Mouse._update();
        Keyboard_1.Keyboard._update();
    };
    Game.prototype._getNewTime = function () {
        return this._startTime - this._now();
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=Game.js.map