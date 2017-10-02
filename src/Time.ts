export abstract class Time {
  private static _deltaTime: number = 0;
  private static _time: number = 0;

  public static _setFrame(frame: number): void {
    this._deltaTime = frame - this._time;
    this._time = frame;
  }

  public static get deltaTime(): number {
    return this._deltaTime;
  }

  public static get time(): number {
    return this._time;
  }

  public static get FPS(): number {
    return 1000 / this._deltaTime;
  }
}
