import { Scene } from './Scene';
/**
 * The renderer is used to render graphics to a canvas.<br>
 * Any game instance comes bundled with a renderer already.
 */
export declare class Renderer {
    /** The game's background colour. Defaults to black (#000000). */
    backgroundColour: string;
    private _context;
    /**
     * Create a Renderer.
     * @param context The context of the canvas to render to.
     */
    constructor(context: CanvasRenderingContext2D);
    /**
     * Set properties to apply to the context everytime the render method is called.<br>
     * It could for example be used to apply a default fillStyle or a global composite
     * operation to all your game objects.
     * @param context The renderer's context, automatically passed in.
     */
    contextProperties(context: CanvasRenderingContext2D): void;
    /**
     * Render a scene to the canvas.
     * @param scene The scene to render.
     */
    render(scene: Scene): void;
}
