import {IUpdatable} from './IUpdatable';

/**
 * Map the mouse input.
 */
export abstract class Mouse {
  private static _cursorX: number = 0;
  private static _cursorY: number = 0;
  private static _movementX: number = 0;
  private static _movementY: number = 0;
  private static _leftButton: boolean = false;
  private static _leftClick: boolean = false;
  private static _middleButton: boolean = false;
  private static _middleClick: boolean = false;
  private static _rightButton: boolean = false;
  private static _rightClick: boolean = false;
  private static _scrollX: number = 0;
  private static _scrollY: number = 0;

  /**
   * The X position of the cursor in the window.
   */
  public static get cursorX(): number {
    return this._cursorX;
  }

  /**
   * The Y position of the cursor in the window.
   */
  public static get cursorY(): number {
    return this._cursorY;
  }

  /**
   * The cursor movement in the X axis, in pixels.
   */
  public static get movementX(): number {
    return this._movementX;
  }

  /**
   * The cursor movement in the Y axis, in pixels.
   */
  public static get movementY(): number {
    return this._movementY;
  }

  /**
   * Whether the left button is down or not.
   */
  public static get leftButtonDown(): boolean {
    return this._leftButton;
  }

  /**
   * Whether the middle (wheel) button is down or not.
   */
  public static get middleButtonDown(): boolean {
    return this._middleButton;
  }

  /**
   * Whether the right button is down or not.
   */
  public static get rightButtonDown(): boolean {
    return this._rightButton;
  }

  /**
   * Whether the left button is up or not.
   */
  public static get leftButtonUp(): boolean {
    return !this._leftButton;
  }

  /**
   * Whether the middle button (wheel) is up or not.
   */
  public static get middleButtonUp(): boolean {
    return !this._middleButton;
  }

  /**
   * Whether the right button is up or not.
   */
  public static get rightButtonUp(): boolean {
    return !this._rightButton;
  }

  /**
   * Evaluate to true when a left click occurs.
   */
  public static get leftClick(): boolean {
    return this._leftClick;
  }

  /**
   * Evaluate to true when a middle (wheel) click occurs.
   */
  public static get middleClick(): boolean {
    return this._middleClick;
  }

  /**
   * Evaluate to true when a right click occurs.
   */
  public static get rightClick(): boolean {
    return this._rightClick;
  }

  /**
   * The scroll movement in the X axis.<br>
   * Possible values: -1 (scroll to -x), 0 (no scroll x), 1 (scroll to +x).
   */
  public static get scrollX(): number {
    return this._scrollX;
  }

  /**
   * The scroll movement in the Y axis.<br>
   * Possible values: -1 (scroll to -y), 0 (no scroll y), 1 (scroll to +y).
   */
  public static get scrollY(): number {
    return this._scrollY;
  }

  /**
   * Evaluate to true when the user is scrolling up.
   */
  public static get scrollUp(): boolean {
    return this._scrollY === -1;
  }

  /**
   * Evaluate to true when the user is scrolling down.
   */
  public static get scrollDown(): boolean {
    return this._scrollY === 1;
  }

  /**
   * Evaluate to true when the user is scrolling left.
   */
  public static get scrollLeft(): boolean {
    return this._scrollX === -1;
  }

  /**
   * Evaluate to true when the user is scrolling right.
   */
  public static get scrollRight(): boolean {
    return this._scrollY === 1;
  }

  /**
   * Used internally to initialise the mouse input.
   * @param canvas The game's canvas.
   */
  public static _init(canvas: HTMLCanvasElement) {
    canvas.addEventListener('mousemove', e => {
      this._cursorX = e.clientX - canvas.offsetLeft;
      this._cursorY = e.clientY - canvas.offsetTop;
      this._movementX += e.movementX;
      this._movementY += e.movementY;
    });

    canvas.addEventListener('mousedown', e => {
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
        if (!this._leftButton && !this._middleButton && !this._rightButton) return;

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

      canvas.addEventListener('contextmenu', e => {
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

  /**
   * Used internally to update the mouse input states.
   */
  public static _update(): void {
    this._movementX = 0;
    this._movementY = 0;
    this._scrollX = 0;
    this._scrollY = 0;
    this._leftClick = false;
    this._middleClick = false;
    this._rightClick = false;
  }
}
