"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Map_1 = require("./Map");
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
//# sourceMappingURL=Scene.js.map