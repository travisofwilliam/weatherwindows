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

/***/ "./components/Dropdown.js":
/*!********************************!*\
  !*** ./components/Dropdown.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\development\\weatherjs\\components\\Dropdown.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Dropdown = () => {
  return __jsx("div", {
    style: {
      marginBottom: '15px',
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("select", {
    className: "btn btn-block btn-primary",
    name: "cars",
    id: "cars",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 17
    }
  }, "-- Select a State --"), __jsx("option", {
    value: "volvo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  }, "CA"), __jsx("option", {
    value: "saab",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, "AR"), __jsx("option", {
    value: "mercedes",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, "AL"), __jsx("option", {
    value: "audi",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "AZ")));
};

/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\development\\weatherjs\\components\\Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Navbar = () => {
  return __jsx("nav", {
    className: "navbar navbar-dark bg-primary",
    style: {
      marginBottom: '15px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "navbar-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "navbar-brand",
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  }, "Weather Search"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/ResultWindow.js":
/*!************************************!*\
  !*** ./components/ResultWindow.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_weather_icons_collection_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/weather-icons-collection.jpg */ "./public/weather-icons-collection.jpg");
/* harmony import */ var _public_weather_icons_collection_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_weather_icons_collection_jpg__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\development\\weatherjs\\components\\ResultWindow.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ResultWindow = ({
  resObj
}) => {
  const convertToFarenheit = temp => {
    const converted = (temp - 273.15) * 1.8 + 32;
    return converted;
  };

  return __jsx("div", {
    style: {
      marginBottom: '15px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "list-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "list-group-item",
    style: {
      backgroundImage: `linear-gradient(
                        rgba(0, 0, 0, 0.5),
                        rgba(0, 0, 0, 0.5)
                        ), 
                        url(${_public_weather_icons_collection_jpg__WEBPACK_IMPORTED_MODULE_1___default.a})`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      color: 'white',
      opacity: '0.8'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, resObj.data.name), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 29
    }
  }, "Current Temperature:"), ` ${Math.trunc(convertToFarenheit(resObj.data.main.temp))}`, "\xB0"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }, "High:"), ` ${Math.trunc(convertToFarenheit(resObj.data.main.temp_max))}`, "\xB0"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }, "Low:"), ` ${Math.trunc(convertToFarenheit(resObj.data.main.temp_min))}`, "\xB0"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 29
    }
  }, "Feels Like:"), ` ${Math.trunc(convertToFarenheit(resObj.data.main.feels_like))}`, "\xB0"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, "Humidity:"), ` ${resObj.data.main.humidity}`, "%"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }, "Visibility:"), ` ${resObj.data.weather[0].description}`)))));
};

