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
  const AddTweetAdding = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.tweetReducer.AddTweetAdding);
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
  }, [AddTweetDone, AddTweetError]);

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
          lineNumber: 66,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
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
            lineNumber: 73,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
          item: true,
          xs: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__.default, {
            id: "write-new-twit",
            autoFocus: true,
            multiline: true,
            rows: 9,
            value: text,
            onChange: handleChange,
            placeholder: "\uBB34\uC2A8\uC77C\uC774 \uC77C\uC5B4\uB098\uACE0 \uC788\uB098\uC694?",
            fullWidth: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
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
        lineNumber: 92,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

_s(TwitDialog, "UK4VaH0VrbripEgikIpnjWZpas4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1R3aXREaWFsb2cuanMiXSwibmFtZXMiOlsiVHdpdERpYWxvZyIsIm9wZW4iLCJoYW5kbGVDbG9zZSIsIkFkZFR3ZWV0RXJyb3IiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidHdlZXRSZWR1Y2VyIiwiQWRkVHdlZXRBZGRpbmciLCJBZGRUd2VldERvbmUiLCJ0ZXh0Iiwic2V0VGV4dCIsInVzZVN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsImFsZXJ0IiwiZGF0YSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVUd2VldCIsInR5cGUiLCJhZGR0d2VldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULENBQW9CO0FBQUVDLE1BQUY7QUFBUUM7QUFBUixDQUFwQixFQUEyQztBQUFBOztBQUN4RCxRQUFNQyxhQUFhLEdBQUdDLHdEQUFXLENBQzlCQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsWUFBTixDQUFtQkgsYUFEQyxDQUFqQztBQUdBLFFBQU1JLGNBQWMsR0FBR0gsd0RBQVcsQ0FDL0JDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxZQUFOLENBQW1CQyxjQURFLENBQWxDO0FBSUEsUUFBTUMsWUFBWSxHQUFHSix3REFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsWUFBTixDQUFtQkUsWUFBL0IsQ0FBaEM7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7QUFFQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSVgsYUFBSixFQUFtQjtBQUNqQlksV0FBSyxDQUFDWixhQUFhLENBQUNhLElBQWYsQ0FBTDtBQUNEOztBQUNELFFBQUlSLFlBQUosRUFBa0I7QUFDaEJFLGFBQU8sQ0FBQyxFQUFELENBQVA7QUFDRDtBQUNGLEdBUFEsRUFPTixDQUFDRixZQUFELEVBQWVMLGFBQWYsQ0FQTSxDQUFUOztBQVNBLFFBQU1jLFlBQVksR0FBSUMsS0FBRCxJQUFXO0FBQzlCUixXQUFPLENBQUNRLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQVA7QUFDRCxHQUZEOztBQUdBLFFBQU1DLFdBQVcsR0FBSUgsS0FBRCxJQUFXO0FBQzdCLFFBQUlBLEtBQUssQ0FBQ0ksSUFBTixLQUFlLE9BQW5CLEVBQTRCO0FBQzFCO0FBQ0Q7O0FBQ0QsUUFBSWIsSUFBSSxLQUFLLEVBQWIsRUFBaUI7QUFDZjtBQUNEOztBQUNERyxZQUFRLENBQUNXLHdEQUFRLENBQUM7QUFBRWQ7QUFBRixLQUFELENBQVQsQ0FBUjtBQUNBUCxlQUFXO0FBQ1hRLFdBQU8sQ0FBQyxFQUFELENBQVA7QUFDRCxHQVZELENBekJ3RCxDQXFDeEQ7OztBQUVBLHNCQUNFLDhEQUFDLDZEQUFEO0FBQ0UsUUFBSSxFQUFFVCxJQURSO0FBRUUsV0FBTyxFQUFFQyxXQUZYO0FBR0UsdUJBQWdCLGlCQUhsQjtBQUlFLGFBQVMsTUFKWDtBQUFBLDRCQU1FLDhEQUFDLGtFQUFEO0FBQWEsUUFBRSxFQUFDLE9BQWhCO0FBQUEsNkJBQ0UsOERBQUMsaUVBQUQ7QUFBWSxhQUFLLEVBQUMsU0FBbEI7QUFBNEIsc0JBQVcsT0FBdkM7QUFBK0MsZUFBTyxFQUFFQSxXQUF4RDtBQUFBLCtCQUNFLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBWUUsOERBQUMsb0VBQUQ7QUFBQSw2QkFDRSw4REFBQywyREFBRDtBQUFNLGlCQUFTLE1BQWY7QUFBZ0IsZUFBTyxFQUFFLENBQXpCO0FBQUEsZ0NBQ0UsOERBQUMsMkRBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBQSxpQ0FDRSw4REFBQyw4REFBRDtBQUFRLGVBQUcsRUFBQyxVQUFaO0FBQXVCLDBCQUFXO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBS0UsOERBQUMsMkRBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLE1BQWI7QUFBQSxpQ0FDRSw4REFBQyxpRUFBRDtBQUNFLGNBQUUsRUFBQyxnQkFETDtBQUVFLHFCQUFTLE1BRlg7QUFHRSxxQkFBUyxNQUhYO0FBSUUsZ0JBQUksRUFBRSxDQUpSO0FBS0UsaUJBQUssRUFBRU8sSUFMVDtBQU1FLG9CQUFRLEVBQUVRLFlBTlo7QUFPRSx1QkFBVyxFQUFDLHVFQVBkO0FBUUUscUJBQVM7QUFSWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkYsZUFpQ0UsOERBQUMscUVBQUQ7QUFBQSw2QkFDRSw4REFBQyw4REFBRDtBQUNFLGVBQU8sRUFBRWYsV0FEWDtBQUVFLGFBQUssRUFBQyxTQUZSO0FBR0UsZUFBTyxFQUFDLFdBSFY7QUFJRSxZQUFJLEVBQUMsT0FKUDtBQUtFLGVBQU8sRUFBRW1CLFdBTFg7QUFNRSxlQUFPLEVBQUVkLGNBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0REOztHQXZGdUJQLFU7VUFDQUksb0QsRUFHQ0Esb0QsRUFJRkEsb0QsRUFHSlMsb0Q7OztLQVhLYixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUuZDNhYzFkOWZhYThmZmMwODkwOWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdmF0YXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgQ2xlYXJJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xlYXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiO1xyXG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdHdlZXRSZWR1Y2VyIGZyb20gXCIuLi9yZWR1eC90d2VldHMyXCI7XHJcbmltcG9ydCB7IGFkZHR3ZWV0IH0gZnJvbSBcIi4uL3JlZHV4L3R3ZWV0czJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFR3aXREaWFsb2coeyBvcGVuLCBoYW5kbGVDbG9zZSB9KSB7XHJcbiAgY29uc3QgQWRkVHdlZXRFcnJvciA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS50d2VldFJlZHVjZXIuQWRkVHdlZXRFcnJvclxyXG4gICk7XHJcbiAgY29uc3QgQWRkVHdlZXRBZGRpbmcgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUudHdlZXRSZWR1Y2VyLkFkZFR3ZWV0QWRkaW5nXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgQWRkVHdlZXREb25lID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50d2VldFJlZHVjZXIuQWRkVHdlZXREb25lKTtcclxuXHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKEFkZFR3ZWV0RXJyb3IpIHtcclxuICAgICAgYWxlcnQoQWRkVHdlZXRFcnJvci5kYXRhKTtcclxuICAgIH1cclxuICAgIGlmIChBZGRUd2VldERvbmUpIHtcclxuICAgICAgc2V0VGV4dChcIlwiKTtcclxuICAgIH1cclxuICB9LCBbQWRkVHdlZXREb25lLCBBZGRUd2VldEVycm9yXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0VGV4dChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlVHdlZXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC50eXBlICE9PSBcImNsaWNrXCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRleHQgPT09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2goYWRkdHdlZXQoeyB0ZXh0IH0pKTtcclxuICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICBzZXRUZXh0KFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vIGRpc3BhdGNoKHNpZ25VcEFjdGlvbih7IGVtYWlsLCBwYXNzd29yZCwgbmlja25hbWUgfSkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERpYWxvZ1xyXG4gICAgICBvcGVuPXtvcGVufVxyXG4gICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmV3LXR3aXQtZGlhbG9nXCJcclxuICAgICAgZnVsbFdpZHRoXHJcbiAgICA+XHJcbiAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImNsb3NlXCI+XHJcbiAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgYXJpYS1sYWJlbD1cImNsb3NlXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgPENsZWFySWNvbiAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgPC9EaWFsb2dUaXRsZT5cclxuXHJcbiAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgIDxBdmF0YXIgYWx0PVwidXNlcm5hbWVcIiBhcmlhLWxhYmVsPVwicHJvZmlsZVwiIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIGlkPVwid3JpdGUtbmV3LXR3aXRcIlxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgIHJvd3M9ezl9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RleHR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuustOyKqOydvOydtCDsnbzslrTrgpjqs6Ag7J6I64KY7JqUP1wiXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcblxyXG4gICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUd2VldH1cclxuICAgICAgICAgIGxvYWRpbmc9e0FkZFR3ZWV0QWRkaW5nfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIO2KuOycl1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICA8L0RpYWxvZz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=