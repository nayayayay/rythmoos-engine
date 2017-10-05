import {GameObject, State, Screen} from 'rythmoos-engine';

// Our score class
export default class Score extends GameObject {

  // Override the create method to set our properties
  create() {
    this.x = Screen.width - 30;
    this.y = Screen.height - 30;
  }

  // Override the render method to render our score text
  render(context) {
    context.fillStyle = '#ffffff';
    context.font = '36px Arial';

    // That will allow us to position the text from its bottom right corner
    context.textAlign = 'right';
    context.textBaseline = 'bottom';
    
    context.fillText(`Score: ${State.get('score')}`, this.x, this.y);
  }

}
