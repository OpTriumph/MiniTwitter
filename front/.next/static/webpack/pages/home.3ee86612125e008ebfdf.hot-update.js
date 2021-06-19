self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./component/TwitDialog.js":
/*!*********************************!*\
  !*** ./component/TwitDialog.js ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import ClearIcon from "@material-ui/icons/Clear";
// import React from "react";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import Grid from "@material-ui/core/Grid";
// import { useDispatch, useSelector } from "react-redux";
// import { useState, useEffect } from "react";
// import tweetReducer from "../redux/tweets2";
// import { addtweet } from "../redux/tweets2";
// export default function TwitDialog({ open, handleClose }) {
//   const [text, setText] = useState("");
//   const dispatch = useDispatch();
//   const AddTweetError = useSelector(
//     (state) => state.tweetReducer.AddTweetError
//   );
//   const AddTweetAdding = useSelector(
//     (state) => state.tweetReducer.AddTweetAdding
//   );
//   const AddTweetDone = useSelector((state) => state.tweetReducer.AddTweetDone);
//   useEffect(() => {
//     if (AddTweetError) {
//       alert(AddTweetError.data);
//     }
//     if (AddTweetDone) {
//       setText("");
//     }
//   }, [AddTweetDone, AddTweetError]);
//   const handleChange = (event) => {
//     setText(event.target.value);
//   };
//   const handleTweet = (event) => {
//     if (event.type !== "click") {
//       return;
//     }
//     if (text === "") {
//       return;
//     }
//     dispatch(addtweet({ text }));
//     handleClose();
//     setText("");
//   };
//   // dispatch(signUpAction({ email, password, nickname }));
//   return (
//     <Dialog
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="new-twit-dialog"
//       fullWidth
//     >
//       <DialogTitle id="close">
//         <IconButton color="primary" aria-label="close" onClick={handleClose}>
//           <ClearIcon />
//         </IconButton>
//       </DialogTitle>
//       <DialogContent>
//         <Grid container spacing={2}>
//           <Grid item>
//             <Avatar alt="username" aria-label="profile" />
//           </Grid>
//           <Grid item xs>
//             <TextField
//               id="write-new-twit"
//               autoFocus
//               multiline
//               rows={9}
//               value={text}
//               onChange={handleChange}
//               placeholder="무슨일이 일어나고 있나요?"
//               fullWidth
//             />
//           </Grid>
//         </Grid>
//       </DialogContent>
//       <DialogActions>
//         <Button
//           onClick={handleClose}
//           color="primary"
//           variant="contained"
//           size="large"
//           onClick={handleTweet}
//           loading={AddTweetAdding}
//         >
//           트윗
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// }

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


/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _component_Twit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/Twit.js */ "./component/Twit.js");
/* harmony import */ var _component_InfoBox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/InfoBox.js */ "./component/InfoBox.js");
/* harmony import */ var _component_TwitDialog_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/TwitDialog.js */ "./component/TwitDialog.js");
/* harmony import */ var _component_TwitDialog_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_component_TwitDialog_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_TwitMenu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/TwitMenu.js */ "./component/TwitMenu.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_tweets2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/tweets2.js */ "./redux/tweets2.js");
/* harmony import */ var _redux_user_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/user.js */ "./redux/user.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "H:\\Master\\MiniTwitter\\front\\pages\\home.js",
    _s = $RefreshSig$();











