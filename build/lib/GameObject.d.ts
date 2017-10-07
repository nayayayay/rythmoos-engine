import { IUpdatable } from './IUpdatable';
import { IRenderable } from './IRenderable';
import { Scene } from './Scene';
import { Game } from './Game';
/**
 * A game object defines an entity in your game's world.<br>
 * It can be for example the player's character, a button, etc.
 */
export declare class GameObject implements IUpdatable, IRenderable {
    /** The current or last scene this game object's instance belonged to. */
    scene: Scene;
    constructor();
    /**
     * A reference to your main Game instance.
     */
    readonly game: Game;
    /**
     * Called when the game object is created.<br>
     * You can set the game object's properties in here, use the loader
     * to load textures, etc...
     */
    create(): void;
    /**
     * Called every frame as long as the game object is in the active scene.<br>
     * You can update your object property from here to, for example, move a
     * character if a keyboard key is being pressed.
     */
    update(): void;
    /**
     * Called every frame as long as the game object is in the active scene.<br>
     * Render the game object to the screen using the renderer's 2D context.
     * @param context The renderer's context, automatically passed in.
     */
    render(context: CanvasRenderingContext2D): void;
}
