'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _geometry = require('../geometry');

var _Graphics2 = require('./Graphics');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Handle image files rendering.
 * @extends Graphics
 */
var Image = exports.Image = function (_Graphics) {
  _inherits(Image, _Graphics);

  /**
   * Create an Image.
   * @param {HTMLImageElement|HTMLVideoElement} image The image/video file to render.
   * @param {number} [x=0] The image position in the X axis.
   * @param {number} [y=1] The image position in the Y axis.
   * @param {number} [rotation=0] The image rotation in degrees.
   * @param {number} [opacity=1] The opacity of the image between 0 and 1.
   * @param {boolean} [visible=true] Whether to render or not this graphics.
   */
  function Image(image) {
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var rotation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var opacity = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
    var visible = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;

    _classCallCheck(this, Image);

    /**
     * The image file to render.
     * @type {HTMLImageElement|HTMLVideoElement}
     */
    var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, visible));

    _this.image = image;

    /**
     * The position of the image.
     * @type {Point}
     */
    _this.position = new _geometry.Point(x, y);

    /**
     * The rotation in degrees.
     * @type {number}
     * @default
     */
    _this.rotation = 0;

    /**
     * The opacity of the image between 0 and 1.
     * @type {number}
     */
    _this.opacity = opacity;

    /**
     * The width of the image.
     * @type {number}
     * @default
     */
    _this.width = _this.image.width;

    /**
     * The height of the image.
     * @type {number}
     * @default
     */
    _this.height = _this.image.height;

    _this.image.onload = function () {
      _this.width = _this.width === 0 ? _this.image.width : _this.width;
      _this.height = _this.height === 0 ? _this.image.height : _this.height;
    };
    return _this;
  }

  _createClass(Image, [{
    key: 'setCenter',


    /**
     * Set the center point of the image.
     * @param {Point} center The new center to set the image to.
     */
    value: function setCenter(center) {
      this.position.x = center.x - this.width / 2;
      this.position.y = center.y - this.height / 2;
    }

    /**
     * Render the image.
     * @param {CanvasRenderingContext2D} context The renderer context.
     */

  }, {
    key: 'draw',
    value: function draw(context) {
      if (!this.opacity) return;

      context.save();
      context.globalAlpha = this.opacity;

      if (this.rotation) {
        context.translate(this.centerX, this.centerY);
        context.rotate(_geometry.Rotation.degreesToRadians(this.rotation));
        context.translate(-this.centerX, -this.centerY);
      }

      context.drawImage(this.image, this.x, this.y, this.width, this.height);

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

    /**
     * The center of the image.
     * @type {Point}
     * @readonly
     */

  }, {
    key: 'center',
    get: function get() {
      return new _geometry.Point(this.x + this.width / 2, this.y + this.height / 2);
    }

    /**
     * The X position of the image's center.
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
     * The Y position of the image's center.
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

  return Image;
}(_Graphics2.Graphics);