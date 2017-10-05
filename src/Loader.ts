import {Map} from './Map';
import {Game} from './Game';

/**
 * The loader is an easy way to preload all the required assets for your game.<br>
 * You can use it from the load() method of your Game class.<br>
 * It can also be used while the game is running to load assets on the fly.
 */
export abstract class Loader {
  /** The base path to the assets directory. */
  public static basePath: string = '.';
  private static _game: Game;
  private static _loaded: boolean = false;
  private static _images: Map<HTMLImageElement> = new Map<HTMLImageElement>();
  private static _videos: Map<HTMLVideoElement> = new Map<HTMLVideoElement>();
  private static _audios: Map<HTMLAudioElement> = new Map<HTMLAudioElement>();
  private static _json: Map<object> = new Map<object>();
  private static _files: Map<boolean> = new Map<boolean>();

  /**
   * Used internally to preload the game and its assets.
   * @param game The game instance.
   */
  public static _init(game: Game): void {
    this._game = game;

    this._game.load();

    if (this._files.getAll().length === 0) {
      this._fileLoaded();
    }
  }

  /**
   * Load an image file.
   * @param fileName The name to save this file as in the loader.
   * @param filePath The path to the file to load.
   */
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

  /**
   * Load a video file.
   * @param fileName The name to save this file as in the loader.
   * @param filePath The path to the file to load.
   */
  public static loadVideo(fileName: string, filePath: string): void {
    const video = document.createElement('video');

    filePath = `${this.basePath}/${filePath}`;

    this._videos.set(fileName, video);
    this._files.set(fileName, false);

    video.addEventListener('loadeddata', () => {
      this._files.set(fileName, true);

      if (!this._loaded) this._fileLoaded();
    });

    video.addEventListener('error', () => {
      console.log(`Could not load file: ${filePath}.`);
    });

    video.src = filePath;
  }

  /**
   * Load an audio file.
   * @param fileName The name to save this file as in the loader.
   * @param filePath The path to the file to load.
   */
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

  /**
   * Load a json file.
   * @param fileName The name to save this file as in the loader.
   * @param filePath The path to the file to load.
   */
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

  /**
   * Get an image that was loaded.<br>
   * If the image was loaded on the fly, it may not be ready yet! You can
   * check whether the file was loaded or not using the loaded() method.
   * @param fileName The name of the file to get.
   * @return The image file, or null if the image was not loaded using loadImage().
   */
  public static image(fileName: string): HTMLImageElement|null {
    return this._images.get(fileName);
  }

  /**
   * Get a video that was loaded.<br>
   * If the video was loaded on the fly, it may not be ready yet! You can
   * check whether the file was loaded or not using the loaded() method.
   * @param fileName The name of the file to get.
   * @return The video file, or null if the video was not loaded using loadVideo().
   */
  public static video(fileName: string): HTMLVideoElement|null {
    return this._videos.get(fileName);
  }

  /**
   * Get a audio that was loaded.<br>
   * If the audio was loaded on the fly, it may not be ready yet! You can
   * check whether the file was loaded or not using the loaded() method.
   * @param fileName The name of the file to get.
   * @return The audio file, or null if the audio was not loaded using loadAudio().
   */
  public static audio(fileName: string): HTMLAudioElement|null {
    return this._audios.get(fileName);
  }

  /**
   * Get a JSON file that was loaded.<br>
   * If the JSON file was loaded on the fly, it may not be ready yet! You can
   * check whether the file was loaded or not using the loaded() method.
   * @param fileName The name of the file to get.
   * @return The parsed JSON file, or null if the JSON file was not loaded using loadJSON().
   */
  public static json(fileName: string): object|null {
    return this._json.get(fileName);
  }

  /**
   * Check whether a file is ready to be used or not.
   * @param fileName The file to check.
   */
  public static loaded(fileName: string): boolean {
    return this._files.get(fileName) || false;
  }

  private static _fileLoaded(): void {
    if (this._files.getAll().indexOf(false) === -1) {
      this._loaded = true;
      this._game._start();
    }
  }
}
