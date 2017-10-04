import {GameObject, Time} from 'rythmoos-engine';

export class FPSCounter extends GameObject {
  render(context) {
    context.fillStyle = '#ffffff';
    context.font = '12px Arial';
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.fillText(`FPS: ${Math.round(Time.FPS)}`, 12, 12);
  }
}
