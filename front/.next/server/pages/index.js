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

var _jsxFileName = "H:\\change\\front\\pages\\index.js";











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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_material-ui_core_esm_styles_index_js","vendors-node_modules_material-ui_core_esm_Button_index_js-node_modules_material-ui_core_esm_C-b7a02a","vendors-node_modules_next_link_js","vendors-node_modules_next_image_js","redux_user_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pdHdpdHRlci8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXJcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9zeXN0ZW1cIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS91dGlsc1wiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiY2xzeFwiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9pZ25vcmVkfEg6XFxjaGFuZ2VcXGZyb250XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFwZXIiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwic3VibWl0IiwicGFkZGluZyIsImJ1dHRvbnMiLCJTaWduSW5TaWRlIiwiY2xhc3NlcyIsImVtYWlsIiwic2V0RW1haWwiLCJSZWFjdCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibG9nSW5FcnJvciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyUmVkdWNlciIsImxvZ0luRG9uZSIsInVzZUVmZmVjdCIsInN0YXR1cyIsImFsZXJ0IiwiZGF0YSIsIlJvdXRlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvZ0luQWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUVDLEtBQUQsS0FBWTtBQUN2Q0MsT0FBSyxFQUFFO0FBQ0xDLGFBQVMsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQUROO0FBRUxDLFdBQU8sRUFBRSxNQUZKO0FBR0xDLGlCQUFhLEVBQUUsUUFIVjtBQUlMQyxjQUFVLEVBQUU7QUFKUCxHQURnQztBQU92Q0MsUUFBTSxFQUFFO0FBQ05MLGFBQVMsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQURMO0FBRU5LLFdBQU8sRUFBRVIsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQUZILEdBUCtCO0FBV3ZDTSxTQUFPLEVBQUU7QUFDUFAsYUFBUyxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkO0FBREo7QUFYOEIsQ0FBWixDQUFELENBQTVCO0FBZ0JlLFNBQVNPLFVBQVQsR0FBc0I7QUFDbkMsUUFBTUMsT0FBTyxHQUFHYixTQUFTLEVBQXpCO0FBQ0EsUUFBTSxDQUFDYyxLQUFELEVBQVFDLFFBQVIsSUFBb0JDLHFEQUFBLENBQWUsRUFBZixDQUExQjtBQUNBLFFBQU0sQ0FBQ0MsUUFBRCxFQUFXQyxXQUFYLElBQTBCRixxREFBQSxDQUFlLEVBQWYsQ0FBaEM7QUFDQSxRQUFNRyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCO0FBQ0EsUUFBTUMsVUFBVSxHQUFHQyx3REFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkgsVUFBOUIsQ0FBOUI7QUFDQSxRQUFNSSxTQUFTLEdBQUdILHdEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxXQUFOLENBQWtCQyxTQUE5QixDQUE3QjtBQUVBQyxrREFBUyxDQUFDLE1BQU07QUFDZCxRQUFJTCxVQUFKLEVBQWdCO0FBQ2QsVUFBSUEsVUFBVSxDQUFDTSxNQUFYLEtBQXNCLEdBQTFCLEVBQ0VDLEtBQUssQ0FDSCx1Q0FERyxDQUFMLENBREYsS0FJS0EsS0FBSyxDQUFDUCxVQUFVLENBQUNRLElBQVosQ0FBTDtBQUNOOztBQUNELFFBQUlKLFNBQUosRUFBZUssdURBQUEsQ0FBWSxPQUFaO0FBQ2hCLEdBVFEsRUFTTixDQUFDVCxVQUFELEVBQWFJLFNBQWIsQ0FUTSxDQUFUO0FBVUEsc0JBQ0UsOERBQUMsZ0VBQUQ7QUFBVyxhQUFTLEVBQUMsTUFBckI7QUFBNEIsWUFBUSxFQUFDLElBQXJDO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVaLE9BQU8sQ0FBQ1YsS0FBeEI7QUFBQSw4QkFDRSw4REFBQyxtRUFBRDtBQUFhLGdCQUFRLEVBQUMsT0FBdEI7QUFBOEIsYUFBSyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFO0FBQU0sa0JBQVUsTUFBaEI7QUFBQSxnQ0FDRSw4REFBQyxpRUFBRDtBQUNFLGlCQUFPLEVBQUMsVUFEVjtBQUVFLGdCQUFNLEVBQUMsUUFGVDtBQUdFLGtCQUFRLE1BSFY7QUFJRSxtQkFBUyxNQUpYO0FBS0UsWUFBRSxFQUFDLE9BTEw7QUFNRSxlQUFLLEVBQUMsb0JBTlI7QUFPRSxjQUFJLEVBQUMsT0FQUDtBQVFFLG1CQUFTLE1BUlg7QUFTRSxjQUFJLEVBQUMsT0FUUDtBQVVFLGVBQUssRUFBRVcsS0FWVDtBQVdFLGtCQUFRLEVBQUdpQixDQUFELElBQU87QUFDZmhCLG9CQUFRLENBQUNnQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFSO0FBQ0Q7QUFiSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBZ0JFLDhEQUFDLGlFQUFEO0FBQ0UsaUJBQU8sRUFBQyxVQURWO0FBRUUsZ0JBQU0sRUFBQyxRQUZUO0FBR0Usa0JBQVEsTUFIVjtBQUlFLG1CQUFTLE1BSlg7QUFLRSxZQUFFLEVBQUMsVUFMTDtBQU1FLGVBQUssRUFBQywwQkFOUjtBQU9FLGNBQUksRUFBQyxVQVBQO0FBUUUsY0FBSSxFQUFDLFVBUlA7QUFTRSxlQUFLLEVBQUVoQixRQVRUO0FBVUUsa0JBQVEsRUFBR2MsQ0FBRCxJQUFPO0FBQ2ZiLHVCQUFXLENBQUNhLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDRDtBQVpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJGLGVBOEJFLDhEQUFDLDhEQUFEO0FBQ0UsZUFBSyxFQUFDLFNBRFI7QUFFRSxpQkFBTyxFQUFFLE1BQU07QUFDYkgsbUVBQUEsQ0FBWSxRQUFaO0FBQ0QsV0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE5QkYsZUF1Q0UsOERBQUMsOERBQUQ7QUFDRSxtQkFBUyxNQURYO0FBRUUsaUJBQU8sRUFBQyxXQUZWO0FBR0UsZUFBSyxFQUFDLFNBSFI7QUFJRSxtQkFBUyxFQUFFakIsT0FBTyxDQUFDSixNQUpyQjtBQUtFLGlCQUFPLEVBQUUsTUFBTTtBQUNiVSxvQkFBUSxDQUFDZSx3REFBVyxDQUFDO0FBQUVwQixtQkFBRjtBQUFTRztBQUFULGFBQUQsQ0FBWixDQUFSO0FBQ0QsV0FQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFzREU7QUFBSyxpQkFBUyxFQUFFSixPQUFPLENBQUNGLE9BQXhCO0FBQUEsZ0NBQ0UsOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsa0NBQVg7QUFBQSxpQ0FDRSw4REFBQyw4REFBRDtBQUFRLHlCQUFhLE1BQXJCO0FBQXNCLGdCQUFJLEVBQUMsT0FBM0I7QUFBQSxtQ0FDRSw4REFBQyxtREFBRDtBQUNFLGlCQUFHLEVBQUMsOEJBRE47QUFFRSxpQkFBRyxFQUFDLGdCQUZOO0FBR0UsbUJBQUssRUFBRSxHQUhUO0FBSUUsb0JBQU0sRUFBRTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVdFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLGtDQUFYO0FBQUEsaUNBQ0UsOERBQUMsOERBQUQ7QUFBUSx5QkFBYSxNQUFyQjtBQUFzQixnQkFBSSxFQUFDLE9BQTNCO0FBQUEsbUNBQ0UsOERBQUMsbURBQUQ7QUFDRSxpQkFBRyxFQUFDLGdDQUROO0FBRUUsaUJBQUcsRUFBQyxnQkFGTjtBQUdFLG1CQUFLLEVBQUUsR0FIVDtBQUlFLG9CQUFNLEVBQUU7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlGRCxDOzs7Ozs7Ozs7OztBQ2hJRCx3RDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCI7XG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyXCI7XG5cbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGxvZ0luQWN0aW9uIH0gZnJvbSBcIi4uL3JlZHV4L3VzZXJcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHBhcGVyOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgfSxcbiAgc3VibWl0OiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG4gIGJ1dHRvbnM6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JblNpZGUoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBsb2dJbkVycm9yID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyUmVkdWNlci5sb2dJbkVycm9yKTtcbiAgY29uc3QgbG9nSW5Eb25lID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyUmVkdWNlci5sb2dJbkRvbmUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxvZ0luRXJyb3IpIHtcbiAgICAgIGlmIChsb2dJbkVycm9yLnN0YXR1cyA9PT0gNDAxKVxuICAgICAgICBhbGVydChcbiAgICAgICAgICBcIuyemOuqu+uQnCDsnbTrqZTsnbzsnbTrgpgg67mE67CA67KI7Zi47J6F64uI64ukLlxcbuydtOuplOydvOqzvCDruYTrsIDrsojtmLjrpbwg7ZmV7J247ZW07KO87IS47JqUXCJcbiAgICAgICAgKTtcbiAgICAgIGVsc2UgYWxlcnQobG9nSW5FcnJvci5kYXRhKTtcbiAgICB9XG4gICAgaWYgKGxvZ0luRG9uZSkgUm91dGVyLnB1c2goXCIvaG9tZVwiKTtcbiAgfSwgW2xvZ0luRXJyb3IsIGxvZ0luRG9uZV0pO1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwieHNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgPFR3aXR0ZXJJY29uIGZvbnRTaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIiAvPlxuXG4gICAgICAgIDxmb3JtIG5vVmFsaWRhdGU+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsPVwi7J2066mU7J28XCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBsYWJlbD1cIuu5hOuwgOuyiO2YuFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCJzaWdudXBcIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIO2ajOybkOqwgOyehVxuICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaChsb2dJbkFjdGlvbih7IGVtYWlsLCBwYXNzd29yZCB9KSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOuhnOq3uOyduFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbnN9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwNjUvYXV0aC9uYXZlclwiPlxuICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlUmlwcGxlIHNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9XCIvYnRuR1/smYTshLHtmJUucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJOYXZlciBJZCBsb2dpblwiXG4gICAgICAgICAgICAgICAgd2lkdGg9ezE4MH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwNjUvYXV0aC9rYWthb1wiPlxuICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlUmlwcGxlIHNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9XCIva2FrYW9fbG9naW5fbWVkaXVtX25hcnJvdy5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIktha2FvIElkIGxvZ2luXCJcbiAgICAgICAgICAgICAgICB3aWR0aD17MTgwfVxuICAgICAgICAgICAgICAgIGhlaWdodD17NDB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3N5c3RlbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3V0aWxzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbHN4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==