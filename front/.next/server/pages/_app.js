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
} ////////////////////////////////////////////////////////////////////////////////////////////


function changeName(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().patch("http://localhost:3065/user/nickname", {
    nickname: data
  });
}

function* changeNameRequest(action) {
  try {
    const res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(changeName, action.payload);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _redux_user__WEBPACK_IMPORTED_MODULE_2__.CHANGE_NAME_SUCCESS,
      data: res.data
    });
  } catch (error) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _redux_user__WEBPACK_IMPORTED_MODULE_2__.CHANGE_NAME_FAIL,
      error: res.response
    });
  }
}

function changeBio(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().patch("http://localhost:3065/user/nickBio", {
    Bio: data
  });
}

function* changeBioRequest(action) {
  try {
    const res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(changeBio, action.payload);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _redux_user__WEBPACK_IMPORTED_MODULE_2__.CHANGE_BIO_SUCCESS,
      data: res.data
    });
  } catch (error) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _redux_user__WEBPACK_IMPORTED_MODULE_2__.CHANGE_BIO_FAIL,
      error: res.response
    });
  }
}

function* userSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_redux_user__WEBPACK_IMPORTED_MODULE_2__.LOGIN_REQUEST, loginRequest);
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_redux_user__WEBPACK_IMPORTED_MODULE_2__.SIGNUP_REQUEST, signupRequest);
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_redux_user__WEBPACK_IMPORTED_MODULE_2__.LOAD_INFO_REQUEST, loadInfoRequest);
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_redux_user__WEBPACK_IMPORTED_MODULE_2__.CHANGE_NAME_REQUEST, changeNameRequest);
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_redux_user__WEBPACK_IMPORTED_MODULE_2__.CHANGE_BIO_REQUEST, changeBioRequest);
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_material-ui_core_esm_styles_index_js","vendors-node_modules_material-ui_core_esm_CssBaseline_index_js","redux_post_js-redux_user_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pdHdpdHRlci8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvLi9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N5c3RlbVwiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJjb250cmFzdFRleHQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndyYXBwZXIiLCJiaW5kTWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyUmVkdWNlciIsInR3ZWV0UmVkdWNlciIsInJvb3RTYWdhIiwiYWxsIiwidXNlclNhZ2EiLCJ0d2VldFNhZ2EiLCJjcmVhdGVUd2VldFN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsImFkZFR3ZWV0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsIndpdGhDcmVkZW50aWFscyIsImhhbmRsZUFkZFR3ZWV0IiwiYWN0aW9uIiwicmVzdWx0IiwiY2FsbCIsInB1dCIsInR5cGUiLCJBRERfVFdFRVRfU1VDQ0VTUyIsImVyciIsImVycm9yIiwiQUREX1RXRUVUX0ZBSUwiLCJyZXNwb25zZSIsImhhbmRsZWxvYWRUd2VldHMiLCJMT0FEX1RXRUVUX1NVQ0NFU1MiLCJMT0FEX1RXRUVUX0ZBSUwiLCJ0YWtlTGF0ZXN0IiwiQUREX1RXRUVUX1JFUVVFU1QiLCJsb2FkSW5mbyIsImxvYWRJbmZvUmVxdWVzdCIsInJlcyIsIkxPQURfSU5GT1BfU1VDQ0VTUyIsIkxPQURfSU5GT19GQUlMIiwibG9naW5Qb3N0IiwiZW1haWwiLCJwYXNzd29yZCIsImxvZ2luUmVxdWVzdCIsInBheWxvYWQiLCJMT0dJTl9TVUNDRVNTIiwiTE9HSU5fRkFJTCIsInNpZ251cFBvc3QiLCJuaWNrbmFtZSIsInNpZ251cFJlcXVlc3QiLCJTSUdOVVBfU1VDQ0VTUyIsIlNJR05VUF9GQUlMIiwiY2hhbmdlTmFtZSIsImNoYW5nZU5hbWVSZXF1ZXN0IiwiQ0hBTkdFX05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OQU1FX0ZBSUwiLCJjaGFuZ2VCaW8iLCJCaW8iLCJjaGFuZ2VCaW9SZXF1ZXN0IiwiQ0hBTkdFX0JJT19TVUNDRVNTIiwiQ0hBTkdFX0JJT19GQUlMIiwiTE9HSU5fUkVRVUVTVCIsIlNJR05VUF9SRVFVRVNUIiwiTE9BRF9JTkZPX1JFUVVFU1QiLCJDSEFOR0VfTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX0JJT19SRVFVRVNUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxNQUFNQSxLQUFLLEdBQUdDLHdFQUFjLENBQUM7QUFDM0JDLFNBQU8sRUFBRTtBQUNQQyxXQUFPLEVBQUU7QUFDUEMsVUFBSSxFQUFFLHVCQURDO0FBRVBDLGtCQUFZLEVBQUU7QUFGUDtBQURGO0FBRGtCLENBQUQsQ0FBNUI7O0FBUUEsU0FBU0MsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVFFLDhEQUFDLG1FQUFEO0FBQWUsV0FBSyxFQUFFUixLQUF0QjtBQUFBLDhCQUNFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLFNBQUQsb0JBQWVRLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGO0FBQUEsa0JBREY7QUFlRCxDLENBQ0Q7OztBQUNBLCtEQUFlQywyREFBQSxDQUFrQkgsS0FBbEIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7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cUJQLGdCQUFyQixDQUFoQjtBQUNELEM7Ozs7Ozs7Ozs7O0FDcklELGlEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XG5cbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlLlxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiBcInJnYmEoMjksMTYxLDI0MiwxLjAwKVwiLFxuICAgICAgY29udHJhc3RUZXh0OiBcIiNmZmZmZmZcIixcbiAgICB9LFxuICB9LFxufSk7XG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBoZWlnaHQ9ZGV2aWNlLWhlaWdodCwgaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm9cIlxuICAgICAgICAvPlxuICAgICAgICA8dGl0bGU+TW5pVHdpdHRlcjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufVxuLy9leHBvcnQgZGVmYXVsdCBNeUFwcDtcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcbiIsImltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XG5pbXBvcnQgdHdlZXRSZWR1Y2VyIGZyb20gXCIuL3Bvc3RcIjtcbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tIFwiLi91c2VyXCI7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcblxuaW1wb3J0IHsgYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IHVzZXJTYWdhIGZyb20gXCIuLi9zYWdhcy91c2VyXCI7XG5pbXBvcnQgdHdlZXRTYWdhIGZyb20gXCIuLi9zYWdhcy9wb3N0XCI7XG5cbmNvbnN0IGJpbmRNaWRkbGV3YXJlID0gKG1pZGRsZXdhcmUpID0+IHtcbiAgcmV0dXJuIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKTtcbiAgLy9yZXR1cm4gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpXG59O1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHVzZXJSZWR1Y2VyLFxuICB0d2VldFJlZHVjZXIsXG59KTtcblxuZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICB5aWVsZCBhbGwoW3VzZXJTYWdhKCksIHR3ZWV0U2FnYSgpXSk7XG59XG5cbmNvbnN0IGNyZWF0ZVR3ZWV0U3RvcmUgPSAoKSA9PiB7XG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgYmluZE1pZGRsZXdhcmUoW3NhZ2FNaWRkbGV3YXJlXSkpO1xuXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcblxuICByZXR1cm4gc3RvcmU7XG59O1xuXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY3JlYXRlVHdlZXRTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KTtcbiIsImltcG9ydCB7IGFsbCwgcHV0LCBjYWxsLCB0YWtlTGF0ZXN0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQge1xuICBBRERfVFdFRVRfUkVRVUVTVCxcbiAgQUREX1RXRUVUX1NVQ0NFU1MsXG4gIEFERF9UV0VFVF9GQUlMLFxuICBMT0FEX1RXRUVUX1JFUVVFU1QsXG4gIExPQURfVFdFRVRfU1VDQ0VTUyxcbiAgTE9BRF9UV0VFVF9GQUlMLFxufSBmcm9tIFwiLi4vcmVkdXgvcG9zdC5qc1wiO1xuXG5mdW5jdGlvbiBhZGRUd2VldChkYXRhKSB7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS9wb3N0XCIsIGRhdGEsIHtcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiogaGFuZGxlQWRkVHdlZXQoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRUd2VldCwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBBRERfVFdFRVRfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEFERF9UV0VFVF9GQUlMLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbi8vIGZ1bmN0aW9uIGxvYWRUd2VldHMoZGF0YSkge1xuLy8gICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNgKTtcbi8vIH1cblxuZnVuY3Rpb24qIGhhbmRsZWxvYWRUd2VldHMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCgoKSA9PlxuICAgICAgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCIpXG4gICAgKTtcblxuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1RXRUVUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1RXRUVUX0ZBSUwsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB0d2VldFNhZ2EoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1RXRUVUX1JFUVVFU1QsIGhhbmRsZUFkZFR3ZWV0KTtcbn1cbiIsImltcG9ydCB7IGFsbCwgcHV0LCBjYWxsLCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQge1xuICBMT0dJTl9TVUNDRVNTLFxuICBMT0dJTl9GQUlMLFxuICBMT0dJTl9SRVFVRVNULFxuICBTSUdOVVBfU1VDQ0VTUyxcbiAgU0lHTlVQX0ZBSUwsXG4gIFNJR05VUF9SRVFVRVNULFxuICBMT0FEX0lORk9fUkVRVUVTVCxcbiAgTE9BRF9JTkZPUF9TVUNDRVNTLFxuICBMT0FEX0lORk9fRkFJTCxcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgQ0hBTkdFX0JJT19SRVFVRVNULFxuICBDSEFOR0VfQklPX1NVQ0NFU1MsXG4gIENIQU5HRV9CSU9fRkFJTCxcbiAgQ0hBTkdFX05BTUVfUkVRVUVTVCxcbiAgQ0hBTkdFX05BTUVfU1VDQ0VTUyxcbiAgQ0hBTkdFX05BTUVfRkFJTCxcbn0gZnJvbSBcIi4uL3JlZHV4L3VzZXJcIjtcblxuZnVuY3Rpb24gbG9hZEluZm8oZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXJcIik7XG59XG5cbmZ1bmN0aW9uKiBsb2FkSW5mb1JlcXVlc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0geWllbGQgY2FsbChsb2FkSW5mbywgYWN0aW9uLmRhdGEsIHtcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICB9KTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9JTkZPUF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzLmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfSU5GT19GQUlMLFxuICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9naW5Qb3N0KGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXG4gICAgXCJodHRwOi8vbG9jYWxob3N0OjMwNjUvYXV0aC9sb2dpblwiLFxuICAgIHtcbiAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQsXG4gICAgfSxcbiAgICB7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgfVxuICApO1xufVxuXG5mdW5jdGlvbiogbG9naW5SZXF1ZXN0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkIGNhbGwobG9naW5Qb3N0LCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR0lOX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXMuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9HSU5fRkFJTCxcbiAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaWdudXBQb3N0KGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwNjUvdXNlclwiLCB7XG4gICAgZW1haWw6IGRhdGEuZW1haWwsXG4gICAgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQsXG4gICAgbmlja25hbWU6IGRhdGEubmlja25hbWUsXG4gIH0pO1xufVxuZnVuY3Rpb24qIHNpZ251cFJlcXVlc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0geWllbGQgY2FsbChzaWdudXBQb3N0LCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFNJR05VUF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzLmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFNJR05VUF9GQUlMLFxuICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLFxuICAgIH0pO1xuICB9XG59XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuZnVuY3Rpb24gY2hhbmdlTmFtZShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wYXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyL25pY2tuYW1lXCIsIHsgbmlja25hbWU6IGRhdGEgfSk7XG59XG5mdW5jdGlvbiogY2hhbmdlTmFtZVJlcXVlc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0geWllbGQgY2FsbChjaGFuZ2VOYW1lLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IENIQU5HRV9OQU1FX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXMuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQ0hBTkdFX05BTUVfRkFJTCxcbiAgICAgIGVycm9yOiByZXMucmVzcG9uc2UsXG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGNoYW5nZUJpbyhkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wYXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyL25pY2tCaW9cIiwgeyBCaW86IGRhdGEgfSk7XG59XG5mdW5jdGlvbiogY2hhbmdlQmlvUmVxdWVzdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSB5aWVsZCBjYWxsKGNoYW5nZUJpbywgYWN0aW9uLnBheWxvYWQpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBDSEFOR0VfQklPX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXMuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQ0hBTkdFX0JJT19GQUlMLFxuICAgICAgZXJyb3I6IHJlcy5yZXNwb25zZSxcbiAgICB9KTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPR0lOX1JFUVVFU1QsIGxvZ2luUmVxdWVzdCk7XG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTlVQX1JFUVVFU1QsIHNpZ251cFJlcXVlc3QpO1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfSU5GT19SRVFVRVNULCBsb2FkSW5mb1JlcXVlc3QpO1xuICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9OQU1FX1JFUVVFU1QsIGNoYW5nZU5hbWVSZXF1ZXN0KTtcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfQklPX1JFUVVFU1QsIGNoYW5nZUJpb1JlcXVlc3QpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3N5c3RlbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3V0aWxzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==