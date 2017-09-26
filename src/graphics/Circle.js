import {Point, Rotation} from '../geometry';
import {Graphics} from './Graphics';

/**
 * A simple circle shape.
 */
export class Circle extends Graphics {

  /**
   * Create a Circle.
   * @param {number} [x=0] The position in the X axis.
   * @param {number} [y=0] The position in the Y axis.
   * @param {number} [size=100] The diameter of the circle.
   * @param {CanvasColour} [fillColour='#ff00ff'] The background colour of the circle.
   * @param {CanvasColour} [strokeColour='#ffffff'] The colour of the strokes.
   * @param {number} [strokeWidth=2] The width of the strokes, set to 0 if none.
   */
  constructor(x=0, y=0, size=100, fillColour='#ff00ff', strokeColour='#ffffff', strokeWidth=2) {
    super();

    /**
     * The position of the circle (its center).
     * @type {Point}
     */
    this.position = new Point(x, y);

    /**
     * The diameter of the circle.
     * @type {number}
     */
    this.size = size;

    /**
     * The background colour of the circle
     * @type {CanvasColour}
     */
    this.fillColour = fillColour;

    /**
     * The colour of the strokes.
     * @type {CanvasColour}
     */
    this.strokeColour = strokeColour;

    /**
     * The width of the strokes. Set to 0 if none.
     * @type {number}
     */
    this.strokeWidth = strokeWidth;

    /**
     * The rotation of the circle in degrees.
     * @type {number}
     * @default
     */
    this.rotation = 0;

    /**
     * Whether to fill or not the circle with its fill colour.
     * @type {boolean}
     * @default
     */
    this.fill = true;
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
   * Draw the circle.
   * @param {CanvasRenderingContext2D} context The renderer's context.
   */
  draw(context) {
    context.save();

    if (this.rotation) {
      context.translate(this.x, this.y);
      context.rotate(Rotation.degreesToRadians(this.rotation));
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
}
