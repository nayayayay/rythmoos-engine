"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Renderer = /** @class */ (function () {
    function Renderer(context) {
        this._context = context;
    }
    Renderer.prototype.render = function (scene) {
        this._context.fillStyle = '#000000';
        this._context.fillRect(0, 0, this._context.canvas.width, this._context.canvas.height);
        scene._runRender(this._context);
    };
    return Renderer;
}());
exports.Renderer = Renderer;
//# sourceMappingURL=Renderer.js.map