function Home() {
  _s();

  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const myInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.userReducer.logInError);
  const tweets = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.tweetReducer.tweets);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // dispatch({
    //   type: LOAD_INFO_REQUEST,
    // });
    dispatch({
      type: _redux_tweets2_js__WEBPACK_IMPORTED_MODULE_7__.LOAD_TWEET_REQUEST
    });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
    maxWidth: "lg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, {
      container: true,
      spacing: 2,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_TwitMenu_js__WEBPACK_IMPORTED_MODULE_5__.default, {
        handleClickOpen: handleClickOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Twit_js__WEBPACK_IMPORTED_MODULE_2__.default, {
        tweets: tweets
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_InfoBox_js__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_component_TwitDialog_js__WEBPACK_IMPORTED_MODULE_4___default()), {
      handleClose: handleClose,
      open: open
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

_s(Home, "Y9Y6A8Z6vfuKOmwBfvYrAUfRuRg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1R3aXREaWFsb2cuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsIm9wZW4iLCJzZXRPcGVuIiwiUmVhY3QiLCJteUluZm8iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlclJlZHVjZXIiLCJsb2dJbkVycm9yIiwidHdlZXRzIiwidHdlZXRSZWR1Y2VyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInR5cGUiLCJMT0FEX1RXRUVUX1JFUVVFU1QiLCJoYW5kbGVDbGlja09wZW4iLCJoYW5kbGVDbG9zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLFFBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxPQUFQLElBQWtCQyxxREFBQSxDQUFlLEtBQWYsQ0FBeEI7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLHdEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxXQUFOLENBQWtCQyxVQUE5QixDQUExQjtBQUNBLFFBQU1DLE1BQU0sR0FBR0osd0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNJLFlBQU4sQ0FBbUJELE1BQS9CLENBQTFCO0FBRUEsUUFBTUUsUUFBUSxHQUFHQyx3REFBVyxFQUE1QjtBQUVBQyxrREFBUyxDQUFDLE1BQU07QUFDZDtBQUNBO0FBQ0E7QUFDQUYsWUFBUSxDQUFDO0FBQ1BHLFVBQUksRUFBRUMsaUVBQWtCQTtBQURqQixLQUFELENBQVI7QUFHRCxHQVBRLEVBT04sRUFQTSxDQUFUOztBQVNBLFFBQU1DLGVBQWUsR0FBRyxNQUFNO0FBQzVCZCxXQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxRQUFNZSxXQUFXLEdBQUcsTUFBTTtBQUN4QmYsV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNELEdBRkQ7O0FBR0Esc0JBQ0UsOERBQUMsZ0VBQUQ7QUFBVyxZQUFRLEVBQUMsSUFBcEI7QUFBQSw0QkFDRSw4REFBQyw0REFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixhQUFPLEVBQUUsQ0FBekI7QUFBQSw4QkFDRSw4REFBQywyREFBRDtBQUFVLHVCQUFlLEVBQUVjO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFLDhEQUFDLHVEQUFEO0FBQVUsY0FBTSxFQUFFUDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFRRSw4REFBQyxpRUFBRDtBQUFZLGlCQUFXLEVBQUVRLFdBQXpCO0FBQXNDLFVBQUksRUFBRWhCO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOztHQW5DdUJELEk7VUFFUEssb0QsRUFDQUEsb0QsRUFFRU8sb0Q7OztLQUxLWixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUuM2VlODY2MTIxMjVlMDA4ZWJmZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBBdmF0YXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiO1xyXG4vLyBpbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG4vLyBpbXBvcnQgQ2xlYXJJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xlYXJcIjtcclxuLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuLy8gaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbi8vIGltcG9ydCBEaWFsb2cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiO1xyXG4vLyBpbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiO1xyXG4vLyBpbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiO1xyXG4vLyBpbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCI7XHJcbi8vIGltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcblxyXG4vLyBpbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuLy8gaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgdHdlZXRSZWR1Y2VyIGZyb20gXCIuLi9yZWR1eC90d2VldHMyXCI7XHJcbi8vIGltcG9ydCB7IGFkZHR3ZWV0IH0gZnJvbSBcIi4uL3JlZHV4L3R3ZWV0czJcIjtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFR3aXREaWFsb2coeyBvcGVuLCBoYW5kbGVDbG9zZSB9KSB7XHJcbi8vICAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbi8vICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4vLyAgIGNvbnN0IEFkZFR3ZWV0RXJyb3IgPSB1c2VTZWxlY3RvcihcclxuLy8gICAgIChzdGF0ZSkgPT4gc3RhdGUudHdlZXRSZWR1Y2VyLkFkZFR3ZWV0RXJyb3JcclxuLy8gICApO1xyXG4vLyAgIGNvbnN0IEFkZFR3ZWV0QWRkaW5nID0gdXNlU2VsZWN0b3IoXHJcbi8vICAgICAoc3RhdGUpID0+IHN0YXRlLnR3ZWV0UmVkdWNlci5BZGRUd2VldEFkZGluZ1xyXG4vLyAgICk7XHJcblxyXG4vLyAgIGNvbnN0IEFkZFR3ZWV0RG9uZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHdlZXRSZWR1Y2VyLkFkZFR3ZWV0RG9uZSk7XHJcblxyXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICBpZiAoQWRkVHdlZXRFcnJvcikge1xyXG4vLyAgICAgICBhbGVydChBZGRUd2VldEVycm9yLmRhdGEpO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgaWYgKEFkZFR3ZWV0RG9uZSkge1xyXG4vLyAgICAgICBzZXRUZXh0KFwiXCIpO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0sIFtBZGRUd2VldERvbmUsIEFkZFR3ZWV0RXJyb3JdKTtcclxuXHJcbi8vICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbi8vICAgICBzZXRUZXh0KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbi8vICAgfTtcclxuLy8gICBjb25zdCBoYW5kbGVUd2VldCA9IChldmVudCkgPT4ge1xyXG4vLyAgICAgaWYgKGV2ZW50LnR5cGUgIT09IFwiY2xpY2tcIikge1xyXG4vLyAgICAgICByZXR1cm47XHJcbi8vICAgICB9XHJcbi8vICAgICBpZiAodGV4dCA9PT0gXCJcIikge1xyXG4vLyAgICAgICByZXR1cm47XHJcbi8vICAgICB9XHJcbi8vICAgICBkaXNwYXRjaChhZGR0d2VldCh7IHRleHQgfSkpO1xyXG4vLyAgICAgaGFuZGxlQ2xvc2UoKTtcclxuLy8gICAgIHNldFRleHQoXCJcIik7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgLy8gZGlzcGF0Y2goc2lnblVwQWN0aW9uKHsgZW1haWwsIHBhc3N3b3JkLCBuaWNrbmFtZSB9KSk7XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8RGlhbG9nXHJcbi8vICAgICAgIG9wZW49e29wZW59XHJcbi8vICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4vLyAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuZXctdHdpdC1kaWFsb2dcIlxyXG4vLyAgICAgICBmdWxsV2lkdGhcclxuLy8gICAgID5cclxuLy8gICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiY2xvc2VcIj5cclxuLy8gICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBhcmlhLWxhYmVsPVwiY2xvc2VcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XHJcbi8vICAgICAgICAgICA8Q2xlYXJJY29uIC8+XHJcbi8vICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4vLyAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG5cclxuLy8gICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbi8vICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4vLyAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuLy8gICAgICAgICAgICAgPEF2YXRhciBhbHQ9XCJ1c2VybmFtZVwiIGFyaWEtbGFiZWw9XCJwcm9maWxlXCIgLz5cclxuLy8gICAgICAgICAgIDwvR3JpZD5cclxuXHJcbi8vICAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxyXG4vLyAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbi8vICAgICAgICAgICAgICAgaWQ9XCJ3cml0ZS1uZXctdHdpdFwiXHJcbi8vICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbi8vICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbi8vICAgICAgICAgICAgICAgcm93cz17OX1cclxuLy8gICAgICAgICAgICAgICB2YWx1ZT17dGV4dH1cclxuLy8gICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi66y07Iqo7J287J20IOydvOyWtOuCmOqzoCDsnojrgpjsmpQ/XCJcclxuLy8gICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuLy8gICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgIDwvR3JpZD5cclxuLy8gICAgICAgICA8L0dyaWQ+XHJcbi8vICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuXHJcbi8vICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4vLyAgICAgICAgIDxCdXR0b25cclxuLy8gICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxyXG4vLyAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuLy8gICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4vLyAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuLy8gICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVR3ZWV0fVxyXG4vLyAgICAgICAgICAgbG9hZGluZz17QWRkVHdlZXRBZGRpbmd9XHJcbi8vICAgICAgICAgPlxyXG4vLyAgICAgICAgICAg7Yq47JyXXHJcbi8vICAgICAgICAgPC9CdXR0b24+XHJcbi8vICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuLy8gICAgIDwvRGlhbG9nPlxyXG4vLyAgICk7XHJcbi8vIH1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIjtcclxuaW1wb3J0IFR3aXRMaW5lIGZyb20gXCIuLi9jb21wb25lbnQvVHdpdC5qc1wiO1xyXG5pbXBvcnQgSW5mb0JveCBmcm9tIFwiLi4vY29tcG9uZW50L0luZm9Cb3guanNcIjtcclxuaW1wb3J0IFR3aXREaWFsb2cgZnJvbSBcIi4uL2NvbXBvbmVudC9Ud2l0RGlhbG9nLmpzXCI7XHJcbmltcG9ydCBUd2l0TWVudSBmcm9tIFwiLi4vY29tcG9uZW50L1R3aXRNZW51LmpzXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IExPQURfVFdFRVRfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1eC90d2VldHMyLmpzXCI7XHJcbmltcG9ydCB7IExPQURfSU5GT19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHV4L3VzZXIuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG15SW5mbyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlclJlZHVjZXIubG9nSW5FcnJvcik7XHJcbiAgY29uc3QgdHdlZXRzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50d2VldFJlZHVjZXIudHdlZXRzKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gZGlzcGF0Y2goe1xyXG4gICAgLy8gICB0eXBlOiBMT0FEX0lORk9fUkVRVUVTVCxcclxuICAgIC8vIH0pO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX1RXRUVUX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgIDxUd2l0TWVudSBoYW5kbGVDbGlja09wZW49e2hhbmRsZUNsaWNrT3Blbn0gLz5cclxuXHJcbiAgICAgICAgPFR3aXRMaW5lIHR3ZWV0cz17dHdlZXRzfSAvPlxyXG4gICAgICAgIDxJbmZvQm94IC8+XHJcbiAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgIDxUd2l0RGlhbG9nIGhhbmRsZUNsb3NlPXtoYW5kbGVDbG9zZX0gb3Blbj17b3Blbn0gLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==