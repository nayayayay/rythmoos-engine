import { Point } from '../geometry';

interface IShape {
  name: string;
  point: Point;
  color: string;
  fill: boolean;
  render: (context: CanvasRenderingContext2D) => void;
}

abstract class Shape implements IShape {
  public name: string;
  public point: Point;
  public color: string;
  public fill: boolean;

  constructor(name: string, point: Point, color: string, fill: boolean = true) {
    this.name = name;
    this.point = point;
    this.color = color;
    this.fill = fill;
  }

  /**
   * Draws itself using the context passed by the Renderer.
   * @param context 
   */
  public render(context: CanvasRenderingContext2D): void {
  }
}

export {
  IShape
};

export default Shape;
