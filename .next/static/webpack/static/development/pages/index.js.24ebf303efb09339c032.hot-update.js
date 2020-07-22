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
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "list-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "list-group-item",
    style: {
      backgroundColor: 'black',
      opacity: '0.9'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  }, resObj.data.name), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }, "Current Temperature:"), " ".concat(Math.trunc(convertToFarenheit(resObj.data.main.temp))), "\xB0"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, "High:"), " ".concat(Math.trunc(convertToFarenheit(resObj.data.main.temp_max))), "\xB0"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  }, "Low:"), " ".concat(Math.trunc(convertToFarenheit(resObj.data.main.temp_min))), "\xB0"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, "Feels Like:"), " ".concat(Math.trunc(convertToFarenheit(resObj.data.main.feels_like))), "\xB0"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, "Humidity:"), " ".concat(resObj.data.main.humidity), "%"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc3VsdFdpbmRvdy5qcyJdLCJuYW1lcyI6WyJSZXN1bHRXaW5kb3ciLCJyZXNPYmoiLCJjb252ZXJ0VG9GYXJlbmhlaXQiLCJ0ZW1wIiwiY29udmVydGVkIiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwib3BhY2l0eSIsImNvbG9yIiwiZGF0YSIsIm5hbWUiLCJNYXRoIiwidHJ1bmMiLCJtYWluIiwidGVtcF9tYXgiLCJ0ZW1wX21pbiIsImZlZWxzX2xpa2UiLCJodW1pZGl0eSIsIndlYXRoZXIiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWdCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUVqQyxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLElBQUQsRUFBVTtBQUNqQyxRQUFNQyxTQUFTLEdBQUssQ0FBQ0QsSUFBSSxHQUFDLE1BQU4sSUFBZ0IsR0FBakIsR0FBd0IsRUFBM0M7QUFDQSxXQUFPQyxTQUFQO0FBQ0gsR0FIRDs7QUFLQSxTQUNJO0FBQUssU0FBSyxFQUFFO0FBQUNDLGtCQUFZLEVBQUU7QUFBZixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFpQyxTQUFLLEVBQUU7QUFBQ0MscUJBQWUsRUFBRSxPQUFsQjtBQUEyQkMsYUFBTyxFQUFFO0FBQXBDLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFNBQUssRUFBRTtBQUFDQyxXQUFLLEVBQUU7QUFBUixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtQLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZQyxJQUFqQixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosYUFJU0MsSUFBSSxDQUFDQyxLQUFMLENBQVdWLGtCQUFrQixDQUFDRCxNQUFNLENBQUNRLElBQVAsQ0FBWUksSUFBWixDQUFpQlYsSUFBbEIsQ0FBN0IsQ0FKVCxVQUZKLEVBUUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixhQUlTUSxJQUFJLENBQUNDLEtBQUwsQ0FBV1Ysa0JBQWtCLENBQUNELE1BQU0sQ0FBQ1EsSUFBUCxDQUFZSSxJQUFaLENBQWlCQyxRQUFsQixDQUE3QixDQUpULFVBUkosRUFjSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGFBSVNILElBQUksQ0FBQ0MsS0FBTCxDQUFXVixrQkFBa0IsQ0FBQ0QsTUFBTSxDQUFDUSxJQUFQLENBQVlJLElBQVosQ0FBaUJFLFFBQWxCLENBQTdCLENBSlQsVUFkSixFQW9CSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixhQUlTSixJQUFJLENBQUNDLEtBQUwsQ0FBV1Ysa0JBQWtCLENBQUNELE1BQU0sQ0FBQ1EsSUFBUCxDQUFZSSxJQUFaLENBQWlCRyxVQUFsQixDQUE3QixDQUpULFVBcEJKLEVBMEJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGFBSVNmLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZSSxJQUFaLENBQWlCSSxRQUoxQixPQTFCSixFQWdDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixhQUlTaEIsTUFBTSxDQUFDUSxJQUFQLENBQVlTLE9BQVosQ0FBb0IsQ0FBcEIsRUFBdUJDLFdBSmhDLEVBaENKLENBREosQ0FESixDQURKLENBREo7QUErQ0gsQ0F0REQ7O0tBQU1uQixZO0FBd0RTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMjRlYmYzMDNlZmIwOTMzOWMwMzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJlc3VsdFdpbmRvdyA9ICh7IHJlc09iaiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgY29udmVydFRvRmFyZW5oZWl0ID0gKHRlbXApID0+IHtcclxuICAgICAgICBjb25zdCBjb252ZXJ0ZWQgPSAoKCh0ZW1wLTI3My4xNSkgKiAxLjgpICsgMzIpXHJcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRlZFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogJzE1cHgnfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0LWdyb3VwJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0nIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnYmxhY2snLCBvcGFjaXR5OiAnMC45J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3Jlc09iai5kYXRhLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEN1cnJlbnQgVGVtcGVyYXR1cmU6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCAke01hdGgudHJ1bmMoY29udmVydFRvRmFyZW5oZWl0KHJlc09iai5kYXRhLm1haW4udGVtcCkpfWB9JmRlZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlnaDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgICR7TWF0aC50cnVuYyhjb252ZXJ0VG9GYXJlbmhlaXQocmVzT2JqLmRhdGEubWFpbi50ZW1wX21heCkpfWB9JmRlZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG93OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2AgJHtNYXRoLnRydW5jKGNvbnZlcnRUb0ZhcmVuaGVpdChyZXNPYmouZGF0YS5tYWluLnRlbXBfbWluKSl9YH0mZGVnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZWVscyBMaWtlOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2AgJHtNYXRoLnRydW5jKGNvbnZlcnRUb0ZhcmVuaGVpdChyZXNPYmouZGF0YS5tYWluLmZlZWxzX2xpa2UpKX1gfSZkZWc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEh1bWlkaXR5OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2AgJHtyZXNPYmouZGF0YS5tYWluLmh1bWlkaXR5fWB9JVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaXNpYmlsaXR5OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2AgJHtyZXNPYmouZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0V2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==