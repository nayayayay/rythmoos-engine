/**
 * Store time values and make them easy to access from anywhere
 * in your game just by importing this static class.
 */
export declare abstract class Time {
    private static _deltaTime;
    private static _time;
    /**
     * Used internally to update the time data.
     * @param frame The total time elapsed in milliseconds, passed in by the browser.
     */
    static _setFrame(frame: number): void;
    /**
     * The time elapsed since the last frame, in milliseconds.<br>
     * Useful for smooth animations that will run at the same speed regardless
     * of the rendering speed.
     */
    static readonly deltaTime: number;
    /**
     * The time elapsed since the game has started being rendered, in milliseconds.
     */
    static readonly time: number;
    /**
     * The average amount of frames per second based on the current deltaTime.
     */
    static readonly FPS: number;
}
