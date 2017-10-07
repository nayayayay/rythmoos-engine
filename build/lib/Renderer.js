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
        this.backgroundColour = '#000000';
        this._context = context;
    }
    /**
     * Set properties to apply to the context everytime the render method is called.<br>
     * It could for example be used to apply a default fillStyle or a global composite
     * operation to all your game objects.
     * @param context The renderer's context, automatically passed in.
     */
    Renderer.prototype.contextProperties = function (context) {
    };
    /**
     * Render a scene to the canvas.
     * @param scene The scene to render.
     */
    Renderer.prototype.render = function (scene) {
        this._context.fillStyle = this.backgroundColour;
        this._context.fillRect(0, 0, this._context.canvas.width, this._context.canvas.height);
        this.contextProperties(this._context);
        for (var _i = 0, _a = scene.getAll(); _i < _a.length; _i++) {
            var gameObject = _a[_i];
            this._context.save();
            gameObject.render(this._context);
            this._context.restore();
        }
    };
    return Renderer;
}());
exports.Renderer = Renderer;
//# sourceMappingURL=Renderer.js.map