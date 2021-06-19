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
      state.tweets.push(action.payload);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvdHdlZXRzMi5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJBZGRUd2VldEFkZGluZyIsIkFkZFR3ZWV0RG9uZSIsIkFkZFR3ZWV0RXJyb3IiLCJ0d2VldHMiLCJMb2FkVHdlZXRMb2FkaW5nIiwiTG9hZFR3ZWV0RG9uZSIsIkxvYWRUd2VldEVycm9yIiwiQUREX1RXRUVUX1JFUVVFU1QiLCJBRERfVFdFRVRfU1VDQ0VTUyIsIkFERF9UV0VFVF9GQUlMIiwiTE9BRF9UV0VFVF9SRVFVRVNUIiwiTE9BRF9UV0VFVF9TVUNDRVNTIiwiTE9BRF9UV0VFVF9GQUlMIiwiYWRkdHdlZXQiLCJkYXRhIiwidHlwZSIsInR3ZWV0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidW5zaGlmdCIsImVycm9yIiwicHVzaCIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLFlBQVksR0FBRztBQUMxQkMsZ0JBQWMsRUFBRSxLQURVO0FBRTFCQyxjQUFZLEVBQUUsS0FGWTtBQUcxQkMsZUFBYSxFQUFFLElBSFc7QUFJMUJDLFFBQU0sRUFBRSxFQUprQjtBQUsxQkMsa0JBQWdCLEVBQUUsS0FMUTtBQU0xQkMsZUFBYSxFQUFFLEtBTlc7QUFPMUJDLGdCQUFjLEVBQUU7QUFQVSxDQUFyQjtBQVVBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG9CQUExQjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxpQkFBdkI7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTUMsUUFBUSxHQUFJQyxJQUFELEtBQVc7QUFDakNDLE1BQUksRUFBRVIsaUJBRDJCO0FBRWpDTztBQUZpQyxDQUFYLENBQWpCOztBQUtQLE1BQU1FLFlBQVksR0FBRyxDQUFDQyxLQUFLLEdBQUdsQixZQUFULEVBQXVCbUIsTUFBdkIsS0FBa0M7QUFDckQsVUFBUUEsTUFBTSxDQUFDSCxJQUFmO0FBQ0UsU0FBS1IsaUJBQUw7QUFDRVUsV0FBSyxDQUFDakIsY0FBTixHQUF1QixJQUF2QjtBQUNBaUIsV0FBSyxDQUFDaEIsWUFBTixHQUFxQixLQUFyQjtBQUNBZ0IsV0FBSyxDQUFDZixhQUFOLEdBQXNCLElBQXRCO0FBQ0E7O0FBQ0YsU0FBS00saUJBQUw7QUFDRVMsV0FBSyxDQUFDakIsY0FBTixHQUF1QixLQUF2QjtBQUNBaUIsV0FBSyxDQUFDaEIsWUFBTixHQUFxQixJQUFyQjtBQUNBZ0IsV0FBSyxDQUFDZCxNQUFOLENBQWFnQixPQUFiLENBQXFCRCxNQUFNLENBQUNKLElBQTVCO0FBQ0E7O0FBQ0YsU0FBS0wsY0FBTDtBQUNFUSxXQUFLLENBQUNqQixjQUFOLEdBQXVCLEtBQXZCO0FBQ0FpQixXQUFLLENBQUNmLGFBQU4sR0FBc0JnQixNQUFNLENBQUNFLEtBQTdCO0FBQ0E7O0FBQ0YsU0FBS1Ysa0JBQUw7QUFDRU8sV0FBSyxDQUFDYixnQkFBTixHQUF5QixJQUF6QjtBQUNBYSxXQUFLLENBQUNaLGFBQU4sR0FBc0IsS0FBdEI7QUFDQVksV0FBSyxDQUFDWCxjQUFOLEdBQXVCLElBQXZCOztBQUNGLFNBQUtLLGtCQUFMO0FBQ0VNLFdBQUssQ0FBQ2IsZ0JBQU4sR0FBeUIsS0FBekI7QUFDQWEsV0FBSyxDQUFDWixhQUFOLEdBQXNCLElBQXRCO0FBQ0FZLFdBQUssQ0FBQ1gsY0FBTixHQUF1QixJQUF2QjtBQUNBVyxXQUFLLENBQUNkLE1BQU4sQ0FBYWtCLElBQWIsQ0FBa0JILE1BQU0sQ0FBQ0ksT0FBekI7O0FBRUYsU0FBS1YsZUFBTDtBQUNFSyxXQUFLLENBQUNiLGdCQUFOLEdBQXlCLEtBQXpCO0FBQ0FhLFdBQUssQ0FBQ1gsY0FBTixHQUF1QlksTUFBTSxDQUFDRSxLQUE5Qjs7QUFDRjtBQUNFO0FBN0JKOztBQStCQSxTQUFPSCxLQUFQO0FBQ0QsQ0FqQ0Q7O0FBbUNBLCtEQUFlRCxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzczZDljMWVmNjMzOWM2ZmZmNmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgQWRkVHdlZXRBZGRpbmc6IGZhbHNlLFxyXG4gIEFkZFR3ZWV0RG9uZTogZmFsc2UsXHJcbiAgQWRkVHdlZXRFcnJvcjogbnVsbCxcclxuICB0d2VldHM6IFtdLFxyXG4gIExvYWRUd2VldExvYWRpbmc6IGZhbHNlLFxyXG4gIExvYWRUd2VldERvbmU6IGZhbHNlLFxyXG4gIExvYWRUd2VldEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9UV0VFVF9SRVFVRVNUID0gXCJBRERfVFdFRVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX1RXRUVUX1NVQ0NFU1MgPSBcIkFERF9UV0VFVF9TVUNDRVNTIFwiO1xyXG5leHBvcnQgY29uc3QgQUREX1RXRUVUX0ZBSUwgPSBcIkFERF9UV0VFVF9GQUlMIFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9UV0VFVF9SRVFVRVNUID0gXCJMT0FEX1RXRUVUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfVFdFRVRfU1VDQ0VTUyA9IFwiTE9BRF9UV0VFVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1RXRUVUX0ZBSUwgPSBcIkxPQURfVFdFRVRfRkFJTFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZHR3ZWV0ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX1RXRUVUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCB0d2VldFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQUREX1RXRUVUX1JFUVVFU1Q6XHJcbiAgICAgIHN0YXRlLkFkZFR3ZWV0QWRkaW5nID0gdHJ1ZTtcclxuICAgICAgc3RhdGUuQWRkVHdlZXREb25lID0gZmFsc2U7XHJcbiAgICAgIHN0YXRlLkFkZFR3ZWV0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1RXRUVUX1NVQ0NFU1M6XHJcbiAgICAgIHN0YXRlLkFkZFR3ZWV0QWRkaW5nID0gZmFsc2U7XHJcbiAgICAgIHN0YXRlLkFkZFR3ZWV0RG9uZSA9IHRydWU7XHJcbiAgICAgIHN0YXRlLnR3ZWV0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9UV0VFVF9GQUlMOlxyXG4gICAgICBzdGF0ZS5BZGRUd2VldEFkZGluZyA9IGZhbHNlO1xyXG4gICAgICBzdGF0ZS5BZGRUd2VldEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9UV0VFVF9SRVFVRVNUOlxyXG4gICAgICBzdGF0ZS5Mb2FkVHdlZXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgc3RhdGUuTG9hZFR3ZWV0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBzdGF0ZS5Mb2FkVHdlZXRFcnJvciA9IG51bGw7XHJcbiAgICBjYXNlIExPQURfVFdFRVRfU1VDQ0VTUzpcclxuICAgICAgc3RhdGUuTG9hZFR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBzdGF0ZS5Mb2FkVHdlZXREb25lID0gdHJ1ZTtcclxuICAgICAgc3RhdGUuTG9hZFR3ZWV0RXJyb3IgPSBudWxsO1xyXG4gICAgICBzdGF0ZS50d2VldHMucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcblxyXG4gICAgY2FzZSBMT0FEX1RXRUVUX0ZBSUw6XHJcbiAgICAgIHN0YXRlLkxvYWRUd2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgc3RhdGUuTG9hZFR3ZWV0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdHdlZXRSZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9