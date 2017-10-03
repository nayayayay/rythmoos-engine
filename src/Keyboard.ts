import {Map} from './Map';
import {Keys} from './Keys';

/**
 * Map the keyboard and the state of each keys.
 */
export abstract class Keyboard {
  /** Whether to prevent the default key action or not. Defaults to false. */
  private static preventDefault: boolean;
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
    this.preventDefault = false;
    this._keys = new Map<boolean>();
    this._pressed = [];

    window.addEventListener('keydown', e => {
      if (this.preventDefault) e.preventDefault();

      this._keys.set(e.code, true);
      this._pressed.push(<Keys>e.code);
    });

    window.addEventListener('keyup', e => {
      if (this.preventDefault) e.preventDefault();

      this._keys.set(e.code, false);
    });

    window.addEventListener('keypress', e => {
      if (this.preventDefault) e.preventDefault();
    });
  }

  /**
   * Used internally to update the keyboard's keys state.
   */
  public static _update() {
    this._pressed = [];
  }
}
