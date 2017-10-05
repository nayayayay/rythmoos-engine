import { GameObject, Screen, Mouse, State } from 'rythmoos-engine';
import {Settings} from '../Settings';

export class SettingsButton extends GameObject {
  create() {
    this.width = 160;
    this.height = 60;
    this.x = Screen.width / 2;
    this.y = Screen.height - 150;
    this.hovered = false;
    this.backgroundOpacity = 0;
    this.textColour = '#ffffff';
  }

  update() {
    if (this.hovered) {
      if (Mouse.leftClick) {
        State.get('game').scene = new Settings();
      }

      this.backgroundOpacity = 1;
      this.textColour = '#000000';
    } else {
      this.backgroundOpacity = 0;
      this.textColour = '#ffffff';
    }
  }

  render(context) {
    context.fillStyle = '#ffffff';
    context.strokeStyle = '#ffffff';
    context.lineWidth = 2;
    context.font = '30px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.beginPath();
    context.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);

    context.stroke();

    context.globalAlpha = this.backgroundOpacity;
    context.fill();
    context.globalAlpha = 1;

    this.hovered = context.isPointInPath(Mouse.cursorX, Mouse.cursorY);

    context.fillStyle = this.textColour;
    context.fillText('Settings', this.x, this.y);
  }
}
