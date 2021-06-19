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

  const {
    id,
    title,
    userId,
    likes
  } = tweet || {};
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  const handledelete = () => {
    if (!id) {
      return alert("need to login first");
    }

    return dispatch(tweetSlice.actions.deleteTweet(id));
  };

  const classes = useStyles();
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
          children: "@TempUser1 \xB7 May 25"
        }, void 0, false, {
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
        children: "\uBB34\uC2A8 \uC77C\uC774 \uC77C\uC5B4\uB098\uACE0 \uC788\uB098\uC694?"
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

  if (tweets.length < 1) return null;
  console.log(tweets.shift());
  const classes = useStyles();
  {// tweets.shift().map((post) => console.log(post));
  }
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
        lineNumber: 105,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, this), tweets // .slice(0)
    // .reverse()
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
    lineNumber: 103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1R3aXQuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFwZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsIm1hcmdpbiIsIlR3aXQiLCJ0d2VldCIsImlkIiwidGl0bGUiLCJ1c2VySWQiLCJsaWtlcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJoYW5kbGVkZWxldGUiLCJhbGVydCIsInR3ZWV0U2xpY2UiLCJhY3Rpb25zIiwiZGVsZXRlVHdlZXQiLCJjbGFzc2VzIiwiVHdpdExpbmUiLCJ0d2VldHMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwic2hpZnQiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFFQyxLQUFELEtBQVk7QUFDdkNDLE9BQUssRUFBRTtBQUNMQyxXQUFPLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsQ0FESjtBQUVMQyxVQUFNLEVBQUU7QUFGSDtBQURnQyxDQUFaLENBQUQsQ0FBNUI7O0FBT0EsU0FBU0MsSUFBVCxDQUFjO0FBQUVDO0FBQUYsQ0FBZCxFQUF5QjtBQUFBOztBQUN2QixRQUFNO0FBQUVDLE1BQUY7QUFBTUMsU0FBTjtBQUFhQyxVQUFiO0FBQXFCQztBQUFyQixNQUErQkosS0FBSyxJQUFJLEVBQTlDO0FBQ0EsUUFBTUssUUFBUSxHQUFHQyx3REFBVyxFQUE1Qjs7QUFFQSxRQUFNQyxZQUFZLEdBQUcsTUFBTTtBQUN6QixRQUFJLENBQUNOLEVBQUwsRUFBUztBQUNQLGFBQU9PLEtBQUssQ0FBQyxxQkFBRCxDQUFaO0FBQ0Q7O0FBQ0QsV0FB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TixPQUFPLEdBQUdwQixTQUFTLEVBQXpCO0FBQ0EsR0FDRTtBQUNEO0FBQ0Qsc0JBQ0UsOERBQUMsNERBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLE1BQWI7QUFBQSw0QkFDRSw4REFBQyw2REFBRDtBQUFPLGFBQU8sRUFBQyxVQUFmO0FBQTBCLGVBQVMsRUFBRW9CLE9BQU8sQ0FBQ2pCLEtBQTdDO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFNR21CLE1BQU0sQ0FDTDtBQUNBO0FBRkssS0FHSkssR0FIRixDQUdPbkIsS0FBRCxpQkFDSCw4REFBQyxJQUFEO0FBRUUsV0FBSyxFQUFFQSxLQUZULENBR0U7QUFDQTs7QUFKRixPQUNPQSxLQUFLLENBQUNDLEVBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpILENBTkgsZUFpQkUsOERBQUMsNkRBQUQ7QUFBTyxhQUFPLEVBQUMsVUFBZjtBQUEwQixlQUFTLEVBQUVXLE9BQU8sQ0FBQ2pCLEtBQTdDO0FBQUEsOEJBQ0UsOERBQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3QkQ7O0lBL0J1QmtCLFE7VUFHTnJCLFM7OztNQUhNcUIsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lLjYxN2IxMjk0YWFjZWNlNzEwMmVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXZhdGFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgUmVwZWF0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlcGVhdFwiO1xyXG5pbXBvcnQgRmF2b3JpdGVCb3JkZXJJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVCb3JkZXJcIjtcclxuaW1wb3J0IENoYXRCdWJibGVPdXRsaW5lSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRCdWJibGVPdXRsaW5lXCI7XHJcbmltcG9ydCBDbGVhckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbGVhclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUeXBob2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiO1xyXG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEhlYWRlclwiO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCI7XHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnNcIjtcclxuaW1wb3J0IHR3ZWV0UmVkdWNlciBmcm9tIFwiLi4vcmVkdXgvdHdlZXRzMlwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHBhcGVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgbWFyZ2luOiBcImF1dG9cIixcclxuICB9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBUd2l0KHsgdHdlZXQgfSkge1xyXG4gIGNvbnN0IHsgaWQsIHRpdGxlLCB1c2VySWQsIGxpa2VzIH0gPSB0d2VldCB8fCB7fTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZWRlbGV0ZSA9ICgpID0+IHtcclxuICAgIGlmICghaWQpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KFwibmVlZCB0byBsb2dpbiBmaXJzdFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXNwYXRjaCh0d2VldFNsaWNlLmFjdGlvbnMuZGVsZXRlVHdlZXQoaWQpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkPlxyXG4gICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgIGF2YXRhcj17XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgPEF2YXRhciBhbHQ9XCJ1c2VybmFtZVwiIGFyaWEtbGFiZWw9XCJwcm9maWxlXCIgLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICB9XHJcbiAgICAgICAgYWN0aW9uPXtcclxuICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJkZWxldGVcIj5cclxuICAgICAgICAgICAgPENsZWFySWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIH1cclxuICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICA8VHlwaG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgIDxiPuyehOyLnCDsnKDsoIAxPC9iPlxyXG4gICAgICAgICAgPC9UeXBob2dyYXBoeT5cclxuICAgICAgICB9XHJcbiAgICAgICAgc3ViaGVhZGVyPXtcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUeXBob2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb21wb25lbnQ9XCJzcGFuXCI+XHJcbiAgICAgICAgICAgICAgQFRlbXBVc2VyMSDCtyBNYXkgMjVcclxuICAgICAgICAgICAgPC9UeXBob2dyYXBoeT5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgIDxUeXBob2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj7rrLTsiqgg7J287J20IOydvOyWtOuCmOqzoCDsnojrgpjsmpQ/PC9UeXBob2dyYXBoeT5cclxuICAgICAgPC9DYXJkQ29udGVudD5cclxuXHJcbiAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwibWVudGlvblwiIGNvbXBvbmVudD1cInNwYW5cIj5cclxuICAgICAgICAgIDxDaGF0QnViYmxlT3V0bGluZUljb24gLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwic3BhblwiIHZhcmlhbnQ9XCJib2R5MlwiPlxyXG4gICAgICAgICAgMFxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInJldHdlZXRcIiBjb21wb25lbnQ9XCJzcGFuXCI+XHJcbiAgICAgICAgICA8UmVwZWF0SWNvbiAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJzcGFuXCIgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAxNFxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cImxpa2VcIiBjb21wb25lbnQ9XCJzcGFuXCI+XHJcbiAgICAgICAgICA8RmF2b3JpdGVCb3JkZXJJY29uIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInNwYW5cIiB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgIDMzXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFR3aXRMaW5lKHsgdHdlZXRzIH0pIHtcclxuICBpZiAodHdlZXRzLmxlbmd0aCA8IDEpIHJldHVybiBudWxsO1xyXG4gIGNvbnNvbGUubG9nKHR3ZWV0cy5zaGlmdCgpKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAge1xyXG4gICAgLy8gdHdlZXRzLnNoaWZ0KCkubWFwKChwb3N0KSA9PiBjb25zb2xlLmxvZyhwb3N0KSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICA8UGFwZXIgdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICA8Yj7stZzsi6Ag7Yq47JyXPC9iPlxyXG4gICAgICA8L1BhcGVyPlxyXG5cclxuICAgICAgey8qIDxUd2l0IC8+ICovfVxyXG4gICAgICB7dHdlZXRzXHJcbiAgICAgICAgLy8gLnNsaWNlKDApXHJcbiAgICAgICAgLy8gLnJldmVyc2UoKVxyXG4gICAgICAgIC5tYXAoKHR3ZWV0KSA9PiAoXHJcbiAgICAgICAgICA8VHdpdFxyXG4gICAgICAgICAgICBrZXk9e3R3ZWV0LmlkfVxyXG4gICAgICAgICAgICB0d2VldD17dHdlZXR9XHJcbiAgICAgICAgICAgIC8vIGxpa2VUd2VldD17bGlrZVR3ZWV0fVxyXG4gICAgICAgICAgICAvLyBkZWxldGVUd2VldD17ZGVsZXRlVHdlZXR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8UGFwZXIgdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICA8VHdpdCAvPlxyXG4gICAgICAgIDxUd2l0IC8+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9