import {Scene} from 'rythmoos-engine';
import {FPSCounter} from './menu/index';
import {Label, Easy, Normal, Hard, Clear, BackButton} from './settings/index';

export class Settings extends Scene {
  create() {
    this.set('fps', new FPSCounter());
    this.set('label', new Label());
    this.set('easy', new Easy());
    this.set('normal', new Normal());
    this.set('hard', new Hard());
    this.set('clear', new Clear());
    this.set('back', new BackButton());
  }
}
