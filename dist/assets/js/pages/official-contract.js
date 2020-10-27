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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/customer_panel/official-contract.js":
/*!****************************************************!*\
  !*** ./src/js/customer_panel/official-contract.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var mousePressed = false;
var lastX, lastY;
var ctx_1, ctx_2;
InitThis_1();
InitThis_2();

function InitThis_1() {
  ctx_1 = document.getElementById('can-1').getContext("2d");
  $('#can-1').mousedown(function (e) {
    mousePressed = true;
    Draw_1(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
  });
  $('#can-1').mousemove(function (e) {
    if (mousePressed) {
      Draw_1(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
    }
  });
  $('#can-1').mouseup(function (e) {
    mousePressed = false;
  });
  $('#can-1').mouseleave(function (e) {
    mousePressed = false;
  });
}

function InitThis_2() {
  ctx_2 = document.getElementById('can-2').getContext("2d");
  $('#can-2').mousedown(function (e) {
    mousePressed = true;
    Draw_2(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
  });
  $('#can-2').mousemove(function (e) {
    if (mousePressed) {
      Draw_2(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
    }
  });
  $('#can-2').mouseup(function (e) {
    mousePressed = false;
  });
  $('#can-2').mouseleave(function (e) {
    mousePressed = false;
  });
}

function Draw_1(x, y, isDown) {
  if (isDown) {
    ctx_1.beginPath();
    ctx_1.strokeStyle = $('#selColor').val();
    ctx_1.lineWidth = $('#selWidth').val();
    ctx_1.lineJoin = "round";
    ctx_1.moveTo(lastX, lastY);
    ctx_1.lineTo(x, y);
    ctx_1.closePath();
    ctx_1.stroke();
  }

  lastX = x;
  lastY = y;
}

function Draw_2(x, y, isDown) {
  if (isDown) {
    ctx_2.beginPath();
    ctx_2.strokeStyle = $('#selColor').val();
    ctx_2.lineWidth = $('#selWidth').val();
    ctx_2.lineJoin = "round";
    ctx_2.moveTo(lastX, lastY);
    ctx_2.lineTo(x, y);
    ctx_2.closePath();
    ctx_2.stroke();
  }

  lastX = x;
  lastY = y;
}

function clearcan_1() {
  // Use the identity matrix while clearing the canvas
  ctx_1.setTransform(1, 0, 0, 1, 0, 0);
  ctx_1.clearRect(0, 0, ctx_1.canvas.width, ctx_1.canvas.height);
}

function clearcan_2() {
  // Use the identity matrix while clearing the canvas
  ctx_2.setTransform(1, 0, 0, 1, 0, 0);
  ctx_2.clearRect(0, 0, ctx_2.canvas.width, ctx_2.canvas.height);
}

$('#can-1-remove').on('click', function () {
  clearcan_1();
});
$('#can-2-remove').on('click', function () {
  clearcan_2();
});

/***/ }),

/***/ 7:
/*!**********************************************************!*\
  !*** multi ./src/js/customer_panel/official-contract.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\PROGRAMING_PROJECTS\Projects\Work Projects\git_customer_panel\customer_panel\src\js\customer_panel\official-contract.js */"./src/js/customer_panel/official-contract.js");


/***/ })

/******/ });