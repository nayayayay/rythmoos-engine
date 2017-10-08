import {Scene} from './Scene';

/**
 * The renderer is used to render graphics to a canvas.<br>
 * Any game instance comes bundled with a renderer already.
 */
export class Renderer {
  /** The game's background colour. Defaults to black (#000000). */
  public backgroundColour: string;
  private _context: CanvasRenderingContext2D;

  /**
   * Create a Renderer.
   * @param context The context of the canvas to render to.
   */
  constructor(context: CanvasRenderingContext2D) {
    this.backgroundColour = '#000000';
    this._context = context;
  }

  /**
   * The renderer's context.
   */
  public get context(): CanvasRenderingContext2D {
    return this._context;
  }

  /**
   * Set properties to apply to the context everytime the render method is called.<br>
   * It could for example be used to apply a default fillStyle or a global composite
   * operation to all your game objects.
   * @param context The renderer's context, automatically passed in.
   */
  public contextProperties(context: CanvasRenderingContext2D): void {
  }

  /**
   * Render a scene to the canvas.
   * @param scene The scene to render.
   */
  public render(scene: Scene): void {
    this._context.fillStyle = this.backgroundColour;
    this._context.fillRect(0, 0, this._context.canvas.width, this._context.canvas.height);

    this.contextProperties(this._context);

    for (const gameObject of scene.getAll()) {
      this._context.save();
      gameObject.render(this._context);
      this._context.restore();
    }
  }
}
