import Shape from './Shape';
import { Point } from '../geometry';

class Label extends Shape {
  public content: string;
  public font: string;

  constructor(name: string, point: Point, content: string, color: string, font: string, fill: boolean = true) {
    super(name, point, color, fill);
    this.content = content;
    this.font = font;
  }

  public render(context: CanvasRenderingContext2D): void {
    context.font = this.font;
    
    if (this.fill) {
      context.fillStyle = this.color;
      context.fillText(this.content, this.point.x, this.point.y);
    } else {
      context.strokeStyle = this.color;
      context.strokeText(this.content, this.point.x, this.point.y);
    }
  }
}

export default Label;
