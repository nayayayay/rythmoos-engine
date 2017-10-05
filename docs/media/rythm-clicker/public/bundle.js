/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = RythmoosEngine;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);


class FPSCounter extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["GameObject"] {
  render(context) {
    context.fillStyle = '#ffffff';
    context.font = '12px Arial';
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.fillText(`FPS: ${Math.round(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Time"].FPS)}`, 12, 12);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FPSCounter;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BestScore__ = __webpack_require__(8);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__BestScore__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FPSCounter__ = __webpack_require__(1);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__FPSCounter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SettingsButton__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__SettingsButton__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StartButton__ = __webpack_require__(18);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__StartButton__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Title__ = __webpack_require__(26);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__Title__["a"]; });







/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MenuButton__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__MenuButton__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ScoreRecap_js__ = __webpack_require__(27);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ScoreRecap_js__["a"]; });




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_index__ = __webpack_require__(2);



class Menu extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Scene"] {
  create() {
    this.set('title', new __WEBPACK_IMPORTED_MODULE_1__menu_index__["e" /* Title */]());
    this.set('fps', new __WEBPACK_IMPORTED_MODULE_1__menu_index__["b" /* FPSCounter */]());
    this.set('start', new __WEBPACK_IMPORTED_MODULE_1__menu_index__["d" /* StartButton */]());
    this.set('settings', new __WEBPACK_IMPORTED_MODULE_1__menu_index__["c" /* SettingsButton */]());
    this.set('score', new __WEBPACK_IMPORTED_MODULE_1__menu_index__["a" /* BestScore */]());
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Menu;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Menu__ = __webpack_require__(4);



class MyGame extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Game"] {
  load() {
    __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Loader"].basePath = 'assets';
    __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Loader"].loadAudio('song', 'song.mp3');
  }

  create() {
    const score = localStorage.getItem('score') || 0;
    const difficulty = localStorage.getItem('difficulty') || 0;

    __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('score', parseInt(score));
    __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('difficulty', parseInt(difficulty));
    __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('game', this);

    __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Loader"].audio('song').volume = 0.8;

    this.scene = new __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* Menu */]();
  }
}

window.onload = () => {
  new MyGame(500, 500, document.body);
}


/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Menu__ = __webpack_require__(4);



class MenuButton extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["GameObject"] {
  create() {
    this.x = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].width / 2;
    this.y = 310;
    this.width = 110;
    this.height = 32;
    this.hovered = false;
  }

  update() {
    if (this.hovered && __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].leftClick) {
      __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('game').scene = new __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* Menu */]();
    }
  }

  render(context) {
    context.fillStyle = '#ffffff';
    context.strokeStyle = ' #ffffff';
    context.font = '16px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.lineWidth = 2;

    if (this.hovered) {
      context.beginPath();
      context.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
      context.stroke();
      context.fill();

      this.hovered = context.isPointInPath(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].cursorX, __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].cursorY);

      context.fillStyle = '#000000';
      context.fillText('Main menu', this.x, this.y);
    } else {
      context.beginPath();
      context.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
      context.stroke();

      this.hovered = context.isPointInPath(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].cursorX, __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].cursorY);

      context.fillText('Main menu', this.x, this.y);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MenuButton;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);


class BestScore extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["GameObject"] {
  create() {
    this.x = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].width - 14;
    this.y = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].height - 14;
    this.score = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('score');
  }

  render(context) {
    context.fillStyle = '#ffffff';
    context.font = '18px Arial';
    context.textAlign = 'right';
    context.textBaseline = 'bottom';
    context.fillText(`Best score: ${this.score}`, this.x, this.y);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BestScore;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Settings__ = __webpack_require__(10);



class SettingsButton extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["GameObject"] {
  create() {
    this.width = 160;
    this.height = 60;
    this.x = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].width / 2;
    this.y = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].height - 150;
    this.hovered = false;
    this.backgroundOpacity = 0;
    this.textColour = '#ffffff';
  }

  update() {
    if (this.hovered) {
      if (__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].leftClick) {
        __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('game').scene = new __WEBPACK_IMPORTED_MODULE_1__Settings__["a" /* Settings */]();
      }

      this.backgroundOpacity = 1;
      this.textColour = '#000000';
    } else {
      this.backgroundOpacity = 0;
      this.textColour = '#ffffff';
    }
  }

  render(context) {
    context.fillStyle = '#ffffff';
    context.strokeStyle = '#ffffff';
    context.lineWidth = 2;
    context.font = '30px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.beginPath();
    context.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);

    context.stroke();

    context.globalAlpha = this.backgroundOpacity;
    context.fill();
    context.globalAlpha = 1;

    this.hovered = context.isPointInPath(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].cursorX, __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].cursorY);

    context.fillStyle = this.textColour;
    context.fillText('Settings', this.x, this.y);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SettingsButton;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_index__ = __webpack_require__(11);




