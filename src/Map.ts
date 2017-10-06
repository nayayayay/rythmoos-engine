/**
 * A collection with a non-indexed key.<br>
 * Useful to store a set of values of the same type.
 */
export class Map<T> {
  private _keys: string[];
  private _values: T[];

  constructor() {
    this._keys = [];
    this._values = [];
  }

  /**
   * Get an value from the map.
   * @param key The name of the value to get.
   * @return The value, or null if the value does not exist in the map.
   */
  public get(key: string): T|null {
    const index = this._keys.indexOf(key);

    if (index !== -1) {
      return this._values[index];
    }
    
    return null;
  }

  /**
   * Add or update an value.
   * @param key The name of the value to set.
   * @param value The value to set for this value.
   */
  public set(key: string, value: T): void {
    const index = this._keys.indexOf(key);

    if (index !== -1) {
      this._values[index] = value;
    } else {
      this._keys.push(key);
      this._values.push(value);
    }
  }

  /**
   * Remove an value from the map.
   * @param key The value's name to be removed from the map.
   * @return True if the value was removed, false if the value was not found.
   */
  public remove(key: string): boolean {
    const index = this._keys.indexOf(key);

    if (index !== -1) {
      this._keys.splice(index, 1);
      this._values.splice(index, 1);

      return true;
    }

    return false;
  }

  /**
   * Get an array containing all the values of the map.
   */
  public getAll(): T[] {
    return [...this._values];
  }

  /**
   * Clear the map by removing all the keys and values that it stores.
   */
  public removeAll() {
    this._keys = [];
    this._values = [];
  }
}
