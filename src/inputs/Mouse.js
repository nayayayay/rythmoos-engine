import {Point} from '../geometry';

/**
 * Mouse input.
 * @abstract
 */
export class Mouse {

  /**
   * The cursor position.
   * @type {Point}
   * @private
   */
  static _cursor = new Point();

  /**
   * THe mouse left button state.
   * @type {boolean}
   * @private
   */
  static _leftButtonDown = false;

  /**
   * THe mouse middle (wheel) button state.
   * @type {boolean}
   * @private
   */
  static _middleButtonDown = false;

  /**
   * THe mouse right button state.
   * @type {boolean}
   * @private
   */
  static _rightButtonDown = false;

  /**
   * The left button down handlers.
   * @type {EventHandler[]}
   * @private
   */
  static _onLeftButtonDown = [];

  /**
   * The left button up handlers.
   * @type {EventHandler[]}
   * @private
   */
  static _onLeftButtonUp = [];

  /**
   * The middle button (wheel) down handlers.
   * @type {EventHandler[]}
   * @private
   */
  static _onMiddleButtonDown = [];

  /**
   * The middle button (wheel) up handlers.
   * @type {EventHandler[]}
   * @private
   */
  static _onMiddleButtonUp = [];

  /**
   * The right button down handlers.
   * @type {EventHandler[]}
   * @private
   */
  static _onRightButtonDown = [];

  /**
   * The right button up handlers.
   * @type {EventHandler[]}
   * @private
   */
  static _onRightButtonUp = [];

  /**
   * The scroll-down event handlers.
   * @type {EventHandler[]}
   * @private
   */
  static _onScrollDown = [];

  /**
   * The scroll-up event handlers.
   * @type {EventHandler[]}
   * @private
   */
  static _onScrollUp = [];

  /**
   * The scroll-left event handlers.
   * @type {EventHandler[]}
   * @private
   */
  static _onScrollLeft = [];

  /**
   * The scroll-right event handlers.
   * @type {EventHandler}
   * @private
   */
  static _onScrollRight = [];

  /**
   * Used internally to initialise the mouse inputs and listeners.
   * @param {HTMLCanvasElement} canvas The canvas used by the game.
   * @ignore
   */
  static _init(canvas) {
    // Mouse move
    window.addEventListener('mousemove', e => {
      this._cursor.x = e.clientX;
      this._cursor.y = e.clientY;
    });

    // Mouse down
    canvas.addEventListener('mousedown', e => {
      e.preventDefault();

      switch (e.button) {
        case 0:
          this._leftButtonDown = true;
          this._triggerEvent(this._onLeftButtonDown, e);
          break;
        case 1:
          this._middleButtonDown = true;
          this._triggerEvent(this._onMiddleButtonDown, e);
          break;
        case 2:
          this._rightButtonDown = true;
          this._triggerEvent(this._onRightButtonDown, e);
          break;
        default:
          break;
      }
    });

    // Mouse up
    canvas.addEventListener('mouseup', e => {
      e.preventDefault();

      switch (e.button) {
        case 0:
          this._leftButtonDown = false;
          this._triggerEvent(this._onLeftButtonUp, e);
          break;
        case 1:
          this._middleButtonDown = false;
          this._triggerEvent(this._onMiddleButtonUp, e);
          break;
        case 2:
          this._rightButtonDown = false;
          this._triggerEvent(this._onRightButtonUp, e);
          break;
        default:
          break;
      }
    });

    // Prevent the right click context menu to appear.
    canvas.addEventListener('contextmenu', e => {
      e.preventDefault();
    });

    // Scroll
    canvas.addEventListener('wheel', e => {
      if (e.deltaY > 0) {
        this._triggerEvent(this._onScrollDown, e);
      } else if (e.deltaY < 0) {
        this._triggerEvent(this._onScrollUp, e);
      }

      if (e.deltaX > 0) {
        this._triggerEvent(this._onScrollRight, e);
      } else if (e.deltaY < 0) {
        this._triggerEvent(this._onScrollLeft, e);
      }
    });
  }

  /**
   * The current position of the cursor.
   * @type {Point}
   * @readonly
   */
  static get cursor() {
    return new Point(this._cursor.x, this._cursor.y);
  }

  /**
   * The position of the cursor in the X axis.
   * @type {number}
   * @readonly
   */
  static get cursorX() {
    return this._cursor.x;
  }

  /**
   * The position of the cursor in the Y axis.
   * @type {number}
   * @readonly
   */
  static get cursorY() {
    return this._cursor.y;
  }

  /**
   * Whether the left button is down or not.
   * @type {boolean}
   * @readonly
   */
  static get leftButtonDown() {
    return this._leftButtonDown;
  }

  /**
   * Whether the left button is up or not.
   * @type {boolean}
   * @readonly
   */
  static get leftButtonUp() {
    return !this._leftButtonDown;
  }

  /**
   * Whether the middle button (wheel) is down or not.
   * @type {boolean}
   * @readonly
   */
  static get middleButtonDown() {
    return this._middleButtonDown;
  }

  /**
   * Whether the middle button (wheel) is up or not.
   * @type {boolean}
   * @readonly
   */
  static get middleButtonUp() {
    return !this._middleButtonDown;
  }

  /**
   * Whether the right button is down or not.
   * @type {boolean}
   * @readonly
   */
  static get rightButtonDown() {
    return this._rightButtonDown;
  }

  /**
   * Whether the right button is up or not.
   * @type {boolean}
   * @readonly
   */
  static get rightButtonUp() {
    return !this._rightButtonDown;
  }

  /**
   * Listen to a mouse event.<br>
   * The event name is case-insensitive and should be one of the following:<br>
   * leftButtonDown, leftButtonUp, middleButtonDown, middleButtonUp, rightButtonDown,
   * rightButtonUp, scrollDown, scrollUp, scrollLeft, scrollRight.
   * @param {string} eventName The event name.
   * @param {EventHandler} handler The event handler.
   */
  static on(eventName, handler) {
    switch (eventName.toLocaleLowerCase()) {
      case 'leftbuttondown':
        this._onLeftButtonDown.push(handler);
        break;
      case 'leftbuttonup':
        this._onLeftButtonUp.push(handler);
        break;
      case 'middlebuttondown':
        this._onMiddleButtonDown.push(handler);
        break;
      case 'middlebuttonup':
        this._onMiddleButtonUp.push(handler);
        break;
      case 'rightbuttondown':
        this._onRightButtonDown.push(handler);
        break;
      case 'rightbuttonup':
        this._onRightButtonUp.push(handler);
        break;
      case 'scrolldown':
        this._onScrollDown.push(handler);
        break;
      case 'scrollup':
        this._onScrollUp.push(handler);
        break;
      case 'scrollleft':
        this._onScrollLeft.push(handler);
        break;
      case 'scrollright':
        this._onScrollRight.push(handler);
        break;
      default:
        break;
    }
  }

  /**
   * Trigger a list of events.
   * @param {EventHandler[]} handlers An event handlers array to execute.
   * @param {Event} event The event object to pass in to the handlers.
   * @private
   */
  static _triggerEvent(handlers, event) {
    for (const handler of handlers) {
      handler(event);
    }
  }
}
