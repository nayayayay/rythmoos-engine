// Import what we'll use in here (use import-from in ES6/Typescript)
const {GameObject, Keyboard, Loader, Screen, Time, Keys} = RythmoosEngine;

// Our character class
class Character extends GameObject {
  // Override the create method so we can initialise our character properties.
  create() {
    // Get the sprite image from the loader
    this.sprite = Loader.image('sprite');

    // Init the x and y position of the sprite to the middle of the screen
    this.x = Screen.width / 2;
    this.y  =Screen.height / 2;

    // Let's set a size to our sprite since the image is much bigger
    // than what we want.
    this.size = 50;
  }

  // Override the update method to move the sprite around
  update() {
    // Check if the wasd/arrow keys are pressed:

    if (Keyboard.keyDown(Keys.KeyA) || Keyboard.keyDown(Keys.ArrowLeft)) {
      // Move to the left, 80px/second
      this.x -= 80 * Time.second;
    }

    if (Keyboard.keyDown(Keys.KeyD) || Keyboard.keyDown(Keys.ArrowRight)) {
      // Move to the right, 80px/second
      this.x += 80 * Time.second;
    }

    if (Keyboard.keyDown(Keys.KeyW) || Keyboard.keyDown(Keys.ArrowUp)) {
      // Move to the top, 80px/second
      this.y -= 80 * Time.second;
    }

    if (Keyboard.keyDown(Keys.KeyS) || Keyboard.keyDown(Keys.ArrowDown)) {
      // Move to the bottom, 80px/second
      this.y += 80 * Time.second;
    }
  }

  // Override the render method to render our character
  render(context) {
    // Draw our sprite with the x, y, and size properties, as simple as that:
    context.drawImage(this.sprite, this.x, this.y, this.size, this.size);
  }
}
