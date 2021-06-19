(function() {
var exports = {};
exports.id = "pages/home";
exports.ids = ["pages/home"];
exports.modules = {

/***/ "./component/InfoBox.js":
/*!******************************!*\
  !*** ./component/InfoBox.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InfoBox; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");

var _jsxFileName = "H:\\Master\\MiniTwitter\\front\\component\\InfoBox.js";






function InfoBox() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__.default, {
    item: true,
    xs: 2,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__.default, {
        image: "./weather.jpg",
        title: "Weather-image",
        style: {
          height: 120
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {
          variant: "h6",
          align: "center",
          gutterBottom: true,
          children: "2021.05.22"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {
          variant: "h6",
          align: "center",
          gutterBottom: true,
          children: "13:04 \uB9D1\uC74C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./component/Twit.js":
/*!***************************!*\
  !*** ./component/Twit.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TwitLine; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Repeat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Repeat */ "@material-ui/icons/Repeat");
/* harmony import */ var _material_ui_icons_Repeat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Repeat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/FavoriteBorder */ "@material-ui/icons/FavoriteBorder");
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_ChatBubbleOutline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ChatBubbleOutline */ "@material-ui/icons/ChatBubbleOutline");
/* harmony import */ var _material_ui_icons_ChatBubbleOutline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChatBubbleOutline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Clear */ "@material-ui/icons/Clear");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _redux_tweets2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/tweets2 */ "./redux/tweets2.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "H:\\Master\\MiniTwitter\\front\\component\\Twit.js";


















const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.makeStyles)(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto"
  }
}));

