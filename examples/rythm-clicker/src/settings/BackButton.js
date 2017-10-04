import {GameObject, Screen, Mouse, State} from 'rythmoos-engine';
import {Menu} from '../Menu';

export class BackButton extends GameObject {
  create() {
    this.width = 100;
    this.height = 44;
    this.x = Screen.width / 2;
    this.y = 420;
    this.hovered = false;
  }

  update() {
    if (this.hovered && Mouse.leftClick) {
      State.get('game').scene = new Menu();
    }
  }

  render(context) {
    context.fillStyle = '#ffffff';
    context.strokeStyle = '#ffffff';
    context.lineWidth = 2;
    context.font = '22px Arial';
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

    context.fillText('Back', this.x, this.y);
  }
}