class Settings extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Scene"] {
  create() {
    this.set('fps', new __WEBPACK_IMPORTED_MODULE_1__menu_index__["b" /* FPSCounter */]());
    this.set('label', new __WEBPACK_IMPORTED_MODULE_2__settings_index__["e" /* Label */]());
    this.set('easy', new __WEBPACK_IMPORTED_MODULE_2__settings_index__["c" /* Easy */]());
    this.set('normal', new __WEBPACK_IMPORTED_MODULE_2__settings_index__["f" /* Normal */]());
    this.set('hard', new __WEBPACK_IMPORTED_MODULE_2__settings_index__["d" /* Hard */]());
    this.set('clear', new __WEBPACK_IMPORTED_MODULE_2__settings_index__["b" /* Clear */]());
    this.set('back', new __WEBPACK_IMPORTED_MODULE_2__settings_index__["a" /* BackButton */]());
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Settings;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BackButton__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__BackButton__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Clear__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__Clear__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Easy__ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__Easy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Hard__ = __webpack_require__(15);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__Hard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Label__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__Label__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Normal__ = __webpack_require__(17);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__Normal__["a"]; });








/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Menu__ = __webpack_require__(4);



class BackButton extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["GameObject"] {
  create() {
    this.width = 100;
    this.height = 44;
    this.x = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].width / 2;
    this.y = 420;
    this.hovered = false;
  }

  update() {
    if (this.hovered && __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].leftClick) {
      __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('game').scene = new __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* Menu */]();
    }
  }

  render(context) {
    context.fillStyle = '#ffffff';
    context.strokeStyle = '#ffffff';
    context.lineWidth = 2;
    context.font = '22px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    context.beginPath();
    context.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    context.stroke();

    if (this.hovered) {
      context.fill();
      context.fillStyle = '#000000';
    }

    this.hovered = context.isPointInPath(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].cursorX, __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].cursorY);

    context.fillText('Back', this.x, this.y);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BackButton;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);


class Clear extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["GameObject"] {
  create() {
    this.width = 100;
    this.height = 38;
    this.x = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].width / 2;
    this.y = 300;
    this.hovered = false;
  }

  update() {
    if (this.hovered && __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].leftClick) {
      localStorage.removeItem('score');
      localStorage.removeItem('difficulty');
      __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('score', 0);
      __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('difficulty', 0);
    }
  }

  render(context) {
    context.fillStyle = '#ffffff';
    context.strokeStyle = '#ffffff';
    context.lineWidth = 2;
    context.font = '18px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    context.beginPath();
    context.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    context.stroke();

    if (this.hovered) {
      context.fill();
      context.fillStyle = '#000000';
    }

    this.hovered = context.isPointInPath(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].cursorX, __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].cursorY);

    context.fillText('Clear data', this.x, this.y);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Clear;



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);


class Easy extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["GameObject"] {
  create() {
    this.width = 80;
    this.height = 36;
    this.x = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].width / 4;
    this.y = 210;
    this.active = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('difficulty') === 0;
    this.hovered = false;
  }

  update() {
    if (this.hovered && __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].leftClick) {
      __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('difficulty', 0);
      localStorage.setItem('difficulty', '0');
    }

    this.active = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('difficulty') === 0;
  }

  render(context) {
    context.fillStyle = '#ffffff';
    context.strokeStyle = '#ffffff';
    context.lineWidth = 2;
    context.font = '18px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('easy', this.x, this.y);

    context.globalAlpha = this.active ? 1 : 0;

    context.beginPath();
    context.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    context.stroke();
    
    this.hovered = context.isPointInPath(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].cursorX, __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].cursorY);
    
    context.globalAlpha = 1;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Easy;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);


