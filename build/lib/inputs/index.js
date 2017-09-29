'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Keyboard = require('./Keyboard');

Object.keys(_Keyboard).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Keyboard[key];
    }
  });
});

var _Keys = require('./Keys');

Object.keys(_Keys).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Keys[key];
    }
  });
});

var _Mouse = require('./Mouse');

Object.keys(_Mouse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Mouse[key];
    }
  });
});