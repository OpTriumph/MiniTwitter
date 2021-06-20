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


var _jsxFileName = "C:\\Users\\user\\Desktop\\MiniTwitter\\front\\pages\\_app.js";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pdHdpdHRlci8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvLi9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N5c3RlbVwiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJjb250cmFzdFRleHQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndyYXBwZXIiLCJiaW5kTWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyUmVkdWNlciIsInR3ZWV0UmVkdWNlciIsInJvb3RTYWdhIiwiYWxsIiwidXNlclNhZ2EiLCJ0d2VldFNhZ2EiLCJjcmVhdGVUd2VldFN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsImFkZFR3ZWV0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsIndpdGhDcmVkZW50aWFscyIsImhhbmRsZUFkZFR3ZWV0IiwiYWN0aW9uIiwicmVzdWx0IiwiY2FsbCIsInB1dCIsInR5cGUiLCJBRERfVFdFRVRfU1VDQ0VTUyIsImVyciIsImVycm9yIiwiQUREX1RXRUVUX0ZBSUwiLCJyZXNwb25zZSIsImhhbmRsZWxvYWRUd2VldHMiLCJMT0FEX1RXRUVUX1NVQ0NFU1MiLCJMT0FEX1RXRUVUX0ZBSUwiLCJ0YWtlTGF0ZXN0IiwiQUREX1RXRUVUX1JFUVVFU1QiLCJsb2FkSW5mbyIsImxvYWRJbmZvUmVxdWVzdCIsInJlcyIsIkxPQURfSU5GT1BfU1VDQ0VTUyIsIkxPQURfSU5GT19GQUlMIiwibG9naW5Qb3N0IiwiZW1haWwiLCJwYXNzd29yZCIsImxvZ2luUmVxdWVzdCIsInBheWxvYWQiLCJMT0dJTl9TVUNDRVNTIiwiTE9HSU5fRkFJTCIsInNpZ251cFBvc3QiLCJuaWNrbmFtZSIsInNpZ251cFJlcXVlc3QiLCJTSUdOVVBfU1VDQ0VTUyIsIlNJR05VUF9GQUlMIiwiTE9HSU5fUkVRVUVTVCIsIlNJR05VUF9SRVFVRVNU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QixRQUYrQjtBQUc5Q00sWUFBUSxFQUFFbEMsSUFBSSxDQUFDa0M7QUFIK0IsR0FBekMsQ0FBUDtBQUtEOztBQUNELFVBQVVDLGFBQVYsQ0FBd0I3QixNQUF4QixFQUFnQztBQUM5QixNQUFJO0FBQ0YsVUFBTWlCLEdBQUcsR0FBRyxNQUFNZix3REFBSSxDQUFDeUIsVUFBRCxFQUFhM0IsTUFBTSxDQUFDd0IsT0FBcEIsQ0FBdEI7QUFDQSxVQUFNckIsdURBQUcsQ0FBQztBQUNSQyxVQUFJLEVBQUUwQix1REFERTtBQUVScEMsVUFBSSxFQUFFdUIsR0FBRyxDQUFDdkI7QUFGRixLQUFELENBQVQ7QUFJRCxHQU5ELENBTUUsT0FBT2EsS0FBUCxFQUFjO0FBQ2QsVUFBTUosdURBQUcsQ0FBQztBQUNSQyxVQUFJLEVBQUUyQixvREFERTtBQUVSeEIsV0FBSyxFQUFFQSxLQUFLLENBQUNFO0FBRkwsS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFFYyxVQUFVM0IsUUFBVixHQUFxQjtBQUNsQyxRQUFNK0IsOERBQVUsQ0FBQ21CLHNEQUFELEVBQWdCVCxZQUFoQixDQUFoQjtBQUNBLFFBQU1WLDhEQUFVLENBQUNvQix1REFBRCxFQUFpQkosYUFBakIsQ0FBaEI7QUFDQSxRQUFNaEIsOERBQVUsQ0FBQ3FCLDBEQUFELEVBQW9CbEIsZUFBcEIsQ0FBaEI7QUFDRCxDOzs7Ozs7Ozs7OztBQzFGRCxpRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxnRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XHJcblxyXG4vLyBDcmVhdGUgYSB0aGVtZSBpbnN0YW5jZS5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBtYWluOiBcInJnYmEoMjksMTYxLDI0MiwxLjAwKVwiLFxyXG4gICAgICBjb250cmFzdFRleHQ6IFwiI2ZmZmZmZlwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaGVpZ2h0PWRldmljZS1oZWlnaHQsIGluaXRpYWwtc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPW5vXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDx0aXRsZT5NbmlUd2l0dGVyPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4vL2V4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XHJcbiIsImltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB0d2VldFJlZHVjZXIgZnJvbSBcIi4vcG9zdFwiO1xyXG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IGFsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gXCIuLi9zYWdhcy91c2VyXCI7XHJcbmltcG9ydCB0d2VldFNhZ2EgZnJvbSBcIi4uL3NhZ2FzL3Bvc3RcIjtcclxuXHJcbmNvbnN0IGJpbmRNaWRkbGV3YXJlID0gKG1pZGRsZXdhcmUpID0+IHtcclxuICByZXR1cm4gY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpO1xyXG4gIC8vcmV0dXJuIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKVxyXG59O1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIHVzZXJSZWR1Y2VyLFxyXG4gIHR3ZWV0UmVkdWNlcixcclxufSk7XHJcblxyXG5mdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFt1c2VyU2FnYSgpLCB0d2VldFNhZ2EoKV0pO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVUd2VldFN0b3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBiaW5kTWlkZGxld2FyZShbc2FnYU1pZGRsZXdhcmVdKSk7XHJcblxyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuXHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNyZWF0ZVR3ZWV0U3RvcmUsIHsgZGVidWc6IHRydWUgfSk7XHJcbiIsImltcG9ydCB7IGFsbCwgcHV0LCBjYWxsLCB0YWtlTGF0ZXN0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFERF9UV0VFVF9SRVFVRVNULFxyXG4gIEFERF9UV0VFVF9TVUNDRVNTLFxyXG4gIEFERF9UV0VFVF9GQUlMLFxyXG4gIExPQURfVFdFRVRfUkVRVUVTVCxcclxuICBMT0FEX1RXRUVUX1NVQ0NFU1MsXHJcbiAgTE9BRF9UV0VFVF9GQUlMLFxyXG59IGZyb20gXCIuLi9yZWR1eC9wb3N0LmpzXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRUd2VldChkYXRhKSB7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwNjUvcG9zdFwiLCBkYXRhLCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBoYW5kbGVBZGRUd2VldChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRUd2VldCwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1RXRUVUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfVFdFRVRfRkFJTCxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBsb2FkVHdlZXRzKGRhdGEpIHtcclxuLy8gICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNgKTtcclxuLy8gfVxyXG5cclxuZnVuY3Rpb24qIGhhbmRsZWxvYWRUd2VldHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoKCkgPT5cclxuICAgICAgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCIpXHJcbiAgICApO1xyXG5cclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVFdFRVRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVFdFRVRfRkFJTCxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHR3ZWV0U2FnYSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9UV0VFVF9SRVFVRVNULCBoYW5kbGVBZGRUd2VldCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBwdXQsIGNhbGwsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgTE9HSU5fU1VDQ0VTUyxcclxuICBMT0dJTl9GQUlMLFxyXG4gIExPR0lOX1JFUVVFU1QsXHJcbiAgU0lHTlVQX1NVQ0NFU1MsXHJcbiAgU0lHTlVQX0ZBSUwsXHJcbiAgU0lHTlVQX1JFUVVFU1QsXHJcbiAgTE9BRF9JTkZPX1JFUVVFU1QsXHJcbiAgTE9BRF9JTkZPUF9TVUNDRVNTLFxyXG4gIExPQURfSU5GT19GQUlMLFxyXG59IGZyb20gXCIuLi9yZWR1eC91c2VyXCI7XHJcblxyXG5mdW5jdGlvbiBsb2FkSW5mbyhkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEluZm9SZXF1ZXN0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSB5aWVsZCBjYWxsKGxvYWRJbmZvLCBhY3Rpb24uZGF0YSwge1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfSU5GT1BfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9JTkZPX0ZBSUwsXHJcbiAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dpblBvc3QoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFxyXG4gICAgXCJodHRwOi8vbG9jYWxob3N0OjMwNjUvYXV0aC9sb2dpblwiLFxyXG4gICAge1xyXG4gICAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgICAgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICB9XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ2luUmVxdWVzdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0geWllbGQgY2FsbChsb2dpblBvc3QsIGFjdGlvbi5wYXlsb2FkKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR0lOX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlcy5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR0lOX0ZBSUwsXHJcbiAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnbnVwUG9zdChkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwNjUvdXNlclwiLCB7XHJcbiAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkLFxyXG4gICAgbmlja25hbWU6IGRhdGEubmlja25hbWUsXHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24qIHNpZ251cFJlcXVlc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IHlpZWxkIGNhbGwoc2lnbnVwUG9zdCwgYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTlVQX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlcy5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05VUF9GQUlMLFxyXG4gICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR0lOX1JFUVVFU1QsIGxvZ2luUmVxdWVzdCk7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOVVBfUkVRVUVTVCwgc2lnbnVwUmVxdWVzdCk7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0lORk9fUkVRVUVTVCwgbG9hZEluZm9SZXF1ZXN0KTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3lzdGVtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9