import { Renderer } from '../rendering';
import Scene from './Scene';

/**
 * The Stage contains everything that is used from the Scene to the Renderer.
 */
class Stage {
  /** The canvas this Stage is connected to. */
  public canvas: HTMLCanvasElement;
  /** The Renderer used by this Stage. */
  public renderer: Renderer;

  /**
   * @param canvas The canvas to render in.
   */
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.renderer = new Renderer(<CanvasRenderingContext2D>this.canvas.getContext('2d'));
  }

  /** Update the Scene instance rendered by this Stage's renderer. */
  public setScene(scene: Scene): void {
    this.renderer.scene = scene;
  }
}

export default Stage;
