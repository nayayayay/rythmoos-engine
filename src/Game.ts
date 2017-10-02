import {Renderer} from './Renderer';
import {Scene} from './Scene';
import {Loop} from './Loop';
import {IUpdatable} from './IUpdatable';
import {Mouse} from './Mouse';
import {Keyboard} from './Keyboard';
import {Loader} from './Loader';

export class Game implements IUpdatable {
  public readonly width: number;
  public readonly height: number;
  public readonly container: HTMLElement;
  public scene: Scene;
  private _canvas: HTMLCanvasElement;
  private _renderer: Renderer;
  private _running: boolean;

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

    Loader._init(this);
  }

  public load(): void {
  }

  public create(): void {
  }

  public update(): void {
  }

  public _start(): void {
    if (this._running) return;

    this._running = true;
    this.create();

    Mouse._init();
    Keyboard._init();

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
