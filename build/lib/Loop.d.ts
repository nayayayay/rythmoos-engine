export declare abstract class Loop {
    private static _animationFrame;
    private static _callback;
    static start(callback: Function): void;
    static stop(): void;
    private static _update(frame);
}
