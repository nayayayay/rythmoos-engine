"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A Canvas' 2D rendering context that is not rendered.<br>
 * Useful to work with ImageData objects, TextMetrics, to create bitmap data and
 * anything else you can do with a 2D context.
 */
var VirtualContext = /** @class */ (function () {
    function VirtualContext() {
    }
    /**
     * Used internally to initialise the virual context.
     */
    VirtualContext._init = function () {
        this._context = document.createElement('canvas').getContext('2d');
        this._width = 0;
        this._height = 0;
    };
    /**
     * Request the virtual context.
     * @param width The width to request from the context.
     * @param height The height to request from the context.
     * @return The context object.
     */
    VirtualContext.requestBuffer = function (width, height) {
        this._context.restore();
        this._context.clearRect(0, 0, this._width, this._height);
        this._context.save();
        this._width = width;
        this._height = height;
        return this._context;
    };
    /**
     * Get the image data from an image object.
     * @param image The image to get the data from.
     * @param width The width of the image (defaults to the actual image's width).
     * @param height The height of the image (defaults to the actual image's height).
     */
    VirtualContext.getImageData = function (image, width, height) {
        width = width !== undefined ? width : image.width;
        height = height !== undefined ? height : image.height;
        var context = this.requestBuffer(width, height);
        context.drawImage(image, 0, 0, width, height);
        return context.getImageData(0, 0, width, height);
    };
    /**
     * Get the width of a text with a specified font.
     * @param text The text to measure.
     * @param font The font to use.
     */
    VirtualContext.measureText = function (text, font) {
        this._context.save();
        this._context.font = font;
        var textMeasure = this._context.measureText(text);
        this._context.restore();
        return textMeasure.width;
    };
    return VirtualContext;
}());
exports.VirtualContext = VirtualContext;
//# sourceMappingURL=VirtualContext.js.map