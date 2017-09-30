'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _geometry = require('../geometry');

var _Graphics2 = require('./Graphics');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A text.
 * @extends Graphics
 */
var Text = exports.Text = function (_Graphics) {
  _inherits(Text, _Graphics);

  /**
   * Create a Text.
   * @param {string} [text=''] The content.
   * @param {number} [x=0] The X position of the text (its center).
   * @param {number} [y=0] The Y position of the text (its center).
   * @param {CanvasColour} [fillColour='#ffffff'] The background colour of the text.
   * @param {CanvasColour} [strokeColour='#ff00ff'] The colour of the text's strokes.
   * @param {number} [strokeWidth=1] The width of the text's strokes. Set to 0 if stroke.
   */
  function Text() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var fillColour = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#ffffff';
    var strokeColour = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#ff00ff';
    var strokeWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;

    _classCallCheck(this, Text);

    /**
     * The content.
     * @type {string}
     */
    var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this));

    _this.text = text;

    /**
     * The center position of the text.
     * @type {Point}
     */
    _this.position = new _geometry.Point(x, y);

    /**
     * The fill colour of the text.
     * @type {CanvasColour}
     */
    _this.fillColour = fillColour;

    /**
     * Whether or not to fill the text.
     * @type {boolean}
     * @default
     */
    _this.fill = true;

    /**
     * The stroke colour of the text.
     * @type {CanvasColour}
     */
    _this.strokeColour = strokeColour;

    /**
     * The stroke width of the text, set to 0 if no stroke.
     * @type {number}
     */
    _this.strokeWidth = strokeWidth;

    /**
     * The rotation of the text in degrees.
     * @type {number}
     * @default
     */
    _this.rotation = 0;

    /**
     * The font style.<br>
     * See {@link https://www.w3schools.com/TAgs/canvas_font.asp|CanvasFont}.
     * @type {string}
     * @default
     */
    _this.fontStyle = 'normal';

    /**
     * The font variant.<br>
     * See {@link https://www.w3schools.com/TAgs/canvas_font.asp|CanvasFont}.
     * @type {string}
     * @default
     */
    _this.fontVariant = 'normal';

    /**
     * The font weight.<br>
     * See {@link https://www.w3schools.com/TAgs/canvas_font.asp|CanvasFont}.
     * @type {string|number}
     * @default
     */
    _this.fontWeight = 'normal';

    /**
     * The font size.<br>
     * See {@link https://www.w3schools.com/TAgs/canvas_font.asp|CanvasFont}.
     * @type {number}
     * @default
     */
    _this.fontSize = 20;

    /**
     * The font family.<br>
     * See {@link https://www.w3schools.com/TAgs/canvas_font.asp|CanvasFont}.
     * @type {string}
     * @default
     */
    _this.fontFamily = 'Arial';
    return _this;
  }

  /**
   * The X position of the text (its center).
   * @type {number}
   */


  _createClass(Text, [{
    key: 'draw',


    /**
     * Render the text.
     * @param {CanvasRenderingContext2D} context The renderer's context.
     */
    value: function draw(context) {
      context.save();

      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.font = this.fontStyle + ' ' + this.fontVariant + ' ' + this.fontWeight + ' ' + this.fontSize + 'px ' + this.fontFamily;

      if (this.rotation) {
        context.translate(this.x, this.y);
        context.rotate(_geometry.Rotation.degreesToRadians(this.rotation));
        context.translate(-this.x, -this.y);
      }

      if (this.fill) {
        context.fillStyle = this.fillColour;
        context.fillText(this.text, this.x, this.y);
      }

      if (this.strokeWidth) {
        context.strokeStyle = this.strokeColour;
        context.strokeText(this.text, this.x, this.y);
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

    /**
     * The Y position of the text (its center).
     */

  }, {
    key: 'y',
    get: function get() {
      return this.position.y;
    },
    set: function set(y) {
      this.position.y = y;
    }
  }]);

  return Text;
}(_Graphics2.Graphics);