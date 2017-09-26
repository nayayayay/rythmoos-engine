/**
 * A drawable graphics that can be added to a game object.
 */
export class Graphics {
  
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
    this.draw(context);
  }
}
