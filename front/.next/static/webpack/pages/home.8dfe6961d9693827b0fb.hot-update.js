self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./component/TwitDialog.js":
/*!*********************************!*\
  !*** ./component/TwitDialog.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TwitDialog; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Clear */ "./node_modules/@material-ui/icons/Clear.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_tweets2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/tweets2 */ "./redux/tweets2.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "H:\\Master\\MiniTwitter\\front\\component\\TwitDialog.js",
    _s = $RefreshSig$();
















function TwitDialog({
  open,
  handleClose
}) {
  _s();

  const AddTweetError = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.tweetReducer.AddTweetError);
  const AddTweetDone = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.tweetReducer.AddTweetDone);
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (AddTweetError) {
      alert(AddTweetError.data);
    }

    if (AddTweetDone) {
      setText("");
    }
  }, [AddTweetDone]);

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleTweet = event => {
    if (event.type !== "click") {
      return;
    }

    if (text === "") {
      return;
    }

    dispatch((0,_redux_tweets2__WEBPACK_IMPORTED_MODULE_3__.addtweet)({
      text
    }));
    handleClose();
    setText("");
  }; // dispatch(signUpAction({ email, password, nickname }));


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__.default, {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "new-twit-dialog",
    fullWidth: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__.default, {
      id: "close",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__.default, {
        color: "primary",
        "aria-label": "close",
        onClick: handleClose,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
        container: true,
        spacing: 2,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
          item: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__.default, {
            alt: "username",
            "aria-label": "profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
          item: true,
          xs: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__.default, {
            id: "write-new-twit",
            autoFocus: true,
            multiline: true,
            rows: 9,
            onChange: handleChange,
            placeholder: "\uBB34\uC2A8\uC77C\uC774 \uC77C\uC5B4\uB098\uACE0 \uC788\uB098\uC694?",
            fullWidth: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_12__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__.default, {
        onClick: handleClose,
        color: "primary",
        variant: "contained",
        size: "large",
        onClick: handleTweet,
        loading: AddTweetAdding,
        children: "\uD2B8\uC717"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

_s(TwitDialog, "Stx7t4COnr7McZ3bIhjSD/yL/N4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch];
});

_c = TwitDialog;

var _c;

$RefreshReg$(_c, "TwitDialog");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1R3aXREaWFsb2cuanMiXSwibmFtZXMiOlsiVHdpdERpYWxvZyIsIm9wZW4iLCJoYW5kbGVDbG9zZSIsIkFkZFR3ZWV0RXJyb3IiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidHdlZXRSZWR1Y2VyIiwiQWRkVHdlZXREb25lIiwidGV4dCIsInNldFRleHQiLCJ1c2VTdGF0ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJhbGVydCIsImRhdGEiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlVHdlZXQiLCJ0eXBlIiwiYWRkdHdlZXQiLCJBZGRUd2VldEFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULENBQW9CO0FBQUVDLE1BQUY7QUFBUUM7QUFBUixDQUFwQixFQUEyQztBQUFBOztBQUN4RCxRQUFNQyxhQUFhLEdBQUdDLHdEQUFXLENBQzlCQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsWUFBTixDQUFtQkgsYUFEQyxDQUFqQztBQUlBLFFBQU1JLFlBQVksR0FBR0gsd0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLFlBQU4sQ0FBbUJDLFlBQS9CLENBQWhDO0FBRUEsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlWLGFBQUosRUFBbUI7QUFDakJXLFdBQUssQ0FBQ1gsYUFBYSxDQUFDWSxJQUFmLENBQUw7QUFDRDs7QUFDRCxRQUFJUixZQUFKLEVBQWtCO0FBQ2hCRSxhQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0Q7QUFDRixHQVBRLEVBT04sQ0FBQ0YsWUFBRCxDQVBNLENBQVQ7O0FBU0EsUUFBTVMsWUFBWSxHQUFJQyxLQUFELElBQVc7QUFDOUJSLFdBQU8sQ0FBQ1EsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBUDtBQUNELEdBRkQ7O0FBR0EsUUFBTUMsV0FBVyxHQUFJSCxLQUFELElBQVc7QUFDN0IsUUFBSUEsS0FBSyxDQUFDSSxJQUFOLEtBQWUsT0FBbkIsRUFBNEI7QUFDMUI7QUFDRDs7QUFDRCxRQUFJYixJQUFJLEtBQUssRUFBYixFQUFpQjtBQUNmO0FBQ0Q7O0FBQ0RHLFlBQVEsQ0FBQ1csd0RBQVEsQ0FBQztBQUFFZDtBQUFGLEtBQUQsQ0FBVCxDQUFSO0FBQ0FOLGVBQVc7QUFDWE8sV0FBTyxDQUFDLEVBQUQsQ0FBUDtBQUNELEdBVkQsQ0F0QndELENBa0N4RDs7O0FBRUEsc0JBQ0UsOERBQUMsNkRBQUQ7QUFDRSxRQUFJLEVBQUVSLElBRFI7QUFFRSxXQUFPLEVBQUVDLFdBRlg7QUFHRSx1QkFBZ0IsaUJBSGxCO0FBSUUsYUFBUyxNQUpYO0FBQUEsNEJBTUUsOERBQUMsa0VBQUQ7QUFBYSxRQUFFLEVBQUMsT0FBaEI7QUFBQSw2QkFDRSw4REFBQyxpRUFBRDtBQUFZLGFBQUssRUFBQyxTQUFsQjtBQUE0QixzQkFBVyxPQUF2QztBQUErQyxlQUFPLEVBQUVBLFdBQXhEO0FBQUEsK0JBQ0UsOERBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFZRSw4REFBQyxvRUFBRDtBQUFBLDZCQUNFLDhEQUFDLDJEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixlQUFPLEVBQUUsQ0FBekI7QUFBQSxnQ0FDRSw4REFBQywyREFBRDtBQUFNLGNBQUksTUFBVjtBQUFBLGlDQUNFLDhEQUFDLDhEQUFEO0FBQVEsZUFBRyxFQUFDLFVBQVo7QUFBdUIsMEJBQVc7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFLRSw4REFBQywyREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsTUFBYjtBQUFBLGlDQUNFLDhEQUFDLGlFQUFEO0FBQ0UsY0FBRSxFQUFDLGdCQURMO0FBRUUscUJBQVMsTUFGWDtBQUdFLHFCQUFTLE1BSFg7QUFJRSxnQkFBSSxFQUFFLENBSlI7QUFLRSxvQkFBUSxFQUFFYyxZQUxaO0FBTUUsdUJBQVcsRUFBQyx1RUFOZDtBQU9FLHFCQUFTO0FBUFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGLGVBZ0NFLDhEQUFDLHFFQUFEO0FBQUEsNkJBQ0UsOERBQUMsOERBQUQ7QUFDRSxlQUFPLEVBQUVkLFdBRFg7QUFFRSxhQUFLLEVBQUMsU0FGUjtBQUdFLGVBQU8sRUFBQyxXQUhWO0FBSUUsWUFBSSxFQUFDLE9BSlA7QUFLRSxlQUFPLEVBQUVrQixXQUxYO0FBTUUsZUFBTyxFQUFFRyxjQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStDRDs7R0FuRnVCdkIsVTtVQUNBSSxvRCxFQUlEQSxvRCxFQUdKUSxvRDs7O0tBUktaLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS44ZGZlNjk2MWQ5NjkzODI3YjBmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF2YXRhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBDbGVhckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbGVhclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XHJcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCI7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0d2VldFJlZHVjZXIgZnJvbSBcIi4uL3JlZHV4L3R3ZWV0czJcIjtcclxuaW1wb3J0IHsgYWRkdHdlZXQgfSBmcm9tIFwiLi4vcmVkdXgvdHdlZXRzMlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHdpdERpYWxvZyh7IG9wZW4sIGhhbmRsZUNsb3NlIH0pIHtcclxuICBjb25zdCBBZGRUd2VldEVycm9yID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLnR3ZWV0UmVkdWNlci5BZGRUd2VldEVycm9yXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgQWRkVHdlZXREb25lID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50d2VldFJlZHVjZXIuQWRkVHdlZXREb25lKTtcclxuXHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKEFkZFR3ZWV0RXJyb3IpIHtcclxuICAgICAgYWxlcnQoQWRkVHdlZXRFcnJvci5kYXRhKTtcclxuICAgIH1cclxuICAgIGlmIChBZGRUd2VldERvbmUpIHtcclxuICAgICAgc2V0VGV4dChcIlwiKTtcclxuICAgIH1cclxuICB9LCBbQWRkVHdlZXREb25lXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0VGV4dChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlVHdlZXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC50eXBlICE9PSBcImNsaWNrXCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRleHQgPT09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2goYWRkdHdlZXQoeyB0ZXh0IH0pKTtcclxuICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICBzZXRUZXh0KFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vIGRpc3BhdGNoKHNpZ25VcEFjdGlvbih7IGVtYWlsLCBwYXNzd29yZCwgbmlja25hbWUgfSkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERpYWxvZ1xyXG4gICAgICBvcGVuPXtvcGVufVxyXG4gICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmV3LXR3aXQtZGlhbG9nXCJcclxuICAgICAgZnVsbFdpZHRoXHJcbiAgICA+XHJcbiAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImNsb3NlXCI+XHJcbiAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgYXJpYS1sYWJlbD1cImNsb3NlXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgPENsZWFySWNvbiAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgPC9EaWFsb2dUaXRsZT5cclxuXHJcbiAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgIDxBdmF0YXIgYWx0PVwidXNlcm5hbWVcIiBhcmlhLWxhYmVsPVwicHJvZmlsZVwiIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIGlkPVwid3JpdGUtbmV3LXR3aXRcIlxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgIHJvd3M9ezl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuustOyKqOydvOydtCDsnbzslrTrgpjqs6Ag7J6I64KY7JqUP1wiXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcblxyXG4gICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUd2VldH1cclxuICAgICAgICAgIGxvYWRpbmc9e0FkZFR3ZWV0QWRkaW5nfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIO2KuOycl1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICA8L0RpYWxvZz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=