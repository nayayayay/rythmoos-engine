"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Map_1 = require("./Map");
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
//# sourceMappingURL=State.js.map