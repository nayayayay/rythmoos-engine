var RythmoosEngine =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Map = /** @class */ (function () {
    function Map() {
        this._keys = [];
        this._values = [];
    }
    Map.prototype.get = function (key) {
        var index = this._keys.indexOf(key);
        if (index !== -1) {
            return this._values[index];
        }
        return null;
    };
    Map.prototype.set = function (key, value) {
        var index = this._keys.indexOf(key);
        if (index !== -1) {
            this._values[index] = value;
        }
        else {
            this._keys.push(key);
            this._values.push(value);
        }
    };
    Map.prototype.remove = function (key) {
        var index = this._keys.indexOf(key);
        if (index !== -1) {
            this._keys.splice(index, 1);
            this._values.splice(index, 1);
            return true;
        }
        return false;
    };
    Map.prototype.getAll = function () {
        return this._values.slice();
    };
    Map.prototype.removeAll = function () {
        this._keys = [];
        this._values = [];
    };
    return Map;
}());
exports.Map = Map;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Renderer = /** @class */ (function () {
    function Renderer(context) {
        this._context = context;
    }
    Renderer.prototype.render = function (scene) {
        this._context.fillStyle = '#000000';
        this._context.fillRect(0, 0, this._context.canvas.width, this._context.canvas.height);
        scene._runRender(this._context);
    };
    return Renderer;
}());
exports.Renderer = Renderer;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

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
var Map_1 = __webpack_require__(0);
var Scene = /** @class */ (function (_super) {
    __extends(Scene, _super);
    function Scene() {
        var _this = _super.call(this) || this;
        _this.create();
        return _this;
    }
    Scene.prototype.create = function () {
    };
    Scene.prototype.update = function () {
    };
    Scene.prototype._runUpdate = function () {
        this.update();
        for (var _i = 0, _a = this.getAll(); _i < _a.length; _i++) {
            var gameObject = _a[_i];
            gameObject.update();
        }
    };
    Scene.prototype._runRender = function (context) {
        for (var _i = 0, _a = this.getAll(); _i < _a.length; _i++) {
            var gameObject = _a[_i];
            gameObject.render(context);
        }
    };
    return Scene;
}(Map_1.Map));
exports.Scene = Scene;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Mouse = /** @class */ (function () {
    function Mouse() {
    }
    Object.defineProperty(Mouse, "cursorX", {
        get: function () {
            return this._cursorX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "cursorY", {
        get: function () {
            return this._cursorY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "leftButtonDown", {
        get: function () {
            return this._leftButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "middleButtonDown", {
        get: function () {
            return this._middleButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "rightButtonDown", {
        get: function () {
            return this._rightButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "leftClick", {
        get: function () {
            return this._leftClick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "middleClick", {
        get: function () {
            return this._middleClick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "rightClick", {
        get: function () {
            return this._rightClick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollX", {
        get: function () {
            return this._scrollX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollY", {
        get: function () {
            return this._scrollY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollTop", {
        get: function () {
            return this._scrollY === -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollDown", {
        get: function () {
            return this._scrollY === 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollLeft", {
        get: function () {
            return this._scrollX === -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollRight", {
        get: function () {
            return this._scrollY === 1;
        },
        enumerable: true,
        configurable: true
    });
    Mouse._init = function () {
        var _this = this;
        window.addEventListener('mousemove', function (e) {
            _this._cursorX = e.clientX;
            _this._cursorY = e.clientY;
        });
        window.addEventListener('mousedown', function (e) {
            e.preventDefault();
            switch (e.button) {
                case 0:
                    _this._leftButton = true;
                    _this._leftClick = true;
                    break;
                case 1:
                    _this._middleButton = true;
                    _this._middleClick = true;
                    break;
                case 2:
                    _this._rightButton = true;
                    _this._rightClick = true;
                    break;
                default:
                    break;
            }
            window.addEventListener('mouseup', function (e) {
                e.preventDefault();
                switch (e.button) {
                    case 0:
                        _this._leftButton = false;
                        break;
                    case 1:
                        _this._middleButton = false;
                        break;
                    case 2:
                        _this._rightButton = false;
                        break;
                    default:
                        break;
                }
            });
            window.addEventListener('contextmenu', function (e) {
                e.preventDefault();
            });
            window.addEventListener('wheel', function (e) {
                e.preventDefault();
                if (e.deltaX > 0) {
                    _this._scrollX = 1;
                }
                else if (e.deltaX < 0) {
                    _this._scrollX = -1;
                }
                else {
                    _this._scrollX = 0;
                }
                if (e.deltaY > 0) {
                    _this._scrollY = 1;
                }
                else if (e.deltaY < 0) {
                    _this._scrollY = -1;
                }
                else {
                    _this._scrollY = 0;
                }
            });
            window.addEventListener('blur', function () {
                _this._leftButton = false;
                _this._middleButton = false;
                _this._rightButton = false;
            });
        });
    };
    Mouse._update = function () {
        this._scrollX = 0;
        this._scrollY = 0;
        this._leftClick = false;
        this._middleClick = false;
        this._rightClick = false;
    };
    Mouse._cursorX = 0;
    Mouse._cursorY = 0;
    Mouse._leftButton = false;
    Mouse._leftClick = false;
    Mouse._middleButton = false;
    Mouse._middleClick = false;
    Mouse._rightButton = false;
    Mouse._rightClick = false;
    Mouse._scrollX = 0;
    Mouse._scrollY = 0;
    return Mouse;
}());
exports.Mouse = Mouse;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Map_1 = __webpack_require__(0);
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


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Map_1 = __webpack_require__(0);
var Loader = /** @class */ (function () {
    function Loader() {
    }
    Loader._init = function (game) {
        this._game = game;
        this._game.load();
        if (this._files.getAll().length === 0) {
            this._fileLoaded();
        }
    };
    Loader.loadImage = function (fileName, filePath) {
        var _this = this;
        var image = document.createElement('img');
        filePath = this.basePath + "/" + filePath;
        this._images.set(fileName, image);
        this._files.set(fileName, false);
        image.addEventListener('load', function () {
            _this._files.set(fileName, true);
            if (!_this._loaded)
                _this._fileLoaded();
        });
        image.addEventListener('error', function () {
            console.log("Could not load file: " + filePath + ".");
        });
        image.src = filePath;
    };
    Loader.loadVideo = function (fileName, filePath) {
        var _this = this;
        var video = document.createElement('video');
        filePath = this.basePath + "/" + filePath;
        this._videos.set(fileName, video);
        this._files.set(fileName, false);
        video.addEventListener('load', function () {
            _this._files.set(fileName, true);
            if (!_this._loaded)
                _this._fileLoaded();
        });
        video.addEventListener('error', function () {
            console.log("Could not load file: " + filePath + ".");
        });
        video.src = filePath;
    };
    Loader.loadAudio = function (fileName, filePath) {
        var _this = this;
        var audio = document.createElement('audio');
        filePath = this.basePath + "/" + filePath;
        this._audios.set(fileName, audio);
        this._files.set(fileName, false);
        audio.addEventListener('loadeddata', function () {
            _this._files.set(fileName, true);
            if (!_this._loaded)
                _this._fileLoaded();
        });
        audio.addEventListener('error', function () {
            console.log("Could not load file: " + filePath + ".");
        });
        audio.src = filePath;
    };
    Loader.loadJSON = function (fileName, filePath) {
        var _this = this;
        var xhr = new XMLHttpRequest();
        filePath = this.basePath + "/" + filePath;
        this._json.set(fileName, {});
        this._files.set(fileName, false);
        xhr.addEventListener('load', function () {
            _this._files.set(fileName, true);
            _this._json.set(fileName, JSON.parse(xhr.responseText));
            if (!_this._loaded)
                _this._fileLoaded();
        });
        xhr.addEventListener('error', function () {
            console.log("Could not load file: " + filePath);
        });
        xhr.open('GET', filePath, true);
        xhr.send();
    };
    Loader.image = function (fileName) {
        return this._images.get(fileName);
    };
    Loader.video = function (fileName) {
        return this._videos.get(fileName);
    };
    Loader.audio = function (fileName) {
        return this._audios.get(fileName);
    };
    Loader.json = function (fileName) {
        return this._json.get(fileName);
    };
    Loader._fileLoaded = function () {
        if (this._files.getAll().indexOf(false) === -1) {
            this._loaded = true;
            this._game._start();
        }
    };
    Loader.basePath = '';
    Loader._loaded = false;
    Loader._images = new Map_1.Map();
    Loader._videos = new Map_1.Map();
    Loader._audios = new Map_1.Map();
    Loader._json = new Map_1.Map();
    Loader._files = new Map_1.Map();
    return Loader;
}());
exports.Loader = Loader;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(8));
__export(__webpack_require__(10));
__export(__webpack_require__(5));
__export(__webpack_require__(11));
__export(__webpack_require__(6));
__export(__webpack_require__(0));
__export(__webpack_require__(4));
__export(__webpack_require__(1));
__export(__webpack_require__(2));
__export(__webpack_require__(3));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Renderer_1 = __webpack_require__(1);
var Scene_1 = __webpack_require__(2);
var Loop_1 = __webpack_require__(9);
var Mouse_1 = __webpack_require__(4);
var Keyboard_1 = __webpack_require__(5);
var Loader_1 = __webpack_require__(6);
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


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Time_1 = __webpack_require__(3);
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


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameObject = /** @class */ (function () {
    function GameObject() {
        this.create();
    }
    GameObject.prototype.create = function () {
    };
    GameObject.prototype.update = function () {
    };
    GameObject.prototype.render = function (context) {
    };
    return GameObject;
}());
exports.GameObject = GameObject;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Keys;
(function (Keys) {
    Keys["Digit0"] = "Digit0";
    Keys["Digit1"] = "Digit1";
    Keys["Digit2"] = "Digit2";
    Keys["Digit3"] = "Digit3";
    Keys["Digit4"] = "Digit4";
    Keys["Digit5"] = "Digit5";
    Keys["Digit6"] = "Digit6";
    Keys["Digit7"] = "Digit7";
    Keys["Digit8"] = "Digit8";
    Keys["Digit9"] = "Digit9";
    Keys["KeyA"] = "KeyA";
    Keys["KeyB"] = "KeyB";
    Keys["KeyC"] = "KeyC";
    Keys["KeyD"] = "KeyD";
    Keys["KeyE"] = "KeyE";
    Keys["KeyF"] = "KeyF";
    Keys["KeyG"] = "KeyG";
    Keys["KeyH"] = "KeyH";
    Keys["KeyI"] = "KeyI";
    Keys["KeyJ"] = "KeyJ";
    Keys["KeyK"] = "KeyK";
    Keys["KeyL"] = "KeyL";
    Keys["KeyM"] = "KeyM";
    Keys["KeyN"] = "KeyN";
    Keys["KeyO"] = "KeyO";
    Keys["KeyP"] = "KeyP";
    Keys["KeyQ"] = "KeyQ";
    Keys["KeyR"] = "KeyR";
    Keys["KeyS"] = "KeyS";
    Keys["KeyT"] = "KeyT";
    Keys["KeyU"] = "KeyU";
    Keys["KeyV"] = "KeyV";
    Keys["KeyW"] = "KeyW";
    Keys["KeyX"] = "KeyX";
    Keys["KeyY"] = "KeyY";
    Keys["KeyZ"] = "KeyZ";
    Keys["Escape"] = "Escape";
    Keys["F1"] = "F1";
    Keys["F2"] = "F2";
    Keys["F3"] = "F3";
    Keys["F4"] = "F4";
    Keys["F5"] = "F5";
    Keys["F6"] = "F6";
    Keys["F7"] = "F7";
    Keys["F8"] = "F8";
    Keys["F9"] = "F9";
    Keys["F10"] = "F10";
    Keys["F11"] = "F11";
    Keys["F12"] = "F12";
    Keys["Insert"] = "Insert";
    Keys["Delete"] = "Delete";
    Keys["Home"] = "Home";
    Keys["End"] = "End";
    Keys["PageUp"] = "PageUp";
    Keys["PageDown"] = "PageDown";
    Keys["NumLock"] = "NumLock";
    Keys["NumpadDivide"] = "NumpadDivide";
    Keys["NumpadMultiply"] = "NumpadMultiply";
    Keys["NumpadSubtract"] = "NumpadSubtract";
    Keys["NumpadAdd"] = "NumpadAdd";
    Keys["NumpadEnter"] = "NumpadEnter";
    Keys["NumpadDecimal"] = "NumpadDecimal";
    Keys["Numpad0"] = "Numpad0";
    Keys["Numpad1"] = "Numpad1";
    Keys["Numpad2"] = "Numpad2";
    Keys["Numpad3"] = "Numpad3";
    Keys["Numpad4"] = "Numpad4";
    Keys["Numpad5"] = "Numpad5";
    Keys["Numpad6"] = "Numpad6";
    Keys["Numpad7"] = "Numpad7";
    Keys["Numpad8"] = "Numpad8";
    Keys["Numpad9"] = "Numpad9";
    Keys["ArrowUp"] = "ArrowUp";
    Keys["ArrowDown"] = "ArrowDown";
    Keys["ArrowLeft"] = "ArrowLeft";
    Keys["ArrowRight"] = "ArrowRight";
    Keys["Backquote"] = "Backquote";
    Keys["Minus"] = "Minus";
    Keys["Equal"] = "Equal";
    Keys["Backspace"] = "Backspace";
    Keys["BracketLeft"] = "BracketLeft";
    Keys["BracketRight"] = "BracketRight";
    Keys["Quote"] = "Quote";
    Keys["Backslash"] = "Backslash";
    Keys["Comma"] = "Comma";
    Keys["Period"] = "Period";
    Keys["Slash"] = "Slash";
    Keys["Enter"] = "Enter";
    Keys["ShiftLeft"] = "ShiftLeft";
    Keys["ShiftRight"] = "ShiftRight";
    Keys["CapsLock"] = "CapsLock";
    Keys["Tab"] = "Tab";
    Keys["ControlLeft"] = "ControlLeft";
    Keys["ControlRight"] = "ControlRight";
    Keys["MetaLeft"] = "MetaLeft";
    Keys["MetaRight"] = "MetaRight";
    Keys["AltLeft"] = "AltLeft";
    Keys["AltRight"] = "AltRight";
})(Keys = exports.Keys || (exports.Keys = {}));
;


/***/ })
/******/ ]);
//# sourceMappingURL=rythmoos-engine.js.map