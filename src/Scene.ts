import {IUpdatable} from './IUpdatable';
import {IRenderable} from './IRenderable';
import {IRunnable} from './IRunnable';
import {Map} from './Map';
import {GameObject} from './GameObject';

export class Scene extends Map<GameObject> implements IUpdatable, IRunnable {
  constructor() {
    super();

    this.create();
  }

  public create(): void {
  }

  public update(): void {
  }

  public _runUpdate() {
    this.update();

    for (const gameObject of this.getAll()) {
      gameObject.update();
    }
  }

  public _runRender(context: CanvasRenderingContext2D): void {
    for (const gameObject of this.getAll()) {
      gameObject.render(context);
    }
  }
}
