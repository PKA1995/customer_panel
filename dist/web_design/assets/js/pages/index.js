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
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/js/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/wow.js/dist/wow.js":
/*!*****************************************!*\
  !*** ./node_modules/wow.js/dist/wow.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else { var mod; }\n})(this, function (module, exports) {\n  'use strict';\n\n  Object.defineProperty(exports, \"__esModule\", {\n    value: true\n  });\n\n  var _class, _temp;\n\n  function _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n      throw new TypeError(\"Cannot call a class as a function\");\n    }\n  }\n\n  var _createClass = function () {\n    function defineProperties(target, props) {\n      for (var i = 0; i < props.length; i++) {\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n      }\n    }\n\n    return function (Constructor, protoProps, staticProps) {\n      if (protoProps) defineProperties(Constructor.prototype, protoProps);\n      if (staticProps) defineProperties(Constructor, staticProps);\n      return Constructor;\n    };\n  }();\n\n  function isIn(needle, haystack) {\n    return haystack.indexOf(needle) >= 0;\n  }\n\n  function extend(custom, defaults) {\n    for (var key in defaults) {\n      if (custom[key] == null) {\n        var value = defaults[key];\n        custom[key] = value;\n      }\n    }\n    return custom;\n  }\n\n  function isMobile(agent) {\n    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent)\n    );\n  }\n\n  function createEvent(event) {\n    var bubble = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];\n    var cancel = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];\n    var detail = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];\n\n    var customEvent = void 0;\n    if (document.createEvent != null) {\n      // W3C DOM\n      customEvent = document.createEvent('CustomEvent');\n      customEvent.initCustomEvent(event, bubble, cancel, detail);\n    } else if (document.createEventObject != null) {\n      // IE DOM < 9\n      customEvent = document.createEventObject();\n      customEvent.eventType = event;\n    } else {\n      customEvent.eventName = event;\n    }\n\n    return customEvent;\n  }\n\n  function emitEvent(elem, event) {\n    if (elem.dispatchEvent != null) {\n      // W3C DOM\n      elem.dispatchEvent(event);\n    } else if (event in (elem != null)) {\n      elem[event]();\n    } else if ('on' + event in (elem != null)) {\n      elem['on' + event]();\n    }\n  }\n\n  function addEvent(elem, event, fn) {\n    if (elem.addEventListener != null) {\n      // W3C DOM\n      elem.addEventListener(event, fn, false);\n    } else if (elem.attachEvent != null) {\n      // IE DOM\n      elem.attachEvent('on' + event, fn);\n    } else {\n      // fallback\n      elem[event] = fn;\n    }\n  }\n\n  function removeEvent(elem, event, fn) {\n    if (elem.removeEventListener != null) {\n      // W3C DOM\n      elem.removeEventListener(event, fn, false);\n    } else if (elem.detachEvent != null) {\n      // IE DOM\n      elem.detachEvent('on' + event, fn);\n    } else {\n      // fallback\n      delete elem[event];\n    }\n  }\n\n  function getInnerHeight() {\n    if ('innerHeight' in window) {\n      return window.innerHeight;\n    }\n\n    return document.documentElement.clientHeight;\n  }\n\n  // Minimalistic WeakMap shim, just in case.\n  var WeakMap = window.WeakMap || window.MozWeakMap || function () {\n    function WeakMap() {\n      _classCallCheck(this, WeakMap);\n\n      this.keys = [];\n      this.values = [];\n    }\n\n    _createClass(WeakMap, [{\n      key: 'get',\n      value: function get(key) {\n        for (var i = 0; i < this.keys.length; i++) {\n          var item = this.keys[i];\n          if (item === key) {\n            return this.values[i];\n          }\n        }\n        return undefined;\n      }\n    }, {\n      key: 'set',\n      value: function set(key, value) {\n        for (var i = 0; i < this.keys.length; i++) {\n          var item = this.keys[i];\n          if (item === key) {\n            this.values[i] = value;\n            return this;\n          }\n        }\n        this.keys.push(key);\n        this.values.push(value);\n        return this;\n      }\n    }]);\n\n    return WeakMap;\n  }();\n\n  // Dummy MutationObserver, to avoid raising exceptions.\n  var MutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (_temp = _class = function () {\n    function MutationObserver() {\n      _classCallCheck(this, MutationObserver);\n\n      if (typeof console !== 'undefined' && console !== null) {\n        console.warn('MutationObserver is not supported by your browser.');\n        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');\n      }\n    }\n\n    _createClass(MutationObserver, [{\n      key: 'observe',\n      value: function observe() {}\n    }]);\n\n    return MutationObserver;\n  }(), _class.notSupported = true, _temp);\n\n  // getComputedStyle shim, from http://stackoverflow.com/a/21797294\n  var getComputedStyle = window.getComputedStyle || function getComputedStyle(el) {\n    var getComputedStyleRX = /(\\-([a-z]){1})/g;\n    return {\n      getPropertyValue: function getPropertyValue(prop) {\n        if (prop === 'float') {\n          prop = 'styleFloat';\n        }\n        if (getComputedStyleRX.test(prop)) {\n          prop.replace(getComputedStyleRX, function (_, _char) {\n            return _char.toUpperCase();\n          });\n        }\n        var currentStyle = el.currentStyle;\n\n        return (currentStyle != null ? currentStyle[prop] : void 0) || null;\n      }\n    };\n  };\n\n  var WOW = function () {\n    function WOW() {\n      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];\n\n      _classCallCheck(this, WOW);\n\n      this.defaults = {\n        boxClass: 'wow',\n        animateClass: 'animated',\n        offset: 0,\n        mobile: true,\n        live: true,\n        callback: null,\n        scrollContainer: null\n      };\n\n      this.animate = function animateFactory() {\n        if ('requestAnimationFrame' in window) {\n          return function (callback) {\n            return window.requestAnimationFrame(callback);\n          };\n        }\n        return function (callback) {\n          return callback();\n        };\n      }();\n\n      this.vendors = ['moz', 'webkit'];\n\n      this.start = this.start.bind(this);\n      this.resetAnimation = this.resetAnimation.bind(this);\n      this.scrollHandler = this.scrollHandler.bind(this);\n      this.scrollCallback = this.scrollCallback.bind(this);\n      this.scrolled = true;\n      this.config = extend(options, this.defaults);\n      if (options.scrollContainer != null) {\n        this.config.scrollContainer = document.querySelector(options.scrollContainer);\n      }\n      // Map of elements to animation names:\n      this.animationNameCache = new WeakMap();\n      this.wowEvent = createEvent(this.config.boxClass);\n    }\n\n    _createClass(WOW, [{\n      key: 'init',\n      value: function init() {\n        this.element = window.document.documentElement;\n        if (isIn(document.readyState, ['interactive', 'complete'])) {\n          this.start();\n        } else {\n          addEvent(document, 'DOMContentLoaded', this.start);\n        }\n        this.finished = [];\n      }\n    }, {\n      key: 'start',\n      value: function start() {\n        var _this = this;\n\n        this.stopped = false;\n        this.boxes = [].slice.call(this.element.querySelectorAll('.' + this.config.boxClass));\n        this.all = this.boxes.slice(0);\n        if (this.boxes.length) {\n          if (this.disabled()) {\n            this.resetStyle();\n          } else {\n            for (var i = 0; i < this.boxes.length; i++) {\n              var box = this.boxes[i];\n              this.applyStyle(box, true);\n            }\n          }\n        }\n        if (!this.disabled()) {\n          addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);\n          addEvent(window, 'resize', this.scrollHandler);\n          this.interval = setInterval(this.scrollCallback, 50);\n        }\n        if (this.config.live) {\n          var mut = new MutationObserver(function (records) {\n            for (var j = 0; j < records.length; j++) {\n              var record = records[j];\n              for (var k = 0; k < record.addedNodes.length; k++) {\n                var node = record.addedNodes[k];\n                _this.doSync(node);\n              }\n            }\n            return undefined;\n          });\n          mut.observe(document.body, {\n            childList: true,\n            subtree: true\n          });\n        }\n      }\n    }, {\n      key: 'stop',\n      value: function stop() {\n        this.stopped = true;\n        removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);\n        removeEvent(window, 'resize', this.scrollHandler);\n        if (this.interval != null) {\n          clearInterval(this.interval);\n        }\n      }\n    }, {\n      key: 'sync',\n      value: function sync() {\n        if (MutationObserver.notSupported) {\n          this.doSync(this.element);\n        }\n      }\n    }, {\n      key: 'doSync',\n      value: function doSync(element) {\n        if (typeof element === 'undefined' || element === null) {\n          element = this.element;\n        }\n        if (element.nodeType !== 1) {\n          return;\n        }\n        element = element.parentNode || element;\n        var iterable = element.querySelectorAll('.' + this.config.boxClass);\n        for (var i = 0; i < iterable.length; i++) {\n          var box = iterable[i];\n          if (!isIn(box, this.all)) {\n            this.boxes.push(box);\n            this.all.push(box);\n            if (this.stopped || this.disabled()) {\n              this.resetStyle();\n            } else {\n              this.applyStyle(box, true);\n            }\n            this.scrolled = true;\n          }\n        }\n      }\n    }, {\n      key: 'show',\n      value: function show(box) {\n        this.applyStyle(box);\n        box.className = box.className + ' ' + this.config.animateClass;\n        if (this.config.callback != null) {\n          this.config.callback(box);\n        }\n        emitEvent(box, this.wowEvent);\n\n        addEvent(box, 'animationend', this.resetAnimation);\n        addEvent(box, 'oanimationend', this.resetAnimation);\n        addEvent(box, 'webkitAnimationEnd', this.resetAnimation);\n        addEvent(box, 'MSAnimationEnd', this.resetAnimation);\n\n        return box;\n      }\n    }, {\n      key: 'applyStyle',\n      value: function applyStyle(box, hidden) {\n        var _this2 = this;\n\n        var duration = box.getAttribute('data-wow-duration');\n        var delay = box.getAttribute('data-wow-delay');\n        var iteration = box.getAttribute('data-wow-iteration');\n\n        return this.animate(function () {\n          return _this2.customStyle(box, hidden, duration, delay, iteration);\n        });\n      }\n    }, {\n      key: 'resetStyle',\n      value: function resetStyle() {\n        for (var i = 0; i < this.boxes.length; i++) {\n          var box = this.boxes[i];\n          box.style.visibility = 'visible';\n        }\n        return undefined;\n      }\n    }, {\n      key: 'resetAnimation',\n      value: function resetAnimation(event) {\n        if (event.type.toLowerCase().indexOf('animationend') >= 0) {\n          var target = event.target || event.srcElement;\n          target.className = target.className.replace(this.config.animateClass, '').trim();\n        }\n      }\n    }, {\n      key: 'customStyle',\n      value: function customStyle(box, hidden, duration, delay, iteration) {\n        if (hidden) {\n          this.cacheAnimationName(box);\n        }\n        box.style.visibility = hidden ? 'hidden' : 'visible';\n\n        if (duration) {\n          this.vendorSet(box.style, { animationDuration: duration });\n        }\n        if (delay) {\n          this.vendorSet(box.style, { animationDelay: delay });\n        }\n        if (iteration) {\n          this.vendorSet(box.style, { animationIterationCount: iteration });\n        }\n        this.vendorSet(box.style, { animationName: hidden ? 'none' : this.cachedAnimationName(box) });\n\n        return box;\n      }\n    }, {\n      key: 'vendorSet',\n      value: function vendorSet(elem, properties) {\n        for (var name in properties) {\n          if (properties.hasOwnProperty(name)) {\n            var value = properties[name];\n            elem['' + name] = value;\n            for (var i = 0; i < this.vendors.length; i++) {\n              var vendor = this.vendors[i];\n              elem['' + vendor + name.charAt(0).toUpperCase() + name.substr(1)] = value;\n            }\n          }\n        }\n      }\n    }, {\n      key: 'vendorCSS',\n      value: function vendorCSS(elem, property) {\n        var style = getComputedStyle(elem);\n        var result = style.getPropertyCSSValue(property);\n        for (var i = 0; i < this.vendors.length; i++) {\n          var vendor = this.vendors[i];\n          result = result || style.getPropertyCSSValue('-' + vendor + '-' + property);\n        }\n        return result;\n      }\n    }, {\n      key: 'animationName',\n      value: function animationName(box) {\n        var aName = void 0;\n        try {\n          aName = this.vendorCSS(box, 'animation-name').cssText;\n        } catch (error) {\n          // Opera, fall back to plain property value\n          aName = getComputedStyle(box).getPropertyValue('animation-name');\n        }\n\n        if (aName === 'none') {\n          return ''; // SVG/Firefox, unable to get animation name?\n        }\n\n        return aName;\n      }\n    }, {\n      key: 'cacheAnimationName',\n      value: function cacheAnimationName(box) {\n        // https://bugzilla.mozilla.org/show_bug.cgi?id=921834\n        // box.dataset is not supported for SVG elements in Firefox\n        return this.animationNameCache.set(box, this.animationName(box));\n      }\n    }, {\n      key: 'cachedAnimationName',\n      value: function cachedAnimationName(box) {\n        return this.animationNameCache.get(box);\n      }\n    }, {\n      key: 'scrollHandler',\n      value: function scrollHandler() {\n        this.scrolled = true;\n      }\n    }, {\n      key: 'scrollCallback',\n      value: function scrollCallback() {\n        if (this.scrolled) {\n          this.scrolled = false;\n          var results = [];\n          for (var i = 0; i < this.boxes.length; i++) {\n            var box = this.boxes[i];\n            if (box) {\n              if (this.isVisible(box)) {\n                this.show(box);\n                continue;\n              }\n              results.push(box);\n            }\n          }\n          this.boxes = results;\n          if (!this.boxes.length && !this.config.live) {\n            this.stop();\n          }\n        }\n      }\n    }, {\n      key: 'offsetTop',\n      value: function offsetTop(element) {\n        // SVG elements don't have an offsetTop in Firefox.\n        // This will use their nearest parent that has an offsetTop.\n        // Also, using ('offsetTop' of element) causes an exception in Firefox.\n        while (element.offsetTop === undefined) {\n          element = element.parentNode;\n        }\n        var top = element.offsetTop;\n        while (element.offsetParent) {\n          element = element.offsetParent;\n          top += element.offsetTop;\n        }\n        return top;\n      }\n    }, {\n      key: 'isVisible',\n      value: function isVisible(box) {\n        var offset = box.getAttribute('data-wow-offset') || this.config.offset;\n        var viewTop = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset;\n        var viewBottom = viewTop + Math.min(this.element.clientHeight, getInnerHeight()) - offset;\n        var top = this.offsetTop(box);\n        var bottom = top + box.clientHeight;\n\n        return top <= viewBottom && bottom >= viewTop;\n      }\n    }, {\n      key: 'disabled',\n      value: function disabled() {\n        return !this.config.mobile && isMobile(navigator.userAgent);\n      }\n    }]);\n\n    return WOW;\n  }();\n\n  exports.default = WOW;\n  module.exports = exports['default'];\n});\n\n\n//# sourceURL=webpack:///./node_modules/wow.js/dist/wow.js?");

/***/ }),

/***/ "./resources/js/pages/index.js":
/*!*************************************!*\
  !*** ./resources/js/pages/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wow.js */ \"./node_modules/wow.js/dist/wow.js\");\n/* harmony import */ var wow_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wow_js__WEBPACK_IMPORTED_MODULE_0__);\n\nnew wow_js__WEBPACK_IMPORTED_MODULE_0___default.a().init();\n\n//# sourceURL=webpack:///./resources/js/pages/index.js?");

/***/ })

/******/ });