export class Map<T> {
  private _keys: string[];
  private _values: T[];

  constructor() {
    this._keys = [];
    this._values = [];
  }

  public get(key: string): T|null {
    const index = this._keys.indexOf(key);

    if (index !== -1) {
      return this._values[index];
    }
    
    return null;
  }

  public set(key: string, value: T): void {
    const index = this._keys.indexOf(key);

    if (index !== -1) {
      this._values[index] = value;
    } else {
      this._keys.push(key);
      this._values.push(value);
    }
  }

  public remove(key: string): boolean {
    const index = this._keys.indexOf(key);

    if (index !== -1) {
      this._keys.splice(index, 1);
      this._values.splice(index, 1);

      return true;
    }

    return false;
  }

  public getAll(): T[] {
    return [...this._values];
  }

  public removeAll() {
    this._keys = [];
    this._values = [];
  }
}
