'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Circle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _geometry = require('../geometry');

var _Graphics2 = require('./Graphics');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A simple circle shape.
 */
var Circle = exports.Circle = function (_Graphics) {
  _inherits(Circle, _Graphics);

  /**
   * Create a Circle.
   * @param {number} [x=0] The position in the X axis.
   * @param {number} [y=0] The position in the Y axis.
   * @param {number} [size=100] The diameter of the circle.
   * @param {CanvasColour} [fillColour='#ff00ff'] The background colour of the circle.
   * @param {CanvasColour} [strokeColour='#ffffff'] The colour of the strokes.
   * @param {number} [strokeWidth=2] The width of the strokes, set to 0 if none.
   */
  function Circle() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    var fillColour = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#ff00ff';
    var strokeColour = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#ffffff';
    var strokeWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 2;

    _classCallCheck(this, Circle);

    /**
     * The position of the circle (its center).
     * @type {Point}
     */
    var _this = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this));

    _this.position = new _geometry.Point(x, y);

    /**
     * The diameter of the circle.
     * @type {number}
     */
    _this.size = size;

    /**
     * The background colour of the circle
     * @type {CanvasColour}
     */
    _this.fillColour = fillColour;

    /**
     * The colour of the strokes.
     * @type {CanvasColour}
     */
    _this.strokeColour = strokeColour;

    /**
     * The width of the strokes. Set to 0 if none.
     * @type {number}
     */
    _this.strokeWidth = strokeWidth;

    /**
     * The rotation of the circle in degrees.
     * @type {number}
     * @default
     */
    _this.rotation = 0;

    /**
     * Whether to fill or not the circle with its fill colour.
     * @type {boolean}
     * @default
     */
    _this.fill = true;
    return _this;
  }

  _createClass(Circle, [{
    key: 'draw',


    /**
     * Draw the circle.
     * @param {CanvasRenderingContext2D} context The renderer's context.
     */
    value: function draw(context) {
      context.save();

      if (this.rotation) {
        context.translate(this.x, this.y);
        context.rotate(_geometry.Rotation.degreesToRadians(this.rotation));
        context.translate(-this.x, -this.y);
      }

      context.beginPath();
      context.arc(this.x, this.y, this.size / 2, 0, 2 * Math.PI);

      if (this.fill) {
        context.fillStyle = this.fillColour;
        context.fill();
      }

      if (this.strokeWidth) {
        context.lineWidth = this.strokeWidth;
        context.strokeStyle = this.strokeColour;
        context.stroke();
      }

      context.restore();
    }
  }, {
    key: 'x',
    get: function get() {
      return this.position.x;
    },
    set: function set(x) {
      this.position.x = x;
    }
  }, {
    key: 'y',
    get: function get() {
      return this.position.y;
    },
    set: function set(y) {
      this.position.y = y;
    }
  }]);

  return Circle;
}(_Graphics2.Graphics);