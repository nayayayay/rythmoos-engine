import {Scene, Loader, Time, State} from 'rythmoos-engine';
import {End} from './End';
import {FPSCounter} from './menu/index';
import {Board, Tiles, MuteButton, Score} from './play/index';

export class Play extends Scene {
  create() {
    State.set('playing', false);
    Loader.audio('song').currentTime = 0;
    Loader.audio('song').muted = false;

    this.timer = 2000;

    this.set('fps', new FPSCounter());
    this.set('mute', new MuteButton());
    this.set('board', new Board());
    this.set('tiles', new Tiles());
    this.set('score', new Score());
  }

  update() {
    if (Loader.audio('song').currentTime === 0) {
      this.timer -= Time.deltaTime;

      switch (State.get('difficulty')) {
        case 0:
          if (this.timer <= 1500) {
            State.set('playing', true);
          }
          break;
        case 1:
          if (this.timer <= 1000) {
            State.set('playing', true);
          }
          break;
        case 2:
          if (this.timer <= 500) {
            State.set('playing', true);
          }
          break;
        default:
          break;
      }

      if (this.timer <= 0) {
        Loader.audio('song').play();
      }
    } else {
      if (Loader.audio('song').currentTime === Loader.audio('song').duration) {
        State.get('game').scene = new End();
      }
    }
  }
}
