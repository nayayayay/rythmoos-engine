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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MainScene__ = __webpack_require__(15);



// Our main game class
class MyAwesomeGame extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Game"] {

  // Override the create method, this is when the game is ready to start
  create() {
    // We can already initialise the score state so it is available from anywhere we need it
    __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('score', 0);

    // Let's set the initial game scene here
    this.scene = new __WEBPACK_IMPORTED_MODULE_1__MainScene__["a" /* default */]();
  }

}

// Start our game when the window loads
window.onload = () => {
  new MyAwesomeGame(window.innerWidth, window.innerHeight, document.body);
};


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Simon\\Desktop\\projects\\doc-ex\\node_modules\\rythmoos-engine\\build\\lib\\index.js'");

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Circle__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Score__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FPSCounter__ = __webpack_require__(17);





// Our main scene
class MainScene extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Scene"] {

  // Override the create method so we can setup the scene
  create() {
    // Let's add our game objects
    this.set('circle', new __WEBPACK_IMPORTED_MODULE_1__Circle__["a" /* default */]());
    this.set('score', new __WEBPACK_IMPORTED_MODULE_2__Score__["a" /* default */]());
    this.set('fps counter', new __WEBPACK_IMPORTED_MODULE_3__FPSCounter__["a" /* default */]());
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = MainScene;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);


// Our circle game object
class Circle extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["GameObject"] {

  // Override the create method
  create() {
    // Let's set up our game object properties here

    // The radius of our circle
    this.radius = 50;

    // The x and y coordinates
    this.x = this.getNewPosition(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].width);
    this.y = this.getNewPosition(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].height);

    // Let's set a boolean value that checks whether the mouse is hovering the circle or not.
    this.hovered = false;

    // The colour of our circle (let's make it white when hovered)
    this.colour = '#ff00ff';
  }

  // Override the update method
  update() {
    // This method is ran each frame, before the rendering process.
    // Let's update our game object properties from here:

    // If the circle is hovered, let's set its colour to white, or set it to
    // #ff00ff otherwise.
    this.colour = this.hovered ? '#ffffff' : '#ff00ff';

    // If the mouse left button is clicked
    if (__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].leftClick) {
      // Let's be mean here and remove 1 point from the player's score if he clicks outside
      // of the circle.
      if (this.hovered === false) {
        __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('score', __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('score') - 1);
      } else {
        // Otherwise, we'll add 1 to the score
        __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].set('score', __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('score') + 1);
      }

      // Set new positions to our circle when a click occurs
      this.x = this.getNewPosition(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].width);
      this.y  =this.getNewPosition(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].height);
    }
  }

  // Override the render method
  render(context) {
    // We will render our object form here.
    context.fillStyle = this.colour;

    // Draw the circle
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fill();

    // Since we drew our circle's path, we can use the context isPointInPath method to check
    // whether the cursor is in the path or not.
    this.hovered = context.isPointInPath(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].cursorX, __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Mouse"].cursorY);
  }

  /**
   * Simple custom method to set our game object's x and y coordinates
   * @param {number} max The max possible value
   * @return A random x
   */
  getNewPosition(max) {
    // Some very complex mathemical stuff
    return Math.random() * (max - this.radius * 2) + this.radius;
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Circle;



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);


// Our FPS counter
class FPSCounter extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["GameObject"] {

  // We'll simply override the render method here
  render(context) {
    context.fillStyle = '#ffffff';
    context.font = '20px Arial';

    // That will allow us to position the text from its top left corner
    context.textAlign = 'left';
    context.textBaseline = 'top';
    
    context.fillText(`FPS: ${Math.round(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Time"].FPS)}`, 15, 15);
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = FPSCounter;



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__);


// Our score class
class Score extends __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["GameObject"] {

  // Override the create method to set our properties
  create() {
    this.x = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].width - 30;
    this.y = __WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["Screen"].height - 30;
  }

  // Override the render method to render our score text
  render(context) {
    context.fillStyle = '#ffffff';
    context.font = '36px Arial';

    // That will allow us to position the text from its bottom right corner
    context.textAlign = 'right';
    context.textBaseline = 'bottom';
    
    context.fillText(`Score: ${__WEBPACK_IMPORTED_MODULE_0_rythmoos_engine__["State"].get('score')}`, this.x, this.y);
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Score;



/***/ })
/******/ ]);
//# sourceMappingURL=my-awesome-game.js.map