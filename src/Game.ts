import {Renderer} from './Renderer';
import {Scene} from './Scene';
import {IUpdatable} from './IUpdatable';
import {Mouse} from './Mouse';
import {Keyboard} from './Keyboard';
import {Screen} from './Screen';
import {Loader} from './Loader';
import {State} from './State';
import {Time} from './Time';
import {VirtualContext} from './VirtualContext';

/**
 * The base class of any game.
 */
export class Game implements IUpdatable {
  private _container: HTMLElement;
  private _canvas: HTMLCanvasElement;
  private _running: boolean;
  private _renderer: Renderer;
  private _scene: Scene;
  private _framerate: number;
  private _frameID: number;
  private _startTime: number;
  private _now: () => number;
  private _loopEngine: 0|1;

  /**
   * Create a Game.
   * @param width The width of the game.
   * @param height The height of the game.
   * @param container The HTML parent element for the game's canvas.
   */
  constructor(width: number, height: number, container: HTMLElement) {
    this._container = container;
    this._scene = new Scene();
    this._scene.game = this;
    this._canvas = document.createElement('canvas');
    this._renderer = new Renderer(<CanvasRenderingContext2D>this._canvas.getContext('2d'));
    this._running = false;
    this._framerate = 60;
    this._frameID = 0;
    this._startTime = 0;
    this._loopEngine = 0;
    
    if (window.performance !== undefined) {
      if (performance.now !== undefined) {
        this._now = () => {
          return performance.now();
        }
      } else {
        this._now = () => {
          return Date.now();
        }
      }
    } else {
      this._now = () => {
        return Date.now();
      }
    }

    this._canvas.width = width;
    this._canvas.height = height;
    this._container.appendChild(this._canvas);

    VirtualContext._init();
    Screen._init(this._canvas);
    Mouse._init(this._canvas);
    Keyboard._init();
    State._init();
    Loader._init(this);
  }

  /**
   * The width of the game's canvas.
   */
  public get width(): number {
    return this._canvas.width;
  }

  public set width(width: number) {
    this._canvas.width = width;
  }

  /**
   * The height of the game's canvas.
   */
  public get height(): number {
    return this._canvas.height;
  }

  public set height(height: number) {
    this._canvas.height = height;
  }

  /**
   * The HTML element that contains the game's canvas.
   */
  public get container(): HTMLElement {
    return this._container;
  }

  /**
   * The game's canvas object.
   */
  public get canvas(): HTMLCanvasElement {
    return this._canvas;
  }

  /**
   * Whether the game is running or not.
   */
  public get running(): boolean {
    return this._running;
  }

  /**
   * The game's renderer.
   */
  public get renderer(): Renderer {
    return this._renderer;
  }

  /**
   * The game's current scene.
   */
  public get scene(): Scene {
    return this._scene;
  }

  public set scene(scene: Scene) {
    scene.game = this;
    this._scene = scene;
  }

  /**
   * The framerate of the game.<br>
   * If you need the actual FPS the game is rendering, refer to Time#FPS.
   */
  public get framerate(): number {
    return this._framerate;
  }

  /**
   * Set a new framerate for the game.<br>
   * Set to 0 to uncap the framerate (some chromium based browsers will cap it at 250fps).
   * @param framerate The new framerate to use.
   */
  public setFramerate(framerate: number): void {
    if (this._framerate === framerate) return;

    if (this._loopEngine === 0) {
      cancelAnimationFrame(this._frameID);
    } else {
      clearInterval(this._frameID);
    }

    this._framerate = framerate;
    this._startLoop();
  }

  /**
   * Called when the game is launched.<br>
   * Useful for assets loading.
   */
  public load(): void {
  }

  /**
   * Called when the game is ready to run, just before it starts.<br>
   * You can set a scene and access the loaded assets safely from here.
   */
  public create(): void {
  }

  /**
   * Called before rendering a frame.<br>
   * You can specify things to run every frame as long as your game is running.
   */
  public update(): void {
  }

  /**
   * Used internally to start the game.
   */
  public _start(): void {
    if (this._running) return;

    this._running = true;
    this.create();

    window.focus();

    this._startTime = this._now();

    this._startLoop();
  }

  private _startLoop(): void {
    if (this.framerate === 60) {
      this._loopEngine = 0;
      this._loop();
    } else {
      this._loopEngine = 1;
      this._frameID = <any>setInterval(() => {
        this._loop();
      }, 1000 / this.framerate);
    }
  }

  private _loop(): void {
    // Request update if needed
    if (this._loopEngine === 0) {
      this._frameID = requestAnimationFrame((frame) => {
        Time._setFrame(frame);
        this._loop();
      });
    } else {
      Time._setFrame(this._getNewTime());
    }
    
    // Update time
    Time._setFrame(this._getNewTime());

    // Update game, scene, game objects
    this.update();
    this._scene.update();

    for (const gameObject of this._scene.getAll()) {
      gameObject.update();
    }

    // Render scene
    this._renderer.render(this._scene);

    // Update input states
    Mouse._update();
    Keyboard._update();
  }

  private _getNewTime(): number {
    return this._now() - this._startTime;
  }
}
