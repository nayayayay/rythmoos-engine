import { GameObject, Screen, Mouse, State } from 'rythmoos-engine';

export class Clear extends GameObject {
  create() {
    this.width = 100;
    this.height = 38;
    this.x = Screen.width / 2;
    this.y = 300;
    this.hovered = false;
  }

  update() {
    if (this.hovered && Mouse.leftClick) {
      localStorage.removeItem('score');
      localStorage.removeItem('difficulty');
      State.set('score', 0);
      State.set('difficulty', 0);
    }
  }

  render(context) {
    context.fillStyle = '#ffffff';
    context.strokeStyle = '#ffffff';
    context.lineWidth = 2;
    context.font = '18px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    context.beginPath();
    context.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    context.stroke();

    if (this.hovered) {
      context.fill();
      context.fillStyle = '#000000';
    }

    this.hovered = context.isPointInPath(Mouse.cursorX, Mouse.cursorY);

    context.fillText('Clear data', this.x, this.y);
  }
}
