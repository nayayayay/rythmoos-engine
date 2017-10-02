import {Map} from './Map';
import {Keys} from './Keys';

/**
 * Map the keyboard and the state of each keys.
 */
export abstract class Keyboard {
  private static _keys: Map<boolean>;
  private static _pressed: Keys[];

  /**
   * Check if a key is down.
   * @param key The key to check.
   */
  public static keyDown(key: Keys): boolean {
    return this._keys.get(key) || false;
  }

  /**
   * Check if a key is pressed (fires only when the key is clicked).
   * @param key The key to check.
   */
  public static keyPressed(key: Keys): boolean {
    return this._pressed.indexOf(key) !== -1;
  }

  /**
   * Used internally to initialise the keyboard input.
   */
  public static _init() {
    this._keys = new Map<boolean>();

    window.addEventListener('keydown', e => {
      e.preventDefault();

      this._keys.set(e.code, true);
      this._pressed.push(<Keys>e.code);
    });

    window.addEventListener('keyup', e => {
      e.preventDefault();

      this._keys.set(e.code, false);
    });

    window.addEventListener('keypress', e => {
      e.preventDefault();
    });
  }

  /**
   * Used internally to update the keyboard's keys state.
   */
  public static _update() {
    this._pressed = [];
  }
}
