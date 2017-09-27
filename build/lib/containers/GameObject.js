'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameObject = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _geometry = require('../geometry');

var _rendering = require('../rendering');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Define an entity in your game (e.g. a character, a building...).
 */
var GameObject = exports.GameObject = function () {

  /**
   * Create a GameObject.
   * @param {number} [x=0] The point in the X axis.
   * @param {number} [y=0] The point in the Y axis.
   * @param {number} [width=Screen.width] The width of the game object.
   * @param {number} [height=Screen.heigh] The height of the game object.
   * @param {number} [rotation=0] The rotation in degrees.
   * @param {number} [scale=1] The scale which to render this game object at.
   * @param {boolean} [visible=true] Whether the game object has to be rendered or not.
   */
  function GameObject() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _rendering.Screen.width;
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _rendering.Screen.height;
    var rotation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var scale = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
    var visible = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;

    _classCallCheck(this, GameObject);

    /**
     * The position of the game object (top-left corner).
     * @type {Point}
     */
    this.position = new _geometry.Point(x, y);

    /**
     * The width of the game object.
     * @type {number}
     */
    this.width = width;

    /**
     * The height of the game object.
     * @type {number}
     */
    this.height = height;

    /**
     * The rotation of the game object in degrees.
     * @type {number}
     */
    this.rotation = rotation;

    /**
     * The scale which to render this game object at (default is 1).
     * @type {number}
     */
    this.scale = scale;

    /**
     * Whether this game object should be rendered or not.
     * @type {boolean}
     */
    this.visible = visible;

    /**
     * The graphics contained in this game object, see {@link #addGraphics}.
     * @type {Graphics[]}
     */
    this.graphics = [];
  }

  /**
   * The X position of the game object.
   * @type {number}
   */


  _createClass(GameObject, [{
    key: 'setCenter',


    /**
     * Change the game object center position. This will update its position.
     * @param {Point} center The new center position of the game object.
     */
    value: function setCenter(center) {
      this.x = center.x - this.width / 2;
      this.y = center.y - this.height / 2;
    }

    /**
     * Add new graphics to the game object.
     * @param {Graphics} graphics 
     * @param {...Graphics} otherGraphics 
     */

  }, {
    key: 'addGraphics',
    value: function addGraphics(graphics) {
      this.graphics.push(graphics);

      for (var _len = arguments.length, otherGraphics = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        otherGraphics[_key - 1] = arguments[_key];
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = otherGraphics[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var other = _step.value;

          this.addGraphics(other);
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

    /**
     * Update the game object.<br>
     * Run before each frame is rendered. For post updating, see {@link GameObject#afterUpdate}.
     */

  }, {
    key: 'update',
    value: function update() {}

    /**
     * Update the game object.<br>
     * Run after the each frame is rendered. For pre updating, see {@link GameObject#update}.
     */

  }, {
    key: 'afterUpdate',
    value: function afterUpdate() {}

    /**
     * Draw the game object.<br>
     * This happens before drawing the game object's graphics. For post
     * rendering see {@link GameObject#drawAfter}.
     * @param {CanvasRenderingContext2D} context The renderer's context.
     */

  }, {
    key: 'draw',
    value: function draw(context) {}

    /**
     * Draw the game object.<br>
     * This happens after drawing the game object's graphics. For pre
     * rendering see {@link GameObject#draw}.
     * @param {CanvasRenderingContext2D} context The renderer's context.
     */

  }, {
    key: 'drawAfter',
    value: function drawAfter(context) {}

    /**
     * Used internally to render the game object.
     * @param {CanvasRenderingContext2D} context The renderer's context.
     * @ignore
     */

  }, {
    key: '_render',
    value: function _render(context) {
      context.save();
      context.translate(this.x, this.y);
      context.scale(this.scale, this.scale);

      if (this.rotation) {
        context.translate(this.width / 2, this.height / 2);
        context.rotate(_geometry.Rotation.degreesToRadians(this.rotation));
        context.translate(-this.width / 2, -this.height / 2);
      }

      this.draw(context);

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.graphics[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var graphics = _step2.value;

          graphics._render(context);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.drawAfter(context);

      context.restore();
    }
  }, {
    key: 'x',
    get: function get() {
      return this.position.x;
    },
    set: function set(x) {
      this.position.x = x;
    }

    /**
     * The Y position of the game object.
     * @type {number}
     */

  }, {
    key: 'y',
    get: function get() {
      return this.position.y;
    },
    set: function set(y) {
      this.position.y = y;
    }

    /**
     * The center of the game object. To set it, see {@link #setCenter}.
     * @type {Point}
     * @readonly
     */

  }, {
    key: 'center',
    get: function get() {
      return new _geometry.Point(this.x + this.width / 2, this.y + this.height / 2);
    }

    /**
     * The center of the game object in the X axis.
     * @type {number}
     */

  }, {
    key: 'centerX',
    get: function get() {
      return this.x + this.width / 2;
    },
    set: function set(centerX) {
      this.x = centerX - this.width / 2;
    }

    /**
     * The center of the game object in the Y axis.
     */

  }, {
    key: 'centerY',
    get: function get() {
      return this.y + this.height / 2;
    },
    set: function set(centerY) {
      this.y = centerY - this.height / 2;
    }
  }]);

  return GameObject;
}();