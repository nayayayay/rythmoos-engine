import { Scene } from './Scene';
import { IUpdatable } from './IUpdatable';
export declare class Game implements IUpdatable {
    readonly width: number;
    readonly height: number;
    readonly container: HTMLElement;
    scene: Scene;
    private _canvas;
    private _renderer;
    private _running;
    constructor(width: number, height: number, container: HTMLElement);
    load(): void;
    create(): void;
    update(): void;
    _start(): void;
}
