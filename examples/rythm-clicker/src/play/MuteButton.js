import { GameObject, Screen, Mouse, Loader } from 'rythmoos-engine';

export class MuteButton extends GameObject {
  create() {
    this.hovered = false;
    this.x = Screen.width - 50;
    this.y = Screen.height - 10;
  }

  update() {
    if (this.hovered && Mouse.leftClick) {
      Loader.audio('song').muted = !Loader.audio('song').muted;
    }
  }

  render(context) {
    context.fillStyle = '#ffffff';
    context.font = '20px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'bottom';

    if (Loader.audio('song').muted) {
      context.fillText('Unmute', this.x, this.y);
    } else {
      context.fillText('Mute', this.x, this.y);
    }

    context.beginPath();
    context.rect(this.x - 30, this.y - 30, 60, 30);
    context.closePath();

    this.hovered = context.isPointInPath(Mouse.cursorX, Mouse.cursorY);
  }
}
