/**
 * The State class is used to store data that can be accessed throughout you game.<br>
 * For example, you can use it from a game object to update a state value, then
 * access this state value from the game update.<br>
 * Think of it as a big container available from anywhere you import it.
 */
export declare abstract class State {
    private static _states;
    /**
     * Set (create or update) a state value.
     * @param key The name of the state.
     * @param value The value of the state.
     */
    static set(key: string, value: any): void;
    /**
     * Get a state value.
     * @param key The name of the state.
     * @return The value of the state, null if the state was not set.
     */
    static get(key: string): any;
}
