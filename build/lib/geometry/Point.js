"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Represent a simple 2D point.
 */
var Point =

/**
 * Create a point.
 * @param {number} [x] The X position.
 * @param {number} [y] The Y position.
 */
exports.Point = function Point() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  _classCallCheck(this, Point);

  /**
   * The X position.
   * @type {number}
   */
  this.x = x;

  /**
   * The Y position.
   * @type {number}
   */
  this.y = y;
};