import { Point } from '../geometry';
import Shape from './Shape';

class Rectangle extends Shape {
  public width: number;
  public height: number;

  constructor(name: string, point: Point, width: number, height: number , color: string, fill: boolean = true) {
    super(name, point, color, fill);
    this.width = width;
    this.height = height;
  }

  public render(context: CanvasRenderingContext2D): void {
    if (this.fill) {
      context.fillStyle = this.color;
      context.fillRect(this.point.x, this.point.y, this.width, this.height);
    } else {
      context.strokeStyle = this.color;
      context.strokeRect(this.point.x, this.point.y, this.width, this.height);
    }
  }
}

export default Rectangle;
