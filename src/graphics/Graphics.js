/**
 * A drawable graphics that can be added to a game object.
 */
export class Graphics {
  
  /**
   * Create a new graphics.
   * @param {boolean} [visible=true] Whether the graphics should be rendered or not.
   */
  constructor(visible=true) {

    /**
     * Whether the graphics should be rendered or not.
     * @type {boolean}
     */
    this.visible = true;

    /**
     * The shadow colour.
     * @type {CanvasColour}
     * @default
     */
    this.shadowColour = '#ffffff';

    /**
     * The shadow blur. Set to 0 if not shadow.
     * @type {number}
     * @default
     */
    this.shadowBlur = 0;

    /**
     * The shadow offset in the X axis.
     * @type {number}
     * @default
     */
    this.shadowOffsetX = 5;

    /**
     * The shadow offset in the Y axis.
     * @type {number}
     * @default
     */
    this.shadowOffsetY = 5;
  }

  /**
   * Draw the graphics.<br>
   * Override this to define what should be drawn.
   * @param {CanvasRenderingContext2D} context The renderer's context.
   */
  draw(context) {
  }

  /**
   * Used internally to render the graphics.
   * @param {CanvasRenderingContext2D} context The renderer's context.
   * @ignore
   */
  _render(context) {
    if (!this.visible) return;

    if (this.shadowBlur) {
      context.save();
      context.shadowColor = this.shadowColour;
      context.shadowBlur = this.shadowBlur;
      context.shadowOffsetX = this.shadowOffsetX;
      context.shadowOffsetY = this.shadowOffsetY;

      this.draw(context);
      context.restore();
    } else {
      this.draw(context);
    }
    
  }
}
