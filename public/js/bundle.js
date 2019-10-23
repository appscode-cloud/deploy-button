var DbbButton =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/event-listeners.js":
/*!***********************************!*\
  !*** ./src/js/event-listeners.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addEventListeners; });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ \"./src/js/styles.js\");\n\nfunction addEventListeners(btn, acModal, acModalClose) {\n  btn.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    Object(_styles__WEBPACK_IMPORTED_MODULE_0__[\"css\"])(acModal, {\n      display: \"flex\"\n    });\n  });\n  acModalClose.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    Object(_styles__WEBPACK_IMPORTED_MODULE_0__[\"css\"])(acModal, {\n      display: \"none\"\n    });\n  });\n  document.addEventListener(\"keydown\", function (e) {\n    e.preventDefault();\n    var keyCode = e.keyCode;\n\n    if (keyCode === 27) {\n      Object(_styles__WEBPACK_IMPORTED_MODULE_0__[\"css\"])(acModal, {\n        display: \"none\"\n      });\n    }\n  });\n}\n\n//# sourceURL=webpack://DbbButton/./src/js/event-listeners.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialize\", function() { return initialize; });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ \"./src/js/styles.js\");\n/* harmony import */ var _event_listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-listeners */ \"./src/js/event-listeners.js\");\n\n\nfunction initialize(ref) {\n  var el = document.querySelector(ref);\n  el.innerHTML = \"<button class=\\\"ac-bb-modal-button\\\">Deploy with ByteBuilders</button>\\n\\n  <div class=\\\"ac-bb-modal\\\">\\n    <div class=\\\"ac-bb-modal-background\\\"></div>\\n    <div class=\\\"ac-bb-modal-content\\\">\\n      <div class=\\\"ac-bb-box\\\">\\n        <iframe class=\\\"ac-iframe\\\" src=\\\"http://deploy.bb.test:5994/?product=voyager\\\" width=\\\"100%\\\" height=\\\"500\\\"></iframe>\\n      </div>\\n    </div>\\n    <button class=\\\"ac-bb-modal-close\\\">X</button>\\n  </div>\"; // catch all the elements\n\n  var btn = document.querySelector(\".ac-bb-modal-button\");\n  var acModal = document.querySelector(\".ac-bb-modal\");\n  var acModalBg = document.querySelector(\".ac-bb-modal-background\");\n  var acModalContent = document.querySelector(\".ac-bb-modal-content\");\n  var acModalBox = document.querySelector(\".ac-bb-box\");\n  var acModalClose = document.querySelector(\".ac-bb-modal-close\"); // const acModalIframe = document.querySelector(\".ac-iframe\");\n  // add functionality\n\n  Object(_event_listeners__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(btn, acModal, acModalClose); // add styles\n\n  Object(_styles__WEBPACK_IMPORTED_MODULE_0__[\"addStyles\"])(btn, acModal, acModalBg, acModalContent, acModalBox, acModalClose);\n}\n\n//# sourceURL=webpack://DbbButton/./src/js/index.js?");

/***/ }),

/***/ "./src/js/styles.js":
/*!**************************!*\
  !*** ./src/js/styles.js ***!
  \**************************/
/*! exports provided: css, addStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"css\", function() { return css; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addStyles\", function() { return addStyles; });\nfunction css(el, styles) {\n  for (var property in styles) {\n    el.style[property] = styles[property];\n  }\n}\nfunction addStyles(btn, acModal, acModalBg, acModalContent, acModalBox, acModalClose) {\n  debugger;\n  css(btn, {\n    backgroundColor: \"#4CAF50\"\n    /* Green */\n    ,\n    border: \"none\",\n    color: \"white\",\n    padding: \"15px 32px\",\n    textAlign: \"center\",\n    textDecoration: \"none\",\n    display: \"inline-block\",\n    fontSize: \"16px\"\n  });\n  css(acModal, {\n    alignItems: \"center\",\n    display: \"none\",\n    flexDirection: \"column\",\n    justifyContent: \"center\",\n    overflow: \"hidden\",\n    position: \"fixed\",\n    zIndex: \"40\",\n    width: \"100%\",\n    height: \"100%\",\n    top: \"0\",\n    left: \"0\"\n  });\n  css(acModalBg, {\n    backgroundColor: \"rgba(10,10,10,.86)\",\n    bottom: \"0\",\n    left: \"0\",\n    position: \"absolute\",\n    right: \"0\",\n    top: \"0\"\n  });\n  css(acModalContent, {\n    margin: \"0 auto\",\n    maxHeight: \"calc(100vh - 80px)\",\n    width: \"80%\",\n    overflow: \"auto\",\n    position: \"relative\"\n  });\n  css(acModalBox, {\n    backgroundColor: \"#fff\",\n    borderRadius: \"6px\",\n    boxShadow: \"0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02)\",\n    color: \"#4a4a4a\",\n    display: \"block\"\n  });\n  css(acModalClose, {\n    position: \"absolute\",\n    right: \"40px\",\n    top: \"40px\",\n    backgroundColor: \"transparent\",\n    borderColor: \"transparent\",\n    color: \"#fff\",\n    fontSize: \"22px\",\n    cursor: \"pointer\"\n  });\n}\n\n//# sourceURL=webpack://DbbButton/./src/js/styles.js?");

/***/ })

/******/ });