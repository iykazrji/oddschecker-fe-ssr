module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/error-handler.js":
/*!******************************!*\
  !*** ./api/error-handler.js ***!
  \******************************/
/*! exports provided: InvalidArgumentsError, ValidationError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidArgumentsError", function() { return InvalidArgumentsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationError", function() { return ValidationError; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/wrapNativeSuper */ "./node_modules/@babel/runtime-corejs2/helpers/esm/wrapNativeSuper.js");





var InvalidArgumentsError =
/*#__PURE__*/
function (_Error) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(InvalidArgumentsError, _Error);

  function InvalidArgumentsError(message) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InvalidArgumentsError);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(InvalidArgumentsError).call(this, message));
    _this.name = "InvalidArgumentsError";
    _this.message = message;
    return _this;
  }

  return InvalidArgumentsError;
}(Object(_babel_runtime_corejs2_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(Error));
var ValidationError =
/*#__PURE__*/
function (_Error2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ValidationError, _Error2);

  function ValidationError(message) {
    var _this2;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ValidationError);

    _this2 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(ValidationError).call(this, message));
    _this2.name = "ValidationError";
    _this2.message = message;
    return _this2;
  }

  return ValidationError;
}(Object(_babel_runtime_corejs2_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(Error));

/***/ }),

/***/ "./api/website-odds-service.js":
/*!*************************************!*\
  !*** ./api/website-odds-service.js ***!
  \*************************************/
/*! exports provided: getAllGamesInfo, getBet9jaGamesInfo, getMerryBetGamesInfo, getSureBetGamesInfo, getBetWayGamesInfo, getSportyBetGamesInfo, getNairaBetGamesInfo, get1960BetGamesInfo, getBetKingGamesInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllGamesInfo", function() { return getAllGamesInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBet9jaGamesInfo", function() { return getBet9jaGamesInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMerryBetGamesInfo", function() { return getMerryBetGamesInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSureBetGamesInfo", function() { return getSureBetGamesInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBetWayGamesInfo", function() { return getBetWayGamesInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSportyBetGamesInfo", function() { return getSportyBetGamesInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNairaBetGamesInfo", function() { return getNairaBetGamesInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get1960BetGamesInfo", function() { return get1960BetGamesInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBetKingGamesInfo", function() { return getBetKingGamesInfo; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _error_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-handler */ "./api/error-handler.js");
/* harmony import */ var _config_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/url */ "./config/url.js");
/* harmony import */ var _config_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config_url__WEBPACK_IMPORTED_MODULE_4__);





/**
 * Get all game info from provided site and competition
 *
 * @param {string} website
 * @param {string} competition
 *
 * @returns {object}
 */

var getAllGamesInfo =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(website, competition) {
    var response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!(website && competition)) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_config_url__WEBPACK_IMPORTED_MODULE_4___default.a.main_base_url, "/").concat(website, "/").concat(competition));

          case 4:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 6:
            throw new _error_handler__WEBPACK_IMPORTED_MODULE_3__["InvalidArgumentsError"]("Website and Competition info not provided");

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", _context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function getAllGamesInfo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Get Bet9ja games info.
 *
 * @param {string} competition
 * @returns {object}
 */

var getBet9jaGamesInfo =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(competition) {
    var response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            if (!competition) {
              _context2.next = 6;
              break;
            }

            _context2.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_config_url__WEBPACK_IMPORTED_MODULE_4___default.a.bet9ja, "/").concat(competition));

          case 4:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 6:
            throw new _error_handler__WEBPACK_IMPORTED_MODULE_3__["InvalidArgumentsError"]("Website and Competition info not provided");

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            return _context2.abrupt("return", _context2.t0);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function getBet9jaGamesInfo(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Get Merrybet games info.
 *
 * @param {string} competition
 * @returns {object}
 */

var getMerryBetGamesInfo =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(competition) {
    var response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            if (!competition) {
              _context3.next = 6;
              break;
            }

            _context3.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_config_url__WEBPACK_IMPORTED_MODULE_4___default.a.merrybet, "/").concat(competition));

          case 4:
            response = _context3.sent;
            return _context3.abrupt("return", response);

          case 6:
            throw new _error_handler__WEBPACK_IMPORTED_MODULE_3__["InvalidArgumentsError"]("Website and Competition info not provided");

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            return _context3.abrupt("return", _context3.t0);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));

  return function getMerryBetGamesInfo(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * Get Surebet games info.
 *
 * @param {string} competition
 * @returns {object}
 */

var getSureBetGamesInfo =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(competition) {
    var response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;

            if (!competition) {
              _context4.next = 6;
              break;
            }

            _context4.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_config_url__WEBPACK_IMPORTED_MODULE_4___default.a.surebet, "/").concat(competition));

          case 4:
            response = _context4.sent;
            return _context4.abrupt("return", response);

          case 6:
            throw new _error_handler__WEBPACK_IMPORTED_MODULE_3__["InvalidArgumentsError"]("Website and Competition info not provided");

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            return _context4.abrupt("return", _context4.t0);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 9]]);
  }));

  return function getSureBetGamesInfo(_x5) {
    return _ref4.apply(this, arguments);
  };
}();
/**
 * Get Betway games info.
 *
 * @param {string} competition
 * @returns {object}
 */

var getBetWayGamesInfo =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(competition) {
    var response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;

            if (!competition) {
              _context5.next = 6;
              break;
            }

            _context5.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_config_url__WEBPACK_IMPORTED_MODULE_4___default.a.betway, "/").concat(competition));

          case 4:
            response = _context5.sent;
            return _context5.abrupt("return", response);

          case 6:
            throw new _error_handler__WEBPACK_IMPORTED_MODULE_3__["InvalidArgumentsError"]("Website and Competition info not provided");

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            return _context5.abrupt("return", _context5.t0);

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 9]]);
  }));

  return function getBetWayGamesInfo(_x6) {
    return _ref5.apply(this, arguments);
  };
}();
/**
 * Get Sportybet games info.
 *
 * @param {string} competition
 * @returns {object}
 */

var getSportyBetGamesInfo =
/*#__PURE__*/
function () {
  var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(competition) {
    var response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;

            if (!competition) {
              _context6.next = 6;
              break;
            }

            _context6.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_config_url__WEBPACK_IMPORTED_MODULE_4___default.a.sportybet, "/").concat(competition));

          case 4:
            response = _context6.sent;
            return _context6.abrupt("return", response);

          case 6:
            throw new _error_handler__WEBPACK_IMPORTED_MODULE_3__["InvalidArgumentsError"]("Website and Competition info not provided");

          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            return _context6.abrupt("return", _context6.t0);

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 9]]);
  }));

  return function getSportyBetGamesInfo(_x7) {
    return _ref6.apply(this, arguments);
  };
}();
/**
 * Get Nairabet games info.
 *
 * @param {string} competition
 * @returns {object}
 */

var getNairaBetGamesInfo =
/*#__PURE__*/
function () {
  var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(competition) {
    var response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;

            if (!competition) {
              _context7.next = 6;
              break;
            }

            _context7.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_config_url__WEBPACK_IMPORTED_MODULE_4___default.a.nairabet, "/").concat(competition));

          case 4:
            response = _context7.sent;
            return _context7.abrupt("return", response);

          case 6:
            throw new _error_handler__WEBPACK_IMPORTED_MODULE_3__["InvalidArgumentsError"]("Website and Competition info not provided");

          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);
            return _context7.abrupt("return", _context7.t0);

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 9]]);
  }));

  return function getNairaBetGamesInfo(_x8) {
    return _ref7.apply(this, arguments);
  };
}();
/**
 * Get 1960Bet games info.
 *
 * @param {string} competition
 * @returns {object}
 */

var get1960BetGamesInfo =
/*#__PURE__*/
function () {
  var _ref8 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(competition) {
    var response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;

            if (!competition) {
              _context8.next = 6;
              break;
            }

            _context8.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_config_url__WEBPACK_IMPORTED_MODULE_4___default.a._1960bet, "/").concat(competition));

          case 4:
            response = _context8.sent;
            return _context8.abrupt("return", response);

          case 6:
            throw new _error_handler__WEBPACK_IMPORTED_MODULE_3__["InvalidArgumentsError"]("Website and Competition info not provided");

          case 9:
            _context8.prev = 9;
            _context8.t0 = _context8["catch"](0);
            console.log(_context8.t0);
            return _context8.abrupt("return", _context8.t0);

          case 13:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 9]]);
  }));

  return function get1960BetGamesInfo(_x9) {
    return _ref8.apply(this, arguments);
  };
}();
/**
 * Get BetKing games info.
 *
 * @param {string} competition
 * @returns {object}
 */

var getBetKingGamesInfo =
/*#__PURE__*/
function () {
  var _ref9 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(competition) {
    var response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;

            if (!competition) {
              _context9.next = 6;
              break;
            }

            _context9.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_config_url__WEBPACK_IMPORTED_MODULE_4___default.a.betking, "/").concat(competition));

          case 4:
            response = _context9.sent;
            return _context9.abrupt("return", response);

          case 6:
            throw new _error_handler__WEBPACK_IMPORTED_MODULE_3__["InvalidArgumentsError"]("Website and Competition info not provided");

          case 9:
            _context9.prev = 9;
            _context9.t0 = _context9["catch"](0);
            console.log(_context9.t0);
            return _context9.abrupt("return", _context9.t0);

          case 13:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 9]]);
  }));

  return function getBetKingGamesInfo(_x10) {
    return _ref9.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./config/url.js":
/*!***********************!*\
  !*** ./config/url.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  main_base_url: "https://oddscraper.herokuapp.com/api",
  bet9ja: "https://oddscraper.herokuapp.com/api/bet9ja",
  merrybet: "https://oddscraper.herokuapp.com/api/merrybet",
  surebet: "https://oddscraper.herokuapp.com/api/surebet",
  betway: "https://oddscraper.herokuapp.com/api/betway",
  sportybet: "https://oddscraper.herokuapp.com/api/sportybet",
  nairabet: "https://oddscraper.herokuapp.com/api/nairabet",
  _1960bet: "https://oddscraper.herokuapp.com/api/1960bet",
  betking: "https://oddscraper.herokuapp.com/api/betking"
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");



function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false;
  if (_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/isNativeFunction.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/isNativeFunction.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _isNativeFunction; });
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/wrapNativeSuper.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/wrapNativeSuper.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _wrapNativeSuper; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _core_js_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isNativeFunction */ "./node_modules/@babel/runtime-corejs2/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./construct */ "./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js");






function _wrapNativeSuper(Class) {
  var _cache = typeof _core_js_map__WEBPACK_IMPORTED_MODULE_1___default.a === "function" ? new _core_js_map__WEBPACK_IMPORTED_MODULE_1___default.a() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !Object(_isNativeFunction__WEBPACK_IMPORTED_MODULE_4__["default"])(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return Object(_construct__WEBPACK_IMPORTED_MODULE_5__["default"])(Class, arguments, Object(_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(this).constructor);
    }

    Wrapper.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/react-dropdown/style.css":
/*!***********************************************!*\
  !*** ./node_modules/react-dropdown/style.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-simple-dropdown/styles/Dropdown.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-simple-dropdown/styles/Dropdown.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-table/react-table.css":
/*!**************************************************!*\
  !*** ./node_modules/react-table/react-table.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_adsense__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-adsense */ "react-adsense");
/* harmony import */ var react_adsense__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_adsense__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _src_components_navigation_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/components/navigation/components */ "./src/components/navigation/components/index.js");
/* harmony import */ var _src_components_navigation_components_fixed_footer_navigation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../src/components/navigation/components/fixed-footer-navigation */ "./src/components/navigation/components/fixed-footer-navigation.js");
/* harmony import */ var _src_components_adWrapper_components_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../src/components/adWrapper/components/index */ "./src/components/adWrapper/components/index.js");
/* harmony import */ var _src_components_league_container_components_league_container__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../src/components/league-container/components/league-container */ "./src/components/league-container/components/league-container.js");
/* harmony import */ var _src_components_game_info_components_game_info_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../src/components/game-info/components/game-info-component */ "./src/components/game-info/components/game-info-component.js");
/* harmony import */ var _src_components_footer_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../src/components/footer/components */ "./src/components/footer/components/index.js");
/* harmony import */ var _resources_images_ad_banners_ad1_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/resources/images/ad-banners/ad1.png */ "./src/resources/images/ad-banners/ad1.png");
/* harmony import */ var _resources_images_ad_banners_ad1_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_resources_images_ad_banners_ad1_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _resources_images_ad_banners_ad2_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/resources/images/ad-banners/ad2.png */ "./src/resources/images/ad-banners/ad2.png");
/* harmony import */ var _resources_images_ad_banners_ad2_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_resources_images_ad_banners_ad2_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _resources_icons_loading_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/resources/icons/loading.svg */ "./src/resources/icons/loading.svg");
/* harmony import */ var _resources_icons_loading_svg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_loading_svg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _api_website_odds_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../api/website-odds-service */ "./api/website-odds-service.js");











/* eslint-disable react/destructuring-assignment */

/* eslint-disable no-underscore-dangle */





 // Get components






 // Get Ad Banners


 // Loading Icon

 // Get Games and Odds Data


var MainContentContainerFlex = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(rebass__WEBPACK_IMPORTED_MODULE_13__["Flex"]).withConfig({
  displayName: "pages__MainContentContainerFlex",
  componentId: "u8s298-0"
})(["height:100%;"]);
var MainContentContainerBox = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(rebass__WEBPACK_IMPORTED_MODULE_13__["Box"]).withConfig({
  displayName: "pages__MainContentContainerBox",
  componentId: "u8s298-1"
})(["padding-top:150px;@media screen and (max-width:960px){padding-top:100px;}"]);
var MainGamesContentContainerBox = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(MainContentContainerBox).withConfig({
  displayName: "pages__MainGamesContentContainerBox",
  componentId: "u8s298-2"
})(["border-right:1px solid rgba(50,50,50,0.3);@media screen and (max-width:960px){border-right:none;}"]);
var MainAdsContentContainerBox = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(MainContentContainerBox).withConfig({
  displayName: "pages__MainAdsContentContainerBox",
  componentId: "u8s298-3"
})(["@media screen and (max-width:960px){display:none;}"]);
var GamesContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(rebass__WEBPACK_IMPORTED_MODULE_13__["Flex"]).withConfig({
  displayName: "pages__GamesContentContainer",
  componentId: "u8s298-4"
})(["flex-direction:row;width:100%;height:100%;position:relative;> div{flex-grow:1;flex-basis:0;}"]);
var LeagueContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(rebass__WEBPACK_IMPORTED_MODULE_13__["Box"]).withConfig({
  displayName: "pages__LeagueContentContainer",
  componentId: "u8s298-5"
})(["display:flex;flex-direction:column;padding-top:3rem;"]);
var AdBannerImg = styled_components__WEBPACK_IMPORTED_MODULE_12___default.a.img.withConfig({
  displayName: "pages__AdBannerImg",
  componentId: "u8s298-6"
})(["height:100%;max-width:100%;display:block;align-self:flex-start;"]);
var GameInfoComponentContainer = styled_components__WEBPACK_IMPORTED_MODULE_12___default.a.div.withConfig({
  displayName: "pages__GameInfoComponentContainer",
  componentId: "u8s298-7"
})(["width:100%;height:100%;position:relative;@media screen and (max-width:738px){position:absolute;z-index:3;width:100%;border-left:none;}"]);
var GameInfoComponentLoadingContainer = styled_components__WEBPACK_IMPORTED_MODULE_12___default.a.div.withConfig({
  displayName: "pages__GameInfoComponentLoadingContainer",
  componentId: "u8s298-8"
})(["width:100%;height:100%;position:absolute;top:0;left:0;background-color:#FFFFFF;border-left:1px solid rgba(10,10,10,0.09);"]);
var LoadingIconContainer = styled_components__WEBPACK_IMPORTED_MODULE_12___default.a.div.withConfig({
  displayName: "pages__LoadingIconContainer",
  componentId: "u8s298-9"
})(["width:7rem;height:7rem;margin:0 auto;margin-top:5rem;display:flex;justify-content:center;> img{max-width:100%;}"]);

var filterForSelectedGame = function filterForSelectedGame(market, id) {
  return market.filter(function (game) {
    if (game && game.eventID) {
      return game.eventID.localeCompare(id) === 0;
    }

    return null;
  });
};

var renderLeagues = function renderLeagues(leagueData) {
  if (leagueData) {
    return leagueData.map(function (_leagueData, index) {
      // eslint-disable-next-line react/no-array-index-key
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_src_components_league_container_components_league_container__WEBPACK_IMPORTED_MODULE_19__["default"], {
        key: index,
        leagueData: _leagueData
      });
    });
  }

  return null;
};

var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Home, _React$Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      gameInfoLoading: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _routes__WEBPACK_IMPORTED_MODULE_15__["Router"].events.on("routeChangeStart", function (url) {
        var urlArr = url.split("/");

        if (urlArr[1] === "game") {
          _this2.setState({
            gameInfoLoading: true
          });
        }
      });
      _routes__WEBPACK_IMPORTED_MODULE_15__["Router"].events.on("routeChangeComplete", function () {
        _this2.setState({
          gameInfoLoading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          europeanGames = _this$props.europeanGames,
          mlsGames = _this$props.mlsGames,
          bet9jaData = _this$props.bet9jaData,
          merrybetData = _this$props.merrybetData,
          surebetData = _this$props.surebetData,
          betwayData = _this$props.betwayData,
          sportybetData = _this$props.sportybetData,
          nairabetData = _this$props.nairabetData,
          _1960betData = _this$props._1960betData,
          betkingData = _this$props.betkingData;
      var leagues = [{
        mlsGames: mlsGames
      }, {
        europeanGames: europeanGames
      }];
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("title", null, "Oddschecker - Home")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_src_components_navigation_components__WEBPACK_IMPORTED_MODULE_16__["CachetteNavigation"], {
        className: "cachette-navigation",
        navComponent: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_src_components_navigation_components__WEBPACK_IMPORTED_MODULE_16__["default"], {
          navHeight: "8rem",
          withSubnav: true
        }),
        initVisible: true,
        navHeight: "8rem"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_src_components_navigation_components_fixed_footer_navigation__WEBPACK_IMPORTED_MODULE_17__["default"], {
        className: "fixed-footer-navigation"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(MainContentContainerFlex, {
        className: "main-content-container",
        flexDirection: "row",
        flexWrap: "no-wrap",
        width: [0.95, 0.95, 0.9, 0.88],
        mx: "auto"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(MainGamesContentContainerBox, {
        width: [1, 1, 1, 0.75],
        mx: "auto"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_src_components_adWrapper_components_index__WEBPACK_IMPORTED_MODULE_18__["default"], {
        height: ["8rem", "8rem", "8rem", "10rem"],
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
            src: _resources_images_ad_banners_ad1_png__WEBPACK_IMPORTED_MODULE_22___default.a,
            alt: "Ad Banner"
          }));
        }
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(GamesContentContainer, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(LeagueContentContainer, null, renderLeagues(leagues)), this.state.gameInfoLoading || id ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(GameInfoComponentContainer, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, id ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_src_components_game_info_components_game_info_component__WEBPACK_IMPORTED_MODULE_20__["default"], {
        gameId: id,
        bet9jaData: bet9jaData ? filterForSelectedGame(bet9jaData.market, id) : null,
        merrybetData: merrybetData ? filterForSelectedGame(merrybetData.market, id) : null,
        surebetData: surebetData ? filterForSelectedGame(surebetData.market, id) : null,
        betwayData: betwayData ? filterForSelectedGame(betwayData.market, id) : null,
        sportybetData: sportybetData ? filterForSelectedGame(sportybetData.market, id) : null,
        nairabetData: nairabetData ? filterForSelectedGame(nairabetData.market, id) : null,
        _1960betData: _1960betData ? filterForSelectedGame(_1960betData.market, id) : null,
        betkingData: betkingData ? filterForSelectedGame(betkingData.market, id) : null
      }) : null, this.state.gameInfoLoading ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(GameInfoComponentLoadingContainer, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(LoadingIconContainer, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: _resources_icons_loading_svg__WEBPACK_IMPORTED_MODULE_24___default.a,
        alt: "loading indicator"
      }))) : null)) : null)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(MainAdsContentContainerBox, {
        width: [0, 0, 0, 0.2],
        px: ["2rem"]
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_src_components_adWrapper_components_index__WEBPACK_IMPORTED_MODULE_18__["default"], {
        height: "60rem",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
            src: _resources_images_ad_banners_ad2_png__WEBPACK_IMPORTED_MODULE_23___default.a,
            alt: "Ad Banner"
          }));
        }
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_src_components_footer_components__WEBPACK_IMPORTED_MODULE_21__["default"], null)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, europeanGames, mlsGames, responseObj, bet9jaData, merrybetData, surebetData, betwayData, sportybetData, nairabetData, _1960betData, betkingData;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                _context.prev = 1;
                _context.next = 4;
                return Object(_api_website_odds_service__WEBPACK_IMPORTED_MODULE_25__["getAllGamesInfo"])("merrybet", "eu");

              case 4:
                europeanGames = _context.sent;
                _context.next = 7;
                return Object(_api_website_odds_service__WEBPACK_IMPORTED_MODULE_25__["getAllGamesInfo"])("merrybet", "mls");

              case 7:
                mlsGames = _context.sent;
                // The response object contains data that would be returned
                // From our GetInitialProps method...
                responseObj = {
                  europeanGames: europeanGames.data || null,
                  mlsGames: mlsGames.data || null
                };

                if (!query) {
                  _context.next = 35;
                  break;
                }

                _context.next = 12;
                return Object(_api_website_odds_service__WEBPACK_IMPORTED_MODULE_25__["getBet9jaGamesInfo"])("bet9ja", query.league);

              case 12:
                bet9jaData = _context.sent;
                _context.next = 15;
                return Object(_api_website_odds_service__WEBPACK_IMPORTED_MODULE_25__["getMerryBetGamesInfo"])(query.league);

              case 15:
                merrybetData = _context.sent;
                _context.next = 18;
                return Object(_api_website_odds_service__WEBPACK_IMPORTED_MODULE_25__["getSureBetGamesInfo"])(query.league);

              case 18:
                surebetData = _context.sent;
                _context.next = 21;
                return Object(_api_website_odds_service__WEBPACK_IMPORTED_MODULE_25__["getBetWayGamesInfo"])(query.league);

              case 21:
                betwayData = _context.sent;
                _context.next = 24;
                return Object(_api_website_odds_service__WEBPACK_IMPORTED_MODULE_25__["getSportyBetGamesInfo"])(query.league);

              case 24:
                sportybetData = _context.sent;
                _context.next = 27;
                return Object(_api_website_odds_service__WEBPACK_IMPORTED_MODULE_25__["getNairaBetGamesInfo"])(query.league);

              case 27:
                nairabetData = _context.sent;
                _context.next = 30;
                return Object(_api_website_odds_service__WEBPACK_IMPORTED_MODULE_25__["get1960BetGamesInfo"])(query.league);

              case 30:
                _1960betData = _context.sent;
                _context.next = 33;
                return Object(_api_website_odds_service__WEBPACK_IMPORTED_MODULE_25__["getBetKingGamesInfo"])(query.league);

              case 33:
                betkingData = _context.sent;
                responseObj = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, responseObj, {
                  query: query,
                  id: query.id,
                  bet9jaData: bet9jaData.data,
                  merrybetData: merrybetData.data,
                  surebetData: surebetData.data,
                  betwayData: betwayData.data,
                  sportybetData: sportybetData.data,
                  nairabetData: nairabetData.data,
                  _1960betData: _1960betData.data,
                  betkingData: betkingData.data
                });

              case 35:
                return _context.abrupt("return", responseObj);

              case 38:
                _context.prev = 38;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);
                return _context.abrupt("return", _context.t0);

              case 42:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 38]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var routes = __webpack_require__(/*! next-routes */ "next-routes");

module.exports = routes().add("home", "/", "index").add("game", "/game/:league/:id", "index");

/***/ }),

