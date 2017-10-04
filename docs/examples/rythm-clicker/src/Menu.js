import {Scene} from 'rythmoos-engine';
import {BestScore, Title, FPSCounter, StartButton, SettingsButton} from './menu/index';

export class Menu extends Scene {
  create() {
    this.set('title', new Title());
    this.set('fps', new FPSCounter());
    this.set('start', new StartButton());
    this.set('settings', new SettingsButton());
    this.set('score', new BestScore());
  }
}
