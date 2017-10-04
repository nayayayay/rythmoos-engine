import {GameObject, Screen, State} from 'rythmoos-engine';

export class Score extends GameObject {
  create() {
    this.x = Screen.width / 2;
    this.y = State.get('board height') + 100;
    this.score = 0;
  }

  update() {
    this.score = State.get('current score');
  }

  render(context) {
    context.fillStyle = '#ffffff';
    context.font = '36px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'top';
    context.fillText(`Score: ${this.score}`, this.x, this.y);
  }
}