function Twit({
  tweet
}) {
  const {
    id,
    title,
    userId,
    likes
  } = tweet || {};
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();

  const handledelete = () => {
    if (!id) {
      return alert("need to login first");
    }

    return dispatch(tweetSlice.actions.deleteTweet(id));
  };

  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_10__.default, {
      avatar: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__.default, {
        size: "small",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_12__.default, {
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
      action: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__.default, {
        "aria-label": "delete",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, this),
      title: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__.default, {
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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__.default, {
          variant: "body2",
          component: "span",
          children: ["@", userId, " \xB7 May 25"]
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_14__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__.default, {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_15__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__.default, {
        "aria-label": "mention",
        component: "span",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_ChatBubbleOutline__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__.default, {
        component: "span",
        variant: "body2",
        children: "0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__.default, {
        "aria-label": "retweet",
        component: "span",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Repeat__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__.default, {
        component: "span",
        variant: "body2",
        children: "14"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__.default, {
        "aria-label": "like",
        component: "span",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__.default, {
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

function TwitLine({
  tweets
}) {
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

/***/ }),

/***/ "./component/TwitDialog.js":
/*!*********************************!*\
  !*** ./component/TwitDialog.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TwitDialog; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Clear */ "@material-ui/icons/Clear");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_tweets2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/tweets2 */ "./redux/tweets2.js");

var _jsxFileName = "H:\\Master\\MiniTwitter\\front\\component\\TwitDialog.js";















function TwitDialog({
  open,
  handleClose
}) {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const AddTweetError = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.tweetReducer.AddTweetError);
  const AddTweetAdding = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.tweetReducer.AddTweetAdding);
  const AddTweetDone = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.tweetReducer.AddTweetDone);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (AddTweetError) {
      alert(AddTweetError.data);
    }

    if (AddTweetDone) {
      setText("");
    }
  }, [AddTweetDone, AddTweetError]);

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleTweet = event => {
    if (event.type !== "click") {
      return;
    }

    if (text === "") {
      return;
    }

    dispatch((0,_redux_tweets2__WEBPACK_IMPORTED_MODULE_4__.addtweet)({
      text
    }));
    handleClose();
    setText("");
  }; // dispatch(signUpAction({ email, password, nickname }));


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__.default, {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "new-twit-dialog",
    fullWidth: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__.default, {
      id: "close",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__.default, {
        color: "primary",
        "aria-label": "close",
        onClick: handleClose,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
        container: true,
        spacing: 2,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
          item: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__.default, {
            alt: "username",
            "aria-label": "profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
          item: true,
          xs: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__.default, {
            id: "write-new-twit",
            autoFocus: true,
            multiline: true,
            rows: 9,
            value: text,
            onChange: handleChange,
            placeholder: "\uBB34\uC2A8\uC77C\uC774 \uC77C\uC5B4\uB098\uACE0 \uC788\uB098\uC694?",
            fullWidth: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_12__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__.default, {
        onClick: handleClose,
        color: "primary",
        variant: "contained",
        size: "large",
        onClick: handleTweet,
        loading: AddTweetAdding,
        children: "\uD2B8\uC717"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./component/TwitMenu.js":
/*!*******************************!*\
  !*** ./component/TwitMenu.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TwitMenu; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Home */ "@material-ui/icons/Home");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Person */ "@material-ui/icons/Person");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "@material-ui/icons/Twitter");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "H:\\Master\\MiniTwitter\\front\\component\\TwitMenu.js";










const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.makeStyles)(theme => ({
  button: {
    padding: theme.spacing(2),
    borderRadius: 30,
    fontSize: 20
  }
}));
function TwitMenu({
  handleClickOpen
}) {
  const classes = useStyles();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__.default, {
    item: true,
    container: true,
    xs: 3,
    direction: "column",
    spacing: 2,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
      href: "home",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__.default, {
        color: "primary",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_3___default()), {
          fontSize: "large"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
      href: "home",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__.default, {
        size: "large",
        startIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 22
        }, this),
        className: classes.button,
        color: router.asPath === "/home" ? "primary" : "default",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
          children: "\uD648"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
      href: "profile",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__.default, {
        size: "large",
        startIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 22
        }, this),
        className: classes.button,
        color: router.asPath === "/profile" ? "primary" : "default",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
          children: "\uD504\uB85C\uD544"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__.default, {
      variant: "contained",
      size: "large",
      color: "primary",
      startIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 20
      }, this),
      className: classes.button,
      onClick: handleClickOpen,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
        children: "\uD2B8\uC717"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _component_Twit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/Twit.js */ "./component/Twit.js");
/* harmony import */ var _component_InfoBox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/InfoBox.js */ "./component/InfoBox.js");
/* harmony import */ var _component_TwitDialog_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/TwitDialog.js */ "./component/TwitDialog.js");
/* harmony import */ var _component_TwitMenu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/TwitMenu.js */ "./component/TwitMenu.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_tweets2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/tweets2.js */ "./redux/tweets2.js");
/* harmony import */ var _redux_user_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/user.js */ "./redux/user.js");

var _jsxFileName = "H:\\Master\\MiniTwitter\\front\\pages\\home.js";










function Home() {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_TwitDialog_js__WEBPACK_IMPORTED_MODULE_4__.default, {
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

/***/ }),

/***/ "@material-ui/icons/ChatBubbleOutline":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/ChatBubbleOutline" ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/ChatBubbleOutline");;

/***/ }),

/***/ "@material-ui/icons/Clear":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Clear" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Clear");;

/***/ }),

/***/ "@material-ui/icons/FavoriteBorder":
/*!****************************************************!*\
  !*** external "@material-ui/icons/FavoriteBorder" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/FavoriteBorder");;

/***/ }),

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Home");;

/***/ }),

/***/ "@material-ui/icons/Person":
/*!********************************************!*\
  !*** external "@material-ui/icons/Person" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Person");;

/***/ }),

/***/ "@material-ui/icons/Repeat":
/*!********************************************!*\
  !*** external "@material-ui/icons/Repeat" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Repeat");;

/***/ }),

