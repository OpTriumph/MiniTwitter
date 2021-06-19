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
    text: data.text
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
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(() => axios__WEBPACK_IMPORTED_MODULE_1___default().get("http:localhost:3065/post/"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdHdlZXRzMi5qcyJdLCJuYW1lcyI6WyJhZGRQb3N0IiwiZGF0YSIsImF4aW9zIiwidGV4dCIsImhhbmRsZWFkZFBvc3QiLCJhY3Rpb24iLCJyZXN1bHQiLCJjYWxsIiwicGF5bG9hZCIsInB1dCIsInR5cGUiLCJBRERfVFdFRVRfU1VDQ0VTUyIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIkFERF9UV0VFVF9GQUlMIiwicmVzcG9uc2UiLCJoYW5kbGVsb2FkVHdlZXRzIiwiTE9BRF9UV0VFVF9TVUNDRVNTIiwiTE9BRF9UV0VFVF9GQUlMIiwidHdlZXRTYWdhIiwidGFrZUxhdGVzdCIsIkFERF9UV0VFVF9SRVFVRVNUIiwiTE9BRF9UV0VFVF9SRVFVRVNUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBU0EsU0FBU0EsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUI7QUFDckIsU0FBT0MsaURBQUEsQ0FBVyw0Q0FBWCxFQUF5RDtBQUM5REMsUUFBSSxFQUFFRixJQUFJLENBQUNFO0FBRG1ELEdBQXpELENBQVA7QUFHRDs7QUFFRCxVQUFVQyxhQUFWLENBQXdCQyxNQUF4QixFQUFnQztBQUM5QixNQUFJO0FBQ0YsVUFBTUMsTUFBTSxHQUFHLE1BQU1DLHdEQUFJLENBQUNQLE9BQUQsRUFBVUssTUFBTSxDQUFDRyxPQUFqQixDQUF6QjtBQUNBLFVBQU1DLHVEQUFHLENBQUM7QUFDUkMsVUFBSSxFQUFFQyw2REFERTtBQUVSVixVQUFJLEVBQUVLLE1BQU0sQ0FBQ0w7QUFGTCxLQUFELENBQVQsQ0FGRSxDQU1GO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0FWRCxDQVVFLE9BQU9XLEdBQVAsRUFBWTtBQUNaQyxXQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUNBLFVBQU1ILHVEQUFHLENBQUM7QUFDUkMsVUFBSSxFQUFFSywwREFERTtBQUVSRCxXQUFLLEVBQUVGLEdBQUcsQ0FBQ0ksUUFBSixDQUFhZjtBQUZaLEtBQUQsQ0FBVDtBQUlEO0FBQ0YsQyxDQUVEO0FBQ0E7QUFDQTs7O0FBRUEsVUFBVWdCLGdCQUFWLEdBQTZCO0FBQzNCLE1BQUk7QUFDRixVQUFNWCxNQUFNLEdBQUcsTUFBTUMsd0RBQUksQ0FBQyxNQUFNTCxnREFBQSxDQUFVLDJCQUFWLENBQVAsQ0FBekI7QUFFQSxVQUFNTyx1REFBRyxDQUFDO0FBQ1JDLFVBQUksRUFBRVEsOERBREU7QUFFUmpCLFVBQUksRUFBRUssTUFBTSxDQUFDTDtBQUZMLEtBQUQsQ0FBVDtBQUlELEdBUEQsQ0FPRSxPQUFPVyxHQUFQLEVBQVk7QUFDWkMsV0FBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDQSxVQUFNSCx1REFBRyxDQUFDO0FBQ1JDLFVBQUksRUFBRVMsMkRBREU7QUFFUkwsV0FBSyxFQUFFRixHQUFHLENBQUNJO0FBRkgsS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFFYyxVQUFVSSxTQUFWLEdBQXNCO0FBQ25DLFFBQU1DLDhEQUFVLENBQUNDLDZEQUFELEVBQW9CbEIsYUFBcEIsQ0FBaEI7QUFDQSxRQUFNaUIsOERBQVUsQ0FBQ0UsOERBQUQsRUFBcUJOLGdCQUFyQixDQUFoQjtBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjc3ZDk0YTg4YThjYTNlZWY2NjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgcHV0LCBjYWxsLCB0YWtlTGF0ZXN0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFERF9UV0VFVF9SRVFVRVNULFxyXG4gIEFERF9UV0VFVF9TVUNDRVNTLFxyXG4gIEFERF9UV0VFVF9GQUlMLFxyXG4gIExPQURfVFdFRVRfUkVRVUVTVCxcclxuICBMT0FEX1RXRUVUX1NVQ0NFU1MsXHJcbiAgTE9BRF9UV0VFVF9GQUlMLFxyXG59IGZyb20gXCIuLi9yZWR1eC90d2VldHMyXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0KGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiLCB7XHJcbiAgICB0ZXh0OiBkYXRhLnRleHQsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBoYW5kbGVhZGRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3QsIGFjdGlvbi5wYXlsb2FkKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9UV0VFVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgLy8geWllbGQgcHV0KHtcclxuICAgIC8vICAgdHlwZTogQUREX1RXRUVUX1RPX01FLFxyXG4gICAgLy8gICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgIC8vIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1RXRUVUX0ZBSUwsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gbG9hZFR3ZWV0cyhkYXRhKSB7XHJcbi8vICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzYCk7XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uKiBoYW5kbGVsb2FkVHdlZXRzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKCgpID0+IGF4aW9zLmdldChcImh0dHA6bG9jYWxob3N0OjMwNjUvcG9zdC9cIikpO1xyXG5cclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVFdFRVRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVFdFRVRfRkFJTCxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHR3ZWV0U2FnYSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9UV0VFVF9SRVFVRVNULCBoYW5kbGVhZGRQb3N0KTtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVFdFRVRfUkVRVUVTVCwgaGFuZGxlbG9hZFR3ZWV0cyk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==