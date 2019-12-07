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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_data_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_style_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_style_css__);
const {math1,math2} = __webpack_require__(1)



console.log(math1(1,2))
console.log(math2(2,2))
console.log(__WEBPACK_IMPORTED_MODULE_0__js_data_js__["a" /* book1 */])



/***/ }),
/* 1 */
/***/ (function(module, exports) {

function math1 (a,b){
    return a + b
}

function math2(a,b) {
    return a * b
}

module.exports = {
    math1,
    math2
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const book1 = {name:'三体',auth:'刘慈欣',price:200}
/* harmony export (immutable) */ __webpack_exports__["a"] = book1;




/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(4);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(8)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// Imports
var getUrl = __webpack_require__(6);
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(7));
// Module
exports.push([module.i, "body {\r\n    /*background-color: red;*/\r\n    background: url(" + ___CSS_LOADER_URL___0___ + ")\r\n}", ""]);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,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");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : null;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ })
/******/ ]);