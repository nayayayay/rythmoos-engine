import { Point } from '../geometry';
import Shape from './Shape';

class Circle extends Shape {
  public radius: number;

  constructor(name: string, point: Point, radius: number, color: string, fill: boolean = true) {
    super(name, point, color, fill);
    this.radius = radius;
  }

  public render(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.arc(this.point.x, this.point.y, this.radius, 0, 2 * Math.PI);

    if (this.fill) {
      context.fillStyle = this.color;
      context.fill();
    } else {
      context.strokeStyle = this.color;
      context.stroke();
    }
  }
}

export default Circle;
