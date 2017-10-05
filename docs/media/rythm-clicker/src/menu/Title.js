import {GameObject, Screen} from 'rythmoos-engine';

export class Title extends GameObject {
  create() {
    this.x = Screen.width / 2;
    this.y = 100;
  }

  render(context) {
    context.fillStyle = '#ffffff';
    context.font = '40px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('Rythm Clicker', this.x, this.y);
  }
}
