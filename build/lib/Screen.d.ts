/**
 * This class represents the game's screen (canvas).<br>
 * It makes it easy to access the width, height and offsets properties of the
 * game's screen from anywhere in your game.
 */
export declare abstract class Screen {
    private static _canvas;
    /**
     * The width of the game's canvas.
     */
    static readonly width: number;
    /**
     * The height of the game's canvas.
     */
    static readonly height: number;
    /**
     * The offset width of the game's canvas.
     */
    static readonly offsetWidth: number;
    /**
     * The offset height of the game's canvas.
     */
    static readonly offsetHeight: number;
    /**
     * The offset left of the game canvas.
     */
    static readonly offsetX: number;
    /**
     * The offset top of the game canvas.
     */
    static readonly offsetY: number;
    /**
     * Used internally to initialise the Screen class.
     * @param canvas The game's canvas.
     */
    static _init(canvas: HTMLCanvasElement): void;
}
