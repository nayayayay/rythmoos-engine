import { Scene } from './Scene';
export declare class Renderer {
    private _context;
    constructor(context: CanvasRenderingContext2D);
    render(scene: Scene): void;
}
