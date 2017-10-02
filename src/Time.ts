/**
 * Store time values and make them easy to access from anywhere
 * in your game just by importing this static class.
 */
export abstract class Time {
  private static _deltaTime: number = 0;
  private static _time: number = 0;

  /**
   * Used internally to update the time data.
   * @param frame The total time elapsed in milliseconds, passed in by the browser.
   */
  public static _setFrame(frame: number): void {
    this._deltaTime = frame - this._time;
    this._time = frame;
  }

  /**
   * The time elapsed since the last frame, in milliseconds.<br>
   * Useful for smooth animations that will run at the same speed regardless
   * of the rendering speed.
   */
  public static get deltaTime(): number {
    return this._deltaTime;
  }

  /**
   * The time elapsed since the game has started being rendered, in milliseconds.
   */
  public static get time(): number {
    return this._time;
  }

  /**
   * The average amount of frames per second based on the current deltaTime.
   */
  public static get FPS(): number {
    return 1000 / this._deltaTime;
  }
}
