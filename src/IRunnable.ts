/**
 * This interface defines a runnable object, it is used internally.<br>
 * A runnable object can be called for an update and a rendering process.<br>
 * This interface is implemented by all scenes.
 */
export interface IRunnable {
  _runUpdate(): void;
  _runRender(context: CanvasRenderingContext2D): void;
}
