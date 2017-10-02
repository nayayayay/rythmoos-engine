import {Time} from './Time';

export abstract class Loop {
  private static _animationFrame: number = 0;
  private static _callback: Function;
  
  public static start(callback: Function): void {
    if (this._animationFrame === 0) {
      this._callback = callback;
      this._animationFrame = window.requestAnimationFrame((frame: number) => {
        this._update(frame);
      });
    }
  }

  public static stop(): void {
    if (this._animationFrame !== 0) {
      window.cancelAnimationFrame(this._animationFrame);
      this._animationFrame = 0;
    }
  }

  private static _update(frame: number): void {
    this._animationFrame = window.requestAnimationFrame((frame: number) => {
      this._update(frame);
    });

    Time._setFrame(frame);

    this._callback();
  }
}
