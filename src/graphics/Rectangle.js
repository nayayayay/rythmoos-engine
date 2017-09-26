import {Point, Rotation} from '../geometry';
import {Graphics} from './Graphics';

/**
 * A simple rectangle.
 * @extends Graphics
 */
export class Rectangle extends Graphics {

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
  constructor(x=0, y=0, width=400, height=250, radius=0, fillColour='#ff00ff', strokeColour='#ffffff', strokeWidth=2) {
    super();

    /**
     * The position of the rectangle (top-left corner).
     * @type {Point}
     */
    this.position = new Point(x, y);

    /**
     * The width of the rectangle.
     * @type {number}
     */
    this.width = width;

    /**
     * The height of the rectangle.
     * @type {number}
     */
    this.height = height;

    /**
     * The radius of the rectangle's borders in degrees.
     * @type {number}
     */
    this.radius = radius;

    /**
     * The background colour.
     * @type {CanvasColour}
     */
    this.fillColour = fillColour;

    /**
     * The stroke colour of the rectangle.
     * @type {CanvasColour}
     */
    this.strokeColour = strokeColour;

    /**
     * The width of the rectangle's strokes. Set to 0 if none.
     * @type {number}
     */
    this.strokeWidth = strokeWidth;

    /**
     * The rotation of the rectangle, in degrees.
     * @type {number}
     * @default
     */
    this.rotation = 0;

    /**
     * Whether to fill or not the rectangle with its fill colour.
     * @type {boolean}
     * @default
     */
    this.fill = true;
  }

  /**
   * The X position of the rectangle (top-left).
   * @type {number}
   */
  get x() {
    return this.position.x;
  }

  set x(x) {
    this.position.x = x;
  }

  /**
   * The Y position of the rectangle (top-left).
   */
  get y() {
    return this.position.y;
  }

  set y(y) {
    this.position.y = y;
  }

  /**
   * The center point of the rectangle.
   * @type {Point}
   * @readonly
   */
  get center() {
    return new Point(this.x + this.width / 2, this.y + this.height / 2);
  }

  /**
   * The X coordinate of the rectangle's center.
   * @type {number}
   */
  get centerX() {
    return this.x + this.width / 2;
  }

  set centerX(centerX) {
    this.x = centerX - this.width / 2;
  }

  /**
   * The Y coordinate of the rectangle's center.
   * @type {number}
   */
  get centerY() {
    return this.y + this.height / 2;
  }

  set centerY(centerY) {
    this.y = centerY - this.height / 2;
  }

  /**
   * Change the rectangle's center point. This will update its position.
   * @param {Point} center The new center of the rectangle.
   */
  setCenter(center) {
    this.x = center.x - this.width / 2;
    this.y = center.y - this.height / 2;
  }

  /**
   * Draw the rectangle.
   * @param {CanvasRenderingContext2D} context The renderer's context.
   */
  draw(context) {
    context.save();

    if (this.rotation) {
      context.translate(this.centerX, this.centerY);
      context.rotate(Rotation.degreesToRadians(this.rotation));
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
  _drawClassic(context) {
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
  _drawRounded(context) {
    context.beginPath();
    context.moveTo(this.x + this.radius, this.y);
    context.lineTo(this.x + this.width - this.radius, this.y);
    context.arcTo(
      this.x + this.width, this.y,
      this.x + this.width, this.y + this.radius,
      this.radius
    );
    context.lineTo(this.x + this.width, this.y + this.height - this.radius);
    context.arcTo(
      this.x + this.width, this.y + this.height,
      this.x + this.width - this.radius, this.y + this.height,
      this.radius
    );
    context.lineTo(this.x + this.radius, this.y + this.height);
    context.arcTo(
      this.x, this.y + this.height,
      this.x, this.y + this.height - this.radius,
      this.radius
    );
    context.lineTo(this.x, this.y + this.radius);
    context.arcTo(
      this.x, this.y,
      this.x + this.radius, this.y,
      this.radius
    );
  }
}
