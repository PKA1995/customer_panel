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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/customer_panel/edit-profile.js":
/*!***********************************************!*\
  !*** ./src/js/customer_panel/edit-profile.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var edit = {
    validate: function validate() {
      var name = document.getElementById('name'),
          family = document.getElementById('family'),
          email = document.getElementById('email'),
          mobile = document.getElementById('mobile'),
          password = document.getElementById('password'),
          form = document.getElementById('edit-form'),
          email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          form_status = [],
          number_regex = /^[0-9]*$/;

      mobile.onkeypress = function (e) {
        if (!number_regex.test(e.key) && e.keyCode !== 8 && e.keyCode !== 13 && e.keyCode !== 16 && e.keyCode !== 32) {
          e.preventDefault();
        }
      };

      form.onsubmit = function () {
        form_status = [];

        if (!name.value.trim()) {
          name.nextElementSibling.textContent = 'الزامی است';
          name.classList.add('error');
          form_status.push(false);
        } else {
          name.nextElementSibling.textContent = null;
          name.classList.remove('error');
        }

        if (!family.value.trim()) {
          family.nextElementSibling.textContent = 'الزامی است';
          family.classList.add('error');
          form_status.push(false);
        } else {
          family.nextElementSibling.textContent = null;
          family.classList.remove('error');
        }

        if (!email.value.trim()) {
          email.nextElementSibling.textContent = 'الزامی است';
          email.classList.add('error');
          form_status.push(false);
        } else {
          if (!email_regex.test(email.value.trim())) {
            email.nextElementSibling.textContent = 'نامعتبر است';
            email.classList.add('error');
            form_status.push(false);
          } else {
            email.nextElementSibling.textContent = null;
            email.classList.remove('error');
          }
        }

        if (!mobile.value.trim()) {
          mobile.nextElementSibling.textContent = 'الزامی است';
          mobile.classList.add('error');
          form_status.push(false);
        } else {
          if (mobile.value.length < 11) {
            mobile.nextElementSibling.textContent = '11 رقم باشد';
            mobile.classList.add('error');
            form_status.push(false);
          } else if (!number_regex.test(mobile.value.trim())) {
            mobile.nextElementSibling.textContent = 'نامعتبر است';
            mobile.classList.add('error');
            form_status.push(false);
          } else {
            mobile.nextElementSibling.textContent = null;
            mobile.classList.remove('error');
          }
        }

        return !form_status.includes(false);
      };
    },
    init: function init() {
      this.validate();
    }
  };
  edit.init();
})();

/***/ }),

/***/ 4:
/*!*****************************************************!*\
  !*** multi ./src/js/customer_panel/edit-profile.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\PROGRAMING_PROJECTS\Projects\Work Projects\sapren_customer_panel\src\js\customer_panel\edit-profile.js */"./src/js/customer_panel/edit-profile.js");


/***/ })

/******/ });