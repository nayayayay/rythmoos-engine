import {Point, Rotation} from '../geometry';
import {Graphics} from './Graphics';

/**
 * A text.
 * @extends Graphics
 */
export class Text extends Graphics {

  /**
   * Create a Text.
   * @param {string} [text=''] The content.
   * @param {number} [x=0] The X position of the text (its center).
   * @param {number} [y=0] The Y position of the text (its center).
   * @param {CanvasColour} [fillColour='#ffffff'] The background colour of the text.
   * @param {CanvasColour} [strokeColour='#ff00ff'] The colour of the text's strokes.
   * @param {number} [strokeWidth=1] The width of the text's strokes. Set to 0 if stroke.
   */
  constructor(text='', x=0, y=0, fillColour='#ffffff', strokeColour='#ff00ff', strokeWidth=1) {
    super();

    /**
     * The content.
     * @type {string}
     */
    this.text = text;

    /**
     * The center position of the text.
     * @type {Point}
     */
    this.position = new Point(x, y);

    /**
     * The fill colour of the text.
     * @type {CanvasColour}
     */
    this.fillColour = fillColour;

    /**
     * Whether or not to fill the text.
     * @type {boolean}
     * @default
     */
    this.fill = true;

    /**
     * The stroke colour of the text.
     * @type {CanvasColour}
     */
    this.strokeColour = strokeColour;

    /**
     * The stroke width of the text, set to 0 if no stroke.
     * @type {number}
     */
    this.strokeWidth = strokeWidth;

    /**
     * The rotation of the text in degrees.
     * @type {number}
     * @default
     */
    this.rotation = 0;

    /**
     * The font style.<br>
     * See {@link https://www.w3schools.com/TAgs/canvas_font.asp|CanvasFont}.
     * @type {string}
     * @default
     */
    this.fontStyle = 'normal';

    /**
     * The font variant.<br>
     * See {@link https://www.w3schools.com/TAgs/canvas_font.asp|CanvasFont}.
     * @type {string}
     * @default
     */
    this.fontVariant = 'normal';

    /**
     * The font weight.<br>
     * See {@link https://www.w3schools.com/TAgs/canvas_font.asp|CanvasFont}.
     * @type {string|number}
     * @default
     */
    this.fontWeight = 'normal';

    /**
     * The font size.<br>
     * See {@link https://www.w3schools.com/TAgs/canvas_font.asp|CanvasFont}.
     * @type {number}
     * @default
     */
    this.fontSize = 20;

    /**
     * The font family.<br>
     * See {@link https://www.w3schools.com/TAgs/canvas_font.asp|CanvasFont}.
     * @type {string}
     * @default
     */
    this.fontFamily = 'Arial';
  }

  /**
   * The X position of the text (its center).
   * @type {number}
   */
  get x() {
    return this.position.x;
  }

  set x(x) {
    this.position.x = x;
  }

  /**
   * The Y position of the text (its center).
   */
  get y() {
    return this.position.y;
  }

  set y(y) {
    this.position.y = y;
  }

  /**
   * Render the text.
   * @param {CanvasRenderingContext2D} context The renderer's context.
   */
  draw(context) {
    context.save();

    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font =
      `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${this.fontSize}px ${this.fontFamily}`
    ;

    if (this.rotation) {
      context.translate(this.x, this.y);
      context.rotate(Rotation.degreesToRadians(this.rotation));
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
}
