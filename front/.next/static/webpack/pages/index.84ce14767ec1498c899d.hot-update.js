self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignInSide; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "./node_modules/@material-ui/icons/Twitter.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\user\\Desktop\\MiniTwitter\\front\\pages\\index.js",
    _s = $RefreshSig$();










const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  submit: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1)
  },
  buttons: {
    marginTop: theme.spacing(1)
  }
}));
function SignInSide() {
  _s();

  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__.default, {
    component: "main",
    maxWidth: "xs",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.paper,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_7__.default, {
        fontSize: "large",
        color: "primary"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        noValidate: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__.default, {
          variant: "outlined",
          margin: "normal",
          required: true,
          fullWidth: true,
          id: "ID",
          label: "\uC544\uC774\uB514",
          name: "ID",
          autoFocus: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__.default, {
          variant: "outlined",
          margin: "normal",
          required: true,
          fullWidth: true,
          name: "password",
          label: "\uBE44\uBC00\uBC88\uD638",
          type: "password",
          id: "password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
          color: "primary",
          children: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "home",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
            type: "submit",
            fullWidth: true,
            variant: "contained",
            color: "primary",
            className: classes.submit,
            children: "\uB85C\uADF8\uC778"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.buttons,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: "/btnG_\uC644\uC131\uD615.png",
            alt: "Naver Id login",
            width: 180,
            height: 40
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
          onClick: async () => {
            const response = await axios__WEBPACK_IMPORTED_MODULE_4___default().get("http://localhost:3065/auth/kakao");
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: "/kakao_login_medium_narrow.png",
            alt: "Kakao Id login",
            width: 180,
            height: 40
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

_s(SignInSide, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = SignInSide;

var _c;

$RefreshReg$(_c, "SignInSide");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFwZXIiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwic3VibWl0IiwicGFkZGluZyIsImJ1dHRvbnMiLCJTaWduSW5TaWRlIiwiY2xhc3NlcyIsInJlc3BvbnNlIiwiYXhpb3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUVDLEtBQUQsS0FBWTtBQUN2Q0MsT0FBSyxFQUFFO0FBQ0xDLGFBQVMsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQUROO0FBRUxDLFdBQU8sRUFBRSxNQUZKO0FBR0xDLGlCQUFhLEVBQUUsUUFIVjtBQUlMQyxjQUFVLEVBQUU7QUFKUCxHQURnQztBQU92Q0MsUUFBTSxFQUFFO0FBQ05MLGFBQVMsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQURMO0FBRU5LLFdBQU8sRUFBRVIsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQUZILEdBUCtCO0FBV3ZDTSxTQUFPLEVBQUU7QUFDUFAsYUFBUyxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkO0FBREo7QUFYOEIsQ0FBWixDQUFELENBQTVCO0FBZ0JlLFNBQVNPLFVBQVQsR0FBc0I7QUFBQTs7QUFDbkMsUUFBTUMsT0FBTyxHQUFHYixTQUFTLEVBQXpCO0FBQ0Esc0JBQ0UsOERBQUMsZ0VBQUQ7QUFBVyxhQUFTLEVBQUMsTUFBckI7QUFBNEIsWUFBUSxFQUFDLElBQXJDO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVhLE9BQU8sQ0FBQ1YsS0FBeEI7QUFBQSw4QkFDRSw4REFBQywrREFBRDtBQUFhLGdCQUFRLEVBQUMsT0FBdEI7QUFBOEIsYUFBSyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFO0FBQU0sa0JBQVUsTUFBaEI7QUFBQSxnQ0FDRSw4REFBQyxnRUFBRDtBQUNFLGlCQUFPLEVBQUMsVUFEVjtBQUVFLGdCQUFNLEVBQUMsUUFGVDtBQUdFLGtCQUFRLE1BSFY7QUFJRSxtQkFBUyxNQUpYO0FBS0UsWUFBRSxFQUFDLElBTEw7QUFNRSxlQUFLLEVBQUMsb0JBTlI7QUFPRSxjQUFJLEVBQUMsSUFQUDtBQVFFLG1CQUFTO0FBUlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVdFLDhEQUFDLGdFQUFEO0FBQ0UsaUJBQU8sRUFBQyxVQURWO0FBRUUsZ0JBQU0sRUFBQyxRQUZUO0FBR0Usa0JBQVEsTUFIVjtBQUlFLG1CQUFTLE1BSlg7QUFLRSxjQUFJLEVBQUMsVUFMUDtBQU1FLGVBQUssRUFBQywwQkFOUjtBQU9FLGNBQUksRUFBQyxVQVBQO0FBUUUsWUFBRSxFQUFDO0FBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRixlQXFCRSw4REFBQyw2REFBRDtBQUFRLGVBQUssRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJCRixlQXNCRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxNQUFYO0FBQUEsaUNBQ0UsOERBQUMsNkRBQUQ7QUFDRSxnQkFBSSxFQUFDLFFBRFA7QUFFRSxxQkFBUyxNQUZYO0FBR0UsbUJBQU8sRUFBQyxXQUhWO0FBSUUsaUJBQUssRUFBQyxTQUpSO0FBS0UscUJBQVMsRUFBRVUsT0FBTyxDQUFDSixNQUxyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBcUNFO0FBQUssaUJBQVMsRUFBRUksT0FBTyxDQUFDRixPQUF4QjtBQUFBLGdDQUNFLDhEQUFDLDZEQUFEO0FBQUEsaUNBQ0UsOERBQUMsbURBQUQ7QUFDRSxlQUFHLEVBQUMsOEJBRE47QUFFRSxlQUFHLEVBQUMsZ0JBRk47QUFHRSxpQkFBSyxFQUFFLEdBSFQ7QUFJRSxrQkFBTSxFQUFFO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFVRSw4REFBQyw2REFBRDtBQUNFLGlCQUFPLEVBQUUsWUFBWTtBQUNuQixrQkFBTUcsUUFBUSxHQUFHLE1BQU1DLGdEQUFBLENBQ3JCLGtDQURxQixDQUF2QjtBQUdELFdBTEg7QUFBQSxpQ0FPRSw4REFBQyxtREFBRDtBQUNFLGVBQUcsRUFBQyxnQ0FETjtBQUVFLGVBQUcsRUFBQyxnQkFGTjtBQUdFLGlCQUFLLEVBQUUsR0FIVDtBQUlFLGtCQUFNLEVBQUU7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUVEOztHQXJFdUJILFU7VUFDTlosUzs7O0tBRE1ZLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODRjZTE0NzY3ZWMxNDk4Yzg5OWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIjtcclxuaW1wb3J0IFR3aXR0ZXJJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlclwiO1xyXG5cclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcGFwZXI6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgfSxcclxuICBzdWJtaXQ6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBidXR0b25zOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluU2lkZSgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwieHNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgIDxUd2l0dGVySWNvbiBmb250U2l6ZT1cImxhcmdlXCIgY29sb3I9XCJwcmltYXJ5XCIgLz5cclxuXHJcbiAgICAgICAgPGZvcm0gbm9WYWxpZGF0ZT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIGlkPVwiSURcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIuyVhOydtOuUlFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJJRFwiXHJcbiAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwi67mE67CA67KI7Zi4XCJcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj7tmozsm5DqsIDsnoU8L0J1dHRvbj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJob21lXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDroZzqt7jsnbhcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbnN9PlxyXG4gICAgICAgICAgPEJ1dHRvbj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2J0bkdf7JmE7ISx7ZiVLnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiTmF2ZXIgSWQgbG9naW5cIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXsxODB9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXs0MH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgICAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjMwNjUvYXV0aC9rYWthb1wiXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2tha2FvX2xvZ2luX21lZGl1bV9uYXJyb3cucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJLYWthbyBJZCBsb2dpblwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezE4MH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezQwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9