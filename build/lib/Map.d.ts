export declare class Map<T> {
    private _keys;
    private _values;
    constructor();
    get(key: string): T | null;
    set(key: string, value: T): void;
    remove(key: string): boolean;
    getAll(): T[];
    removeAll(): void;
}
