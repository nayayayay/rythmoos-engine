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
//# sourceMappingURL=Map.js.map