/***/ "@material-ui/icons/Twitter":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Twitter" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Twitter");;

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

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("clsx");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_material-ui_core_esm_styles_index_js","vendors-node_modules_material-ui_core_esm_Button_index_js-node_modules_material-ui_core_esm_C-32df40","vendors-node_modules_material-ui_core_esm_Avatar_index_js-node_modules_material-ui_core_esm_C-346856","redux_user_js","redux_tweets2_js"], function() { return __webpack_exec__("./pages/home.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pdHdpdHRlci8uL2NvbXBvbmVudC9JbmZvQm94LmpzIiwid2VicGFjazovL21pbml0d2l0dGVyLy4vY29tcG9uZW50L1R3aXQuanMiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvLi9jb21wb25lbnQvVHdpdERpYWxvZy5qcyIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci8uL2NvbXBvbmVudC9Ud2l0TWVudS5qcyIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci8uL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdEJ1YmJsZU91dGxpbmVcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DbGVhclwiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlQm9yZGVyXCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZVwiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1BlcnNvblwiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlcGVhdFwiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXJcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9zeXN0ZW1cIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS91dGlsc1wiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwiY2xzeFwiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly9taW5pdHdpdHRlci9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiIiwid2VicGFjazovL21pbml0d2l0dGVyL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbWluaXR3aXR0ZXIvaWdub3JlZHxIOlxcTWFzdGVyXFxNaW5pVHdpdHRlclxcZnJvbnRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJJbmZvQm94IiwiaGVpZ2h0IiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFwZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsIm1hcmdpbiIsIlR3aXQiLCJ0d2VldCIsImlkIiwidGl0bGUiLCJ1c2VySWQiLCJsaWtlcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJoYW5kbGVkZWxldGUiLCJhbGVydCIsInR3ZWV0U2xpY2UiLCJhY3Rpb25zIiwiZGVsZXRlVHdlZXQiLCJjbGFzc2VzIiwiVHdpdExpbmUiLCJ0d2VldHMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwic2hpZnQiLCJtYXAiLCJUd2l0RGlhbG9nIiwib3BlbiIsImhhbmRsZUNsb3NlIiwidGV4dCIsInNldFRleHQiLCJ1c2VTdGF0ZSIsIkFkZFR3ZWV0RXJyb3IiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidHdlZXRSZWR1Y2VyIiwiQWRkVHdlZXRBZGRpbmciLCJBZGRUd2VldERvbmUiLCJ1c2VFZmZlY3QiLCJkYXRhIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVR3ZWV0IiwidHlwZSIsImFkZHR3ZWV0IiwiYnV0dG9uIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJUd2l0TWVudSIsImhhbmRsZUNsaWNrT3BlbiIsInJvdXRlciIsInVzZVJvdXRlciIsImFzUGF0aCIsIkhvbWUiLCJzZXRPcGVuIiwiUmVhY3QiLCJteUluZm8iLCJ1c2VyUmVkdWNlciIsImxvZ0luRXJyb3IiLCJMT0FEX1RXRUVUX1JFUVVFU1QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULEdBQW1CO0FBQ2hDLHNCQUNFLDhEQUFDLDJEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLENBQWY7QUFBQSwyQkFDRSw4REFBQywyREFBRDtBQUFBLDhCQUNFLDhEQUFDLGdFQUFEO0FBQ0UsYUFBSyxFQUFDLGVBRFI7QUFFRSxhQUFLLEVBQUMsZUFGUjtBQUdFLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFFO0FBQVY7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFPRSw4REFBQyxrRUFBRDtBQUFBLGdDQUNFLDhEQUFD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RVEsV0FBekI7QUFBc0MsVUFBSSxFQUFFRDtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRCxDOzs7Ozs7Ozs7OztBQ2hERCxrRTs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIjtcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiO1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZm9Cb3goKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICA8Q2FyZD5cclxuICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICBpbWFnZT1cIi4vd2VhdGhlci5qcGdcIlxyXG4gICAgICAgICAgdGl0bGU9XCJXZWF0aGVyLWltYWdlXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMTIwIH19XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgYWxpZ249XCJjZW50ZXJcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgIDIwMjEuMDUuMjJcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGFsaWduPVwiY2VudGVyXCIgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAxMzowNCDrp5HsnYxcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgQXZhdGFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgUmVwZWF0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlcGVhdFwiO1xyXG5pbXBvcnQgRmF2b3JpdGVCb3JkZXJJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVCb3JkZXJcIjtcclxuaW1wb3J0IENoYXRCdWJibGVPdXRsaW5lSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRCdWJibGVPdXRsaW5lXCI7XHJcbmltcG9ydCBDbGVhckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbGVhclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUeXBob2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiO1xyXG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEhlYWRlclwiO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCI7XHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnNcIjtcclxuaW1wb3J0IHR3ZWV0UmVkdWNlciBmcm9tIFwiLi4vcmVkdXgvdHdlZXRzMlwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHBhcGVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgbWFyZ2luOiBcImF1dG9cIixcclxuICB9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBUd2l0KHsgdHdlZXQgfSkge1xyXG4gIGNvbnN0IHsgaWQsIHRpdGxlLCB1c2VySWQsIGxpa2VzIH0gPSB0d2VldCB8fCB7fTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZWRlbGV0ZSA9ICgpID0+IHtcclxuICAgIGlmICghaWQpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KFwibmVlZCB0byBsb2dpbiBmaXJzdFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXNwYXRjaCh0d2VldFNsaWNlLmFjdGlvbnMuZGVsZXRlVHdlZXQoaWQpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkPlxyXG4gICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgIGF2YXRhcj17XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgPEF2YXRhciBhbHQ9XCJ1c2VybmFtZVwiIGFyaWEtbGFiZWw9XCJwcm9maWxlXCIgLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICB9XHJcbiAgICAgICAgYWN0aW9uPXtcclxuICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJkZWxldGVcIj5cclxuICAgICAgICAgICAgPENsZWFySWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIH1cclxuICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICA8VHlwaG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgIDxiPuyehOyLnCDsnKDsoIAxPC9iPlxyXG4gICAgICAgICAgPC9UeXBob2dyYXBoeT5cclxuICAgICAgICB9XHJcbiAgICAgICAgc3ViaGVhZGVyPXtcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUeXBob2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb21wb25lbnQ9XCJzcGFuXCI+XHJcbiAgICAgICAgICAgICAgQHt1c2VySWR9IMK3IE1heSAyNVxyXG4gICAgICAgICAgICA8L1R5cGhvZ3JhcGh5PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPFR5cGhvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPnt0aXRsZX08L1R5cGhvZ3JhcGh5PlxyXG4gICAgICA8L0NhcmRDb250ZW50PlxyXG5cclxuICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJtZW50aW9uXCIgY29tcG9uZW50PVwic3BhblwiPlxyXG4gICAgICAgICAgPENoYXRCdWJibGVPdXRsaW5lSWNvbiAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJzcGFuXCIgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAwXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwicmV0d2VldFwiIGNvbXBvbmVudD1cInNwYW5cIj5cclxuICAgICAgICAgIDxSZXBlYXRJY29uIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInNwYW5cIiB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgIDE0XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwibGlrZVwiIGNvbXBvbmVudD1cInNwYW5cIj5cclxuICAgICAgICAgIDxGYXZvcml0ZUJvcmRlckljb24gLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwic3BhblwiIHZhcmlhbnQ9XCJib2R5MlwiPlxyXG4gICAgICAgICAgMzNcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHdpdExpbmUoeyB0d2VldHMgfSkge1xyXG4gIGlmICh0d2VldHMubGVuZ3RoIDwgMSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc29sZS5sb2codHdlZXRzLnNoaWZ0KCkpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICB7XHJcbiAgICAvLyB0d2VldHMuc2hpZnQoKS5tYXAoKHBvc3QpID0+IGNvbnNvbGUubG9nKHBvc3QpKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgIDxQYXBlciB2YXJpYW50PVwib3V0bGluZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgIDxiPuy1nOyLoCDtirjsnJc8L2I+XHJcbiAgICAgIDwvUGFwZXI+XHJcblxyXG4gICAgICB7LyogPFR3aXQgLz4gKi99XHJcbiAgICAgIHt0d2VldHNcclxuICAgICAgICAvLyAuc2xpY2UoMClcclxuICAgICAgICAvLyAucmV2ZXJzZSgpXHJcbiAgICAgICAgLm1hcCgodHdlZXQpID0+IChcclxuICAgICAgICAgIDxUd2l0XHJcbiAgICAgICAgICAgIGtleT17dHdlZXQuaWR9XHJcbiAgICAgICAgICAgIHR3ZWV0PXt0d2VldH1cclxuICAgICAgICAgICAgLy8gbGlrZVR3ZWV0PXtsaWtlVHdlZXR9XHJcbiAgICAgICAgICAgIC8vIGRlbGV0ZVR3ZWV0PXtkZWxldGVUd2VldH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDxQYXBlciB2YXJpYW50PVwib3V0bGluZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgIDxUd2l0IC8+XHJcbiAgICAgICAgPFR3aXQgLz5cclxuICAgICAgPC9QYXBlcj5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBBdmF0YXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgQ2xlYXJJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xlYXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiO1xyXG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdHdlZXRSZWR1Y2VyIGZyb20gXCIuLi9yZWR1eC90d2VldHMyXCI7XHJcbmltcG9ydCB7IGFkZHR3ZWV0IH0gZnJvbSBcIi4uL3JlZHV4L3R3ZWV0czJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFR3aXREaWFsb2coeyBvcGVuLCBoYW5kbGVDbG9zZSB9KSB7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IEFkZFR3ZWV0RXJyb3IgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUudHdlZXRSZWR1Y2VyLkFkZFR3ZWV0RXJyb3JcclxuICApO1xyXG4gIGNvbnN0IEFkZFR3ZWV0QWRkaW5nID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLnR3ZWV0UmVkdWNlci5BZGRUd2VldEFkZGluZ1xyXG4gICk7XHJcblxyXG4gIGNvbnN0IEFkZFR3ZWV0RG9uZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHdlZXRSZWR1Y2VyLkFkZFR3ZWV0RG9uZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoQWRkVHdlZXRFcnJvcikge1xyXG4gICAgICBhbGVydChBZGRUd2VldEVycm9yLmRhdGEpO1xyXG4gICAgfVxyXG4gICAgaWYgKEFkZFR3ZWV0RG9uZSkge1xyXG4gICAgICBzZXRUZXh0KFwiXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtBZGRUd2VldERvbmUsIEFkZFR3ZWV0RXJyb3JdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRUZXh0KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVUd2VldCA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LnR5cGUgIT09IFwiY2xpY2tcIikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGV4dCA9PT0gXCJcIikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaChhZGR0d2VldCh7IHRleHQgfSkpO1xyXG4gICAgaGFuZGxlQ2xvc2UoKTtcclxuICAgIHNldFRleHQoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgLy8gZGlzcGF0Y2goc2lnblVwQWN0aW9uKHsgZW1haWwsIHBhc3N3b3JkLCBuaWNrbmFtZSB9KSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RGlhbG9nXHJcbiAgICAgIG9wZW49e29wZW59XHJcbiAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuZXctdHdpdC1kaWFsb2dcIlxyXG4gICAgICBmdWxsV2lkdGhcclxuICAgID5cclxuICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiY2xvc2VcIj5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBhcmlhLWxhYmVsPVwiY2xvc2VcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICA8Q2xlYXJJY29uIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICA8L0RpYWxvZ1RpdGxlPlxyXG5cclxuICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgPEF2YXRhciBhbHQ9XCJ1c2VybmFtZVwiIGFyaWEtbGFiZWw9XCJwcm9maWxlXCIgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9XCJ3cml0ZS1uZXctdHdpdFwiXHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgcm93cz17OX1cclxuICAgICAgICAgICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi66y07Iqo7J287J20IOydvOyWtOuCmOqzoCDsnojrgpjsmpQ/XCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuXHJcbiAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVR3ZWV0fVxyXG4gICAgICAgICAgbG9hZGluZz17QWRkVHdlZXRBZGRpbmd9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg7Yq47JyXXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgIDwvRGlhbG9nPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IEhvbWVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZVwiO1xyXG5pbXBvcnQgUGVyc29uSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1BlcnNvblwiO1xyXG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgYnV0dG9uOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAzMCxcclxuICAgIGZvbnRTaXplOiAyMCxcclxuICB9LFxyXG59KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFR3aXRNZW51KHsgaGFuZGxlQ2xpY2tPcGVuIH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIHhzPXszfSBkaXJlY3Rpb249XCJjb2x1bW5cIiBzcGFjaW5nPXsyfT5cclxuICAgICAgPExpbmsgaHJlZj1cImhvbWVcIj5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgIDxUd2l0dGVySWNvbiBmb250U2l6ZT1cImxhcmdlXCIgLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cImhvbWVcIj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgc3RhcnRJY29uPXs8SG9tZUljb24gLz59XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgY29sb3I9e3JvdXRlci5hc1BhdGggPT09IFwiL2hvbWVcIiA/IFwicHJpbWFyeVwiIDogXCJkZWZhdWx0XCJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGI+7ZmIPC9iPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCJwcm9maWxlXCI+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgIHN0YXJ0SWNvbj17PFBlcnNvbkljb24gLz59XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgY29sb3I9e3JvdXRlci5hc1BhdGggPT09IFwiL3Byb2ZpbGVcIiA/IFwicHJpbWFyeVwiIDogXCJkZWZhdWx0XCJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGI+7ZSE66Gc7ZWEPC9iPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgc3RhcnRJY29uPXs8VHdpdHRlckljb24gLz59XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja09wZW59XHJcbiAgICAgID5cclxuICAgICAgICA8Yj7tirjsnJc8L2I+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIjtcclxuaW1wb3J0IFR3aXRMaW5lIGZyb20gXCIuLi9jb21wb25lbnQvVHdpdC5qc1wiO1xyXG5pbXBvcnQgSW5mb0JveCBmcm9tIFwiLi4vY29tcG9uZW50L0luZm9Cb3guanNcIjtcclxuaW1wb3J0IFR3aXREaWFsb2cgZnJvbSBcIi4uL2NvbXBvbmVudC9Ud2l0RGlhbG9nLmpzXCI7XHJcbmltcG9ydCBUd2l0TWVudSBmcm9tIFwiLi4vY29tcG9uZW50L1R3aXRNZW51LmpzXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IExPQURfVFdFRVRfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1eC90d2VldHMyLmpzXCI7XHJcbmltcG9ydCB7IExPQURfSU5GT19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHV4L3VzZXIuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG15SW5mbyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlclJlZHVjZXIubG9nSW5FcnJvcik7XHJcbiAgY29uc3QgdHdlZXRzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50d2VldFJlZHVjZXIudHdlZXRzKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gZGlzcGF0Y2goe1xyXG4gICAgLy8gICB0eXBlOiBMT0FEX0lORk9fUkVRVUVTVCxcclxuICAgIC8vIH0pO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX1RXRUVUX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgIDxUd2l0TWVudSBoYW5kbGVDbGlja09wZW49e2hhbmRsZUNsaWNrT3Blbn0gLz5cclxuXHJcbiAgICAgICAgPFR3aXRMaW5lIHR3ZWV0cz17dHdlZXRzfSAvPlxyXG4gICAgICAgIDxJbmZvQm94IC8+XHJcbiAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgIDxUd2l0RGlhbG9nIGhhbmRsZUNsb3NlPXtoYW5kbGVDbG9zZX0gb3Blbj17b3Blbn0gLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRCdWJibGVPdXRsaW5lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xlYXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZUJvcmRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9QZXJzb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9SZXBlYXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3lzdGVtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==