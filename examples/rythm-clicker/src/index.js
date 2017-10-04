import {Game, Loader, State} from 'rythmoos-engine';
import {Menu} from './Menu';

class MyGame extends Game {
  load() {
    Loader.basePath = 'assets';
    Loader.loadAudio('song', 'song.mp3');
  }

  create() {
    const score = localStorage.getItem('score') || 0;
    const difficulty = localStorage.getItem('difficulty') || 0;

    State.set('score', parseInt(score));
    State.set('difficulty', parseInt(difficulty));
    State.set('game', this);

    Loader.audio('song').volume = 0.8;

    this.scene = new Menu();
  }
}

window.onload = () => {
  new MyGame(500, 500, document.body);
}
