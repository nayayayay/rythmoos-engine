import HighResTimeStamp from './HighResTimeStamp';

abstract class Time {
  protected static _deltaTime: HighResTimeStamp = 0;
  protected static _time: HighResTimeStamp = 0;
  protected static _fps: HighResTimeStamp = 0;

  public static _setFrame(frame: HighResTimeStamp): void {
    this._deltaTime = frame - this.time;
    this._time = frame;
    this._fps = 1000 / this.deltaTime;
  }

  /**
   * The time elapsed since the last call to Renderer.render(), in milliseconds.
   */
  static get deltaTime(): HighResTimeStamp {
    return this._deltaTime;
  }

  /**
   * The time elapsed since the rendering process has started (call to Renderer.start()).
   */
  static get time(): HighResTimeStamp {
    return this._time;
  }

  /**
   * The amount of frames per second based on the current deltaTime.
   */
  static get fps(): HighResTimeStamp {
    return this._fps;
  }
}

export default Time;
