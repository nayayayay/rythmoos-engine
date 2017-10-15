import { IUpdatable } from './IUpdatable';
import { GameObject } from './GameObject';
import { Game } from './Game';
/**
 * A scene contains all the game objects in a specific "screen" of your game.<br>
 * For example, you may have a "MainScreen" scene that will contain everything
 * that is in the main screen of your game.<br>
 * You could then have a "Level1" scene that will contain the level 1 of you game. etc.
 */
export declare class Scene implements IUpdatable {
    /** A reference to your main Game instance. */
    game: Game;
    private _gameObjects;
    constructor();
    /**
     * Called when the scene is created.<br>
     * You can set your game objects (UI, characters, music, etc) from here.
     */
    create(): void;
    /**
     * Run every frame to update the scene.<br>
     * This is useful when you want an update to run as long as your scene is
     * being rendered, independently from the game objects it contains.
     */
    update(): void;
    /**
     * Get a game object from the scene.
     * @param gameObjectName The game object to get.
     * @return The requested game object, or null if it does not exist in the scene.
     */
    get(gameObjectName: string): GameObject | null;
    /**
     * Set a game object.
     * @param gameObjectName The name of the game object to set.
     * @param gameObject The game object.
     */
    set(gameObjectName: string, gameObject: GameObject): void;
    /**
     * Remove a game object.
     * @param gameObjectName The name of the game object to remove.
     */
    remove(gameObjectName: string): boolean;
    /**
     * Get all the game objects of this scene as an array.
     */
    getAll(): GameObject[];
}
