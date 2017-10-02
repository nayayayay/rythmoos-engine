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
    static readonly cursorX: number;
    static readonly cursorY: number;
    static readonly leftButtonDown: boolean;
    static readonly middleButtonDown: boolean;
    static readonly rightButtonDown: boolean;
    static readonly leftClick: boolean;
    static readonly middleClick: boolean;
    static readonly rightClick: boolean;
    static readonly scrollX: number;
    static readonly scrollY: number;
    static readonly scrollTop: boolean;
    static readonly scrollDown: boolean;
    static readonly scrollLeft: boolean;
    static readonly scrollRight: boolean;
    static _init(): void;
    static _update(): void;
}
