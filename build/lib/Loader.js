"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Map_1 = require("./Map");
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
//# sourceMappingURL=Loader.js.map