/* harmony default export */ __webpack_exports__["default"] = (ResultWindow);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Dropdown */ "./components/Dropdown.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_ResultWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ResultWindow */ "./components/ResultWindow.js");
var _jsxFileName = "D:\\development\\weatherjs\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Index = () => {
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: city,
    1: setCity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''); // store response object in the state

  const {
    0: resObj,
    1: setResObj
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const API_KEY = '76cc49612d36cbf886e0abbde5395871';
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!city || !city.length) {
      return;
    }

    submitCity();
  }, [city]);

  const handleChange = e => {
    e.preventDefault();
    setText(e.target.value);
  };

  const submitCity = () => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`).then(res => {
      setResObj(res);
    }).catch(err => console.log(err));
    setText('');
  };

  return __jsx("div", {
    className: "container",
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://bootswatch.com/4/flatly/bootstrap.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  })), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }), resObj.hasOwnProperty('data') >= 1 ? __jsx(_components_ResultWindow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    resObj: resObj,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 54
    }
  }) : '', __jsx("form", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("input", {
    style: {
      width: '100%',
      marginBottom: '15px'
    },
    value: text,
    placeholder: "Search weather by city",
    onChange: handleChange,
    type: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx(_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx("button", {
    className: "btn-primary btn-block",
    style: {
      marginBottom: '15px',
      padding: '5px',
      borderRadius: '5px'
    },
    onClick: e => {
      e.preventDefault();
      setCity(text);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "Submit")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./public/weather-icons-collection.jpg":
/*!*********************************************!*\
  !*** ./public/weather-icons-collection.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/weather-icons-collection-94b1916ece089a4020de7020729a7022.jpg";

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\development\weatherjs\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ecm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc3VsdFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvd2VhdGhlci1pY29ucy1jb2xsZWN0aW9uLmpwZyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiRHJvcGRvd24iLCJtYXJnaW5Cb3R0b20iLCJ0ZXh0QWxpZ24iLCJOYXZiYXIiLCJSZXN1bHRXaW5kb3ciLCJyZXNPYmoiLCJjb252ZXJ0VG9GYXJlbmhlaXQiLCJ0ZW1wIiwiY29udmVydGVkIiwiYmFja2dyb3VuZEltYWdlIiwid2VhdGhlciIsImNvbG9yIiwib3BhY2l0eSIsImRhdGEiLCJuYW1lIiwiTWF0aCIsInRydW5jIiwibWFpbiIsInRlbXBfbWF4IiwidGVtcF9taW4iLCJmZWVsc19saWtlIiwiaHVtaWRpdHkiLCJkZXNjcmlwdGlvbiIsIkluZGV4IiwidGV4dCIsInNldFRleHQiLCJ1c2VTdGF0ZSIsImNpdHkiLCJzZXRDaXR5Iiwic2V0UmVzT2JqIiwiQVBJX0tFWSIsInVzZUVmZmVjdCIsImxlbmd0aCIsInN1Ym1pdENpdHkiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImhhc093blByb3BlcnR5Iiwid2lkdGgiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiOztR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Q0FBakMsR0FBcUMsTUFBQyxnRUFBRDtBQUFjLFVBQU0sRUFBRTFDLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBckMsR0FBd0UsRUFOaEYsRUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxTQUFLLEVBQUU7QUFBQzJDLFdBQUssRUFBRSxNQUFSO0FBQWdCL0Msa0JBQVksRUFBRTtBQUE5QixLQUFkO0FBQXFELFNBQUssRUFBRXVCLElBQTVEO0FBQWtFLGVBQVcsRUFBQyx3QkFBOUU7QUFBdUcsWUFBUSxFQUFFVSxZQUFqSDtBQUErSCxRQUFJLEVBQUMsTUFBcEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUNJLGFBQVMsRUFBQyx1QkFEZDtBQUVJLFNBQUssRUFBRTtBQUFDakMsa0JBQVksRUFBRSxNQUFmO0FBQXVCZ0QsYUFBTyxFQUFFLEtBQWhDO0FBQXVDQyxrQkFBWSxFQUFFO0FBQXJELEtBRlg7QUFHSSxXQUFPLEVBQUlmLENBQUQsSUFBTztBQUNiQSxPQUFDLENBQUNDLGNBQUY7QUFDQVIsYUFBTyxDQUFDSixJQUFELENBQVA7QUFDSCxLQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixDQVJKLENBREo7QUF3QkgsQ0F2REQ7O0FBeURlRCxvRUFBZixFOzs7Ozs7Ozs7OztBQ2pFQSxzRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJjb25zdCBEcm9wZG93biA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogJzE1cHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInfX0+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdidG4gYnRuLWJsb2NrIGJ0bi1wcmltYXJ5JyBuYW1lPVwiY2Fyc1wiIGlkPVwiY2Fyc1wiPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj4tLSBTZWxlY3QgYSBTdGF0ZSAtLTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInZvbHZvXCI+Q0E8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzYWFiXCI+QVI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZXJjZWRlc1wiPkFMPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXVkaVwiPkFaPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93biIsImNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRhcmsgYmctcHJpbWFyeVwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnMTVweCd9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5XZWF0aGVyIFNlYXJjaDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIiwiaW1wb3J0IHdlYXRoZXIgZnJvbSAnLi4vcHVibGljL3dlYXRoZXItaWNvbnMtY29sbGVjdGlvbi5qcGcnXHJcblxyXG5jb25zdCBSZXN1bHRXaW5kb3cgPSAoeyByZXNPYmogfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNvbnZlcnRUb0ZhcmVuaGVpdCA9ICh0ZW1wKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29udmVydGVkID0gKCgodGVtcC0yNzMuMTUpICogMS44KSArIDMyKVxyXG4gICAgICAgIHJldHVybiBjb252ZXJ0ZWRcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICcxNXB4J319PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdC1ncm91cCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtJyBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC41KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwoJHt3ZWF0aGVyfSlgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yOiAnd2hpdGUnLCBvcGFjaXR5OiAnMC44J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3Jlc09iai5kYXRhLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEN1cnJlbnQgVGVtcGVyYXR1cmU6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCAke01hdGgudHJ1bmMoY29udmVydFRvRmFyZW5oZWl0KHJlc09iai5kYXRhLm1haW4udGVtcCkpfWB9JmRlZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlnaDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgICR7TWF0aC50cnVuYyhjb252ZXJ0VG9GYXJlbmhlaXQocmVzT2JqLmRhdGEubWFpbi50ZW1wX21heCkpfWB9JmRlZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG93OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2AgJHtNYXRoLnRydW5jKGNvbnZlcnRUb0ZhcmVuaGVpdChyZXNPYmouZGF0YS5tYWluLnRlbXBfbWluKSl9YH0mZGVnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZWVscyBMaWtlOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2AgJHtNYXRoLnRydW5jKGNvbnZlcnRUb0ZhcmVuaGVpdChyZXNPYmouZGF0YS5tYWluLmZlZWxzX2xpa2UpKX1gfSZkZWc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEh1bWlkaXR5OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2AgJHtyZXNPYmouZGF0YS5tYWluLmh1bWlkaXR5fWB9JVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaXNpYmlsaXR5OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2AgJHtyZXNPYmouZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0V2luZG93IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmltcG9ydCBEcm9wZG93biBmcm9tICcuLi9jb21wb25lbnRzL0Ryb3Bkb3duJ1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJ1xyXG5pbXBvcnQgUmVzdWx0V2luZG93IGZyb20gJy4uL2NvbXBvbmVudHMvUmVzdWx0V2luZG93J1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbY2l0eSwgc2V0Q2l0eV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIC8vIHN0b3JlIHJlc3BvbnNlIG9iamVjdCBpbiB0aGUgc3RhdGVcclxuICAgIGNvbnN0IFtyZXNPYmosIHNldFJlc09ial0gPSB1c2VTdGF0ZSh7fSlcclxuICAgIGNvbnN0IEFQSV9LRVkgPSAnNzZjYzQ5NjEyZDM2Y2JmODg2ZTBhYmJkZTUzOTU4NzEnXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZighY2l0eSB8fCAhY2l0eS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdWJtaXRDaXR5KClcclxuICAgIH0sIFtjaXR5XSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdENpdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHtBUElfS0VZfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXNPYmoocmVzKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAgICAgc2V0VGV4dCgnJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJ319PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9ib290c3dhdGNoLmNvbS80L2ZsYXRseS9ib290c3RyYXAubWluLmNzc1wiLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlc09iai5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpID49IDEgPyA8UmVzdWx0V2luZG93IHJlc09iaj17cmVzT2JqfSAvPiA6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBtYXJnaW5Cb3R0b206ICcxNXB4J319IHZhbHVlPXt0ZXh0fSBwbGFjZWhvbGRlcj0nU2VhcmNoIHdlYXRoZXIgYnkgY2l0eScgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnRuLXByaW1hcnkgYnRuLWJsb2NrJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnMTVweCcsIHBhZGRpbmc6ICc1cHgnLCBib3JkZXJSYWRpdXM6ICc1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENpdHkodGV4dClcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA+U3VibWl0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy93ZWF0aGVyLWljb25zLWNvbGxlY3Rpb24tOTRiMTkxNmVjZTA4OWE0MDIwZGU3MDIwNzI5YTcwMjIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=