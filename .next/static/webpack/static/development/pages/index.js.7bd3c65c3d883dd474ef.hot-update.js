webpackHotUpdate("static\\development\\pages\\index.js",{

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
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(API_KEY)).then(function (res) {
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
  }), __jsx(_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
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
    onClick: function onClick(e) {
      e.preventDefault();
      setCity(text);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "Submit")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwidGV4dCIsInNldFRleHQiLCJjaXR5Iiwic2V0Q2l0eSIsInJlc09iaiIsInNldFJlc09iaiIsIkFQSV9LRVkiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJzdWJtaXRDaXR5IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidGV4dEFsaWduIiwiaGFzT3duUHJvcGVydHkiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFFUUMsc0RBQVEsQ0FBQyxFQUFELENBRmhCO0FBQUEsTUFFVEMsSUFGUztBQUFBLE1BRUhDLE9BRkc7O0FBQUEsbUJBR1FGLHNEQUFRLENBQUMsRUFBRCxDQUhoQjtBQUFBLE1BR1RHLElBSFM7QUFBQSxNQUdIQyxPQUhHLGtCQUloQjs7O0FBSmdCLG1CQUtZSixzREFBUSxDQUFDLEVBQUQsQ0FMcEI7QUFBQSxNQUtUSyxNQUxTO0FBQUEsTUFLREMsU0FMQzs7QUFNaEIsTUFBTUMsT0FBTyxHQUFHLGtDQUFoQjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFHLENBQUNMLElBQUQsSUFBUyxDQUFDQSxJQUFJLENBQUNNLE1BQWxCLEVBQTBCO0FBQ3RCO0FBQ0g7O0FBRURDLGNBQVU7QUFDYixHQU5RLEVBTU4sQ0FBQ1AsSUFBRCxDQU5NLENBQVQ7O0FBUUEsTUFBTVEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCQSxLQUFDLENBQUNDLGNBQUY7QUFFQVgsV0FBTyxDQUFDVSxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFQO0FBQ0gsR0FKRDs7QUFNQSxNQUFNTCxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCTSxnREFBSyxDQUFDQyxHQUFOLDZEQUErRGQsSUFBL0Qsb0JBQTZFSSxPQUE3RSxHQUNLVyxJQURMLENBQ1UsVUFBQUMsR0FBRyxFQUFJO0FBQ1RiLGVBQVMsQ0FBQ2EsR0FBRCxDQUFUO0FBQ0gsS0FITCxXQUlXLFVBQUFDLEdBQUc7QUFBQSxhQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFKO0FBQUEsS0FKZDtBQUtBbEIsV0FBTyxDQUFDLEVBQUQsQ0FBUDtBQUNILEdBUEQ7O0FBU0EsU0FDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQTJCLFNBQUssRUFBRTtBQUFDcUIsZUFBUyxFQUFFO0FBQVosS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sT0FBRyxFQUFDLFlBQVY7QUFBdUIsUUFBSSxFQUFDLG1EQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBTVFsQixNQUFNLENBQUNtQixjQUFQLENBQXNCLE1BQXRCLEtBQWlDLENBQWpDLEdBQXFDLE1BQUMsZ0VBQUQ7QUFBYyxVQUFNLEVBQUVuQixNQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXJDLEdBQXdFLEVBTmhGLEVBUUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sU0FBSyxFQUFFO0FBQUNvQixXQUFLLEVBQUUsTUFBUjtBQUFnQkMsa0JBQVksRUFBRTtBQUE5QixLQUFkO0FBQXFELFNBQUssRUFBRXpCLElBQTVEO0FBQWtFLGVBQVcsRUFBQyx3QkFBOUU7QUFBdUcsWUFBUSxFQUFFVSxZQUFqSDtBQUErSCxRQUFJLEVBQUMsTUFBcEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUNJLGFBQVMsRUFBQyx1QkFEZDtBQUVJLFNBQUssRUFBRTtBQUFDZSxrQkFBWSxFQUFFLE1BQWY7QUFBdUJDLGFBQU8sRUFBRSxLQUFoQztBQUF1Q0Msa0JBQVksRUFBRTtBQUFyRCxLQUZYO0FBR0ksV0FBTyxFQUFHLGlCQUFDaEIsQ0FBRCxFQUFPO0FBQ2JBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBVCxhQUFPLENBQUNILElBQUQsQ0FBUDtBQUNILEtBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLENBUkosQ0FESjtBQXdCSCxDQXZERDs7R0FBTUYsSzs7S0FBQUEsSztBQXlEU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjdiZDNjNjVjM2Q4ODNkZDQ3NGVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4uL2NvbXBvbmVudHMvRHJvcGRvd24nXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXHJcbmltcG9ydCBSZXN1bHRXaW5kb3cgZnJvbSAnLi4vY29tcG9uZW50cy9SZXN1bHRXaW5kb3cnXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgLy8gc3RvcmUgcmVzcG9uc2Ugb2JqZWN0IGluIHRoZSBzdGF0ZVxyXG4gICAgY29uc3QgW3Jlc09iaiwgc2V0UmVzT2JqXSA9IHVzZVN0YXRlKHt9KVxyXG4gICAgY29uc3QgQVBJX0tFWSA9ICc3NmNjNDk2MTJkMzZjYmY4ODZlMGFiYmRlNTM5NTg3MSdcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKCFjaXR5IHx8ICFjaXR5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN1Ym1pdENpdHkoKVxyXG4gICAgfSwgW2NpdHldKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VibWl0Q2l0eSA9ICgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0ke0FQSV9LRVl9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFJlc09iaihyZXMpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgICAgICBzZXRUZXh0KCcnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcicgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Jvb3Rzd2F0Y2guY29tLzQvZmxhdGx5L2Jvb3RzdHJhcC5taW4uY3NzXCIvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVzT2JqLmhhc093blByb3BlcnR5KCdkYXRhJykgPj0gMSA/IDxSZXN1bHRXaW5kb3cgcmVzT2JqPXtyZXNPYmp9IC8+IDogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOiAnMTAwJScsIG1hcmdpbkJvdHRvbTogJzE1cHgnfX0gdmFsdWU9e3RleHR9IHBsYWNlaG9sZGVyPSdTZWFyY2ggd2VhdGhlciBieSBjaXR5JyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd24gLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidG4tcHJpbWFyeSBidG4tYmxvY2snXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICcxNXB4JywgcGFkZGluZzogJzVweCcsIGJvcmRlclJhZGl1czogJzVweCd9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2l0eSh0ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgID5TdWJtaXRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==