/**
 * Map the mouse input.
 */
export declare abstract class Mouse {
    private static _cursorX;
    private static _cursorY;
    private static _leftButton;
    private static _leftClick;
    private static _middleButton;
    private static _middleClick;
    private static _rightButton;
    private static _rightClick;
    private static _scrollX;
    private static _scrollY;
    /**
     * The X position of the cursor in the window.
     */
    static readonly cursorX: number;
    /**
     * The Y position of the cursor in the window.
     */
    static readonly cursorY: number;
    /**
     * Whether the left button is down or not.
     */
    static readonly leftButtonDown: boolean;
    /**
     * Whether the middle (wheel) button is down or not.
     */
    static readonly middleButtonDown: boolean;
    /**
     * Whether the right button is down or not.
     */
    static readonly rightButtonDown: boolean;
    /**
     * Evaluate to true when a left click occurs.
     */
    static readonly leftClick: boolean;
    /**
     * Evaluate to true when a middle (wheel) click occurs.
     */
    static readonly middleClick: boolean;
    /**
     * Evaluate to true when a right click occurs.
     */
    static readonly rightClick: boolean;
    /**
     * The scroll movement in the X axis.<br>
     * Possible values: -1 (scroll to -x), 0 (no scroll x), 1 (scroll to +x).
     */
    static readonly scrollX: number;
    /**
     * The scroll movement in the Y axis.<br>
     * Possible values: -1 (scroll to -y), 0 (no scroll y), 1 (scroll to +y).
     */
    static readonly scrollY: number;
    /**
     * Evaluate to true when the user is scrolling up.
     */
    static readonly scrollUp: boolean;
    /**
     * Evaluate to true when the user is scrolling down.
     */
    static readonly scrollDown: boolean;
    /**
     * Evaluate to true when the user is scrolling left.
     */
    static readonly scrollLeft: boolean;
    /**
     * Evaluate to true when the user is scrolling right.
     */
    static readonly scrollRight: boolean;
    /**
     * Used internally to initialise the mouse input.
     */
    static _init(): void;
    /**
     * Used internally to update the mouse input states.
     */
    static _update(): void;
}
