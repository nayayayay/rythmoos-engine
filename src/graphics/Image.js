import {Point, Rotation} from '../geometry';
import {Graphics} from './Graphics';

/**
 * Handle image files rendering.
 * @extends Graphics
 */
export class Image extends Graphics {

  /**
   * Create an Image.
   * @param {HTMLImageElement|HTMLVideoElement} image The image/video file to render.
   * @param {number} [x=0] The image position in the X axis.
   * @param {number} [y=1] The image position in the Y axis.
   * @param {number} [rotation=0] The image rotation in degrees.
   * @param {number} [opacity=1] The opacity of the image between 0 and 1.
   * @param {boolean} [visible=true] Whether to render or not this graphics.
   */
  constructor(image, x=0, y=0, rotation=0, opacity=1, visible=true) {
    super(visible);

    /**
     * The image file to render.
     * @type {HTMLImageElement|HTMLVideoElement}
     */
    this.image = image;

    /**
     * The position of the image.
     * @type {Point}
     */
    this.position = new Point(x, y);

    /**
     * The rotation in degrees.
     * @type {number}
     * @default
     */
    this.rotation = 0;

    /**
     * The opacity of the image between 0 and 1.
     * @type {number}
     */
    this.opacity = opacity;

    /**
     * The width of the image.
     * @type {number}
     * @default
     */
    this.width = this.image.width;

    /**
     * The height of the image.
     * @type {number}
     * @default
     */
    this.height = this.image.height;

    this.image.onload = () => {
      this.width = this.width === 0 ? this.image.width : this.width;
      this.height = this.height === 0 ? this.image.height : this.height;
    }
  }

  get x() {
    return this.position.x;
  }

  set x(x) {
    this.position.x = x;
  }

  get y() {
    return this.position.y;
  }

  set y(y) {
    this.position.y = y;
  }

  /**
   * The center of the image.
   * @type {Point}
   * @readonly
   */
  get center() {
    return new Point(this.x + this.width / 2, this.y + this.height / 2);
  }

  /**
   * The X position of the image's center.
   * @type {number}
   */
  get centerX() {
    return this.x + this.width / 2;
  }

  set centerX(centerX) {
    this.x = centerX - this.width / 2;
  }

  /**
   * The Y position of the image's center.
   * @type {number}
   */
  get centerY() {
    return this.y + this.height / 2;
  }

  set centerY(centerY) {
    this.y = centerY - this.height / 2;
  }

  /**
   * Set the center point of the image.
   * @param {Point} center The new center to set the image to.
   */
  setCenter(center) {
    this.position.x = center.x - this.width / 2;
    this.position.y = center.y - this.height / 2;
  }

  /**
   * Render the image.
   * @param {CanvasRenderingContext2D} context The renderer context.
   */
  draw(context) {
    if (!this.opacity) return;

    context.save();
    context.globalAlpha = this.opacity;

    if (this.rotation) {
      context.translate(this.centerX, this.centerY);
      context.rotate(Rotation.degreesToRadians(this.rotation));
      context.translate(-this.centerX, -this.centerY);
    }

    context.drawImage(this.image, this.x, this.y, this.width, this.height);

    context.restore();
  }
}
