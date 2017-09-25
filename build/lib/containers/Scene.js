"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Contain the game objects to update and render.
 */
var Scene = exports.Scene = function () {

  /**
   * Create a Scene.
   */
  function Scene() {
    _classCallCheck(this, Scene);

    /**
     * The game objects contained in the scene.
     * @type {GameObject[]}
     */
    this.gameObjects = [];
  }

  /**
   * Add game objects to the scene.
   * @param {GameObject} gameObject A game object to add to the scene.
   * @param {...GameObject} [otherGameObjects] More game objects to add.
   */


  _createClass(Scene, [{
    key: "add",
    value: function add(gameObject) {
      this.gameObjects.push(gameObject);

      for (var _len = arguments.length, otherGameObjects = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        otherGameObjects[_key - 1] = arguments[_key];
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = otherGameObjects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var other = _step.value;

          this.add(other);
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
     * Check whether the given game object is in the scene or not.
     * @param {GameObject} gameObject The game object to check.
     */

  }, {
    key: "contains",
    value: function contains(gameObject) {
      return this.gameObjects.indexOf(gameObject) !== -1;
    }

    /**
     * Remove game objects from the scene.
     * @param {GameObject} gameObject A game object to remove from the scene.
     * @param {...GameObject} [otherGameObjects] More game objects to remove.
     */

  }, {
    key: "remove",
    value: function remove(gameObject) {
      var index = this.gameObjects.indexOf(gameObject);

      if (index !== -1) {
        this.gameObjects.splice(index, 1);
      }

      for (var _len2 = arguments.length, otherGameObjects = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        otherGameObjects[_key2 - 1] = arguments[_key2];
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = otherGameObjects[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var other = _step2.value;

          this.remove(other);
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
    }

    /**
     * Run when the scene is created.
     */

  }, {
    key: "create",
    value: function create() {}

    /**
     * Run before each frame is rendered.<br>
     * For post updating, see {@link Scene#afterUpdate}.
     */

  }, {
    key: "update",
    value: function update() {}

    /**
     * Run after each frame is rendered.<br>
     * For pre updating, see {@link Scene#update}
     */

  }, {
    key: "afterUpdate",
    value: function afterUpdate() {}
  }]);

  return Scene;
}();