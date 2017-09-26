'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rectangle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _geometry = require('../geometry');

var _Graphics2 = require('./Graphics');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A simple rectangle.
 * @extends Graphics
 */
var Rectangle = exports.Rectangle = function (_Graphics) {
  _inherits(Rectangle, _Graphics);

  /**
   * Create a Rectangle.
   * @param {number} [x=0] The X position of the rectangle (top-left corner).
   * @param {number} [y=0] The Y position of the rectangle (top-left corner).
   * @param {number} [width=400] The width of the rectangle.
   * @param {number} [height=250] The height of the rectangle.
   * @param {number} [radius=0] The radius of the rectangle's borders in degrees.
   * @param {CanvasColour} [fillColour='#ff00ff'] The background colour of the rectangle.
   * @param {CanvasColour} [strokeColour='#ffffff'] The colour of the rectangle's strokes.
   * @param {number} [strokeWidth=2] The width of the rectangle's strokes. Set to 0 if none.
   */
  function Rectangle() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 400;
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 250;
    var radius = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var fillColour = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '#ff00ff';
    var strokeColour = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '#ffffff';
    var strokeWidth = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 2;

    _classCallCheck(this, Rectangle);

    /**
     * The position of the rectangle (top-left corner).
     * @type {Point}
     */
    var _this = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this));

    _this.position = new _geometry.Point(x, y);

    /**
     * The width of the rectangle.
     * @type {number}
     */
    _this.width = width;

    /**
     * The height of the rectangle.
     * @type {number}
     */
    _this.height = height;

    /**
     * The radius of the rectangle's borders in degrees.
     * @type {number}
     */
    _this.radius = radius;

    /**
     * The background colour.
     * @type {CanvasColour}
     */
    _this.fillColour = fillColour;

    /**
     * The stroke colour of the rectangle.
     * @type {CanvasColour}
     */
    _this.strokeColour = strokeColour;

    /**
     * The width of the rectangle's strokes. Set to 0 if none.
     * @type {number}
     */
    _this.strokeWidth = strokeWidth;

    /**
     * The rotation of the rectangle, in degrees.
     * @type {number}
     * @default
     */
    _this.rotation = 0;

    /**
     * Whether to fill or not the rectangle with its fill colour.
     * @type {boolean}
     * @default
     */
    _this.fill = true;
    return _this;
  }

  /**
   * The X position of the rectangle (top-left).
   * @type {number}
   */


  _createClass(Rectangle, [{
    key: 'setCenter',


    /**
     * Change the rectangle's center point. This will update its position.
     * @param {Point} center The new center of the rectangle.
     */
    value: function setCenter(center) {
      this.x = center.x - this.width / 2;
      this.y = center.y - this.height / 2;
    }

    /**
     * Draw the rectangle.
     * @param {CanvasRenderingContext2D} context The renderer's context.
     */

  }, {
    key: 'draw',
    value: function draw(context) {
      context.save();

      if (this.rotation) {
        context.translate(this.centerX, this.centerY);
        context.rotate(_geometry.Rotation.degreesToRadians(this.rotation));
        context.translate(-this.centerX, -this.centerY);
      }

      if (this.radius) {
        this._drawRounded(context);
      } else {
        this._drawClassic(context);
      }

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

    /**
     * Draw a classic rectangle.
     * @param {CanvasRenderingContext2D} context The renderer's context.
     * @private
     */

  }, {
    key: '_drawClassic',
    value: function _drawClassic(context) {
      context.beginPath();
      context.moveTo(this.x, this.y);
      context.lineTo(this.x + this.width, this.y);
      context.lineTo(this.x + this.width, this.y + this.height);
      context.lineTo(this.x, this.y + this.height);
      context.lineTo(this.x, this.y);
    }

    /**
     * Draw a rounded rectangle.
     * @param {CanvasRenderingContext2D} context The renderer's context.
     * @private
     */

  }, {
    key: '_drawRounded',
    value: function _drawRounded(context) {
      context.beginPath();
      context.moveTo(this.x + this.radius, this.y);
      context.lineTo(this.x + this.width - this.radius, this.y);
      context.arcTo(this.x + this.width, this.y, this.x + this.width, this.y + this.radius, this.radius);
      context.lineTo(this.x + this.width, this.y + this.height - this.radius);
      context.arcTo(this.x + this.width, this.y + this.height, this.x + this.width - this.radius, this.y + this.height, this.radius);
      context.lineTo(this.x + this.radius, this.y + this.height);
      context.arcTo(this.x, this.y + this.height, this.x, this.y + this.height - this.radius, this.radius);
      context.lineTo(this.x, this.y + this.radius);
      context.arcTo(this.x, this.y, this.x + this.radius, this.y, this.radius);
    }
  }, {
    key: 'x',
    get: function get() {
      return this.position.x;
    },
    set: function set(x) {
      this.position.x = x;
    }

    /**
     * The Y position of the rectangle (top-left).
     */

  }, {
    key: 'y',
    get: function get() {
      return this.position.y;
    },
    set: function set(y) {
      this.position.y = y;
    }

    /**
     * The center point of the rectangle.
     * @type {Point}
     * @readonly
     */

  }, {
    key: 'center',
    get: function get() {
      return new _geometry.Point(this.x + this.width / 2, this.y + this.height / 2);
    }

    /**
     * The X coordinate of the rectangle's center.
     * @type {number}
     */

  }, {
    key: 'centerX',
    get: function get() {
      return this.x + this.width / 2;
    },
    set: function set(centerX) {
      this.x = centerX - this.width / 2;
    }

    /**
     * The Y coordinate of the rectangle's center.
     * @type {number}
     */

  }, {
    key: 'centerY',
    get: function get() {
      return this.y + this.height / 2;
    },
    set: function set(centerY) {
      this.y = centerY - this.height / 2;
    }
  }]);

  return Rectangle;
}(_Graphics2.Graphics);