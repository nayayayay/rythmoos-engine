import { GameObject, Screen } from 'rythmoos-engine';

export class Label extends GameObject {
  create() {
    this.x = Screen.width / 2;
    this.y = 150;
  }
    
  render(context) {
    context.fillStyle = '#ffffff';
    context.font = '30px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('Difficulty:', this.x, this.y);
  }
}
