import {IUpdatable} from './IUpdatable';
import {IRenderable} from './IRenderable';
import {Map} from './Map';
import {GameObject} from './GameObject';
import {Game} from './Game';

/**
 * A scene contains all the game objects in a specific "screen" of your game.<br>
 * For example, you may have a "MainScreen" scene that will contain everything
 * that is in the main screen of your game.<br>
 * You could then have a "Level1" scene that will contain the level 1 of you game. etc.
 */
export class Scene implements IUpdatable {
  /** A reference to your main Game instance. */
  public game: Game;
  private _gameObjects: Map<GameObject>;

  constructor() {
    this._gameObjects = new Map<GameObject>();
    this.create();
  }

  /**
   * Called when the scene is created.<br>
   * You can set your game objects (UI, characters, music, etc) from here.
   */
  public create(): void {
  }

  /**
   * Run every frame to update the scene.<br>
   * This is useful when you want an update to run as long as your scene is
   * being rendered, independently from the game objects it contains.
   */
  public update(): void {
  }

  /**
   * Get a game object from the scene.
   * @param gameObjectName The game object to get.
   * @return The requested game object, or null if it does not exist in the scene.
   */
  public get(gameObjectName: string): GameObject|null {
    return this._gameObjects.get(gameObjectName);
  }

  /**
   * Set a game object.
   * @param gameObjectName The name of the game object to set.
   * @param gameObject The game object.
   */
  public set(gameObjectName: string, gameObject: GameObject): void {
    gameObject.scene = this;
    this._gameObjects.set(gameObjectName, gameObject);
  }

  /**
   * Remove a game object.
   * @param gameObjectName The name of the game object to remove.
   */
  public remove(gameObjectName: string): boolean {
    return this._gameObjects.remove(gameObjectName);
  }

  /**
   * Get all the game objects of this scene as an array.
   */
  public getAll(): GameObject[] {
    return this._gameObjects.getAll();
  }
}
