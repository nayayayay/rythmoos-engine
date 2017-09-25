'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Screen = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _geometry = require('../geometry');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Contain values about the game screen (canvas).
 * @abstract
 */
var Screen = exports.Screen = function () {
  function Screen() {
    _classCallCheck(this, Screen);
  }

  _createClass(Screen, null, [{
    key: '_init',


    /**
     * Used internally to initialize the Screen class.
     * @param {HTMLCanvasElement} canvas The canvas the use as a screen.
     * @ignore
     */
    value: function _init(canvas) {

      /**
       * The canvas used as a reference for the screen.
       * @type {HTMLCanvasElement}
       * @private
       */
      this._canvas = canvas;
    }

    /**
     * The width of the game screen.<br>
     * Represent the canvas.width property (not canvas.style.width).
     * @type {number}
     * @readonly
     */

  }, {
    key: 'width',
    get: function get() {
      return this._canvas.width;
    }

    /**
     * The height of the game screen.<br>
     * Represent the canvas.height property (not canvas.style.height).
     * @type {number}
     * @readonly
     */

  }, {
    key: 'height',
    get: function get() {
      return this._canvas.height;
    }

    /**
     * The center of the screen.
     * @type {Point}
     * @readonly
     */

  }, {
    key: 'center',
    get: function get() {
      return new _geometry.Point(this.width / 2, this.height / 2);
    }

    /**
     * The X position of the screen's center.
     * @type {number}
     * @readonly
     */

  }, {
    key: 'centerX',
    get: function get() {
      return this.width / 2;
    }

    /**
     * The Y position of the screen's center.
     * @type {number}
     * @readonly
     */

  }, {
    key: 'centerY',
    get: function get() {
      return this.height / 2;
    }
  }]);

  return Screen;
}();