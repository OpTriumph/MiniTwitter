self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./component/Twit.js":
/*!***************************!*\
  !*** ./component/Twit.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TwitLine; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Repeat__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Repeat */ "./node_modules/@material-ui/icons/Repeat.js");
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/FavoriteBorder */ "./node_modules/@material-ui/icons/FavoriteBorder.js");
/* harmony import */ var _material_ui_icons_ChatBubbleOutline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/ChatBubbleOutline */ "./node_modules/@material-ui/icons/ChatBubbleOutline.js");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Clear */ "./node_modules/@material-ui/icons/Clear.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _redux_tweets2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/tweets2 */ "./redux/tweets2.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "H:\\Master\\MiniTwitter\\front\\component\\Twit.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();



















const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto"
  }
}));

function Twit({
  tweet
}) {
  _s();

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const {
    id,
    title,
    userId,
    likes
  } = tweet || {}; // const liked = tweets.likers.find((v) => v.id === id);

  const classes = useStyles();

  const handledelete = () => {
    if (!id) {
      return alert("need to login first");
    }

    return dispatch(tweetSlice.actions.deleteTweet(id));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_6__.default, {
      avatar: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__.default, {
        size: "small",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__.default, {
          alt: "username",
          "aria-label": "profile"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }, this),
      action: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__.default, {
        "aria-label": "delete",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, this),
      title: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
        variant: "h6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
          children: "\uC784\uC2DC \uC720\uC8001"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, this),
      subheader: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
          variant: "body2",
          component: "span",
          children: ["@", id, " \xB7 May 25"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, this)
      }, void 0, false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
        variant: "body1",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_12__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__.default, {
        "aria-label": "mention",
        component: "span",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ChatBubbleOutline__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
        component: "span",
        variant: "body2",
        children: "0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__.default, {
        "aria-label": "retweet",
        component: "span",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Repeat__WEBPACK_IMPORTED_MODULE_14__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
        component: "span",
        variant: "body2",
        children: "14"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__.default, {
        "aria-label": "like",
        component: "span",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_15__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
        component: "span",
        variant: "body2",
        children: "33"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

_s(Twit, "wEJgZQ2jDkMa1kY7WfR7H6lD2Qo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch, useStyles];
});

_c = Twit;
function TwitLine({
  tweets
}) {
  _s2();

  if (tweets.length < 1) return null; // console.log(tweets.shift());

  console.log("test");
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__.default, {
    item: true,
    xs: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_17__.default, {
      variant: "outlined",
      className: classes.paper,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
        children: "\uCD5C\uC2E0 \uD2B8\uC717"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, this), tweets // .slice(0)
    .shift() // .reverse()
    .map(tweet => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Twit, {
      tweet: tweet // likeTweet={likeTweet}
      // deleteTweet={deleteTweet}

    }, tweet.id, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_17__.default, {
      variant: "outlined",
      className: classes.paper,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Twit, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Twit, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 5
  }, this);
}

_s2(TwitLine, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c2 = TwitLine;

var _c, _c2;

$RefreshReg$(_c, "Twit");
$RefreshReg$(_c2, "TwitLine");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1R3aXQuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFwZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsIm1hcmdpbiIsIlR3aXQiLCJ0d2VldCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpZCIsInRpdGxlIiwidXNlcklkIiwibGlrZXMiLCJjbGFzc2VzIiwiaGFuZGxlZGVsZXRlIiwiYWxlcnQiLCJ0d2VldFNsaWNlIiwiYWN0aW9ucyIsImRlbGV0ZVR3ZWV0IiwiVHdpdExpbmUiLCJ0d2VldHMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwic2hpZnQiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFFQyxLQUFELEtBQVk7QUFDdkNDLE9BQUssRUFBRTtBQUNMQyxXQUFPLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsQ0FESjtBQUVMQyxVQUFNLEVBQUU7QUFGSDtBQURnQyxDQUFaLENBQUQsQ0FBNUI7O0FBT0EsU0FBU0MsSUFBVCxDQUFjO0FBQUVDO0FBQUYsQ0FBZCxFQUF5QjtBQUFBOztBQUN2QixRQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCO0FBQ0EsUUFBTTtBQUFFQyxNQUFGO0FBQU1DLFNBQU47QUFBYUMsVUFBYjtBQUFxQkM7QUFBckIsTUFBK0JOLEtBQUssSUFBSSxFQUE5QyxDQUZ1QixDQUd2Qjs7QUFDQSxRQUFNTyxPQUFPLEdBQUdmLFNBQVMsRUFBekI7O0FBQ0EsUUFBTWdCLFlBQVksR0FBRyxNQUFNO0FBQ3pCLFFBQUksQ0FBQ0wsRUFBTCxFQUFT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QUFDQyxHQUFSLENBQVksTUFBWjtBQUNBLFFBQU1WLE9BQU8sR0FBR2YsU0FBUyxFQUF6QjtBQUVBLHNCQUNFLDhEQUFDLDREQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxNQUFiO0FBQUEsNEJBQ0UsOERBQUMsNkRBQUQ7QUFBTyxhQUFPLEVBQUMsVUFBZjtBQUEwQixlQUFTLEVBQUVlLE9BQU8sQ0FBQ1osS0FBN0M7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQU1HbUIsTUFBTSxDQUNMO0FBREssS0FFSkksS0FGRixHQUdDO0FBSEQsS0FJRUMsR0FKRixDQUlPbkIsS0FBRCxpQkFDSCw4REFBQyxJQUFEO0FBRUUsV0FBSyxFQUFFQSxLQUZULENBR0U7QUFDQTs7QUFKRixPQUNPQSxLQUFLLENBQUNHLEVBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxILENBTkgsZUFrQkUsOERBQUMsNkRBQUQ7QUFBTyxhQUFPLEVBQUMsVUFBZjtBQUEwQixlQUFTLEVBQUVJLE9BQU8sQ0FBQ1osS0FBN0M7QUFBQSw4QkFDRSw4REFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlCRDs7SUEvQnVCa0IsUTtVQUlOckIsUzs7O01BSk1xQixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUuNDkyZTAwMjQ1NzZiMDM2MzA1ZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdmF0YXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBSZXBlYXRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVwZWF0XCI7XHJcbmltcG9ydCBGYXZvcml0ZUJvcmRlckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZUJvcmRlclwiO1xyXG5pbXBvcnQgQ2hhdEJ1YmJsZU91dGxpbmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdEJ1YmJsZU91dGxpbmVcIjtcclxuaW1wb3J0IENsZWFySWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NsZWFyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFR5cGhvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCI7XHJcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyXCI7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIjtcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uc1wiO1xyXG5pbXBvcnQgdHdlZXRSZWR1Y2VyIGZyb20gXCIuLi9yZWR1eC90d2VldHMyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcGFwZXI6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIFR3aXQoeyB0d2VldCB9KSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgaWQsIHRpdGxlLCB1c2VySWQsIGxpa2VzIH0gPSB0d2VldCB8fCB7fTtcclxuICAvLyBjb25zdCBsaWtlZCA9IHR3ZWV0cy5saWtlcnMuZmluZCgodikgPT4gdi5pZCA9PT0gaWQpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBoYW5kbGVkZWxldGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHJldHVybiBhbGVydChcIm5lZWQgdG8gbG9naW4gZmlyc3RcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlzcGF0Y2godHdlZXRTbGljZS5hY3Rpb25zLmRlbGV0ZVR3ZWV0KGlkKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkPlxyXG4gICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgIGF2YXRhcj17XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgPEF2YXRhciBhbHQ9XCJ1c2VybmFtZVwiIGFyaWEtbGFiZWw9XCJwcm9maWxlXCIgLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICB9XHJcbiAgICAgICAgYWN0aW9uPXtcclxuICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJkZWxldGVcIj5cclxuICAgICAgICAgICAgPENsZWFySWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIH1cclxuICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICA8VHlwaG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgIDxiPuyehOyLnCDsnKDsoIAxPC9iPlxyXG4gICAgICAgICAgPC9UeXBob2dyYXBoeT5cclxuICAgICAgICB9XHJcbiAgICAgICAgc3ViaGVhZGVyPXtcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUeXBob2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb21wb25lbnQ9XCJzcGFuXCI+XHJcbiAgICAgICAgICAgICAgQHtpZH0gwrcgTWF5IDI1XHJcbiAgICAgICAgICAgIDwvVHlwaG9ncmFwaHk+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICA8VHlwaG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+e3RpdGxlfTwvVHlwaG9ncmFwaHk+XHJcbiAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcblxyXG4gICAgICA8Q2FyZEFjdGlvbnM+XHJcbiAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIm1lbnRpb25cIiBjb21wb25lbnQ9XCJzcGFuXCI+XHJcbiAgICAgICAgICA8Q2hhdEJ1YmJsZU91dGxpbmVJY29uIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInNwYW5cIiB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgIDBcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJyZXR3ZWV0XCIgY29tcG9uZW50PVwic3BhblwiPlxyXG4gICAgICAgICAgPFJlcGVhdEljb24gLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwic3BhblwiIHZhcmlhbnQ9XCJib2R5MlwiPlxyXG4gICAgICAgICAgMTRcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJsaWtlXCIgY29tcG9uZW50PVwic3BhblwiPlxyXG4gICAgICAgICAgPEZhdm9yaXRlQm9yZGVySWNvbiAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJzcGFuXCIgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAzM1xyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUd2l0TGluZSh7IHR3ZWV0cyB9KSB7XHJcbiAgaWYgKHR3ZWV0cy5sZW5ndGggPCAxKSByZXR1cm4gbnVsbDtcclxuICAvLyBjb25zb2xlLmxvZyh0d2VldHMuc2hpZnQoKSk7XHJcbiAgY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgIDxQYXBlciB2YXJpYW50PVwib3V0bGluZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgIDxiPuy1nOyLoCDtirjsnJc8L2I+XHJcbiAgICAgIDwvUGFwZXI+XHJcblxyXG4gICAgICB7LyogPFR3aXQgLz4gKi99XHJcbiAgICAgIHt0d2VldHNcclxuICAgICAgICAvLyAuc2xpY2UoMClcclxuICAgICAgICAuc2hpZnQoKVxyXG4gICAgICAgIC8vIC5yZXZlcnNlKClcclxuICAgICAgICAubWFwKCh0d2VldCkgPT4gKFxyXG4gICAgICAgICAgPFR3aXRcclxuICAgICAgICAgICAga2V5PXt0d2VldC5pZH1cclxuICAgICAgICAgICAgdHdlZXQ9e3R3ZWV0fVxyXG4gICAgICAgICAgICAvLyBsaWtlVHdlZXQ9e2xpa2VUd2VldH1cclxuICAgICAgICAgICAgLy8gZGVsZXRlVHdlZXQ9e2RlbGV0ZVR3ZWV0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPFBhcGVyIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgPFR3aXQgLz5cclxuICAgICAgICA8VHdpdCAvPlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==