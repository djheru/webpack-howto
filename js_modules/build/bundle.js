/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _lg = __webpack_require__(3);

var _lg2 = _interopRequireDefault(_lg);

var _sm = __webpack_require__(4);

var _sm2 = _interopRequireDefault(_sm);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image1 = document.createElement('img');
image1.src = _sm2.default;

document.body.appendChild(image1);

var image2 = document.createElement('img');
image2.src = _lg2.default;

document.body.appendChild(image2);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "19c71b55c61103b829cd3a7755c3e9d5.png";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(3, 6);

console.log(total);

/***/ }
/******/ ]);