import {GameObject, Screen, Mouse, State} from 'rythmoos-engine';

// Our circle game object
export default class Circle extends GameObject {

  // Override the create method
  create() {
    // Let's set up our game object properties here

    // The radius of our circle
    this.radius = 50;

    // The x and y coordinates
    this.x = this.getNewPosition(Screen.width);
    this.y = this.getNewPosition(Screen.height);

    // Let's set a boolean value that checks whether the mouse is hovering the circle or not.
    this.hovered = false;

    // The colour of our circle (let's make it white when hovered)
    this.colour = '#ff00ff';
  }

  // Override the update method
  update() {
    // This method is ran each frame, before the rendering process.
    // Let's update our game object properties from here:

    // If the circle is hovered, let's set its colour to white, or set it to
    // #ff00ff otherwise.
    this.colour = this.hovered ? '#ffffff' : '#ff00ff';

    // If the mouse left button is clicked
    if (Mouse.leftClick) {
      // Let's be mean here and remove 1 point from the player's score if he clicks outside
      // of the circle.
      if (this.hovered === false) {
        State.set('score', State.get('score') - 1);
      } else {
        // Otherwise, we'll add 1 to the score
        State.set('score', State.get('score') + 1);
      }

      // Set new positions to our circle when a click occurs
      this.x = this.getNewPosition(Screen.width);
      this.y  =this.getNewPosition(Screen.height);
    }
  }

  // Override the render method
  render(context) {
    // We will render our object form here.
    context.fillStyle = this.colour;

    // Draw the circle
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fill();

    // Since we drew our circle's path, we can use the context isPointInPath method to check
    // whether the cursor is in the path or not.
    this.hovered = context.isPointInPath(Mouse.cursorX, Mouse.cursorY);
  }

  /**
   * Simple custom method to set our game object's x and y coordinates
   * @param {number} max The max possible value
   * @return A random x
   */
  getNewPosition(max) {
    // Some very complex mathemical stuff
    return Math.random() * (max - this.radius * 2) + this.radius;
  }

}
