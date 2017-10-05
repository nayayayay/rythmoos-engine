import {Scene} from 'rythmoos-engine';
import Circle from './Circle';
import Score from './Score';
import FPSCounter from './FPSCounter';

// Our main scene
export default class MainScene extends Scene {

  // Override the create method so we can setup the scene
  create() {
    // Let's add our game objects
    this.set('circle', new Circle());
    this.set('score', new Score());
    this.set('fps counter', new FPSCounter());
  }

}
