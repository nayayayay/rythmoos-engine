/**
 * A simple game example of a sprite moving around the screen, using the
 * keyboard inputs WASD and arrow keys.
 */

// Our game class
class MyGame extends RythmoosEngine.Game {
  // Override the Load method to load our sprite before the game starts
  load() {
    RythmoosEngine.Loader.loadImage('sprite', 'assets/sprite.png');
  }

  // Override the create method and set the game's scene
  create() {
    this.scene = new MainScene();
  }
}

// Start our game when the window loads
window.onload = () => {
  new MyGame(window.innerWidth, window.innerHeight, document.body);
}
