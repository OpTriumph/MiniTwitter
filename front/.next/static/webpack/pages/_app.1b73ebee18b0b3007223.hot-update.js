self["webpackHotUpdate_N_E"]("pages/_app",{

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
      state.tweets = state.tweets.concat(action.payload);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvdHdlZXRzMi5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJBZGRUd2VldEFkZGluZyIsIkFkZFR3ZWV0RG9uZSIsIkFkZFR3ZWV0RXJyb3IiLCJ0d2VldHMiLCJMb2FkVHdlZXRMb2FkaW5nIiwiTG9hZFR3ZWV0RG9uZSIsIkxvYWRUd2VldEVycm9yIiwiQUREX1RXRUVUX1JFUVVFU1QiLCJBRERfVFdFRVRfU1VDQ0VTUyIsIkFERF9UV0VFVF9GQUlMIiwiTE9BRF9UV0VFVF9SRVFVRVNUIiwiTE9BRF9UV0VFVF9TVUNDRVNTIiwiTE9BRF9UV0VFVF9GQUlMIiwiYWRkdHdlZXQiLCJkYXRhIiwidHlwZSIsInR3ZWV0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidW5zaGlmdCIsImVycm9yIiwiY29uY2F0IiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsWUFBWSxHQUFHO0FBQzFCQyxnQkFBYyxFQUFFLEtBRFU7QUFFMUJDLGNBQVksRUFBRSxLQUZZO0FBRzFCQyxlQUFhLEVBQUUsSUFIVztBQUkxQkMsUUFBTSxFQUFFLEVBSmtCO0FBSzFCQyxrQkFBZ0IsRUFBRSxLQUxRO0FBTTFCQyxlQUFhLEVBQUUsS0FOVztBQU8xQkMsZ0JBQWMsRUFBRTtBQVBVLENBQXJCO0FBVUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsb0JBQTFCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGlCQUF2QjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFFQSxNQUFNQyxRQUFRLEdBQUlDLElBQUQsS0FBVztBQUNqQ0MsTUFBSSxFQUFFUixpQkFEMkI7QUFFakNPO0FBRmlDLENBQVgsQ0FBakI7O0FBS1AsTUFBTUUsWUFBWSxHQUFHLENBQUNDLEtBQUssR0FBR2xCLFlBQVQsRUFBdUJtQixNQUF2QixLQUFrQztBQUNyRCxVQUFRQSxNQUFNLENBQUNILElBQWY7QUFDRSxTQUFLUixpQkFBTDtBQUNFVSxXQUFLLENBQUNqQixjQUFOLEdBQXVCLElBQXZCO0FBQ0FpQixXQUFLLENBQUNoQixZQUFOLEdBQXFCLEtBQXJCO0FBQ0FnQixXQUFLLENBQUNmLGFBQU4sR0FBc0IsSUFBdEI7QUFDQTs7QUFDRixTQUFLTSxpQkFBTDtBQUNFUyxXQUFLLENBQUNqQixjQUFOLEdBQXVCLEtBQXZCO0FBQ0FpQixXQUFLLENBQUNoQixZQUFOLEdBQXFCLElBQXJCO0FBQ0FnQixXQUFLLENBQUNkLE1BQU4sQ0FBYWdCLE9BQWIsQ0FBcUJELE1BQU0sQ0FBQ0osSUFBNUI7QUFDQTs7QUFDRixTQUFLTCxjQUFMO0FBQ0VRLFdBQUssQ0FBQ2pCLGNBQU4sR0FBdUIsS0FBdkI7QUFDQWlCLFdBQUssQ0FBQ2YsYUFBTixHQUFzQmdCLE1BQU0sQ0FBQ0UsS0FBN0I7QUFDQTs7QUFDRixTQUFLVixrQkFBTDtBQUNFTyxXQUFLLENBQUNiLGdCQUFOLEdBQXlCLElBQXpCO0FBQ0FhLFdBQUssQ0FBQ1osYUFBTixHQUFzQixLQUF0QjtBQUNBWSxXQUFLLENBQUNYLGNBQU4sR0FBdUIsSUFBdkI7O0FBQ0YsU0FBS0ssa0JBQUw7QUFDRU0sV0FBSyxDQUFDYixnQkFBTixHQUF5QixLQUF6QjtBQUNBYSxXQUFLLENBQUNaLGFBQU4sR0FBc0IsSUFBdEI7QUFDQVksV0FBSyxDQUFDWCxjQUFOLEdBQXVCLElBQXZCO0FBQ0FXLFdBQUssQ0FBQ2QsTUFBTixHQUFlYyxLQUFLLENBQUNkLE1BQU4sQ0FBYWtCLE1BQWIsQ0FBb0JILE1BQU0sQ0FBQ0ksT0FBM0IsQ0FBZjs7QUFFRixTQUFLVixlQUFMO0FBQ0VLLFdBQUssQ0FBQ2IsZ0JBQU4sR0FBeUIsS0FBekI7QUFDQWEsV0FBSyxDQUFDWCxjQUFOLEdBQXVCWSxNQUFNLENBQUNFLEtBQTlCOztBQUNGO0FBQ0U7QUE3Qko7O0FBK0JBLFNBQU9ILEtBQVA7QUFDRCxDQWpDRDs7QUFtQ0EsK0RBQWVELFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xYjczZWJlZTE4YjBiMzAwNzIyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBBZGRUd2VldEFkZGluZzogZmFsc2UsXHJcbiAgQWRkVHdlZXREb25lOiBmYWxzZSxcclxuICBBZGRUd2VldEVycm9yOiBudWxsLFxyXG4gIHR3ZWV0czogW10sXHJcbiAgTG9hZFR3ZWV0TG9hZGluZzogZmFsc2UsXHJcbiAgTG9hZFR3ZWV0RG9uZTogZmFsc2UsXHJcbiAgTG9hZFR3ZWV0RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1RXRUVUX1JFUVVFU1QgPSBcIkFERF9UV0VFVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfVFdFRVRfU1VDQ0VTUyA9IFwiQUREX1RXRUVUX1NVQ0NFU1MgXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfVFdFRVRfRkFJTCA9IFwiQUREX1RXRUVUX0ZBSUwgXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1RXRUVUX1JFUVVFU1QgPSBcIkxPQURfVFdFRVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9UV0VFVF9TVUNDRVNTID0gXCJMT0FEX1RXRUVUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfVFdFRVRfRkFJTCA9IFwiTE9BRF9UV0VFVF9GQUlMXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkdHdlZXQgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfVFdFRVRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IHR3ZWV0UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBRERfVFdFRVRfUkVRVUVTVDpcclxuICAgICAgc3RhdGUuQWRkVHdlZXRBZGRpbmcgPSB0cnVlO1xyXG4gICAgICBzdGF0ZS5BZGRUd2VldERvbmUgPSBmYWxzZTtcclxuICAgICAgc3RhdGUuQWRkVHdlZXRFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfVFdFRVRfU1VDQ0VTUzpcclxuICAgICAgc3RhdGUuQWRkVHdlZXRBZGRpbmcgPSBmYWxzZTtcclxuICAgICAgc3RhdGUuQWRkVHdlZXREb25lID0gdHJ1ZTtcclxuICAgICAgc3RhdGUudHdlZXRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1RXRUVUX0ZBSUw6XHJcbiAgICAgIHN0YXRlLkFkZFR3ZWV0QWRkaW5nID0gZmFsc2U7XHJcbiAgICAgIHN0YXRlLkFkZFR3ZWV0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1RXRUVUX1JFUVVFU1Q6XHJcbiAgICAgIHN0YXRlLkxvYWRUd2VldExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBzdGF0ZS5Mb2FkVHdlZXREb25lID0gZmFsc2U7XHJcbiAgICAgIHN0YXRlLkxvYWRUd2VldEVycm9yID0gbnVsbDtcclxuICAgIGNhc2UgTE9BRF9UV0VFVF9TVUNDRVNTOlxyXG4gICAgICBzdGF0ZS5Mb2FkVHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHN0YXRlLkxvYWRUd2VldERvbmUgPSB0cnVlO1xyXG4gICAgICBzdGF0ZS5Mb2FkVHdlZXRFcnJvciA9IG51bGw7XHJcbiAgICAgIHN0YXRlLnR3ZWV0cyA9IHN0YXRlLnR3ZWV0cy5jb25jYXQoYWN0aW9uLnBheWxvYWQpO1xyXG5cclxuICAgIGNhc2UgTE9BRF9UV0VFVF9GQUlMOlxyXG4gICAgICBzdGF0ZS5Mb2FkVHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHN0YXRlLkxvYWRUd2VldEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiBzdGF0ZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHR3ZWV0UmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==