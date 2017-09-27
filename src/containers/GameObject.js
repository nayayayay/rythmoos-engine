import {Point, Rotation} from '../geometry';
import {Screen} from '../rendering';

/**
 * Define an entity in your game (e.g. a character, a building...).
 */
export class GameObject {
  
  /**
   * Create a GameObject.
   * @param {number} [x=0] The point in the X axis.
   * @param {number} [y=0] The point in the Y axis.
   * @param {number} [width=Screen.width] The width of the game object.
   * @param {number} [height=Screen.heigh] The height of the game object.
   * @param {number} [rotation=0] The rotation in degrees.
   * @param {number} [scale=1] The scale which to render this game object at.
   * @param {boolean} [visible=true] Whether the game object has to be rendered or not.
   */
  constructor(x=0, y=0, width=Screen.width, height=Screen.height, rotation=0, scale=1, visible=true) {

    /**
     * The position of the game object (top-left corner).
     * @type {Point}
     */
    this.position = new Point(x, y);

    /**
     * The width of the game object.
     * @type {number}
     */
    this.width = width;

    /**
     * The height of the game object.
     * @type {number}
     */
    this.height = height;

    /**
     * The rotation of the game object in degrees.
     * @type {number}
     */
    this.rotation = rotation;

    /**
     * The scale which to render this game object at (default is 1).
     * @type {number}
     */
    this.scale = scale;

    /**
     * Whether this game object should be rendered or not.
     * @type {boolean}
     */
    this.visible = visible;

    /**
     * The graphics contained in this game object, see {@link #addGraphics}.
     * @type {Graphics[]}
     */
    this.graphics = [];
  }

  /**
   * The X position of the game object.
   * @type {number}
   */
  get x() {
    return this.position.x;
  }

  set x(x) {
    this.position.x = x;
  }

  /**
   * The Y position of the game object.
   * @type {number}
   */
  get y() {
    return this.position.y;
  }

  set y(y) {
    this.position.y = y;
  }

  /**
   * The center of the game object. To set it, see {@link #setCenter}.
   * @type {Point}
   * @readonly
   */
  get center() {
    return new Point(this.x + this.width / 2, this.y + this.height / 2);
  }

  /**
   * The center of the game object in the X axis.
   * @type {number}
   */
  get centerX() {
    return this.x + this.width / 2;
  }

  set centerX(centerX) {
    this.x = centerX - this.width / 2;
  }

  /**
   * The center of the game object in the Y axis.
   */
  get centerY() {
    return this.y + this.height / 2;
  }

  set centerY(centerY) {
    this.y = centerY - this.height / 2;
  }

  /**
   * Change the game object center position. This will update its position.
   * @param {Point} center The new center position of the game object.
   */
  setCenter(center) {
    this.x = center.x - this.width / 2;
    this.y = center.y - this.height / 2;
  }

  /**
   * Add new graphics to the game object.
   * @param {Graphics} graphics 
   * @param {...Graphics} otherGraphics 
   */
  addGraphics(graphics, ...otherGraphics) {
    this.graphics.push(graphics);

    for (const other of otherGraphics) {
      this.addGraphics(other);
    }
  }

  /**
   * Update the game object.<br>
   * Run before each frame is rendered. For post updating, see {@link GameObject#afterUpdate}.
   */
  update() {
  }

  /**
   * Update the game object.<br>
   * Run after the each frame is rendered. For pre updating, see {@link GameObject#update}.
   */
  afterUpdate() {
  }

  /**
   * Draw the game object.<br>
   * This happens before drawing the game object's graphics. For post
   * rendering see {@link GameObject#drawAfter}.
   * @param {CanvasRenderingContext2D} context The renderer's context.
   */
  draw(context) {
  }

  /**
   * Draw the game object.<br>
   * This happens after drawing the game object's graphics. For pre
   * rendering see {@link GameObject#draw}.
   * @param {CanvasRenderingContext2D} context The renderer's context.
   */
  drawAfter(context) {
  }

  /**
   * Used internally to render the game object.
   * @param {CanvasRenderingContext2D} context The renderer's context.
   * @ignore
   */
  _render(context) {
    context.save();
    context.translate(this.x, this.y);
    context.scale(this.scale, this.scale);

    if (this.rotation) {
      context.translate(this.width / 2, this.height / 2);
      context.rotate(Rotation.degreesToRadians(this.rotation));
      context.translate(-this.width / 2, -this.height / 2);
    }

    this.draw(context);

    for (const graphics of this.graphics) {
      graphics._render(context);
    }

    this.drawAfter(context);

    context.restore();
  }
}
