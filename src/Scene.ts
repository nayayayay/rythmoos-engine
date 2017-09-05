/**
 * Represent a scene to render onto the canvas.
 * Contain each element to be drawn when injected into a Renderer.
 */
class Scene {
  /** Contain each element as drawing functions. */
  public elements: Array<Function>;

  constructor() {
    this.elements = [];
  }

  /**
   * Add a new element to draw onto the canvas.
   * @param element A function that takes the Renderer's 2D context and draws anything
   * that is needed.
   */
  public addElement(element: Function): void {
    this.elements.push(element);
  }
}

export default Scene;