/***/ "./src/components/adWrapper/components/index.js":
/*!******************************************************!*\
  !*** ./src/components/adWrapper/components/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/iyk/Documents/sandbox/oddschecker-fe-ssr/src/components/adWrapper/components/index.js";
// This is the Main Ad Wrapper component.
// If uses the Render Props pattern to take in and render an Ad
// The Component Assumes the Ads are all in the Horizontal Mode
// However, a dimension array can be passed to the component with each
// Array element denoting [WIDTH, HEIGHT].
// PropTypes for the various possible props has been passed.




var AdWrapperFlex = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"]).withConfig({
  displayName: "components__AdWrapperFlex",
  componentId: "icjmqx-0"
})(["height:", ";"], function (props) {
  return props.height ? props.height : "10rem";
});
var AdWrapperContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"]).withConfig({
  displayName: "components__AdWrapperContainer",
  componentId: "icjmqx-1"
})(["height:100%;background-color:", ";width:100%;display:flex;justify-content:center;align-items:center;"], function (props) {
  return props.hasRender ? null : "rgba(200, 200, 200, 0.7)";
});

var AdWrapper = function AdWrapper(_ref) {
  var height = _ref.height,
      mt = _ref.mt,
      my = _ref.my,
      mx = _ref.mx,
      mb = _ref.mb,
      render = _ref.render;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AdWrapperFlex, {
    width: [1],
    height: height || "12rem",
    mt: mt,
    my: my,
    mx: mx,
    mb: mb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AdWrapperContainer, {
    hasRender: !!render,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, render ? render() : null));
};

AdWrapper.propTypes = {
  render: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  isHorizontal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  dimensions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (AdWrapper);

/***/ }),

/***/ "./src/components/footer/components/index.js":
/*!***************************************************!*\
  !*** ./src/components/footer/components/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _resources_icons_google_plus_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/resources/icons/google-plus-logo.svg */ "./src/resources/icons/google-plus-logo.svg");
/* harmony import */ var _resources_icons_google_plus_logo_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_google_plus_logo_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _resources_icons_facebook_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/resources/icons/facebook-logo.svg */ "./src/resources/icons/facebook-logo.svg");
/* harmony import */ var _resources_icons_facebook_logo_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_facebook_logo_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _resources_icons_twitter_logo_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/resources/icons/twitter-logo.svg */ "./src/resources/icons/twitter-logo.svg");
/* harmony import */ var _resources_icons_twitter_logo_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_twitter_logo_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _resources_icons_instagram_logo_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/resources/icons/instagram-logo.svg */ "./src/resources/icons/instagram-logo.svg");
/* harmony import */ var _resources_icons_instagram_logo_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_instagram_logo_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _resources_icons_send_button_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/resources/icons/send-button.svg */ "./src/resources/icons/send-button.svg");
/* harmony import */ var _resources_icons_send_button_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_send_button_svg__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/Users/iyk/Documents/sandbox/oddschecker-fe-ssr/src/components/footer/components/index.js";

/* eslint-disable no-nested-ternary */



 // Social Media Icons






/** Main background component for the site's Footer
 *  @component
 */

var FooterMainContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "components__FooterMainContainer",
  componentId: "sc-2z22kj-0"
})(["min-height:300px;border-top:1px solid rgba(50,50,50,0.125);background-color:rgb(240,240,240);padding:40px 30px;position:relative;z-index:3;"]);
/**
 * Flex container to hold the columns to hold the footer contents.
 * @component
 */

var FooterContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_4__["Flex"]).withConfig({
  displayName: "components__FooterContentContainer",
  componentId: "sc-2z22kj-1"
})(["@media screen and (max-width:960px){padding-bottom:6.5rem;}"]);
/**
 * Box segments footer for the footer
 * @component
 */

var FooterContentBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"]).withConfig({
  displayName: "components__FooterContentBox",
  componentId: "sc-2z22kj-2"
})([""]);
/**
 * Footer Logo Header
 * @component
 */

var FooterLogoH2 = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h3.withConfig({
  displayName: "components__FooterLogoH2",
  componentId: "sc-2z22kj-3"
})(["font-size:18px;font-weight:600;margin-bottom:20px;@media screen and (max-width:480px){text-align:center;}&.subscribe-heading{@media screen and (max-width:736px){text-align:center;}}"]);
/**
 *  Footer Sub-Text container
 *  @component
 */

var FooterSubtextP = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "components__FooterSubtextP",
  componentId: "sc-2z22kj-4"
})(["font-size:14px;color:rgb(100,100,100);"]);
/**
 * The container for the Social media icons
 * @component
 */

var SocialMediaIconsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_4__["Flex"]).withConfig({
  displayName: "components__SocialMediaIconsContainer",
  componentId: "sc-2z22kj-5"
})([""]);
/**
 * The wrapper for the Social Media icons.
 */

var SocialMediaIconsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"]).withConfig({
  displayName: "components__SocialMediaIconsWrapper",
  componentId: "sc-2z22kj-6"
})([""]);
/**
 * Social media icon's link
 *  @component
 */

var SocialMediaIconLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.withConfig({
  displayName: "components__SocialMediaIconLink",
  componentId: "sc-2z22kj-7"
})(["display:block;width:100%;text-decoration:none;height:15px;text-align:left;@media screen and (max-width:480px){text-align:center;}"]);
/**
 * Social Media icon image
 * @component
 */

var SocialMediaIcon = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "components__SocialMediaIcon",
  componentId: "sc-2z22kj-8"
})(["max-width:100%;max-height:100%;"]);
/**
 * Subscription form container
 * @component
 */

var SubscriptionFormContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "components__SubscriptionFormContainer",
  componentId: "sc-2z22kj-9"
})([""]);
/**
 * Subscription form
 * @component
 */

var SubscrptionForm = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.form.withConfig({
  displayName: "components__SubscrptionForm",
  componentId: "sc-2z22kj-10"
})(["width:100%;display:flex;flex-direction:row;justify-content:center;align-items:center;border-bottom:1px solid rgba(10,10,10,0.35);"]);
/**
 * Subscription Input box
 * @component
 */

var SubscriptionInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "components__SubscriptionInput",
  componentId: "sc-2z22kj-11"
})(["border:none;background:transparent;height:30px;padding:5px;width:100%;color:", ";"], function (props) {
  return props.theme ? props.theme.colorTheme ? props.theme.colorTheme.black : "inherit" : "inherit";
});
/**
 * Subscription Submit button
 * @component
 */

var SubscriptionSubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "components__SubscriptionSubmitButton",
  componentId: "sc-2z22kj-12"
})(["border:none;width:30px;height:15px;background-image:url(", ");background-position:center;background-size:contain;background-repeat:no-repeat;background-color:rgba(0,0,0,0);"], _resources_icons_send_button_svg__WEBPACK_IMPORTED_MODULE_9___default.a);
/**
 * Component to render Social Media Icon
 * @component
 */

var RenderSocialMediaIcon = function RenderSocialMediaIcon(_ref) {
  var linkRef = _ref.linkRef,
      iconSrc = _ref.iconSrc,
      altText = _ref.altText;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SocialMediaIconLink, {
    className: "sm-link",
    target: "_blank",
    href: {
      linkRef: linkRef
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SocialMediaIcon, {
    className: "sm-icon",
    alt: {
      altText: altText
    },
    src: iconSrc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }));
};

RenderSocialMediaIcon.propTypes = {
  /** The href value for the link */
  linkRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,

  /** The source value for the icon */
  iconSrc: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,

  /** The alt text for the image */
  altText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
};
/**
 * Site's footer component.
 */

var Footer = function Footer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      formValue = _useState2[0],
      setformValue = _useState2[1];

  var changeFormValue = function changeFormValue(e) {
    setformValue(e.target.value);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterMainContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterContentContainer, {
    flexDirection: "row",
    width: [1, 1, 0.9, 0.75],
    mx: "auto",
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterContentBox, {
    className: "logo-text-container",
    width: [1, 6 / 12, 4 / 12, 4 / 12],
    px: ["5px", "10px", "15px", "20px"],
    mb: ["1.5rem", "0.5rem", "0.5rem", "0rem"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterLogoH2, {
    className: "footer-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "Oddschecker"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterSubtextP, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterContentBox, {
    className: "social-media-icons-container",
    width: [1, 6 / 12, 4 / 12, 3 / 12],
    px: ["5px", "10px", "15px", "20px"],
    mb: ["3rem", "0.5rem", "0.5rem", "0rem"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterLogoH2, {
    className: "footer-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "Follow Us"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SocialMediaIconsContainer, {
    flexDirection: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SocialMediaIconsWrapper, {
    width: [3 / 12],
    mr: "5px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RenderSocialMediaIcon, {
    linkRef: "google.com",
    iconSrc: _resources_icons_google_plus_logo_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    altText: "google plus icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SocialMediaIconsWrapper, {
    width: [3 / 12],
    mr: "5px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RenderSocialMediaIcon, {
    linkRef: "twitter.com",
    iconSrc: _resources_icons_twitter_logo_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    altText: "twitter icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SocialMediaIconsWrapper, {
    width: [3 / 12],
    mr: "5px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RenderSocialMediaIcon, {
    linkRef: "facebook.com",
    iconSrc: _resources_icons_facebook_logo_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    altText: "facebook icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SocialMediaIconsWrapper, {
    width: [3 / 12],
    mr: "5px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RenderSocialMediaIcon, {
    linkRef: "instagram.com",
    iconSrc: _resources_icons_instagram_logo_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    altText: "instagram icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterContentBox, {
    className: "logo-text-container",
    width: [1, 1, 4 / 12, 4 / 12],
    px: ["2.5px", "2.5px", "5px", "5px"],
    mb: ["1.5rem", "0.5rem", "0.5rem", "0rem"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterLogoH2, {
    className: "footer-logo subscribe-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, "Subscribe and stay tuned"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubscriptionFormContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubscrptionForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubscriptionInput, {
    placeholder: "Enter your email address.",
    value: formValue,
    onChange: changeFormValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubscriptionSubmitButton, {
    ariaRole: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/game-info/components/game-info-component.js":
/*!********************************************************************!*\
  !*** ./src/components/game-info/components/game-info-component.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dropdown */ "react-dropdown");
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dropdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dropdown/style.css */ "./node_modules/react-dropdown/style.css");
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-table */ "react-table");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-table/react-table.css */ "./node_modules/react-table/react-table.css");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_table_react_table_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _data_1x2_odds_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/data/1x2-odds-data */ "./src/data/1x2-odds-data.js");
/* harmony import */ var _data_1st_half_result_odds_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/data/1st-half-result-odds-data */ "./src/data/1st-half-result-odds-data.js");
/* harmony import */ var _data_both_teams_to_score_odds_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/data/both-teams-to-score-odds-data */ "./src/data/both-teams-to-score-odds-data.js");
/* harmony import */ var _data_double_chance_odds_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/data/double-chance-odds-data */ "./src/data/double-chance-odds-data.js");
/* harmony import */ var _data_mock_league__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/data/mock-league */ "./src/data/mock-league.js");
/* harmony import */ var _data_total_goals_odds_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/data/total-goals-odds-data */ "./src/data/total-goals-odds-data.js");
/* harmony import */ var _resources_icons_close_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/resources/icons/close.svg */ "./src/resources/icons/close.svg");
/* harmony import */ var _resources_icons_close_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_close_svg__WEBPACK_IMPORTED_MODULE_16__);


/* eslint-disable no-nested-ternary */

/* eslint-disable no-underscore-dangle */















 // Declare styled components...

var GameComponentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "game-info-component__GameComponentWrapper",
  componentId: "wqowvf-0"
})(["width:100%;display:flex;height:100%;"]);
var GameInfoContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "game-info-component__GameInfoContentContainer",
  componentId: "wqowvf-1"
})(["width:100%;position:relative;background-color:#FFFFFF;padding:4rem 1.5rem;@media screen and (max-width:738px){padding:2rem 0rem;}"]);
var GameInfoContentHeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"]).withConfig({
  displayName: "game-info-component__GameInfoContentHeadingWrapper",
  componentId: "wqowvf-2"
})(["height:auto;@media screen and (max-width:738px){background-color:", ";padding:1rem 1.5rem;}"], function (props) {
  return props.theme ? props.theme.colorTheme.grey : "inherit";
});
var GameInfoHeadingContent = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"]).withConfig({
  displayName: "game-info-component__GameInfoHeadingContent",
  componentId: "wqowvf-3"
})(["display:flex;flex-direction:row;"]);
var GameDateContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.span.withConfig({
  displayName: "game-info-component__GameDateContainer",
  componentId: "wqowvf-4"
})(["display:block;width:100%;opacity:.7;font-size:1.4rem;margin-top:1rem;text-align:left;"]);
var TeamInfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"]).withConfig({
  displayName: "game-info-component__TeamInfoContainer",
  componentId: "wqowvf-5"
})(["font-size:1.6rem;"]);
var GameInfoContentHeadingContent = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"]).withConfig({
  displayName: "game-info-component__GameInfoContentHeadingContent",
  componentId: "wqowvf-6"
})(["display:flex;flex-direction:column;"]);
var GameInfoCloseContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "game-info-component__GameInfoCloseContainer",
  componentId: "wqowvf-7"
})(["display:flex;justify-content:flex-start;align-items:center;padding:0rem 1.5rem;@media screen and (max-width:738px){padding-right:0px;}"]);
var CloseButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "game-info-component__CloseButtonWrapper",
  componentId: "wqowvf-8"
})(["height:1.8rem;width:1.8rem;margin-top:1rem;@media screen and (max-width:738px){height:1.4rem;width:1.4rem;}"]);
var CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button.withConfig({
  displayName: "game-info-component__CloseButton",
  componentId: "wqowvf-9"
})(["background-image:url(", ");background-repeat:no-repeat;background-position:center;background-color:transparent;width:100%;height:100%;border:none;opacity:0.5;cursor:pointer;transition:transform 0.4s ease-out;&:hover{transform:scale(.85) rotate(90deg);}"], _resources_icons_close_svg__WEBPACK_IMPORTED_MODULE_16___default.a);
var MarketControlsContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"]).withConfig({
  displayName: "game-info-component__MarketControlsContainer",
  componentId: "wqowvf-10"
})(["height:auto;@media screen and (max-width:738px){padding:0px;}"]);
var MarketIndicatorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"]).withConfig({
  displayName: "game-info-component__MarketIndicatorWrapper",
  componentId: "wqowvf-11"
})([""]);
var MarketIndicator = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.span.withConfig({
  displayName: "game-info-component__MarketIndicator",
  componentId: "wqowvf-12"
})(["background-color:rgba(240,240,240,0.6);color:#DB4437;width:100%;border-radius:5px;height:100%;display:block;text-align:center;font-size:1.4rem;font-weight:700;padding:.75rem 1rem;"]);
var MarketDropdownWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"]).withConfig({
  displayName: "game-info-component__MarketDropdownWrapper",
  componentId: "wqowvf-13"
})(["display:flex;justify-content:center;align-items:center;"]);
var StyledDropdown = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react_dropdown__WEBPACK_IMPORTED_MODULE_6___default.a).withConfig({
  displayName: "game-info-component__StyledDropdown",
  componentId: "wqowvf-14"
})(["width:100%;.Dropdown-control{background-color:rgba(230,230,230,0.7);font-size:1.3rem;}.Dropdown-menu{font-size:1.2rem;border-radius:7px;max-height:auto !important;@media screen and (max-width:738px){width:200%;left:-100%;margin-top:10px;}.Dropdown-option{padding:12px 10px;}}"]);
var BookiesTableWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "game-info-component__BookiesTableWrapper",
  componentId: "wqowvf-15"
})(["width:100%;min-height:4rem;margin-top:2.5rem;padding:.5rem 1.5rem;@media screen and (max-width:738px){padding:0px;}"]); // Table Styles

var StyledTable = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react_table__WEBPACK_IMPORTED_MODULE_8___default.a).withConfig({
  displayName: "game-info-component__StyledTable",
  componentId: "wqowvf-16"
})(["width:auto;font-size:1.4rem;text-align:left;background-color:rgba(240,240,240,0.6);border:none !important;border-radius:4px 4px 0px 0px;.rt-thead{box-shadow:none !important;height:4.5rem;justify-content:center;border-bottom:1px solid rgba(0,0,0,0.1);min-width:100% !important;width:100% !important;.rt-th{display:flex;align-items:center;padding:1rem 1.5rem !important;@media screen and (max-width:738px){padding:.5rem 1rem !important;}}}.rt-tbody{.rt-td{display:flex;align-items:center;padding:1rem 1.5rem !important;@media screen and (max-width:738px){padding:1rem 1rem !important;}}}"]);
var TableLogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "game-info-component__TableLogoWrapper",
  componentId: "wqowvf-17"
})(["width:100%;height:3rem;text-align:center;display:flex;justify-content:center;align-items:center;padding:.25rem;img{height:auto;max-height:100%;max-width:100%;}"]);
var TableSubtextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "game-info-component__TableSubtextWrapper",
  componentId: "wqowvf-18"
})(["background-color:rgba(235,235,235,0.7);padding:2rem;border-radius:0px 0px 4px 4px;p{font-size:1.4rem;display:block;width:90%;margin:0 auto;text-align:center;a{color:#DB4437;}}"]);

var goBack = function goBack(router) {
  router.push("/");
};

var _x12tableColumns = [{
  Header: "Bookie",
  accessor: "logo",
  Cell: function Cell(_ref) {
    var original = _ref.original,
        value = _ref.value;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableLogoWrapper, {
      className: "logo-wrapper"
    }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: value,
      alt: original.bookie
    }));
  }
}, {
  Header: "1",
  accessor: "1",
  width: 100
}, {
  Header: "x",
  accessor: "x",
  width: 100
}, {
  Header: "2",
  accessor: "2",
  width: 100
}];
var _1stHalfResultTableColumns = [{
  Header: "Bookie",
  accessor: "logo",
  Cell: function Cell(_ref2) {
    var original = _ref2.original,
        value = _ref2.value;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableLogoWrapper, {
      className: "logo-wrapper"
    }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: value,
      alt: original.bookie
    }));
  }
}, {
  Header: "1",
  accessor: "1",
  width: 100,
  pivot: true
}, {
  Header: "x",
  accessor: "x",
  width: 100
}, {
  Header: "2",
  accessor: "2",
  width: 100
}];
var _bothTeamScoreTableColumns = [{
  Header: "Bookie",
  accessor: "logo",
  Cell: function Cell(_ref3) {
    var original = _ref3.original,
        value = _ref3.value;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableLogoWrapper, {
      className: "logo-wrapper"
    }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: value,
      alt: original.bookie
    }));
  }
}, {
  Header: "YES",
  accessor: "yes",
  width: 100,
  pivot: true
}, {
  Header: "NO",
  accessor: "no",
  width: 100
}];
var _doubleChanceTableColumns = [{
  Header: "Bookie",
  accessor: "logo",
  Cell: function Cell(_ref4) {
    var original = _ref4.original,
        value = _ref4.value;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableLogoWrapper, {
      className: "logo-wrapper"
    }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: value,
      alt: original.bookie
    }));
  }
}, {
  Header: "1X",
  accessor: "1",
  width: 100,
  pivot: true
}, {
  Header: "X2",
  accessor: "x",
  width: 100
}, {
  Header: "12",
  accessor: "2",
  width: 100
}];
var _totalGoalsTableColumns = [{
  Header: "Bookie",
  accessor: "logo",
  Cell: function Cell(_ref5) {
    var original = _ref5.original,
        value = _ref5.value;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableLogoWrapper, {
      className: "logo-wrapper"
    }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: value,
      alt: original.bookie
    }));
  }
}, {
  Header: "UNDER 2.5",
  accessor: "under",
  width: 100,
  pivot: true
}, {
  Header: "OVER 2.5",
  accessor: "over",
  width: 100
}]; // GameInfoComponent...

