import {Scene} from './Scene';
import {Renderer, Screen} from '../rendering';
import {Time, Loop} from '../timing';
import {Keyboard, Mouse} from '../inputs';

/**
 * The root for any game.
 */
export class Game {

  /**
   * Create a Game.
   * @param {HTMLElement} container The HTML element which will be used as the canvas parent.
   * @param {number} [width=1280] The width of the canvas.
   * @param {number} [height=720] The height of the canvas
   */
  constructor(container, width=1280, height=720) {
    
    /**
     * The canvas element.
     * @type {HTMLCanvasElement}
     */
    this.canvas = document.createElement('canvas');

    /**
     * The game scene.
     * @type {Scene}
     */
    this.scene = new Scene();

    /**
     * The renderer.
     * @type {Renderer}
     */
    this.renderer = new Renderer(this.canvas.getContext('2d'));

    /**
     * The main loop.
     * @type {Loop}
     * @private
     */
    this._loop = new Loop();

    /**
     * Whether the game was created or not.
     * @type {boolean}
     * @private
     */
    this._created = false;

    // Style and append the canvas to the DOM.
    this.canvas.style.display = 'block';
    this.canvas.style.width = '100%';
    this.canvas.style.height = 'auto';
    this.canvas.width = width;
    this.canvas.height = height;
    container.appendChild(this.canvas);

    // Init the screen and inputs
    Screen._init(this.canvas);
    Mouse._init(this.canvas);
    Keyboard._init();

    // Draw the initial scene.
    this.renderer.render(this.scene);
  }

  /**
   * The width of the game screen.
   * @type {number}
   */
  get width() {
    return this.canvas.width;
  }

  set width(width) {
    this.canvas.width = width;
  }

  /**
   * The height of the game screen.
   * @type {number}
   */
  get height() {
    return this.canvas.height;
  }

  set height(height) {
    this.canvas.height = height;
  }

  /**
   * Whether the game was created/started or not.
   * @type {boolean}
   * @readonly
   */
  get created() {
    return this._created;
  }

  /**
   * Whether the game has started or not.
   * @type {boolean}
   * @readonly
   */
  get started() {
    return this._loop.started;
  }

  /**
   * Whether the game is running or not.
   * @type {boolean}
   * @readonly
   */
  get running() {
    return this._loop.running;
  }

  /**
   * Whether the game was stopped or not.
   * @type {boolean}
   * @readonly
   */
  get stopped() {
    return this._loop.stopped;
  }

  /**
   * Run when the game start.
   */
  create() {
  }

  /**
   * Update the game.<br>
   * Run in the beginning of each frame.
   */
  update() {
  }

  /**
   * Update the game.<br>
   * Run after each frame is rendered.
   */
  afterUpdate() {
  }

  /**
   * Start the game.
   */
  start() {
    if (!this.created) {
      this.create();
    }

    this._loop.start((frame) => {
      // Update
      Time._setFrame(frame);
      this.update();
      this.scene._runUpdate();

      // Render
      this.renderer.render(this.scene);

      // Post update
      this.scene._runAfterUpdate();
      this.afterUpdate();
    });
  }

  /**
   * Stop the game.
   */
  stop() {
    this._loop.stop();
  }
}
