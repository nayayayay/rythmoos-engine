import {GameObject, State, Screen} from 'rythmoos-engine';

export class ScoreRecap extends GameObject {
  create() {
    this.score = State.get('current score');
    this.bestScore = State.get('score');
    this.text = ['', ''];
    this.x = Screen.width / 2;
    this.y = 210;

    if (this.score > this.bestScore) {
      State.set('score', this.score);
      localStorage.setItem('score', this.score);
      this.text[0] = 'New best score:';
      this.text[1] = `${this.score}`;
    } else if (this.score < 0) {
      this.text[0] = 'You lost!';
      this.text[1] = `Score: ${this.score}`;
    } else {
      this.text[0] = `Best score: ${this.bestScore}`;
      this.text[1] = `Score: ${this.score}`;
    }
  }

  render(context) {
    context.fillStyle = '#ffffff';
    context.font = '28px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(this.text[0], this.x, this.y);
    context.fillText(this.text[1], this.x, this.y + 40);
  }
}
