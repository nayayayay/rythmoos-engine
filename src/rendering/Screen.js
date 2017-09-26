import {Point} from '../geometry';

/**
 * Contain values about the game screen (canvas).
 * @abstract
 */
export class Screen {

  /**
   * The canvas used as a reference for the screen.
   * @type {HTMLCanvasElement}
   * @private
   */
  static _canvas = { width: 1280, height: 720 };

  /**
   * Used internally to initialize the Screen class.
   * @param {HTMLCanvasElement} canvas The canvas the use as a screen.
   * @ignore
   */
  static _init(canvas) {
    this._canvas = canvas;
  }

  /**
   * The width of the game screen.<br>
   * Represent the canvas.width property (not canvas.style.width).
   * @type {number}
   * @readonly
   */
  static get width() {
    return this._canvas.width;
  }

  /**
   * The height of the game screen.<br>
   * Represent the canvas.height property (not canvas.style.height).
   * @type {number}
   * @readonly
   */
  static get height() {
    return this._canvas.height;
  }

  /**
   * The center of the screen.
   * @type {Point}
   * @readonly
   */
  static get center() {
    return new Point(this.width / 2, this.height / 2);
  }

  /**
   * The X position of the screen's center.
   * @type {number}
   * @readonly
   */
  static get centerX() {
    return this.width / 2;
  }

  /**
   * The Y position of the screen's center.
   * @type {number}
   * @readonly
   */
  static get centerY() {
    return this.height / 2;
  }
}
