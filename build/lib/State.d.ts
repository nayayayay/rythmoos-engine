/**
 * The State class is used to store data that can be accessed throughout your game.<br>
 * For example, you can use it from a game object to update a state value, then
 * access this state value from the game's update method or from another game object.<br>
 * Think of it as a big container available from anywhere you import it.
 */
export declare abstract class State {
    private static _states;
    /**
     * Used internally to initialise the State class.
     */
    static _init(): void;
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
