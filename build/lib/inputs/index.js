'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
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