var GameInfoComponent = function GameInfoComponent(_ref6) {
  var gameId = _ref6.gameId,
      bet9jaData = _ref6.bet9jaData,
      merrybetData = _ref6.merrybetData,
      surebetData = _ref6.surebetData,
      betwayData = _ref6.betwayData,
      sportybetData = _ref6.sportybetData,
      nairabetData = _ref6.nairabetData,
      _1960betData = _ref6._1960betData,
      betkingData = _ref6.betkingData;
  // market odds dropdown options
  var dropdownOptions = [{
    value: "1X2",
    label: "1X2"
  }, {
    value: "Both Teams to Score",
    label: "Both Teams to Score"
  }, {
    value: "Double Chance",
    label: "Double Chance"
  }, {
    value: "Total Goals: Under / Over",
    label: "Total Goals: Under / Over"
  }, {
    value: "1st Half Result",
    label: "1st Half Result"
  }]; // Decleare parts of state...

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(dropdownOptions[0]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      selectedMarket = _useState2[0],
      setSelectedMarket = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_data_1x2_odds_data__WEBPACK_IMPORTED_MODULE_10__["default"])(bet9jaData ? bet9jaData[0] ? bet9jaData[0].odds : null : null, merrybetData ? merrybetData[0] ? merrybetData[0].odds : null : null, surebetData ? surebetData[0] ? surebetData[0].odds : null : null, betwayData ? betwayData[0] ? betwayData[0].odds : null : null, sportybetData ? sportybetData[0] ? sportybetData[0].odds : null : null, nairabetData ? nairabetData[0] ? nairabetData[0].odds : null : null, _1960betData ? _1960betData[0] ? _1960betData[0].odds : null : null, betkingData ? betkingData[0] ? betkingData[0].odds : null : null)),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      selectedOddsData = _useState4[0],
      setSelectedOddsData = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_x12tableColumns),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      selectedOddsTableColumns = _useState6[0],
      setSelectedOddsTableColumns = _useState6[1];

  var getSelectedGameDetails = function getSelectedGameDetails(id, market) {
    return market.filter(function (game) {
      return game.eventID.localeCompare(id) === 0;
    });
  };

  var onSelectMarket = function onSelectMarket(option) {
    setSelectedMarket(option); // Set Oddsdata & Table Column values...
  };

  var game = getSelectedGameDetails(gameId, merrybetData);
  var teams = game[0] ? game[0].event.split("-", 2) : null;
  var team1 = teams ? teams[0] || "Team 1" : "Team 1";
  var team2 = teams ? teams[1] || "Team 2" : "Team 2"; // Render new data when component mounts

  var buildOddsDataTable = function buildOddsDataTable(market) {
    switch (market.value) {
      case "1X2":
        setSelectedOddsData(Object(_data_1x2_odds_data__WEBPACK_IMPORTED_MODULE_10__["default"])(bet9jaData ? bet9jaData[0] ? bet9jaData[0].odds : null : null, merrybetData ? merrybetData[0] ? merrybetData[0].odds : null : null, surebetData ? surebetData[0] ? surebetData[0].odds : null : null, betwayData ? betwayData[0] ? betwayData[0].odds : null : null, sportybetData ? sportybetData[0] ? sportybetData[0].odds : null : null, nairabetData ? nairabetData[0] ? nairabetData[0].odds : null : null, _1960betData ? _1960betData[0] ? _1960betData[0].odds : null : null, betkingData ? betkingData[0] ? betkingData[0].odds : null : null));
        setSelectedOddsTableColumns(_x12tableColumns);
        break;

      case "Both Teams to Score":
        setSelectedOddsData(Object(_data_both_teams_to_score_odds_data__WEBPACK_IMPORTED_MODULE_12__["default"])(bet9jaData ? bet9jaData[0] ? bet9jaData[0].odds : null : null, merrybetData ? merrybetData[0] ? merrybetData[0].odds : null : null, surebetData ? surebetData[0] ? surebetData[0].odds : null : null, betwayData ? betwayData[0] ? betwayData[0].odds : null : null, sportybetData ? sportybetData[0] ? sportybetData[0].odds : null : null, nairabetData ? nairabetData[0] ? nairabetData[0].odds : null : null, _1960betData ? _1960betData[0] ? _1960betData[0].odds : null : null, betkingData ? betkingData[0] ? betkingData[0].odds : null : null));
        setSelectedOddsTableColumns(_bothTeamScoreTableColumns);
        break;

      case "Double Chance":
        setSelectedOddsData(Object(_data_double_chance_odds_data__WEBPACK_IMPORTED_MODULE_13__["default"])(bet9jaData ? bet9jaData[0] ? bet9jaData[0].odds : null : null, merrybetData ? merrybetData[0] ? merrybetData[0].odds : null : null, surebetData ? surebetData[0] ? surebetData[0].odds : null : null, betwayData ? betwayData[0] ? betwayData[0].odds : null : null, sportybetData ? sportybetData[0] ? sportybetData[0].odds : null : null, nairabetData ? nairabetData[0] ? nairabetData[0].odds : null : null, _1960betData ? _1960betData[0] ? _1960betData[0].odds : null : null, betkingData ? betkingData[0] ? betkingData[0].odds : null : null));
        setSelectedOddsTableColumns(_doubleChanceTableColumns);
        break;

      case "Total Goals: Under / Over":
        setSelectedOddsData(Object(_data_total_goals_odds_data__WEBPACK_IMPORTED_MODULE_15__["default"])(bet9jaData ? bet9jaData[0] ? bet9jaData[0].odds : null : null, merrybetData ? merrybetData[0] ? merrybetData[0].odds : null : null, surebetData ? surebetData[0] ? surebetData[0].odds : null : null, betwayData ? betwayData[0] ? betwayData[0].odds : null : null, sportybetData ? sportybetData[0] ? sportybetData[0].odds : null : null, nairabetData ? nairabetData[0] ? nairabetData[0].odds : null : null, _1960betData ? _1960betData[0] ? _1960betData[0].odds : null : null, betkingData ? betkingData[0] ? betkingData[0].odds : null : null));
        setSelectedOddsTableColumns(_totalGoalsTableColumns);
        break;

      case "1st Half Result":
        setSelectedOddsData(Object(_data_1st_half_result_odds_data__WEBPACK_IMPORTED_MODULE_11__["default"])(bet9jaData ? bet9jaData[0] ? bet9jaData[0].odds : null : null, merrybetData ? merrybetData[0] ? merrybetData[0].odds : null : null, surebetData ? surebetData[0] ? surebetData[0].odds : null : null, betwayData ? betwayData[0] ? betwayData[0].odds : null : null, sportybetData ? sportybetData[0] ? sportybetData[0].odds : null : null, nairabetData ? nairabetData[0] ? nairabetData[0].odds : null : null, _1960betData ? _1960betData[0] ? _1960betData[0].odds : null : null, betkingData ? betkingData[0] ? betkingData[0].odds : null : null));
        setSelectedOddsTableColumns(_1stHalfResultTableColumns);
        break;

      default:
        break;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    buildOddsDataTable(selectedMarket);
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GameComponentWrapper, {
    className: "game-info-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GameInfoContentContainer, {
    className: "game-info-content-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GameInfoContentHeadingWrapper, {
    width: [1],
    flexDirection: "row",
    alignItems: "flex-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GameInfoContentHeadingContent, {
    width: [1, 11 / 12, 11 / 12],
    px: ["0rem", "0rem", "1.5rem", "1.5rem"],
    mx: "auto"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GameInfoHeadingContent, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TeamInfoContainer, null, team1), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TeamInfoContainer, {
    px: ["3rem"]
  }, "vs"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TeamInfoContainer, null, team2)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GameDateContainer, null, "".concat(game ? game[0] ? game[0].date : "Date not available" : "Date not available", " / ").concat(game ? game[0] ? game[0].time : "Time not avaialable" : "Time not available"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GameInfoCloseContainer, {
    width: [1 / 12]
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CloseButtonWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CloseButton, {
    onClick: function onClick(e) {
      e.stopPropagation();
      goBack(next_router__WEBPACK_IMPORTED_MODULE_2___default.a);
    }
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MarketControlsContainer, {
    justifyContent: "center",
    alignItems: "center",
    mt: ["1.5rem"],
    px: ["1.5rem"]
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MarketIndicatorWrapper, {
    width: [6 / 12, 6 / 12, 7 / 12, 7 / 12],
    mr: ["2rem"]
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MarketIndicator, null, "Market:", " ", "".concat(selectedMarket.value ? selectedMarket.value : selectedMarket))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MarketDropdownWrapper, {
    width: [6 / 12, 6 / 12, 5 / 12, 5 / 12]
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDropdown, {
    options: dropdownOptions,
    value: selectedMarket,
    onChange: onSelectMarket,
    placeholder: "Change Market"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BookiesTableWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledTable, {
    data: selectedOddsData,
    columns: selectedOddsTableColumns,
    loading: false,
    showPagination: false,
    resizable: false,
    minRows: selectedOddsData.length
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableSubtextWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Odds shown here come direct from online bookmakers. Please check all aspects of your bets before making a placement.", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/"
  }, "More Info"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (GameInfoComponent);

/***/ }),

/***/ "./src/components/games-card/components/game-card.js":
/*!***********************************************************!*\
  !*** ./src/components/games-card/components/game-card.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _resources_icons_right_arrow_filled_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/resources/icons/right-arrow-filled.svg */ "./src/resources/icons/right-arrow-filled.svg");
/* harmony import */ var _resources_icons_right_arrow_filled_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_right_arrow_filled_svg__WEBPACK_IMPORTED_MODULE_5__);
/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable react/forbid-prop-types */






/** @component */

var GameCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"]).withConfig({
  displayName: "game-card__GameCardContainer",
  componentId: "sc-1wst0dk-0"
})(["height:6rem;width:100%;background-color:", ";box-shadow:", ";position:relative;&:before{content:\" \";display:block;position:absolute;top:0;left:0;width:3px;height:100%;background-color:", ";}@media screen and (max-width:738px){height:auto;background-color:", ";border-bottom:1px solid rgba(50,50,50,.25);box-shadow:none;&:before{display:none;}}"], function (props) {
  return props.isEven ? "rgba(240, 240, 240, 0.6)" : "#FFFFFF";
}, function (props) {
  return props.isActiveGame ? "1px 6px 15px rgba(10, 10, 10, 0.1)" : null;
}, function (props) {
  return props.isActiveGame ? "#DB4437" : null;
}, function (props) {
  return props.theme ? props.theme.colorTheme.white : "#FFFFFF";
});
var GameTimeContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"]).withConfig({
  displayName: "game-card__GameTimeContainer",
  componentId: "sc-1wst0dk-1"
})(["@media screen and (max-width:738px){flex-direction:row-reverse;align-items:flex-end;}"]);
var GameTimeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"]).withConfig({
  displayName: "game-card__GameTimeWrapper",
  componentId: "sc-1wst0dk-2"
})(["@media screen and (max-width:738px){font-size:1.2rem;color:rgba(50,50,50,0.5);&:before{content:\"-\";margin:0px .5rem;}}"]);
var GameDateWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"]).withConfig({
  displayName: "game-card__GameDateWrapper",
  componentId: "sc-1wst0dk-3"
})(["font-size:1.2rem;color:rgba(50,50,50,0.5);"]);
var TeamContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"]).withConfig({
  displayName: "game-card__TeamContentWrapper",
  componentId: "sc-1wst0dk-4"
})(["display:flex;flex-direction:row;align-items:center;font-size:1.5rem;@media screen and (max-width:738px){flex-direction:column-reverse;align-items:flex-start;margin-right:1.3rem;}"]);
var TeamInfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "game-card__TeamInfoContainer",
  componentId: "sc-1wst0dk-5"
})(["display:flex;flex-direction:row;align-items:center;margin-left:2rem;@media screen and (max-width:738px){margin-left:0px;}"]);
var VsTextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"]).withConfig({
  displayName: "game-card__VsTextWrapper",
  componentId: "sc-1wst0dk-6"
})(["margin-left:2rem;@media screen and (max-width:738px){margin:0rem 2rem;}"]);
/**
 * TODO: This component would be used when the Team badges are provided.
 */
// const TeamBadgeWrapper = Styled.div`
// 	width: 1.25rem;
// 	height: 1.25rem;
// 	border-radius: 50%;
// 	margin: 0 1rem;
// 	background-image: url(${props => (props.teamBadge ? props.teamBadge : null)});
// 	background-color: ${props =>
//     props.teamBadge ? null : `rgba(200, 200, 200, 0.7)`};
// 	background-size: contain;
// 	background-repeat: no-repeat;
// 	background-position: center;
// `;

var TeamNameWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "game-card__TeamNameWrapper",
  componentId: "sc-1wst0dk-7"
})([""]);
var TeamNameText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "game-card__TeamNameText",
  componentId: "sc-1wst0dk-8"
})(["color:inherit;@media screen and (max-width:738px){margin:.2rem 0rem;}"]);
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.withConfig({
  displayName: "game-card__StyledLink",
  componentId: "sc-1wst0dk-9"
})(["width:100%;color:inherit;text-decoration:none;display:flex;flex-direction:row;"]);
var ArrowContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "game-card__ArrowContainer",
  componentId: "sc-1wst0dk-10"
})(["@media screen and (min-width:738px){display:none;}width:2rem;height:2rem;text-align:center;margin-left:auto;img{height:100%;max-width:100%;}"]);
/**
 *  Game Card component. Renders the game info in the Game List components for
 *  specific leagues.
 *
 *  @visibleName GameCardComponent
 *  @returns boolean
 */

var checkGamePath = function checkGamePath(game, location) {
  var gameID = game.id; // We need to find the active game card.
  // We first get the game Id from the path and test
  // If it is the value of the gameId.

  var pathArr = [];

  if (location && location.pathname) {
    pathArr = location.pathname.split("/");

    if (pathArr) {
      var pathArrLength = pathArr.length - 1;
      var pathID = pathArr[pathArrLength];
      return gameID === pathID;
    }

    return false;
  }

  return false;
};

var GameCard = function GameCard(_ref) {
  var game = _ref.game,
      isEven = _ref.isEven,
      location = _ref.location,
      league = _ref.league;

  if (!game) {
    return null;
  }

  var teams = game.event.split("-", 2);
  var team1 = teams[0];
  var team2 = teams[1];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GameCardContainer, {
    className: "game-card-container",
    alignItems: "center",
    px: ["1.5rem"],
    py: ["2rem", "2rem", "1rem", "1rem"],
    isEven: isEven,
    isActiveGame: checkGamePath(game, location)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    route: "/game/".concat(league, "/").concat(game.eventID || game.eventRef),
    passHref: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TeamContentWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GameTimeContainer, {
    flexDirection: "column",
    width: ["auto", "auto", "5.5rem", "5.5rem"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GameTimeWrapper, null, game.time || "19:45"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GameDateWrapper, null, game.date || "26 Aug")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TeamInfoContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TeamNameWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TeamNameText, null, team1 || "Team 1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VsTextWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "vs")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TeamInfoContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TeamNameWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TeamNameText, null, team2 || "Team 2"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ArrowContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _resources_icons_right_arrow_filled_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Arrow Icon"
  })))));
};

GameCard.propTypes = {
  /** Check if game card is even */
  isEven: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** Contains the Match object */
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /** Contains the Game object */
  game: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /** Contains the Router's location. Useful incase of Re-routing */
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
GameCard.defaultProps = {
  isEven: false,
  game: {},
  location: {},
  match: {}
};
/* harmony default export */ __webpack_exports__["default"] = (GameCard);

/***/ }),

/***/ "./src/components/league-container/components/league-container.js":
/*!************************************************************************!*\
  !*** ./src/components/league-container/components/league-container.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _games_card_components_game_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../games-card/components/game-card */ "./src/components/games-card/components/game-card.js");





var LeagueContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "league-container__LeagueContainerWrapper",
  componentId: "yeozwn-0"
})(["height:auto;margin-bottom:2rem;"]);
var LeagueNameTitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"]).withConfig({
  displayName: "league-container__LeagueNameTitleContainer",
  componentId: "yeozwn-1"
})(["color:#D52941;align-items:center;height:7rem;@media screen and (max-width:738px){background-color:", ";padding:.4rem 1rem;height:3rem;margin-bottom:1.5rem;}"], function (props) {
  return props.theme ? props.theme.colorTheme.grey : "inherit";
});
var LeagueTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"]).withConfig({
  displayName: "league-container__LeagueTitle",
  componentId: "yeozwn-2"
})(["font-size:1.5rem;color:inherit;margin-left:1rem;margin-right:1rem;@media screen and (max-width:738px){font-size:1.3rem;}"]);
var LeagueTitleLine = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"]).withConfig({
  displayName: "league-container__LeagueTitleLine",
  componentId: "yeozwn-3"
})(["height:0rem;border-top:.1rem solid #D52941;width:100%;@media screen and (max-width:738px){display:none;}"]);
var LeagueGamesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "league-container__LeagueGamesWrapper",
  componentId: "yeozwn-4"
})(["height:auto;"]);
var GamesUnavailableMessageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "league-container__GamesUnavailableMessageContainer",
  componentId: "yeozwn-5"
})(["width:100%;display:flex;min-height:200px;justify-content:center;align-items:center;> p{font-size:1.8rem;text-align:center;color:rgba(10,10,10,0.3);font-weight:800;}"]);

var RenderGameCards = function RenderGameCards(gamesArr, league) {
  return gamesArr.map(function (game, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_games_card_components_game_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      game: game,
      league: league,
      isEven: index % 2 === 0
    });
  });
};

var LeagueContainer = function LeagueContainer(_ref) {
  var leagueData = _ref.leagueData;

  var res = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(leagueData).map(function (key) {
    return leagueData[key];
  });

  var league = "";

  if (res[0]) {
    switch (res[0].league) {
      case "European League":
        league = "eu";
        break;

      case "Major League Soccer":
        league = "mls";
        break;

      default:
        league = "epl";
    }
  }

  console.log(res);
  return res[0] ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LeagueContainerWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LeagueNameTitleContainer, {
    flexDirection: "row"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LeagueTitle, {
    width: [1, 1, 4 / 12, 3 / 12]
  }, res[0].league || "English Premier League"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LeagueTitleLine, {
    width: [0, 0, 8 / 12, 9 / 12]
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LeagueGamesWrapper, null, res[0].marketCount > 0 ? RenderGameCards(res[0].market, league) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GamesUnavailableMessageContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "No Games available for this competition")))) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (LeagueContainer);

/***/ }),

/***/ "./src/components/navigation/components/cachette-navigation.js":
/*!*********************************************************************!*\
  !*** ./src/components/navigation/components/cachette-navigation.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CachetteNavigation; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styled */ "./src/components/navigation/components/styled.js");







var _jsxFileName = "/Users/iyk/Documents/sandbox/oddschecker-fe-ssr/src/components/navigation/components/cachette-navigation.js";
// This component uses the Render Prop Pattern to add the 'Cachette'
// Component Behaviour to the Navigation Component...





var CachetteNavigation =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CachetteNavigation, _Component);

  function CachetteNavigation() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CachetteNavigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CachetteNavigation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      lastScrollTop: 0,
      delta: 5,
      isNavVisible: !!_this.props.initVisible,
      shouldNavVisible: !!_this.props.initVisible,
      isScrolling: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "cachetteNode", react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "startScroll", function () {
      _this.setState(function () {
        return {
          isScrolling: true
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "stopScroll", function () {
      _this.setState(function () {
        return {
          isScrolling: false
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "scrollTimerFn", function (timer) {
      if (timer !== null) {
        clearTimeout(timer);

        if (!_this.state.isScrolling) {
          _this.startScroll();
        }
      }

      timer = setTimeout(function () {
        if (_this.state.isScrolling) {
          _this.stopScroll();
        }
      }, 250);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "checkNavVisibility", function () {
      _this.checkPageScrolledPastTop();

      if (_this.state.isScrolling) {
        _this.hasScrolled();
      }

      _this.visibleCheckInterval = window.requestAnimationFrame(_this.checkNavVisibility);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "checkPageScrolledPastTop", function () {
      var scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (scrollTop >= _this.props.navHeight + 100) {
        _this.setState({
          shouldNavVisible: true
        });
      } else if (_this.props.initVisible) {
        _this.setState({
          shouldNavVisible: false
        });
      } else {
        _this.setState({
          shouldNavVisible: false,
          isNavVisible: false
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CachetteNavigation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // Add an Event Listener to listen for scroll Action
      window.addEventListener("scroll", function (timer) {
        _this2.scrollTimerFn(timer);
      }); // Check the NavVisibility...

      window.requestAnimationFrame(this.checkNavVisibility);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.state.lastScrollTop === nextState.lastScrollTop) {
        return false;
      }

      return true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      window.removeEventListener("scroll", function (timer) {
        _this3.scrollTimerFn(timer);
      });
      window.cancelAnimationFrame(this.checkNavVisibility);
    }
    /**
     * @function startScroll - Function to update state whenever the
     * user starts scrolling...
     */

  }, {
    key: "hasScrolled",

    /**
     * @function hasScrolled - Function to make state updates once the scroll action
     * has been performed...
     */
    value: function hasScrolled() {
      var scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (Math.abs(this.state.lastScrollTop - scrollTop) <= this.state.delta) {
        return;
      } // If User scrolled down and are past the navbar, set Visible to false
      // This is necessary so you never see what is "behind" the navbar.


      if (scrollTop > this.state.lastScrollTop && scrollTop > this.props.navHeight) {
        // Scrolling Down
        this.setState({
          isNavVisible: false
        });
      } else if (scrollTop + window.innerHeight < document.body.clientHeight && this.state.shouldNavVisible) {
        this.setState({
          isNavVisible: true
        });
      } // Reset the LastScrollTop state to The current Scroll Position


      this.setState({
        lastScrollTop: scrollTop
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isNavVisible = this.state.isNavVisible;
      var navHeight = this.props.navHeight;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["CachetteWrapper"], {
        ref: this.cachetteNode,
        height: navHeight,
        isNavVisible: isNavVisible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, lodash__WEBPACK_IMPORTED_MODULE_9___default.a.isFunction(this.props.navComponent) ? this.props.navComponent() : this.props.navComponent);
    }
  }]);

  return CachetteNavigation;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);


CachetteNavigation.propTypes = {
  initVisible: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  navComponent: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node.isRequired,
  navHeight: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired
};

/***/ }),

/***/ "./src/components/navigation/components/fixed-footer-navigation.js":
/*!*************************************************************************!*\
  !*** ./src/components/navigation/components/fixed-footer-navigation.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _resources_icons_login_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/resources/icons/login-icon.svg */ "./src/resources/icons/login-icon.svg");
/* harmony import */ var _resources_icons_login_icon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_login_icon_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _resources_icons_menu_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/resources/icons/menu.svg */ "./src/resources/icons/menu.svg");
/* harmony import */ var _resources_icons_menu_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_menu_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _resources_icons_top_games_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/resources/icons/top-games.svg */ "./src/resources/icons/top-games.svg");
/* harmony import */ var _resources_icons_top_games_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_top_games_svg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/iyk/Documents/sandbox/oddschecker-fe-ssr/src/components/navigation/components/fixed-footer-navigation.js";

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable no-nested-ternary */



 // Bring in Icons




var FooterNavigationContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "fixed-footer-navigation__FooterNavigationContainer",
  componentId: "okzfvv-0"
})(["@media screen and (min-width:960px){display:none;}background-color:", ";border-top:1px solid rgba(50,50,50,0.125);padding:10px 5px;height:6.5rem;position:fixed;z-index:100;bottom:0;width:100vw;left:0;"], function (props) {
  return props.theme ? props.theme.colorTheme ? props.theme.colorTheme.grey : "inherit" : "inherit";
});
var NavigationLinksContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"]).withConfig({
  displayName: "fixed-footer-navigation__NavigationLinksContainer",
  componentId: "okzfvv-1"
})([""]);
var NavigationLinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "fixed-footer-navigation__NavigationLinkWrapper",
  componentId: "okzfvv-2"
})(["display:flex;flex-direction:column;> div{width:100%}"]);
var NavigationLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "fixed-footer-navigation__NavigationLink",
  componentId: "okzfvv-3"
})(["display:flex;flex-direction:column;width:7rem;margin:0 auto;justify-content:center;align-items:center;"]);
var NavigationLinkIconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "fixed-footer-navigation__NavigationLinkIconWrapper",
  componentId: "okzfvv-4"
})(["height:3rem;width:35%;margin:0 auto;img{max-width:100%;height:100%;text-align:center;}"]);
var NavigationTextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "fixed-footer-navigation__NavigationTextWrapper",
  componentId: "okzfvv-5"
})(["span{display:block;color:", ";font-size:1.2rem;font-weight:600;}"], function (props) {
  return props.theme.colorTheme.black;
});

var FixedFooterNavigation = function FixedFooterNavigation() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterNavigationContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationLinksContainer, {
    flexDirection: "row",
    width: ["0.8"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationLinkWrapper, {
    width: [4 / 12],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationLinkIconWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _resources_icons_menu_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "menu icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationTextWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Menu"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationLinkWrapper, {
    width: [4 / 12],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationLinkIconWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _resources_icons_top_games_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "top games icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationTextWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Top Games"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationLinkWrapper, {
    width: [4 / 12],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationLinkIconWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _resources_icons_login_icon_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "login icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationTextWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Login")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (FixedFooterNavigation);

/***/ }),

/***/ "./src/components/navigation/components/index.js":
/*!*******************************************************!*\
  !*** ./src/components/navigation/components/index.js ***!
  \*******************************************************/
/*! exports provided: CachetteNavigation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachetteNavigation", function() { return CachetteNavigation; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-calendar/dist/entry.nostyle */ "react-calendar/dist/entry.nostyle");
/* harmony import */ var react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_simple_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-simple-dropdown */ "react-simple-dropdown");
/* harmony import */ var react_simple_dropdown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_simple_dropdown__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_simple_dropdown_styles_Dropdown_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-simple-dropdown/styles/Dropdown.css */ "./node_modules/react-simple-dropdown/styles/Dropdown.css");
/* harmony import */ var react_simple_dropdown_styles_Dropdown_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_simple_dropdown_styles_Dropdown_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _resources_icons_user_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/resources/icons/user.svg */ "./src/resources/icons/user.svg");
/* harmony import */ var _resources_icons_user_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_user_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _resources_icons_right_arrow_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/resources/icons/right-arrow.svg */ "./src/resources/icons/right-arrow.svg");
/* harmony import */ var _resources_icons_right_arrow_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_right_arrow_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _resources_icons_more_button_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/resources/icons/more-button.svg */ "./src/resources/icons/more-button.svg");
/* harmony import */ var _resources_icons_more_button_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_more_button_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _resources_icons_controls_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/resources/icons/controls.svg */ "./src/resources/icons/controls.svg");
/* harmony import */ var _resources_icons_controls_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_controls_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _resources_icons_search_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/resources/icons/search.svg */ "./src/resources/icons/search.svg");
/* harmony import */ var _resources_icons_search_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_search_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _cachette_navigation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cachette-navigation */ "./src/components/navigation/components/cachette-navigation.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./styled */ "./src/components/navigation/components/styled.js");







var _jsxFileName = "/Users/iyk/Documents/sandbox/oddschecker-fe-ssr/src/components/navigation/components/index.js";







 // icons






 // Get some shared Styles...


var StyledDropdown = styled_components__WEBPACK_IMPORTED_MODULE_10___default()(react_simple_dropdown__WEBPACK_IMPORTED_MODULE_12___default.a).withConfig({
  displayName: "components__StyledDropdown",
  componentId: "sc-10vh3bx-0"
})(["width:100%;height:100%;.dropdown__trigger{width:100%;height:100%;display:flex;text-align:center;justify-content:center;align-items:center;span{display:block;}}"]);
var StyledCalendar = styled_components__WEBPACK_IMPORTED_MODULE_10___default()(react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_11___default.a).withConfig({
  displayName: "components__StyledCalendar",
  componentId: "sc-10vh3bx-1"
})(["position:absolute;top:.5rem;transform:translateX(-30%);width:35rem;background-color:#FFFFFF;z-index:20;border:1px solid rgba(50,50,50,0.09);box-shadow:0px 5px 20px rgba(50,50,50,0.09);padding:.5rem;button{border:none;padding:1rem;background-color:transparent;border-radius:3px;&:hover{background-color:rgba(80,80,80,0.07);}}.react-calendar__navigation{padding:0rem;border-bottom:1px solid rgba(50,50,50,0.09);margin-bottom:1rem;.react-calendar__navigation__label{color:#DB4437;}}.react-calendar__month-view{margin-top:1.5rem;justify-content:space-around;.react-calendar__month-view__weekdays__weekday{text-align:center;}.react-calendar__month-view__days{border-top:1px solid rgba(50,50,50,0.09);margin-top:1.5rem;display:grid !important;grid-template-columns:repeat(7,auto);.react-calendar__month-view__days__day{max-width:100% !important;text-align:center;}.react-calendar__month-view__days__day--neighboringMonth{opacity:0.3;}}}"]);

