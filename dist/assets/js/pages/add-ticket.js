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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/customer_panel/add-ticket.js":
/*!*********************************************!*\
  !*** ./src/js/customer_panel/add-ticket.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var attach_input = document.querySelector('.upload-file-btn input'),
      attach_file_name = document.querySelector('#attach-file-name span:last-child');
  var _validFileExtensions = [".jpg", ".jpeg", ".pdf", ".png", ".txt", ".docx"];

  function ValidateSingleInput(oInput) {
    if (oInput.type == "file") {
      var sFileName = oInput.value;

      if (sFileName.length > 0) {
        var blnValid = false;

        for (var j = 0; j < _validFileExtensions.length; j++) {
          var sCurExtension = _validFileExtensions[j];

          if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
            blnValid = true;
            break;
          }
        }

        if (!blnValid) {
          alert("فایل انتخابی باید دارای فرمت jpg یا jpeg یا pdf یا png یا txt یا docx");
          oInput.value = "";
          return false;
        }
      }
    }

    return true;
  }

  attach_input.onchange = function () {
    ValidateSingleInput(attach_input);
    attach_file_name.textContent = attach_input.files[0].name;
  };

  function validateForm() {
    var add_ticket_form = document.getElementById('add-ticket-form'),
        ticket_title = document.getElementById('ticket-title'),
        ticket_section = document.getElementById('section'),
        ticket_text = document.getElementById('ticket-text'),
        form_status = [];

    add_ticket_form.onsubmit = function () {
      form_status = [];

      if (!ticket_title.value.trim()) {
        ticket_title.nextElementSibling.textContent = 'الزامی است';
        ticket_title.classList.add('error');
        form_status.push(false);
      } else {
        ticket_title.nextElementSibling.textContent = null;
        ticket_title.classList.remove('error');
      }

      if (!ticket_section.value.trim()) {
        ticket_section.nextElementSibling.textContent = 'الزامی است';
        ticket_section.classList.add('error');
        form_status.push(false);
      } else {
        ticket_section.nextElementSibling.textContent = null;
        ticket_section.classList.remove('error');
      }

      if (!ticket_text.value.trim()) {
        ticket_text.nextElementSibling.textContent = 'الزامی است';
        ticket_text.classList.add('error');
        form_status.push(false);
      } else {
        ticket_text.nextElementSibling.textContent = null;
        ticket_text.classList.remove('error');
      }

      return !form_status.includes(false);
    };
  }

  validateForm();
})();

/***/ }),

/***/ 6:
/*!***************************************************!*\
  !*** multi ./src/js/customer_panel/add-ticket.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\PROGRAMING_PROJECTS\Projects\Work Projects\git_customer_panel\customer_panel\src\js\customer_panel\add-ticket.js */"./src/js/customer_panel/add-ticket.js");


/***/ })

/******/ });