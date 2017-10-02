import {Scene} from './Scene';

/**
 * The renderer is used to render graphics to a canvas.<br>
 * Any game instance comes bundled with a renderer already.
 */
export class Renderer {
  private _context: CanvasRenderingContext2D;

  /**
   * Create a Renderer.
   * @param context The context of the canvas to render to.
   */
  constructor(context: CanvasRenderingContext2D) {
    this._context = context;
  }

  /**
   * Render a scene to the canvas.
   * @param scene The scene to render.
   */
  public render(scene: Scene): void {
    this._context.fillStyle = '#000000';
    this._context.fillRect(0, 0, this._context.canvas.width, this._context.canvas.height);
    scene._runRender(this._context);
  }
}