var Navigation =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Navigation, _React$Component);

  function Navigation() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navigation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      startDate: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDateChange", function (date) {
      _this.setState({
        startDate: date
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navigation, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["NavContainer"], {
        navHeight: props.navHeight,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["NavContainerFlex"], {
        alignItems: "center",
        flexDirection: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["LogoContainerBox"], {
        className: "logo-container",
        width: ["8rem", "10rem"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["StyledLink"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["LogoWrapper"], {
        className: "logo-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "Logo")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["NavLinksContentContainerBox"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["NavLinksContainerFlex"], {
        flexDirection: "row",
        justifyContent: "space-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["ArrowIconWrapper"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["ArrowIcon"], {
        src: _resources_icons_right_arrow_svg__WEBPACK_IMPORTED_MODULE_16___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["NavLinkWrapperBox"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["StyledNavLink"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "Home"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["NavLinkWrapperBox"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "#",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["StyledNavLink"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "About Us"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["NavLinkWrapperBox"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "#",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["StyledNavLink"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "Instance Games"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["NavLinkWrapperBox"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "#",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["StyledNavLink"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "Betting Highlights"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["NavLinkWrapperBox"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "#",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["StyledNavLink"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "Contact Us"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["RegistrationControlsBox"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Flex"], {
        flexDirection: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        className: "login-control",
        width: ["10rem"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["LoginBtn"], {
        className: "login-btn",
        to: "#",
        bgcolor: "rgba(0,0,0,0)",
        color: "inherit",
        width: "80px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["IconWrapper"], {
        className: "icon-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _resources_icons_user_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
        alt: "user-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "Login"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        className: "register-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["RegisterBtn"], {
        className: "register-btn",
        to: "#",
        bgcolor: "#DB4437",
        color: "#FFFFFF",
        width: "10rem",
        margin: "0px 0px 0px 0rem",
        padding: "1.2rem 1.5rem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "Register"))))), props.withSubnav ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["SubNavigation"], {
        className: "subnav-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["SubNavWrapperFlex"], {
        className: "subnav-wrapper-flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["SubNavLinksContainerBox"], {
        className: "subnav-links-container",
        ml: ["2rem", "5rem"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["SubNavLinksWrapperFlex"], {
        className: "subnav-links-wrapper-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["SubNavLinkWrapperBox"], {
        className: "subnavLinkWrapperBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["StyledSubNavLink"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "All Games"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["SubNavLinkWrapperBox"], {
        className: "subnavLinkWrapperBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["StyledSubNavLink"], {
        activeClassName: "active",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, "Live Games")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["SubNavLinkWrapperBox"], {
        className: "subnavLinkWrapperBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["StyledSubNavLink"], {
        activeClassName: "active",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, "Finished")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["SubNavLinkWrapperBox"], {
        className: "subnavLinkWrapperBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["StyledSubNavLink"], {
        activeClassName: "active",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, "Scheduled")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["SubNavLinkWrapperBox"], {
        className: "subnavLinkWrapperBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["StyledSubNavLink"], {
        activeClassName: "active",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["MoreIconWrapper"], {
        className: "more-icon-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _resources_icons_more_button_svg__WEBPACK_IMPORTED_MODULE_17___default.a,
        alt: "more-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["SubNavControlElementsBox"], {
        className: "subnav-control-elements",
        ml: "auto",
        mr: "5rem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["SubNavControlElementsWrapperFlex"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["SubNavControlElementsWrapperBox"], {
        mr: "1rem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["FilterButtonContainer"], {
        bgcolor: "#FFFFFF",
        color: "#1F1f1f",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledDropdown, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_simple_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownTrigger"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["ControlIconWrapper"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _resources_icons_controls_svg__WEBPACK_IMPORTED_MODULE_18___default.a,
        alt: "filter-controls-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, "Filter by Date")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_simple_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownContent"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledCalendar, {
        onChange: this.handleDateChange,
        value: this.state.startDate,
        prev2Label: null,
        next2Label: null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_21__["SearchBoxWrapperBox"], {
        classNam: "input-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "search-icon-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _resources_icons_search_svg__WEBPACK_IMPORTED_MODULE_19___default.a,
        alt: "search-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "search-bar",
        type: "text",
        placeholder: "Search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }))))))) : null);
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var CachetteNavigation = _cachette_navigation__WEBPACK_IMPORTED_MODULE_20__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Navigation);
Navigation.propTypes = {
  navHeight: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired
};

/***/ }),

/***/ "./src/components/navigation/components/styled.js":
/*!********************************************************!*\
  !*** ./src/components/navigation/components/styled.js ***!
  \********************************************************/
/*! exports provided: CachetteWrapper, NavContainer, NavContainerFlex, LogoContainerBox, LogoWrapper, StyledLink, StyledNavLink, StyledSubNavLink, NavLinksContentContainerBox, NavLinksContainerFlex, NavLinkWrapperBox, ArrowIconWrapper, ArrowIcon, RegistrationControlsBox, IconWrapper, RegisterBtn, LoginBtn, SubNavigation, SubNavLinksContainerBox, SubNavWrapperFlex, SubNavLinksWrapperFlex, SubNavLinkWrapperBox, SubNavControlElementsBox, MoreIconWrapper, SubNavControlElementsWrapperFlex, SubNavControlElementsWrapperBox, ControlIconWrapper, FilterButtonContainer, SearchBoxWrapperBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachetteWrapper", function() { return CachetteWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavContainer", function() { return NavContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavContainerFlex", function() { return NavContainerFlex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoContainerBox", function() { return LogoContainerBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoWrapper", function() { return LogoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledNavLink", function() { return StyledNavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledSubNavLink", function() { return StyledSubNavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLinksContentContainerBox", function() { return NavLinksContentContainerBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLinksContainerFlex", function() { return NavLinksContainerFlex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLinkWrapperBox", function() { return NavLinkWrapperBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowIconWrapper", function() { return ArrowIconWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowIcon", function() { return ArrowIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationControlsBox", function() { return RegistrationControlsBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconWrapper", function() { return IconWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterBtn", function() { return RegisterBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBtn", function() { return LoginBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubNavigation", function() { return SubNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubNavLinksContainerBox", function() { return SubNavLinksContainerBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubNavWrapperFlex", function() { return SubNavWrapperFlex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubNavLinksWrapperFlex", function() { return SubNavLinksWrapperFlex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubNavLinkWrapperBox", function() { return SubNavLinkWrapperBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubNavControlElementsBox", function() { return SubNavControlElementsBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreIconWrapper", function() { return MoreIconWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubNavControlElementsWrapperFlex", function() { return SubNavControlElementsWrapperFlex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubNavControlElementsWrapperBox", function() { return SubNavControlElementsWrapperBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlIconWrapper", function() { return ControlIconWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterButtonContainer", function() { return FilterButtonContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxWrapperBox", function() { return SearchBoxWrapperBox; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/buttons */ "./src/components/shared/buttons/index.js");
/* harmony import */ var _shared_active_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/active-link */ "./src/components/shared/active-link/index.js");
/* eslint-disable no-nested-ternary */
// This folder contains the Styled components for the Navigation Component




 // Wrapper container for the Hidden navigation

var CachetteWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__CachetteWrapper",
  componentId: "sc-3q7b1f-0"
})(["transition:all 0.4s ease-in;height:", ";width:100%;position:fixed;top:0;left:0;z-index:100;transform:translate3d(0,", ",0);"], function (props) {
  return props.height ? props.height : "8rem";
}, function (props) {
  return props.isNavVisible ? "0px" : "-".concat(props.height);
}); // Main Navigation Styles.

var NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__NavContainer",
  componentId: "sc-3q7b1f-1"
})(["height:", ";background-color:#FFFFFF;width:100%;box-shadow:1px 3px 3px rgba(10,10,10,0.02);@media screen and (max-width:960px){height:6rem;background-color:", "}"], function (props) {
  return props.navHeight ? props.navHeight : "8rem";
}, function (props) {
  return props.theme ? props.theme.colorTheme ? props.theme.colorTheme.grey : "inherit" : "inherit";
});
var NavContainerFlex = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"]).withConfig({
  displayName: "styled__NavContainerFlex",
  componentId: "sc-3q7b1f-2"
})(["height:100%;"]);
var LogoContainerBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: "styled__LogoContainerBox",
  componentId: "sc-3q7b1f-3"
})(["height:40%;margin-left:4rem;@media screen and (max-width:960px){height:60%;}"]);
var LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__LogoWrapper",
  componentId: "sc-3q7b1f-4"
})(["width:100%;height:100%;background-color:#E6E6E6;display:flex;justify-content:center;align-items:center;"]);
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "styled__StyledLink",
  componentId: "sc-3q7b1f-5"
})(["color:inherit;text-decortation:none;"]);
var StyledNavLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_shared_active_link__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "styled__StyledNavLink",
  componentId: "sc-3q7b1f-6"
})(["color:inherit;text-decoration:none;"]);
var StyledSubNavLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StyledNavLink).withConfig({
  displayName: "styled__StyledSubNavLink",
  componentId: "sc-3q7b1f-7"
})(["  display:inline-flex;height:95%;justify-content:center;align-items:center;font-size:.95rem;text-transform:uppercase;padding:0px .5rem;"]);
var NavLinksContentContainerBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: "styled__NavLinksContentContainerBox",
  componentId: "sc-3q7b1f-8"
})(["margin-left:3rem;@media screen and (max-width:960px){display:none;}"]);
var NavLinksContainerFlex = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"]).withConfig({
  displayName: "styled__NavLinksContainerFlex",
  componentId: "sc-3q7b1f-9"
})([""]);
var NavLinkWrapperBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: "styled__NavLinkWrapperBox",
  componentId: "sc-3q7b1f-10"
})(["margin-right:2.5rem;a{display:block;font-size:1.2rem;color:inherit;}a::after{content:\"|\";font-size:.8rem;margin-left:2.5rem;display:inline-block;transform:translateY(-2px);color:rgba(10,10,10,0.45)}a.last{border:none;}a.last::after{content:\"\"}"]);
var ArrowIconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(NavLinkWrapperBox).withConfig({
  displayName: "styled__ArrowIconWrapper",
  componentId: "sc-3q7b1f-11"
})(["display:flex;align-items:center;justify-content:center;"]);
var ArrowIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "styled__ArrowIcon",
  componentId: "sc-3q7b1f-12"
})(["width:5px;opacity:0.45;display:block;"]);
var RegistrationControlsBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: "styled__RegistrationControlsBox",
  componentId: "sc-3q7b1f-13"
})(["margin-left:auto;margin-right:4rem;min-width:6rem;@media screen and (max-width:960px){display:none;}"]);
var IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__IconWrapper",
  componentId: "sc-3q7b1f-14"
})(["display:inline-flex;margin-right:1rem;justify-content:center;align-items:center;width:2rem;height:2rem;border-radius:50%;padding:.5rem;background-color:rgba(100,100,100,0.25);img{width:100%;}"]);
var RegisterBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_shared_buttons__WEBPACK_IMPORTED_MODULE_3__["LinkBtn"]).withConfig({
  displayName: "styled__RegisterBtn",
  componentId: "sc-3q7b1f-15"
})(["  font-size:1.4rem;@media screen and (max-width:960px){padding:0.8rem 0.8rem;}"]);
var LoginBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_shared_buttons__WEBPACK_IMPORTED_MODULE_3__["LinkBtn"]).withConfig({
  displayName: "styled__LoginBtn",
  componentId: "sc-3q7b1f-16"
})(["display:flex;flex-direction:row;padding:0.5rem .8rem;align-items:center;margin-right:0.3rem;"]);
var SubNavigation = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__SubNavigation",
  componentId: "sc-3q7b1f-17"
})(["position:relative;height:", ";background-color:", ";@media screen and (max-width:960px){display:none;}"], function (props) {
  return props.height ? props.height : "40px";
}, function (props) {
  return props.height ? props.bgcolor : "rgb(230, 230, 230)";
});
var SubNavLinksContainerBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: "styled__SubNavLinksContainerBox",
  componentId: "sc-3q7b1f-18"
})(["display:block;height:100%;"]);
var SubNavWrapperFlex = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"]).withConfig({
  displayName: "styled__SubNavWrapperFlex",
  componentId: "sc-3q7b1f-19"
})(["height:100%;"]);
var SubNavLinksWrapperFlex = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"]).withConfig({
  displayName: "styled__SubNavLinksWrapperFlex",
  componentId: "sc-3q7b1f-20"
})(["height:100%;"]);
var SubNavLinkWrapperBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: "styled__SubNavLinkWrapperBox",
  componentId: "sc-3q7b1f-21"
})(["display:flex;height:100%;padding:0px .5rem;margin-right:2rem;font-size:1rem;a{color:inherit;display:block;padding-top:10px;&.active{border-bottom:.25rem solid #DB4437;}}"]);
var SubNavControlElementsBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: "styled__SubNavControlElementsBox",
  componentId: "sc-3q7b1f-22"
})(["min-width:20rem;height:70%;"]);
var MoreIconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__MoreIconWrapper",
  componentId: "sc-3q7b1f-23"
})(["width:3rem;img{max-width:50%;max-height:50%;display:block;margin:0 auto;}"]);
var SubNavControlElementsWrapperFlex = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"]).withConfig({
  displayName: "styled__SubNavControlElementsWrapperFlex",
  componentId: "sc-3q7b1f-24"
})(["height:100%;"]);
var SubNavControlElementsWrapperBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: "styled__SubNavControlElementsWrapperBox",
  componentId: "sc-3q7b1f-25"
})(["height:100%;"]);
var ControlIconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__ControlIconWrapper",
  componentId: "sc-3q7b1f-26"
})(["width:1.2rem;height:1.2rem;display:inline-flex;margin-right:1rem;img{max-width:100%;max-height:100%;display:inline-block;}"]);
var FilterButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__FilterButtonContainer",
  componentId: "sc-3q7b1f-27"
})(["border:1px solid rgba(200,200,200,0.9);border-radius:1px;width:15rem;height:100%;display:flex;padding:0px;align-items:center;justify-content:center;font-size:1rem;cursor:pointer;position:relative;background-color:#FFFFFF;"]);
var SearchBoxWrapperBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__SearchBoxWrapperBox",
  componentId: "sc-3q7b1f-28"
})(["width:25rem;background-color:#FFFFFF;height:100%;display:flex;flex-direction:row;padding-left:1rem;border-radius:1px;.search-icon-wrapper{width:3rem;display:flex;align-items:center;justify-content:center;img{width:40%;margin:0 auto;opacity:0.8;}}.search-bar{width:100%;border:none;outline:none;&:focus{}}"]);

/***/ }),

/***/ "./src/components/shared/active-link/index.js":
/*!****************************************************!*\
  !*** ./src/components/shared/active-link/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/iyk/Documents/sandbox/oddschecker-fe-ssr/src/components/shared/active-link/index.js";

 // typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

var ActiveLink = function ActiveLink(_ref) {
  var children = _ref.children,
      router = _ref.router,
      href = _ref.href;
  var style = {
    marginRight: 10,
    color: "inherit"
  };

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push(href);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: href,
    onClick: handleClick,
    style: style,
    className: router.pathname === href ? "active" : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./src/components/shared/buttons/index.js":
/*!************************************************!*\
  !*** ./src/components/shared/buttons/index.js ***!
  \************************************************/
/*! exports provided: ButtonPrimary, LinkBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonPrimary", function() { return ButtonPrimary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkBtn", function() { return LinkBtn; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

 // Primary Button Style

var ButtonPrimary = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "buttons__ButtonPrimary",
  componentId: "jx0x1e-0"
})(["border:none;border-radius:5px;background-color:", ";color:", ";width:", ";font-size:", ";padding:", ";text-align:center;"], function (props) {
  return props.bgcolor ? props.bgcolor : "#1F1F1F";
}, function (props) {
  return props.color ? props.color : "#FFFFFF";
}, function (props) {
  return props.width ? props.width : "10rem";
}, function (props) {
  return props.fontSize ? props.fontSize : "1.2rem";
}, function (props) {
  return props.padding ? props.padding : "1rem 1.5rem";
});
var LinkBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "buttons__LinkBtn",
  componentId: "jx0x1e-1"
})(["border-radius:5px;background-color:", ";color:", ";width:", ";font-size:", ";padding:", ";margin:", ";display:block;text-align:center;"], function (props) {
  return props.bgcolor ? props.bgcolor : "#1F1F1F";
}, function (props) {
  return props.color ? props.color : "#FFFFFF";
}, function (props) {
  return props.width ? props.width : "10rem";
}, function (props) {
  return props.fontSize ? props.fontSize : "1.2rem";
}, function (props) {
  return props.padding ? props.padding : "1rem 1.5rem";
}, function (props) {
  return props.margin ? props.margin : "0rem";
});
ButtonPrimary.propTypes = {
  bgcolor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  padding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
LinkBtn.propTypes = {
  bgcolor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  padding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  margin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./src/data/1st-half-result-odds-data.js":
/*!***********************************************!*\
  !*** ./src/data/1st-half-result-odds-data.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_icons_company_logos_nairabet_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/resources/icons/company-logos/nairabet.svg */ "./src/resources/icons/company-logos/nairabet.svg");
/* harmony import */ var _resources_icons_company_logos_nairabet_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_nairabet_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resources_icons_company_logos_bet9ja_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/resources/icons/company-logos/bet9ja.svg */ "./src/resources/icons/company-logos/bet9ja.svg");
/* harmony import */ var _resources_icons_company_logos_bet9ja_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_bet9ja_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resources_icons_company_logos_betway_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/resources/icons/company-logos/betway.svg */ "./src/resources/icons/company-logos/betway.svg");
/* harmony import */ var _resources_icons_company_logos_betway_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_betway_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _resources_icons_company_logos_betking_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/resources/icons/company-logos/betking-logo.svg */ "./src/resources/icons/company-logos/betking-logo.svg");
/* harmony import */ var _resources_icons_company_logos_betking_logo_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_betking_logo_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _resources_icons_company_logos_sportybet_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/resources/icons/company-logos/sportybet.svg */ "./src/resources/icons/company-logos/sportybet.svg");
/* harmony import */ var _resources_icons_company_logos_sportybet_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_sportybet_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _resources_icons_company_logos_1960bet_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/resources/icons/company-logos/1960bet.png */ "./src/resources/icons/company-logos/1960bet.png");
/* harmony import */ var _resources_icons_company_logos_1960bet_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_1960bet_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _resources_icons_company_logos_surebet247_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/resources/icons/company-logos/surebet247.png */ "./src/resources/icons/company-logos/surebet247.png");
/* harmony import */ var _resources_icons_company_logos_surebet247_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_surebet247_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _resources_icons_company_logos_merrybet_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/resources/icons/company-logos/merrybet.png */ "./src/resources/icons/company-logos/merrybet.png");
/* harmony import */ var _resources_icons_company_logos_merrybet_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_merrybet_png__WEBPACK_IMPORTED_MODULE_7__);









var buildDataTable = function buildDataTable(bet9jaOdds, merryBetOdds, surebetOdds, betwayOdds, sportybetOdds, nairabetOdds, _1960betOdds, betkingOdds) {
  return [{
    logo: _resources_icons_company_logos_nairabet_svg__WEBPACK_IMPORTED_MODULE_0___default.a,
    bookie: "Nairabet",
    1: nairabetOdds ? nairabetOdds["1HT"] : "--.--",
    x: nairabetOdds ? nairabetOdds.XHT : "--.--",
    2: nairabetOdds ? nairabetOdds["2HT"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_bet9ja_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    bookie: "Bet9ja",
    1: bet9jaOdds ? bet9jaOdds["1HT"] : "--.--",
    x: bet9jaOdds ? bet9jaOdds.XHT : "--.--",
    2: bet9jaOdds ? bet9jaOdds["2HT"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_1960bet_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    bookie: "1960Bet",
    1: _1960betOdds ? _1960betOdds["1HT"] : "--.--",
    x: _1960betOdds ? _1960betOdds.XHT : "--.--",
    2: _1960betOdds ? _1960betOdds["2HT"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_betway_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    bookie: "Betway",
    1: betwayOdds ? betwayOdds["1HT"] : "--.--",
    x: betwayOdds ? betwayOdds.XHT : "--.--",
    2: betwayOdds ? betwayOdds["2HT"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_betking_logo_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    bookie: "Betking",
    1: betkingOdds ? betkingOdds["1HT"] : "--.--",
    x: betkingOdds ? betkingOdds.XHT : "--.--",
    2: betkingOdds ? betkingOdds["2HT"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_sportybet_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    bookie: "SportyBet",
    1: sportybetOdds ? sportybetOdds["1HT"] : "--.--",
    x: sportybetOdds ? sportybetOdds.XHT : "--.--",
    2: sportybetOdds ? sportybetOdds["2HT"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_surebet247_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    bookie: "Surebet",
    1: surebetOdds ? surebetOdds["1HT"] : "--.--",
    x: surebetOdds ? surebetOdds.XHT : "--.--",
    2: surebetOdds ? surebetOdds["2HT"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_merrybet_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    bookie: "Merrybet",
    1: merryBetOdds ? merryBetOdds["1HT"] : "--.--",
    x: merryBetOdds ? merryBetOdds.XHT : "--.--",
    2: merryBetOdds ? merryBetOdds["2HT"] : "--.--"
  }];
};

/* harmony default export */ __webpack_exports__["default"] = (buildDataTable);

/***/ }),

/***/ "./src/data/1x2-odds-data.js":
/*!***********************************!*\
  !*** ./src/data/1x2-odds-data.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_icons_company_logos_nairabet_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/resources/icons/company-logos/nairabet.svg */ "./src/resources/icons/company-logos/nairabet.svg");
/* harmony import */ var _resources_icons_company_logos_nairabet_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_nairabet_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resources_icons_company_logos_bet9ja_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/resources/icons/company-logos/bet9ja.svg */ "./src/resources/icons/company-logos/bet9ja.svg");
/* harmony import */ var _resources_icons_company_logos_bet9ja_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_bet9ja_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resources_icons_company_logos_betway_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/resources/icons/company-logos/betway.svg */ "./src/resources/icons/company-logos/betway.svg");
/* harmony import */ var _resources_icons_company_logos_betway_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_betway_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _resources_icons_company_logos_betking_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/resources/icons/company-logos/betking-logo.svg */ "./src/resources/icons/company-logos/betking-logo.svg");
/* harmony import */ var _resources_icons_company_logos_betking_logo_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_betking_logo_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _resources_icons_company_logos_sportybet_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/resources/icons/company-logos/sportybet.svg */ "./src/resources/icons/company-logos/sportybet.svg");
/* harmony import */ var _resources_icons_company_logos_sportybet_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_sportybet_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _resources_icons_company_logos_1960bet_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/resources/icons/company-logos/1960bet.png */ "./src/resources/icons/company-logos/1960bet.png");
/* harmony import */ var _resources_icons_company_logos_1960bet_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_1960bet_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _resources_icons_company_logos_surebet247_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/resources/icons/company-logos/surebet247.png */ "./src/resources/icons/company-logos/surebet247.png");
/* harmony import */ var _resources_icons_company_logos_surebet247_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_surebet247_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _resources_icons_company_logos_merrybet_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/resources/icons/company-logos/merrybet.png */ "./src/resources/icons/company-logos/merrybet.png");
/* harmony import */ var _resources_icons_company_logos_merrybet_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_merrybet_png__WEBPACK_IMPORTED_MODULE_7__);









