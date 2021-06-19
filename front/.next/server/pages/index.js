(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignInSide; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "@material-ui/icons/Twitter");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/user */ "./redux/user.js");

var _jsxFileName = "H:\\Master\\MiniTwitter\\front\\pages\\index.js";











const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.makeStyles)(theme => ({
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
  const classes = useStyles();
  const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
  const [password, setPassword] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  const logInError = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.userReducer.logInError);
  const logInDone = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.userReducer.logInDone);
  password;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (logInError) {
      if (logInError.status === 401) alert("잘못된 이메일이나 비밀번호입니다.\n이메일과 비밀번호를 확인해주세요");else alert(logInError.data);
    }

    if (logInDone) next_router__WEBPACK_IMPORTED_MODULE_5___default().push("/home");
  }, [logInError, logInDone]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
    component: "main",
    maxWidth: "xs",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.paper,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_2___default()), {
        fontSize: "large",
        color: "primary"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        noValidate: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__.default, {
          variant: "outlined",
          margin: "normal",
          required: true,
          fullWidth: true,
          id: "email",
          label: "\uC774\uBA54\uC77C",
          name: "email",
          autoFocus: true,
          type: "email",
          value: email,
          onChange: e => {
            setEmail(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__.default, {
          variant: "outlined",
          margin: "normal",
          required: true,
          fullWidth: true,
          id: "password",
          label: "\uBE44\uBC00\uBC88\uD638",
          name: "password",
          type: "password",
          value: password,
          onChange: e => {
            setPassword(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__.default, {
          color: "primary",
          onClick: () => {
            next_router__WEBPACK_IMPORTED_MODULE_5___default().push("signup");
          },
          children: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__.default, {
          fullWidth: true,
          variant: "contained",
          color: "primary",
          className: classes.submit,
          onClick: () => {
            dispatch((0,_redux_user__WEBPACK_IMPORTED_MODULE_7__.logInAction)({
              email,
              password
            }));
          },
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.buttons,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
          href: "http://localhost:3065/auth/naver",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__.default, {
            disableRipple: true,
            size: "small",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: "/btnG_\uC644\uC131\uD615.png",
              alt: "Naver Id login",
              width: 180,
              height: 40
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
          href: "http://localhost:3065/auth/kakao",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__.default, {
            disableRipple: true,
            size: "small",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: "/kakao_login_medium_narrow.png",
              alt: "Kakao Id login",
              width: 180,
              height: 40
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "@material-ui/icons/Twitter":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Twitter" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Twitter");;

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ "@material-ui/system":
/*!**************************************!*\
  !*** external "@material-ui/system" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ "@material-ui/utils":
/*!*************************************!*\
  !*** external "@material-ui/utils" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/utils");;

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("clsx");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_material-ui_core_esm_styles_index_js","vendors-node_modules_material-ui_core_esm_Button_index_js-node_modules_material-ui_core_esm_C-32df40","vendors-node_modules_next_image_js","redux_user_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pdHdpdHRlci8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXJcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9zeXN0ZW1cIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS91dGlsc1wiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiY2xzeFwiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9pZ25vcmVkfEg6XFxNYXN0ZXJcXE1pbmlUd2l0dGVyXFxmcm9udFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwibWFyZ2luVG9wIiwic3BhY2luZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsInN1Ym1pdCIsInBhZGRpbmciLCJidXR0b25zIiwiU2lnbkluU2lkZSIsImNsYXNzZXMiLCJlbWFpbCIsInNldEVtYWlsIiwiUmVhY3QiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImxvZ0luRXJyb3IiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlclJlZHVjZXIiLCJsb2dJbkRvbmUiLCJ1c2VFZmZlY3QiLCJzdGF0dXMiLCJhbGVydCIsImRhdGEiLCJSb3V0ZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJsb2dJbkFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FB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O0FBQUEsbUNBQ0UsOERBQUMsbURBQUQ7QUFDRSxpQkFBRyxFQUFDLGdDQUROO0FBRUUsaUJBQUcsRUFBQyxnQkFGTjtBQUdFLG1CQUFLLEVBQUUsR0FIVDtBQUlFLG9CQUFNLEVBQUU7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlGRCxDOzs7Ozs7Ozs7OztBQ2hJRCx3RDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBUd2l0dGVySWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXJcIjtcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBsb2dJbkFjdGlvbiB9IGZyb20gXCIuLi9yZWR1eC91c2VyXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBwYXBlcjoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICB9LFxyXG4gIHN1Ym1pdDoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIGJ1dHRvbnM6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW5TaWRlKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGxvZ0luRXJyb3IgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXJSZWR1Y2VyLmxvZ0luRXJyb3IpO1xyXG4gIGNvbnN0IGxvZ0luRG9uZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlclJlZHVjZXIubG9nSW5Eb25lKTtcclxuICBwYXNzd29yZDtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvZ0luRXJyb3IpIHtcclxuICAgICAgaWYgKGxvZ0luRXJyb3Iuc3RhdHVzID09PSA0MDEpXHJcbiAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICBcIuyemOuqu+uQnCDsnbTrqZTsnbzsnbTrgpgg67mE67CA67KI7Zi47J6F64uI64ukLlxcbuydtOuplOydvOqzvCDruYTrsIDrsojtmLjrpbwg7ZmV7J247ZW07KO87IS47JqUXCJcclxuICAgICAgICApO1xyXG4gICAgICBlbHNlIGFsZXJ0KGxvZ0luRXJyb3IuZGF0YSk7XHJcbiAgICB9XHJcbiAgICBpZiAobG9nSW5Eb25lKSBSb3V0ZXIucHVzaChcIi9ob21lXCIpO1xyXG4gIH0sIFtsb2dJbkVycm9yLCBsb2dJbkRvbmVdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJ4c1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgPFR3aXR0ZXJJY29uIGZvbnRTaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIiAvPlxyXG5cclxuICAgICAgICA8Zm9ybSBub1ZhbGlkYXRlPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwi7J2066mU7J28XCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIuu5hOuwgOuyiO2YuFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwic2lnbnVwXCIpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDtmozsm5DqsIDsnoVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2gobG9nSW5BY3Rpb24oeyBlbWFpbCwgcGFzc3dvcmQgfSkpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDroZzqt7jsnbhcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25zfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwNjUvYXV0aC9uYXZlclwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVSaXBwbGUgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvYnRuR1/smYTshLHtmJUucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIk5hdmVyIElkIGxvZ2luXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPXsxODB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS9hdXRoL2tha2FvXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZVJpcHBsZSBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9rYWthb19sb2dpbl9tZWRpdW1fbmFycm93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJLYWthbyBJZCBsb2dpblwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MTgwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs0MH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3lzdGVtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9