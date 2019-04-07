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
/******/ 	return __webpack_require__(__webpack_require__.s = "./__src__/pages/__main__/__main__.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./__src__/Extensions/FunctionBar/TEMP.ts":
/*!************************************************!*\
  !*** ./__src__/Extensions/FunctionBar/TEMP.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst CSS_1 = __webpack_require__(/*! ~/Utils/CSS */ \"./__src__/Utils/CSS.ts\");\r\nconsole.log(\"@@@ TEMP\");\r\nCSS_1.CSS.apply(__dirname);\r\n\n/* WEBPACK VAR INJECTION */}.call(this, \"__src__\\\\Extensions\\\\FunctionBar\"))\n\n//# sourceURL=webpack:///./__src__/Extensions/FunctionBar/TEMP.ts?");

/***/ }),

/***/ "./__src__/Settings.json":
/*!*******************************!*\
  !*** ./__src__/Settings.json ***!
  \*******************************/
/*! exports provided: baseURL, _, default */
/***/ (function(module) {

eval("module.exports = {\"baseURL\":\"https://enteleform-extensions.github.io/KanbanTool\",\"_\":\"\"};\n\n//# sourceURL=webpack:///./__src__/Settings.json?");

/***/ }),

/***/ "./__src__/Utils/CSS.ts":
/*!******************************!*\
  !*** ./__src__/Utils/CSS.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Settings = __webpack_require__(/*! ~/Settings.json */ \"./__src__/Settings.json\");\r\nclass CSS {\r\n    static async apply(filePath) {\r\n        console.log(\">>> CSS >>>\", filePath);\r\n    }\r\n}\r\nexports.CSS = CSS;\r\nfunction _apply_CSS(css) {\r\n    console.log(\"!!!!!!!!!!!!!!!!!!!!!!!!\");\r\n    console.log(css);\r\n    console.log(\"!!!!!!!!!!!!!!!!!!!!!!!!\");\r\n    $(\"<style>\")\r\n        .prop(\"type\", \"text/css\")\r\n        .html(css)\r\n        .appendTo(\"head\");\r\n}\r\nfunction _add_BaseURL(filePath) {\r\n    const baseURL = Settings.baseURL;\r\n    let url = filePath.replace(/^\\.?\\//, `${baseURL}/`);\r\n    if (!url.startsWith(baseURL)) {\r\n        url = `${baseURL}/${filePath}`;\r\n    }\r\n    return url;\r\n}\r\n\n\n//# sourceURL=webpack:///./__src__/Utils/CSS.ts?");

/***/ }),

/***/ "./__src__/pages/__main__/__main__.ts":
/*!********************************************!*\
  !*** ./__src__/pages/__main__/__main__.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconsole.log(\"@@@ __main__\");\r\n__webpack_require__(/*! ~/Extensions/FunctionBar/TEMP */ \"./__src__/Extensions/FunctionBar/TEMP.ts\");\r\n\n\n//# sourceURL=webpack:///./__src__/pages/__main__/__main__.ts?");

/***/ })

/******/ });