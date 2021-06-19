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
/* harmony import */ var _redux_tweets2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/tweets2 */ "./redux/tweets2.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "H:\\Master\\MiniTwitter\\front\\component\\TwitDialog.js",
    _s = $RefreshSig$();














 // import tweetReducer from "../redux/tweets2";


function TwitDialog({
  open,
  handleClose
}) {
  _s();

  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const AddTweetError = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.tweetReducer.AddTweetError);
  const AddTweetAdding = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.tweetReducer.AddTweetAdding);
  const AddTweetDone = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.tweetReducer.AddTweetDone);
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
    } // dispatch(addtweet({ text }));


    dispatch({
      type: _redux_tweets2__WEBPACK_IMPORTED_MODULE_2__.ADD_TWEET_REQUEST,
      data: text
    });
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
          lineNumber: 67,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
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
            lineNumber: 74,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
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
            lineNumber: 78,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
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
        lineNumber: 93,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

_s(TwitDialog, "QsxL8HisH5yjQfvRvPncF70TIV0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1R3aXREaWFsb2cuanMiXSwibmFtZXMiOlsiVHdpdERpYWxvZyIsIm9wZW4iLCJoYW5kbGVDbG9zZSIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiQWRkVHdlZXRFcnJvciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ0d2VldFJlZHVjZXIiLCJBZGRUd2VldEFkZGluZyIsIkFkZFR3ZWV0RG9uZSIsInVzZUVmZmVjdCIsImFsZXJ0IiwiZGF0YSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVUd2VldCIsInR5cGUiLCJBRERfVFdFRVRfUkVRVUVTVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtDQUVBOztBQUNBO0FBRWUsU0FBU0EsVUFBVCxDQUFvQjtBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBcEIsRUFBMkM7QUFBQTs7QUFDeEQsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCO0FBQ0EsUUFBTUMsYUFBYSxHQUFHQyx3REFBVyxDQUM5QkMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLFlBQU4sQ0FBbUJILGFBREMsQ0FBakM7QUFHQSxRQUFNSSxjQUFjLEdBQUdILHdEQUFXLENBQy9CQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsWUFBTixDQUFtQkMsY0FERSxDQUFsQztBQUlBLFFBQU1DLFlBQVksR0FBR0osd0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLFlBQU4sQ0FBbUJFLFlBQS9CLENBQWhDO0FBRUFDLGtEQUFT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NDQ2NWQxMGFlNDc3ZDM3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF2YXRhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBDbGVhckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbGVhclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XHJcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCI7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuXHJcbmltcG9ydCB7IEFERF9UV0VFVF9SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHV4L3R3ZWV0czJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHR3ZWV0UmVkdWNlciBmcm9tIFwiLi4vcmVkdXgvdHdlZXRzMlwiO1xyXG5pbXBvcnQgeyBhZGR0d2VldCB9IGZyb20gXCIuLi9yZWR1eC90d2VldHMyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUd2l0RGlhbG9nKHsgb3BlbiwgaGFuZGxlQ2xvc2UgfSkge1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBBZGRUd2VldEVycm9yID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLnR3ZWV0UmVkdWNlci5BZGRUd2VldEVycm9yXHJcbiAgKTtcclxuICBjb25zdCBBZGRUd2VldEFkZGluZyA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS50d2VldFJlZHVjZXIuQWRkVHdlZXRBZGRpbmdcclxuICApO1xyXG5cclxuICBjb25zdCBBZGRUd2VldERvbmUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnR3ZWV0UmVkdWNlci5BZGRUd2VldERvbmUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKEFkZFR3ZWV0RXJyb3IpIHtcclxuICAgICAgYWxlcnQoQWRkVHdlZXRFcnJvci5kYXRhKTtcclxuICAgIH1cclxuICAgIGlmIChBZGRUd2VldERvbmUpIHtcclxuICAgICAgc2V0VGV4dChcIlwiKTtcclxuICAgIH1cclxuICB9LCBbQWRkVHdlZXREb25lLCBBZGRUd2VldEVycm9yXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0VGV4dChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlVHdlZXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC50eXBlICE9PSBcImNsaWNrXCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRleHQgPT09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gZGlzcGF0Y2goYWRkdHdlZXQoeyB0ZXh0IH0pKTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogQUREX1RXRUVUX1JFUVVFU1QsIGRhdGE6IHRleHQgfSk7XHJcbiAgICBoYW5kbGVDbG9zZSgpO1xyXG4gICAgc2V0VGV4dChcIlwiKTtcclxuICB9O1xyXG5cclxuICAvLyBkaXNwYXRjaChzaWduVXBBY3Rpb24oeyBlbWFpbCwgcGFzc3dvcmQsIG5pY2tuYW1lIH0pKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEaWFsb2dcclxuICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5ldy10d2l0LWRpYWxvZ1wiXHJcbiAgICAgIGZ1bGxXaWR0aFxyXG4gICAgPlxyXG4gICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJjbG9zZVwiPlxyXG4gICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJjbG9zZVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgIDxDbGVhckljb24gLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDwvRGlhbG9nVGl0bGU+XHJcblxyXG4gICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8QXZhdGFyIGFsdD1cInVzZXJuYW1lXCIgYXJpYS1sYWJlbD1cInByb2ZpbGVcIiAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBpZD1cIndyaXRlLW5ldy10d2l0XCJcclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICByb3dzPXs5fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLrrLTsiqjsnbzsnbQg7J287Ja064KY6rOgIOyeiOuCmOyalD9cIlxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG5cclxuICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVHdlZXR9XHJcbiAgICAgICAgICBsb2FkaW5nPXtBZGRUd2VldEFkZGluZ31cclxuICAgICAgICA+XHJcbiAgICAgICAgICDtirjsnJdcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgPC9EaWFsb2c+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9