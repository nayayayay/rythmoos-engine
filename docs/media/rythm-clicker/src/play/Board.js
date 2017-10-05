import { GameObject, State, Screen, Time } from 'rythmoos-engine';

export class Board extends GameObject {
  create() {
    this.tileSize = 70;
    this.width = this.tileSize * 3;
    this.height = 270;
    this.x = Screen.width / 2;
    this.y = 0;
    this.keys = [false, false, false];
    this.pos = 0;
    this.speed = 0;
    
    switch (State.get('difficulty')) {
      case 0:
        this.speed = 0.38;
        break;
      case 1:
        this.speed = 0.46;
        break;
      case 2:
        this.speed = 0.58;
        break;
      default:
        break;
    }

    State.set('tile size', this.tileSize);
    State.set('board width', this.width);
    State.set('board height', this.height);
    State.set('board x', this.x);
    State.set('keys', this.keys);
    State.set('tile pos', this.pos);
    State.set('turn', 0);
  }

  update() {
    if (!State.get('playing')) return;

    this.pos += this.speed * Time.deltaTime;

    if (this.pos > this.height) {
      State.set('turn', State.get('turn') + 1);
      this.pos = 0;

      this.keys[0] = Math.random() < 0.5;
      this.keys[1] = Math.random() < 0.5;
      this.keys[2] = Math.random() < 0.5;

      if (this.keys.indexOf(true) === -1) {
        this.keys[Math.floor(Math.random() * 3)] = true;
      }
    }

    State.set('tile pos', this.pos);
  }

  render(context) {
    context.lineWidth = 2;
    context.fillStyle = '#ffffff';
    context.strokeStyle = '#ffffff';
    context.font = '26px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    for (let i = 0; i < this.keys.length; i++) {
      if (!this.keys[i]) continue;

      const tileX = this.x + (i * this.tileSize) - this.width / 2;
      let char = '';

      switch (i) {
        case 0:
          char = 'Q';
          break;
        case 1:
          char = 'W';
          break;
        case 2:
          char = 'E';
          break;
        default:
          break;
      }

      context.fillStyle = '#ffffff';
      context.fillRect(tileX, this.pos, this.tileSize, this.tileSize);
      context.fillStyle = '#000000';
      context.fillText(char, tileX + this.tileSize / 2, this.pos + this.tileSize / 2);
    }

    context.beginPath();
    context.moveTo(this.x - this.width / 2, this.y);
    context.lineTo(this.x - this.width / 2, this.height + this.tileSize);
    context.stroke();

    context.beginPath();
    context.moveTo(this.x - 35, this.y);
    context.lineTo(this.x - 35, this.height + this.tileSize);
    context.stroke();

    context.beginPath();
    context.moveTo(this.x + 35, this.y);
    context.lineTo(this.x + 35, this.height + this.tileSize);
    context.stroke();

    context.beginPath();
    context.moveTo(this.x + this.width / 2, this.y);
    context.lineTo(this.x + this.width / 2, this.height + this.tileSize);
    context.stroke();
  }
}
