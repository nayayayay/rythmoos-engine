import {GameObject, State, Screen, Mouse} from 'rythmoos-engine';
import {Menu} from '../Menu';

export class MenuButton extends GameObject {
  create() {
    this.x = Screen.width / 2;
    this.y = 310;
    this.width = 110;
    this.height = 32;
    this.hovered = false;
  }

  update() {
    if (this.hovered && Mouse.leftClick) {
      State.get('game').scene = new Menu();
    }
  }

  render(context) {
    context.fillStyle = '#ffffff';
    context.strokeStyle = ' #ffffff';
    context.font = '16px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.lineWidth = 2;

    if (this.hovered) {
      context.beginPath();
      context.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
      context.stroke();
      context.fill();

      this.hovered = context.isPointInPath(Mouse.cursorX, Mouse.cursorY);

      context.fillStyle = '#000000';
      context.fillText('Main menu', this.x, this.y);
    } else {
      context.beginPath();
      context.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
      context.stroke();

      this.hovered = context.isPointInPath(Mouse.cursorX, Mouse.cursorY);

      context.fillText('Main menu', this.x, this.y);
    }
  }
}
