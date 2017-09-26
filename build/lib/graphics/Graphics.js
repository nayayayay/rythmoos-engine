"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A drawable graphics that can be added to a game object.
 */
var Graphics = exports.Graphics = function () {

  /**
   * Create a new graphics.
   * @param {boolean} [visible=true] Whether the graphics should be rendered or not.
   */
  function Graphics() {
    var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    _classCallCheck(this, Graphics);

    /**
     * Whether the graphics should be rendered or not.
     * @type {boolean}
     */
    this.visible = true;
  }

  /**
   * Draw the graphics.<br>
   * Override this to define what should be drawn.
   * @param {CanvasRenderingContext2D} context The renderer's context.
   */


  _createClass(Graphics, [{
    key: "draw",
    value: function draw(context) {}

    /**
     * Used internally to render the graphics.
     * @param {CanvasRenderingContext2D} context The renderer's context.
     * @ignore
     */

  }, {
    key: "_render",
    value: function _render(context) {
      if (!this.visible) return;

      this.draw(context);
    }
  }]);

  return Graphics;
}();