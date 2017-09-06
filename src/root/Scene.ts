import { Shape } from '../shapes';

/**
 * Represent a scene to render onto the canvas.
 * Contain each element to be drawn when injected into a Renderer.
 */
class Scene {
  /** Contain each shapes on the scene. */
  public shapes: Array<Shape>;

  constructor() {
    this.shapes = [];
  }

  /**
   * Add a new shape to draw onto the canvas.
   * @param shape The Shape to add to the scene.
   * @return The new amount of shapes contained in the scene.
   */
  public addShape(shape: Shape): number {
    return this.shapes.push(shape);
  }

  /**
   * Remove 
   * @param shapeName The name of the Shape to remove from the scene.
   * @return The new amount of shapes contained in the scene, null if unchanged.
   */
  public removeShape(shapeName: string): number|null {
    for (const shape of this.shapes) {
      if (shape.name === shapeName) {
        this.shapes.splice(this.shapes.indexOf(shape));

        return this.shapes.length;
      }
    }

    return null;
  }
}

export default Scene;
