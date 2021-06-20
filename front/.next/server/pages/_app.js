(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");


var _jsxFileName = "H:\\Components\\front\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // Create a theme instance.

const theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.createMuiTheme)({
  palette: {
    primary: {
      main: "rgba(29,161,242,1.00)",
      contrastText: "#ffffff"
    }
  }
});

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, height=device-height, initial-scale=1.0, user-scalable=no"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "MniTwitter"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
      theme: theme,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)]
  }, void 0, true);
} //export default MyApp;


/* harmony default export */ __webpack_exports__["default"] = (_redux_store__WEBPACK_IMPORTED_MODULE_2__.wrapper.withRedux(MyApp));

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapper": function() { return /* binding */ wrapper; }
/* harmony export */ });
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post */ "./redux/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user */ "./redux/user.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sagas_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sagas/user */ "./sagas/user.js");
/* harmony import */ var _sagas_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sagas/post */ "./sagas/post.js");











const bindMiddleware = middleware => {
  return (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_2__.applyMiddleware)(...middleware)); //return applyMiddleware(...middleware)
};

const rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
  userReducer: _user__WEBPACK_IMPORTED_MODULE_5__.default,
  tweetReducer: _post__WEBPACK_IMPORTED_MODULE_4__.default
});

function* rootSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_6__.all)([(0,_sagas_user__WEBPACK_IMPORTED_MODULE_7__.default)(), (0,_sagas_post__WEBPACK_IMPORTED_MODULE_8__.default)()]);
}

const createTweetStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_0___default()();
  const store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(rootReducer, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__.createWrapper)(createTweetStore, {
  debug: true
});

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ tweetSaga; }
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_post_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/post.js */ "./redux/post.js");




function addTweet(data) {
  console.log(data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default().post("http://localhost:3065/post", data, {
    withCredentials: true
  });
}

function* handleAddTweet(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(addTweet, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _redux_post_js__WEBPACK_IMPORTED_MODULE_2__.ADD_TWEET_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _redux_post_js__WEBPACK_IMPORTED_MODULE_2__.ADD_TWEET_FAIL,
      error: err.response.data
    });
  }
} // function loadTweets(data) {
//   return axios.get(`https://jsonplaceholder.typicode.com/posts`);
// }


function* handleloadTweets() {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(() => axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://jsonplaceholder.typicode.com/posts"));
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _redux_post_js__WEBPACK_IMPORTED_MODULE_2__.LOAD_TWEET_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _redux_post_js__WEBPACK_IMPORTED_MODULE_2__.LOAD_TWEET_FAIL,
      error: err.response
    });
  }
}

function* tweetSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_redux_post_js__WEBPACK_IMPORTED_MODULE_2__.ADD_TWEET_REQUEST, handleAddTweet);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ userSaga; }
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/user */ "./redux/user.js");




function loadInfo(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().get("http://localhost:3065/user");
}

function* loadInfoRequest(action) {
  try {
    const res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadInfo, action.data, {
      withCredentials: true
    });
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _redux_user__WEBPACK_IMPORTED_MODULE_2__.LOAD_INFOP_SUCCESS,
      data: res.data
    });
  } catch (error) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _redux_user__WEBPACK_IMPORTED_MODULE_2__.LOAD_INFO_FAIL,
      error: error.response.data
    });
  }
}

function loginPost(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().post("http://localhost:3065/auth/login", {
    email: data.email,
    password: data.password
  }, {
    withCredentials: true
  });
}

function* loginRequest(action) {
  try {
    const res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loginPost, action.payload);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _redux_user__WEBPACK_IMPORTED_MODULE_2__.LOGIN_SUCCESS,
      data: res.data
    });
  } catch (error) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _redux_user__WEBPACK_IMPORTED_MODULE_2__.LOGIN_FAIL,
      error: error.response
    });
  }
}

function signupPost(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().post("http://localhost:3065/user", {
    email: data.email,
    password: data.password,
    nickname: data.nickname
  });
}

