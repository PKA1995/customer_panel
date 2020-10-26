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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/customer_panel/common_customer.js":
/*!**************************************************!*\
  !*** ./src/js/customer_panel/common_customer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var common = {
  logout_link: function logout_link() {
    var logout_btn = document.getElementById('logout_btn'),
        logout_form = document.getElementById('logout_form');

    logout_btn.onclick = function (e) {
      e.preventDefault();
      logout_form.submit();
    };
  },
  meanmenu: function meanmenu() {
    $(window).on('scroll', function () {
      var navbar_area = $('.navbar-area');
      if ($(this).scrollTop() > 50) navbar_area.addClass('is-sticky');else navbar_area.removeClass('is-sticky');
    });
    $('.mean-menu').meanmenu({
      meanScreenWidth: "991"
    });
    var prevScrollpos = window.pageYOffset;

    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
      } else {
        document.getElementById("header").style.top = "-106px";
      }

      prevScrollpos = currentScrollPos;
    };
  },
  init: function init() {
    this.logout_link();
    this.meanmenu();
  }
};
common.init();

/***/ }),

/***/ "./src/sass/customer_panel/add-ticket.sass":
/*!*************************************************!*\
  !*** ./src/sass/customer_panel/add-ticket.sass ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/customer_panel/common.sass":
/*!*********************************************!*\
  !*** ./src/sass/customer_panel/common.sass ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/customer_panel/edit-profile.sass":
/*!***************************************************!*\
  !*** ./src/sass/customer_panel/edit-profile.sass ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/customer_panel/home.sass":
/*!*******************************************!*\
  !*** ./src/sass/customer_panel/home.sass ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/customer_panel/login-sign-up.sass":
/*!****************************************************!*\
  !*** ./src/sass/customer_panel/login-sign-up.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/customer_panel/personalFactor.sass":
/*!*****************************************************!*\
  !*** ./src/sass/customer_panel/personalFactor.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/customer_panel/profile.sass":
/*!**********************************************!*\
  !*** ./src/sass/customer_panel/profile.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/customer_panel/project-detail.sass":
/*!*****************************************************!*\
  !*** ./src/sass/customer_panel/project-detail.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/customer_panel/projects.sass":
/*!***********************************************!*\
  !*** ./src/sass/customer_panel/projects.sass ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/customer_panel/ticket-list.sass":
/*!**************************************************!*\
  !*** ./src/sass/customer_panel/ticket-list.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/customer_panel/ticket-single.sass":
/*!****************************************************!*\
  !*** ./src/sass/customer_panel/ticket-single.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/js/customer_panel/common_customer.js ./src/sass/customer_panel/common.sass ./src/sass/customer_panel/projects.sass ./src/sass/customer_panel/project-detail.sass ./src/sass/customer_panel/ticket-list.sass ./src/sass/customer_panel/ticket-single.sass ./src/sass/customer_panel/home.sass ./src/sass/customer_panel/login-sign-up.sass ./src/sass/customer_panel/profile.sass ./src/sass/customer_panel/edit-profile.sass ./src/sass/customer_panel/add-ticket.sass ./src/sass/customer_panel/personalFactor.sass ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\PROGRAMING_PROJECTS\Projects\Work Projects\sapren_customer_panel\src\js\customer_panel\common_customer.js */"./src/js/customer_panel/common_customer.js");
__webpack_require__(/*! C:\PROGRAMING_PROJECTS\Projects\Work Projects\sapren_customer_panel\src\sass\customer_panel\common.sass */"./src/sass/customer_panel/common.sass");
__webpack_require__(/*! C:\PROGRAMING_PROJECTS\Projects\Work Projects\sapren_customer_panel\src\sass\customer_panel\projects.sass */"./src/sass/customer_panel/projects.sass");
__webpack_require__(/*! C:\PROGRAMING_PROJECTS\Projects\Work Projects\sapren_customer_panel\src\sass\customer_panel\project-detail.sass */"./src/sass/customer_panel/project-detail.sass");
__webpack_require__(/*! C:\PROGRAMING_PROJECTS\Projects\Work Projects\sapren_customer_panel\src\sass\customer_panel\ticket-list.sass */"./src/sass/customer_panel/ticket-list.sass");
__webpack_require__(/*! C:\PROGRAMING_PROJECTS\Projects\Work Projects\sapren_customer_panel\src\sass\customer_panel\ticket-single.sass */"./src/sass/customer_panel/ticket-single.sass");
__webpack_require__(/*! C:\PROGRAMING_PROJECTS\Projects\Work Projects\sapren_customer_panel\src\sass\customer_panel\home.sass */"./src/sass/customer_panel/home.sass");
__webpack_require__(/*! C:\PROGRAMING_PROJECTS\Projects\Work Projects\sapren_customer_panel\src\sass\customer_panel\login-sign-up.sass */"./src/sass/customer_panel/login-sign-up.sass");
__webpack_require__(/*! C:\PROGRAMING_PROJECTS\Projects\Work Projects\sapren_customer_panel\src\sass\customer_panel\profile.sass */"./src/sass/customer_panel/profile.sass");
__webpack_require__(/*! C:\PROGRAMING_PROJECTS\Projects\Work Projects\sapren_customer_panel\src\sass\customer_panel\edit-profile.sass */"./src/sass/customer_panel/edit-profile.sass");
__webpack_require__(/*! C:\PROGRAMING_PROJECTS\Projects\Work Projects\sapren_customer_panel\src\sass\customer_panel\add-ticket.sass */"./src/sass/customer_panel/add-ticket.sass");
module.exports = __webpack_require__(/*! C:\PROGRAMING_PROJECTS\Projects\Work Projects\sapren_customer_panel\src\sass\customer_panel\personalFactor.sass */"./src/sass/customer_panel/personalFactor.sass");


/***/ })

/******/ });