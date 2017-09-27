import {Time} from './Time';

/**
 * A loop that runs every frame.
 */
export class Loop {

  /**
   * Create a Loop.
   */
  constructor() {

    /**
     * Whether the loop was started or not.
     * @type {boolean}
     * @private
     */
    this._started = false;

    /**
     * Whether the loop is currently running or not.
     * @type {boolean}
     * @private
     */
    this._running = false;

    /**
     * Whether the loop was stopped or not.
     * @type {boolean}
     * @private
     */
    this._stopped = false;

    /**
     * The time when this loop started (based on the animation frame).
     * @type {number}
     * @private
     */
    this._timeStarted = 0;

    /**
     * The time elapsed since that loop has been running.
     * @type {number}
     * @private
     */
    this._currentTime = 0;

    /**
     * The time when this loop was stopped (based on the animation frame).
     * @type {number}
     * @private
     */
    this._timeStopped = 0;

    /**
     * This loop's animation frame id.
     * @type {number}
     * @private
     */
    this._animationFrame = 0;
  }

  /**
   * Whether the loop was started or not.
   * @type {boolean}
   * @readonly
   */
  get started() {
    return this._started;
  }

  /**
   * Whether the loop is currently running or not.
   * @type {boolean}
   * @readonly
   */
  get running() {
    return this._running;
  }

  /**
   * Whether the loop was stopped or not.
   * @type {boolean}
   * @readonly
   */
  get stopped() {
    return this._stopped;
  }

  /**
   * The time when this loop started (based on the animation frame).
   * @type {number}
   * @readonly
   */
  get timeStarted() {
    return this._timeStarted;
  }

  /**
   * The time elapsed since that loop has been running.
   * @type {number}
   * @readonly
   */
  get currentTime() {
    return Time.time - this.timeStarted;
  }

  /**
   * The time when this loop was stopped (based on the animation frame).
   * @type {number}
   * @readonly
   */
  get timeStopped() {
    return this._timeStopped;
  }

  /**
   * Start the loop.
   * @param {function} callback The function to run for each iteration.
   */
  start(callback) {
    if (!this.started) {
      this._started = true;
      this._running = true;
      this._stopped = false;

      this._animationFrame = requestAnimationFrame((frame) => {
        this._timeStarted = Time.time;
        this._loop(callback, frame);
      });
    }
  }

  /**
   * Stop the loop.
   */
  stop() {
    if (this.running) {
      this._running = false;
      this._stopped = true;

      cancelAnimationFrame(this._animationFrame);
      this._timeStopped = Time.time;
    }
  }

  /**
   * Execute the loop.
   * @param {function} callback The function to run for each iteration.
   * @param {number} frame The animation frame timer.
   * @private
   */
  _loop(callback, frame) {
    this._animationFrame = requestAnimationFrame((frame) => {
      this._loop(callback, frame);
    });

    callback(frame);
  }
}
