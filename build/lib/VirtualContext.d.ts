/**
 * A Canvas' 2D rendering context that is not rendered.<br>
 * Useful to work with ImageData objects, TextMetrics, to create bitmap data and
 * anything else a 2D context allows you to do.
 */
export declare abstract class VirtualContext {
    private static _context;
    private static _width;
    private static _height;
    /**
     * Used internally to initialise the virual context.
     */
    static _init(): void;
    /**
     * Request the virtual context.
     * @param width The width to request from the context.
     * @param height The height to request from the context.
     * @return The context object.
     */
    static requestBuffer(width: number, height: number): CanvasRenderingContext2D;
    /**
     * Get the image data from an image object.
     * @param image The image to get the data from.
     * @param width The width of the image (defaults to the actual image's width).
     * @param height The height of the image (defaults to the actual image's height).
     */
    static getImageData(image: HTMLImageElement, width?: number, height?: number): ImageData;
    /**
     * Get the width of a text with a specific font.
     * @param text The text to measure.
     * @param font The font to use.
     */
    static measureText(text: string, font: string): number;
}
