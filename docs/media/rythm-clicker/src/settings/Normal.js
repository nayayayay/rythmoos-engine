import { GameObject, Mouse, Screen, State } from 'rythmoos-engine';

export class Normal extends GameObject {
  create() {
    this.width = 80;
    this.height = 36;
    this.x = Screen.width / 2;
    this.y = 210;
    this.active = State.get('difficulty') === 1;
    this.hovered = false;
  }

  update() {
    if (this.hovered && Mouse.leftClick) {
      State.set('difficulty', 1);
      localStorage.setItem('difficulty', '1');
    }

    this.active = State.get('difficulty') === 1;
  }

  render(context) {
    context.fillStyle = '#ffffff';
    context.strokeStyle = '#ffffff';
    context.lineWidth = 2;
    context.font = '18px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('normal', this.x, this.y);

    context.globalAlpha = this.active ? 1 : 0;

    context.beginPath();
    context.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    context.stroke();

    this.hovered = context.isPointInPath(Mouse.cursorX, Mouse.cursorY);

    context.globalAlpha = 1;
  }
}
