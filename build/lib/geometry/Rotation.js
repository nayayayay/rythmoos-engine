"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Contain helpers to translate angles.
 * @abstract
 */
var Rotation = exports.Rotation = function () {
  function Rotation() {
    _classCallCheck(this, Rotation);
  }

  _createClass(Rotation, null, [{
    key: "radiansToDegrees",


    /**
     * Convert radians to degrees.
     * @param {number} radians The angle in radians.
     * @return {number} The radians in degrees.
     */
    value: function radiansToDegrees(radians) {
      return radians * 180 / Math.PI;
    }

    /**
     * Convert degrees to radians.
     * @param {number} degrees The angle in degrees.
     * @return {number} The degrees in radians.
     */

  }, {
    key: "degreesToRadians",
    value: function degreesToRadians(degrees) {
      return degrees * Math.PI / 180;
    }
  }]);

  return Rotation;
}();