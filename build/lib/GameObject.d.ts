import { IUpdatable } from './IUpdatable';
import { IRenderable } from './IRenderable';
export declare class GameObject implements IUpdatable, IRenderable {
    constructor();
    create(): void;
    update(): void;
    render(context: CanvasRenderingContext2D): void;
}
