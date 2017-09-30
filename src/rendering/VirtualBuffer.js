/**
 * A virtual rendering context.
 * @abstract
 */
export class VirtualBuffer {

  /**
   * The virtual context.
   * @type {CanvasRenderingContext2D}
   * @private
   */
  static _context = document.createElement('canvas').getContext('2d');

  /**
   * The buffer width.
   * @type {number}
   * @private
   */
  static _width = 0;

  /**
   * The buffer height.
   * @type {number}
   * @private
   */
  static _height = 0;

  /**
   * The buffer.
   * @type {CanvasRenderingContext2D}
   * @private
   */
  static get _buffer() {
    this._clearBuffer();
    this._context.save();

    return this._context;
  }

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
  static requestBuffer(width, height) {
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
  static getImageData(image, x=0, y=0, width=image.width, height=image.height) {
    const buffer = this.requestBuffer(width, height);
    buffer.drawImage(image, x, y);

    return buffer.getImageData(x, y, width, height);
  }

  /**
   * Clear the virtual buffer.
   * @param {number} width The width of the area to clear.
   * @param {number} height The height of the area to clear.
   */
  static clearBuffer(width, height) {
    this._width = width;
    this._height = height;

    this._clearBuffer();
  }

  /**
   * Clear the buffer and restore it.
   * @private
   */
  static _clearBuffer() {
    if (!this._width && !this._height) return;

    this._context.clearRect(0, 0, this._width, this._height);

    this._width = 0;
    this._height = 0;
    this._context.restore();
  }
}
