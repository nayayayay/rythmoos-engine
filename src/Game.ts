import {Renderer} from './Renderer';
import {Scene} from './Scene';
import {Loop} from './Loop';
import {IUpdatable} from './IUpdatable';
import {Mouse} from './Mouse';
import {Keyboard} from './Keyboard';
import {Screen} from './Screen';
import {Loader} from './Loader';
import {State} from './State';
import {VirtualContext} from './VirtualContext';

/**
 * The base class of any game.
 */
export class Game implements IUpdatable {
  /** The width of the game. */
  public readonly width: number;
  /** The height of the game. */
  public readonly height: number;
  /** The parent element of the game. */
  public readonly container: HTMLElement;
  /** The scene currently being rendered. */
  public scene: Scene;
  private _canvas: HTMLCanvasElement;
  private _renderer: Renderer;
  private _running: boolean;

  /**
   * Create a Game.
   * @param width The width of the game.
   * @param height The height of the game.
   * @param container The HTML parent element for the game's canvas.
   */
  constructor(width: number, height: number, container: HTMLElement) {
    this.width = width;
    this.height = height;
    this.container = container;
    this.scene = new Scene();
    this._canvas = document.createElement('canvas');
    this._renderer = new Renderer(<CanvasRenderingContext2D>this._canvas.getContext('2d'));
    this._running = false;

    this._canvas.width = this.width;
    this._canvas.height = this.height;
    this.container.appendChild(this._canvas);

    VirtualContext._init();
    Screen._init(this._canvas);
    Mouse._init(this._canvas);
    Keyboard._init();
    State._init();
    Loader._init(this);
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

    Loop.start(() => {
      this.update();
      this.scene._runUpdate();
      this._renderer.render(this.scene);

      Mouse._update();
      Keyboard._update();
    });
  }
}
