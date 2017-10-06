"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Map_1 = require("./Map");
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
//# sourceMappingURL=Loader.js.map