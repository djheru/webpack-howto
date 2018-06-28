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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/webpack.dev.js":
/*!*******************************!*\
  !*** ./config/webpack.dev.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar HTMLWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nmodule.exports = {\n  entry: {\n    vendor: ['react', 'react-dom'],\n    main: ['react-hot-loader/patch', 'babel-runtime/regenerator', 'babel-register', 'webpack-hot-middleware/client?reload=true', './src/main.js']\n  },\n  mode: 'development',\n  output: {\n    filename: '[name]-bundle.js',\n    path: path.resolve(__dirname, '../dist'),\n    publicPath: '/'\n  },\n  devServer: {\n    contentBase: 'dist',\n    port: 8000,\n    publicPath: '/',\n    overlay: true, // display errors on browser\n    stats: {\n      colors: true\n    }\n  },\n  devtool: 'source-map',\n  module: {\n    rules: [{\n      test: /\\.js$/,\n      use: [{ loader: 'babel-loader' }],\n      exclude: /node_modules/\n    }, {\n      test: /\\.css$/,\n      use: [// run in reverse order\n      { loader: 'style-loader' }, // second, inject into html\n      { loader: 'css-loader' // first, lint and load css\n      }]\n    }, {\n      test: /\\.(jpg|gif|png)$/,\n      use: [{ loader: 'file-loader', options: { name: 'images/[name].[ext]' } }]\n    }, {\n      test: /\\.html$/,\n      use: [{\n        loader: \"file-loader\",\n        options: {\n          name: \"[name].[ext]\"\n        }\n      }, { loader: \"extract-loader\" }, {\n        loader: \"html-loader\",\n        options: {\n          attrs: [\"img:src\"]\n        }\n      }]\n    }, {\n      test: /\\.md$/,\n      use: [{ loader: 'markdown-with-front-matter-loader' }]\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.DefinePlugin({\n    \"process.env.NODE_ENV\": (0, _stringify2.default)(\"development\")\n  }), new HTMLWebpackPlugin({\n    template: './src/index.ejs',\n    inject: true,\n    title: 'Link\\'s Journal'\n  })]\n};\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./config/webpack.dev.js?");

/***/ }),

/***/ "./data/post.md":
/*!**********************!*\
  !*** ./data/post.md ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"title\":\"Our First Post\",\"author\":\"Link\",\"__content\":\"<h1 id=\\\"long-ago-in-the-kingdom-of-hyrule\\\">Long ago in the kingdom of Hyrule</h1>\\n<p>Our hero wakes up.</p>\\n<p>He is alone.</p>\\n<p>He must find his sword.</p>\\n\"}\n\n//# sourceURL=webpack:///./data/post.md?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/components/AppRoot.js":
/*!***********************************!*\
  !*** ./src/components/AppRoot.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"babel-runtime/core-js/object/get-prototype-of\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"babel-runtime/helpers/classCallCheck\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"babel-runtime/helpers/createClass\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"babel-runtime/helpers/possibleConstructorReturn\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"babel-runtime/helpers/inherits\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar markdownData = __webpack_require__(/*! ../../data/post.md */ \"./data/post.md\");\nvar imagePath = __webpack_require__(/*! ../images/lg.png */ \"./src/images/lg.png\");\n\nvar AppRoot = function (_Component) {\n  (0, _inherits3.default)(AppRoot, _Component);\n\n  function AppRoot(props) {\n    (0, _classCallCheck3.default)(this, AppRoot);\n\n    var _this = (0, _possibleConstructorReturn3.default)(this, (AppRoot.__proto__ || (0, _getPrototypeOf2.default)(AppRoot)).call(this, props));\n\n    _this.state = {};\n    return _this;\n  }\n\n  (0, _createClass3.default)(AppRoot, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"profile\" },\n        _react2.default.createElement(\"img\", { src: imagePath, alt: \"\" }),\n        _react2.default.createElement(\n          \"h1\",\n          null,\n          markdownData.title\n        ),\n        _react2.default.createElement(\"div\", { className: \"content\", dangerouslySetInnerHTML: { __html: markdownData.__content } })\n      );\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n  return AppRoot;\n}(_react.Component);\n\nvar _default = AppRoot;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(AppRoot, \"AppRoot\", \"/media/phil/InternalStorage/Sites/_howto/howto-webpack/src/components/AppRoot.js\");\n  reactHotLoader.register(_default, \"default\", \"/media/phil/InternalStorage/Sites/_howto/howto-webpack/src/components/AppRoot.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/components/AppRoot.js?");

/***/ }),

/***/ "./src/images/lg.png":
/*!***************************!*\
  !*** ./src/images/lg.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/lg.png\";\n\n//# sourceURL=webpack:///./src/images/lg.png?");

/***/ }),

