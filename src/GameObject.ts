import {IUpdatable} from './IUpdatable';
import {IRenderable} from './IRenderable';

export class GameObject implements IUpdatable, IRenderable {
  constructor() {
    this.create();
  }

  public create(): void {
  }

  public update(): void {
  }

  public render(context: CanvasRenderingContext2D): void {
  }
}