var buildDataTable = function buildDataTable(bet9jaOdds, merryBetOdds, surebetOdds, betwayOdds, sportybetOdds, nairabetOdds, _1960betOdds, betkingOdds) {
  return [{
    logo: _resources_icons_company_logos_nairabet_svg__WEBPACK_IMPORTED_MODULE_0___default.a,
    bookie: "Nairabet",
    1: nairabetOdds ? nairabetOdds["1"] : "--.--",
    x: nairabetOdds ? nairabetOdds.X : "--.--",
    2: nairabetOdds ? nairabetOdds["2"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_bet9ja_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    bookie: "Bet9ja",
    1: bet9jaOdds ? bet9jaOdds["1"] : "--.--",
    x: bet9jaOdds ? bet9jaOdds.X : "--.--",
    2: bet9jaOdds ? bet9jaOdds["2"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_1960bet_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    bookie: "1960Bet",
    1: _1960betOdds ? _1960betOdds["1"] : "--.--",
    x: _1960betOdds ? _1960betOdds.X : "--.--",
    2: _1960betOdds ? _1960betOdds["2"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_betway_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    bookie: "Betway",
    1: betwayOdds ? betwayOdds["1"] : "--.--",
    x: betwayOdds ? betwayOdds.X : "--.--",
    2: betwayOdds ? betwayOdds["2"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_betking_logo_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    bookie: "Betking",
    1: betkingOdds ? betkingOdds["1"] : "--.--",
    x: betkingOdds ? betkingOdds.X : "--.--",
    2: betkingOdds ? betkingOdds["2"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_sportybet_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    bookie: "SportyBet",
    1: sportybetOdds ? sportybetOdds["1"] : "--.--",
    x: sportybetOdds ? sportybetOdds.X : "--.--",
    2: sportybetOdds ? sportybetOdds["2"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_surebet247_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    bookie: "Surebet",
    1: surebetOdds ? surebetOdds["1"] : "--.--",
    x: surebetOdds ? surebetOdds.X : "--.--",
    2: surebetOdds ? surebetOdds["2"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_merrybet_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    bookie: "Merrybet",
    1: merryBetOdds ? merryBetOdds["1"] : "--.--",
    x: merryBetOdds ? merryBetOdds.X : "--.--",
    2: merryBetOdds ? merryBetOdds["2"] : "--.--"
  }];
};

/* harmony default export */ __webpack_exports__["default"] = (buildDataTable);

/***/ }),

/***/ "./src/data/both-teams-to-score-odds-data.js":
/*!***************************************************!*\
  !*** ./src/data/both-teams-to-score-odds-data.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_icons_company_logos_nairabet_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/resources/icons/company-logos/nairabet.svg */ "./src/resources/icons/company-logos/nairabet.svg");
/* harmony import */ var _resources_icons_company_logos_nairabet_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_nairabet_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resources_icons_company_logos_bet9ja_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/resources/icons/company-logos/bet9ja.svg */ "./src/resources/icons/company-logos/bet9ja.svg");
/* harmony import */ var _resources_icons_company_logos_bet9ja_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_bet9ja_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resources_icons_company_logos_betway_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/resources/icons/company-logos/betway.svg */ "./src/resources/icons/company-logos/betway.svg");
/* harmony import */ var _resources_icons_company_logos_betway_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_betway_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _resources_icons_company_logos_betking_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/resources/icons/company-logos/betking-logo.svg */ "./src/resources/icons/company-logos/betking-logo.svg");
/* harmony import */ var _resources_icons_company_logos_betking_logo_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_betking_logo_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _resources_icons_company_logos_sportybet_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/resources/icons/company-logos/sportybet.svg */ "./src/resources/icons/company-logos/sportybet.svg");
/* harmony import */ var _resources_icons_company_logos_sportybet_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_sportybet_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _resources_icons_company_logos_1960bet_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/resources/icons/company-logos/1960bet.png */ "./src/resources/icons/company-logos/1960bet.png");
/* harmony import */ var _resources_icons_company_logos_1960bet_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_1960bet_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _resources_icons_company_logos_surebet247_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/resources/icons/company-logos/surebet247.png */ "./src/resources/icons/company-logos/surebet247.png");
/* harmony import */ var _resources_icons_company_logos_surebet247_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_surebet247_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _resources_icons_company_logos_merrybet_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/resources/icons/company-logos/merrybet.png */ "./src/resources/icons/company-logos/merrybet.png");
/* harmony import */ var _resources_icons_company_logos_merrybet_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_merrybet_png__WEBPACK_IMPORTED_MODULE_7__);









var buildDataTable = function buildDataTable(bet9jaOdds, merryBetOdds, surebetOdds, betwayOdds, sportybetOdds, nairabetOdds, _1960betOdds, betkingOdds) {
  return [{
    logo: _resources_icons_company_logos_nairabet_svg__WEBPACK_IMPORTED_MODULE_0___default.a,
    bookie: "Nairabet",
    yes: nairabetOdds ? nairabetOdds.GG : "--.--",
    no: nairabetOdds ? nairabetOdds.NG : "--.--"
  }, {
    logo: _resources_icons_company_logos_bet9ja_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    bookie: "Bet9ja",
    yes: bet9jaOdds ? bet9jaOdds.GG : "--.--",
    no: bet9jaOdds ? bet9jaOdds.NG : "--.--"
  }, {
    logo: _resources_icons_company_logos_1960bet_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    bookie: "1960Bet",
    yes: _1960betOdds ? _1960betOdds.GG : "--.--",
    no: _1960betOdds ? _1960betOdds.NG : "--.--"
  }, {
    logo: _resources_icons_company_logos_betway_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    bookie: "Betway",
    yes: betwayOdds ? betwayOdds.GG : "--.--",
    no: betwayOdds ? betwayOdds.NG : "--.--"
  }, {
    logo: _resources_icons_company_logos_betking_logo_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    bookie: "Betking",
    yes: betkingOdds ? betkingOdds.GG : "--.--",
    no: betkingOdds ? betkingOdds.NG : "--.--"
  }, {
    logo: _resources_icons_company_logos_sportybet_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    bookie: "SportyBet",
    yes: sportybetOdds ? sportybetOdds.GG : "--.--",
    no: sportybetOdds ? sportybetOdds.NG : "--.--"
  }, {
    logo: _resources_icons_company_logos_surebet247_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    bookie: "Surebet",
    yes: surebetOdds ? surebetOdds.GG : "--.--",
    no: surebetOdds ? surebetOdds.NG : "--.--"
  }, {
    logo: _resources_icons_company_logos_merrybet_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    bookie: "Merrybet",
    yes: merryBetOdds ? merryBetOdds.GG : "--.--",
    no: merryBetOdds ? merryBetOdds.NG : "--.--"
  }];
};

/* harmony default export */ __webpack_exports__["default"] = (buildDataTable);

/***/ }),

/***/ "./src/data/double-chance-odds-data.js":
/*!*********************************************!*\
  !*** ./src/data/double-chance-odds-data.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_icons_company_logos_nairabet_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/resources/icons/company-logos/nairabet.svg */ "./src/resources/icons/company-logos/nairabet.svg");
/* harmony import */ var _resources_icons_company_logos_nairabet_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_nairabet_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resources_icons_company_logos_bet9ja_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/resources/icons/company-logos/bet9ja.svg */ "./src/resources/icons/company-logos/bet9ja.svg");
/* harmony import */ var _resources_icons_company_logos_bet9ja_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_bet9ja_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resources_icons_company_logos_betway_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/resources/icons/company-logos/betway.svg */ "./src/resources/icons/company-logos/betway.svg");
/* harmony import */ var _resources_icons_company_logos_betway_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_betway_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _resources_icons_company_logos_betking_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/resources/icons/company-logos/betking-logo.svg */ "./src/resources/icons/company-logos/betking-logo.svg");
/* harmony import */ var _resources_icons_company_logos_betking_logo_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_betking_logo_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _resources_icons_company_logos_sportybet_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/resources/icons/company-logos/sportybet.svg */ "./src/resources/icons/company-logos/sportybet.svg");
/* harmony import */ var _resources_icons_company_logos_sportybet_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_sportybet_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _resources_icons_company_logos_1960bet_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/resources/icons/company-logos/1960bet.png */ "./src/resources/icons/company-logos/1960bet.png");
/* harmony import */ var _resources_icons_company_logos_1960bet_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_1960bet_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _resources_icons_company_logos_surebet247_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/resources/icons/company-logos/surebet247.png */ "./src/resources/icons/company-logos/surebet247.png");
/* harmony import */ var _resources_icons_company_logos_surebet247_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_surebet247_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _resources_icons_company_logos_merrybet_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/resources/icons/company-logos/merrybet.png */ "./src/resources/icons/company-logos/merrybet.png");
/* harmony import */ var _resources_icons_company_logos_merrybet_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_merrybet_png__WEBPACK_IMPORTED_MODULE_7__);









var buildDataTable = function buildDataTable(bet9jaOdds, merryBetOdds, surebetOdds, betwayOdds, sportybetOdds, nairabetOdds, _1960betOdds, betkingOdds) {
  return [{
    logo: _resources_icons_company_logos_nairabet_svg__WEBPACK_IMPORTED_MODULE_0___default.a,
    bookie: "Nairabet",
    1: nairabetOdds ? nairabetOdds["1X"] : "--.--",
    x: nairabetOdds ? nairabetOdds["2X"] : "--.--",
    2: nairabetOdds ? nairabetOdds["12"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_bet9ja_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    bookie: "Bet9ja",
    1: bet9jaOdds ? bet9jaOdds["1X"] : "--.--",
    x: bet9jaOdds ? bet9jaOdds["2X"] : "--.--",
    2: bet9jaOdds ? bet9jaOdds["12"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_1960bet_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    bookie: "1960Bet",
    1: _1960betOdds ? _1960betOdds["1X"] : "--.--",
    x: _1960betOdds ? _1960betOdds["2X"] : "--.--",
    2: _1960betOdds ? _1960betOdds["12"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_betway_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    bookie: "Betway",
    1: betwayOdds ? betwayOdds["1X"] : "--.--",
    x: betwayOdds ? betwayOdds["2X"] : "--.--",
    2: betwayOdds ? betwayOdds["12"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_betking_logo_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    bookie: "Betking",
    1: betkingOdds ? betkingOdds["1X"] : "--.--",
    x: betkingOdds ? betkingOdds["2X"] : "--.--",
    2: betkingOdds ? betkingOdds["12"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_sportybet_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    bookie: "SportyBet",
    1: sportybetOdds ? sportybetOdds["1X"] : "--.--",
    x: sportybetOdds ? sportybetOdds["2X"] : "--.--",
    2: sportybetOdds ? sportybetOdds["12"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_surebet247_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    bookie: "Surebet",
    1: surebetOdds ? surebetOdds["1X"] : "--.--",
    x: surebetOdds ? surebetOdds["2X"] : "--.--",
    2: surebetOdds ? surebetOdds["12"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_merrybet_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    bookie: "Merrybet",
    1: merryBetOdds ? merryBetOdds["1X"] : "--.--",
    x: merryBetOdds ? merryBetOdds["2X"] : "--.--",
    2: merryBetOdds ? merryBetOdds["12"] : "--.--"
  }];
};

/* harmony default export */ __webpack_exports__["default"] = (buildDataTable);

/***/ }),

/***/ "./src/data/mock-league.js":
/*!*********************************!*\
  !*** ./src/data/mock-league.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: "1",
  title: "English Premier League",
  games: {
    "0": {
      id: "00001",
      team1: {
        name: "Arsenal",
        badge: ""
      },
      team2: {
        name: "Brentford",
        badge: ""
      },
      time: {
        date: "26 Aug",
        time: "18:00"
      }
    },
    "1": {
      id: "00002",
      team1: {
        name: "Arsenal",
        badge: ""
      },
      team2: {
        name: "Brentford",
        badge: ""
      },
      time: {
        date: "26 Aug",
        time: "18:00"
      }
    },
    "2": {
      id: "00003",
      team1: {
        name: "Nottingham Forest",
        badge: ""
      },
      team2: {
        name: "Fleetwood Town",
        badge: ""
      },
      time: {
        date: "26 Aug",
        time: "13:00"
      }
    },
    "3": {
      id: "00004",
      team1: {
        name: "West Ham",
        badge: ""
      },
      team2: {
        name: "Macclesfield",
        badge: ""
      },
      time: {
        date: "26 Aug",
        time: "13:00"
      }
    },
    "4": {
      id: "00005",
      team1: {
        name: "Tottenham",
        badge: ""
      },
      team2: {
        name: "Watford",
        badge: ""
      },
      time: {
        date: "26 Aug",
        time: "13:00"
      }
    }
  }
}, {
  id: "2",
  title: "English Championship",
  games: {
    "0": {
      id: "00006",
      team1: {
        name: "Arsenal",
        badge: ""
      },
      team2: {
        name: "Brentford",
        badge: ""
      },
      time: {
        date: "26 Aug",
        time: "18:00"
      }
    },
    "1": {
      id: "00007",
      team1: {
        name: "Arsenal",
        badge: ""
      },
      team2: {
        name: "Brentford",
        badge: ""
      },
      time: {
        date: "26 Aug",
        time: "18:00"
      }
    },
    "2": {
      id: "00009",
      team1: {
        name: "Nottingham Forest",
        badge: ""
      },
      team2: {
        name: "Fleetwood Town",
        badge: ""
      },
      time: {
        date: "26 Aug",
        time: "13:00"
      }
    },
    "3": {
      id: "000010",
      team1: {
        name: "West Ham",
        badge: ""
      },
      team2: {
        name: "Macclesfield",
        badge: ""
      },
      time: {
        date: "26 Aug",
        time: "13:00"
      }
    },
    "4": {
      id: "000011",
      team1: {
        name: "Tottenham",
        badge: ""
      },
      team2: {
        name: "Watford",
        badge: ""
      },
      time: {
        date: "26 Aug",
        time: "13:00"
      }
    }
  }
}]);

/***/ }),

/***/ "./src/data/total-goals-odds-data.js":
/*!*******************************************!*\
  !*** ./src/data/total-goals-odds-data.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_icons_company_logos_nairabet_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/resources/icons/company-logos/nairabet.svg */ "./src/resources/icons/company-logos/nairabet.svg");
/* harmony import */ var _resources_icons_company_logos_nairabet_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_nairabet_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resources_icons_company_logos_bet9ja_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/resources/icons/company-logos/bet9ja.svg */ "./src/resources/icons/company-logos/bet9ja.svg");
/* harmony import */ var _resources_icons_company_logos_bet9ja_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_bet9ja_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resources_icons_company_logos_betway_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/resources/icons/company-logos/betway.svg */ "./src/resources/icons/company-logos/betway.svg");
/* harmony import */ var _resources_icons_company_logos_betway_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_betway_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _resources_icons_company_logos_betking_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/resources/icons/company-logos/betking-logo.svg */ "./src/resources/icons/company-logos/betking-logo.svg");
/* harmony import */ var _resources_icons_company_logos_betking_logo_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_betking_logo_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _resources_icons_company_logos_sportybet_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/resources/icons/company-logos/sportybet.svg */ "./src/resources/icons/company-logos/sportybet.svg");
/* harmony import */ var _resources_icons_company_logos_sportybet_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_sportybet_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _resources_icons_company_logos_1960bet_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/resources/icons/company-logos/1960bet.png */ "./src/resources/icons/company-logos/1960bet.png");
/* harmony import */ var _resources_icons_company_logos_1960bet_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_1960bet_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _resources_icons_company_logos_surebet247_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/resources/icons/company-logos/surebet247.png */ "./src/resources/icons/company-logos/surebet247.png");
/* harmony import */ var _resources_icons_company_logos_surebet247_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_surebet247_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _resources_icons_company_logos_merrybet_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/resources/icons/company-logos/merrybet.png */ "./src/resources/icons/company-logos/merrybet.png");
/* harmony import */ var _resources_icons_company_logos_merrybet_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_resources_icons_company_logos_merrybet_png__WEBPACK_IMPORTED_MODULE_7__);









var buildDataTable = function buildDataTable(bet9jaOdds, merryBetOdds, surebetOdds, betwayOdds, sportybetOdds, nairabetOdds, _1960betOdds, betkingOdds) {
  return [{
    logo: _resources_icons_company_logos_nairabet_svg__WEBPACK_IMPORTED_MODULE_0___default.a,
    bookie: "Nairabet",
    under: nairabetOdds ? nairabetOdds["U2.5"] : "--.--",
    over: nairabetOdds ? nairabetOdds["O2.5"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_bet9ja_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    bookie: "Bet9ja",
    under: bet9jaOdds ? bet9jaOdds["U2.5"] : "--.--",
    over: bet9jaOdds ? bet9jaOdds["O2.5"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_1960bet_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    bookie: "1960Bet",
    under: _1960betOdds ? _1960betOdds["U2.5"] : "--.--",
    over: _1960betOdds ? _1960betOdds["O2.5"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_betway_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    bookie: "Betway",
    under: betwayOdds ? betwayOdds["U2.5"] : "--.--",
    over: betwayOdds ? betwayOdds["O2.5"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_betking_logo_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    bookie: "Betking",
    under: betkingOdds ? betkingOdds["U2.5"] : "--.--",
    over: betkingOdds ? betkingOdds["O2.5"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_sportybet_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    bookie: "SportyBet",
    under: sportybetOdds ? sportybetOdds["U2.5"] : "--.--",
    over: sportybetOdds ? sportybetOdds["O2.5"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_surebet247_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    bookie: "Surebet",
    under: surebetOdds ? surebetOdds["U2.5"] : "--.--",
    over: surebetOdds ? surebetOdds["O2.5"] : "--.--"
  }, {
    logo: _resources_icons_company_logos_merrybet_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    bookie: "Merrybet",
    under: merryBetOdds ? merryBetOdds["U2.5"] : "--.--",
    over: merryBetOdds ? merryBetOdds["O2.5"] : "--.--"
  }];
};

/* harmony default export */ __webpack_exports__["default"] = (buildDataTable);

/***/ }),

/***/ "./src/resources/icons/close.svg":
/*!***************************************!*\
  !*** ./src/resources/icons/close.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNTA1Ljk0Myw2LjA1OGMtOC4wNzctOC4wNzctMjEuMTcyLTguMDc3LTI5LjI0OSwwTDYuMDU4LDQ3Ni42OTNjLTguMDc3LDguMDc3LTguMDc3LDIxLjE3MiwwLDI5LjI0OQ0KCQkJQzEwLjA5Niw1MDkuOTgyLDE1LjM5LDUxMiwyMC42ODMsNTEyYzUuMjkzLDAsMTAuNTg2LTIuMDE5LDE0LjYyNS02LjA1OUw1MDUuOTQzLDM1LjMwNg0KCQkJQzUxNC4wMTksMjcuMjMsNTE0LjAxOSwxNC4xMzUsNTA1Ljk0Myw2LjA1OHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTUwNS45NDIsNDc2LjY5NEwzNS4zMDYsNi4wNTljLTguMDc2LTguMDc3LTIxLjE3Mi04LjA3Ny0yOS4yNDgsMGMtOC4wNzcsOC4wNzYtOC4wNzcsMjEuMTcxLDAsMjkuMjQ4bDQ3MC42MzYsNDcwLjYzNg0KCQkJYzQuMDM4LDQuMDM5LDkuMzMyLDYuMDU4LDE0LjYyNSw2LjA1OGM1LjI5MywwLDEwLjU4Ny0yLjAxOSwxNC42MjQtNi4wNTdDNTE0LjAxOCw0OTcuODY2LDUxNC4wMTgsNDg0Ljc3MSw1MDUuOTQyLDQ3Ni42OTR6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./src/resources/icons/company-logos/1960bet.png":
/*!*******************************************************!*\
  !*** ./src/resources/icons/company-logos/1960bet.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1960bet-030db23159bcb3ccd357b9e75cb1b891.png";

/***/ }),

/***/ "./src/resources/icons/company-logos/bet9ja.svg":
/*!******************************************************!*\
  !*** ./src/resources/icons/company-logos/bet9ja.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bet9ja-392830b2e11455fff96c12c4666c6b26.svg";

/***/ }),

/***/ "./src/resources/icons/company-logos/betking-logo.svg":
/*!************************************************************!*\
  !*** ./src/resources/icons/company-logos/betking-logo.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/betking-logo-1b53c096fa533be65e195ad556da8c9a.svg";

/***/ }),