function* signupRequest(action) {
  try {
    const res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(signupPost, action.payload);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _redux_user__WEBPACK_IMPORTED_MODULE_2__.SIGNUP_SUCCESS,
      data: res.data
    });
  } catch (error) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _redux_user__WEBPACK_IMPORTED_MODULE_2__.SIGNUP_FAIL,
      error: error.response
    });
  }
}

function* userSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_redux_user__WEBPACK_IMPORTED_MODULE_2__.LOGIN_REQUEST, loginRequest);
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_redux_user__WEBPACK_IMPORTED_MODULE_2__.SIGNUP_REQUEST, signupRequest);
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_redux_user__WEBPACK_IMPORTED_MODULE_2__.LOAD_INFO_REQUEST, loadInfoRequest);
}

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga");;

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga/effects");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_material-ui_core_esm_styles_index_js","vendors-node_modules_material-ui_core_esm_CssBaseline_index_js","redux_user_js","redux_post_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pdHdpdHRlci8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvLi9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N5c3RlbVwiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJjb250cmFzdFRleHQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndyYXBwZXIiLCJiaW5kTWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyUmVkdWNlciIsInR3ZWV0UmVkdWNlciIsInJvb3RTYWdhIiwiYWxsIiwidXNlclNhZ2EiLCJ0d2VldFNhZ2EiLCJjcmVhdGVUd2VldFN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsImFkZFR3ZWV0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsIndpdGhDcmVkZW50aWFscyIsImhhbmRsZUFkZFR3ZWV0IiwiYWN0aW9uIiwicmVzdWx0IiwiY2FsbCIsInB1dCIsInR5cGUiLCJBRERfVFdFRVRfU1VDQ0VTUyIsImVyciIsImVycm9yIiwiQUREX1RXRUVUX0ZBSUwiLCJyZXNwb25zZSIsImhhbmRsZWxvYWRUd2VldHMiLCJMT0FEX1RXRUVUX1NVQ0NFU1MiLCJMT0FEX1RXRUVUX0ZBSUwiLCJ0YWtlTGF0ZXN0IiwiQUREX1RXRUVUX1JFUVVFU1QiLCJsb2FkSW5mbyIsImxvYWRJbmZvUmVxdWVzdCIsInJlcyIsIkxPQURfSU5GT1BfU1VDQ0VTUyIsIkxPQURfSU5GT19GQUlMIiwibG9naW5Qb3N0IiwiZW1haWwiLCJwYXNzd29yZCIsImxvZ2luUmVxdWVzdCIsInBheWxvYWQiLCJMT0dJTl9TVUNDRVNTIiwiTE9HSU5fRkFJTCIsInNpZ251cFBvc3QiLCJuaWNrbmFtZSIsInNpZ251cFJlcXVlc3QiLCJTSUdOVVBfU1VDQ0VTUyIsIlNJR05VUF9GQUlMIiwiTE9HSU5fUkVRVUVTVCIsIlNJR05VUF9SRVFVRVNUIiwiTE9BRF9JTkZPX1JFUVVFU1QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLE1BQU1BLEtBQUssR0FBR0Msd0VBQWMsQ0FBQztBQUMzQkMsU0FBTyxFQUFFO0FBQ1BDLFdBQU8sRUFBRTtBQUNQQyxVQUFJLEVBQUUsdUJBREM7QUFFUEMsa0JBQVksRUFBRTtBQUZQO0FBREY7QUFEa0IsQ0FBRCxDQUE1Qjs7QUFRQSxTQUFTQyxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQ0UsWUFBSSxFQUFDLFVBRFA7QUFFRSxlQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBUUUsOERBQUMsbUVBQUQ7QUFBZSxXQUFLLEVBQUVSLEtBQXRCO0FBQUEsOEJBQ0UsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsU0FBRCxvQkFBZVEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQSxrQkFERjtBQWVELEMsQ0FDRDs7O0FBQ0EsK0RBQWVDLDJEQUFBLENBQWtCSCxLQUFsQixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU1JLGNBQWMsR0FBSUMsVUFBRCxJQUFnQjtBQUNyQyxTQUFPQyw2RUFBbUIsQ0FBQ0Msc0RBQWUsQ0FBQyxHQUFHRixVQUFKLENBQWhCLENBQTFCLENBRHFDLENBRXJDO0FBQ0QsQ0FIRDs7QUFLQSxNQUFNRyxXQUFXLEdBQUdDLHNEQUFlLENBQUM7QUFDbENDLGFBRGtDO0FBRWxDQyxjQUFZQTtBQUZzQixDQUFELENBQW5DOztBQUtBLFVBQVVDLFFBQVYsR0FBcUI7QUFDbkIsUUFBTUMsdURBQUcsQ0FBQyxDQUFDQyxvREFBUSxFQUFULEVBQWFDLG9EQUFTLEVBQXRCLENBQUQsQ0FBVDtBQUNEOztBQUVELE1BQU1DLGdCQUFnQixHQUFHLE1BQU07QUFDN0IsUUFBTUMsY0FBYyxHQUFHQyxpREFBb0IsRUFBM0M7QUFDQSxRQUFNQyxLQUFLLEdBQUdDLGtEQUFXLENBQUNaLFdBQUQsRUFBY0osY0FBYyxDQUFDLENBQUNhLGNBQUQsQ0FBRCxDQUE1QixDQUF6QjtBQUVBRSxPQUFLLENBQUNFLFFBQU4sR0FBaUJKLGNBQWMsQ0FBQ0ssR0FBZixDQUFtQlYsUUFBbkIsQ0FBakI7QUFFQSxTQUFPTyxLQUFQO0FBQ0QsQ0FQRDs7QUFTTyxNQUFNaEIsT0FBTyxHQUFHb0IsaUVBQWEsQ0FBQ1AsZ0JBQUQsRUFBbUI7QUFBRVEsT0FBSyxFQUFFO0FBQVQsQ0FBbkIsQ0FBN0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ1A7QUFDQTtBQUVBOztBQVNBLFNBQVNDLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCO0FBQ3RCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLFNBQU9HLGlEQUFBLENBQVcsNEJBQVgsRUFBeUNILElBQXpDLEVBQStDO0FBQ3BESSxtQkFBZSxFQUFFO0FBRG1DLEdBQS9DLENBQVA7QUFHRDs7QUFFRCxVQUFVQyxjQUFWLENBQXlCQyxNQUF6QixFQUFpQztBQUMvQixNQUFJO0FBQ0YsVUFBTUMsTUFBTSxHQUFHLE1BQU1DLHdEQUFJLENBQUNULFFBQUQsRUFBV08sTUFBTSxDQUFDTixJQUFsQixDQUF6QjtBQUNBLFVBQU1TLHVEQUFHLENBQUM7QUFDUkMsVUFBSSxFQUFFQyw2REFERTtBQUVSWCxVQUFJLEVBQUVPLE1BQU0sQ0FBQ1A7QUFGTCxLQUFELENBQVQ7QUFJRCxHQU5ELENBTUUsT0FBT1ksR0FBUCxFQUFZO0FBQ1pYLFdBQU8sQ0FBQ1ksS0FBUixDQUFjRCxHQUFkO0FBQ0EsVUFBTUgsdURBQUcsQ0FBQztBQUNSQyxVQUFJLEVBQUVJLDBEQURFO0FBRVJELFdBQUssRUFBRUQsR0FBRyxDQUFDRyxRQUFKLENBQWFmO0FBRlosS0FBRCxDQUFUO0FBSUQ7QUFDRixDLENBRUQ7QUFDQTtBQUNBOzs7QUFFQSxVQUFVZ0IsZ0JBQVYsR0FBNkI7QUFDM0IsTUFBSTtBQUNGLFVBQU1ULE1BQU0sR0FBRyxNQUFNQyx3REFBSSxDQUFDLE1BQ3hCTCxnREFBQSxDQUFVLDRDQUFWLENBRHVCLENBQXpCO0FBSUEsVUFBTU0sdURBQUcsQ0FBQztBQUNSQyxVQUFJLEVBQUVPLDhEQURFO0FBRVJqQixVQUFJLEVBQUVPLE1BQU0sQ0FBQ1A7QUFGTCxLQUFELENBQVQ7QUFJRCxHQVRELENBU0UsT0FBT1ksR0FBUCxFQUFZO0FBQ1pYLFdBQU8sQ0FBQ1ksS0FBUixDQUFjRCxHQUFkO0FBQ0EsVUFBTUgsdURBQUcsQ0FBQztBQUNSQyxVQUFJLEVBQUVRLDJEQURFO0FBRVJMLFdBQUssRUFBRUQsR0FBRyxDQUFDRztBQUZILEtBQUQsQ0FBVDtBQUlEO0FBQ0Y7O0FBRWMsVUFBVTFCLFNBQVYsR0FBc0I7QUFDbkMsUUFBTThCLDhEQUFVLENBQUNDLDZEQUFELEVBQW9CZixjQUFwQixDQUFoQjtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUREO0FBQ0E7QUFFQTs7QUFZQSxTQUFTZ0IsUUFBVCxDQUFrQnJCLElBQWxCLEVBQXdCO0FBQ3RCLFNBQU9HLGdEQUFBLENBQVUsNEJBQVYsQ0FBUDtBQUNEOztBQUVELFVBQVVtQixlQUFWLENBQTBCaEIsTUFBMUIsRUFBa0M7QUFDaEMsTUFBSTtBQUNGLFVBQU1pQixHQUFHLEdBQUcsTUFBTWYsd0RBQUksQ0FBQ2EsUUFBRCxFQUFXZixNQUFNLENBQUNOLElBQWxCLEVBQXdCO0FBQzVDSSxxQkFBZSxFQUFFO0FBRDJCLEtBQXhCLENBQXRCO0FBR0EsVUFBTUssdURBQUcsQ0FBQztBQUNSQyxVQUFJLEVBQUVjLDJEQURFO0FBRVJ4QixVQUFJLEVBQUV1QixHQUFHLENBQUN2QjtBQUZGLEtBQUQsQ0FBVDtBQUlELEdBUkQsQ0FRRSxPQUFPYSxLQUFQLEVBQWM7QUFDZCxVQUFNSix1REFBRyxDQUFDO0FBQ1JDLFVBQUksRUFBRWUsdURBREU7QUFFUlosV0FBSyxFQUFFQSxLQUFLLENBQUNFLFFBQU4sQ0FBZWY7QUFGZCxLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFNBQVMwQixTQUFULENBQW1CMUIsSUFBbkIsRUFBeUI7QUFDdkIsU0FBT0csaURBQUEsQ0FDTCxrQ0FESyxFQUVMO0FBQ0V3QixTQUFLLEVBQUUzQixJQUFJLENBQUMyQixLQURkO0FBRUVDLFlBQVEsRUFBRTVCLElBQUksQ0FBQzRCO0FBRmpCLEdBRkssRUFNTDtBQUNFeEIsbUJBQWUsRUFBRTtBQURuQixHQU5LLENBQVA7QUFVRDs7QUFFRCxVQUFVeUIsWUFBVixDQUF1QnZCLE1BQXZCLEVBQStCO0FBQzdCLE1BQUk7QUFDRixVQUFNaUIsR0FBRyxHQUFHLE1BQU1mLHdEQUFJLENBQUNrQixTQUFELEVBQVlwQixNQUFNLENBQUN3QixPQUFuQixDQUF0QjtBQUNBLFVBQU1yQix1REFBRyxDQUFDO0FBQ1JDLFVBQUksRUFBRXFCLHNEQURFO0FBRVIvQixVQUFJLEVBQUV1QixHQUFHLENBQUN2QjtBQUZGLEtBQUQsQ0FBVDtBQUlELEdBTkQsQ0FNRSxPQUFPYSxLQUFQLEVBQWM7QUFDZCxVQUFNSix1REFBRyxDQUFDO0FBQ1JDLFVBQUksRUFBRXNCLG1EQURFO0FBRVJuQixXQUFLLEVBQUVBLEtBQUssQ0FBQ0U7QUFGTCxLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFNBQVNrQixVQUFULENBQW9CakMsSUFBcEIsRUFBMEI7QUFDeEIsU0FBT0csaURBQUEsQ0FBVyw0QkFBWCxFQUF5QztBQUM5Q3dCLFNBQUssRUFBRTNCLElBQUksQ0FBQzJCLEtBRGtDO0FBRTlDQyxZQUFRLEVBQUU1QixJQUFJLENBQUM0QixRQUYrQjtBQUc5Q00sWUFBUSxFQUFFbEMsSUFBSSxDQUFDa0M7QUFIK0IsR0FBekMsQ0FBUDtBQUtEOztBQUNELFVBQVVDLGFBQVYsQ0FBd0I3QixNQUF4QixFQUFnQztBQUM5QixNQUFJO0FBQ0YsVUFBTWlCLEdBQUcsR0FBRyxNQUFNZix3REFBSSxDQUFDeUIsVUFBRCxFQUFhM0IsTUFBTSxDQUFDd0IsT0FBcEIsQ0FBdEI7QUFDQSxVQUFNckIsdURBQUcsQ0FBQztBQUNSQyxVQUFJLEVBQUUwQix1REFERTtBQUVScEMsVUFBSSxFQUFFdUIsR0FBRyxDQUFDdkI7QUFGRixLQUFELENBQVQ7QUFJRCxHQU5ELENBTUUsT0FBT2EsS0FBUCxFQUFjO0FBQ2QsVUFBTUosdURBQUcsQ0FBQztBQUNSQyxVQUFJLEVBQUUyQixvREFERTtBQUVSeEIsV0FBSyxFQUFFQSxLQUFLLENBQUNFO0FBRkwsS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFFYyxVQUFVM0IsUUFBVixHQUFxQjtBQUNsQyxRQUFNK0IsOERBQVUsQ0FBQ21CLHNEQUFELEVBQWdCVCxZQUFoQixDQUFoQjtBQUNBLFFBQU1WLDhEQUFVLENBQUNvQix1REFBRCxFQUFpQkosYUFBakIsQ0FBaEI7QUFDQSxRQUFNaEIsOERBQVUsQ0FBQ3FCLDBEQUFELEVBQW9CbEIsZUFBcEIsQ0FBaEI7QUFDRCxDOzs7Ozs7Ozs7OztBQzFGRCxpRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxnRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xuXG4vLyBDcmVhdGUgYSB0aGVtZSBpbnN0YW5jZS5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogXCJyZ2JhKDI5LDE2MSwyNDIsMS4wMClcIixcbiAgICAgIGNvbnRyYXN0VGV4dDogXCIjZmZmZmZmXCIsXG4gICAgfSxcbiAgfSxcbn0pO1xuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaGVpZ2h0PWRldmljZS1oZWlnaHQsIGluaXRpYWwtc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPW5vXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHRpdGxlPk1uaVR3aXR0ZXI8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cbi8vZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XG4iLCJpbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHR3ZWV0UmVkdWNlciBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSBcIi4vdXNlclwiO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5cbmltcG9ydCB7IGFsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCB1c2VyU2FnYSBmcm9tIFwiLi4vc2FnYXMvdXNlclwiO1xuaW1wb3J0IHR3ZWV0U2FnYSBmcm9tIFwiLi4vc2FnYXMvcG9zdFwiO1xuXG5jb25zdCBiaW5kTWlkZGxld2FyZSA9IChtaWRkbGV3YXJlKSA9PiB7XG4gIHJldHVybiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSk7XG4gIC8vcmV0dXJuIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKVxufTtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICB1c2VyUmVkdWNlcixcbiAgdHdlZXRSZWR1Y2VyLFxufSk7XG5cbmZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgeWllbGQgYWxsKFt1c2VyU2FnYSgpLCB0d2VldFNhZ2EoKV0pO1xufVxuXG5jb25zdCBjcmVhdGVUd2VldFN0b3JlID0gKCkgPT4ge1xuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGJpbmRNaWRkbGV3YXJlKFtzYWdhTWlkZGxld2FyZV0pKTtcblxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XG5cbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNyZWF0ZVR3ZWV0U3RvcmUsIHsgZGVidWc6IHRydWUgfSk7XG4iLCJpbXBvcnQgeyBhbGwsIHB1dCwgY2FsbCwgdGFrZUxhdGVzdCwgdGFrZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IHtcbiAgQUREX1RXRUVUX1JFUVVFU1QsXG4gIEFERF9UV0VFVF9TVUNDRVNTLFxuICBBRERfVFdFRVRfRkFJTCxcbiAgTE9BRF9UV0VFVF9SRVFVRVNULFxuICBMT0FEX1RXRUVUX1NVQ0NFU1MsXG4gIExPQURfVFdFRVRfRkFJTCxcbn0gZnJvbSBcIi4uL3JlZHV4L3Bvc3QuanNcIjtcblxuZnVuY3Rpb24gYWRkVHdlZXQoZGF0YSkge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwNjUvcG9zdFwiLCBkYXRhLCB7XG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICB9KTtcbn1cblxuZnVuY3Rpb24qIGhhbmRsZUFkZFR3ZWV0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkVHdlZXQsIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX1RXRUVUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBBRERfVFdFRVRfRkFJTCxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBmdW5jdGlvbiBsb2FkVHdlZXRzKGRhdGEpIHtcbi8vICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzYCk7XG4vLyB9XG5cbmZ1bmN0aW9uKiBoYW5kbGVsb2FkVHdlZXRzKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoKCkgPT5cbiAgICAgIGF4aW9zLmdldChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiKVxuICAgICk7XG5cbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9UV0VFVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9UV0VFVF9GQUlMLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdHdlZXRTYWdhKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9UV0VFVF9SRVFVRVNULCBoYW5kbGVBZGRUd2VldCk7XG59XG4iLCJpbXBvcnQgeyBhbGwsIHB1dCwgY2FsbCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IHtcbiAgTE9HSU5fU1VDQ0VTUyxcbiAgTE9HSU5fRkFJTCxcbiAgTE9HSU5fUkVRVUVTVCxcbiAgU0lHTlVQX1NVQ0NFU1MsXG4gIFNJR05VUF9GQUlMLFxuICBTSUdOVVBfUkVRVUVTVCxcbiAgTE9BRF9JTkZPX1JFUVVFU1QsXG4gIExPQURfSU5GT1BfU1VDQ0VTUyxcbiAgTE9BRF9JTkZPX0ZBSUwsXG59IGZyb20gXCIuLi9yZWR1eC91c2VyXCI7XG5cbmZ1bmN0aW9uIGxvYWRJbmZvKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyXCIpO1xufVxuXG5mdW5jdGlvbiogbG9hZEluZm9SZXF1ZXN0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkIGNhbGwobG9hZEluZm8sIGFjdGlvbi5kYXRhLCB7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgfSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfSU5GT1BfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlcy5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX0lORk9fRkFJTCxcbiAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvZ2luUG9zdChkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFxuICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDY1L2F1dGgvbG9naW5cIixcbiAgICB7XG4gICAgICBlbWFpbDogZGF0YS5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkLFxuICAgIH0sXG4gICAge1xuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgIH1cbiAgKTtcbn1cblxuZnVuY3Rpb24qIGxvZ2luUmVxdWVzdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSB5aWVsZCBjYWxsKGxvZ2luUG9zdCwgYWN0aW9uLnBheWxvYWQpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dJTl9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzLmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR0lOX0ZBSUwsXG4gICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2lnbnVwUG9zdChkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXJcIiwge1xuICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxuICAgIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkLFxuICAgIG5pY2tuYW1lOiBkYXRhLm5pY2tuYW1lLFxuICB9KTtcbn1cbmZ1bmN0aW9uKiBzaWdudXBSZXF1ZXN0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkIGNhbGwoc2lnbnVwUG9zdCwgYWN0aW9uLnBheWxvYWQpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBTSUdOVVBfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlcy5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBTSUdOVVBfRkFJTCxcbiAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HSU5fUkVRVUVTVCwgbG9naW5SZXF1ZXN0KTtcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOVVBfUkVRVUVTVCwgc2lnbnVwUmVxdWVzdCk7XG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9JTkZPX1JFUVVFU1QsIGxvYWRJbmZvUmVxdWVzdCk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3lzdGVtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9