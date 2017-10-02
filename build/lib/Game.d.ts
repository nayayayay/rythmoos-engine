import { Scene } from './Scene';
import { IUpdatable } from './IUpdatable';
/**
 * The base class of any game.
 */
export declare class Game implements IUpdatable {
    /** The width of the game. */
    readonly width: number;
    /** The height of the game. */
    readonly height: number;
    /** The parent element of the game. */
    readonly container: HTMLElement;
    /** The scene currently being rendered. */
    scene: Scene;
    private _canvas;
    private _renderer;
    private _running;
    /**
     * Create a Game.
     * @param width The width of the game.
     * @param height The height of the game.
     * @param container The HTML parent element for the game's canvas.
     */
    constructor(width: number, height: number, container: HTMLElement);
    /**
     * Called when the game is launched.<br>
     * Useful for assets loading.
     */
    load(): void;
    /**
     * Called when the game is ready to run, just before it starts.<br>
     * You can set a scene and access the loaded assets safely from here.
     */
    create(): void;
    /**
     * Called before rendering a frame.<br>
     * You can specify things to run every frame as long as your game is running.
     */
    update(): void;
    /**
     * Used internally to start the game.
     */
    _start(): void;
}
