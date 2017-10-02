export declare abstract class Time {
    private static _deltaTime;
    private static _time;
    static _setFrame(frame: number): void;
    static readonly deltaTime: number;
    static readonly time: number;
    static readonly FPS: number;
}
