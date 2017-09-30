declare module 'rythmoos-engine' {
  export type CanvasColour = string|CanvasPattern|CanvasGradient;
  export type EventHandler = (event: Event) => void;

  export const enum Keys {
    Digit0, Digit1, Digit2, Digit3, Digit4, Digit5, Digit6, Digit7, Digit8, Digit9,
    KeyA, KeyB, KeyC, KeyD, KeyE, KeyF, KeyG, KeyH, KeyI, KeyJ, KeyK, KeyL,KeyM, KeyN,
    KeyO, KeyP, KeyQ, KeyR, KeyS, KeyT, KeyU, KeyV, KeyW, KeyX, KeyY, KeyZ, Escape,
    F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12,
    Insert, Delete, Home, End, PageUp, PageDown,
    NumLock, NumpadDivide, NumpadMultiply, NumpadSubtract, NumpadAdd, NumpadEnter, NumpadDecimal,
    Numpad0, Numpad1, Numpad2, Numpad3, Numpad4, Numpad5, Numpad6, Numpad7, Numpad8, Numpad9,
    ArrowUp, ArrowDown, ArrowLeft, ArrowRight,
    Backquote, Minus, Equal, Backspace, BracketLeft, BracketRight, Quote, Backslash, Comma, Period,
    Slash, Enter, ShiftLeft, ShiftRight, CapsLock, Tab,
    ControlLeft, ControlRight, MetaLeft, MetaRight, AltLeft, AltRight
  }

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
    public readonly created: boolean;
    public height: number;
    public renderer: Renderer;
    public readonly running: boolean;
    public scene: Scene;
    public readonly started: boolean;
    public readonly stopped: boolean;
    public width: number;

    constructor(container: HTMLElement, width?: number, height?: number);
    public afterUpdate(): void;
    public create(): void;
    public start(): void;
    public stop(): void;
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
    public draw(context: CanvasRenderingContext2D): void;
    public drawAfter(context: CanvasRenderingContext2D): void;
    public setCenter(center: Point): void;
    public update(): void;
  }

  export class Graphics {
    public shadowBlur: number;
    public shadowColour: CanvasColour;
    public shadowOffsetX: number;
    public shadowOffsetY: number;
    public visible: boolean;
      
    constructor(visible?: boolean);
    public draw(context: CanvasRenderingContext2D): void;
  }

  export class Image extends Graphics {
    public readonly center: Point;
    public centerX: number;
    public centerY: number;
    public height: number;
    public image: HTMLImageElement|HTMLVideoElement;
    public opacity: number;
    public position: Point;
    public rotation: number;
    public width: number;

    constructor(image: HTMLImageElement|HTMLVideoElement, x?: number, y?: number, rotation?: number, opacity?: number, visible?: boolean);
    public draw(context: CanvasRenderingContext2D): void;
    public setCenter(center: Point): void;
  }

  export abstract class Keyboard {
    public static getKey(keyName: Keys): boolean;
    public static isDown(keyName: Keys): boolean;
    public static isUp(keyName: Keys): boolean;
    public static on(eventName: 'keyup'|'keydown', eventHandler: EventHandler): void;
  }

  export class Loop {
    public readonly currentTime: number;
    public readonly running: boolean;
    public readonly started: boolean;
    public readonly timeStarted: boolean;
    public readonly timeStopped: number;

    constructor();
    public start(callback: Function): void;
    public stop(): void;
  }

  export abstract class Mouse {
    public static readonly cursor: Point;
    public static readonly cursorX: number;
    public static readonly cursorY: number;
    public static readonly leftButtonDown: boolean;
    public static readonly leftButtonUp: boolean;
    public static readonly middleButtonDown: boolean;
    public static readonly middleButtonUp: boolean;
    public static readonly rightButtonDown: boolean;
    public static readonly rightButtonUp: boolean;

    public static on(eventName: string, handler: EventHandler);
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

  export class Text extends Graphics {
    public fill: boolean;
    public fillColour: CanvasColour;
    public fontFamily: string;
    public fontSize: number;
    public fontStyle: string;
    public fontVariant: string;
    public fontWeight: string|number;
    public position: Point;
    public rotation: number;
    public strokeColour: CanvasColour;
    public strokeWidth: number;
    public text: string;
    public x: number;
    public y: number;

    constructor(text?: string, x?: number, y?: number, fillColour?: CanvasColour, strokeColour?: CanvasColour, strokeWidth?: number);
    public draw(context: CanvasRenderingContext2D): void;
  }

  export abstract class Time {
    public static readonly deltaTime: number;
    public static readonly FPS: number;
    public static readonly lastTime: number;
    public static readonly time: number;
  }

  export abstract class VirtualBuffer {
    public static clearBuffer(width: number, height: number): void;
    public static getImageData(image: HTMLImageElement|HTMLVideoElement, x: number, y: number, width: number, height: number): ImageData;
    public static requestBuffer(width: number, height: number): CanvasRenderingContext2D;
  }
}
