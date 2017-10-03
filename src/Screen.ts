/**
 * This class represent the game's screen (canvas).<br>
 * It makes it easy to access the width, height and offsets properties of the
 * game's screen from anywhere in your game.
 */
export abstract class Screen {
  private static _canvas: HTMLCanvasElement;

  /**
   * The width of the game's canvas.
   */
  public static get width(): number {
    return this._canvas.width;
  }

  /**
   * The height of the game's canvas.
   */
  public static get height(): number {
    return this._canvas.height;
  }

  /**
   * The offset width of the game's canvas.
   */
  public static get offsetWidth(): number {
    return this._canvas.offsetWidth
  }

  /**
   * The offset height of the game's canvas.
   */
  public static get offsetHeight(): number {
    return this._canvas.offsetHeight;
  }

  /**
   * The offset left of the game canvas.
   */
  public static get offsetX(): number {
    return this._canvas.offsetLeft;
  }

  /**
   * The offset top of the game canvas.
   */
  public static get offsetY(): number {
    return this._canvas.offsetTop;
  }

  /**
   * Used internally to initialise the Screen class.
   * @param canvas The game's canvas.
   */
  public static _init(canvas: HTMLCanvasElement): void {
    this._canvas = canvas;
  }
}
