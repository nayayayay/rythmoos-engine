import {Map} from './Map';

/**
 * The State class is used to store data that can be accessed throughout your game.<br>
 * For example, you can use it from a game object to update a state value, then
 * access this state value from the game's update method or from another game object.<br>
 * Think of it as a big container available from anywhere you import it.
 */
export abstract class State {
  private static _states: Map<any>;

  /**
   * Used internally to initialise the State class.
   */
  public static _init() {
    this._states = new Map<any>();
  }

  /**
   * Set (create or update) a state value.
   * @param key The name of the state.
   * @param value The value of the state.
   */
  public static set(key: string, value: any): void {
    this._states.set(key, value);
  }

  /**
   * Get a state value.
   * @param key The name of the state.
   * @return The value of the state, null if the state was not set.
   */
  public static get(key: string): any {
    return this._states.get(key);
  }

  /**
   * Increment a state. If the state is not a number, nothing happens.
   * @param key The key of a numeric state.
   */
  public static inc(key: string): void {
    if (typeof this._states.get(key) === 'number') {
      this._states.set(key, this._states.get(key) + 1);
    }
  }

  /**
   * Decrement a state. If the state is not a number, nothing happens.
   * @param key The key of a numeric state.
   */
  public static dec(key: string): void {
    if (typeof this._states.get(key) === 'number') {
      this._states.set(key, this._states.get(key) - 1);
    }
  }

  /**
   * Reverse a state value. If the state is not a boolean, nothing happens.
   * @param key The key of a boolean state.
   */
  public static reverse(key: string): void {
    if (typeof this._states.get(key) === 'boolean') {
      this._states.set(key, !this._states.get(key));
    }
  }
}
