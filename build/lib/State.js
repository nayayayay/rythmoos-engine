"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Map_1 = require("./Map");
/**
 * The State class is used to store data that can be accessed throughout you game.<br>
 * For example, you can use it from a game object to update a state value, then
 * access this state value from the game update.<br>
 * Think of it as a big container available from anywhere you import it.
 */
var State = /** @class */ (function () {
    function State() {
    }
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
    State._states = new Map_1.Map();
    return State;
}());
exports.State = State;
//# sourceMappingURL=State.js.map