import { Scene } from './Scene';
/**
 * The renderer is used to render graphics to a canvas.<br>
 * Any game instance comes bundled with a renderer already.
 */
export declare class Renderer {
    private _context;
    /**
     * Create a Renderer.
     * @param context The context of the canvas to render to.
     */
    constructor(context: CanvasRenderingContext2D);
    /**
     * Render a scene to the canvas.
     * @param scene The scene to render.
     */
    render(scene: Scene): void;
}
