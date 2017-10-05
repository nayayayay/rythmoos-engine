// Our main scene
class MainScene extends RythmoosEngine.Scene {
  // Override the create method so we add our character game object
  create() {
    this.set('character', new Character());
  }
}
