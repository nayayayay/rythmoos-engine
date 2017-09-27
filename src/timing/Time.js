/**
 * Contain data about time.
 * @abstract
 */
export class Time {

  /**
   * Time elapsed since the last frame.
   * @type {number}
   * @private
   */
  static _deltaTime = 0;

  /**
   * Time elapsed since the main loop has started.
   * @type {number}
   * @private
   */
  static _time = 0;

  /**
   * Used internally to update the time data.
   * @param {number} frame The time/high resolution timestamp provided by the browser.
   * @ignore
   */
  static _setFrame(frame) {
    this._deltaTime = frame - this._time;
    this._time = frame;
  }

  /**
   * The time elapsed since the last frame, in milliseconds.
   * @type {number}
   * @readonly
   */
  static get deltaTime() {
    return this._deltaTime;
  }

  /**
   * The time elapsed since the main loop has started, in milliseconds.
   * @type {number}
   * @readonly
   */
  static get time() {
    return this._time;
  }

  /**
   * The value of time during the last frame.
   * @type {number}
   * @readonly
   */
  static get lastTime() {
    return this._time - this._deltaTime;
  }

  /**
   * The average amount of frames per second based on the current delta time.
   * @type {number}
   * @readonly
   */
  static get FPS() {
    return 1000 / this._deltaTime;
  }
}