class Hard extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["GameObject"] {
  create() {
    this.width = 80;
    this.height = 36;
    this.x = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].width - __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].width / 4;
    this.y = 210;
    this.active = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('difficulty') === 2;
    this.hovered = false;
  }

  update() {
    if (this.hovered && __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].leftClick) {
      __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('difficulty', 2);
      localStorage.setItem('difficulty', '2');
    }

    this.active = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('difficulty') === 2;
  }

  render(context) {
    context.fillStyle = '#ffffff';
    context.strokeStyle = '#ffffff';
    context.lineWidth = 2;
    context.font = '18px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('hard', this.x, this.y);

    context.globalAlpha = this.active ? 1 : 0;

    context.beginPath();
    context.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    context.stroke();

    this.hovered = context.isPointInPath(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].cursorX, __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].cursorY);

    context.globalAlpha = 1;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Hard;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);


class Label extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["GameObject"] {
  create() {
    this.x = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].width / 2;
    this.y = 150;
  }
    
  render(context) {
    context.fillStyle = '#ffffff';
    context.font = '30px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('Difficulty:', this.x, this.y);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Label;



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);


class Normal extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["GameObject"] {
  create() {
    this.width = 80;
    this.height = 36;
    this.x = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].width / 2;
    this.y = 210;
    this.active = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('difficulty') === 1;
    this.hovered = false;
  }

  update() {
    if (this.hovered && __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].leftClick) {
      __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('difficulty', 1);
      localStorage.setItem('difficulty', '1');
    }

    this.active = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('difficulty') === 1;
  }

  render(context) {
    context.fillStyle = '#ffffff';
    context.strokeStyle = '#ffffff';
    context.lineWidth = 2;
    context.font = '18px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('normal', this.x, this.y);

    context.globalAlpha = this.active ? 1 : 0;

    context.beginPath();
    context.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    context.stroke();

    this.hovered = context.isPointInPath(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].cursorX, __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].cursorY);

    context.globalAlpha = 1;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Normal;



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Play__ = __webpack_require__(19);



class StartButton extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["GameObject"] {
  create() {
    this.width = 160;
    this.height = 60;
    this.x = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].width / 2;
    this.y = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].height / 2;
    this.hovered = false;
    this.backgroundOpacity = 0;
    this.textColour = '#ffffff';
  }

  update() {
    if (this.hovered) {
      if (__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].leftClick) {
        __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('game').scene = new __WEBPACK_IMPORTED_MODULE_1__Play__["a" /* Play */]();
      }

      this.backgroundOpacity = 1;
      this.textColour = '#000000';
    } else {
      this.backgroundOpacity = 0;
      this.textColour = '#ffffff';
    }
  }

  render(context) {
    context.fillStyle = '#ffffff';
    context.strokeStyle = '#ffffff';
    context.lineWidth = 2;
    context.font = '30px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.beginPath();
    context.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);

    context.stroke();

    context.globalAlpha = this.backgroundOpacity;
    context.fill();
    context.globalAlpha = 1;

    this.hovered = context.isPointInPath(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].cursorX, __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].cursorY);

    context.fillStyle = this.textColour;
    context.fillText('Start', this.x, this.y);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = StartButton;



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__End__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__play_index__ = __webpack_require__(21);





class Play extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Scene"] {
  create() {
    __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('playing', false);
    __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Loader"].audio('song').currentTime = 0;
    __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Loader"].audio('song').muted = false;

    this.timer = 2000;

    this.set('fps', new __WEBPACK_IMPORTED_MODULE_2__menu_index__["b" /* FPSCounter */]());
    this.set('mute', new __WEBPACK_IMPORTED_MODULE_3__play_index__["b" /* MuteButton */]());
    this.set('board', new __WEBPACK_IMPORTED_MODULE_3__play_index__["a" /* Board */]());
    this.set('tiles', new __WEBPACK_IMPORTED_MODULE_3__play_index__["d" /* Tiles */]());
    this.set('score', new __WEBPACK_IMPORTED_MODULE_3__play_index__["c" /* Score */]());
  }

  update() {
    if (__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Loader"].audio('song').currentTime === 0) {
      this.timer -= __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Time"].deltaTime;

      switch (__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('difficulty')) {
        case 0:
          if (this.timer <= 1500) {
            __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('playing', true);
          }
          break;
        case 1:
          if (this.timer <= 1000) {
            __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('playing', true);
          }
          break;
        case 2:
          if (this.timer <= 500) {
            __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('playing', true);
          }
          break;
        default:
          break;
      }

      if (this.timer <= 0) {
        __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Loader"].audio('song').play();
      }
    } else {
      if (__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Loader"].audio('song').currentTime === __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Loader"].audio('song').duration) {
        __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('game').scene = new __WEBPACK_IMPORTED_MODULE_1__End__["a" /* End */]();
      }
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Play;



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__end_index__ = __webpack_require__(3);




class End extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Scene"] {
  create() {
    this.set('fps', new __WEBPACK_IMPORTED_MODULE_1__menu_index__["b" /* FPSCounter */]());
    this.set('recap', new __WEBPACK_IMPORTED_MODULE_2__end_index__["b" /* ScoreRecap */]());
    this.set('back', new __WEBPACK_IMPORTED_MODULE_2__end_index__["a" /* MenuButton */]());
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = End;



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Board__ = __webpack_require__(22);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Board__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tiles__ = __webpack_require__(23);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__Tiles__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MuteButton__ = __webpack_require__(24);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__MuteButton__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Score__ = __webpack_require__(25);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__Score__["a"]; });






