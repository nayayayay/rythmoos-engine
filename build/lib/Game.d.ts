import { Renderer } from './Renderer';
import { Scene } from './Scene';
import { IUpdatable } from './IUpdatable';
/**
 * The base class of any game.
 */
export declare class Game implements IUpdatable {
    private _container;
    private _canvas;
    private _running;
    private _renderer;
    private _scene;
    private _framerate;
    private _frameID;
    private _startTime;
    private _now;
    private _loopEngine;
    /**
     * Create a Game.
     * @param width The width of the game.
     * @param height The height of the game.
     * @param container The HTML parent element for the game's canvas.
     */
    constructor(width: number, height: number, container: HTMLElement);
    /**
     * The width of the game's canvas.
     */
    width: number;
    /**
     * The height of the game's canvas.
     */
    height: number;
    /**
     * The HTML element that contains the game's canvas.
     */
    readonly container: HTMLElement;
    /**
     * The game's canvas object.
     */
    readonly canvas: HTMLCanvasElement;
    /**
     * Whether the game is running or not.
     */
    readonly running: boolean;
    /**
     * The game's renderer.
     */
    readonly renderer: Renderer;
    /**
     * The game's current scene.
     */
    scene: Scene;
    /**
     * The framerate of the game.<br>
     * If you need the actual FPS the game is rendering, refer to Time#FPS.
     */
    readonly framerate: number;
    /**
     * Set a new framerate for the game.<br>
     * Set to 0 to uncap the framerate (some chromium based browsers will cap it at 250fps).
     * @param framerate The new framerate to use.
     */
    setFramerate(framerate: number): void;
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
    private _startLoop();
    private _loop();
    private _getNewTime();
}
