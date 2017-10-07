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
//# sourceMappingURL=GameObject.js.map