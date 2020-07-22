webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ResultWindow.js":
/*!************************************!*\
  !*** ./components/ResultWindow.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_weather_icons_collection_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/weather-icons-collection.jpg */ "./public/weather-icons-collection.jpg");
/* harmony import */ var _public_weather_icons_collection_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_weather_icons_collection_jpg__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "D:\\development\\weatherjs\\components\\ResultWindow.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ResultWindow = function ResultWindow(_ref) {
  var resObj = _ref.resObj;

  var convertToFarenheit = function convertToFarenheit(temp) {
    var converted = (temp - 273.15) * 1.8 + 32;
    return converted;
  };

  return __jsx("div", {
    style: {
      marginBottom: '15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "list-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "list-group-item",
    style: {
      backgroundImage: "linear-gradient(\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0.5)\n    ), url(".concat(_public_weather_icons_collection_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, ")")
    },
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, resObj.data.name), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }
  }, "Current Temperature:"), " ".concat(Math.trunc(convertToFarenheit(resObj.data.main.temp))), "\xB0"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  }, "High:"), " ".concat(Math.trunc(convertToFarenheit(resObj.data.main.temp_max))), "\xB0"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  }, "Low:"), " ".concat(Math.trunc(convertToFarenheit(resObj.data.main.temp_min))), "\xB0"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, "Feels Like:"), " ".concat(Math.trunc(convertToFarenheit(resObj.data.main.feels_like))), "\xB0"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }, "Humidity:"), " ".concat(resObj.data.main.humidity), "%"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }, "Visibility:"), " ".concat(resObj.data.weather[0].description))))));
};

_c = ResultWindow;
/* harmony default export */ __webpack_exports__["default"] = (ResultWindow);

var _c;

$RefreshReg$(_c, "ResultWindow");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc3VsdFdpbmRvdy5qcyJdLCJuYW1lcyI6WyJSZXN1bHRXaW5kb3ciLCJyZXNPYmoiLCJjb252ZXJ0VG9GYXJlbmhlaXQiLCJ0ZW1wIiwiY29udmVydGVkIiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZEltYWdlIiwid2VhdGhlciIsImNvbG9yIiwib3BhY2l0eSIsImRhdGEiLCJuYW1lIiwiTWF0aCIsInRydW5jIiwibWFpbiIsInRlbXBfbWF4IiwidGVtcF9taW4iLCJmZWVsc19saWtlIiwiaHVtaWRpdHkiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFnQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFFakMsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxJQUFELEVBQVU7QUFDakMsUUFBTUMsU0FBUyxHQUFLLENBQUNELElBQUksR0FBQyxNQUFOLElBQWdCLEdBQWpCLEdBQXdCLEVBQTNDO0FBQ0EsV0FBT0MsU0FBUDtBQUNILEdBSEQ7O0FBS0EsU0FDSTtBQUFLLFNBQUssRUFBRTtBQUFDQyxrQkFBWSxFQUFFO0FBQWYsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBaUMsU0FBSyxFQUFFO0FBQUNDLHFCQUFlLDhGQUczREMsMkVBSDJEO0FBQWhCLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJSTtBQUFLLFNBQUssRUFBRTtBQUFDQyxXQUFLLEVBQUUsT0FBUjtBQUFpQkMsYUFBTyxFQUFFO0FBQTFCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS1IsTUFBTSxDQUFDUyxJQUFQLENBQVlDLElBQWpCLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFESixhQUlTQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1gsa0JBQWtCLENBQUNELE1BQU0sQ0FBQ1MsSUFBUCxDQUFZSSxJQUFaLENBQWlCWCxJQUFsQixDQUE3QixDQUpULFVBRkosRUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGFBSVNTLElBQUksQ0FBQ0MsS0FBTCxDQUFXWCxrQkFBa0IsQ0FBQ0QsTUFBTSxDQUFDUyxJQUFQLENBQVlJLElBQVosQ0FBaUJDLFFBQWxCLENBQTdCLENBSlQsVUFSSixFQWNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosYUFJU0gsSUFBSSxDQUFDQyxLQUFMLENBQVdYLGtCQUFrQixDQUFDRCxNQUFNLENBQUNTLElBQVAsQ0FBWUksSUFBWixDQUFpQkUsUUFBbEIsQ0FBN0IsQ0FKVCxVQWRKLEVBb0JJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGFBSVNKLElBQUksQ0FBQ0MsS0FBTCxDQUFXWCxrQkFBa0IsQ0FBQ0QsTUFBTSxDQUFDUyxJQUFQLENBQVlJLElBQVosQ0FBaUJHLFVBQWxCLENBQTdCLENBSlQsVUFwQkosRUEwQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosYUFJU2hCLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZSSxJQUFaLENBQWlCSSxRQUoxQixPQTFCSixFQWdDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixhQUlTakIsTUFBTSxDQUFDUyxJQUFQLENBQVlILE9BQVosQ0FBb0IsQ0FBcEIsRUFBdUJZLFdBSmhDLEVBaENKLENBSkosQ0FESixDQURKLENBREo7QUFrREgsQ0F6REQ7O0tBQU1uQixZO0FBMkRTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNzY1OTM0NTIxYTY2ZmZlNjI2YWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZWF0aGVyIGZyb20gJy4uL3B1YmxpYy93ZWF0aGVyLWljb25zLWNvbGxlY3Rpb24uanBnJ1xyXG5cclxuY29uc3QgUmVzdWx0V2luZG93ID0gKHsgcmVzT2JqIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBjb252ZXJ0VG9GYXJlbmhlaXQgPSAodGVtcCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZCA9ICgoKHRlbXAtMjczLjE1KSAqIDEuOCkgKyAzMilcclxuICAgICAgICByZXR1cm4gY29udmVydGVkXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnMTVweCd9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3QtZ3JvdXAnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbScgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC41KSxcclxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjUpXHJcbiAgICApLCB1cmwoJHt3ZWF0aGVyfSlgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yOiAnd2hpdGUnLCBvcGFjaXR5OiAnMC44J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3Jlc09iai5kYXRhLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEN1cnJlbnQgVGVtcGVyYXR1cmU6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCAke01hdGgudHJ1bmMoY29udmVydFRvRmFyZW5oZWl0KHJlc09iai5kYXRhLm1haW4udGVtcCkpfWB9JmRlZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlnaDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgICR7TWF0aC50cnVuYyhjb252ZXJ0VG9GYXJlbmhlaXQocmVzT2JqLmRhdGEubWFpbi50ZW1wX21heCkpfWB9JmRlZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG93OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2AgJHtNYXRoLnRydW5jKGNvbnZlcnRUb0ZhcmVuaGVpdChyZXNPYmouZGF0YS5tYWluLnRlbXBfbWluKSl9YH0mZGVnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZWVscyBMaWtlOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2AgJHtNYXRoLnRydW5jKGNvbnZlcnRUb0ZhcmVuaGVpdChyZXNPYmouZGF0YS5tYWluLmZlZWxzX2xpa2UpKX1gfSZkZWc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEh1bWlkaXR5OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2AgJHtyZXNPYmouZGF0YS5tYWluLmh1bWlkaXR5fWB9JVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaXNpYmlsaXR5OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2AgJHtyZXNPYmouZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0V2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==