/**
 * A simple 500x500 "game" that will display the FPS and the time elapsed
 * since the game launched.
 * 
 * Since this is a small project, we'll write it all in one file.
 * You could of course separate each class in its own file.
 */

// Import the classes to use, in ES6/Typescript:
// import {Game, Scene, GameObject, Time, Screen} from 'rythmoos-engine';

// Import the classes to use, from the window object:
const {Game, Scene, GameObject, Time, Screen} = RythmoosEngine;

// Our game class
class MyGame extends Game {
  // Override the create() method to set the scene.
  create() {
    // Set the scene to a new MainScene
    this.scene = new MainScene();
  }
}

// Our main scene
class MainScene extends Scene {
  // Override the create method to set up the scene when it is created.
  create() {
    // Add our game objects to the scene
    this.set('fps counter', new FPSCounter());
    this.set('time counter', new TimeCounter());
  }
}

// Our game objects
class FPSCounter extends GameObject {
  // Override the create method.
  create() {
    // Here we can for example initialise our game object's properties
    this.fps = '0fps';
    this.x = Screen.width / 2;
    this.y = Screen.height / 2 - 100;
  }

  // Override the update method.
  update() {
    // Here, we put all the game object's logic.
    // This method is ran every frame, before the rendering process. So we can update
    // our game object properties.
    this.fps = `${Math.round(Time.FPS)}fps`;
  }

  // Override the render method.
  render(context) {
    // The context here is the renderer's context that's automatically passed in by the engine.
    // From here, we can render our game object.
    context.font = '42px Arial';
    context.textAlign = 'center';
    context.fillStyle = '#ffffff';
    context.fillText(this.fps, this.x, this.y);
  }
}

class TimeCounter extends GameObject {
  // This class is very similar to the FPSCounter.
  create() {
    this.time = '0ms elapsed';
    this.x = Screen.width / 2;
    this.y = Screen.height / 2 + 100;
  }

  update() {
    this.time = `${Math.round(Time.time)}ms elapsed`;
  }

  render(context) {
    context.font = '26px Arial';
    context.textAlign = 'center';
    context.fillStyle = '#ffffff';
    context.fillText(this.time, this.x, this.y);
  }
}

// Then we can start up our game when the window loads
window.onload = () => {
  new MyGame(window.innerWidth, window.innerHeight, document.body);
}
