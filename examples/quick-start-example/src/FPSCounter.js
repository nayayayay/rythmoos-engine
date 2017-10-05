import {GameObject, Time} from 'rythmoos-engine';

// Our FPS counter
export default class FPSCounter extends GameObject {

  // We'll simply override the render method here
  render(context) {
    context.fillStyle = '#ffffff';
    context.font = '20px Arial';

    // That will allow us to position the text from its top left corner
    context.textAlign = 'left';
    context.textBaseline = 'top';
    
    context.fillText(`FPS: ${Math.round(Time.FPS)}`, 15, 15);
  }

}
