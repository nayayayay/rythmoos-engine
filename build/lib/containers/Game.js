'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Scene = require('./Scene');

var _rendering = require('../rendering');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The root for any game.
 */
var Game = exports.Game = function () {

  /**
   * Create a Game.
   * @param {HTMLElement} container The HTML element which will be used as the canvas parent.
   * @param {number} [width=1280] The width of the canvas.
   * @param {number} [height=720] The height of the canvas
   */
  function Game(container) {
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1280;
    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 720;

    _classCallCheck(this, Game);

    /**
     * The canvas element.
     * @type {HTMLCanvasElement}
     */
    this.canvas = document.createElement('canvas');

    /**
     * The game scene.
     * @type {Scene}
     */
    this.scene = new _Scene.Scene();

    /**
     * The renderer.
     * @type {Renderer}
     */
    this.renderer = new _rendering.Renderer(this.canvas.getContext('2d'));

    // Style and append the canvas to the DOM.
    this.canvas.style.display = 'block';
    this.canvas.style.width = '100%';
    this.canvas.style.height = 'auto';
    this.canvas.width = width;
    this.canvas.height = height;
    container.appendChild(this.canvas);

    // Init the screen and inputs
    _rendering.Screen._init(this.canvas);

    // Draw the initial scene.
    this.renderer.render(this.scene);
  }

  /**
   * The width of the game screen.
   * @type {number}
   */


  _createClass(Game, [{
    key: 'create',


    /**
     * Run when the game start.
     */
    value: function create() {}

    /**
     * Update the game.<br>
     * Run in the beginning of each frame.
     */

  }, {
    key: 'update',
    value: function update() {}

    /**
     * Update the game.<br>
     * Run after each frame is rendered.
     */

  }, {
    key: 'afterUpdate',
    value: function afterUpdate() {}

    /**
     * Start the game.
     */

  }, {
    key: 'start',
    value: function start() {}
  }, {
    key: 'width',
    get: function get() {
      return this.canvas.width;
    },
    set: function set(width) {
      this.canvas.width = width;
    }

    /**
     * The height of the game screen.
     * @type {number}
     */

  }, {
    key: 'height',
    get: function get() {
      return this.canvas.height;
    },
    set: function set(height) {
      this.canvas.height = height;
    }
  }]);

  return Game;
}();