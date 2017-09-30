'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A virtual rendering context.
 * @abstract
 */
var VirtualBuffer = exports.VirtualBuffer = function () {
  function VirtualBuffer() {
    _classCallCheck(this, VirtualBuffer);
  }

  _createClass(VirtualBuffer, null, [{
    key: 'requestBuffer',


    /**
     * Request the virtual context.<br>
     * Make sure to set the right width and height required otherwise the context may
     * fail at clearing itself properly.<br>
     * If you don't know what width and height you are going to need, you can request
     * arbitrary width and height and call {@link VirtualBuffer#clearBuffer|ClearBuffer}
     * width the width and height that need to be cleared.
     * @param {number} width The width to request from the context.
     * @param {number} height The height to request from the context.
     * @return {CanvasRenderingContext2D} The virtual context.
     */
    value: function requestBuffer(width, height) {
      this._width = width;
      this._height = height;

      return this._buffer;
    }

    /**
     * Get the image data.
     * @param {HTMLImageElement|HTMLVideoElement} image 
     * @param {number} [x=0] The X position which to get the image data from.
     * @param {number} [y=0] The Y position which to get the image data from.
     * @param {number} [width=image.width] The width of the image data area.
     * @param {number} [height=image.height] The height of the image data area.
     * @return {ImageData} The image data.
     */

  }, {
    key: 'getImageData',
    value: function getImageData(image) {
      var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : image.width;
      var height = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : image.height;

      var buffer = this.requestBuffer(width, height);
      buffer.drawImage(image, x, y);

      return buffer.getImageData(x, y, width, height);
    }

    /**
     * Clear the virtual buffer.
     * @param {number} width The width of the area to clear.
     * @param {number} height The height of the area to clear.
     */

  }, {
    key: 'clearBuffer',
    value: function clearBuffer(width, height) {
      this._width = width;
      this._height = height;

      this._clearBuffer();
    }

    /**
     * Clear the buffer and restore it.
     * @private
     */

  }, {
    key: '_clearBuffer',
    value: function _clearBuffer() {
      if (!this._width && !this._height) return;

      this._context.clearRect(0, 0, this._width, this._height);

      this._width = 0;
      this._height = 0;
      this._context.restore();
    }
  }, {
    key: '_buffer',


    /**
     * The buffer.
     * @type {CanvasRenderingContext2D}
     * @private
     */


    /**
     * The buffer width.
     * @type {number}
     * @private
     */
    get: function get() {
      this._clearBuffer();
      this._context.save();

      return this._context;
    }

    /**
     * The buffer height.
     * @type {number}
     * @private
     */


    /**
     * The virtual context.
     * @type {CanvasRenderingContext2D}
     * @private
     */

  }]);

  return VirtualBuffer;
}();

VirtualBuffer._context = document.createElement('canvas').getContext('2d');
VirtualBuffer._width = 0;
VirtualBuffer._height = 0;