import { Keys } from './Keys';
/**
 * Map the keyboard and the state of each keys.
 */
export declare abstract class Keyboard {
    /** Whether to prevent the default key action or not. Defaults to false. */
    static preventDefault: boolean;
    private static _keys;
    private static _pressed;
    private static _lastKey;
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
     * Tast key that was pressed.<br>
     * Can for example be used in a settings menu when asking the user the desired
     * key-binding.<br>
     * The value is reset to null or to the new last key each frame.
     */
    static readonly lastKey: Keys | null;
    /**
     * Used internally to initialise the keyboard input.
     */
    static _init(): void;
    /**
     * Used internally to update the keyboard's keys state.
     */
    static _update(): void;
}
