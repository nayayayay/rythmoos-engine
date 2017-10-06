/**
 * A collection with a non-indexed key.<br>
 * Useful to store a set of values of the same type.
 */
export declare class Map<T> {
    private _keys;
    private _values;
    constructor();
    /**
     * Get an value from the map.
     * @param key The name of the value to get.
     * @return The value, or null if the value does not exist in the map.
     */
    get(key: string): T | null;
    /**
     * Add or update an value.
     * @param key The name of the value to set.
     * @param value The value to set for this value.
     */
    set(key: string, value: T): void;
    /**
     * Remove an value from the map.
     * @param key The value's name to be removed from the map.
     * @return True if the value was removed, false if the value was not found.
     */
    remove(key: string): boolean;
    /**
     * Get an array containing all the values of the map.
     */
    getAll(): T[];
    /**
     * Clear the map by removing all the keys and values that it stores.
     */
    removeAll(): void;
}
