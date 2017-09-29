'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Keyboard = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Keys = require('./Keys');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Keyboard input.<br>
 * This class maps the keyboard in the game window, not only in the game screen (canvas).
 * @abstract
 */
var Keyboard = exports.Keyboard = function () {
  function Keyboard() {
    _classCallCheck(this, Keyboard);
  }

  _createClass(Keyboard, null, [{
    key: '_init',


    /**
     * Used internally to initialise the keyboard tracking.
     * @ignore
     */


    /**
     * Key down event handlers.
     * @type {EventHandler[]}
     * @private
     */
    value: function _init() {
      var _this = this;

      // Register keys
      for (var key in _Keys.Keys) {
        this._keys[key] = false;
      }

      // Key down event
      window.addEventListener('keydown', function (e) {
        _this._keys[e.code] = true;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _this._onKeyDown[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var onKeyDown = _step.value;

            onKeyDown(e);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });

      // Key up event
      window.addEventListener('keyup', function (e) {
        _this._keys[e.code] = false;

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = _this._onKeyUp[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var onKeyUp = _step2.value;

            onKeyUp(e);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      });
    }

    /**
     * Get a get state.<br>
     * Similar to {@link Keyboard.isDown|isDown}.
     * @param {string} keyName A key code (same format as {@link Keys}).
     * @return {boolean} True if the key is pressed, false if not.
     */


    /**
     * Key up event handlers.
     * @type {EventHandler[]}
     * @private
     */


    /**
     * List of all keys based on their code.
     * @type {object}
     * @private
     */

  }, {
    key: 'getKey',
    value: function getKey(keyName) {
      return this._keys[keyName];
    }

    /**
     * Get whether the specified key is down or not.
     * @param {string} keyName A key code (same format as {@link Keys}).
     * @return {boolean} True if the key is pressed, false if not.
     */

  }, {
    key: 'isDown',
    value: function isDown(keyName) {
      return this._keys[keyName] !== undefined ? this._keys[keyName] : false;
    }

    /**
     * Get whether the specified key is up or not.
     * @param {string} keyName A key code (same format as {@link Keys}).
     * @return {boolean} True if the key is up, false if not.
     */

  }, {
    key: 'isUp',
    value: function isUp(keyName) {
      return this._keys[keyName] !== undefined ? !this._keys[keyName] : true;
    }

    /**
     * Listen to a key event.
     * @param {string} eventName The event name (can be either keyDown or keyUp), case insensitive.
     * @param {EventHandler} eventHandler The handler for the event.
     */

  }, {
    key: 'on',
    value: function on(eventName, eventHandler) {
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
  }]);

  return Keyboard;
}();

Keyboard._keys = {};
Keyboard._onKeyDown = [];
Keyboard._onKeyUp = [];