/***/ "./src/server/express.js":
/*!*******************************!*\
  !*** ./src/server/express.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _AppRoot = __webpack_require__(/*! ../components/AppRoot */ \"./src/components/AppRoot.js\");\n\nvar _AppRoot2 = _interopRequireDefault(_AppRoot);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar server = (0, _express2.default)();\n\nvar isProd = \"production\" === 'production';\n\nif (!isProd) {\n  var webpack = __webpack_require__(/*! webpack */ \"webpack\");\n  var config = __webpack_require__(/*! ../../config/webpack.dev */ \"./config/webpack.dev.js\");\n  var compiler = webpack(config);\n\n  var webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n  var webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n  var devMiddleware = webpackDevMiddleware(compiler, config.devServer);\n  var hotMiddleware = webpackHotMiddleware(compiler, config.devServer);\n\n  // order needs to be dev, hot, static\n  server.use(devMiddleware);\n  server.use(hotMiddleware);\n  console.log('DEV Middleware Enabled');\n}\n\n//const staticMiddleware = express.static('dist');\nvar enableBrotli = true;\nvar staticMiddleware = __webpack_require__(/*! express-static-gzip */ \"express-static-gzip\")('dist', { enableBrotli: enableBrotli });\nserver.use(staticMiddleware);\n\nserver.get('*', function (req, res) {\n  var html = _server2.default.renderToString(_react2.default.createElement(\n    'div',\n    null,\n    'HELLO SSR!'\n  ));\n  res.send('\\n  <html>\\n  <head>\\n      <title>My Balls</title>\\n      <link href=\"/main.css\" rel=\"stylesheet\"/>\\n  </head>\\n  <body>\\n  \\n  <div id=\"react-root\">\\n    ' + _server2.default.renderToString(_react2.default.createElement(_AppRoot2.default, null)) + '\\n  </div>\\n  <script src=\"vendor-bundle.js\"></script>\\n  <script src=\"main-bundle.js\"></script>\\n  </body>\\n</html>\\n  ');\n});\n\nvar PORT = Object({\"NODE_ENV\":\"production\"}).PORT || 8002;\nserver.listen(PORT, function () {\n  console.log('server listening on port: ', PORT, \"production\");\n});\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(server, 'server', '/media/phil/InternalStorage/Sites/_howto/howto-webpack/src/server/express.js');\n  reactHotLoader.register(isProd, 'isProd', '/media/phil/InternalStorage/Sites/_howto/howto-webpack/src/server/express.js');\n  reactHotLoader.register(enableBrotli, 'enableBrotli', '/media/phil/InternalStorage/Sites/_howto/howto-webpack/src/server/express.js');\n  reactHotLoader.register(staticMiddleware, 'staticMiddleware', '/media/phil/InternalStorage/Sites/_howto/howto-webpack/src/server/express.js');\n  reactHotLoader.register(PORT, 'PORT', '/media/phil/InternalStorage/Sites/_howto/howto-webpack/src/server/express.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/server/express.js?");

/***/ }),

/***/ "./src/server/main.js":
/*!****************************!*\
  !*** ./src/server/main.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-register */ \"babel-register\");\n__webpack_require__(/*! ./express */ \"./src/server/express.js\");\n\n//# sourceURL=webpack:///./src/server/main.js?");

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/server/main.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/server/main.js */\"./src/server/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/server/main.js?");

/***/ }),

/***/ "babel-register":
/*!*********************************!*\
  !*** external "babel-register" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-register\");\n\n//# sourceURL=webpack:///external_%22babel-register%22?");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/json/stringify\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/core-js/json/stringify%22?");

/***/ }),

/***/ "babel-runtime/core-js/object/get-prototype-of":
/*!****************************************************************!*\
  !*** external "babel-runtime/core-js/object/get-prototype-of" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/object/get-prototype-of\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/core-js/object/get-prototype-of%22?");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/classCallCheck" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/*!****************************************************!*\
  !*** external "babel-runtime/helpers/createClass" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/createClass%22?");

/***/ }),

/***/ "babel-runtime/helpers/inherits":
/*!*************************************************!*\
  !*** external "babel-runtime/helpers/inherits" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/inherits\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/inherits%22?");

/***/ }),

/***/ "babel-runtime/helpers/possibleConstructorReturn":
/*!******************************************************************!*\
  !*** external "babel-runtime/helpers/possibleConstructorReturn" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/possibleConstructorReturn\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-static-gzip":
/*!**************************************!*\
  !*** external "express-static-gzip" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-static-gzip\");\n\n//# sourceURL=webpack:///external_%22express-static-gzip%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });