webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Dropdown.js":
/*!********************************!*\
  !*** ./components/Dropdown.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "D:\\development\\weatherjs\\components\\Dropdown.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Dropdown = function Dropdown() {
  return __jsx("div", {
    "class": "dropdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("button", {
    "class": "btn btn-secondary dropdown-toggle",
    type: "button",
    id: "dropdownMenuButton",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, "Dropdown button"), __jsx("div", {
    "class": "dropdown-menu",
    "aria-labelledby": "dropdownMenuButton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("a", {
    "class": "dropdown-item",
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, "Action"), __jsx("a", {
    "class": "dropdown-item",
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Another action"), __jsx("a", {
    "class": "dropdown-item",
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "Something else here")));
};

_c = Dropdown;
/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

var _c;

$RefreshReg$(_c, "Dropdown");

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

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Dropdown */ "./components/Dropdown.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_ResultWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ResultWindow */ "./components/ResultWindow.js");
var _this = undefined,
    _jsxFileName = "D:\\development\\weatherjs\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Index = function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      text = _useState[0],
      setText = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      city = _useState2[0],
      setCity = _useState2[1]; // store response object in the state


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      resObj = _useState3[0],
      setResObj = _useState3[1];

  var API_KEY = '76cc49612d36cbf886e0abbde5395871';
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!city || !city.length) {
      return;
    }

    submitCity();
  }, [city]);

  var handleChange = function handleChange(e) {
    e.preventDefault();
    setText(e.target.value);
  };

  var submitCity = function submitCity() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(API_KEY)).then(function (res) {
      setResObj(res);
    })["catch"](function (err) {
      return console.log(err);
    });
    setText('');
  };

  return __jsx("div", {
    className: "container",
    style: {
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://bootswatch.com/4/flatly/bootstrap.min.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  })), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }), resObj.hasOwnProperty('data') >= 1 ? __jsx(_components_ResultWindow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    resObj: resObj,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 54
    }
  }) : '', __jsx("form", {
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("button", {
    className: "btn-light btn-block",
    style: {
      marginBottom: '15px',
      padding: '5px'
    },
    onClick: function onClick(e) {
      e.preventDefault();
      setCity(text);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "Submit")), __jsx(_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }));
};

_s(Index, "6LKPaaq9TsPum0qI7XFI18rfjyM=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkRyb3Bkb3duIiwiSW5kZXgiLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwiY2l0eSIsInNldENpdHkiLCJyZXNPYmoiLCJzZXRSZXNPYmoiLCJBUElfS0VZIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwic3VibWl0Q2l0eSIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInRleHRBbGlnbiIsImhhc093blByb3BlcnR5Iiwid2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQixTQUNJO0FBQUssYUFBTSxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLGFBQU0sbUNBQWQ7QUFBa0QsUUFBSSxFQUFDLFFBQXZEO0FBQWdFLE1BQUUsRUFBQyxvQkFBbkU7QUFBd0YsbUJBQVksVUFBcEc7QUFBK0cscUJBQWMsTUFBN0g7QUFBb0kscUJBQWMsT0FBbEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixFQUlJO0FBQUssYUFBTSxlQUFYO0FBQTJCLHVCQUFnQixvQkFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBTSxlQUFUO0FBQXlCLFFBQUksRUFBQyxHQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFFSTtBQUFHLGFBQU0sZUFBVDtBQUF5QixRQUFJLEVBQUMsR0FBOUI7QUFBQTtBQUFBO0FBQUE7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RGQ7QUFFSSxTQUFLLEVBQUU7QUFBQ2Usa0JBQVksRUFBRSxNQUFmO0FBQXVCQyxhQUFPLEVBQUU7QUFBaEMsS0FGWDtBQUdJLFdBQU8sRUFBRyxpQkFBQ2YsQ0FBRCxFQUFPO0FBQ2JBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBVCxhQUFPLENBQUNILElBQUQsQ0FBUDtBQUNILEtBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLENBUkosRUFvQkksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJKLENBREo7QUF3QkgsQ0F2REQ7O0dBQU1GLEs7O0tBQUFBLEs7QUF5RFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy43OGU0MzdhNjJkY2RhZmE3ZDhhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXCIgdHlwZT1cImJ1dHRvblwiIGlkPVwiZHJvcGRvd25NZW51QnV0dG9uXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICBEcm9wZG93biBidXR0b25cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25NZW51QnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkFjdGlvbjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlNvbWV0aGluZyBlbHNlIGhlcmU8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93biIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi4vY29tcG9uZW50cy9Ecm9wZG93bidcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcidcclxuaW1wb3J0IFJlc3VsdFdpbmRvdyBmcm9tICcuLi9jb21wb25lbnRzL1Jlc3VsdFdpbmRvdydcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2NpdHksIHNldENpdHldID0gdXNlU3RhdGUoJycpXHJcbiAgICAvLyBzdG9yZSByZXNwb25zZSBvYmplY3QgaW4gdGhlIHN0YXRlXHJcbiAgICBjb25zdCBbcmVzT2JqLCBzZXRSZXNPYmpdID0gdXNlU3RhdGUoe30pXHJcbiAgICBjb25zdCBBUElfS0VZID0gJzc2Y2M0OTYxMmQzNmNiZjg4NmUwYWJiZGU1Mzk1ODcxJ1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoIWNpdHkgfHwgIWNpdHkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3VibWl0Q2l0eSgpXHJcbiAgICB9LCBbY2l0eV0pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdWJtaXRDaXR5ID0gKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHtBUElfS0VZfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXNPYmoocmVzKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAgICAgc2V0VGV4dCgnJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJ319PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9ib290c3dhdGNoLmNvbS80L2ZsYXRseS9ib290c3RyYXAubWluLmNzc1wiLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlc09iai5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpID49IDEgPyA8UmVzdWx0V2luZG93IHJlc09iaj17cmVzT2JqfSAvPiA6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBtYXJnaW5Cb3R0b206ICcxNXB4J319IHZhbHVlPXt0ZXh0fSBwbGFjZWhvbGRlcj0nU2VhcmNoIHdlYXRoZXIgYnkgY2l0eScgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J0bi1saWdodCBidG4tYmxvY2snXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICcxNXB4JywgcGFkZGluZzogJzVweCd9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2l0eSh0ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgID5TdWJtaXRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxEcm9wZG93biAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=