/**
 * Render a scene to the game canvas using the 2D rendering context.
 */
export class Renderer {

  /**
   * Create a renderer.
   * @param {CanvasRenderingContext2D} context The context to use when rendering a scene.
   * @param {CanvasColour} [backgroundColour='#000000'] The background
   * colour of the canvas.
   */
  constructor(context, backgroundColour='#000000') {

    /**
     * The context used to render scenes.
     * @type {CanvasRenderingContext2D}
     */
    this.context = context;

    /**
     * The background colour.
     * @type {CanvasColour}
     */
    this.backgroundColour = backgroundColour;
  }

  /**
   * Render a scene onto the canvas.
   * @param {Scene} scene 
   */
  render(scene) {
    this.context.fillStyle = this.backgroundColour;
    this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);

    for (const gameObject of scene.gameObjects) {
      gameObject._render(this.context);
    }
  }
}
