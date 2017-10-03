import {Map} from './Map';

/**
 * The State class is used to store data that can be accessed throughout you game.<br>
 * For example, you can use it from a game object to update a state value, then
 * access this state value from the game update.<br>
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
}
