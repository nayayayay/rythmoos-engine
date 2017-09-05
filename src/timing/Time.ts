abstract class Time {
  protected static _deltaTime: number = 0;
  protected static _time: number = 0;
  protected static _fps: number = 0;

  public static _setFrame(frame: number): void {
    this._deltaTime = frame - this.time;
    this._time = frame;
    this._fps = 1000 / this.deltaTime;
  }

  /**
   * The time elapsed since the last call to Renderer.render(), in milliseconds.
   */
  static get deltaTime(): number {
    return this._deltaTime;
  }

  /**
   * The time elapsed since the rendering process has started (call to Renderer.start()).
   */
  static get time(): number {
    return this._time;
  }

  /**
   * The amount of frames per second based on the current deltaTime.
   */
  static get fps(): number {
    return this._fps;
  }
}

export default Time;
