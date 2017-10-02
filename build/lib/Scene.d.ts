import { IUpdatable } from './IUpdatable';
import { IRunnable } from './IRunnable';
import { Map } from './Map';
import { GameObject } from './GameObject';
export declare class Scene extends Map<GameObject> implements IUpdatable, IRunnable {
    constructor();
    create(): void;
    update(): void;
    _runUpdate(): void;
    _runRender(context: CanvasRenderingContext2D): void;
}
