self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _component_Twit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/Twit.js */ "./component/Twit.js");
/* harmony import */ var _component_InfoBox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/InfoBox.js */ "./component/InfoBox.js");
/* harmony import */ var _component_TwitDialog_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/TwitDialog.js */ "./component/TwitDialog.js");
/* harmony import */ var _component_TwitMenu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/TwitMenu.js */ "./component/TwitMenu.js");
/* harmony import */ var _redux_tweets2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/tweets2.js */ "./redux/tweets2.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_user_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/user.js */ "./redux/user.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "H:\\Master\\MiniTwitter\\front\\pages\\home.js",
    _s = $RefreshSig$();












function Home() {
  _s();

  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const myInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.userReducer.logInError);
  const tweets = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.tweetReducer.tweets);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch((0,_redux_tweets2_js__WEBPACK_IMPORTED_MODULE_6__.addtweet)({
      text
    }));
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
    maxWidth: "lg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, {
      container: true,
      spacing: 2,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_TwitMenu_js__WEBPACK_IMPORTED_MODULE_5__.default, {
        handleClickOpen: handleClickOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Twit_js__WEBPACK_IMPORTED_MODULE_2__.default, {
        tweets: tweets
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_InfoBox_js__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_TwitDialog_js__WEBPACK_IMPORTED_MODULE_4__.default, {
      handleClose: handleClose,
      open: open
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

_s(Home, "Y9Y6A8Z6vfuKOmwBfvYrAUfRuRg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qcyJdLCJuYW1lcyI6WyJIb21lIiwib3BlbiIsInNldE9wZW4iLCJSZWFjdCIsIm15SW5mbyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyUmVkdWNlciIsImxvZ0luRXJyb3IiLCJ0d2VldHMiLCJ0d2VldFJlZHVjZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiYWRkdHdlZXQiLCJ0ZXh0IiwiaGFuZGxlQ2xpY2tPcGVuIiwiaGFuZGxlQ2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsUUFBTSxDQUFDQyxJQUFELEVBQU9DLE9BQVAsSUFBa0JDLHFEQUFBLENBQWUsS0FBZixDQUF4QjtBQUNBLFFBQU1DLE1BQU0sR0FBR0Msd0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JDLFVBQTlCLENBQTFCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHSix3REFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0ksWUFBTixDQUFtQkQsTUFBL0IsQ0FBMUI7QUFFQSxRQUFNRSxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkRixZQUFRLENBQUNHLDJEQUFRLENBQUM7QUFBRUM7QUFBRixLQUFELENBQVQsQ0FBUjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsUUFBTUMsZUFBZSxHQUFHLE1BQU07QUFDNUJkLFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDRCxHQUZEOztBQUlBLFFBQU1lLFdBQVcsR0FBRyxNQUFNO0FBQ3hCZixXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRSw4REFBQyxnRUFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBLDRCQUNFLDhEQUFDLDREQUFEO0FBQU0sZUFBUyxNQUFmO0FBQWdCLGFBQU8sRUFBRSxDQUF6QjtBQUFBLDhCQUNFLDhEQUFDLDJEQUFEO0FBQVUsdUJBQWUsRUFBRWM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0UsOERBQUMsdURBQUQ7QUFBVSxjQUFNLEVBQUVQO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVFFLDhEQUFDLDZEQUFEO0FBQVksaUJBQVcsRUFBRVEsV0FBekI7QUFBc0MsVUFBSSxFQUFFaEI7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O0dBOUJ1QkQsSTtVQUVQSyxvRCxFQUNBQSxvRCxFQUVFTyxvRDs7O0tBTEtaLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS4xZWVkNzM5M2Q3MWViZDk1ZDdiNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIjtcclxuaW1wb3J0IFR3aXRMaW5lIGZyb20gXCIuLi9jb21wb25lbnQvVHdpdC5qc1wiO1xyXG5pbXBvcnQgSW5mb0JveCBmcm9tIFwiLi4vY29tcG9uZW50L0luZm9Cb3guanNcIjtcclxuaW1wb3J0IFR3aXREaWFsb2cgZnJvbSBcIi4uL2NvbXBvbmVudC9Ud2l0RGlhbG9nLmpzXCI7XHJcbmltcG9ydCBUd2l0TWVudSBmcm9tIFwiLi4vY29tcG9uZW50L1R3aXRNZW51LmpzXCI7XHJcbmltcG9ydCB7IGFkZHR3ZWV0IH0gZnJvbSBcIi4uL3JlZHV4L3R3ZWV0czIuanNcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyBMT0FEX1RXRUVUX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdXgvdHdlZXRzMi5qc1wiO1xyXG5pbXBvcnQgeyBMT0FEX0lORk9fUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1eC91c2VyLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBteUluZm8gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXJSZWR1Y2VyLmxvZ0luRXJyb3IpO1xyXG4gIGNvbnN0IHR3ZWV0cyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHdlZXRSZWR1Y2VyLnR3ZWV0cyk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGFkZHR3ZWV0KHsgdGV4dCB9KSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGlja09wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICA8VHdpdE1lbnUgaGFuZGxlQ2xpY2tPcGVuPXtoYW5kbGVDbGlja09wZW59IC8+XHJcblxyXG4gICAgICAgIDxUd2l0TGluZSB0d2VldHM9e3R3ZWV0c30gLz5cclxuICAgICAgICA8SW5mb0JveCAvPlxyXG4gICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICA8VHdpdERpYWxvZyBoYW5kbGVDbG9zZT17aGFuZGxlQ2xvc2V9IG9wZW49e29wZW59IC8+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=