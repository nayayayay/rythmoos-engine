import {Keys} from './Keys';

/**
 * Keyboard input.<br>
 * This class maps the keyboard in the game window, not only in the game screen (canvas).
 * @abstract
 */
export class Keyboard {

  /**
   * List of all keys based on their code.
   * @type {object}
   * @private
   */
  static _keys = {};

  /**
   * Key down event handlers.
   * @type {EventHandler[]}
   * @private
   */
  static _onKeyDown = [];

  /**
   * Key up event handlers.
   * @type {EventHandler[]}
   * @private
   */
  static _onKeyUp = [];

  /**
   * Used internally to initialise the keyboard tracking.
   * @ignore
   */
  static _init() {
    // Register keys
    for (const key in Keys) {
      this._keys[key] = false;
    }

    // Key down event
    window.addEventListener('keydown', e => {
      this._keys[e.code] = true;

      for (const onKeyDown of this._onKeyDown) {
        onKeyDown(e);
      }
    });

    // Key up event
    window.addEventListener('keyup', e => {
      this._keys[e.code] = false;

      for (const onKeyUp of this._onKeyUp) {
        onKeyUp(e);
      }
    });
  }

  /**
   * Get a get state.<br>
   * Similar to {@link Keyboard.isDown|isDown}.
   * @param {string} keyName A key code (same format as {@link Keys}).
   * @return {boolean} True if the key is pressed, false if not.
   */
  static getKey(keyName) {
    return this._keys[keyName];
  }

  /**
   * Get whether the specified key is down or not.
   * @param {string} keyName A key code (same format as {@link Keys}).
   * @return {boolean} True if the key is pressed, false if not.
   */
  static isDown(keyName) {
    return this._keys[keyName] !== undefined ? this._keys[keyName] : false;
  }

  /**
   * Get whether the specified key is up or not.
   * @param {string} keyName A key code (same format as {@link Keys}).
   * @return {boolean} True if the key is up, false if not.
   */
  static isUp(keyName) {
    return this._keys[keyName] !== undefined ? !this._keys[keyName] : true;
  }

  /**
   * Listen to a key event.
   * @param {string} eventName The event name (can be either keyDown or keyUp), case insensitive.
   * @param {EventHandler} eventHandler The handler for the event.
   */
  static on(eventName, eventHandler) {
    switch (eventName.toLowerCase()) {
      case 'keydown':
        this._onKeyDown.push(eventHandler);
        break;
      case 'keyup':
        this._onKeyUp.push(eventHandler);
        break;
      default:
        break;
    }
  }
}
