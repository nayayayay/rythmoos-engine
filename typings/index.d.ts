declare module 'rythmoos-engine' {
  // Root
  export class Stage {
    public canvas: HTMLCanvasElement;
    public renderer: Renderer;

    constructor(canvas: HTMLCanvasElement);
  }

  export class Scene {
    public shapes: Array<Shape>;

    constructor();
    public addShape(shape: Shape): number;
    public removeShape(shapeName: string): number;
  }

  // Rendering
  export type AnimationFrame = null|number;

  export class Renderer {
    public context: CanvasRenderingContext2D;
    public scene: Scene;
    protected animationFrame: AnimationFrame;

    constructor(context: CanvasRenderingContext2D, scene?: Scene);
    public start(): void;
    public stop(): void;
    public render(frame: number): void;
  }

  // Timing
  export type HighResTimeStamp = number;

  export abstract class Time {
    public static readonly deltaTime: HighResTimeStamp;
    public static readonly time: HighResTimeStamp;
    public static readonly fps: HighResTimeStamp;
    protected static _deltaTime: HighResTimeStamp;
    protected static _time: HighResTimeStamp;
    protected static _fps: HighResTimeStamp;

    public static _setFrame(frame: HighResTimeStamp): void;
  }

  // Shapes
  export type Point = {
    x: number,
    y: number
  };

  export interface IShape {
    name: string;
    point: Point;
    color: string;
    fill: boolean;
    render: (context: CanvasRenderingContext2D) => void;
  }

  export class Shape implements IShape {
    public name: string;
    public point: Point;
    public color: string;
    public fill: boolean;

    constructor(name: string, point: Point, color: string, fill?: boolean);
    public render(context: CanvasRenderingContext2D): void;
  }

  export class Square extends Shape {
    public size: number;

    constructor(name: string, point: Point, size: number, color: string, fill?: boolean);
  }

  export class Rectangle extends Shape {
    public width: number;
    public height: number;

    constructor(name: string, point: Point, width: number, height: number, color: string, fill?: boolean);
  }

  export class Circle extends Shape {
    public radius: number;

    constructor(name: string, point: Point, radius: number, color: string, fill?: boolean);
  }

  export class Label extends Shape {
    public content: string;
    public font: string;

    constructor(name: string, point: Point, content: string, color: string, font: string, fill?: boolean);
  }
}
