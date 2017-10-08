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
   * The deltaTime in second. Useful for animations.<br>
   * Let's say we want our gameObject.x property to move +10 pixels per second, we can do that:
   * gameObject.x += 10 * Time.second;
   */
  public static get second(): number {
    return this._deltaTime / 1000;
  }

  /**
   * The average amount of frames per second based on the current deltaTime.
   */
  public static get FPS(): number {
    return 1000 / this._deltaTime;
  }
}
