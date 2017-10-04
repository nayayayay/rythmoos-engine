import { GameObject, State, Keyboard, Keys } from 'rythmoos-engine';

export class Tiles extends GameObject {
  create() {
    State.set('current score', 0);

    this.tileSize = State.get('tile size');
    this.x = State.get('board x');
    this.y = State.get('board height') + this.tileSize;
    this.width = State.get('board width');
    this.height = this.tileSize;
    this.pressed = [false, false, false];
    this.turns = [-1, -1, -1];
  }

  update() {
    if (!State.get('playing')) return;

    this.pressed[0] = Keyboard.keyDown(Keys.KeyQ);
    this.pressed[1] = Keyboard.keyDown(Keys.KeyW);
    this.pressed[2] = Keyboard.keyDown(Keys.KeyE);

    if (Keyboard.keyPressed(Keys.KeyQ)) {
      if (this.turns[0] < State.get('turn') &&
          State.get('keys')[0] &&
          State.get('tile pos') > this.y - this.tileSize * 2
      ) {
        State.set('current score', State.get('current score') + 1);
        this.turns[0] = State.get('turn');
      } else {
        State.set('current score', State.get('current score') - 1);
      }
    }

    if (Keyboard.keyPressed(Keys.KeyW)) {
      if (this.turns[1] < State.get('turn') &&
        State.get('keys')[1] &&
        State.get('tile pos') > this.y - this.tileSize * 2
      ) {
        State.set('current score', State.get('current score') + 1);
        this.turns[1] = State.get('turn');
      } else {
        State.set('current score', State.get('current score') - 1);
      }
    }

    if (Keyboard.keyPressed(Keys.KeyE)) {
      if (this.turns[2] < State.get('turn') &&
        State.get('keys')[2] &&
        State.get('tile pos') > this.y - this.tileSize * 2
      ) {
        State.set('current score', State.get('current score') + 1);
        this.turns[2] = State.get('turn');
      } else {
        State.set('current score', State.get('current score') - 1);
      }
    }
  }

  render(context) {
    context.font = '20px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    context.fillStyle = this.pressed[0] ? '#9542f4' : '#ffffff';
    context.fillRect(this.x - this.width / 2, this.y - this.tileSize, this.tileSize, this.tileSize);
    context.fillStyle = this.pressed[0] ? '#ffffff' : '#000000';
    context.fillText('Q', this.x - this.width / 2 + this.tileSize / 2, this.y - this.tileSize / 2);

    context.fillStyle = this.pressed[1] ? '#9542f4' : '#ffffff';
    context.fillRect(this.x - this.tileSize / 2, this.y - this.tileSize, this.tileSize, this.tileSize);
    context.fillStyle = this.pressed[1] ? '#ffffff' : '#000000';
    context.fillText('W', this.x, this.y - this.tileSize / 2);

    context.fillStyle = this.pressed[2] ? '#9542f4' : '#ffffff';
    context.fillRect(this.x + this.tileSize / 2, this.y - this.tileSize, this.tileSize, this.tileSize);
    context.fillStyle = this.pressed[2] ? '#ffffff' : '#000000';
    context.fillText('E', this.x + this.width / 2 - this.tileSize / 2, this.y - this.tileSize / 2);
  }
}
