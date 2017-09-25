'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Render a scene to the game canvas using the 2D rendering context.
 */
var Renderer = exports.Renderer = function () {

  /**
   * Create a renderer.
   * @param {CanvasRenderingContext2D} context The context to use when rendering a scene.
   * @param {string|CanvasPattern|CanvasGradient} [backgroundColour='#000000'] The background
   * colour of the canvas.
   */
  function Renderer(context) {
    var backgroundColour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#000000';

    _classCallCheck(this, Renderer);

    /**
     * The context used to render scenes.
     * @type {CanvasRenderingContext2D}
     */
    this.context = context;

    /**
     * The background colour.
     * @type {string|CanvasPattern|CanvasGradient}
     */
    this.backgroundColour = backgroundColour;
  }

  /**
   * Render a scene onto the canvas.
   * @param {Scene} scene 
   */


  _createClass(Renderer, [{
    key: 'render',
    value: function render(scene) {
      this.context.fillStyle = this.backgroundColour;
      this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = scene.gameObjects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var gameObject = _step.value;

          gameObject._render(this.context);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return Renderer;
}();