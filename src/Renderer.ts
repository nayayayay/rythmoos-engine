import {Scene} from './Scene';

export class Renderer {
  private _context: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D) {
    this._context = context;
  }

  public render(scene: Scene): void {
    this._context.fillStyle = '#000000';
    this._context.fillRect(0, 0, this._context.canvas.width, this._context.canvas.height);
    scene._runRender(this._context);
  }
}
