'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mouse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _geometry = require('../geometry');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Mouse input.
 * @abstract
 */
var Mouse = exports.Mouse = function () {
  function Mouse() {
    _classCallCheck(this, Mouse);
  }

  _createClass(Mouse, null, [{
    key: '_init',


    /**
     * Used internally to initialise the mouse inputs and listeners.
     * @param {HTMLCanvasElement} canvas The canvas used by the game.
     * @ignore
     */


    /**
     * The scroll-left event handlers.
     * @type {EventHandler[]}
     * @private
     */


    /**
     * The scroll-down event handlers.
     * @type {EventHandler[]}
     * @private
     */


    /**
     * The right button down handlers.
     * @type {EventHandler[]}
     * @private
     */


    /**
     * The middle button (wheel) down handlers.
     * @type {EventHandler[]}
     * @private
     */


    /**
     * The left button down handlers.
     * @type {EventHandler[]}
     * @private
     */


    /**
     * THe mouse middle (wheel) button state.
     * @type {boolean}
     * @private
     */


    /**
     * The cursor position.
     * @type {Point}
     * @private
     */
    value: function _init(canvas) {
      var _this = this;

      // Mouse move
      window.addEventListener('mousemove', function (e) {
        _this._cursor.x = e.clientX;
        _this._cursor.y = e.clientY;
      });

      // Mouse down
      canvas.addEventListener('mousedown', function (e) {
        e.preventDefault();

        switch (e.button) {
          case 0:
            _this._leftButtonDown = true;
            _this._triggerEvent(_this._onLeftButtonDown, e);
            break;
          case 1:
            _this._middleButtonDown = true;
            _this._triggerEvent(_this._onMiddleButtonDown, e);
            break;
          case 2:
            _this._rightButtonDown = true;
            _this._triggerEvent(_this._onRightButtonDown, e);
            break;
          default:
            break;
        }
      });

      // Mouse up
      canvas.addEventListener('mouseup', function (e) {
        e.preventDefault();

        switch (e.button) {
          case 0:
            _this._leftButtonDown = false;
            _this._triggerEvent(_this._onLeftButtonUp, e);
            break;
          case 1:
            _this._middleButtonDown = false;
            _this._triggerEvent(_this._onMiddleButtonUp, e);
            break;
          case 2:
            _this._rightButtonDown = false;
            _this._triggerEvent(_this._onRightButtonUp, e);
            break;
          default:
            break;
        }
      });

      // Prevent the right click context menu to appear.
      canvas.addEventListener('contextmenu', function (e) {
        e.preventDefault();
      });

      // Scroll
      canvas.addEventListener('wheel', function (e) {
        if (e.deltaY > 0) {
          _this._triggerEvent(_this._onScrollDown, e);
        } else if (e.deltaY < 0) {
          _this._triggerEvent(_this._onScrollUp, e);
        }

        if (e.deltaX > 0) {
          _this._triggerEvent(_this._onScrollRight, e);
        } else if (e.deltaY < 0) {
          _this._triggerEvent(_this._onScrollLeft, e);
        }
      });
    }

    /**
     * The current position of the cursor.
     * @type {Point}
     * @readonly
     */


    /**
     * The scroll-right event handlers.
     * @type {EventHandler}
     * @private
     */


    /**
     * The scroll-up event handlers.
     * @type {EventHandler[]}
     * @private
     */


    /**
     * The right button up handlers.
     * @type {EventHandler[]}
     * @private
     */


    /**
     * The middle button (wheel) up handlers.
     * @type {EventHandler[]}
     * @private
     */


    /**
     * The left button up handlers.
     * @type {EventHandler[]}
     * @private
     */


    /**
     * THe mouse right button state.
     * @type {boolean}
     * @private
     */


    /**
     * THe mouse left button state.
     * @type {boolean}
     * @private
     */

  }, {
    key: 'on',


    /**
     * Listen to a mouse event.<br>
     * The event name is case-insensitive and should be one of the following:<br>
     * leftButtonDown, leftButtonUp, middleButtonDown, middleButtonUp, rightButtonDown,
     * rightButtonUp, scrollDown, scrollUp, scrollLeft, scrollRight.
     * @param {string} eventName The event name.
     * @param {EventHandler} handler The event handler.
     */
    value: function on(eventName, handler) {
      switch (eventName.toLocaleLowerCase()) {
        case 'leftbuttondown':
          this._onLeftButtonDown.push(handler);
          break;
        case 'leftbuttonup':
          this._onLeftButtonUp.push(handler);
          break;
        case 'middlebuttondown':
          this._onMiddleButtonDown.push(handler);
          break;
        case 'middlebuttonup':
          this._onMiddleButtonUp.push(handler);
          break;
        case 'rightbuttondown':
          this._onRightButtonDown.push(handler);
          break;
        case 'rightbuttonup':
          this._onRightButtonUp.push(handler);
          break;
        case 'scrolldown':
          this._onScrollDown.push(handler);
          break;
        case 'scrollup':
          this._onScrollUp.push(handler);
          break;
        case 'scrollleft':
          this._onScrollLeft.push(handler);
          break;
        case 'scrollright':
          this._onScrollRight.push(handler);
          break;
        default:
          break;
      }
    }

    /**
     * Trigger a list of events.
     * @param {EventHandler[]} handlers An event handlers array to execute.
     * @param {Event} event The event object to pass in to the handlers.
     * @private
     */

  }, {
    key: '_triggerEvent',
    value: function _triggerEvent(handlers, event) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = handlers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var handler = _step.value;

          handler(event);
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
    }
  }, {
    key: 'cursor',
    get: function get() {
      return new _geometry.Point(this._cursor.x, this._cursor.y);
    }

    /**
     * The position of the cursor in the X axis.
     * @type {number}
     * @readonly
     */

  }, {
    key: 'cursorX',
    get: function get() {
      return this._cursor.x;
    }

    /**
     * The position of the cursor in the Y axis.
     * @type {number}
     * @readonly
     */

  }, {
    key: 'cursorY',
    get: function get() {
      return this._cursor.y;
    }

    /**
     * Whether the left button is down or not.
     * @type {boolean}
     * @readonly
     */

  }, {
    key: 'leftButtonDown',
    get: function get() {
      return this._leftButtonDown;
    }

    /**
     * Whether the left button is up or not.
     * @type {boolean}
     * @readonly
     */

  }, {
    key: 'leftButtonUp',
    get: function get() {
      return !this._leftButtonDown;
    }

    /**
     * Whether the middle button (wheel) is down or not.
     * @type {boolean}
     * @readonly
     */

  }, {
    key: 'middleButtonDown',
    get: function get() {
      return this._middleButtonDown;
    }

    /**
     * Whether the middle button (wheel) is up or not.
     * @type {boolean}
     * @readonly
     */

  }, {
    key: 'middleButtonUp',
    get: function get() {
      return !this._middleButtonDown;
    }

    /**
     * Whether the right button is down or not.
     * @type {boolean}
     * @readonly
     */

  }, {
    key: 'rightButtonDown',
    get: function get() {
      return this._rightButtonDown;
    }

    /**
     * Whether the right button is up or not.
     * @type {boolean}
     * @readonly
     */

  }, {
    key: 'rightButtonUp',
    get: function get() {
      return !this._rightButtonDown;
    }
  }]);

  return Mouse;
}();

Mouse._cursor = new _geometry.Point();
Mouse._leftButtonDown = false;
Mouse._middleButtonDown = false;
Mouse._rightButtonDown = false;
Mouse._onLeftButtonDown = [];
Mouse._onLeftButtonUp = [];
Mouse._onMiddleButtonDown = [];
Mouse._onMiddleButtonUp = [];
Mouse._onRightButtonDown = [];
Mouse._onRightButtonUp = [];
Mouse._onScrollDown = [];
Mouse._onScrollUp = [];
Mouse._onScrollLeft = [];
Mouse._onScrollRight = [];