import { Map } from './Map';
import { Keys } from './Keys';
export declare abstract class Keyboard {
    protected static _keys: Map<boolean>;
    protected static _pressed: Keys[];
    static keyDown(key: Keys): boolean;
    static keyPressed(key: Keys): boolean;
    static _init(): void;
    static _update(): void;
}
