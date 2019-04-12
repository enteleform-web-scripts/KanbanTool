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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {


		function _get_ElapsedTime(startTime) {
    const elapsed_MS = (new Date().getTime() - startTime);
    const days = Math.floor(((elapsed_MS / 1000) / 86400));
    const hours = Math.floor(((elapsed_MS / 1000) / 3600) % 24);
    const minutes = Math.floor(((elapsed_MS / 1000) / 60) % 60);
    const seconds = Math.floor((elapsed_MS / 1000) % 60);
    const milliseconds = Math.floor(elapsed_MS % 1000);
    const elapsedTime = (""
        + _get_TimeString_Segment("day", days, [], false)
        + _get_TimeString_Segment("hour", hours, [days], false)
        + _get_TimeString_Segment("minute", minutes, [days, hours], false)
        + _get_TimeString_Segment("second", seconds, [days, hours, minutes], true));
    return elapsedTime;
}
		function _get_TimeString_Segment(title, value, parents, mandatory) {
    const parentValues_Exist = ((parents.length > 0)
        && (Math.max(...parents) > 0));
    if (mandatory || value || parentValues_Exist) {
        const prefix = (parentValues_Exist)
            ? ",  "
            : "";
        title =
            (value == 1)
                ? title
                : `${title}s`;
        return `${prefix}${value}:${title}`;
    }
    else {
        return "";
    }
}

		const elapsedTime  = _get_ElapsedTime(1555042322439)
		const buildMessage = `│  Built  {  ${elapsedTime}  }  Ago  │`
		const divider      = "".padStart((buildMessage.length - 2), "─")

		console.log(""
			+ `\n┌${divider}┐\n`
			+ `${buildMessage}\n`
			+ `└${divider}┘\n`
		)
	

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const KanbanTool_1 = __webpack_require__(4);
class Header {
    constructor({ model, element }) {
        this.children = [];
        this.children_IDs = [];
        this.name = model.name;
        this.id = model.id;
        this.parent_id = model.parent_id;
        this.element = element;
    }
    get path() {
        if (this.parent) {
            return `${this.parent.path}\\${this.name}`;
        }
        else {
            return this.name;
        }
    }
    add_Child(child) {
        child.parent = this;
        this.children.push(child);
        this.children_IDs.push(child.id);
    }
}
function _build_Headers(columnHeader_CellElements, userModels, parentModels) {
    const queue = [...userModels];
    const headers = [];
    while (queue.length > 0) {
        const next_Parent_StartIndex = headers.length;
        parentModels.forEach(parent => {
            const children = queue
                .filter(column => (column.parent_id == parent.id))
                .map(child => ({ child, parent }));
            children.forEach(({ child, parent }) => {
                const child_QueueIndex = queue.indexOf(child);
                const column_WasAdded = (child_QueueIndex == -1);
                if (!column_WasAdded) {
                    queue.splice(child_QueueIndex, 1);
                    const elementIndex = (headers.length);
                    const header = new Header({
                        model: child,
                        element: columnHeader_CellElements[elementIndex],
                    });
                    headers.push(header);
                    if (parent instanceof Header) {
                        parent.add_Child(header);
                    }
                }
            });
        });
        parentModels = headers.slice(next_Parent_StartIndex);
    }
    return headers;
}
const columnHeader_RowElements = $("kt-board > thead").children().toArray();
const columnHeader_CellElements = columnHeader_RowElements
    .flatMap(row => $(row).children().toArray());
const all_ColumnModels = KanbanTool_1.activeBoard.workflowStages().toArray()
    .map(column => column.attributes);
const user_ColumnModels = all_ColumnModels.slice(1);
const root_ColumnModel = all_ColumnModels[0];
const columnHeaders = _build_Headers(columnHeader_CellElements, user_ColumnModels, [root_ColumnModel]);
console.log(columnHeaders);
console.log(columnHeaders.map(x => x.element));
console.log(columnHeaders.map(x => x.path));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.KanbanTool = window.KT;
exports.activeBoard = exports.KanbanTool.boards.models[0];


/***/ })
/******/ ]);