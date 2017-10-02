import {IUpdatable} from './IUpdatable';

export abstract class Mouse {
  private static _cursorX: number = 0;
  private static _cursorY: number = 0;
  private static _leftButton: boolean = false;
  private static _leftClick: boolean = false;
  private static _middleButton: boolean = false;
  private static _middleClick: boolean = false;
  private static _rightButton: boolean = false;
  private static _rightClick: boolean = false;
  private static _scrollX: number = 0;
  private static _scrollY: number = 0;

  public static get cursorX(): number {
    return this._cursorX;
  }

  public static get cursorY(): number {
    return this._cursorY;
  }

  public static get leftButtonDown(): boolean {
    return this._leftButton;
  }

  public static get middleButtonDown(): boolean {
    return this._middleButton;
  }

  public static get rightButtonDown(): boolean {
    return this._rightButton;
  }

  public static get leftClick(): boolean {
    return this._leftClick;
  }

  public static get middleClick(): boolean {
    return this._middleClick;
  }

  public static get rightClick(): boolean {
    return this._rightClick;
  }

  public static get scrollX(): number {
    return this._scrollX;
  }

  public static get scrollY(): number {
    return this._scrollY;
  }

  public static get scrollTop(): boolean {
    return this._scrollY === -1;
  }

  public static get scrollDown(): boolean {
    return this._scrollY === 1;
  }

  public static get scrollLeft(): boolean {
    return this._scrollX === -1;
  }

  public static get scrollRight(): boolean {
    return this._scrollY === 1;
  }

  public static _init() {
    window.addEventListener('mousemove', e => {
      this._cursorX = e.clientX;
      this._cursorY = e.clientY;
    });

    window.addEventListener('mousedown', e => {
      e.preventDefault();

      switch (e.button) {
        case 0:
          this._leftButton = true;
          this._leftClick = true;
          break;
        case 1:
          this._middleButton = true;
          this._middleClick = true;
          break;
        case 2:
          this._rightButton = true;
          this._rightClick = true;
          break;
        default:
          break;
      }

      window.addEventListener('mouseup', e => {
        e.preventDefault();

        switch (e.button) {
          case 0:
            this._leftButton = false;
            break;
          case 1:
            this._middleButton = false;
            break;
          case 2:
            this._rightButton = false;
            break;
          default:
            break;
        }
      });

      window.addEventListener('contextmenu', e => {
        e.preventDefault();
      });

      window.addEventListener('wheel', e => {
        e.preventDefault();

        if (e.deltaX > 0) {
          this._scrollX = 1;
        } else if (e.deltaX < 0) {
          this._scrollX = -1;
        } else {
          this._scrollX = 0;
        }

        if (e.deltaY > 0) {
          this._scrollY = 1;
        } else if (e.deltaY < 0) {
          this._scrollY = -1;
        } else {
          this._scrollY = 0;
        }
      });

      window.addEventListener('blur', () => {
        this._leftButton = false;
        this._middleButton = false;
        this._rightButton = false;
      });
    });
  }

  public static _update(): void {
    this._scrollX = 0;
    this._scrollY = 0;
    this._leftClick = false;
    this._middleClick = false;
    this._rightClick = false;
  }
}
