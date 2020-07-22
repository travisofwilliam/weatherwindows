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
      backgroundImage: "url(".concat(_public_weather_icons_collection_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, ")"),
      opacity: '0.5'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, resObj.data.name), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 29
    }
  }, "Current Temperature:"), " ".concat(Math.trunc(convertToFarenheit(resObj.data.main.temp))), "\xB0"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  }, "High:"), " ".concat(Math.trunc(convertToFarenheit(resObj.data.main.temp_max))), "\xB0"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }, "Low:"), " ".concat(Math.trunc(convertToFarenheit(resObj.data.main.temp_min))), "\xB0"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 29
    }
  }, "Feels Like:"), " ".concat(Math.trunc(convertToFarenheit(resObj.data.main.feels_like))), "\xB0"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }, "Humidity:"), " ".concat(resObj.data.main.humidity), "%"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc3VsdFdpbmRvdy5qcyJdLCJuYW1lcyI6WyJSZXN1bHRXaW5kb3ciLCJyZXNPYmoiLCJjb252ZXJ0VG9GYXJlbmhlaXQiLCJ0ZW1wIiwiY29udmVydGVkIiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZEltYWdlIiwid2VhdGhlciIsIm9wYWNpdHkiLCJjb2xvciIsImRhdGEiLCJuYW1lIiwiTWF0aCIsInRydW5jIiwibWFpbiIsInRlbXBfbWF4IiwidGVtcF9taW4iLCJmZWVsc19saWtlIiwiaHVtaWRpdHkiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFnQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFFakMsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxJQUFELEVBQVU7QUFDakMsUUFBTUMsU0FBUyxHQUFLLENBQUNELElBQUksR0FBQyxNQUFOLElBQWdCLEdBQWpCLEdBQXdCLEVBQTNDO0FBQ0EsV0FBT0MsU0FBUDtBQUNILEdBSEQ7O0FBS0EsU0FDSTtBQUFLLFNBQUssRUFBRTtBQUFDQyxrQkFBWSxFQUFFO0FBQWYsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBaUMsU0FBSyxFQUFFO0FBQUNDLHFCQUFlLGdCQUFTQywyRUFBVCxNQUFoQjtBQUFxQ0MsYUFBTyxFQUFFO0FBQTlDLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFNBQUssRUFBRTtBQUFDQyxXQUFLLEVBQUU7QUFBUixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtSLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZQyxJQUFqQixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosYUFJU0MsSUFBSSxDQUFDQyxLQUFMLENBQVdYLGtCQUFrQixDQUFDRCxNQUFNLENBQUNTLElBQVAsQ0FBWUksSUFBWixDQUFpQlgsSUFBbEIsQ0FBN0IsQ0FKVCxVQUZKLEVBUUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixhQUlTUyxJQUFJLENBQUNDLEtBQUwsQ0FBV1gsa0JBQWtCLENBQUNELE1BQU0sQ0FBQ1MsSUFBUCxDQUFZSSxJQUFaLENBQWlCQyxRQUFsQixDQUE3QixDQUpULFVBUkosRUFjSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGFBSVNILElBQUksQ0FBQ0MsS0FBTCxDQUFXWCxrQkFBa0IsQ0FBQ0QsTUFBTSxDQUFDUyxJQUFQLENBQVlJLElBQVosQ0FBaUJFLFFBQWxCLENBQTdCLENBSlQsVUFkSixFQW9CSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixhQUlTSixJQUFJLENBQUNDLEtBQUwsQ0FBV1gsa0JBQWtCLENBQUNELE1BQU0sQ0FBQ1MsSUFBUCxDQUFZSSxJQUFaLENBQWlCRyxVQUFsQixDQUE3QixDQUpULFVBcEJKLEVBMEJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGFBSVNoQixNQUFNLENBQUNTLElBQVAsQ0FBWUksSUFBWixDQUFpQkksUUFKMUIsT0ExQkosRUFnQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosYUFJU2pCLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZSCxPQUFaLENBQW9CLENBQXBCLEVBQXVCWSxXQUpoQyxFQWhDSixDQURKLENBREosQ0FESixDQURKO0FBK0NILENBdEREOztLQUFNbkIsWTtBQXdEU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjc0ZTFkNzU0Njc4ZDM4YzEyZjAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VhdGhlciBmcm9tICcuLi9wdWJsaWMvd2VhdGhlci1pY29ucy1jb2xsZWN0aW9uLmpwZydcclxuXHJcbmNvbnN0IFJlc3VsdFdpbmRvdyA9ICh7IHJlc09iaiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgY29udmVydFRvRmFyZW5oZWl0ID0gKHRlbXApID0+IHtcclxuICAgICAgICBjb25zdCBjb252ZXJ0ZWQgPSAoKCh0ZW1wLTI3My4xNSkgKiAxLjgpICsgMzIpXHJcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRlZFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogJzE1cHgnfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0LWdyb3VwJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0nIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7d2VhdGhlcn0pYCwgb3BhY2l0eTogJzAuNSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntyZXNPYmouZGF0YS5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDdXJyZW50IFRlbXBlcmF0dXJlOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2AgJHtNYXRoLnRydW5jKGNvbnZlcnRUb0ZhcmVuaGVpdChyZXNPYmouZGF0YS5tYWluLnRlbXApKX1gfSZkZWc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpZ2g6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCAke01hdGgudHJ1bmMoY29udmVydFRvRmFyZW5oZWl0KHJlc09iai5kYXRhLm1haW4udGVtcF9tYXgpKX1gfSZkZWc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvdzogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgICR7TWF0aC50cnVuYyhjb252ZXJ0VG9GYXJlbmhlaXQocmVzT2JqLmRhdGEubWFpbi50ZW1wX21pbikpfWB9JmRlZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmVlbHMgTGlrZTogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgICR7TWF0aC50cnVuYyhjb252ZXJ0VG9GYXJlbmhlaXQocmVzT2JqLmRhdGEubWFpbi5mZWVsc19saWtlKSl9YH0mZGVnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIdW1pZGl0eTogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgICR7cmVzT2JqLmRhdGEubWFpbi5odW1pZGl0eX1gfSVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlzaWJpbGl0eTogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgICR7cmVzT2JqLmRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3VsdFdpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=