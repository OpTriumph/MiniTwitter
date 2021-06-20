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


var _jsxFileName = "H:\\change\\front\\pages\\_app.js";

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
}

function addComment(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().post("http://localhost:3065/post/comment", data, {
    withCredentials: true
  });
}

function* handleAddComment(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(addComment, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _redux_post_js__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _redux_post_js__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT_FAIL,
      error: err.response.data
    });
  }
}

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
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_redux_post_js__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT_REQUEST, handleAddComment);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pdHdpdHRlci8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvLi9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N5c3RlbVwiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJjb250cmFzdFRleHQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndyYXBwZXIiLCJiaW5kTWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyUmVkdWNlciIsInR3ZWV0UmVkdWNlciIsInJvb3RTYWdhIiwiYWxsIiwidXNlclNhZ2EiLCJ0d2VldFNhZ2EiLCJjcmVhdGVUd2VldFN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsImFkZFR3ZWV0IiwiZGF0YSIsImF4aW9zIiwid2l0aENyZWRlbnRpYWxzIiwiaGFuZGxlQWRkVHdlZXQiLCJhY3Rpb24iLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwidHlwZSIsIkFERF9UV0VFVF9TVUNDRVNTIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiQUREX1RXRUVUX0ZBSUwiLCJyZXNwb25zZSIsImFkZENvbW1lbnQiLCJoYW5kbGVBZGRDb21tZW50IiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUwiLCJoYW5kbGVsb2FkVHdlZXRzIiwiTE9BRF9UV0VFVF9TVUNDRVNTIiwiTE9BRF9UV0VFVF9GQUlMIiwidGFrZUxhdGVzdCIsIkFERF9UV0VFVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsImxvYWRJbmZvIiwibG9hZEluZm9SZXF1ZXN0IiwicmVzIiwiTE9BRF9JTkZPUF9TVUNDRVNTIiwiTE9BRF9JTkZPX0ZBSUwiLCJsb2dpblBvc3QiLCJlbWFpbCIsInBhc3N3b3JkIiwibG9naW5SZXF1ZXN0IiwicGF5bG9hZCIsIkxPR0lOX1NVQ0NFU1MiLCJMT0dJTl9GQUlMIiwic2lnbnVwUG9zdCIsIm5pY2tuYW1lIiwic2lnbnVwUmVxdWVzdCIsIlNJR05VUF9TVUNDRVNTIiwiU0lHTlVQX0ZBSUwiLCJMT0dJTl9SRVFVRVNUIiwiU0lHTlVQX1JFUVVFU1QiLCJMT0FEX0lORk9fUkVRVUVTVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsTUFBTUEsS0FBSyxHQUFHQyx3RUFBYyxDQUFDO0FBQzNCQyxTQUFPLEVBQUU7QUFDUEMsV0FBTyxFQUFFO0FBQ1BDLFVBQUksRUFBRSx1QkFEQztBQUVQQyxrQkFBWSxFQUFFO0FBRlA7QUFERjtBQURrQixDQUFELENBQTVCOztBQVFBLFNBQVNDLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFDRSxZQUFJLEVBQUMsVUFEUDtBQUVFLGVBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFRRSw4REFBQyxtRUFBRDtBQUFlLFdBQUssRUFBRVIsS0FBdEI7QUFBQSw4QkFDRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyxTQUFELG9CQUFlUSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRjtBQUFBLGtCQURGO0FBZUQsQyxDQUNEOzs7QUFDQSwrREFBZUMsMkRBQUEsQ0FBa0JILEtBQWxCLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUksY0FBYyxHQUFJQyxVQUFELElBQWdCO0FBQ3JD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T1ksS0FBUCxFQUFjO0FBQ2QsVUFBTUwsdURBQUcsQ0FBQztBQUNSQyxVQUFJLEVBQUVpQyxvREFERTtBQUVSN0IsV0FBSyxFQUFFQSxLQUFLLENBQUNFO0FBRkwsS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFFYyxVQUFVMUIsUUFBVixHQUFxQjtBQUNsQyxRQUFNa0MsOERBQVUsQ0FBQ29CLHNEQUFELEVBQWdCVCxZQUFoQixDQUFoQjtBQUNBLFFBQU1YLDhEQUFVLENBQUNxQix1REFBRCxFQUFpQkosYUFBakIsQ0FBaEI7QUFDQSxRQUFNakIsOERBQVUsQ0FBQ3NCLDBEQUFELEVBQW9CbEIsZUFBcEIsQ0FBaEI7QUFDRCxDOzs7Ozs7Ozs7OztBQzFGRCxpRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxnRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xuXG4vLyBDcmVhdGUgYSB0aGVtZSBpbnN0YW5jZS5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogXCJyZ2JhKDI5LDE2MSwyNDIsMS4wMClcIixcbiAgICAgIGNvbnRyYXN0VGV4dDogXCIjZmZmZmZmXCIsXG4gICAgfSxcbiAgfSxcbn0pO1xuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaGVpZ2h0PWRldmljZS1oZWlnaHQsIGluaXRpYWwtc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPW5vXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHRpdGxlPk1uaVR3aXR0ZXI8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cbi8vZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XG4iLCJpbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHR3ZWV0UmVkdWNlciBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSBcIi4vdXNlclwiO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5cbmltcG9ydCB7IGFsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCB1c2VyU2FnYSBmcm9tIFwiLi4vc2FnYXMvdXNlclwiO1xuaW1wb3J0IHR3ZWV0U2FnYSBmcm9tIFwiLi4vc2FnYXMvcG9zdFwiO1xuXG5jb25zdCBiaW5kTWlkZGxld2FyZSA9IChtaWRkbGV3YXJlKSA9PiB7XG4gIHJldHVybiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSk7XG4gIC8vcmV0dXJuIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKVxufTtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICB1c2VyUmVkdWNlcixcbiAgdHdlZXRSZWR1Y2VyLFxufSk7XG5cbmZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgeWllbGQgYWxsKFt1c2VyU2FnYSgpLCB0d2VldFNhZ2EoKV0pO1xufVxuXG5jb25zdCBjcmVhdGVUd2VldFN0b3JlID0gKCkgPT4ge1xuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGJpbmRNaWRkbGV3YXJlKFtzYWdhTWlkZGxld2FyZV0pKTtcblxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XG5cbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNyZWF0ZVR3ZWV0U3RvcmUsIHsgZGVidWc6IHRydWUgfSk7XG4iLCJpbXBvcnQgeyBhbGwsIHB1dCwgY2FsbCwgdGFrZUxhdGVzdCwgdGFrZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IHtcbiAgQUREX1RXRUVUX1JFUVVFU1QsXG4gIEFERF9UV0VFVF9TVUNDRVNTLFxuICBBRERfVFdFRVRfRkFJTCxcbiAgTE9BRF9UV0VFVF9SRVFVRVNULFxuICBMT0FEX1RXRUVUX1NVQ0NFU1MsXG4gIExPQURfVFdFRVRfRkFJTCxcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcbiAgQUREX0NPTU1FTlRfRkFJTCxcbn0gZnJvbSBcIi4uL3JlZHV4L3Bvc3QuanNcIjtcblxuZnVuY3Rpb24gYWRkVHdlZXQoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS9wb3N0XCIsIGRhdGEsIHtcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiogaGFuZGxlQWRkVHdlZXQoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRUd2VldCwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBBRERfVFdFRVRfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEFERF9UV0VFVF9GQUlMLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZENvbW1lbnQoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS9wb3N0L2NvbW1lbnRcIiwgZGF0YSwge1xuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uKiBoYW5kbGVBZGRDb21tZW50KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudCwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTCxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogaGFuZGxlbG9hZFR3ZWV0cygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKCgpID0+XG4gICAgICBheGlvcy5nZXQoXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIilcbiAgICApO1xuXG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfVFdFRVRfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfVFdFRVRfRkFJTCxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHR3ZWV0U2FnYSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfVFdFRVRfUkVRVUVTVCwgaGFuZGxlQWRkVHdlZXQpO1xuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGhhbmRsZUFkZENvbW1lbnQpO1xufVxuIiwiaW1wb3J0IHsgYWxsLCBwdXQsIGNhbGwsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCB7XG4gIExPR0lOX1NVQ0NFU1MsXG4gIExPR0lOX0ZBSUwsXG4gIExPR0lOX1JFUVVFU1QsXG4gIFNJR05VUF9TVUNDRVNTLFxuICBTSUdOVVBfRkFJTCxcbiAgU0lHTlVQX1JFUVVFU1QsXG4gIExPQURfSU5GT19SRVFVRVNULFxuICBMT0FEX0lORk9QX1NVQ0NFU1MsXG4gIExPQURfSU5GT19GQUlMLFxufSBmcm9tIFwiLi4vcmVkdXgvdXNlclwiO1xuXG5mdW5jdGlvbiBsb2FkSW5mbyhkYXRhKSB7XG4gIHJldHVybiBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwNjUvdXNlclwiKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRJbmZvUmVxdWVzdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSB5aWVsZCBjYWxsKGxvYWRJbmZvLCBhY3Rpb24uZGF0YSwge1xuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgIH0pO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX0lORk9QX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXMuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9JTkZPX0ZBSUwsXG4gICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2dpblBvc3QoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcbiAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS9hdXRoL2xvZ2luXCIsXG4gICAge1xuICAgICAgZW1haWw6IGRhdGEuZW1haWwsXG4gICAgICBwYXNzd29yZDogZGF0YS5wYXNzd29yZCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICB9XG4gICk7XG59XG5cbmZ1bmN0aW9uKiBsb2dpblJlcXVlc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0geWllbGQgY2FsbChsb2dpblBvc3QsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9HSU5fU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlcy5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dJTl9GQUlMLFxuICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNpZ251cFBvc3QoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyXCIsIHtcbiAgICBlbWFpbDogZGF0YS5lbWFpbCxcbiAgICBwYXNzd29yZDogZGF0YS5wYXNzd29yZCxcbiAgICBuaWNrbmFtZTogZGF0YS5uaWNrbmFtZSxcbiAgfSk7XG59XG5mdW5jdGlvbiogc2lnbnVwUmVxdWVzdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSB5aWVsZCBjYWxsKHNpZ251cFBvc3QsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogU0lHTlVQX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXMuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogU0lHTlVQX0ZBSUwsXG4gICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPR0lOX1JFUVVFU1QsIGxvZ2luUmVxdWVzdCk7XG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTlVQX1JFUVVFU1QsIHNpZ251cFJlcXVlc3QpO1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfSU5GT19SRVFVRVNULCBsb2FkSW5mb1JlcXVlc3QpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3N5c3RlbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3V0aWxzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==