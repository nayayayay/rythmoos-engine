import {Scene} from 'rythmoos-engine';
import {FPSCounter} from './menu/index';
import {ScoreRecap, MenuButton} from './end/index';

export class End extends Scene {
  create() {
    this.set('fps', new FPSCounter());
    this.set('recap', new ScoreRecap());
    this.set('back', new MenuButton());
  }
}
