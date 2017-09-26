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

    this.draw(context);
  }
}