/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);


class Board extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["GameObject"] {
  create() {
    this.tileSize = 70;
    this.width = this.tileSize * 3;
    this.height = 270;
    this.x = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].width / 2;
    this.y = 0;
    this.keys = [false, false, false];
    this.pos = 0;
    this.speed = 0;
    
    switch (__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('difficulty')) {
      case 0:
        this.speed = 0.38;
        break;
      case 1:
        this.speed = 0.46;
        break;
      case 2:
        this.speed = 0.58;
        break;
      default:
        break;
    }

    __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('tile size', this.tileSize);
    __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('board width', this.width);
    __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('board height', this.height);
    __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('board x', this.x);
    __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('keys', this.keys);
    __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('tile pos', this.pos);
    __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('turn', 0);
  }

  update() {
    if (!__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('playing')) return;

    this.pos += this.speed * __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Time"].deltaTime;

    if (this.pos > this.height) {
      __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('turn', __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('turn') + 1);
      this.pos = 0;

      this.keys[0] = Math.random() < 0.5;
      this.keys[1] = Math.random() < 0.5;
      this.keys[2] = Math.random() < 0.5;

      if (this.keys.indexOf(true) === -1) {
        this.keys[Math.floor(Math.random() * 3)] = true;
      }
    }

    __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('tile pos', this.pos);
  }

  render(context) {
    context.lineWidth = 2;
    context.fillStyle = '#ffffff';
    context.strokeStyle = '#ffffff';
    context.font = '26px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    for (let i = 0; i < this.keys.length; i++) {
      if (!this.keys[i]) continue;

      const tileX = this.x + (i * this.tileSize) - this.width / 2;
      let char = '';

      switch (i) {
        case 0:
          char = 'Q';
          break;
        case 1:
          char = 'W';
          break;
        case 2:
          char = 'E';
          break;
        default:
          break;
      }

      context.fillStyle = '#ffffff';
      context.fillRect(tileX, this.pos, this.tileSize, this.tileSize);
      context.fillStyle = '#000000';
      context.fillText(char, tileX + this.tileSize / 2, this.pos + this.tileSize / 2);
    }

    context.beginPath();
    context.moveTo(this.x - this.width / 2, this.y);
    context.lineTo(this.x - this.width / 2, this.height + this.tileSize);
    context.stroke();

    context.beginPath();
    context.moveTo(this.x - 35, this.y);
    context.lineTo(this.x - 35, this.height + this.tileSize);
    context.stroke();

    context.beginPath();
    context.moveTo(this.x + 35, this.y);
    context.lineTo(this.x + 35, this.height + this.tileSize);
    context.stroke();

    context.beginPath();
    context.moveTo(this.x + this.width / 2, this.y);
    context.lineTo(this.x + this.width / 2, this.height + this.tileSize);
    context.stroke();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Board;



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);


class Tiles extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["GameObject"] {
  create() {
    __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('current score', 0);

    this.tileSize = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('tile size');
    this.x = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('board x');
    this.y = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('board height') + this.tileSize;
    this.width = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('board width');
    this.height = this.tileSize;
    this.pressed = [false, false, false];
    this.turns = [-1, -1, -1];
  }