/***/ "./src/resources/icons/company-logos/betway.svg":
/*!******************************************************!*\
  !*** ./src/resources/icons/company-logos/betway.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA0NSIgaGVpZ2h0PSI1NzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNzMxLjgxIDQ4Ny4zYy04LjM3LTIuNjctMTUuNjctNS43Ni0yMS44NS05LjI4bC0yOS4xNCA3OC4xYTI0NC4xIDI0NC4xIDAgMCAwIDQwLjM4IDEzLjk2YzE0LjEyIDMuNTIgMjkuNTcgNS4yOCA0Ni4zNSA1LjI4IDI2LjQ4IDAgNDkuNTUtNS41NCA2OS4yLTE2LjU3IDE5LjY2LTExLjAzIDM1LjIyLTMwLjA1IDQ2LjY3LTU2Ljk1TDIwNDUgMTE5LjE4aC0xMTkuMTdsLTY0Ljg5IDE4OC42NC02NS41My0xODguNjRoLTEyNS44M2wxMzcuMDcgMzA5LjE0LTE4LjUzIDQxLjc3Yy0zLjU3IDcuOTQtNy44OSAxMy40Mi0xMi45NSAxNi41MS01LjA2IDMuMS0xMS43NyA0LjY0LTIwLjE5IDQuNjQtNy4wMyAwLTE0Ljc2LTEuMjgtMjMuMTctMy45NHptLTE4NS4yNC0xODkuNzFjNi42MS0uNjQgMTMuMjctMS4yMyAxOS44Ny0xLjY1djYwLjI1YTc2LjM3IDc2LjM3IDAgMCAxLTE4Ljg1IDEwLjZjLTYuODggMi42Ni0xNC40NCAzLjk0LTIyLjg2IDMuOTQtMTEuNDUgMC0yMC40LTIuOTMtMjYuOC04LjktNi4zOS01Ljk2LTkuNjQtMTMuNTgtOS42NC0yMi44NSAwLTguODQgMi44OC0xNi44OCA4LjYzLTI0LjE4IDUuNzYtNy4yNSAxNS40NS0xMi4wNCAyOS4xNC0xNC4yM2EyMzIuNzUgMjMyLjc1IDAgMCAxIDIwLjUxLTIuOTh6bTI3LjE3IDExOS41bDkuMjcgMjUuMTloOTcuMzNWMjM4LjM1YzAtNDMuMjYtMTIuNTctNzUuMTctMzcuNzctOTUuNjgtMjUuMTQtMjAuNTctNTguOTItMzAuOC0xMDEuMjctMzAuOC0zMC40NyAwLTU2LjYzIDQuNDMtNzguNDcgMTMuMjdhMjA2IDIwNiAwIDAgMC01OS4yNCAzNi4zOWw1MS42MiA1Ny41OWExNDkuMTQgMTQ5LjE0IDAgMCAxIDMyLjc2LTE5Ljg4IDkwLjQgOTAuNCAwIDAgMSAzNi4xMi03LjI0YzExLjQ2IDAgMjEuNDIgMy4wOSAyOS43OCA5LjI3IDguMzcgNi4xOCAxMi41NyAxNS44NyAxMi41NyAyOS4xNHY3Ljk0YTc1Ny40IDc1Ny40IDAgMCAwLTMzLjQ1IDIuMjkgNjA3Ljk2IDYwNy45NiAwIDAgMC0zOS4zNyA1IDE5NS4yNyAxOTUuMjcgMCAwIDAtNDMuNjggMTEuMjVjLTEzLjcgNS4yNy0yNS43NCAxMi4xNC0zNi4xMiAyMC41YTkxIDkxIDAgMCAwLTI0LjQ2IDMwLjQzYy01Ljk2IDExLjkzLTguOTUgMjUuODktOC45NSA0MS43NiAwIDE1LjQ1IDIuNjEgMjkuMTQgNy45NCA0MS4wMmE5MC4zNSA5MC4zNSAwIDAgMCAyMi4xNiAzMC44YzkuNDkgOC42MyAyMC42NyAxNS4xMyAzMy40NiAxOS41NSAxMi43OCA0LjM2IDI2LjY5IDYuNiA0MS43MSA2LjYgMTkuODcgMCAzNy4yOS0yLjk4IDUyLjMyLTguOTUgMTQuOTctNS45MSAyNi45LTEzLjEgMzUuNzQtMjEuNTJ6TTg2NS40NyAzNy41NWwxNDMuMiA0MDQuNzJoODguMDZsNTAuMjktMTY5LjUyIDUwLjk5IDE2OS41Mmg4OC43bDExNC41OS0zMjMuMWgtMTE4LjU0bC00Ny42OCAxNzEuNDgtNDkuNjUtMTcxLjQ5aC03NS40OWwtNDkuNjUgMTcxLjUtODIuNzgtMjUzLjFIODY1LjQ3em0tMjA1LjEgODEuNjF2ODAuNzdoNDUuN3YxNDEuN2MwIDE2LjMgMS42NiAzMS4wNiA0Ljk2IDQ0LjMzIDMuMyAxMy4yNiA4Ljk1IDI0LjUgMTYuOSAzMy43NyA3LjkzIDkuMjcgMTguNDIgMTYuNDcgMzEuNDIgMjEuNTMgMTMuMDUgNS4wNiAyOS4wNCA3LjYyIDQ4IDcuNjIgMjIuNTQgMCA0Mi4zLTIuNjcgNTkuMy03Ljk0IDE2Ljk5LTUuMzMgMzIuNzYtMTMgNDcuMy0yMy4xOGwtMjkuNzgtNzAuMjFhMTEwLjkyIDExMC45MiAwIDAgMS0xOS41NSAxMS45MyA1MS43MSA1MS43MSAwIDAgMS0yMi44IDUuMzNjLTguNDIgMC0xMy44LTMuMDktMTYuMjUtOS4yNy0yLjQtNi4xOC0zLjYyLTE0LjgxLTMuNjItMjUuODRWMTk5Ljk0aDc3LjcybC0yOC42LTgwLjc3aC00OS4xMlYzNy43Mkg3MDYuMDh2ODEuNDVoLTQ1Ljcxem0tMTIxLjQ2IDgxLjA5YzkuMDUgOS45IDE0LjIyIDIzLjUgMTUuNTUgNDAuNzVINDUzLjgzYzEuNzYtMTYuNzggNy42Mi0zMC4yNiAxNy41My00MC40MyA5Ljk2LTEwLjEyIDIxLjUyLTE1LjI0IDM0Ljc4LTE1LjI0IDEyLjc5IDAgMjMuNzEgNSAzMi43NyAxNC45MnptLTY2Ljg2IDE0Ny42N2MtMTEuNzItMTAuODEtMTgtMjUuOTQtMTguOTEtNDUuMzloMjA5LjljLS40My02NC44OC0xNC44Ny0xMTIuODgtNDMuMzctMTQ0LTI4LjQ1LTMxLjEtNjYuNzUtNDYuNjYtMTE0Ljg2LTQ2LjY2LTIzLjM4IDAtNDUuMTIgMy43My02NS4yIDExLjI0LTIwLjA5IDcuNTEtMzcuNCAxOC41NC01MiAzMy4xMy0xNC42IDE0LjU1LTI2LjA1IDMyLjI5LTM0LjQxIDUzLjI4LTguNDIgMjAuOTktMTIuNTggNDQuOS0xMi41OCA3MS44NiAwIDI3LjgxIDQuMzcgNTIuMTYgMTMuMjEgNzMuMTUgOC44NSAyMC45MyAyMC43OCAzOC40IDM1LjggNTIuMjYgMTQuOTcgMTMuOTYgMzIuNSAyNC40NSA1Mi42NCAzMS40OCAyMC4wOCA3LjA0IDQxLjU1IDEwLjYgNjQuNTEgMTAuNiAxOC45NyAwIDM2LjA3LTEuNTQgNTEuMy00LjYzIDE1LjI0LTMuMDkgMjguNzItNy41MSA0MC4zOS0xMy4yNmExNjUuNzkgMTY1Ljc5IDAgMCAwIDMxLjE2LTE5LjVjOS4wNi03LjMgMTcuMS0xNS4zNSAyNC4xOS0yNC4xOWwtNzAuODYtNTUuNjJjLTguOSAxMS4wMy0xOC40OCAxOS4yNC0yOC44MiAyNC41LTEwLjM5IDUuMzQtMjIuODUgNy45NS0zNy40IDcuOTUtMTguMSAwLTMzLjAyLTUuMzgtNDQuNy0xNi4yek0xMzAuNCAzNjMuMTdjLTQuNjQtLjctOS40My0xLjY1LTE0LjI4LTMuMDRWMjAzLjg4YzUuMzMtMS43NiAxMC42LTMuMiAxNS45My00LjI2YTgzLjI0IDgzLjI0IDAgMCAxIDE3LjItMS42NmMxOC41NCAwIDMzLjg5IDYuNjEgNDYuMDMgMTkuODIgMTIuMSAxMy4yNyAxOC4xNyAzMy43OCAxOC4xNyA2MS41OSAwIDI4LjcxLTYuMTggNTAuMDItMTguNTQgNjMuOTMtMTIuMzYgMTMuOS0yOC40NSAyMC44Mi00OC4zMiAyMC44Mi02LjE4IDAtMTEuNTYtLjMyLTE2LjItLjk1em0xMy45LTI0OWEyMDguMjUgMjA4LjI1IDAgMCAwLTI4LjE4IDYuMzRWLjY0SC4zdjQyMi40YzE5LjgyIDcuNTIgNDEuNDUgMTMuOCA2NC44NCAxOC44NyAyMy40NCA1LjExIDQ5LjcgNy42NyA3OC43OSA3LjY3IDI2LjQ3IDAgNTAuODctMy41NyA3My4yLTEwLjYgMjIuMjYtNy4wOSA0MS42LTE3LjggNTcuOS0zMi4xOCAxNi4zNi0xNC4yOCAyOS4wNC0zMi41IDM4LjEtNTQuNiA5LjA1LTIyLjA2IDEzLjU4LTQ4LjExIDEzLjU4LTc4LjEgMC0yMi41NC0zLjMtNDMuNjktOS45Ni02My41Ni02LjYtMTkuODctMTYuMi0zNy4wOC0yOC43Ny01MS42Ny0xMi41Ny0xNC41NS0yOC4xOC0yNi4wNS00Ni43Mi0zNC40Mi0xOC41NC04LjM2LTM5LjQ4LTEyLjU3LTYyLjg2LTEyLjU3LTEyLjg0IDAtMjQuMi43NC0zNC4xIDIuMjl6IiBmaWxsPSIjMDAwIi8+PC9zdmc+"

/***/ }),

/***/ "./src/resources/icons/company-logos/merrybet.png":
/*!********************************************************!*\
  !*** ./src/resources/icons/company-logos/merrybet.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/merrybet-3e21d8cc3d553bbd1262730d5b732b05.png";

/***/ }),

/***/ "./src/resources/icons/company-logos/nairabet.svg":
/*!********************************************************!*\
  !*** ./src/resources/icons/company-logos/nairabet.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTczNCIgaGVpZ2h0PSI1NDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNDYxLjUgNTM2LjVjMS45NyAwIDMuNjIuNTggNS4wNCAxLjgzYTUuOCA1LjggMCAwIDEgMi4wOSA0LjQyYzAgMS43My0uNzcgMy4xNy0yLjA5IDQuNDJhNy4yOCA3LjI4IDAgMCAxLTUuMDQgMS44MyA3LjMxIDcuMzEgMCAwIDEtNS4wNS0xLjgzIDUuNjIgNS42MiAwIDAgMS0yLjA4LTQuNDJjMC0xLjczLjY2LTMuMjcgMi4wOC00LjQyYTcuMzEgNy4zMSAwIDAgMSA1LjA1LTEuODN6bTg0Ljk5LTMyLjVsLTYuMzYgMy40NmMtNS42LTYuNDQtMTMuMTYtOS42MS0yMi44MS05LjYxLTcuNjggMC0xNC4xNSAyLjExLTE5LjIgNi40NC01LjA0IDQuMzItNy42NyA5LjUyLTcuNjcgMTUuNjcgMCA0LjA0IDEuMiA3Ljc5IDMuNTEgMTEuMzVhMjMuNjkgMjMuNjkgMCAwIDAgOS42NSA4LjI3IDMxLjczIDMxLjczIDAgMCAwIDEzLjcxIDIuODhjOS4zMiAwIDE2Ljg4LTMuMTcgMjIuODEtOS42MWw2LjM2IDMuNjVjLTIuOTYgNC4wNC03LjAyIDcuMDItMTIuMDcgOS4yMy01LjE1IDIuMjEtMTAuOTYgMy4yNy0xNy40MyAzLjI3LTkuOTggMC0xOC4yMS0yLjctMjQuNzktOC4yNy02LjU4LTUuNTgtOS44Ny0xMi4yMS05Ljg3LTIwLjIgMC01LjI4IDEuNTQtMTAuMjggNC42MS0xNC44YTI5LjkxIDI5LjkxIDAgMCAxIDEyLjYxLTEwLjY3YzUuMzctMi42IDExLjQxLTMuODUgMTguMS0zLjg1IDQuMTYgMCA4LjIyLjQ4IDEyLjA2IDEuNjRhMzEuNDggMzEuNDggMCAwIDEgOS44NyA0LjMyIDI0LjUzIDI0LjUzIDAgMCAxIDYuOTEgNi44M3ptNDUuNC0xMi43OWM5LjY1IDAgMTcuNzYgMi45OCAyNC4xMiA5LjE0IDUuODIgNS42NyA4LjY3IDEyLjIgOC42NyAxOS45IDAgNy43LTIuOTYgMTQuNDItOS4xIDIwLjItNi4xNSA1LjY2LTE0LjA0IDguNTUtMjMuNjkgOC41NS05LjY1IDAtMTcuNTUtMi44OC0yMy42OS04LjU2LTYuMTQtNS43Ny05LjIxLTEyLjUtOS4yMS0yMC4yIDAtNy41OSAyLjg1LTE0LjIyIDguNjYtMTkuOCA2LjM2LTYuMTUgMTQuNDgtOS4yMyAyNC4yNC05LjIzem0wIDYuOTJjLTYuOCAwLTEyLjUgMi4xMi0xNy4zMyA2LjU0LTQuOTMgNC4zMy03LjM1IDkuNjItNy4zNSAxNS43NyAwIDMuOTQgMS4yMSA3LjYgMy40IDExLjA2YTIxLjY4IDIxLjY4IDAgMCAwIDguODkgNy45OCAyNy44OSAyNy44OSAwIDAgMCAxMi4zOSAyLjc5YzQuNDkgMCA4LjU1LS45NiAxMi4yOC0yLjc5YTIxLjg4IDIxLjg4IDAgMCAwIDguOTktNy45OCAyMC4xOCAyMC4xOCAwIDAgMCAzLjI5LTExLjA2YzAtNi4xNS0yLjQxLTExLjQ0LTcuMzQtMTUuNzctNC44My00LjQyLTEwLjUzLTYuNTQtMTcuMjItNi41NHptNDcuNy01LjU3aDguMTJ2OS41MmMyLjg1LTMuNTYgNS43LTYuMTYgOC42Ni03LjdhMjcuODMgMjcuODMgMCAwIDEgMTIuOTQtMy4xN2MzLjA3IDAgNS45Mi40OCA4LjY2IDEuNTRhMTguOTQgMTguOTQgMCAwIDEgNi42OSA0LjEzIDIxLjEgMjEuMSAwIDAgMSA0LjUgNy41IDI4LjM3IDI4LjM3IDAgMCAxIDEwLjA5LTkuOCAyNS45NyAyNS45NyAwIDAgMSAxMy4wNS0zLjM3YzQuMzkgMCA4LjIyLjk2IDExLjUxIDIuODlhMTcuOTUgMTcuOTUgMCAwIDEgNy40NiA3Ljk4YzEuNjUgMy40NiAyLjQxIDguNjUgMi40MSAxNS41N3YzMGgtOC4yMnYtMzAuMWMwLTUuODYtLjU1LTkuOS0xLjU0LTEyLjFhMTAuNjMgMTAuNjMgMCAwIDAtNC45My01LjRjLTIuMy0xLjM0LTUuMDUtMi4wMS04LjM0LTIuMDEtMy44MyAwLTcuNDUuOTYtMTAuNjMgMy4wN2ExNy4zIDE3LjMgMCAwIDAtNy4xMyA4LjA4Yy0xLjU0IDMuMzctMi4zIDkuMDQtMi4zIDE2LjkzdjIxLjUzaC04LjAxdi0yOC4xN2MwLTYuNjMtLjU1LTExLjE1LTEuNDItMTMuNTZhMTIuMTcgMTIuMTcgMCAwIDAtNC45NC01Ljc3IDE1LjkyIDE1LjkyIDAgMCAwLTguNDQtMi4xMWMtMy43MyAwLTcuMjQuOTYtMTAuNTMgMi45OGExOC4xNCAxOC4xNCAwIDAgMC03LjI0IDcuOThjLTEuNTMgMy4yNy0yLjMgOC40Ni0yLjMgMTUuMjl2MjMuMzZoLTguMTJ2LTU1LjF6TTExOTMuNTYgMTcxLjM4YzYwLjQ4IDAgMTExLjE4IDQxLjU2IDEyNC41MiA5Ny4yNmEyNC41NiAyNC41NiAwIDAgMSAxLjQ1IDguMjJjMCAxMy4yNy0xMS4wMSAyNC4xMi0yNC40NiAyNC4xMi0xMy41NyAwLTIyLjgtMTAuOTYtMjQuNTctMjQuMTItNC42Ny0zNi40LTQ3LjE1LTU4LjMzLTc2Ljk0LTU4LjMzLTQ0LjM2IDAtODAuMTYgMzUuNDEtODAuMTYgNzkuMDUgMCA0My42NSAzNS44IDc5LjA2IDgwLjE2IDc5LjA2IDc2LjI3IDAgNjQuMjYtNjkuODQgOTcuOTUtNjkuODQgMTMuNTYgMCAyNC41NyAxMC44NSAyNC41NyAyNC4xMmEzNS4wNSAzNS4wNSAwIDAgMS0yLjg5IDExLjRjLTE4LjM1IDQ3LjU5LTY1LjA0IDgxLjQ3LTExOS42MyA4MS40Ny03MC43MSAwLTEyNy45Ny01Ni40Ny0xMjcuOTctMTI2LjIgMC01OC40NS02LjEyLTE3Ny40Mi02LjEyLTIzNy4xNyAwLTYuMjUgNS4xMi0xMS4zIDExLjM0LTExLjNoNC43OGM2LjIzIDAgNi4yMyA1LjA1IDYuNjggMTEuM2w5LjQ1IDE2MC43NGE5NS41NSA5NS41NSAwIDAgMSA0LjIyLTUuMTVsLTYuNTYtMTgyLjc5Yy0uMjItNi41OCA1LjQ1LTExLjk1IDEyLjEyLTExLjk1IDYuNTYgMCAxMS43OSA1LjM3IDEyLjAxIDExLjk1bDYuNjcgMTYwLjk3YzEtLjY2IDIuMTEtMS40MyAzLjIyLTIuMlYxMS45NWMwLTYuNTggNS40NS0xMS45NSAxMi4xMi0xMS45NSA2LjY3IDAgMTIuMTIgNS4zNyAxMi4xMiAxMS45NXYxNjcuODdhMTI3LjMzIDEyNy4zMyAwIDAgMSA0NS45Mi04LjQ0ek0xNTkxLjA4IDE2Ny4zN2M3LjY3IDAgMjEuMTUuMTEgMzAuNDYuMTFWODYuMmEyOC41MyAyOC41MyAwIDAgMSAyOC40OS0yOC40MSAyOC40NiAyOC40NiAwIDAgMSAyOC40OSAyOC40aC4xMXY4MS4yOWMxMS4wNyAwIDIwLjcxLS4zMyAzMC4yNC0uMzMgMTYuNDQgMS4xIDI1LjU0IDEyLjI0IDI0Ljc3IDI3LjQyLS43NyAxNS4wOC0xMC4wOCAyMy43MS0yMi45IDI0LjdsLTMyLjExLjF2MTc4LjJoLS4yMmEyOC40MiAyOC40MiAwIDAgMS0yOC4zOCAyNi4yMiAyOC42MSAyOC42MSAwIDAgMS0yOC40OS0yNi4yMlYyMTkuMzhsLTMzLjg2LS4xMWMtOC45OCAwLTIwLjkzLTkuNC0yMS4zNy0yNC40OC0uNDQtMTUuMDcgMTEuMTgtMjcuMSAyNC43Ny0yNy40MnptLTE0NTAuNS0uMWgzLjYzYzEuMi4xIDIuNC4xIDMuNjEuMjEgMS4yIDAgMi40MS4xIDMuNjIuMjIgMS4yLjEgMi40LjEgMy41LjMzbDMuNjIuMzJjMS4xLjIyIDIuMy4zMyAzLjUuNTUgMS4xLjExIDIuMy4zMyAzLjQuNTVsMy41MS42NWMyLjMuNDQgNC41Ljk5IDYuOCAxLjUzbDMuMjguOTljMS4yLjIxIDIuMy42NSAzLjQuOThsMy4yOS45OGMxLjEuNDQgMi4xOS43NyAzLjE3IDEuMiAxLjEuMzMgMi4yLjc3IDMuMjkgMS4yIDMuMTggMS4yIDYuMjUgMi42MyA5LjQyIDQuMDUgMy4wNyAxLjUzIDYuMDMgMy4xNyA4Ljk5IDQuOGExMzUuOTMgMTM1LjkzIDAgMCAxIDIyLjAyIDE1LjYzbDIuNTMgMi4xOGMuODcuNzcgMS42NCAxLjUzIDIuNTIgMi4zIDIuNCAyLjMgNC43IDQuOCA3IDcuMiAxLjU0IDEuNzYgMi45NyAzLjQgNC40IDUuMTRhMTQyLjkgMTQyLjkgMCAwIDEgNi4yNCA3Ljk4Yy42Ni45OCAxLjIgMS44NiAxLjg2IDIuODQuNjYuODcgMS4zMSAxLjg2IDEuODYgMi43M3YuMTFjMS44NyAyLjg0IDMuNjIgNS42OCA1LjI2IDguNjN2LjExYy40NC45OC45OSAxLjk3IDEuNTQgMi45NS41NS45OC45OCAxLjk3IDEuNTMgMy4wNi40NC45OC45OSAyLjA3IDEuNDMgMy4wNi40MyAxLjEuOTggMi4wNyAxLjQyIDMuMTcuODggMi4wNyAxLjY0IDQuMTUgMi41MiA2LjMzLjMzIDEuMS43NyAyLjE5IDEuMSAzLjI4LjMzIDEuMS43NiAyLjA4IDEuMSAzLjI4bC45OCAzLjI4Yy4zMyAxLjA5LjU1IDIuMTguODggMy4yNy4zMiAxLjIuNTQgMi4zLjg3IDMuNGwuNjYgMy40OWMuMjIgMS4wOS40NCAyLjE4LjY2IDMuMzguMjIgMS4yLjQ0IDIuMy42NSAzLjUuMTEgMS4xLjMzIDIuMy40NCAzLjUuMTEgMS4wOS4zMyAyLjI5LjQ0IDMuNWwuMzMgMy40OWMuMSAxLjIuMSAyLjQuMjIgMy42IDAgMS4yLjEgMi40LjEgMy42djMuNjFjMCAyOS42MS0xLjA5IDM3LjE1LTEuODYgNjcuNDFoLS4xdjIuMTljLS4yMiA5LjgzLS40NCAxNS45NS0uNTUgMjUuNzgtMy45NSAxMy41NS0xNi42NiAxOC4yNS0yOC4wNSAxOC4yNWEyNy45MyAyNy45MyAwIDAgMS0yMy41Ni0xMi45IDE1Ljk3IDE1Ljk3IDAgMCAxLTEuNDMtNi41NWMtLjIyLTcuNDMtLjMzLTE0Ljk3LS41NS0yMi40bC0uMS03MC4yNXYtMS41M2MwLTE1Ljg0LTE3LjEtNTguNDUtNDIuNDEtNzIuODctLjU1LS40NC0xLjItLjc2LTEuNzYtMS4xLS41NC0uMzItMS4yLS41NC0xLjc1LS44Ny0uNjYtLjMyLTEuMzEtLjY1LTEuODYtLjk4LS42Ni0uMjItMS4yLS41NC0xLjg3LS43Ni0uNjUtLjMzLTEuMi0uNjYtMS44Ni0uODgtLjY2LS4yMi0xLjMxLS41NC0xLjk3LS43Ni0uNTUtLjIyLTEuMi0uNTUtMS44Ni0uNzdsLTEuOTctLjY1LTEuOTgtLjY2Yy0uNjYtLjIyLTEuMzEtLjQzLTEuOTctLjU0LS42Ni0uMjItMS4zMS0uNDQtMS45Ny0uNTUtLjc3LS4yMi0xLjQzLS4zMy0yLjA4LS41NS0uNjYtLjEtMS4zMi0uMzItMi4wOS0uNDMtLjY1LS4xMS0xLjMxLS4yMi0yLjA4LS4zM2ExMS43IDExLjcgMCAwIDAtMi4wOC0uNDRjLS42Ni0uMS0xLjMxLS4xLTIuMDgtLjIyLS42Ni0uMS0xLjQzLS4yMi0yLjA4LS4yMi0uNzctLjEtMS40My0uMjEtMi4yLS4yMS0uNjUtLjExLTEuNDItLjExLTIuMDgtLjExLS43Ni0uMTEtMS40Mi0uMTEtMi4xOS0uMTFIMTM4LjRjLS42NiAwLTEuNDMgMC0yLjA5LjEtLjc2IDAtMS40MiAwLTIuMTkuMTItLjc2IDAtMS40Mi4xLTIuMDguMjItLjc2IDAtMS40Mi4xLTIuMTkuMjEtLjY2LjExLTEuNDIuMTEtMi4wOC4yMi0uNjYuMTEtMS40My4yMi0yLjA4LjQ0bC0yLjA5LjMzYy0uNjUuMjItMS4zMS4zMi0yLjA4LjQzLS42Ni4yMi0xLjMxLjMzLTEuOTcuNTUtLjY2LjEtMS4zMS4zMy0xLjk3LjU1LS43Ny4yMi0xLjQzLjMyLTIuMDguNTRsLTEuOTguNjZjLS42NS4yMi0xLjMxLjQ0LTEuODYuNjUtLjY2LjIyLTEuMzEuNTUtMS45Ny43Ny0uNjYuMjItMS4zMi41NC0xLjg2Ljc2LS42Ni4yMi0xLjMyLjU1LTEuODcuODhoLS4xYy0uNTUuMjItMS4yMS41NC0xLjc2Ljc2LS42Ni4zMy0xLjMxLjY2LTEuODYuOTgtLjY2LjMzLTEuMi41NS0xLjg3Ljg4LS41NC4zMy0xLjEuNjYtMS43NSAxLjFhODMuODUgODMuODUgMCAwIDAtNDIuMyA3MS42NnYxLjUzbC4xMSA5NC43M2MwIDExLjE0LTEzLjQ4IDIwLjItMjcuMDYgMTkuODgtMTAuOTYtLjIyLTI2LjQxLTcuMS0yNi42My0yMC43NkMxLjk3IDM2Mi40IDAgMzQ1LjY3IDAgMzA3LjQzdi0zLjZjLjExLTEuMi4xMS0yLjQuMjItMy42IDAtMS4yLjEtMi40MS4yMi0zLjYxbC4zMy0zLjVjLjEtMS4yLjIyLTIuNC4zMy0zLjUuMjEtMS4yLjMyLTIuNC41NC0zLjQ5LjExLTEuMi4zMy0yLjMuNTUtMy41YTE4OS4xMSAxODkuMTEgMCAwIDEgMS40My02Ljg4Yy4yMi0xLjEuNTQtMi4xOC43Ni0zLjM5bC45OS0zLjI3Ljk5LTMuMjguOTgtMy4yOGMuNDQtMS4xLjc3LTIuMTggMS4yLTMuMjguNzctMi4xOCAxLjY1LTQuMjYgMi41My02LjMzLjQ0LTEuMS44Ny0yLjA4IDEuMzEtMy4xNy41NS0uOTkuOTktMi4wOCAxLjU0LTMuMDYuNDMtMS4xLjk4LTIuMDggMS40Mi0zLjA2bDEuNjQtMi45NXYtLjFjMS42NS0yLjk2IDMuMy01LjggNS4xNS04LjY0di0uMWMuNjYtLjg4IDEuMjEtMS44NyAxLjg3LTIuNzQuNjYtLjk4IDEuMzEtMS44NiAxLjk3LTIuODQgMS45Ny0yLjczIDMuOTQtNS4zNSA2LjE0LTcuOTggMS40Mi0xLjc1IDIuOTYtMy4zOCA0LjM4LTUuMTMgMi4zLTIuNCA0LjcxLTQuOCA3LjEyLTcuMjEuNzctLjc3IDEuNjUtMS41MyAyLjQxLTIuMy44OC0uNzYgMS43Ni0xLjQyIDIuNTItMi4xOGExNDYuMiAxNDYuMiAwIDAgMSAyMi4wMy0xNS42M2MyLjk2LTEuNjMgNi4wMy0zLjI3IDkuMS00LjggMy4wNi0xLjQyIDYuMjQtMi44NCA5LjQyLTQuMDQuOTgtLjQ0IDIuMDgtLjg4IDMuMTctMS4yIDEuMS0uNDQgMi4yLS43NyAzLjMtMS4ybDMuMjgtMWMxLjEtLjMyIDIuMi0uNzYgMy4yOS0uOTcgMS4xLS4zMyAyLjE5LS42NiAzLjQtLjk5IDIuMTktLjU0IDQuNDktMS4xIDYuNzktMS41M2wzLjQtLjY1YzEuMi0uMjIgMi4zLS40NCAzLjUtLjU1IDEuMS0uMjIgMi4zLS4zMyAzLjUtLjU1bDMuNTEtLjMyYzEuMjEtLjIyIDIuNDItLjIyIDMuNTEtLjMzIDEuMi0uMTEgMi40MS0uMjIgMy42Mi0uMjIgMS4yLS4xIDIuNC0uMSAzLjYxLS4yMmgzLjYyem0yODMuMTYtMi4yYzcwLjkgMCAxMjguMzIgNTcuMjYgMTI4LjMyIDEyNy44MyAwIDQwLjY1LTIuNjMgODIuODItMi42MyAxMjQuMzNoLTI1LjU0YTI1LjYgMjUuNiAwIDAgMS0yNS4wOS0yMC42NSAxMjcuMiAxMjcuMiAwIDAgMS03NS4wNiAyNC4yNmMtNzAuNzkgMC0xMjguMi01Ny4yNS0xMjguMi0xMjcuOTQgMC03MC41NyA1Ny40MS0xMjcuODIgMTI4LjItMTI3Ljgyem0wIDUxLjE0YzQyLjUyIDAgNzYuOTIgMzQuNDEgNzYuOTIgNzYuNyAwIDQyLjM4LTM0LjQgNzYuNjktNzYuOTIgNzYuNjlzLTc2LjkyLTM0LjMtNzYuOTItNzYuN2MwLTQyLjI4IDM0LjQtNzYuNyA3Ni45Mi03Ni43em0yMDEuOTUgMTYuOTNsLjIyIDE2MC4zOWEyNy4yNyAyNy4yNyAwIDAgMS0yNy4xNyAyNy4xaC0yNy4xOFYyMDQuMDdjMC01Ljc5IDIuNjMtMTIuOSA2LjM2LTE4LjguNjUuNTYgMS4yIDEgMS43NSAxLjQzIDE0LjggOS43MiAzNS44MyAxNi41IDQ2LjAyIDQ2LjQzem0xOS45NSA1Ni45MmMwLTY4LjYgNTUuNzctMTI0LjEgMTI0LjU5LTEyNC4xdi40M2MuODctLjExLTQuNi0uMjIgMi43NC0uMjJzMjQuOTggMTEuMTQgMjQuOTggMjQuOWMwIDEzLjc4LTE3LjQyIDI0LjgxLTI0Ljk4IDI0LjgxLTcuNTcgMC0yLjYzLS4xMS0zLjk1LS4yMi0zNS43Mi41NS02NS4zIDQxLjMtNzIuMSA2NS40NGEzNy4wMyAzNy4wMyAwIDAgMC0xLjMyIDEyLjEzbC4zMyAxMDYuNDFjMCAxMy43Ny0xMS4yOCAyMS44Ni0yNS4xIDIxLjg2aC0yNS4wOWMwLTQwLjIxLS4xLTkxLjIzLS4xLTEzMS40NHptMjY5LjEyLTEyNC4xYzcwLjc5IDAgMTI4LjIxIDU3LjI0IDEyOC4yMSAxMjcuODIgMCA0MC42NC0yLjUyIDgyLjctMi41MiAxMjQuMzNoLTI1LjU0YTI1LjcgMjUuNyAwIDAgMS0yNS4wOS0yMC42NSAxMjguMjEgMTI4LjIxIDAgMCAxLTc1LjA2IDI0LjI1Yy03MC45IDAtMTI4LjMyLTU3LjM1LTEyOC4zMi0xMjcuOTMgMC03MC41OCA1Ny40Mi0xMjcuODMgMTI4LjMyLTEyNy44M3ptMCA1MS4xMmM0Mi40IDAgNzYuOTIgMzQuMyA3Ni45MiA3Ni43IDAgNDIuMzktMzQuNTEgNzYuNy03Ni45MiA3Ni43LTQyLjUyIDAtNzYuOTItMzQuMzEtNzYuOTItNzYuNyAwLTQyLjQgMzQuNC03Ni43IDc2LjkyLTc2Ljd6bTU1Ni4xMS00OC40YzY5LjggMCAxMjYuMzQgNTYuMzggMTI2LjM0IDEyNS45NyAwIDQuMzctLjIxIDguNjMtLjY1IDEyLjlIMTM5Ni4wM2E3NS44IDc1LjggMCAwIDAgNzQuODQgNjIuODEgNzUuNzYgNzUuNzYgMCAwIDAgNTkuMDYtMjguMDdjMjIuOS05LjQgNDUuNTkgMTQuNDIgMzIuODggMzguNzhhMTI2LjAzIDEyNi4wMyAwIDAgMS05MS45NCAzOS41NWMtNjkuOCAwLTEyNi4zNC01Ni4zNy0xMjYuMzQtMTI1Ljk3czU2LjU0LTEyNS45NyAxMjYuMzQtMTI1Ljk3em02OC4xNiA5Mi4zMmE3Ni4xNSA3Ni4xNSAwIDAgMC02OC4xNi00Mi4xNyA3NS44NyA3NS44NyAwIDAgMC02OC4wNSA0Mi4xN2gxMzYuMjF6IiBmaWxsPSIjMDEzQkU1Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02MjYuMDUgMjMxLjE2bC0uNTEtNDQuNzhjLS4xLTguODktMy0xOC41My03LjE1LTI2LjQ1LTUuMTgtMTAuMDctMTMuMzYtMTYuODItMjMtMjMuMDMtOS42Mi02LjExLTIxLjEyLTguNzktMjcuMTMtMjEuMzJsLjQyIDM5LjQyYy4yIDEzLjYgNy4yNSAyNS4zOCAxMy42NyAyOS44OCAxNC4wOCA5LjY0IDM0LjE3IDE2LjI4IDQzLjcgNDYuMjh6IiBmaWxsPSIjRjU4NjM0Ii8+PC9zdmc+"

/***/ }),

