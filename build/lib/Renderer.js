"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The renderer is used to render graphics to a canvas.<br>
 * Any game instance comes bundled with a renderer already.
 */
var Renderer = /** @class */ (function () {
    /**
     * Create a Renderer.
     * @param context The context of the canvas to render to.
     */
    function Renderer(context) {
        this._context = context;
    }
    /**
     * Render a scene to the canvas.
     * @param scene The scene to render.
     */
    Renderer.prototype.render = function (scene) {
        this._context.fillStyle = '#000000';
        this._context.fillRect(0, 0, this._context.canvas.width, this._context.canvas.height);
        scene._runRender(this._context);
    };
    return Renderer;
}());
exports.Renderer = Renderer;
//# sourceMappingURL=Renderer.js.map