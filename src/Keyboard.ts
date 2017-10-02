import {Map} from './Map';
import {Keys} from './Keys';

export abstract class Keyboard {
  protected static _keys: Map<boolean>;
  protected static _pressed: Keys[];

  public static keyDown(key: Keys): boolean {
    return this._keys.get(key) || false;
  }

  public static keyPressed(key: Keys): boolean {
    return this._pressed.indexOf(key) !== -1;
  }

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

  public static _update() {
    this._pressed = [];
  }
}