/***/ "./src/resources/icons/company-logos/sportybet.svg":
/*!*********************************************************!*\
  !*** ./src/resources/icons/company-logos/sportybet.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAxNSIgaGVpZ2h0PSIzODkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1NDQgMTYwYzM4IDI2IDUwIDYyIDM2IDEwMi0xNCAzNy01NCA1Ny0xMTAgNTNsLTE0LTY3YzE4LTEwIDUxLTMgNDEtMzUtNC0xMS0yOC0xNS01MC0yNWwtMTUgMTI4aC03N2wzMi0yOTdjNDkgMCA5Ni0zIDE0MiAwIDI3IDIgNDggMTkgNTUgNDcgNyAyOSA0IDU3LTIwIDc5bC0yMCAxNXptLTk0LTM1YzIxLTYgMzctMTAgNTItMTYgMi0xIDMtMTkgMC0yMC0xMy0xNC0yNi0xNi00NC0xNmwtOCA1MnpNMzY5IDE3OGwtMjMgMjA3aC03NWwzMC0yNzVjNDcgMCA5NC0yIDE0MCAxIDMyIDMgNTEgMjcgNjAgNTcgMjAgNzUtMzQgMTQ2LTExMCAxNDFsLTEyLTU5YzQ1LTE1IDU5LTI4IDUyLTUyLTUtMjAtMjAtMjUtNjItMjB6TTE2NCA4NmMtMTQgMC0yNS0yLTMzIDItOSA2LTE5IDE3LTIwIDI3LTIgNSAxMyAxNSAyMyAxOSA3IDMgMTcgMSAyNSAxIDcyIDEgMTE0IDYzIDkwIDEzMC0xOCA0OC02MyA3Ny0xMTkgNzZsLTE3LTc2YzEyLTEgMjQgMSAzMi00IDEwLTYgMTYtMTcgMjQtMjYtMTAtNi0xOC0xNC0yOC0xOS02LTMtMTUtMS0yMy0xLTYyLTMtOTktNDMtOTYtMTAxQzI1IDU4IDc5IDQgMTMyIDdjNiAxIDE2IDggMTcgMTQgNyAyMCAxMCA0MSAxNSA2NXpNMTgxNiAyODNjLTM3IDM4LTk5IDQ5LTE0NyAyOGE5NCA5NCAwIDAgMS01Ni05NWMzLTgwIDc3LTEzMyAxNTQtMTExIDQ3IDE0IDc3IDcwIDYxIDExNS0yIDYtMTQgMTEtMjIgMTFsLTExMyAxLTMgMTFjMTMgNSAzMCAxNiAzOSAxMSA0MS0xOSA2MCAxNCA4NyAyOXptLTYzLTEwMWw0LTEwYy0xMC00LTIwLTEzLTMwLTEycy0yMCAxMC0zMCAxNmw1IDhoMzFsMjAtMnpNNzUyIDIwMGMwIDY1LTU2IDEyMS0xMjEgMTIyLTU1IDAtOTktNDMtMTAwLTk4LTEtNjUgNTktMTI1IDEyNC0xMjMgNTYgMSA5NyA0MyA5NyA5OXptLTExNyA0OGMyNiAwIDQ4LTIyIDQ3LTQzLTMtMjEtMTYtMzQtMzctMzRzLTQxIDIxLTQxIDQyYzEgMjIgMTMgMzMgMzEgMzV6TTExNDAgMTExbDctNGM2NC01IDY0LTUgNzkgNTggMSA5IDQgMTcgOCAzMyAxMi0yNiAyMi00NCAyOC02NCA3LTIzIDE5LTMyIDQzLTI4IDEyIDIgMjYgMCA0NCAwbC0xMiAzMWMtMzEgNzItNjQgMTQyLTkyIDIxNS0xMSAyOS0yNyA0MC01NiAzNWgtMzBjMS02IDAtMTEgMi0xNCAyOS00MyAyMC04OCA4LTEzNC0xMS00My0yMC04NS0yOS0xMjh6TTkzOSAxMDhsNDMtMmMxLTU0IDQ4LTQ0IDgxLTYwdjU3YzE3IDMgNDAgMSA0OCAxMSAxMSAxNSAxMSAzOCAxNiA2MWgtNzNjLTUgMzgtMTEgNzQtMTIgMTExLTIgMjUtOSAzMy0zMyAzMS0xNC0yLTI3IDAtNDYgMGwxMy0xMzVjLTM3LTEzLTI0LTQ3LTM3LTc0ek0xOTYzIDEwNWM0MyA1IDQzIDUgNTEgNzBoLTYwbC0xNiAxMzloLTc0bDgtOTVjMS0xNyAxNC0zNi0xNS01MC0xMS01LTEwLTM3LTE2LTU5IDEwLTEgMTktMSAyNy0zIDYtMSAxNi02IDE2LTggNC0xNiA0LTI0IDEyLTMwIDExLTggMjktOSA0My0xNGwyNC03djU3ek05MjggMTcxbC03IDNjLTYxLTctNjYgMTUtNjkgNzBsLTkgNzEtMjcgMWgtNDhjNS00NyA4LTkzIDE4LTEzNSAxMS00OSA2Ny04MyAxMTYtNzQgNiAxIDEzIDggMTUgMTRsMTEgNTB6TTkyIDMwM2MxIDI1LTIxIDQ3LTQ2IDQ3LTI0IDAtNDUtMjEtNDYtNDVzMTgtNDUgNDMtNDZjMjYtMiA0OCAxOSA0OSA0NHpNMjc3IDQ0YzEgMjYtMjAgNDgtNDUgNDgtMjQgMC00NC0yMC00NS00NS0xLTI2IDE5LTQ3IDQ1LTQ3IDI1IDAgNDQgMTkgNDUgNDR6IiBmaWxsPSIjMDExQjMzIi8+PHBhdGggZD0iTTE0NTAgMTI1bDgtNTJjMTYgNSAzMSA5IDQ0IDE2IDMgMSAyIDE5IDAgMjAtMTUgNi0zMCAxMC01MiAxNnpNMTc1MyAxODJsLTIwIDJoLTMybC00LThjMTAtNiAyMC0xNSAzMC0xNiA5LTEgMTkgOCAyOSAxMmwtMyAxMHpNNjM1IDI0OGMtMTgtMi0zMC0xMy0zMS0zNS0xLTIxIDE5LTQyIDQxLTQyIDIxIDAgMzQgMTIgMzcgMzMgMSAyMi0yMSA0NC00NyA0NHoiIGZpbGw9IiNmZmYiLz48L3N2Zz4="

/***/ }),

/***/ "./src/resources/icons/company-logos/surebet247.png":
/*!**********************************************************!*\
  !*** ./src/resources/icons/company-logos/surebet247.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/surebet247-bbc27695b65ba3dfd6eda554ce72092a.png";

/***/ }),

/***/ "./src/resources/icons/controls.svg":
/*!******************************************!*\
  !*** ./src/resources/icons/controls.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2IDU2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NiA1NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPHBhdGggZD0iTTgsMTRjMy41MTksMCw2LjQzMi0yLjYxNCw2LjkyLTZINTRjMC41NTMsMCwxLTAuNDQ3LDEtMXMtMC40NDctMS0xLTFIMTQuOTJDMTQuNDMyLDIuNjE0LDExLjUxOSwwLDgsMCAgIEM0LjE0LDAsMSwzLjE0MSwxLDdTNC4xNCwxNCw4LDE0eiBNOCwyYzIuNzU3LDAsNSwyLjI0Myw1LDVzLTIuMjQzLDUtNSw1UzMsOS43NTcsMyw3UzUuMjQzLDIsOCwyeiIgZmlsbD0iIzFmMWYxZiIvPgoJPHBhdGggZD0iTTQ4LDQyYy0zLjUxOSwwLTYuNDMyLDIuNjE0LTYuOTIsNkgyYy0wLjU1MiwwLTEsMC40NDctMSwxczAuNDQ4LDEsMSwxaDM5LjA4YzAuNDg4LDMuMzg2LDMuNDAxLDYsNi45Miw2ICAgYzMuODU5LDAsNy0zLjE0MSw3LTdTNTEuODU5LDQyLDQ4LDQyeiBNNDgsNTRjLTIuNzU3LDAtNS0yLjI0My01LTVzMi4yNDMtNSw1LTVzNSwyLjI0Myw1LDVTNTAuNzU3LDU0LDQ4LDU0eiIgZmlsbD0iIzFmMWYxZiIvPgoJPHBhdGggZD0iTTU0LDI3SDM1LjM2OGMtMC4zOTYtMy42MDItMy40NTUtNi40MTQtNy4xNjEtNi40MTRjLTMuNzA2LDAtNi43NjUsMi44MTMtNy4xNjEsNi40MTRIMmMtMC41NTIsMC0xLDAuNDQ3LTEsMXMwLjQ0OCwxLDEsMSAgIGgxOS4xMDljMC41NzcsMy40LDMuNTM2LDYsNy4wOTgsNmMzLjU2MiwwLDYuNTItMi42LDcuMDk3LTZINTRjMC41NTMsMCwxLTAuNDQ3LDEtMVM1NC41NTMsMjcsNTQsMjd6IE0yOC4yMDcsMzMgICBDMjUuMzM2LDMzLDIzLDMwLjY2NCwyMywyNy43OTNzMi4zMzYtNS4yMDcsNS4yMDctNS4yMDdzNS4yMDcsMi4zMzYsNS4yMDcsNS4yMDdTMzEuMDc4LDMzLDI4LjIwNywzM3oiIGZpbGw9IiMxZjFmMWYiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/resources/icons/facebook-logo.svg":
/*!***********************************************!*\
  !*** ./src/resources/icons/facebook-logo.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDcuODczIiBoZWlnaHQ9IjIwNy4wMDciIHZpZXdCb3g9IjAgMCAyMDcuODczIDIwNy4wMDciPgogIDxnIGlkPSJmYWNlYm9vay1jaXJjdWxhci1sb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjM0OSkiPgogICAgPHBhdGggaWQ9IlBhdGhfMjc1MyIgZGF0YS1uYW1lPSJQYXRoIDI3NTMiIGQ9Ik0xMDMuOTM3LjM0OUExMDMuODgsMTAzLjg4LDAsMCwwLDg2LjYsMjA2LjY2MlYxMjUuOTdINjEuNTNWOTYuOTMySDg2LjZWNzUuNTIxYzAtMjQuODQzLDE1LjE3My0zOC4zODEsMzcuMzM5LTM4LjM4MWEyMDYuOTE1LDIwNi45MTUsMCwwLDEsMjIuMzg3LDEuMTM5VjY0LjI0N2wtMTUuMzczLjAwN2MtMTIuMDUyLDAtMTQuMzc1LDUuNzI2LTE0LjM3NSwxNC4xMzFWOTYuOTE3aDI4Ljc1NmwtMy43NTEsMjkuMDM4SDExNi41OHY4MS40QTEwMy44ODcsMTAzLjg4NywwLDAsMCwxMDMuOTM3LjM0OVoiIGZpbGw9IiMxZTFlMWUiLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/resources/icons/google-plus-logo.svg":
/*!**************************************************!*\
  !*** ./src/resources/icons/google-plus-logo.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iR3JvdXBfODY5IiBkYXRhLW5hbWU9Ikdyb3VwIDg2OSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTcwLjM4NSIgaGVpZ2h0PSIzNjIuNDgxIiB2aWV3Qm94PSIwIDAgNTcwLjM4NSAzNjIuNDgxIj4KICA8cGF0aCBpZD0iUGF0aF8yNzUxIiBkYXRhLW5hbWU9IlBhdGggMjc1MSIgZD0iTTE5LjYyOCwyMTYuOTE3QzE2LjA3OSwxMjMuNDc0LDk3LjkyNiwzNy4xMjMsMTkxLjQ2MiwzNmM0Ny42NzMtNC4wNjYsOTQuMDUzLDE0LjQ0NywxMzAuMTMxLDQ0LjY0MS0xNC44LDE2LjI3Mi0yOS44NTcsMzIuMzU3LTQ1Ljk0Miw0Ny40MTQtMzEuNzYxLTE5LjMtNzAtMzQtMTA3LjEyMS0yMC45NDJDMTA4LjY1OSwxMjQuMTY0LDcyLjQsMTk0Ljg1NSw5NC41NTcsMjUzLjQyNWMxOC4zNDgsNjEuMTcyLDkyLjc1Myw5NC43NDMsMTUxLjA2NSw2OS4wNDUsMzAuMTk0LTEwLjgxMiw1MC4xLTM4LjY3MSw1OC44MzctNjguNjA3LTM0LjYwNS0uNjg5LTY5LjIxOC0uMjU5LTEwMy44MjMtMS4yMTQtLjA4Ni0yMC41ODktLjE3Mi00MS4xLS4wODYtNjEuNjg5LDU3LjcwOS0uMDg2LDExNS41LS4yNTksMTczLjMuMjU5LDMuNTQ5LDUwLjQ0Ni0zLjg5NCwxMDQuNDM0LTM2LjY4OSwxNDQuOTIzLTQ0LjkwNyw1Ny44LTEyNy44NzUsNzQuNzU3LTE5NS4zNjksNTIuMDg0QzcwLjE2MSwzNjQuNywxOC4wNjksMjkyLjUzNSwxOS42MjgsMjE2LjkxN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOS41MTcgLTM1LjQ0NSkiIGZpbGw9IiMxZTFlMWUiLz4KICA8cGF0aCBpZD0iUGF0aF8yNzUyIiBkYXRhLW5hbWU9IlBhdGggMjc1MiIgZD0iTTEyNC42Miw0OC42NjhoNTEuNDczYy4wOTQsMTcuMjIuMjU4LDM0LjUyNy4zNTMsNTEuNzM5LDE3LjIxMi4xNzIsMzQuNTE5LjI1OSw1MS43MzkuMzQ1djUxLjU2N2wtNTEuNzM5LjI1OWMtLjE3MiwxNy4zMDYtLjI1OSwzNC41MTktLjM1Myw1MS44MjUtMTcuMjEyLS4wODYtMzQuNDQsMC01MS41NjcsMC0uMTY1LTE3LjMwNi0uMTY1LTM0LjUxOS0uMzQ1LTUxLjczOS0xNy4yMTItLjE4LTM0LjUxOS0uMjU5LTUxLjczOS0uMzUzVjEwMC43NDRxMjUuODMtLjEyOSw1MS43MzktLjM0NUMxMjQuMjY3LDgzLjE5NSwxMjQuNDQsNjUuODg4LDEyNC42Miw0OC42NjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNDIuMjAxIDU0LjkyOSkiIGZpbGw9IiMxZTFlMWUiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/resources/icons/instagram-logo.svg":
/*!************************************************!*\
  !*** ./src/resources/icons/instagram-logo.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iR3JvdXBfMTEzIiBkYXRhLW5hbWU9Ikdyb3VwIDExMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjk1LjM0MiIgaGVpZ2h0PSIyOTUuMzQyIiB2aWV3Qm94PSIwIDAgMjk1LjM0MiAyOTUuMzQyIj4KICA8cGF0aCBpZD0iUGF0aF8zMzQiIGRhdGEtbmFtZT0iUGF0aCAzMzQiIGQ9Ik0zMTYuNzksMTA5LjQ2OEgxOTcuNDc4YTg4LjAxNSw4OC4wMTUsMCwwLDAtODguMDE1LDg4LjAxNVYzMTYuNzk1YTg4LjAxNSw4OC4wMTUsMCwwLDAsODguMDE1LDg4LjAxNUgzMTYuNzlBODguMDE1LDg4LjAxNSwwLDAsMCw0MDQuOCwzMTYuNzk1VjE5Ny40ODNhODguMDE1LDg4LjAxNSwwLDAsMC04OC4wMTUtODguMDE1Wk0zNzUuMDMyLDMxNi43MWE1OC4yNDIsNTguMjQyLDAsMCwxLTU4LjI0Miw1OC4yNDJIMTk3LjQ3OGE1OC4yNDIsNTguMjQyLDAsMCwxLTU4LjI0Mi01OC4yNDJWMTk3LjRhNTguMjQyLDU4LjI0MiwwLDAsMSw1OC4yNDItNTguMjQySDMxNi43OUE1OC4yNDMsNTguMjQzLDAsMCwxLDM3NS4wMzIsMTk3LjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA5LjQ2MyAtMTA5LjQ2OCkiIGZpbGw9IiMxZTFlMWUiLz4KICA8cGF0aCBpZD0iUGF0aF8zMzUiIGRhdGEtbmFtZT0iUGF0aCAzMzUiIGQ9Ik0yNTYuNTM4LDE4MC4yYTc2LjMzNiw3Ni4zMzYsMCwxLDAsNzYuMzM2LDc2LjMzNkE3Ni4zMzYsNzYuMzM2LDAsMCwwLDI1Ni41MzgsMTgwLjJabTAsMTIyLjk4NWE0Ni42NDgsNDYuNjQ4LDAsMSwxLDQ2LjY0OC00Ni42NDgsNDYuNjQ4LDQ2LjY0OCwwLDAsMS00Ni42NDgsNDYuNjQ4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwOC44NzYgLTEwOC45OTIpIiBmaWxsPSIjMWUxZTFlIi8+CiAgPHBhdGggaWQ9IlBhdGhfMzM5IiBkYXRhLW5hbWU9IlBhdGggMzM5IiBkPSJNMzUwLjM3MSwxODAuOTA4YTE4LjMsMTguMywwLDEsMS0xOC4zLTE4LjMsMTguMywxOC4zLDAsMCwxLDE4LjMsMTguM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDcuOTA2IC0xMTAuMDkpIiBmaWxsPSIjMWUxZTFlIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/resources/icons/loading.svg":
/*!*****************************************!*\
  !*** ./src/resources/icons/loading.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwcHgiICBoZWlnaHQ9IjIwMHB4IiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJsZHMtcm9sbGluZyIgc3R5bGU9ImJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IGJhY2tncm91bmQtcG9zaXRpb246IGluaXRpYWwgaW5pdGlhbDsgYmFja2dyb3VuZC1yZXBlYXQ6IGluaXRpYWwgaW5pdGlhbDsiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIGZpbGw9Im5vbmUiIG5nLWF0dHItc3Ryb2tlPSJ7e2NvbmZpZy5jb2xvcn19IiBuZy1hdHRyLXN0cm9rZS13aWR0aD0ie3tjb25maWcud2lkdGh9fSIgbmctYXR0ci1yPSJ7e2NvbmZpZy5yYWRpdXN9fSIgbmctYXR0ci1zdHJva2UtZGFzaGFycmF5PSJ7e2NvbmZpZy5kYXNoYXJyYXl9fSIgc3Ryb2tlPSIjYmQ0MDMwIiBzdHJva2Utd2lkdGg9IjEwIiByPSIzNSIgc3Ryb2tlLWRhc2hhcnJheT0iMTY0LjkzMzYxNDMxMzQ2NDE1IDU2Ljk3Nzg3MTQzNzgyMTM4Ij48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgY2FsY01vZGU9ImxpbmVhciIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvc3ZnPg=="

/***/ }),

