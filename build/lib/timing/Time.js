"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Contain data about time.
 * @abstract
 */
var Time = exports.Time = function () {
  function Time() {
    _classCallCheck(this, Time);
  }

  _createClass(Time, null, [{
    key: "_setFrame",


    /**
     * Used internally to update the time data.
     * @param {number} frame The time/high resolution timestamp provided by the browser.
     * @ignore
     */


    /**
     * Time elapsed since the last frame.
     * @type {number}
     * @private
     */
    value: function _setFrame(frame) {
      this._deltaTime = frame - this._time;
      this._time = frame;
    }

    /**
     * The time elapsed since the last frame, in milliseconds.
     * @type {number}
     * @readonly
     */


    /**
     * Time elapsed since the main loop has started.
     * @type {number}
     * @private
     */

  }, {
    key: "deltaTime",
    get: function get() {
      return this._deltaTime;
    }

    /**
     * The time elapsed since the main loop has started, in milliseconds.
     * @type {number}
     * @readonly
     */

  }, {
    key: "time",
    get: function get() {
      return this._time;
    }

    /**
     * The value of time during the last frame.
     * @type {number}
     * @readonly
     */

  }, {
    key: "lastTime",
    get: function get() {
      return this._time - this._deltaTime;
    }

    /**
     * The average amount of frames per second based on the current delta time.
     * @type {number}
     * @readonly
     */

  }, {
    key: "FPS",
    get: function get() {
      return 1000 / this._deltaTime;
    }
  }]);

  return Time;
}();

Time._deltaTime = 0;
Time._time = 0;