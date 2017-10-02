"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A collection with a non-indexed key.<br>
 * Useful to store a set of objects of the same type.
 */
var Map = /** @class */ (function () {
    function Map() {
        this._keys = [];
        this._values = [];
    }
    /**
     * Get an object from the map.
     * @param key The name of the object to get.
     * @return The object, or null if the object does not exist in the map.
     */
    Map.prototype.get = function (key) {
        var index = this._keys.indexOf(key);
        if (index !== -1) {
            return this._values[index];
        }
        return null;
    };
    /**
     * Add or update an object.
     * @param key The name of the object to set.
     * @param value The value to set for this object.
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
     * Remove an object from the map.
     * @param key The object's name to be removed from the map.
     * @return True if the object was removed, false if the object was not found.
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
     * Get an array containing all the objects of the map.
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