/***/ "./src/resources/icons/login-icon.svg":
/*!********************************************!*\
  !*** ./src/resources/icons/login-icon.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzkzLjEzMSIgaGVpZ2h0PSIxMDM1Ljk5IiB2aWV3Qm94PSIwIDAgMTM5My4xMzEgMTAzNS45OSI+CiAgPGcgaWQ9ImxvZ291dCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNDIuMjk5KSI+CiAgICA8cGF0aCBpZD0iWE1MSURfNF8iIGQ9Ik0yMTYuMiw0MjEuNjE5SDk0OS44NTJhNjMuMzI0LDYzLjMyNCwwLDAsMCwwLTEyNi42NDhIMjE2LjJsODEuODc0LTgxLjg3YTYzLjMyMyw2My4zMjMsMCwwLDAtODkuNTUzLTg5LjU1M0wxOC41NjIsMzEzLjUwOGMtMS40NjksMS40NjUtMi44NTQsMy00LjE3MSw0LjYtLjMyMS4zOTMtLjYuODE1LS45MDgsMS4yMTYtLjk2NywxLjIyOC0xLjkxNywyLjQ2MS0yLjc4NiwzLjc2MS0uMjUzLjM4LS40Ni43ODEtLjcwOSwxLjE2NS0uODcsMS4zNTktMS43MjIsMi43MzEtMi40OTEsNC4xNjItLjE0OC4yODMtLjI3LjU4My0uNDE4Ljg2NS0uOCwxLjU0OS0xLjU2NiwzLjEyLTIuMjM3LDQuNzQxLS4wODQuMi0uMTQ0LjQxLS4yMjQuNjEyLS42ODgsMS43MDYtMS4zMjYsMy40MzItMS44NjYsNS4yMDktLjA3Mi4yMjQtLjExLjQ1Ni0uMTczLjY4NC0uNTExLDEuNzQzLS45NzksMy41LTEuMzM4LDUuMzA3LS4xMDYuNTM2LS4xNTIsMS4wODktLjI0OSwxLjYzLS4yNjIsMS40OTQtLjUyMywyLjk4OS0uNjcxLDQuNTEzYTYyLjQ0Miw2Mi40NDIsMCwwLDAsMCwxMi42NDRjLjE0OCwxLjU0NS40MTgsMy4wNTIuNjc1LDQuNTU5LjA5My41MjMuMTM5LDEuMDYuMjQ1LDEuNTc5LjM2MywxLjgxOS44MjcsMy42LDEuMzQyLDUuMzU3LjA2My4yMDcuMS40MjYuMTY1LjYzMy41NDUsMS43ODYsMS4xODIsMy41MjksMS44NzksNS4yNTIuMDc2LjE4Ni4xMzEuMzg0LjIxMS41Ny42NzUsMS42MzQsMS40NDgsMy4yMTMsMi4yNTQsNC43Ny4xMzkuMjc0LjI1OC41NjEuNC44MzYuNzc3LDEuNDQsMS42MzQsMi44MjQsMi41MTYsNC4yLjIzNi4zNzEuNDM5Ljc2NC42ODQsMS4xMjcuODc0LDEuMywxLjgzMiwyLjU0NiwyLjc5NSwzLjc3OC4zMDguNC41ODMuODE1LjksMS4yLDEuMzIxLDEuNiwyLjcwNiwzLjEzNyw0LjE3MSw0LjZsMTg5Ljk2LDE4OS45NTlhNjMuMzIzLDYzLjMyMywwLDEsMCw4OS41NTMtODkuNTUzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAxMy4xNzYgOTE4Ljg4OSkgcm90YXRlKC0xODApIi8+CiAgICA8cGF0aCBpZD0iWE1MSURfNV8iIGQ9Ik01NDMuODA5LDQyLjNBNTE3LjYxMyw1MTcuNjEzLDAsMCwwLDExMy42MTUsMjcxLjY3MWE2My4zMjQsNjMuMzI0LDAsMCwwLDEwNS4xMTgsNzAuNjRBMzkxLjEzOCwzOTEuMTM4LDAsMCwxLDU0My44MDksMTY4Ljk0M2MyMTUuNzg3LDAsMzkxLjM0NywxNzUuNTYsMzkxLjM0NywzOTEuMzUxUzc1OS42LDk1MS42NDEsNTQzLjgwOSw5NTEuNjQxQTM5MS4yNzUsMzkxLjI3NSwwLDAsMSwyMTkuMjYxLDc3OS4wNTdhNjMuMzI0LDYzLjMyNCwwLDAsMC0xMDQuOTQ1LDcwLjksNTE3Ljc2Myw1MTcuNzYzLDAsMCwwLDQyOS40OTMsMjI4LjMzNGMyODUuNjIxLDAsNTE3Ljk5NS0yMzIuMzcsNTE3Ljk5NS01MTcuOTk1UzgyOS40Myw0Mi4zLDU0My44MDksNDIuM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMzMS4zMjUgMCkiLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/resources/icons/menu.svg":
/*!**************************************!*\
  !*** ./src/resources/icons/menu.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDU3LjU0NCIgaGVpZ2h0PSI1MjguNzcxIiB2aWV3Qm94PSIwIDAgMTA1Ny41NDQgNTI4Ljc3MSI+CiAgPGcgaWQ9Im1lbnUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTk2LjI0MykiPgogICAgPGcgaWQ9Ik1lbnVfMV8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgOTYuMjQzKSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzI3NTAiIGRhdGEtbmFtZT0iUGF0aCAyNzUwIiBkPSJNMzMuMDQ3LDE2Mi4zMzhIMTAyNC41YTMzLjA0NywzMy4wNDcsMCwxLDAsMC02Ni4wOTVIMzMuMDQ3YTMzLjA0NywzMy4wNDcsMCwxLDAsMCw2Ni4wOTVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC05Ni4yNDMpIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzI3NTEiIGRhdGEtbmFtZT0iUGF0aCAyNzUxIiBkPSJNMTAyNC41LDE4MC40NTVIMzMuMDQ3YTMzLjA0NywzMy4wNDcsMCwwLDAsMCw2Ni4wOTVIMTAyNC41YTMzLjA0NywzMy4wNDcsMCwwLDAsMC02Ni4wOTVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUwLjg4MykiLz4KICAgICAgPHBhdGggaWQ9IlBhdGhfMjc1MiIgZGF0YS1uYW1lPSJQYXRoIDI3NTIiIGQ9Ik04MTQuMzE2LDI2NC42NjdIMTUzLjM1YTMzLjA0NywzMy4wNDcsMCwxLDAsMCw2Ni4wOTVIODE0LjMxNmEzMy4wNDcsMzMuMDQ3LDAsMSwwLDAtNjYuMDk1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOS44MiAxOTguMDA5KSIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/resources/icons/more-button.svg":
/*!*********************************************!*\
  !*** ./src/resources/icons/more-button.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNjEyIDYxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjEyIDYxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnIGlkPSJFbGxpcHNlXzJfY29weV8zIj4KCQk8Zz4KCQkJPHBhdGggZD0iTTU1LjYzNiwyNTAuMzY0QzI0LjkwNywyNTAuMzY0LDAsMjc1LjI3LDAsMzA2YzAsMzAuNzMsMjQuOTA3LDU1LjYzNiw1NS42MzYsNTUuNjM2UzExMS4yNzMsMzM2LjczLDExMS4yNzMsMzA2ICAgICBDMTExLjI3MywyNzUuMjcsODYuMzY2LDI1MC4zNjQsNTUuNjM2LDI1MC4zNjR6IE0zMTUuMjczLDI1MC4zNjRjLTMwLjczLDAtNTUuNjM2LDI0LjkwNy01NS42MzYsNTUuNjM2ICAgICBjMCwzMC43MjksMjQuOTA3LDU1LjYzNiw1NS42MzYsNTUuNjM2YzMwLjcyOSwwLDU1LjYzNi0yNC45MDUsNTUuNjM2LTU1LjYzNkMzNzAuOTA5LDI3NS4yNywzNDYuMDAzLDI1MC4zNjQsMzE1LjI3MywyNTAuMzY0eiAgICAgIE01NTYuMzY0LDI1MC4zNjRjLTMwLjczLDAtNTUuNjM2LDI0LjkwNy01NS42MzYsNTUuNjM2YzAsMzAuNzI5LDI0LjkwNiw1NS42MzYsNTUuNjM2LDU1LjYzNiAgICAgQzU4Ny4wOTMsMzYxLjYzNiw2MTIsMzM2LjczLDYxMiwzMDZDNjEyLDI3NS4yNyw1ODcuMDkzLDI1MC4zNjQsNTU2LjM2NCwyNTAuMzY0eiIgZmlsbD0iIzFmMWYxZiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/resources/icons/right-arrow-filled.svg":
/*!****************************************************!*\
  !*** ./src/resources/icons/right-arrow-filled.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDkuMjAxIiBoZWlnaHQ9IjUwOS4yMDEiIHZpZXdCb3g9IjAgMCA1MDkuMjAxIDUwOS4yMDEiPgogIDxnIGlkPSJyaWdodC1hcnJvdyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkuNzkzIC05Ljc5MikiPgogICAgPGcgaWQ9Ikdyb3VwXzg2NiIgZGF0YS1uYW1lPSJHcm91cCA4NjYiPgogICAgICA8cGF0aCBpZD0iUGF0aF8yNzQ5IiBkYXRhLW5hbWU9IlBhdGggMjc0OSIgZD0iTTI1NS42LDUxMC4yaDBDMTE0Ljk5Myw1MTAuMiwxLDM5Ni4yMDksMSwyNTUuNkgxQzEsMTE0Ljk5MywxMTQuOTkzLDEsMjU1LjYsMWgwQzM5Ni4yMDksMSw1MTAuMiwxMTQuOTkzLDUxMC4yLDI1NS42aDBDNTEwLjIsMzk2LjIwOSwzOTYuMjA5LDUxMC4yLDI1NS42LDUxMC4yWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC43OTIgOC43OTIpIiBmaWxsPSIjZGI0NDM3Ii8+CiAgICA8L2c+CiAgICA8cGF0aCBpZD0iUGF0aF8yNzUxIiBkYXRhLW5hbWU9IlBhdGggMjc1MSIgZD0iTTMxLjA4OSwyNjguNmE5Ljc5Miw5Ljc5MiwwLDAsMS02LjkyMy0xNi43MTZMMTM0Ljc1LDE0MS4zLDI0LjE2NSwzMC43MThBOS43OTEsOS43OTEsMCwwLDEsMzguMDEyLDE2Ljg3MUwxNTAuNiwxMjkuNDY0YTE2Ljc1NSwxNi43NTUsMCwwLDEsMCwyMy42NzhMMzguMDEyLDI2NS43MzRBOS43NjYsOS43NjYsMCwwLDEsMzEuMDg5LDI2OC42WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg3LjIyMiAxMjMuMDkpIiBmaWxsPSIjZmZmIi8+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/resources/icons/right-arrow.svg":
/*!*********************************************!*\
  !*** ./src/resources/icons/right-arrow.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2Mi4yIDExNiI+CiAgPGcgaWQ9ImxlZnQtYXJyb3ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk1LjYgMTIyLjUpIHJvdGF0ZSgxODApIj4KICAgIDxwYXRoIGlkPSJQYXRoXzExNiIgZGF0YS1uYW1lPSJQYXRoIDExNiIgZD0iTTg4LjYsMTIxLjNhNC4xLDQuMSwwLDAsMCw1LjgsMCw0LjEsNC4xLDAsMCwwLDAtNS44bC01MS01MSw1MS01MWE0LjEsNC4xLDAsMCwwLTUuOC01LjhsLTU0LDUzLjlhNC4xLDQuMSwwLDAsMCwwLDUuOFoiIHN0cm9rZS13aWR0aD0iMTAiLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/resources/icons/search.svg":
/*!****************************************!*\
  !*** ./src/resources/icons/search.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTIuOTY2IDUyLjk2NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTIuOTY2IDUyLjk2NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZD0iTTUxLjcwNCw1MS4yNzNMMzYuODQ1LDM1LjgyYzMuNzktMy44MDEsNi4xMzgtOS4wNDEsNi4xMzgtMTQuODJjMC0xMS41OC05LjQyLTIxLTIxLTIxcy0yMSw5LjQyLTIxLDIxczkuNDIsMjEsMjEsMjENCgljNS4wODMsMCw5Ljc0OC0xLjgxNywxMy4zODQtNC44MzJsMTQuODk1LDE1LjQ5MWMwLjE5NiwwLjIwNSwwLjQ1OCwwLjMwNywwLjcyMSwwLjMwN2MwLjI1LDAsMC40OTktMC4wOTMsMC42OTMtMC4yNzkNCglDNTIuMDc0LDUyLjMwNCw1Mi4wODYsNTEuNjcxLDUxLjcwNCw1MS4yNzN6IE0yMS45ODMsNDBjLTEwLjQ3NywwLTE5LTguNTIzLTE5LTE5czguNTIzLTE5LDE5LTE5czE5LDguNTIzLDE5LDE5DQoJUzMyLjQ1OSw0MCwyMS45ODMsNDB6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./src/resources/icons/send-button.svg":
/*!*********************************************!*\
  !*** ./src/resources/icons/send-button.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MzUuNSIgaGVpZ2h0PSI0NTkiIHZpZXdCb3g9IjAgMCA1MzUuNSA0NTkiPgogIDxnIGlkPSJzZW5kLWJ1dHRvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzguMjUpIj4KICAgIDxnIGlkPSJzZW5kIj4KICAgICAgPHBhdGggaWQ9IlBhdGhfMjc0OSIgZGF0YS1uYW1lPSJQYXRoIDI3NDkiIGQ9Ik0wLDQ5Ny4yNWw1MzUuNS0yMjkuNUwwLDM4LjI1djE3OC41bDM4Mi41LDUxTDAsMzE4Ljc1WiIgZmlsbD0iI2RiNDQzNyIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/resources/icons/top-games.svg":
/*!*******************************************!*\
  !*** ./src/resources/icons/top-games.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NzUuMDgyIiBoZWlnaHQ9IjQwMS45NTgiIHZpZXdCb3g9IjAgMCA0NzUuMDgyIDQwMS45NTgiPgogIDxnIGlkPSJmb3VyLWJsYWNrLXNxdWFyZXMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTM2LjU0MikiPgogICAgPGcgaWQ9Ikdyb3VwXzg2NiIgZGF0YS1uYW1lPSJHcm91cCA4NjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMzYuNTQyKSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzI3NTMiIGRhdGEtbmFtZT0iUGF0aCAyNzUzIiBkPSJNMTgyLjcyNSwzNi41NDJIMzYuNTQ3QTM1LjExNiwzNS4xMTYsMCwwLDAsMTAuODUsNDcuNCwzNS4xLDM1LjEsMCwwLDAsMCw3My4wODdWMTgyLjcyM2EzNS4xMDksMzUuMTA5LDAsMCwwLDEwLjg1LDI1LjY5MywzNS4xMDksMzUuMTA5LDAsMCwwLDI1LjcsMTAuODU0SDE4Mi43MjVhMzcuMDYzLDM3LjA2MywwLDAsMCwzNi41NDctMzYuNTQ3VjczLjA4N2EzNS4xMDksMzUuMTA5LDAsMCwwLTEwLjg1LTI1LjY5MkEzNS4xMTIsMzUuMTEyLDAsMCwwLDE4Mi43MjUsMzYuNTQyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzYuNTQyKSIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8yNzU0IiBkYXRhLW5hbWU9IlBhdGggMjc1NCIgZD0iTTE4Mi43MjUsMjU1LjgxM0gzNi41NDdhMzUuMTI5LDM1LjEyOSwwLDAsMC0yNS43LDEwLjg1MkEzNS4xMTQsMzUuMTE0LDAsMCwwLDAsMjkyLjM1OFY0MDEuOTk0YTM1LjEwOCwzNS4xMDgsMCwwLDAsMTAuODUsMjUuNjk0LDM1LjExNSwzNS4xMTUsMCwwLDAsMjUuNywxMC44NTJIMTgyLjcyNWEzNy4wNiwzNy4wNiwwLDAsMCwzNi41NDctMzYuNTQ2VjI5Mi4zNThhMzcuMDYsMzcuMDYsMCwwLDAtMzYuNTQ3LTM2LjU0NVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTM2LjU4MikiLz4KICAgICAgPHBhdGggaWQ9IlBhdGhfMjc1NSIgZGF0YS1uYW1lPSJQYXRoIDI3NTUiIGQ9Ik00NjQuMjMsNDcuNGEzNS4wOSwzNS4wOSwwLDAsMC0yNS42OTQtMTAuODU0SDI5Mi4zNTVBMzUuMTA5LDM1LjEwOSwwLDAsMCwyNjYuNjYyLDQ3LjQsMzUuMSwzNS4xLDAsMCwwLDI1NS44MSw3My4wODhWMTgyLjcyNGEzNy4wNjcsMzcuMDY3LDAsMCwwLDM2LjU0NSwzNi41NDdINDM4LjUzNmEzNy4wNjcsMzcuMDY3LDAsMCwwLDM2LjU0Ni0zNi41NDdWNzMuMDg3QTM1LjEsMzUuMSwwLDAsMCw0NjQuMjMsNDcuNFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTM2LjU0MikiLz4KICAgICAgPHBhdGggaWQ9IlBhdGhfMjc1NiIgZGF0YS1uYW1lPSJQYXRoIDI3NTYiIGQ9Ik00MzguNTM2LDI1NS44MTNIMjkyLjM1NWEzNy4wNjMsMzcuMDYzLDAsMCwwLTM2LjU0NSwzNi41NDVWNDAxLjk5NGEzNy4wNjMsMzcuMDYzLDAsMCwwLDM2LjU0NSwzNi41NDZINDM4LjUzNmEzNy4wNjMsMzcuMDYzLDAsMCwwLDM2LjU0Ni0zNi41NDZWMjkyLjM1OGEzNy4wNjMsMzcuMDYzLDAsMCwwLTM2LjU0Ni0zNi41NDVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0zNi41ODIpIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/resources/icons/twitter-logo.svg":
/*!**********************************************!*\
  !*** ./src/resources/icons/twitter-logo.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNDYuOTQ3IiBoZWlnaHQ9IjI4MS45MDkiIHZpZXdCb3g9IjAgMCAzNDYuOTQ3IDI4MS45MDkiPgogIDxwYXRoIGlkPSJQYXRoXzMzMiIgZGF0YS1uYW1lPSJQYXRoIDMzMiIgZD0iTTM0Ni45NDcsODEuMzdhMTQ4LjI4NywxNDguMjg3LDAsMCwxLTQwLjk4MiwxMS4yMjQsNzAuNzIsNzAuNzIsMCwwLDAsMzEuMjgxLTM5LjMsMTQyLjE1NiwxNDIuMTU2LDAsMCwxLTQ1LjEwOSwxNy4yMjJBNzEuMTI1LDcxLjEyNSwwLDAsMCwxNjkuMSwxMTkuMTVhNzMuMjg1LDczLjI4NSwwLDAsMCwxLjYzOSwxNi4yMTksMjAxLjMyMiwyMDEuMzIyLDAsMCwxLTE0Ni41Ny03NC40LDcxLjE0NSw3MS4xNDUsMCwwLDAsMjEuODUxLDk1LjAzOSw3MC4yMzksNzAuMjM5LDAsMCwxLTMyLjEzLTguNzM2di43NzFhNzEuNDUzLDcxLjQ1MywwLDAsMCw1Ni45ODksNjkuODkxLDcwLjk4OSw3MC45ODksMCwwLDEtMTguNjQ5LDIuMzM0LDYyLjkwOCw2Mi45MDgsMCwwLDEtMTMuNS0xLjIxNSw3MS44LDcxLjgsMCwwLDAsNjYuNDU4LDQ5LjU0NUExNDIuOTI2LDE0Mi45MjYsMCwwLDEsMTcuMDI5LDI5OC45NSwxMzMuMjI1LDEzMy4yMjUsMCwwLDEsMCwyOTcuOTg2LDIwMC4yNDIsMjAwLjI0MiwwLDAsMCwxMDkuMTE4LDMyOS45YTIwMS4wNTIsMjAxLjA1MiwwLDAsMCwyMDIuNS0yMDIuNGMwLTMuMTQ0LS4xMTYtNi4xNzEtLjI1MS05LjJBMTQxLjksMTQxLjksMCwwLDAsMzQ2Ljk0Nyw4MS4zN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTQ4KSIgZmlsbD0iIzFlMWUxZSIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/resources/icons/user.svg":
/*!**************************************!*\
  !*** ./src/resources/icons/user.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyNTguNzUgMjU4Ljc1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTguNzUgMjU4Ljc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8Y2lyY2xlIGN4PSIxMjkuMzc1IiBjeT0iNjAiIHI9IjYwIiBmaWxsPSIjMWYxZjFmIi8+Cgk8cGF0aCBkPSJNMTI5LjM3NSwxNTBjLTYwLjA2MSwwLTEwOC43NSw0OC42ODktMTA4Ljc1LDEwOC43NWgyMTcuNUMyMzguMTI1LDE5OC42ODksMTg5LjQzNiwxNTAsMTI5LjM3NSwxNTB6IiBmaWxsPSIjMWYxZjFmIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/resources/images/ad-banners/ad1.png":
/*!*************************************************!*\
  !*** ./src/resources/images/ad-banners/ad1.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ad1-08582bc67c1951b88151e605243471f8.png";

/***/ }),

/***/ "./src/resources/images/ad-banners/ad2.png":
/*!*************************************************!*\
  !*** ./src/resources/images/ad-banners/ad2.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ad2-08088874ab521a1aa6623308525e3b62.png";

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/iyk/Documents/sandbox/oddschecker-fe-ssr/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-adsense":
/*!********************************!*\
  !*** external "react-adsense" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-adsense");

/***/ }),

/***/ "react-calendar/dist/entry.nostyle":
/*!****************************************************!*\
  !*** external "react-calendar/dist/entry.nostyle" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-calendar/dist/entry.nostyle");

/***/ }),

/***/ "react-dropdown":
/*!*********************************!*\
  !*** external "react-dropdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dropdown");

/***/ }),

/***/ "react-simple-dropdown":
/*!****************************************!*\
  !*** external "react-simple-dropdown" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-simple-dropdown");

/***/ }),

/***/ "react-table":
/*!******************************!*\
  !*** external "react-table" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-table");

/***/ }),

/***/ "rebass":
/*!*************************!*\
  !*** external "rebass" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map