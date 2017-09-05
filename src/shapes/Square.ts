import Point from './Point';
import Shape from './Shape';

class Square extends Shape {
  public size: number;

  constructor(name: string, point: Point, size: number, color: string, fill: boolean = true) {
    super(name, point, color, fill);
    this.size = size;
  }

  public render(context: CanvasRenderingContext2D): void {
    if (this.fill) {
      context.fillStyle = this.color;
      context.fillRect(this.point.x, this.point.y, this.size, this.size);
    } else {
      context.strokeStyle = this.color;
      context.strokeRect(this.point.x, this.point.y, this.size, this.size);
    }
  }
}

export default Square;
