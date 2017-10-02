"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Map_1 = require("./Map");
var Scene = /** @class */ (function (_super) {
    __extends(Scene, _super);
    function Scene() {
        var _this = _super.call(this) || this;
        _this.create();
        return _this;
    }
    Scene.prototype.create = function () {
    };
    Scene.prototype.update = function () {
    };
    Scene.prototype._runUpdate = function () {
        this.update();
        for (var _i = 0, _a = this.getAll(); _i < _a.length; _i++) {
            var gameObject = _a[_i];
            gameObject.update();
        }
    };
    Scene.prototype._runRender = function (context) {
        for (var _i = 0, _a = this.getAll(); _i < _a.length; _i++) {
            var gameObject = _a[_i];
            gameObject.render(context);
        }
    };
    return Scene;
}(Map_1.Map));
exports.Scene = Scene;
//# sourceMappingURL=Scene.js.map