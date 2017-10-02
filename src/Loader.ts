import {Map} from './Map';
import {Game} from './Game';

export abstract class Loader {
  public static basePath: string = '';
  private static _game: Game;
  private static _loaded: boolean = false;
  private static _images: Map<HTMLImageElement> = new Map<HTMLImageElement>();
  private static _videos: Map<HTMLVideoElement> = new Map<HTMLVideoElement>();
  private static _audios: Map<HTMLAudioElement> = new Map<HTMLAudioElement>();
  private static _json: Map<object> = new Map<object>();
  private static _files: Map<boolean> = new Map<boolean>();

  public static _init(game: Game): void {
    this._game = game;

    this._game.load();

    if (this._files.getAll().length === 0) {
      this._fileLoaded();
    }
  }

  public static loadImage(fileName: string, filePath: string): void {
    const image = document.createElement('img');

    filePath = `${this.basePath}/${filePath}`;

    this._images.set(fileName, image);
    this._files.set(fileName, false);

    image.addEventListener('load', () => {
      this._files.set(fileName, true);

      if (!this._loaded) this._fileLoaded();
    });

    image.addEventListener('error', () => {
      console.log(`Could not load file: ${filePath}.`);
    });

    image.src = filePath;
  }

  public static loadVideo(fileName: string, filePath: string): void {
    const video = document.createElement('video');

    filePath = `${this.basePath}/${filePath}`;

    this._videos.set(fileName, video);
    this._files.set(fileName, false);

    video.addEventListener('load', () => {
      this._files.set(fileName, true);

      if (!this._loaded) this._fileLoaded();
    });

    video.addEventListener('error', () => {
      console.log(`Could not load file: ${filePath}.`);
    });

    video.src = filePath;
  }

  public static loadAudio(fileName: string, filePath: string): void {
    const audio = document.createElement('audio');

    filePath = `${this.basePath}/${filePath}`;

    this._audios.set(fileName, audio);
    this._files.set(fileName, false);

    audio.addEventListener('loadeddata', () => {
      this._files.set(fileName, true);

      if (!this._loaded) this._fileLoaded();
    });

    audio.addEventListener('error', () => {
      console.log(`Could not load file: ${filePath}.`);
    });

    audio.src = filePath;
  }

  public static loadJSON(fileName: string, filePath: string): void {
    const xhr = new XMLHttpRequest();

    filePath = `${this.basePath}/${filePath}`;

    this._json.set(fileName, {});
    this._files.set(fileName, false);

    xhr.addEventListener('load', () => {
      this._files.set(fileName, true);
      this._json.set(fileName, JSON.parse(xhr.responseText));

      if (!this._loaded) this._fileLoaded();
    });

    xhr.addEventListener('error', () => {
      console.log(`Could not load file: ${filePath}`);
    });

    xhr.open('GET', filePath, true);
    xhr.send();
  }

  public static image(fileName: string): HTMLImageElement|null {
    return this._images.get(fileName);
  }

  public static video(fileName: string): HTMLVideoElement|null {
    return this._videos.get(fileName);
  }

  public static audio(fileName: string): HTMLAudioElement|null {
    return this._audios.get(fileName);
  }

  public static json(fileName: string): object|null {
    return this._json.get(fileName);
  }

  private static _fileLoaded(): void {
    if (this._files.getAll().indexOf(false) === -1) {
      this._loaded = true;
      this._game._start();
    }
  }
}
