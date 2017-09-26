declare module 'rythmoos-engine' {
  export type CanvasColour = string|CanvasPattern|CanvasGradient;

  export class Circle {
    public fill: boolean;
    public fillColour: CanvasColour;
    public position: Point;
    public rotation: number;
    public size: number;
    public strokeColour: CanvasColour;
    public strokeWidth: number;

    constructor(x?: number, y?: number, fillColour?: CanvasColour, strokeColour?: CanvasColour, strokeWidth?: number);
    public draw(context: CanvasRenderingContext2D): void;
  }

  export class Game {
    public canvas: HTMLCanvasElement;
    public height: number;
    public renderer: Renderer;
    public scene: Scene;
    public width: number;

    constructor(container: HTMLElement, width?: number, height?: number);
    public afterUpdate(): void;
    public create(): void;
    public start(): void;
    public update(): void;
  }

  export class GameObject {
    public readonly center: Point;
    public centerX: number;
    public centerY: number;
    public graphics: Graphics[];
    public height: number;
    public position: Point;
    public rotation: number;
    public scale: number;
    public visible: boolean;
    public width: number;
    public x: number;
    public y: number;

    constructor(x?: number, y?: number, width?: number, height?: number, rotation?: number, scale?: number, visible?: boolean);
    public addGraphics(graphics: Graphics, ...otherGraphics: Graphics[]): void;
    public afterUpdate(): void;
    public create(): void;
    public draw(context: CanvasRenderingContext2D): void;
    public drawAfter(context: CanvasRenderingContext2D): void;
    public setCenter(center: Point): void;
    public update(): void;
  }

  export class Graphics {
    public visible: boolean;
      
    constructor(visible?: boolean);
    public draw(context: CanvasRenderingContext2D): void;
  }

  export class Point {
    public x: number;
    public y: number;

    constructor(x?: number, y?: number);
  }

  export class Rectangle extends Graphics {
    public readonly center: Point;
    public centerX: number;
    public centerY: number;
    public fill: boolean;
    public fillColour: CanvasColour;
    public height: number;
    public position: Point;
    public radius: number;
    public rotation: number;
    public strokeColour: CanvasColour;
    public strokeWidth: number;
    public width: number;
    public x: number;
    public y: number;

    constructor(x?: number, y?: number, width?: number, height?: number, fillColour?: CanvasColour, strokeColour?: CanvasColour, strokeWidth?: number);
    public draw(context: CanvasRenderingContext2D): void;
  }

  export class Renderer {
    public backgroundColour: string|CanvasPattern|CanvasGradient;
    public context: CanvasRenderingContext2D;

    constructor(context: CanvasRenderingContext2D, backgroundColour?: string|CanvasPattern|CanvasGradient);
    public render(scene: Scene): void;
  }

  export abstract class Rotation {
    public static degreesToRadians(degrees: number): number;
    public static radiansToDegrees(radians: number): number;
  }

  export class Scene {
    public gameObjects: GameObject[];

    constructor();
    public add(gameObject: GameObject, ...otherGameObjects: GameObject[]): void;
    public afterUpdate(): void;
    public contains(gameObject: GameObject): boolean;
    public create(): void;
    public remove(gameObject: GameObject, ...otherGameObjects: GameObject[]): void;
    public update(): void;
  }

  export abstract class Screen {
    public static readonly center: Point;
    public static readonly centerX: number;
    public static readonly centerY: number;
    public static readonly height: number;
    public static readonly width: number;
  }
}
