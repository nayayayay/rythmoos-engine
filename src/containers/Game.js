import {Scene} from './Scene';
import {Renderer, Screen} from '../rendering';

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

    // Style and append the canvas to the DOM.
    this.canvas.style.display = 'block';
    this.canvas.style.width = '100%';
    this.canvas.style.height = 'auto';
    this.canvas.width = width;
    this.canvas.height = height;
    container.appendChild(this.canvas);

    // Init the screen and inputs
    Screen._init(this.canvas);

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
  }
}
