import { Scene } from '../root';
import { Time, HighResTimeStamp } from '../timing';
import AnimationFrame from './AnimationFrame';

/**
 * Render a Scene to the canvas.
 */
class Renderer {
  public context: CanvasRenderingContext2D;
  public scene: Scene;
  protected animationFrame: AnimationFrame;

  /**
   * @param context The 2D context to render to.
   * @param scene The scene to render onto the canvas.
   */
  constructor(context: CanvasRenderingContext2D, scene?: Scene) {
    this.context = context;
    this.animationFrame = null;
    this.scene = scene ? scene : new Scene();
  }

  /**
   * Start the rendering process.
   */
  public start(): void {
    if (this.animationFrame === null) {
      this.animationFrame = requestAnimationFrame((frame: HighResTimeStamp) => {
        this.render(frame);
      });
    }
  }

  /**
   * Stop the rendering process.
   */
  public stop(): void {
    if (this.animationFrame !== null) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  /**
   * Render a frame and request for the next one.
   * @param frame 
   */
  public render(frame: HighResTimeStamp): void {
    // Update Time
    Time._setFrame(frame);

    // Clear the canvas
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

    // Render each element of the scene
    for (const shape of this.scene.shapes) {
      shape.render(this.context);
    }

    // Request the next animation frame
    this.animationFrame = requestAnimationFrame((frame: HighResTimeStamp) => {
      this.render(frame);
    });
  }
}

export default Renderer;
