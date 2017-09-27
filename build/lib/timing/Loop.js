'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loop = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Time = require('./Time');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A loop that runs every frame.
 */
var Loop = exports.Loop = function () {

  /**
   * Create a Loop.
   */
  function Loop() {
    _classCallCheck(this, Loop);

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


  _createClass(Loop, [{
    key: 'start',


    /**
     * Start the loop.
     * @param {function} callback The function to run for each iteration.
     */
    value: function start(callback) {
      var _this = this;

      if (!this.started) {
        this._started = true;
        this._running = true;
        this._stopped = false;

        this._animationFrame = requestAnimationFrame(function (frame) {
          _this._timeStarted = _Time.Time.time;
          _this._loop(callback, frame);
        });
      }
    }

    /**
     * Stop the loop.
     */

  }, {
    key: 'stop',
    value: function stop() {
      if (this.running) {
        this._running = false;
        this._stopped = true;

        cancelAnimationFrame(this._animationFrame);
        this._timeStopped = _Time.Time.time;
      }
    }

    /**
     * Execute the loop.
     * @param {function} callback The function to run for each iteration.
     * @param {number} frame The animation frame timer.
     * @private
     */

  }, {
    key: '_loop',
    value: function _loop(callback, frame) {
      var _this2 = this;

      this._animationFrame = requestAnimationFrame(function (frame) {
        _this2._loop(callback, frame);
      });

      callback(frame);
    }
  }, {
    key: 'started',
    get: function get() {
      return this._started;
    }

    /**
     * Whether the loop is currently running or not.
     * @type {boolean}
     * @readonly
     */

  }, {
    key: 'running',
    get: function get() {
      return this._running;
    }

    /**
     * Whether the loop was stopped or not.
     * @type {boolean}
     * @readonly
     */

  }, {
    key: 'stopped',
    get: function get() {
      return this._stopped;
    }

    /**
     * The time when this loop started (based on the animation frame).
     * @type {number}
     * @readonly
     */

  }, {
    key: 'timeStarted',
    get: function get() {
      return this._timeStarted;
    }

    /**
     * The time elapsed since that loop has been running.
     * @type {number}
     * @readonly
     */

  }, {
    key: 'currentTime',
    get: function get() {
      return _Time.Time.time - this.timeStarted;
    }

    /**
     * The time when this loop was stopped (based on the animation frame).
     * @type {number}
     * @readonly
     */

  }, {
    key: 'timeStopped',
    get: function get() {
      return this._timeStopped;
    }
  }]);

  return Loop;
}();