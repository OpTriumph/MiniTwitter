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


var _jsxFileName = "H:\\Master\\MiniTwitter\\front\\pages\\_app.js";

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
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./redux/user.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sagas_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sagas/user */ "./sagas/user.js");
/* harmony import */ var _sagas_tweets2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sagas/tweets2 */ "./sagas/tweets2.js");
/* harmony import */ var _redux_tweets2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/tweets2 */ "./redux/tweets2.js");











const bindMiddleware = middleware => {
  return (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_2__.applyMiddleware)(...middleware)); //return applyMiddleware(...middleware)
};

const rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
  userReducer: _user__WEBPACK_IMPORTED_MODULE_4__.default,
  tweetReducer: _redux_tweets2__WEBPACK_IMPORTED_MODULE_8__.default
});

function* rootSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_5__.all)([(0,_sagas_user__WEBPACK_IMPORTED_MODULE_6__.default)(), (0,_sagas_tweets2__WEBPACK_IMPORTED_MODULE_7__.default)()]);
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

/***/ "./sagas/tweets2.js":
/*!**************************!*\
  !*** ./sagas/tweets2.js ***!
  \**************************/
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
/* harmony import */ var _redux_tweets2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/tweets2 */ "./redux/tweets2.js");




function addPost(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().post("https://jsonplaceholder.typicode.com/posts", {
    text: data
  });
}

function* handleaddPost(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(addPost, action.payload);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _redux_tweets2__WEBPACK_IMPORTED_MODULE_2__.ADD_TWEET_SUCCESS,
      data: result.data
    }); // yield put({
    //   type: ADD_TWEET_TO_ME,
    //   data: result.data.id,
    // });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _redux_tweets2__WEBPACK_IMPORTED_MODULE_2__.ADD_TWEET_FAIL,
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
      type: _redux_tweets2__WEBPACK_IMPORTED_MODULE_2__.LOAD_TWEET_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _redux_tweets2__WEBPACK_IMPORTED_MODULE_2__.LOAD_TWEET_FAIL,
      error: err.response
    });
  }
}

function* tweetSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_redux_tweets2__WEBPACK_IMPORTED_MODULE_2__.ADD_TWEET_REQUEST, handleaddPost);
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_redux_tweets2__WEBPACK_IMPORTED_MODULE_2__.LOAD_TWEET_REQUEST, handleloadTweets);
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