  update() {
    if (!__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('playing')) return;

    this.pressed[0] = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Keyboard"].keyDown(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Keys"].KeyQ);
    this.pressed[1] = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Keyboard"].keyDown(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Keys"].KeyW);
    this.pressed[2] = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Keyboard"].keyDown(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Keys"].KeyE);

    if (__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Keyboard"].keyPressed(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Keys"].KeyQ)) {
      if (this.turns[0] < __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('turn') &&
          __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('keys')[0] &&
          __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('tile pos') > this.y - this.tileSize * 2
      ) {
        __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('current score', __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('current score') + 1);
        this.turns[0] = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('turn');
      } else {
        __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('current score', __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('current score') - 1);
      }
    }

    if (__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Keyboard"].keyPressed(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Keys"].KeyW)) {
      if (this.turns[1] < __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('turn') &&
        __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('keys')[1] &&
        __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('tile pos') > this.y - this.tileSize * 2
      ) {
        __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('current score', __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('current score') + 1);
        this.turns[1] = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('turn');
      } else {
        __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('current score', __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('current score') - 1);
      }
    }

    if (__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Keyboard"].keyPressed(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Keys"].KeyE)) {
      if (this.turns[2] < __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('turn') &&
        __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('keys')[2] &&
        __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('tile pos') > this.y - this.tileSize * 2
      ) {
        __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('current score', __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('current score') + 1);
        this.turns[2] = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('turn');
      } else {
        __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('current score', __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('current score') - 1);
      }
    }
  }

  render(context) {
    context.font = '20px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    context.fillStyle = this.pressed[0] ? '#9542f4' : '#ffffff';
    context.fillRect(this.x - this.width / 2, this.y - this.tileSize, this.tileSize, this.tileSize);
    context.fillStyle = this.pressed[0] ? '#ffffff' : '#000000';
    context.fillText('Q', this.x - this.width / 2 + this.tileSize / 2, this.y - this.tileSize / 2);

    context.fillStyle = this.pressed[1] ? '#9542f4' : '#ffffff';
    context.fillRect(this.x - this.tileSize / 2, this.y - this.tileSize, this.tileSize, this.tileSize);
    context.fillStyle = this.pressed[1] ? '#ffffff' : '#000000';
    context.fillText('W', this.x, this.y - this.tileSize / 2);

    context.fillStyle = this.pressed[2] ? '#9542f4' : '#ffffff';
    context.fillRect(this.x + this.tileSize / 2, this.y - this.tileSize, this.tileSize, this.tileSize);
    context.fillStyle = this.pressed[2] ? '#ffffff' : '#000000';
    context.fillText('E', this.x + this.width / 2 - this.tileSize / 2, this.y - this.tileSize / 2);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Tiles;



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);


class MuteButton extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["GameObject"] {
  create() {
    this.hovered = false;
    this.x = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].width - 50;
    this.y = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].height - 10;
  }

  update() {
    if (this.hovered && __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].leftClick) {
      __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Loader"].audio('song').muted = !__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Loader"].audio('song').muted;
    }
  }

  render(context) {
    context.fillStyle = '#ffffff';
    context.font = '20px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'bottom';

    if (__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Loader"].audio('song').muted) {
      context.fillText('Unmute', this.x, this.y);
    } else {
      context.fillText('Mute', this.x, this.y);
    }

    context.beginPath();
    context.rect(this.x - 30, this.y - 30, 60, 30);
    context.closePath();

    this.hovered = context.isPointInPath(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].cursorX, __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].cursorY);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MuteButton;



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);


class Score extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["GameObject"] {
  create() {
    this.x = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].width / 2;
    this.y = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('board height') + 100;
    this.score = 0;
  }

  update() {
    this.score = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('current score');
  }

  render(context) {
    context.fillStyle = '#ffffff';
    context.font = '36px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'top';
    context.fillText(`Score: ${this.score}`, this.x, this.y);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Score;



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);


class Title extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["GameObject"] {
  create() {
    this.x = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].width / 2;
    this.y = 100;
  }

  render(context) {
    context.fillStyle = '#ffffff';
    context.font = '40px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('Rythm Clicker', this.x, this.y);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Title;



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);


class ScoreRecap extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["GameObject"] {
  create() {
    this.score = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('current score');
    this.bestScore = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('score');
    this.text = ['', ''];
    this.x = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].width / 2;
    this.y = 210;

    if (this.score > this.bestScore) {
      __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('score', this.score);
      localStorage.setItem('score', this.score);
      this.text[0] = 'New best score:';
      this.text[1] = `${this.score}`;
    } else if (this.score < 0) {
      this.text[0] = 'You lost!';
      this.text[1] = `Score: ${this.score}`;
    } else {
      this.text[0] = `Best score: ${this.bestScore}`;
      this.text[1] = `Score: ${this.score}`;
    }
  }

  render(context) {
    context.fillStyle = '#ffffff';
    context.font = '28px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(this.text[0], this.x, this.y);
    context.fillText(this.text[1], this.x, this.y + 40);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ScoreRecap;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map