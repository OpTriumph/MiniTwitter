self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./sagas/tweets2.js":
/*!**************************!*\
  !*** ./sagas/tweets2.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ tweetSaga; }
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_tweets2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/tweets2 */ "./redux/tweets2.js");
/* module decorator */ module = __webpack_require__.hmd(module);




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdHdlZXRzMi5qcyJdLCJuYW1lcyI6WyJhZGRQb3N0IiwiZGF0YSIsImF4aW9zIiwidGV4dCIsImhhbmRsZWFkZFBvc3QiLCJhY3Rpb24iLCJyZXN1bHQiLCJjYWxsIiwicGF5bG9hZCIsInB1dCIsInR5cGUiLCJBRERfVFdFRVRfU1VDQ0VTUyIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIkFERF9UV0VFVF9GQUlMIiwicmVzcG9uc2UiLCJoYW5kbGVsb2FkVHdlZXRzIiwiTE9BRF9UV0VFVF9TVUNDRVNTIiwiTE9BRF9UV0VFVF9GQUlMIiwidHdlZXRTYWdhIiwidGFrZUxhdGVzdCIsIkFERF9UV0VFVF9SRVFVRVNUIiwiTE9BRF9UV0VFVF9SRVFVRVNUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBU0EsU0FBU0EsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUI7QUFDckIsU0FBT0MsaURBQUEsQ0FBVyw0Q0FBWCxFQUF5RDtBQUM5REMsUUFBSSxFQUFFRjtBQUR3RCxHQUF6RCxDQUFQO0FBR0Q7O0FBRUQsVUFBVUcsYUFBVixDQUF3QkMsTUFBeEIsRUFBZ0M7QUFDOUIsTUFBSTtBQUNGLFVBQU1DLE1BQU0sR0FBRyxNQUFNQyx3REFBSSxDQUFDUCxPQUFELEVBQVVLLE1BQU0sQ0FBQ0csT0FBakIsQ0FBekI7QUFDQSxVQUFNQyx1REFBRyxDQUFDO0FBQ1JDLFVBQUksRUFBRUMsNkRBREU7QUFFUlYsVUFBSSxFQUFFSyxNQUFNLENBQUNMO0FBRkwsS0FBRCxDQUFULENBRkUsQ0FNRjtBQUNBO0FBQ0E7QUFDQTtBQUNELEdBVkQsQ0FVRSxPQUFPVyxHQUFQLEVBQVk7QUFDWkMsV0FBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDQSxVQUFNSCx1REFBRyxDQUFDO0FBQ1JDLFVBQUksRUFBRUssMERBREU7QUFFUkQsV0FBSyxFQUFFRixHQUFHLENBQUNJLFFBQUosQ0FBYWY7QUFGWixLQUFELENBQVQ7QUFJRDtBQUNGLEMsQ0FFRDtBQUNBO0FBQ0E7OztBQUVBLFVBQVVnQixnQkFBVixHQUE2QjtBQUMzQixNQUFJO0FBQ0YsVUFBTVgsTUFBTSxHQUFHLE1BQU1DLHdEQUFJLENBQUMsTUFDeEJMLGdEQUFBLENBQVUsNENBQVYsQ0FEdUIsQ0FBekI7QUFJQSxVQUFNTyx1REFBRyxDQUFDO0FBQ1JDLFVBQUksRUFBRVEsOERBREU7QUFFUmpCLFVBQUksRUFBRUssTUFBTSxDQUFDTDtBQUZMLEtBQUQsQ0FBVDtBQUlELEdBVEQsQ0FTRSxPQUFPVyxHQUFQLEVBQVk7QUFDWkMsV0FBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDQSxVQUFNSCx1REFBRyxDQUFDO0FBQ1JDLFVBQUksRUFBRVMsMkRBREU7QUFFUkwsV0FBSyxFQUFFRixHQUFHLENBQUNJO0FBRkgsS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFFYyxVQUFVSSxTQUFWLEdBQXNCO0FBQ25DLFFBQU1DLDhEQUFVLENBQUNDLDZEQUFELEVBQW9CbEIsYUFBcEIsQ0FBaEI7QUFDQSxRQUFNaUIsOERBQVUsQ0FBQ0UsOERBQUQsRUFBcUJOLGdCQUFyQixDQUFoQjtBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjgwNTM3ZWZmNGQxNDEzZTdiN2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgcHV0LCBjYWxsLCB0YWtlTGF0ZXN0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFERF9UV0VFVF9SRVFVRVNULFxyXG4gIEFERF9UV0VFVF9TVUNDRVNTLFxyXG4gIEFERF9UV0VFVF9GQUlMLFxyXG4gIExPQURfVFdFRVRfUkVRVUVTVCxcclxuICBMT0FEX1RXRUVUX1NVQ0NFU1MsXHJcbiAgTE9BRF9UV0VFVF9GQUlMLFxyXG59IGZyb20gXCIuLi9yZWR1eC90d2VldHMyXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0KGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiLCB7XHJcbiAgICB0ZXh0OiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogaGFuZGxlYWRkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0LCBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfVFdFRVRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICAgIC8vIHlpZWxkIHB1dCh7XHJcbiAgICAvLyAgIHR5cGU6IEFERF9UV0VFVF9UT19NRSxcclxuICAgIC8vICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXHJcbiAgICAvLyB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9UV0VFVF9GQUlMLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGxvYWRUd2VldHMoZGF0YSkge1xyXG4vLyAgIHJldHVybiBheGlvcy5nZXQoYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c2ApO1xyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiogaGFuZGxlbG9hZFR3ZWV0cygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCgoKSA9PlxyXG4gICAgICBheGlvcy5nZXQoXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIilcclxuICAgICk7XHJcblxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9UV0VFVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9UV0VFVF9GQUlMLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdHdlZXRTYWdhKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1RXRUVUX1JFUVVFU1QsIGhhbmRsZWFkZFBvc3QpO1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9UV0VFVF9SRVFVRVNULCBoYW5kbGVsb2FkVHdlZXRzKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9