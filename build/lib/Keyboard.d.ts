import { Keys } from './Keys';
/**
 * Map the keyboard and the state of each keys.
 */
export declare abstract class Keyboard {
    private static _keys;
    private static _pressed;
    /**
     * Check if a key is down.
     * @param key The key to check.
     */
    static keyDown(key: Keys): boolean;
    /**
     * Check if a key is pressed (fires only when the key is clicked).
     * @param key The key to check.
     */
    static keyPressed(key: Keys): boolean;
    /**
     * Used internally to initialise the keyboard input.
     */
    static _init(): void;
    /**
     * Used internally to update the keyboard's keys state.
     */
    static _update(): void;
}
