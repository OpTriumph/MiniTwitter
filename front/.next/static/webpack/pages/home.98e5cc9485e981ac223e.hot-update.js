self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./redux/tweets2.js":
/*!**************************!*\
  !*** ./redux/tweets2.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "ADD_TWEET_REQUEST": function() { return /* binding */ ADD_TWEET_REQUEST; },
/* harmony export */   "ADD_TWEET_SUCCESS": function() { return /* binding */ ADD_TWEET_SUCCESS; },
/* harmony export */   "ADD_TWEET_FAIL": function() { return /* binding */ ADD_TWEET_FAIL; },
/* harmony export */   "LOAD_TWEET_REQUEST": function() { return /* binding */ LOAD_TWEET_REQUEST; },
/* harmony export */   "LOAD_TWEET_SUCCESS": function() { return /* binding */ LOAD_TWEET_SUCCESS; },
/* harmony export */   "LOAD_TWEET_FAIL": function() { return /* binding */ LOAD_TWEET_FAIL; },
/* harmony export */   "addtweet": function() { return /* binding */ addtweet; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
const initialState = {
  AddTweetAdding: false,
  AddTweetDone: false,
  AddTweetError: null,
  tweets: [],
  LoadTweetLoading: false,
  LoadTweetDone: false,
  LoadTweetError: null
};
const ADD_TWEET_REQUEST = "ADD_TWEET_REQUEST";
const ADD_TWEET_SUCCESS = "ADD_TWEET_SUCCESS ";
const ADD_TWEET_FAIL = "ADD_TWEET_FAIL ";
const LOAD_TWEET_REQUEST = "LOAD_TWEET_REQUEST";
const LOAD_TWEET_SUCCESS = "LOAD_TWEET_SUCCESS";
const LOAD_TWEET_FAIL = "LOAD_TWEET_FAIL";
const addtweet = data => ({
  type: ADD_TWEET_REQUEST,
  data
});

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TWEET_REQUEST:
      state.AddTweetAdding = true;
      state.AddTweetDone = false;
      state.AddTweetError = null;
      break;

    case ADD_TWEET_SUCCESS:
      state.AddTweetAdding = false;
      state.AddTweetDone = true;
      state.tweets.unshift(action.data);
      break;

    case ADD_TWEET_FAIL:
      state.AddTweetAdding = false;
      state.AddTweetError = action.error;
      break;

    case LOAD_TWEET_REQUEST:
      state.LoadTweetLoading = true;
      state.LoadTweetDone = false;
      state.LoadTweetError = null;

    case LOAD_TWEET_SUCCESS:
      state.LoadTweetLoading = false;
      state.LoadTweetDone = true;
      state.LoadTweetError = null;
      state.tweets = state.tweets.concat(action.data);

    case LOAD_TWEET_FAIL:
      state.LoadTweetLoading = false;
      state.LoadTweetError = action.error;

    default:
      break;
  }

  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (tweetReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvdHdlZXRzMi5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJBZGRUd2VldEFkZGluZyIsIkFkZFR3ZWV0RG9uZSIsIkFkZFR3ZWV0RXJyb3IiLCJ0d2VldHMiLCJMb2FkVHdlZXRMb2FkaW5nIiwiTG9hZFR3ZWV0RG9uZSIsIkxvYWRUd2VldEVycm9yIiwiQUREX1RXRUVUX1JFUVVFU1QiLCJBRERfVFdFRVRfU1VDQ0VTUyIsIkFERF9UV0VFVF9GQUlMIiwiTE9BRF9UV0VFVF9SRVFVRVNUIiwiTE9BRF9UV0VFVF9TVUNDRVNTIiwiTE9BRF9UV0VFVF9GQUlMIiwiYWRkdHdlZXQiLCJkYXRhIiwidHlwZSIsInR3ZWV0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidW5zaGlmdCIsImVycm9yIiwiY29uY2F0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxZQUFZLEdBQUc7QUFDMUJDLGdCQUFjLEVBQUUsS0FEVTtBQUUxQkMsY0FBWSxFQUFFLEtBRlk7QUFHMUJDLGVBQWEsRUFBRSxJQUhXO0FBSTFCQyxRQUFNLEVBQUUsRUFKa0I7QUFLMUJDLGtCQUFnQixFQUFFLEtBTFE7QUFNMUJDLGVBQWEsRUFBRSxLQU5XO0FBTzFCQyxnQkFBYyxFQUFFO0FBUFUsQ0FBckI7QUFVQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxvQkFBMUI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsaUJBQXZCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUVBLE1BQU1DLFFBQVEsR0FBSUMsSUFBRCxLQUFXO0FBQ2pDQyxNQUFJLEVBQUVSLGlCQUQyQjtBQUVqQ087QUFGaUMsQ0FBWCxDQUFqQjs7QUFLUCxNQUFNRSxZQUFZLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHbEIsWUFBVCxFQUF1Qm1CLE1BQXZCLEtBQWtDO0FBQ3JELFVBQVFBLE1BQU0sQ0FBQ0gsSUFBZjtBQUNFLFNBQUtSLGlCQUFMO0FBQ0VVLFdBQUssQ0FBQ2pCLGNBQU4sR0FBdUIsSUFBdkI7QUFDQWlCLFdBQUssQ0FBQ2hCLFlBQU4sR0FBcUIsS0FBckI7QUFDQWdCLFdBQUssQ0FBQ2YsYUFBTixHQUFzQixJQUF0QjtBQUNBOztBQUNGLFNBQUtNLGlCQUFMO0FBQ0VTLFdBQUssQ0FBQ2pCLGNBQU4sR0FBdUIsS0FBdkI7QUFDQWlCLFdBQUssQ0FBQ2hCLFlBQU4sR0FBcUIsSUFBckI7QUFDQWdCLFdBQUssQ0FBQ2QsTUFBTixDQUFhZ0IsT0FBYixDQUFxQkQsTUFBTSxDQUFDSixJQUE1QjtBQUNBOztBQUNGLFNBQUtMLGNBQUw7QUFDRVEsV0FBSyxDQUFDakIsY0FBTixHQUF1QixLQUF2QjtBQUNBaUIsV0FBSyxDQUFDZixhQUFOLEdBQXNCZ0IsTUFBTSxDQUFDRSxLQUE3QjtBQUNBOztBQUNGLFNBQUtWLGtCQUFMO0FBQ0VPLFdBQUssQ0FBQ2IsZ0JBQU4sR0FBeUIsSUFBekI7QUFDQWEsV0FBSyxDQUFDWixhQUFOLEdBQXNCLEtBQXRCO0FBQ0FZLFdBQUssQ0FBQ1gsY0FBTixHQUF1QixJQUF2Qjs7QUFDRixTQUFLSyxrQkFBTDtBQUNFTSxXQUFLLENBQUNiLGdCQUFOLEdBQXlCLEtBQXpCO0FBQ0FhLFdBQUssQ0FBQ1osYUFBTixHQUFzQixJQUF0QjtBQUNBWSxXQUFLLENBQUNYLGNBQU4sR0FBdUIsSUFBdkI7QUFDQVcsV0FBSyxDQUFDZCxNQUFOLEdBQWVjLEtBQUssQ0FBQ2QsTUFBTixDQUFha0IsTUFBYixDQUFvQkgsTUFBTSxDQUFDSixJQUEzQixDQUFmOztBQUVGLFNBQUtGLGVBQUw7QUFDRUssV0FBSyxDQUFDYixnQkFBTixHQUF5QixLQUF6QjtBQUNBYSxXQUFLLENBQUNYLGNBQU4sR0FBdUJZLE1BQU0sQ0FBQ0UsS0FBOUI7O0FBQ0Y7QUFDRTtBQTdCSjs7QUErQkEsU0FBT0gsS0FBUDtBQUNELENBakNEOztBQW1DQSwrREFBZUQsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lLjk4ZTVjYzk0ODVlOTgxYWMyMjNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIEFkZFR3ZWV0QWRkaW5nOiBmYWxzZSxcclxuICBBZGRUd2VldERvbmU6IGZhbHNlLFxyXG4gIEFkZFR3ZWV0RXJyb3I6IG51bGwsXHJcbiAgdHdlZXRzOiBbXSxcclxuICBMb2FkVHdlZXRMb2FkaW5nOiBmYWxzZSxcclxuICBMb2FkVHdlZXREb25lOiBmYWxzZSxcclxuICBMb2FkVHdlZXRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfVFdFRVRfUkVRVUVTVCA9IFwiQUREX1RXRUVUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9UV0VFVF9TVUNDRVNTID0gXCJBRERfVFdFRVRfU1VDQ0VTUyBcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9UV0VFVF9GQUlMID0gXCJBRERfVFdFRVRfRkFJTCBcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfVFdFRVRfUkVRVUVTVCA9IFwiTE9BRF9UV0VFVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1RXRUVUX1NVQ0NFU1MgPSBcIkxPQURfVFdFRVRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9UV0VFVF9GQUlMID0gXCJMT0FEX1RXRUVUX0ZBSUxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGR0d2VldCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9UV0VFVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgdHdlZXRSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFERF9UV0VFVF9SRVFVRVNUOlxyXG4gICAgICBzdGF0ZS5BZGRUd2VldEFkZGluZyA9IHRydWU7XHJcbiAgICAgIHN0YXRlLkFkZFR3ZWV0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBzdGF0ZS5BZGRUd2VldEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9UV0VFVF9TVUNDRVNTOlxyXG4gICAgICBzdGF0ZS5BZGRUd2VldEFkZGluZyA9IGZhbHNlO1xyXG4gICAgICBzdGF0ZS5BZGRUd2VldERvbmUgPSB0cnVlO1xyXG4gICAgICBzdGF0ZS50d2VldHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfVFdFRVRfRkFJTDpcclxuICAgICAgc3RhdGUuQWRkVHdlZXRBZGRpbmcgPSBmYWxzZTtcclxuICAgICAgc3RhdGUuQWRkVHdlZXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVFdFRVRfUkVRVUVTVDpcclxuICAgICAgc3RhdGUuTG9hZFR3ZWV0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIHN0YXRlLkxvYWRUd2VldERvbmUgPSBmYWxzZTtcclxuICAgICAgc3RhdGUuTG9hZFR3ZWV0RXJyb3IgPSBudWxsO1xyXG4gICAgY2FzZSBMT0FEX1RXRUVUX1NVQ0NFU1M6XHJcbiAgICAgIHN0YXRlLkxvYWRUd2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgc3RhdGUuTG9hZFR3ZWV0RG9uZSA9IHRydWU7XHJcbiAgICAgIHN0YXRlLkxvYWRUd2VldEVycm9yID0gbnVsbDtcclxuICAgICAgc3RhdGUudHdlZXRzID0gc3RhdGUudHdlZXRzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgY2FzZSBMT0FEX1RXRUVUX0ZBSUw6XHJcbiAgICAgIHN0YXRlLkxvYWRUd2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgc3RhdGUuTG9hZFR3ZWV0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdHdlZXRSZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9