import {GameObject, State, Screen} from 'rythmoos-engine';

export class BestScore extends GameObject {
  create() {
    this.x = Screen.width - 14;
    this.y = Screen.height - 14;
    this.score = State.get('score');
  }

  render(context) {
    context.fillStyle = '#ffffff';
    context.font = '18px Arial';
    context.textAlign = 'right';
    context.textBaseline = 'bottom';
    context.fillText(`Best score: ${this.score}`, this.x, this.y);
  }
}
