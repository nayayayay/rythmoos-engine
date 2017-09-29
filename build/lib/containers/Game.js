'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Scene = require('./Scene');

var _rendering = require('../rendering');

var _timing = require('../timing');

var _inputs = require('../inputs');

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

    /**
     * The main loop.
     * @type {Loop}
     * @private
     */
    this._loop = new _timing.Loop();

    /**
     * Whether the game was created or not.
     * @type {boolean}
     * @private
     */
    this._created = false;

    // Style and append the canvas to the DOM.
    this.canvas.style.display = 'block';
    this.canvas.style.width = '100%';
    this.canvas.style.height = 'auto';
    this.canvas.width = width;
    this.canvas.height = height;
    container.appendChild(this.canvas);

    // Init the screen and inputs
    _rendering.Screen._init(this.canvas);
    _inputs.Mouse._init(this.canvas);
    _inputs.Keyboard._init();

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
    value: function start() {
      var _this = this;

      if (!this.created) {
        this.create();
      }

      this._loop.start(function (frame) {
        // Update
        _timing.Time._setFrame(frame);
        _this.update();
        _this.scene._runUpdate();

        // Render
        _this.renderer.render(_this.scene);

        // Post update
        _this.scene._runAfterUpdate();
        _this.afterUpdate();
      });
    }

    /**
     * Stop the game.
     */

  }, {
    key: 'stop',
    value: function stop() {
      this._loop.stop();
    }
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

    /**
     * Whether the game was created/started or not.
     * @type {boolean}
     * @readonly
     */

  }, {
    key: 'created',
    get: function get() {
      return this._created;
    }

    /**
     * Whether the game has started or not.
     * @type {boolean}
     * @readonly
     */

  }, {
    key: 'started',
    get: function get() {
      return this._loop.started;
    }

    /**
     * Whether the game is running or not.
     * @type {boolean}
     * @readonly
     */

  }, {
    key: 'running',
    get: function get() {
      return this._loop.running;
    }

    /**
     * Whether the game was stopped or not.
     * @type {boolean}
     * @readonly
     */

  }, {
    key: 'stopped',
    get: function get() {
      return this._loop.stopped;
    }
  }]);

  return Game;
}();