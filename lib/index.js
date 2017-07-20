exports["banner"] =
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var classNames = __webpack_require__(2);
__webpack_require__(3);
// 图片总数
var TOTAL_NUMBER_OF_IMG = 4;
//单位秒(s)
var TIME_INTERVAL = 2;
var Banner = (function (_super) {
    __extends(Banner, _super);
    function Banner(props) {
        var _this = _super.call(this, props) || this;
        _this._setTimer = function () {
            return setInterval(function () {
                var runningOrder = _this.state.runningOrder;
                if (runningOrder >= TOTAL_NUMBER_OF_IMG - 1) {
                    _this.setState({
                        runningOrder: 0
                    });
                }
                else {
                    runningOrder++;
                    _this.setState({
                        runningOrder: runningOrder
                    });
                }
            }, TIME_INTERVAL * 1000);
        };
        _this._onDot = function (event) {
            var elem = null;
            if (_this.timer) {
                clearInterval(_this.timer);
                _this.timer = null;
            }
            for (var i = 0; i < TOTAL_NUMBER_OF_IMG; i++) {
                elem = document.getElementById("" + i);
                if (elem === event.target) {
                    _this.setState({
                        runningOrder: i
                    });
                }
            }
            _this.timer = _this._setTimer();
        };
        _this.state = {
            runningOrder: 0
        };
        return _this;
    }
    Banner.prototype.componentDidMount = function () {
        this.timer = this._setTimer();
    };
    Banner.prototype.componentWillUnmount = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    Banner.prototype._renderImgs = function (runningOrder, imgSourceList) {
        if (imgSourceList === void 0) { imgSourceList = []; }
        var imgsList = [];
        for (var i = 0; i < TOTAL_NUMBER_OF_IMG; i++) {
            imgsList.push(React.createElement("img", { className: classNames("sx-image-img", { "sx-image-img__active": runningOrder === i }), key: "img" + i, src: imgSourceList[i], alt: "" + i }));
        }
        return imgsList;
    };
    Banner.prototype._renderDots = function (runningOrder) {
        var dotList = [];
        for (var i = 0; i < TOTAL_NUMBER_OF_IMG; i++) {
            dotList.push(React.createElement("span", { id: "" + i, key: "dot" + i, className: classNames("sx-dot-span", { "sx-dot-span__active": runningOrder === i }) }));
        }
        return dotList;
    };
    Banner.prototype.render = function () {
        var runningOrder = this.state.runningOrder;
        var imgSourceList = this.props.imgSourceList;
        return (React.createElement("div", { className: "sx-banner-wrapper" },
            React.createElement("div", { className: "sx-image" }, this._renderImgs(runningOrder, imgSourceList)),
            React.createElement("div", { className: "sx-dot", onClick: this._onDot }, this._renderDots(runningOrder))));
    };
    Banner.defaultProps = {
        imgSourceList: []
    };
    return Banner;
}(React.Component));
exports.Banner = Banner;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("React");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".sx-banner-wrapper {\n  height: 200px;\n  margin-bottom: 24px;\n}\n.sx-image {\n  position: relative;\n  width: 100%;\n  height: 180px;\n}\n.sx-image-img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  visibility: hidden;\n  width: 100%;\n  height: 100%;\n}\n.sx-image-img__active {\n  visibility: visible;\n}\n.sx-dot {\n  width: 100%;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n}\n.sx-dot-span {\n  display: inline-block;\n  margin-left: 5px;\n  width: 5px;\n  height: 5px;\n  border-radius: 100%;\n  background-color: gray;\n  vertical-align: bottom;\n}\n.sx-dot-span__active {\n  background-color: #ff6f00;\n}\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ })
/******/ ]);