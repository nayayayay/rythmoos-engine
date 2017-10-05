import {Game, State} from 'rythmoos-engine';
import MainScene from './MainScene';

// Our main game class
class MyAwesomeGame extends Game {

  // Override the create method, this is when the game is ready to start
  create() {
    // We can already initialise the score state so it is available from anywhere we need it
    State.set('score', 0);

    // Let's set the initial game scene here
    this.scene = new MainScene();
  }

}

// Start our game when the window loads
window.onload = () => {
  new MyAwesomeGame(window.innerWidth, window.innerHeight, document.body);
};
