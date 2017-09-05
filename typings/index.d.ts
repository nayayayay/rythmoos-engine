declare module 'rythmoos-engine' {
  export class Stage {
    public canvas: HTMLCanvasElement;
    public renderer: Renderer;

    constructor(canvas: HTMLCanvasElement);
  }

  export class Renderer {
    public context: CanvasRenderingContext2D;
    public scene: Scene;
    protected animationFrame: null|number;

    constructor(context: CanvasRenderingContext2D, scene?: Scene);
    public start(): void;
    public stop(): void;
    public render(frame: number): void;
  }

  export class Scene {
    public shapes: Array<Shape>;

    constructor();
    public addShape(shape: Shape): void;
    public removeShape(shapeName: string): void;
  }

  export abstract class Time {
    public static readonly deltaTime: number;
    public static readonly time: number;
    public static readonly fps: number;
    protected static _deltaTime: number;
    protected static _time: number;
    protected static _fps: number;

    public static _setFrame(frame: number): void;
  }

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
