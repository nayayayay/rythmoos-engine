/**
 * This interface defines an element that can be rendered.<br>
 * All game objects implement it.
 */
export interface IRenderable {
  render(context: CanvasRenderingContext2D): void;
}
