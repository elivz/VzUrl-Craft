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
/******/ 	__webpack_require__.p = "/cpresources/vzurl/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assetbundles/vzurlfield/src/js/VzUrlField.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assetbundles/vzurlfield/src/css/VzUrlField.css":
/*!************************************************************!*\
  !*** ./src/assetbundles/vzurlfield/src/css/VzUrlField.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assetbundles/vzurlfield/src/css/VzUrlField.css?");

/***/ }),

/***/ "./src/assetbundles/vzurlfield/src/js/VzUrlField.js":
/*!**********************************************************!*\
  !*** ./src/assetbundles/vzurlfield/src/js/VzUrlField.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_VzUrlField_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/VzUrlField.css */ \"./src/assetbundles/vzurlfield/src/css/VzUrlField.css\");\n/* harmony import */ var _css_VzUrlField_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_VzUrlField_css__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * VZ URL plugin for Craft CMS\n *\n * VzUrlField Field JS\n *\n * @author    Eli Van Zoeren\n * @copyright Copyright (c) 2018 Eli Van Zoeren\n * @link      https://github.com/elivz\n * @package   VzUrl\n * @since     2.0.0VzUrlVzUrlField\n */\n\n/*\n * Ajax link validator for VZ URL fieldtype\n * by Eli Van Zoeren - http://elivz.com\n *\n * Depends on: jQuery, Craft\n */\n\n(function ($, Craft, window) {\n  var urlCache = {};\n\n  function VzUrl(field) {\n    var _this = this;\n\n    this.timer = false;\n    this.delay = 500;\n    this.regex = /^(https?|ftp):\\/\\/[^\\s/$.?#].[^\\s]*$/i; // Store elements we will work with\n\n    this.$field = $(\"#\".concat(field));\n    this.$wrapper = this.$field.parent();\n    this.$msg = this.$field.next(); // Check URLs whenever the field changes\n\n    this.$field.on('keyup paste', function () {\n      _this.checkField();\n    }); // Check existing URLs when the page loads\n\n    this.checkField(true);\n  }\n\n  VzUrl.prototype.queueAjax = function () {\n    var previous = new $.Deferred().resolve();\n    return function (fn) {\n      return previous = previous.then(fn);\n    };\n  }();\n\n  VzUrl.prototype.checkField = function checkField(immediate) {\n    // Clear the timeout\n    if (this.timer) {\n      clearTimeout(this.timer);\n    } // Don't bother checking if it's empty\n\n\n    if (this.$field.val() === '') {\n      this.setStatus({\n        status: 'empty'\n      });\n      return;\n    } // Show the \"spinner\"\n\n\n    this.setStatus({\n      status: 'checking'\n    }); // Use a timeout to prevent an ajax call on every keystroke\n\n    if (!immediate) {\n      this.timer = setTimeout($.proxy(this.validate, this), this.delay);\n    } else {\n      this.validate(this.$field);\n    }\n  };\n  /*\n     * Actually send a request the the target URL to see if it exists\n     */\n\n\n  VzUrl.prototype.validate = function validate() {\n    var _this2 = this;\n\n    var url = this.$field.val();\n    var data = {};\n\n    if (url in urlCache) {\n      // Use the cached data\n      data = urlCache[url];\n    } else if (url.charAt(0) === '#' || url.charAt(0) === '?') {\n      // In-page links should always be considered valid\n      data.status = 'valid';\n    } else if (!url.match(this.regex)) {\n      // That's not even a real URL\n      data.status = 'invalid';\n    } else {\n      // Ajax call to proxy to check the url\n      this.queueAjax(function () {\n        var safeUrl = url.replace('http', 'ht^tp'); // Mod_security doesn't like \"http://\" in posted data\n\n        return Craft.postActionRequest('vzUrl/validation/check', {\n          url: safeUrl\n        }).done(function (response) {\n          // Make sure the URL we are checking is still there\n          if (response.original !== _this2.$field.val()) {\n            return;\n          } // Show or hide the error message, as needed\n\n\n          if (response.http_code >= 200 && response.http_code < 400) {\n            if (response.original === response.final_url) {\n              // The URL is valid\n              data.status = 'valid';\n            } else {\n              // The URL is a redirect\n              data.status = 'redirect';\n              data.redirect = response.final_url;\n            }\n          } else {\n            data.status = 'invalid';\n          }\n        }).fail(function () {\n          data.status = 'invalid';\n        }).always(function () {\n          _this2.setStatus(data);\n\n          urlCache[url] = data;\n        });\n      });\n    }\n\n    if ('status' in data) {\n      this.setStatus(data);\n    }\n  };\n  /*\n     * Set the styling and error message as needed\n     */\n\n\n  VzUrl.prototype.setStatus = function setStatus(data) {\n    var _this3 = this;\n\n    // Reset field\n    this.$field.prev().remove();\n    this.$wrapper.removeClass('empty checking errors valid invalid redirect'); // Reset message\n\n    this.$msg.empty();\n\n    if (data.status === 'empty') {\n      return;\n    }\n\n    if (data.status === 'invalid') {\n      this.$msg.text(Craft.t('This URL appears to be invalid'));\n      this.$wrapper.addClass('errors');\n    } else if (data.status === 'redirect') {\n      if (this.$field.hasClass('follow-redirects')) {\n        this.$wrapper.addClass('errors');\n        this.$msg.html(\"<span>\".concat(Craft.t('Redirects to'), \" \").concat(data.redirect, \"</span>\"));\n        $('<a/>', {\n          text: Craft.t('Update'),\n          click: function click(event) {\n            // Replace the field value with the redirect target\n            _this3.$field.val(data.redirect);\n\n            _this3.validate(_this3.$field);\n\n            event.preventDefault();\n          }\n        }).appendTo(this.$msg);\n      } else {\n        data.status = 'valid';\n      }\n    }\n\n    this.$wrapper.addClass(data.status); // Add a \"Open Page link\"\n\n    if (data.status !== 'empty' && data.status !== 'checking') {\n      var $visitLink = $('<a/>', {\n        href: this.$field.val(),\n        class: 'vzurl-visit',\n        target: '_blank',\n        'data-icon': 'world',\n        title: \"\".concat(Craft.t('Visit URL'), \": \").concat(this.$field.val())\n      });\n      this.$field.before($visitLink);\n    }\n  }; // Export the main function\n\n\n  window.VzUrl = VzUrl;\n})(window.jQuery, window.Craft, window);\n\n//# sourceURL=webpack:///./src/assetbundles/vzurlfield/src/js/VzUrlField.js?");

/***/ })

/******/ });