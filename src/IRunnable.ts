export interface IRunnable {
  _runUpdate(): void;
  _runRender(context: CanvasRenderingContext2D): void;
}