function loginPost(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().post("http://localhost:3065/auth/login", {
    email: data.email,
    password: data.password
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_material-ui_core_esm_styles_index_js","vendors-node_modules_material-ui_core_esm_CssBaseline_index_js","redux_tweets2_js-redux_user_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pdHdpdHRlci8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvLi9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci8uL3NhZ2FzL3R3ZWV0czIuanMiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N5c3RlbVwiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJjb250cmFzdFRleHQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndyYXBwZXIiLCJiaW5kTWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyUmVkdWNlciIsInR3ZWV0UmVkdWNlciIsInJvb3RTYWdhIiwiYWxsIiwidXNlclNhZ2EiLCJ0d2VldFNhZ2EiLCJjcmVhdGVUd2VldFN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsImFkZFBvc3QiLCJkYXRhIiwiYXhpb3MiLCJ0ZXh0IiwiaGFuZGxlYWRkUG9zdCIsImFjdGlvbiIsInJlc3VsdCIsImNhbGwiLCJwYXlsb2FkIiwicHV0IiwidHlwZSIsIkFERF9UV0VFVF9TVUNDRVNTIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiQUREX1RXRUVUX0ZBSUwiLCJyZXNwb25zZSIsImhhbmRsZWxvYWRUd2VldHMiLCJMT0FEX1RXRUVUX1NVQ0NFU1MiLCJMT0FEX1RXRUVUX0ZBSUwiLCJ0YWtlTGF0ZXN0IiwiQUREX1RXRUVUX1JFUVVFU1QiLCJMT0FEX1RXRUVUX1JFUVVFU1QiLCJsb2dpblBvc3QiLCJlbWFpbCIsInBhc3N3b3JkIiwibG9naW5SZXF1ZXN0IiwicmVzIiwiTE9HSU5fU1VDQ0VTUyIsIkxPR0lOX0ZBSUwiLCJzaWdudXBQb3N0Iiwibmlja25hbWUiLCJzaWdudXBSZXF1ZXN0IiwiU0lHTlVQX1NVQ0NFU1MiLCJTSUdOVVBfRkFJTCIsIkxPR0lOX1JFUVVFU1QiLCJTSUdOVVBfUkVRVUVTVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtB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RCxpRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxnRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XHJcblxyXG4vLyBDcmVhdGUgYSB0aGVtZSBpbnN0YW5jZS5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBtYWluOiBcInJnYmEoMjksMTYxLDI0MiwxLjAwKVwiLFxyXG4gICAgICBjb250cmFzdFRleHQ6IFwiI2ZmZmZmZlwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaGVpZ2h0PWRldmljZS1oZWlnaHQsIGluaXRpYWwtc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPW5vXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDx0aXRsZT5NbmlUd2l0dGVyPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4vL2V4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XHJcbiIsImltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcblxyXG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSBcIi4uL3NhZ2FzL3VzZXJcIjtcclxuaW1wb3J0IHR3ZWV0U2FnYSBmcm9tIFwiLi4vc2FnYXMvdHdlZXRzMlwiO1xyXG5pbXBvcnQgdHdlZXRSZWR1Y2VyIGZyb20gXCIuLi9yZWR1eC90d2VldHMyXCI7XHJcblxyXG5jb25zdCBiaW5kTWlkZGxld2FyZSA9IChtaWRkbGV3YXJlKSA9PiB7XHJcbiAgcmV0dXJuIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKTtcclxuICAvL3JldHVybiBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSlcclxufTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICB1c2VyUmVkdWNlcixcclxuICB0d2VldFJlZHVjZXIsXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbdXNlclNhZ2EoKSwgdHdlZXRTYWdhKCldKTtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlVHdlZXRTdG9yZSA9ICgpID0+IHtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgYmluZE1pZGRsZXdhcmUoW3NhZ2FNaWRkbGV3YXJlXSkpO1xyXG5cclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcblxyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjcmVhdGVUd2VldFN0b3JlLCB7IGRlYnVnOiB0cnVlIH0pO1xyXG4iLCJpbXBvcnQgeyBhbGwsIHB1dCwgY2FsbCwgdGFrZUxhdGVzdCwgdGFrZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBBRERfVFdFRVRfUkVRVUVTVCxcclxuICBBRERfVFdFRVRfU1VDQ0VTUyxcclxuICBBRERfVFdFRVRfRkFJTCxcclxuICBMT0FEX1RXRUVUX1JFUVVFU1QsXHJcbiAgTE9BRF9UV0VFVF9TVUNDRVNTLFxyXG4gIExPQURfVFdFRVRfRkFJTCxcclxufSBmcm9tIFwiLi4vcmVkdXgvdHdlZXRzMlwiO1xyXG5cclxuZnVuY3Rpb24gYWRkUG9zdChkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIiwge1xyXG4gICAgdGV4dDogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGhhbmRsZWFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdCwgYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1RXRUVUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICAvLyB5aWVsZCBwdXQoe1xyXG4gICAgLy8gICB0eXBlOiBBRERfVFdFRVRfVE9fTUUsXHJcbiAgICAvLyAgIGRhdGE6IHJlc3VsdC5kYXRhLmlkLFxyXG4gICAgLy8gfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfVFdFRVRfRkFJTCxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBsb2FkVHdlZXRzKGRhdGEpIHtcclxuLy8gICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNgKTtcclxuLy8gfVxyXG5cclxuZnVuY3Rpb24qIGhhbmRsZWxvYWRUd2VldHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoKCkgPT5cclxuICAgICAgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCIpXHJcbiAgICApO1xyXG5cclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVFdFRVRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVFdFRVRfRkFJTCxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHR3ZWV0U2FnYSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9UV0VFVF9SRVFVRVNULCBoYW5kbGVhZGRQb3N0KTtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVFdFRVRfUkVRVUVTVCwgaGFuZGxlbG9hZFR3ZWV0cyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBwdXQsIGNhbGwsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgTE9HSU5fU1VDQ0VTUyxcclxuICBMT0dJTl9GQUlMLFxyXG4gIExPR0lOX1JFUVVFU1QsXHJcbiAgU0lHTlVQX1NVQ0NFU1MsXHJcbiAgU0lHTlVQX0ZBSUwsXHJcbiAgU0lHTlVQX1JFUVVFU1QsXHJcbn0gZnJvbSBcIi4uL3JlZHV4L3VzZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGxvZ2luUG9zdChkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwNjUvYXV0aC9sb2dpblwiLCB7XHJcbiAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9naW5SZXF1ZXN0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSB5aWVsZCBjYWxsKGxvZ2luUG9zdCwgYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HSU5fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HSU5fRkFJTCxcclxuICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWdudXBQb3N0KGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyXCIsIHtcclxuICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxyXG4gICAgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQsXHJcbiAgICBuaWNrbmFtZTogZGF0YS5uaWNrbmFtZSxcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiogc2lnbnVwUmVxdWVzdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0geWllbGQgY2FsbChzaWdudXBQb3N0LCBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOVVBfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTlVQX0ZBSUwsXHJcbiAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HSU5fUkVRVUVTVCwgbG9naW5SZXF1ZXN0KTtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05VUF9SRVFVRVNULCBzaWdudXBSZXF1ZXN0KTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3lzdGVtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9