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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A collection with a non-indexed key.<br>
 * Useful to store a set of values of the same type.
 */
var Map = /** @class */ (function () {
    function Map() {
        this._keys = [];
        this._values = [];
    }
    /**
     * Get an value from the map.
     * @param key The name of the value to get.
     * @return The value, or null if the value does not exist in the map.
     */
    Map.prototype.get = function (key) {
        var index = this._keys.indexOf(key);
        if (index !== -1) {
            return this._values[index];
        }
        return null;
    };
    /**
     * Add or update an value.
     * @param key The name of the value to set.
     * @param value The value to set for this value.
     */
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
    /**
     * Remove an value from the map.
     * @param key The value's name to be removed from the map.
     * @return True if the value was removed, false if the value was not found.
     */
    Map.prototype.remove = function (key) {
        var index = this._keys.indexOf(key);
        if (index !== -1) {
            this._keys.splice(index, 1);
            this._values.splice(index, 1);
            return true;
        }
        return false;
    };
    /**
     * Get an array containing all the values of the map.
     */
    Map.prototype.getAll = function () {
        return this._values.slice();
    };
    /**
     * Clear the map by removing all the keys and values that it stores.
     */
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
/**
 * The renderer is used to render graphics to a canvas.<br>
 * Any game instance comes bundled with a renderer already.
 */
var Renderer = /** @class */ (function () {
    /**
     * Create a Renderer.
     * @param context The context of the canvas to render to.
     */
    function Renderer(context) {
        this.backgroundColour = '#000000';
        this._context = context;
    }
    /**
     * Set properties to apply to the context everytime the render method is called.<br>
     * It could for example be used to apply a default fillStyle or a global composite
     * operation to all your game objects.
     * @param context The renderer's context, automatically passed in.
     */
    Renderer.prototype.contextProperties = function (context) {
    };
    /**
     * Render a scene to the canvas.
     * @param scene The scene to render.
     */
    Renderer.prototype.render = function (scene) {
        this._context.fillStyle = this.backgroundColour;
        this._context.fillRect(0, 0, this._context.canvas.width, this._context.canvas.height);
        this.contextProperties(this._context);
        for (var _i = 0, _a = scene.getAll(); _i < _a.length; _i++) {
            var gameObject = _a[_i];
            this._context.save();
            gameObject.render(this._context);
            this._context.restore();
        }
    };
    return Renderer;
}());
exports.Renderer = Renderer;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Map_1 = __webpack_require__(0);
/**
 * A scene contains all the game objects in a specific "screen" of your game.<br>
 * For example, you may have a "MainScreen" scene that will contain everything
 * that is in the main screen of your game.<br>
 * You could then have a "Level1" scene that will contain the level 1 of you game. etc.
 */
var Scene = /** @class */ (function () {
    function Scene() {
        this._gameObjects = new Map_1.Map();
        this.create();
    }
    /**
     * Called when the scene is created.<br>
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
     * Get a game object from the scene.
     * @param gameObjectName The game object to get.
     * @return The requested game object, or null if it does not exist in the scene.
     */
    Scene.prototype.get = function (gameObjectName) {
        return this._gameObjects.get(gameObjectName);
    };
    /**
     * Set a game object.
     * @param gameObjectName The name of the game object to set.
     * @param gameObject The game object.
     */
    Scene.prototype.set = function (gameObjectName, gameObject) {
        gameObject.scene = this;
        this._gameObjects.set(gameObjectName, gameObject);
    };
    /**
     * Remove a game object.
     * @param gameObjectName The name of the game object to remove.
     */
    Scene.prototype.remove = function (gameObjectName) {
        return this._gameObjects.remove(gameObjectName);
    };
    /**
     * Get all the game objects of this scene as an array.
     */
    Scene.prototype.getAll = function () {
        return this._gameObjects.getAll();
    };
    return Scene;
}());
exports.Scene = Scene;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Map the mouse input.
 */
var Mouse = /** @class */ (function () {
    function Mouse() {
    }
    Object.defineProperty(Mouse, "cursorX", {
        /**
         * The X position of the cursor in the window.
         */
        get: function () {
            return this._cursorX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "cursorY", {
        /**
         * The Y position of the cursor in the window.
         */
        get: function () {
            return this._cursorY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "movementX", {
        /**
         * The cursor movement in the X axis, in pixels.
         */
        get: function () {
            return this._movementX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "movementY", {
        /**
         * The cursor movement in the Y axis, in pixels.
         */
        get: function () {
            return this._movementY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "leftButtonDown", {
        /**
         * Whether the left button is down or not.
         */
        get: function () {
            return this._leftButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "middleButtonDown", {
        /**
         * Whether the middle (wheel) button is down or not.
         */
        get: function () {
            return this._middleButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "rightButtonDown", {
        /**
         * Whether the right button is down or not.
         */
        get: function () {
            return this._rightButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "leftButtonUp", {
        /**
         * Whether the left button is up or not.
         */
        get: function () {
            return !this._leftButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "middleButtonUp", {
        /**
         * Whether the middle button (wheel) is up or not.
         */
        get: function () {
            return !this._middleButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "rightButtonUp", {
        /**
         * Whether the right button is up or not.
         */
        get: function () {
            return !this._rightButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "leftClick", {
        /**
         * Evaluate to true when a left click occurs.
         */
        get: function () {
            return this._leftClick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "middleClick", {
        /**
         * Evaluate to true when a middle (wheel) click occurs.
         */
        get: function () {
            return this._middleClick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "rightClick", {
        /**
         * Evaluate to true when a right click occurs.
         */
        get: function () {
            return this._rightClick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollX", {
        /**
         * The scroll movement in the X axis.<br>
         * Possible values: -1 (scroll to -x), 0 (no scroll x), 1 (scroll to +x).
         */
        get: function () {
            return this._scrollX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollY", {
        /**
         * The scroll movement in the Y axis.<br>
         * Possible values: -1 (scroll to -y), 0 (no scroll y), 1 (scroll to +y).
         */
        get: function () {
            return this._scrollY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollUp", {
        /**
         * Evaluate to true when the user is scrolling up.
         */
        get: function () {
            return this._scrollY === -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollDown", {
        /**
         * Evaluate to true when the user is scrolling down.
         */
        get: function () {
            return this._scrollY === 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollLeft", {
        /**
         * Evaluate to true when the user is scrolling left.
         */
        get: function () {
            return this._scrollX === -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "scrollRight", {
        /**
         * Evaluate to true when the user is scrolling right.
         */
        get: function () {
            return this._scrollY === 1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Used internally to initialise the mouse input.
     * @param canvas The game's canvas.
     */
    Mouse._init = function (canvas) {
        var _this = this;
        canvas.addEventListener('mousemove', function (e) {
            _this._cursorX = e.clientX - canvas.offsetLeft;
            _this._cursorY = e.clientY - canvas.offsetTop;
            _this._movementX += e.movementX;
            _this._movementY += e.movementY;
        });
        canvas.addEventListener('mousedown', function (e) {
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
                if (!_this._leftButton && !_this._middleButton && !_this._rightButton)
                    return;
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
            canvas.addEventListener('contextmenu', function (e) {
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
    /**
     * Used internally to update the mouse input states.
     */
    Mouse._update = function () {
        this._movementX = 0;
        this._movementY = 0;
        this._scrollX = 0;
        this._scrollY = 0;
        this._leftClick = false;
        this._middleClick = false;
        this._rightClick = false;
    };
    Mouse._cursorX = 0;
    Mouse._cursorY = 0;
    Mouse._movementX = 0;
    Mouse._movementY = 0;
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Map_1 = __webpack_require__(0);
/**
 * Map the keyboard and the state of each keys.
 */
var Keyboard = /** @class */ (function () {
    function Keyboard() {
    }
    /**
     * Check if a key is down.
     * @param key The key to check.
     */
    Keyboard.keyDown = function (key) {
        return this._keys.get(key) || false;
    };
    /**
     * Check if a key is pressed (fires only when the key is clicked).
     * @param key The key to check.
     */
    Keyboard.keyPressed = function (key) {
        return this._pressed.indexOf(key) !== -1;
    };
    Object.defineProperty(Keyboard, "lastKey", {
        /**
         * Tast key that was pressed.<br>
         * Can for example be used in a settings menu when asking the user the desired
         * key-binding.<br>
         * The value is reset to null or to the new last key each frame.
         */
        get: function () {
            return this._lastKey;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Used internally to initialise the keyboard input.
     */
    Keyboard._init = function () {
        var _this = this;
        this.preventDefault = false;
        this._keys = new Map_1.Map();
        this._pressed = [];
        this._lastKey = null;
        window.addEventListener('keydown', function (e) {
            if (_this.preventDefault)
                e.preventDefault();
            _this._keys.set(e.code, true);
            _this._pressed.push(e.code);
            _this._lastKey = e.code;
        });
        window.addEventListener('keyup', function (e) {
            if (_this.preventDefault)
                e.preventDefault();
            _this._keys.set(e.code, false);
        });
        window.addEventListener('keypress', function (e) {
            if (_this.preventDefault)
                e.preventDefault();
        });
    };
    /**
     * Used internally to update the keyboard's keys state.
     */
    Keyboard._update = function () {
        this._pressed = [];
        this._lastKey = null;
    };
    return Keyboard;
}());
exports.Keyboard = Keyboard;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Map_1 = __webpack_require__(0);
/**
 * The loader is an easy way to preload all the required assets for your game.<br>
 * You can use it from the load() method of your Game class.<br>
 * It can also be used while the game is running to load assets on the fly.
 */
var Loader = /** @class */ (function () {
    function Loader() {
    }
    /**
     * Used internally to preload the game and its assets.
     * @param game The game instance.
     */
    Loader._init = function (game) {
        this._game = game;
        this._game.load();
        if (this._files.getAll().length === 0) {
            this._fileLoaded();
        }
    };
    /**
     * Load an image file.<br>
     * If the file can't be loaded, the game won't start and a message will
     * be logged to the console.
     * @param fileName The name to save this file as in the loader.
     * @param filePath The path to the file to load.
     */
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
    /**
     * Load a video file.<br>
     * If the file can't be loaded, the game won't start and a message will
     * be logged to the console.
     * @param fileName The name to save this file as in the loader.
     * @param filePath The path to the file to load.
     */
    Loader.loadVideo = function (fileName, filePath) {
        var _this = this;
        var video = document.createElement('video');
        filePath = this.basePath + "/" + filePath;
        this._videos.set(fileName, video);
        this._files.set(fileName, false);
        video.addEventListener('loadeddata', function () {
            _this._files.set(fileName, true);
            if (!_this._loaded)
                _this._fileLoaded();
        });
        video.addEventListener('error', function () {
            console.log("Could not load file: " + filePath + ".");
        });
        video.src = filePath;
    };
    /**
     * Load an audio file.<br>
     * If the file can't be loaded, the game won't start and a message will
     * be logged to the console.
     * @param fileName The name to save this file as in the loader.
     * @param filePath The path to the file to load.
     */
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
    /**
     * Load a json file.<br>
     * If the file can't be loaded, the game won't start and a message will
     * be logged to the console.
     * @param fileName The name to save this file as in the loader.
     * @param filePath The path to the file to load.
     */
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
    /**
     * Get a file from the loader.<br>
     * If the file was loaded on the fly, it may not be ready yet! You can
     * check whether the file was loaded or not using the loaded() method.
     * @param fileName The name of the file to get.
     * @return The file, or null if the Loader does not contain the specified file.
     */
    Loader.get = function (fileName) {
        if (this._images.get(fileName) !== null) {
            return this.image(fileName);
        }
        else if (this._videos.get(fileName) !== null) {
            return this.video(fileName);
        }
        else if (this._audios.get(fileName) !== null) {
            return this.audio(fileName);
        }
        else if (this._json.get(fileName) !== null) {
            return this.json(fileName);
        }
        else {
            return null;
        }
    };
    /**
     * Get an image that was loaded.<br>
     * If the image was loaded on the fly, it may not be ready yet! You can
     * check whether the file was loaded or not using the loaded() method.
     * @param fileName The name of the file to get.
     * @return The image file, or null if the image was not loaded using loadImage().
     */
    Loader.image = function (fileName) {
        return this._images.get(fileName);
    };
    /**
     * Get a video that was loaded.<br>
     * If the video was loaded on the fly, it may not be ready yet! You can
     * check whether the file was loaded or not using the loaded() method.
     * @param fileName The name of the file to get.
     * @return The video file, or null if the video was not loaded using loadVideo().
     */
    Loader.video = function (fileName) {
        return this._videos.get(fileName);
    };
    /**
     * Get a audio that was loaded.<br>
     * If the audio was loaded on the fly, it may not be ready yet! You can
     * check whether the file was loaded or not using the loaded() method.
     * @param fileName The name of the file to get.
     * @return The audio file, or null if the audio was not loaded using loadAudio().
     */
    Loader.audio = function (fileName) {
        return this._audios.get(fileName);
    };
    /**
     * Get a JSON file that was loaded.<br>
     * If the JSON file was loaded on the fly, it may not be ready yet! You can
     * check whether the file was loaded or not using the loaded() method.
     * @param fileName The name of the file to get.
     * @return The parsed JSON file, or null if the JSON file was not loaded using loadJSON().
     */
    Loader.json = function (fileName) {
        return this._json.get(fileName);
    };
    /**
     * Check whether a file is ready to be used or not.
     * @param fileName The file to check.
     */
    Loader.loaded = function (fileName) {
        return this._files.get(fileName) || false;
    };
    Loader._fileLoaded = function () {
        if (this._files.getAll().indexOf(false) === -1) {
            this._loaded = true;
            this._game._start();
        }
    };
    /** The base path to the assets directory. */
    Loader.basePath = '.';
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

Object.defineProperty(exports, "__esModule", { value: true });
var Map_1 = __webpack_require__(0);
/**
 * The State class is used to store data that can be accessed throughout your game.<br>
 * For example, you can use it from a game object to update a state value, then
 * access this state value from the game's update method or from another game object.<br>
 * Think of it as a big container available from anywhere you import it.
 */
var State = /** @class */ (function () {
    function State() {
    }
    /**
     * Used internally to initialise the State class.
     */
    State._init = function () {
        this._states = new Map_1.Map();
    };
    /**
     * Set (create or update) a state value.
     * @param key The name of the state.
     * @param value The value of the state.
     */
    State.set = function (key, value) {
        this._states.set(key, value);
    };
    /**
     * Get a state value.
     * @param key The name of the state.
     * @return The value of the state, null if the state was not set.
     */
    State.get = function (key) {
        return this._states.get(key);
    };
    /**
     * Increment a state. If the state is not a number, nothing happens.
     * @param key The key of a numeric state.
     */
    State.inc = function (key) {
        if (typeof this._states.get(key) === 'number') {
            this._states.set(key, this._states.get(key) + 1);
        }
    };
    /**
     * Decrement a state. If the state is not a number, nothing happens.
     * @param key The key of a numeric state.
     */
    State.dec = function (key) {
        if (typeof this._states.get(key) === 'number') {
            this._states.set(key, this._states.get(key) - 1);
        }
    };
    /**
     * Reverse a state value. If the state is not a boolean, nothing happens.
     * @param key The key of a boolean state.
     */
    State.reverse = function (key) {
        if (typeof this._states.get(key) === 'boolean') {
            this._states.set(key, !this._states.get(key));
        }
    };
    return State;
}());
exports.State = State;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

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
         * Let's say we want our gameObject.x property to move +10 pixels per second, we can do that:
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


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A Canvas' 2D rendering context that is not rendered.<br>
 * Useful to work with ImageData objects, TextMetrics, to create bitmap data and
 * anything else you can do with a 2D context.
 */
var VirtualContext = /** @class */ (function () {
    function VirtualContext() {
    }
    /**
     * Used internally to initialise the virual context.
     */
    VirtualContext._init = function () {
        this._context = document.createElement('canvas').getContext('2d');
        this._width = 0;
        this._height = 0;
    };
    /**
     * Request the virtual context.
     * @param width The width to request from the context.
     * @param height The height to request from the context.
     * @return The context object.
     */
    VirtualContext.requestBuffer = function (width, height) {
        this._context.restore();
        this._context.clearRect(0, 0, this._width, this._height);
        this._context.save();
        this._width = width;
        this._height = height;
        return this._context;
    };
    /**
     * Get the image data from an image object.
     * @param image The image to get the data from.
     * @param width The width of the image (defaults to the actual image's width).
     * @param height The height of the image (defaults to the actual image's height).
     */
    VirtualContext.getImageData = function (image, width, height) {
        width = width !== undefined ? width : image.width;
        height = height !== undefined ? height : image.height;
        var context = this.requestBuffer(width, height);
        context.drawImage(image, 0, 0, width, height);
        return context.getImageData(0, 0, width, height);
    };
    /**
     * Get the width of a text with a specified font.
     * @param text The text to measure.
     * @param font The font to use.
     */
    VirtualContext.measureText = function (text, font) {
        this._context.save();
        this._context.font = font;
        var textMeasure = this._context.measureText(text);
        this._context.restore();
        return textMeasure.width;
    };
    return VirtualContext;
}());
exports.VirtualContext = VirtualContext;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(11));
__export(__webpack_require__(12));
__export(__webpack_require__(4));
__export(__webpack_require__(13));
__export(__webpack_require__(6));
__export(__webpack_require__(0));
__export(__webpack_require__(3));
__export(__webpack_require__(1));
__export(__webpack_require__(2));
__export(__webpack_require__(5));
__export(__webpack_require__(7));
__export(__webpack_require__(8));
__export(__webpack_require__(9));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Renderer_1 = __webpack_require__(1);
var Scene_1 = __webpack_require__(2);
var Mouse_1 = __webpack_require__(3);
var Keyboard_1 = __webpack_require__(4);
var Screen_1 = __webpack_require__(5);
var Loader_1 = __webpack_require__(6);
var State_1 = __webpack_require__(7);
var Time_1 = __webpack_require__(8);
var VirtualContext_1 = __webpack_require__(9);
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
        return this._now() - this._startTime;
    };
    return Game;
}());
exports.Game = Game;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A game object defines an entity in your game's world.<br>
 * It can be for example the player's character, a button, etc.
 */
var GameObject = /** @class */ (function () {
    function GameObject() {
        this.create();
    }
    Object.defineProperty(GameObject.prototype, "game", {
        /**
         * A reference to your main Game instance.
         */
        get: function () {
            return this.scene.game;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Called when the game object is created.<br>
     * You can set the game object's properties in here, use the loader
     * to load textures, etc...
     */
    GameObject.prototype.create = function () {
    };
    /**
     * Called every frame as long as the game object is in the active scene.<br>
     * You can update your object property from here to, for example, move a
     * character if a keyboard key is being pressed.
     */
    GameObject.prototype.update = function () {
    };
    /**
     * Called every frame as long as the game object is in the active scene.<br>
     * Render the game object to the screen using the renderer's 2D context.
     * @param context The renderer's context, automatically passed in.
     */
    GameObject.prototype.render = function (context) {
    };
    return GameObject;
}());
exports.GameObject = GameObject;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Define all the keys available from the Keyboard class.
 */
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