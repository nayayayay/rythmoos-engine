import {IUpdatable} from './IUpdatable';
import {IRenderable} from './IRenderable';
import {IRunnable} from './IRunnable';
import {Map} from './Map';
import {GameObject} from './GameObject';

/**
 * A scene contains all the game objects in a specific "word" of your game.<br>
 * For example, you may have a "MainScreen" scene that will contain everything
 * that is in the main screen of your game.<br>
 * You could then have a "Level1" scene that will contain the level 1 of you game. etc.
 */
export class Scene extends Map<GameObject> implements IUpdatable, IRunnable {
  constructor() {
    super();

    this.create();
  }

  /**
   * Called the the scene is created.<br>
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
   * Used internally to update the scene and its game objects.
   */
  public _runUpdate() {
    this.update();

    for (const gameObject of this.getAll()) {
      gameObject.update();
    }
  }

  /**
   * Used internally by the renderer to render the scene.
   * @param context The renderer's context, automatically passed in.
   */
  public _runRender(context: CanvasRenderingContext2D): void {
    for (const gameObject of this.getAll()) {
      context.save();
      gameObject.render(context);
      context.restore();
    }
  }
}
