'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Circle = require('./Circle');

Object.keys(_Circle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Circle[key];
    }
  });
});

var _Graphics = require('./Graphics');

Object.keys(_Graphics).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Graphics[key];
    }
  });
});

var _Rectangle = require('./Rectangle');

Object.keys(_Rectangle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Rectangle[key];
    }
  });
});