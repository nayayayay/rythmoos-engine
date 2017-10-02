/**
 * A collection with a non-indexed key.<br>
 * Useful to store a set of objects of the same type.
 */
export declare class Map<T> {
    private _keys;
    private _values;
    constructor();
    /**
     * Get an object from the map.
     * @param key The name of the object to get.
     * @return The object, or null if the object does not exist in the map.
     */
    get(key: string): T | null;
    /**
     * Add or update an object.
     * @param key The name of the object to set.
     * @param value The value to set for this object.
     */
    set(key: string, value: T): void;
    /**
     * Remove an object from the map.
     * @param key The object's name to be removed from the map.
     * @return True if the object was removed, false if the object was not found.
     */
    remove(key: string): boolean;
    /**
     * Get an array containing all the objects of the map.
     */
    getAll(): T[];
    /**
     * Clear the map by removing all the keys and values that it stores.
     */
    removeAll(): void;
}
