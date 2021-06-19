self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js");







var styles = {
  /* Styles applied to the root element. */
  root: {
    // Improve scrollable dialog support.
    zIndex: -1,
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent'
  },

  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: 'transparent'
  }
};
var Backdrop = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Backdrop(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$invisible = props.invisible,
      invisible = _props$invisible === void 0 ? false : _props$invisible,
      open = props.open,
      transitionDuration = props.transitionDuration,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Fade__WEBPACK_IMPORTED_MODULE_5__.default : _props$TransitionComp,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "classes", "className", "invisible", "open", "transitionDuration", "TransitionComponent"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    in: open,
    timeout: transitionDuration
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className, invisible && classes.invisible),
    "aria-hidden": true,
    ref: ref
  }, children));
});
 true ? Backdrop.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   */
  invisible: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the backdrop is open.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
  })])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiBackdrop'
})(Backdrop));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Backdrop/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Backdrop/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Backdrop__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");






var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'flex-end',
    flex: '0 0 auto'
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var DialogActions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function DialogActions(props, ref) {
  var _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      classes = props.classes,
      className = props.className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["disableSpacing", "classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 true ? DialogActions.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__.default)(styles, {
  name: 'MuiDialogActions'
})(DialogActions));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogActions/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/DialogActions/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _DialogActions__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _DialogActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      flex: '1 1 auto',
      WebkitOverflowScrolling: 'touch',
      // Add iOS momentum scrolling.
      overflowY: 'auto',
      padding: '8px 24px',
      '&:first-child': {
        // dialog without title
        paddingTop: 20
      }
    },

    /* Styles applied to the root element if `dividers={true}`. */
    dividers: {
      padding: '16px 24px',
      borderTop: "1px solid ".concat(theme.palette.divider),
      borderBottom: "1px solid ".concat(theme.palette.divider)
    }
  };
};
var DialogContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function DialogContent(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$dividers = props.dividers,
      dividers = _props$dividers === void 0 ? false : _props$dividers,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className", "dividers"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className, dividers && classes.dividers),
    ref: ref
  }, other));
});
 true ? DialogContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Display the top and bottom dividers.
   */
  dividers: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__.default)(styles, {
  name: 'MuiDialogContent'
})(DialogContent));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogContent/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/DialogContent/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _DialogContent__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _DialogContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");







var styles = {
  /* Styles applied to the root element. */
  root: {
    margin: 0,
    padding: '16px 24px',
    flex: '0 0 auto'
  }
};
var DialogTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function DialogTitle(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "classes", "className", "disableTypography"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className),
    ref: ref
  }, other), disableTypography ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {
    component: "h2",
    variant: "h6"
  }, children));
});
 true ? DialogTitle.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the children won't be wrapped by a typography component.
   * For instance, this can be useful to render an h4 instead of the default h2.
   */
  disableTypography: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiDialogTitle'
})(DialogTitle));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogTitle/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/DialogTitle/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _DialogTitle__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _DialogTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Dialog/Dialog.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/index.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js");
/* harmony import */ var _styles_transitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");













var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      '@media print': {
        // Use !important to override the Modal inline-style.
        position: 'absolute !important'
      }
    },

    /* Styles applied to the container element if `scroll="paper"`. */
    scrollPaper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    /* Styles applied to the container element if `scroll="body"`. */
    scrollBody: {
      overflowY: 'auto',
      overflowX: 'hidden',
      textAlign: 'center',
      '&:after': {
        content: '""',
        display: 'inline-block',
        verticalAlign: 'middle',
        height: '100%',
        width: '0'
      }
    },

    /* Styles applied to the container element. */
    container: {
      height: '100%',
      '@media print': {
        height: 'auto'
      },
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0
    },

    /* Styles applied to the `Paper` component. */
    paper: {
      margin: 32,
      position: 'relative',
      overflowY: 'auto',
      // Fix IE 11 issue, to remove at some point.
      '@media print': {
        overflowY: 'visible',
        boxShadow: 'none'
      }
    },

    /* Styles applied to the `Paper` component if `scroll="paper"`. */
    paperScrollPaper: {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `scroll="body"`. */
    paperScrollBody: {
      display: 'inline-block',
      verticalAlign: 'middle',
      textAlign: 'left' // 'initial' doesn't work on IE 11

    },

    /* Styles applied to the `Paper` component if `maxWidth=false`. */
    paperWidthFalse: {
      maxWidth: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `maxWidth="xs"`. */
    paperWidthXs: {
      maxWidth: Math.max(theme.breakpoints.values.xs, 444),
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="sm"`. */
    paperWidthSm: {
      maxWidth: theme.breakpoints.values.sm,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.down(theme.breakpoints.values.sm + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="md"`. */
    paperWidthMd: {
      maxWidth: theme.breakpoints.values.md,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.down(theme.breakpoints.values.md + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="lg"`. */
    paperWidthLg: {
      maxWidth: theme.breakpoints.values.lg,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.down(theme.breakpoints.values.lg + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="xl"`. */
    paperWidthXl: {
      maxWidth: theme.breakpoints.values.xl,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.down(theme.breakpoints.values.xl + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `fullWidth={true}`. */
    paperFullWidth: {
      width: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `fullScreen={true}`. */
    paperFullScreen: {
      margin: 0,
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      maxHeight: 'none',
      borderRadius: 0,
      '&$paperScrollBody': {
        margin: 0,
        maxWidth: '100%'
      }
    }
  };
};
var defaultTransitionDuration = {
  enter: _styles_transitions__WEBPACK_IMPORTED_MODULE_6__.duration.enteringScreen,
  exit: _styles_transitions__WEBPACK_IMPORTED_MODULE_6__.duration.leavingScreen
};
/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */

var Dialog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function Dialog(props, ref) {
  var BackdropProps = props.BackdropProps,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableBackdro = props.disableBackdropClick,
      disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro,
      _props$disableEscapeK = props.disableEscapeKeyDown,
      disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
      _props$fullScreen = props.fullScreen,
      fullScreen = _props$fullScreen === void 0 ? false : _props$fullScreen,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$maxWidth = props.maxWidth,
      maxWidth = _props$maxWidth === void 0 ? 'sm' : _props$maxWidth,
      onBackdropClick = props.onBackdropClick,
      onClose = props.onClose,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onEscapeKeyDown = props.onEscapeKeyDown,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      open = props.open,
      _props$PaperComponent = props.PaperComponent,
      PaperComponent = _props$PaperComponent === void 0 ? _Paper__WEBPACK_IMPORTED_MODULE_7__.default : _props$PaperComponent,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      _props$scroll = props.scroll,
      scroll = _props$scroll === void 0 ? 'paper' : _props$scroll,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Fade__WEBPACK_IMPORTED_MODULE_8__.default : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? defaultTransitionDuration : _props$transitionDura,
      TransitionProps = props.TransitionProps,
      ariaDescribedby = props['aria-describedby'],
      ariaLabelledby = props['aria-labelledby'],
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["BackdropProps", "children", "classes", "className", "disableBackdropClick", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "onEnter", "onEntered", "onEntering", "onEscapeKeyDown", "onExit", "onExited", "onExiting", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps", "aria-describedby", "aria-labelledby"]);

  var mouseDownTarget = react__WEBPACK_IMPORTED_MODULE_3__.useRef();

  var handleMouseDown = function handleMouseDown(event) {
    mouseDownTarget.current = event.target;
  };

  var handleBackdropClick = function handleBackdropClick(event) {
    // Ignore the events not coming from the "backdrop"
    // We don't want to close the dialog when clicking the dialog content.
    if (event.target !== event.currentTarget) {
      return;
    } // Make sure the event starts and ends on the same DOM element.


    if (event.target !== mouseDownTarget.current) {
      return;
    }

    mouseDownTarget.current = null;

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (!disableBackdropClick && onClose) {
      onClose(event, 'backdropClick');
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Modal__WEBPACK_IMPORTED_MODULE_9__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(classes.root, className),
    BackdropComponent: _Backdrop__WEBPACK_IMPORTED_MODULE_10__.default,
    BackdropProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      transitionDuration: transitionDuration
    }, BackdropProps),
    closeAfterTransition: true,
    disableBackdropClick: disableBackdropClick,
    disableEscapeKeyDown: disableEscapeKeyDown,
    onEscapeKeyDown: onEscapeKeyDown,
    onClose: onClose,
    open: open,
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    appear: true,
    in: open,
    timeout: transitionDuration,
    onEnter: onEnter,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    role: "none presentation"
  }, TransitionProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(classes.container, classes["scroll".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_11__.default)(scroll))]),
    onMouseUp: handleBackdropClick,
    onMouseDown: handleMouseDown
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(PaperComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    elevation: 24,
    role: "dialog",
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledby
  }, PaperProps, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(classes.paper, classes["paperScroll".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_11__.default)(scroll))], classes["paperWidth".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_11__.default)(String(maxWidth)))], PaperProps.className, fullScreen && classes.paperFullScreen, fullWidth && classes.paperFullWidth)
  }), children))));
});
 true ? Dialog.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  'aria-describedby': (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * The id(s) of the element(s) that label the dialog.
   */
  'aria-labelledby': (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * @ignore
   */
  BackdropProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * Dialog children, usually the included sub-components.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   */
  disableBackdropClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   */
  disableEscapeKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the dialog will be full-screen
   */
  fullScreen: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   */
  maxWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['lg', 'md', 'sm', 'xl', 'xs', false]),

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired before the dialog enters.
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the dialog has entered.
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the dialog is entering.
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the escape key is pressed,
   * `disableKeyboard` is false and the modal is in focus.
   */
  onEscapeKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired before the dialog exits.
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the dialog has exited.
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the dialog is exiting.
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * If `true`, the Dialog is open.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired),

  /**
   * The component used to render the body of the dialog.
   */
  PaperComponent: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),

  /**
   * Props applied to the [`Paper`](/api/paper/) element.
   */
  PaperProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * Determine the container for scrolling the dialog.
   */
  scroll: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['body', 'paper']),

  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   */
  TransitionComponent: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
  })]),

  /**
   * Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.
   */
  TransitionProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_12__.default)(styles, {
  name: 'MuiDialog'
})(Dialog));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Dialog/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Dialog/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Dialog__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialog */ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Fade/Fade.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Fade/Fade.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _styles_transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../transitions/utils */ "./node_modules/@material-ui/core/esm/transitions/utils.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");










var styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
var defaultTimeout = {
  enter: _styles_transitions__WEBPACK_IMPORTED_MODULE_5__.duration.enteringScreen,
  exit: _styles_transitions__WEBPACK_IMPORTED_MODULE_5__.duration.leavingScreen
};
/**
 * The Fade transition is used by the [Modal](/components/modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Fade = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function Fade(props, ref) {
  var children = props.children,
      _props$disableStrictM = props.disableStrictModeCompat,
      disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      style = props.style,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? react_transition_group__WEBPACK_IMPORTED_MODULE_6__.Transition : _props$TransitionComp,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? defaultTimeout : _props$timeout,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(props, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "TransitionComponent", "timeout"]);

  var theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_7__.default)();
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null);
  var foreignRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__.default)(children.ref, ref);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__.default)(enableStrictModeCompat ? nodeRef : undefined, foreignRef);

  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing],
            _ref2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, 2),
            node = _ref2[0],
            isAppearing = _ref2[1]; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.


        if (isAppearing === undefined) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };

  var handleEntering = normalizedTransitionCallback(onEntering);
  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_9__.reflow)(node); // So the animation always start from the start.

    var transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_9__.getTransitionProps)({
      style: style,
      timeout: timeout
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function (node) {
    var transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_9__.getTransitionProps)({
      style: style,
      timeout: timeout
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    appear: true,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : undefined,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    timeout: timeout
  }, other), function (state, childProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.cloneElement(children, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        opacity: 0,
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, styles[state], style, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
 true ? Fade.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A single child content element.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().element),

  /**
   * Enable this prop if you encounter 'Function components cannot be given refs',
   * use `unstable_createStrictModeTheme`,
   * and can't forward the ref in the child component.
   */
  disableStrictModeCompat: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the component will transition in.
   */
  in: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * @ignore
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
  })])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (Fade);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Fade/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Fade/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Fade__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fade */ "./node_modules/@material-ui/core/esm/Fade/Fade.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FilledInput/FilledInput.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FilledInput/FilledInput.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");








var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  var backgroundColor = light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      backgroundColor: backgroundColor,
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      '&:hover': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.13)' : 'rgba(255, 255, 255, 0.13)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: backgroundColor
        }
      },
      '&$focused': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)'
      },
      '&$disabled': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'
      }
    },

    /* Styles applied to the root element if color secondary. */
    colorSecondary: {
      '&$underline:after': {
        borderBottomColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the root element if `disableUnderline={false}`. */
    underline: {
      '&:after': {
        borderBottom: "2px solid ".concat(theme.palette.primary.main),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      },
      '&$error:after': {
        borderBottomColor: theme.palette.error.main,
        transform: 'scaleX(1)' // error is always underlined in red

      },
      '&:before': {
        borderBottom: "1px solid ".concat(bottomLineColor),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('border-bottom-color', {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&:hover:before': {
        borderBottom: "1px solid ".concat(theme.palette.text.primary)
      },
      '&$disabled:before': {
        borderBottomStyle: 'dotted'
      }
    },

    /* Pseudo-class applied to the root element if the component is focused. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {
      paddingLeft: 12
    },

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {
      paddingRight: 12
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: '27px 12px 10px',
      '&$marginDense': {
        paddingTop: 23,
        paddingBottom: 6
      }
    },

    /* Styles applied to the `input` element. */
    input: {
      padding: '27px 12px 10px',
      '&:-webkit-autofill': {
        WebkitBoxShadow: theme.palette.type === 'light' ? null : '0 0 0 100px #266798 inset',
        WebkitTextFillColor: theme.palette.type === 'light' ? null : '#fff',
        caretColor: theme.palette.type === 'light' ? null : '#fff',
        borderTopLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit'
      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 23,
      paddingBottom: 6
    },

    /* Styles applied to the `input` if in `<FormControl hiddenLabel />`. */
    inputHiddenLabel: {
      paddingTop: 18,
      paddingBottom: 19,
      '&$inputMarginDense': {
        paddingTop: 10,
        paddingBottom: 11
      }
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      padding: 0
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {
      paddingLeft: 0
    },

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {
      paddingRight: 0
    }
  };
};
var FilledInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function FilledInput(props, ref) {
  var disableUnderline = props.disableUnderline,
      classes = props.classes,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InputBase__WEBPACK_IMPORTED_MODULE_5__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    classes: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, classes, {
      root: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, !disableUnderline && classes.underline),
      underline: null
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other));
});
 true ? FilledInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The id of the `input` element.
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__.refType,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Name attribute of the `input` element.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the `input` element will be required.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
} : 0;
FilledInput.muiName = 'Input';
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__.default)(styles, {
  name: 'MuiFilledInput'
})(FilledInput));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FilledInput/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FilledInput/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FilledInput__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FilledInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilledInput */ "./node_modules/@material-ui/core/esm/FilledInput/FilledInput.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/FormControl.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _InputBase_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InputBase/utils */ "./node_modules/@material-ui/core/esm/InputBase/utils.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _utils_isMuiElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/isMuiElement */ "./node_modules/@material-ui/core/esm/utils/isMuiElement.js");
/* harmony import */ var _FormControlContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormControlContext */ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js");










var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    // Reset fieldset default style.
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: 'top' // Fix alignment issue on Safari.

  },

  /* Styles applied to the root element if `margin="normal"`. */
  marginNormal: {
    marginTop: 16,
    marginBottom: 8
  },

  /* Styles applied to the root element if `margin="dense"`. */
  marginDense: {
    marginTop: 8,
    marginBottom: 4
  },

  /* Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {
    width: '100%'
  }
};
/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibility and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *
 *  - FormLabel
 *  - FormHelperText
 *  - Input
 *  - InputLabel
 *
 * You can find one composition example below and more going to [the demos](/components/text-fields/#components).
 *
 * ```jsx
 * <FormControl>
 *   <InputLabel htmlFor="my-input">Email address</InputLabel>
 *   <Input id="my-input" aria-describedby="my-helper-text" />
 *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
 * </FormControl>
 * ```
 *
 * ⚠️Only one input can be used within a FormControl.
 */

var FormControl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function FormControl(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      visuallyFocused = props.focused,
      _props$hiddenLabel = props.hiddenLabel,
      hiddenLabel = _props$hiddenLabel === void 0 ? false : _props$hiddenLabel,
      _props$margin = props.margin,
      margin = _props$margin === void 0 ? 'none' : _props$margin,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      size = props.size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "classes", "className", "color", "component", "disabled", "error", "fullWidth", "focused", "hiddenLabel", "margin", "required", "size", "variant"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(function () {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    var initialAdornedStart = false;

    if (children) {
      react__WEBPACK_IMPORTED_MODULE_2__.Children.forEach(children, function (child) {
        if (!(0,_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_5__.default)(child, ['Input', 'Select'])) {
          return;
        }

        var input = (0,_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_5__.default)(child, ['Select']) ? child.props.input : child;

        if (input && (0,_InputBase_utils__WEBPACK_IMPORTED_MODULE_6__.isAdornedStart)(input.props)) {
          initialAdornedStart = true;
        }
      });
    }

    return initialAdornedStart;
  }),
      adornedStart = _React$useState[0],
      setAdornedStart = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_2__.useState(function () {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    var initialFilled = false;

    if (children) {
      react__WEBPACK_IMPORTED_MODULE_2__.Children.forEach(children, function (child) {
        if (!(0,_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_5__.default)(child, ['Input', 'Select'])) {
          return;
        }

        if ((0,_InputBase_utils__WEBPACK_IMPORTED_MODULE_6__.isFilled)(child.props, true)) {
          initialFilled = true;
        }
      });
    }

    return initialFilled;
  }),
      filled = _React$useState2[0],
      setFilled = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__.useState(false),
      _focused = _React$useState3[0],
      setFocused = _React$useState3[1];

  var focused = visuallyFocused !== undefined ? visuallyFocused : _focused;

  if (disabled && focused) {
    setFocused(false);
  }

  var registerEffect;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var registeredInput = react__WEBPACK_IMPORTED_MODULE_2__.useRef(false);

    registerEffect = function registerEffect() {
      if (registeredInput.current) {
        console.error(['Material-UI: There are multiple InputBase components inside a FormControl.', 'This is not supported. It might cause infinite rendering loops.', 'Only use one InputBase.'].join('\n'));
      }

      registeredInput.current = true;
      return function () {
        registeredInput.current = false;
      };
    };
  }

  var onFilled = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    setFilled(true);
  }, []);
  var onEmpty = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    setFilled(false);
  }, []);
  var childContext = {
    adornedStart: adornedStart,
    setAdornedStart: setAdornedStart,
    color: color,
    disabled: disabled,
    error: error,
    filled: filled,
    focused: focused,
    fullWidth: fullWidth,
    hiddenLabel: hiddenLabel,
    margin: (size === 'small' ? 'dense' : undefined) || margin,
    onBlur: function onBlur() {
      setFocused(false);
    },
    onEmpty: onEmpty,
    onFilled: onFilled,
    onFocus: function onFocus() {
      setFocused(true);
    },
    registerEffect: registerEffect,
    required: required,
    variant: variant
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_FormControlContext__WEBPACK_IMPORTED_MODULE_7__.default.Provider, {
    value: childContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className, margin !== 'none' && classes["margin".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__.default)(margin))], fullWidth && classes.fullWidth),
    ref: ref
  }, other), children));
});
 true ? FormControl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The contents of the form control.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the component will be displayed in focused state.
   */
  focused: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the component will take up the full width of its container.
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label will be hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   */
  hiddenLabel: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense', 'none', 'normal']),

  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The size of the text field.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['medium', 'small']),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['filled', 'outlined', 'standard'])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__.default)(styles, {
  name: 'MuiFormControl'
})(FormControl));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFormControl": function() { return /* binding */ useFormControl; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

var FormControlContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext();

if (true) {
  FormControlContext.displayName = 'FormControlContext';
}

function useFormControl() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(FormControlContext);
}
/* harmony default export */ __webpack_exports__["default"] = (FormControlContext);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/formControlState.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ formControlState; }
/* harmony export */ });
function formControlState(_ref) {
  var props = _ref.props,
      states = _ref.states,
      muiFormControl = _ref.muiFormControl;
  return states.reduce(function (acc, state) {
    acc[state] = props[state];

    if (muiFormControl) {
      if (typeof props[state] === 'undefined') {
        acc[state] = muiFormControl[state];
      }
    }

    return acc;
  }, {});
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormControl__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "useFormControl": function() { return /* reexport safe */ _useFormControl__WEBPACK_IMPORTED_MODULE_1__.default; }
/* harmony export */ });
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _useFormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/useFormControl.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useFormControl; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormControlContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormControlContext */ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js");


function useFormControl() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(_FormControlContext__WEBPACK_IMPORTED_MODULE_1__.default);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
      color: theme.palette.text.secondary
    }, theme.typography.caption, {
      textAlign: 'left',
      marginTop: 3,
      margin: 0,
      '&$disabled': {
        color: theme.palette.text.disabled
      },
      '&$error': {
        color: theme.palette.error.main
      }
    }),

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      marginTop: 4
    },

    /* Styles applied to the root element if `variant="filled"` or `variant="outlined"`. */
    contained: {
      marginLeft: 14,
      marginRight: 14
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `filled={true}`. */
    filled: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {}
  };
};
var FormHelperText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function FormHelperText(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'p' : _props$component,
      disabled = props.disabled,
      error = props.error,
      filled = props.filled,
      focused = props.focused,
      margin = props.margin,
      required = props.required,
      variant = props.variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["children", "classes", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"]);

  var muiFormControl = (0,_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_5__.default)();
  var fcs = (0,_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__.default)({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant', 'margin', 'disabled', 'error', 'filled', 'focused', 'required']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, (fcs.variant === 'filled' || fcs.variant === 'outlined') && classes.contained, className, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required, fcs.margin === 'dense' && classes.marginDense),
    ref: ref
  }, other), children === ' ' ?
  /*#__PURE__*/
  // eslint-disable-next-line react/no-danger
  react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: '&#8203;'
    }
  }) : children);
});
 true ? FormHelperText.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense']),

  /**
   * If `true`, the helper text should use required classes key.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['filled', 'outlined', 'standard'])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__.default)(styles, {
  name: 'MuiFormHelperText'
})(FormHelperText));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormHelperText/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormHelperText/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormHelperText__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormHelperText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormLabel/FormLabel.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormLabel/FormLabel.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
      color: theme.palette.text.secondary
    }, theme.typography.body1, {
      lineHeight: 1,
      padding: 0,
      '&$focused': {
        color: theme.palette.primary.main
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      },
      '&$error': {
        color: theme.palette.error.main
      }
    }),

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {
      '&$focused': {
        color: theme.palette.secondary.main
      }
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `filled={true}`. */
    filled: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {},

    /* Styles applied to the asterisk element. */
    asterisk: {
      '&$error': {
        color: theme.palette.error.main
      }
    }
  };
};
var FormLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function FormLabel(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      color = props.color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'label' : _props$component,
      disabled = props.disabled,
      error = props.error,
      filled = props.filled,
      focused = props.focused,
      required = props.required,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["children", "classes", "className", "color", "component", "disabled", "error", "filled", "focused", "required"]);

  var muiFormControl = (0,_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_5__.default)();
  var fcs = (0,_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__.default)({
    props: props,
    muiFormControl: muiFormControl,
    states: ['color', 'required', 'focused', 'disabled', 'error', 'filled']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, classes["color".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__.default)(fcs.color || 'primary'))], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required),
    ref: ref
  }, other), children, fcs.required && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    "aria-hidden": true,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.asterisk, fcs.error && classes.error)
  }, "\u2009", '*'));
});
 true ? FormLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label should use filled classes key.
   */
  filled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__.default)(styles, {
  name: 'MuiFormLabel'
})(FormLabel));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormLabel/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormLabel/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormLabel__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/FormLabel.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Grow/Grow.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Grow/Grow.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../transitions/utils */ "./node_modules/@material-ui/core/esm/transitions/utils.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");










function getScale(value) {
  return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
}

var styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: 'none'
  }
};
/**
 * The Grow transition is used by the [Tooltip](/components/tooltips/) and
 * [Popover](/components/popover/) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Grow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function Grow(props, ref) {
  var children = props.children,
      _props$disableStrictM = props.disableStrictModeCompat,
      disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      style = props.style,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? 'auto' : _props$timeout,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? react_transition_group__WEBPACK_IMPORTED_MODULE_5__.Transition : _props$TransitionComp,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(props, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);

  var timer = react__WEBPACK_IMPORTED_MODULE_3__.useRef();
  var autoTimeout = react__WEBPACK_IMPORTED_MODULE_3__.useRef();
  var theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_6__.default)();
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null);
  var foreignRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__.default)(children.ref, ref);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__.default)(enableStrictModeCompat ? nodeRef : undefined, foreignRef);

  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing],
            _ref2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, 2),
            node = _ref2[0],
            isAppearing = _ref2[1]; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.


        if (isAppearing === undefined) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };

  var handleEntering = normalizedTransitionCallback(onEntering);
  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_8__.reflow)(node); // So the animation always start from the start.

    var _getTransitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_8__.getTransitionProps)({
      style: style,
      timeout: timeout
    }, {
      mode: 'enter'
    }),
        transitionDuration = _getTransitionProps.duration,
        delay = _getTransitionProps.delay;

    var duration;

    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [theme.transitions.create('opacity', {
      duration: duration,
      delay: delay
    }), theme.transitions.create('transform', {
      duration: duration * 0.666,
      delay: delay
    })].join(',');

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function (node) {
    var _getTransitionProps2 = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_8__.getTransitionProps)({
      style: style,
      timeout: timeout
    }, {
      mode: 'exit'
    }),
        transitionDuration = _getTransitionProps2.duration,
        delay = _getTransitionProps2.delay;

    var duration;

    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [theme.transitions.create('opacity', {
      duration: duration,
      delay: delay
    }), theme.transitions.create('transform', {
      duration: duration * 0.666,
      delay: delay || duration * 0.333
    })].join(',');
    node.style.opacity = '0';
    node.style.transform = getScale(0.75);

    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);

  var addEndListener = function addEndListener(nodeOrNext, maybeNext) {
    var next = enableStrictModeCompat ? nodeOrNext : maybeNext;

    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTimeout.current || 0);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    return function () {
      clearTimeout(timer.current);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    appear: true,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : undefined,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: addEndListener,
    timeout: timeout === 'auto' ? null : timeout
  }, other), function (state, childProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.cloneElement(children, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        opacity: 0,
        transform: getScale(0.75),
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, styles[state], style, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
 true ? Grow.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A single child content element.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().element),

  /**
   * Enable this prop if you encounter 'Function components cannot be given refs',
   * use `unstable_createStrictModeTheme`,
   * and can't forward the ref in the child component.
   */
  disableStrictModeCompat: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * @ignore
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['auto']), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
  })])
} : 0;
Grow.muiSupportAuto = true;
/* harmony default export */ __webpack_exports__["default"] = (Grow);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Grow/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Grow/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Grow__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Grow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grow */ "./node_modules/@material-ui/core/esm/Grow/Grow.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputBase/InputBase.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/FormControlContext */ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _TextareaAutosize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../TextareaAutosize */ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./node_modules/@material-ui/core/esm/InputBase/utils.js");




/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */











var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var placeholder = {
    color: 'currentColor',
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter
    })
  };
  var placeholderHidden = {
    opacity: '0 !important'
  };
  var placeholderVisible = {
    opacity: light ? 0.42 : 0.5
  };
  return {
    '@global': {
      '@keyframes mui-auto-fill': {},
      '@keyframes mui-auto-fill-cancel': {}
    },

    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, theme.typography.body1, {
      color: theme.palette.text.primary,
      lineHeight: '1.1876em',
      // Reset (19px), match the native input line-height
      boxSizing: 'border-box',
      // Prevent padding issue with fullWidth.
      position: 'relative',
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
      '&$disabled': {
        color: theme.palette.text.disabled,
        cursor: 'default'
      }
    }),

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {},

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {},

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      '&$marginDense': {
        paddingTop: 4 - 1
      }
    },

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the `input` element. */
    input: {
      font: 'inherit',
      letterSpacing: 'inherit',
      color: 'currentColor',
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      border: 0,
      boxSizing: 'content-box',
      background: 'none',
      height: '1.1876em',
      // Reset (19px), match the native input line-height
      margin: 0,
      // Reset for Safari
      WebkitTapHighlightColor: 'transparent',
      display: 'block',
      // Make the flex item shrink with Firefox
      minWidth: 0,
      width: '100%',
      // Fix IE 11 width issue
      animationName: 'mui-auto-fill-cancel',
      animationDuration: '10ms',
      '&::-webkit-input-placeholder': placeholder,
      '&::-moz-placeholder': placeholder,
      // Firefox 19+
      '&:-ms-input-placeholder': placeholder,
      // IE 11
      '&::-ms-input-placeholder': placeholder,
      // Edge
      '&:focus': {
        outline: 0
      },
      // Reset Firefox invalid required input style
      '&:invalid': {
        boxShadow: 'none'
      },
      '&::-webkit-search-decoration': {
        // Remove the padding when type=search.
        '-webkit-appearance': 'none'
      },
      // Show and hide the placeholder logic
      'label[data-shrink=false] + $formControl &': {
        '&::-webkit-input-placeholder': placeholderHidden,
        '&::-moz-placeholder': placeholderHidden,
        // Firefox 19+
        '&:-ms-input-placeholder': placeholderHidden,
        // IE 11
        '&::-ms-input-placeholder': placeholderHidden,
        // Edge
        '&:focus::-webkit-input-placeholder': placeholderVisible,
        '&:focus::-moz-placeholder': placeholderVisible,
        // Firefox 19+
        '&:focus:-ms-input-placeholder': placeholderVisible,
        // IE 11
        '&:focus::-ms-input-placeholder': placeholderVisible // Edge

      },
      '&$disabled': {
        opacity: 1 // Reset iOS opacity

      },
      '&:-webkit-autofill': {
        animationDuration: '5000s',
        animationName: 'mui-auto-fill'
      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 4 - 1
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      height: 'auto',
      resize: 'none',
      padding: 0
    },

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {
      // Improve type search style.
      '-moz-appearance': 'textfield',
      '-webkit-appearance': 'textfield'
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {},

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {},

    /* Styles applied to the `input` element if `hiddenLabel={true}`. */
    inputHiddenLabel: {}
  };
};
var useEnhancedEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__.useEffect : react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect;
/**
 * `InputBase` contains as few styles as possible.
 * It aims to be a simple building block for creating an input.
 * It contains a load of style reset and some state logic.
 */

var InputBase = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function InputBase(props, ref) {
  var ariaDescribedby = props['aria-describedby'],
      autoComplete = props.autoComplete,
      autoFocus = props.autoFocus,
      classes = props.classes,
      className = props.className,
      color = props.color,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      endAdornment = props.endAdornment,
      error = props.error,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      id = props.id,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$inputProps = props.inputProps,
      inputPropsProp = _props$inputProps === void 0 ? {} : _props$inputProps,
      inputRefProp = props.inputRef,
      margin = props.margin,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      placeholder = props.placeholder,
      readOnly = props.readOnly,
      renderSuffix = props.renderSuffix,
      rows = props.rows,
      rowsMax = props.rowsMax,
      rowsMin = props.rowsMin,
      startAdornment = props.startAdornment,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      valueProp = props.value,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["aria-describedby", "autoComplete", "autoFocus", "classes", "className", "color", "defaultValue", "disabled", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "rowsMax", "rowsMin", "startAdornment", "type", "value"]);

  var value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(value != null),
      isControlled = _React$useRef.current;

  var inputRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  var handleInputRefWarning = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (instance) {
    if (true) {
      if (instance && instance.nodeName !== 'INPUT' && !instance.focus) {
        console.error(['Material-UI: You have provided a `inputComponent` to the input component', 'that does not correctly handle the `inputRef` prop.', 'Make sure the `inputRef` prop is called with a HTMLInputElement.'].join('\n'));
      }
    }
  }, []);
  var handleInputPropsRefProp = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__.default)(inputPropsProp.ref, handleInputRefWarning);
  var handleInputRefProp = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__.default)(inputRefProp, handleInputPropsRefProp);
  var handleInputRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__.default)(inputRef, handleInputRefProp);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(false),
      focused = _React$useState[0],
      setFocused = _React$useState[1];

  var muiFormControl = (0,_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_6__.useFormControl)();

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
      if (muiFormControl) {
        return muiFormControl.registerEffect();
      }

      return undefined;
    }, [muiFormControl]);
  }

  var fcs = (0,_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_7__.default)({
    props: props,
    muiFormControl: muiFormControl,
    states: ['color', 'disabled', 'error', 'hiddenLabel', 'margin', 'required', 'filled']
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused; // The blur won't fire when the disabled state is set on a focused input.
  // We need to book keep the focused state manually.

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);

      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  var onFilled = muiFormControl && muiFormControl.onFilled;
  var onEmpty = muiFormControl && muiFormControl.onEmpty;
  var checkDirty = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (obj) {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_8__.isFilled)(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  useEnhancedEffect(function () {
    if (isControlled) {
      checkDirty({
        value: value
      });
    }
  }, [value, checkDirty, isControlled]);

  var handleFocus = function handleFocus(event) {
    // Fix a bug with IE 11 where the focus/blur events are triggered
    // while the input is disabled.
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }

    if (onFocus) {
      onFocus(event);
    }

    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };

  var handleBlur = function handleBlur(event) {
    if (onBlur) {
      onBlur(event);
    }

    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };

  var handleChange = function handleChange(event) {
    if (!isControlled) {
      var element = event.target || inputRef.current;

      if (element == null) {
        throw new Error( true ? "Material-UI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://material-ui.com/r/input-component-ref-interface for more info." : 0);
      }

      checkDirty({
        value: element.value
      });
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (inputPropsProp.onChange) {
      inputPropsProp.onChange.apply(inputPropsProp, [event].concat(args));
    } // Perform in the willUpdate


    if (onChange) {
      onChange.apply(void 0, [event].concat(args));
    }
  }; // Check the input state on mount, in case it was filled by the user
  // or auto filled by the browser before the hydration (for SSR).


  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    checkDirty(inputRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  var handleClick = function handleClick(event) {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }

    if (onClick) {
      onClick(event);
    }
  };

  var InputComponent = inputComponent;

  var inputProps = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, inputPropsProp, {
    ref: handleInputRef
  });

  if (typeof InputComponent !== 'string') {
    inputProps = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
      // Rename ref to inputRef as we don't know the
      // provided `inputComponent` structure.
      inputRef: handleInputRef,
      type: type
    }, inputProps, {
      ref: null
    });
  } else if (multiline) {
    if (rows && !rowsMax && !rowsMin) {
      InputComponent = 'textarea';
    } else {
      inputProps = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        rows: rows,
        rowsMax: rowsMax
      }, inputProps);
      InputComponent = _TextareaAutosize__WEBPACK_IMPORTED_MODULE_9__.default;
    }
  } else {
    inputProps = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
      type: type
    }, inputProps);
  }

  var handleAutoFill = function handleAutoFill(event) {
    // Provide a fake value as Chrome might not let you access it for security reasons.
    checkDirty(event.animationName === 'mui-auto-fill-cancel' ? inputRef.current : {
      value: 'x'
    });
  };

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, classes["color".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_10__.default)(fcs.color || 'primary'))], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fullWidth && classes.fullWidth, fcs.focused && classes.focused, muiFormControl && classes.formControl, multiline && classes.multiline, startAdornment && classes.adornedStart, endAdornment && classes.adornedEnd, fcs.margin === 'dense' && classes.marginDense),
    onClick: handleClick,
    ref: ref
  }, other), startAdornment, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_6__.default.Provider, {
    value: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(InputComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    "aria-invalid": fcs.error,
    "aria-describedby": ariaDescribedby,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    disabled: fcs.disabled,
    id: id,
    onAnimationStart: handleAutoFill,
    name: name,
    placeholder: placeholder,
    readOnly: readOnly,
    required: fcs.required,
    rows: rows,
    value: value,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp
  }, inputProps, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.input, inputPropsProp.className, fcs.disabled && classes.disabled, multiline && classes.inputMultiline, fcs.hiddenLabel && classes.inputHiddenLabel, startAdornment && classes.inputAdornedStart, endAdornment && classes.inputAdornedEnd, type === 'search' && classes.inputTypeSearch, fcs.margin === 'dense' && classes.inputMarginDense),
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus
  }))), endAdornment, renderSuffix ? renderSuffix((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, fcs, {
    startAdornment: startAdornment
  })) : null);
});
 true ? InputBase.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  'aria-describedby': (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The id of the `input` element.
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_11__.refType,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Name attribute of the `input` element.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Callback fired when the input is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onKeyUp: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * @ignore
   */
  renderSuffix: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * If `true`, the `input` element will be required.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  rowsMin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_12__.default)(styles, {
  name: 'MuiInputBase'
})(InputBase));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputBase/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputBase/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _InputBase__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputBase */ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputBase/utils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputBase/utils.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasValue": function() { return /* binding */ hasValue; },
/* harmony export */   "isFilled": function() { return /* binding */ isFilled; },
/* harmony export */   "isAdornedStart": function() { return /* binding */ isAdornedStart; }
/* harmony export */ });
// Supports determination of isControlled().
// Controlled input accepts its current value as a prop.
//
// @see https://facebook.github.io/react/docs/forms.html#controlled-components
// @param value
// @returns {boolean} true if string (including '') or number (including zero)
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
} // Determine if field is empty or filled.
// Response determines if label is presented above field or as placeholder.
//
// @param obj
// @param SSR
// @returns {boolean} False when not present or empty string.
//                    True when any number or string with length.

function isFilled(obj) {
  var SSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
} // Determine if an Input is adorned on start.
// It's corresponding to the left with LTR.
//
// @param obj
// @returns {boolean} False when no adornments.
//                    True when adorned at the start.

function isAdornedStart(obj) {
  return obj.startAdornment;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _FormLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/index.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'block',
      transformOrigin: 'top left'
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {},

    /* Pseudo-class applied to the asterisk element. */
    asterisk: {},

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      position: 'absolute',
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: 'translate(0, 24px) scale(1)'
    },

    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      // Compensation for the `Input.inputDense` style.
      transform: 'translate(0, 21px) scale(1)'
    },

    /* Styles applied to the `input` element if `shrink={true}`. */
    shrink: {
      transform: 'translate(0, 1.5px) scale(0.75)',
      transformOrigin: 'top left'
    },

    /* Styles applied to the `input` element if `disableAnimation={false}`. */
    animated: {
      transition: theme.transitions.create(['color', 'transform'], {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      })
    },

    /* Styles applied to the root element if `variant="filled"`. */
    filled: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: 'none',
      transform: 'translate(12px, 20px) scale(1)',
      '&$marginDense': {
        transform: 'translate(12px, 17px) scale(1)'
      },
      '&$shrink': {
        transform: 'translate(12px, 10px) scale(0.75)',
        '&$marginDense': {
          transform: 'translate(12px, 7px) scale(0.75)'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: 'none',
      transform: 'translate(14px, 20px) scale(1)',
      '&$marginDense': {
        transform: 'translate(14px, 12px) scale(1)'
      },
      '&$shrink': {
        transform: 'translate(14px, -6px) scale(0.75)'
      }
    }
  };
};
var InputLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function InputLabel(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$disableAnimati = props.disableAnimation,
      disableAnimation = _props$disableAnimati === void 0 ? false : _props$disableAnimati,
      margin = props.margin,
      shrinkProp = props.shrink,
      variant = props.variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className", "disableAnimation", "margin", "shrink", "variant"]);

  var muiFormControl = (0,_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_5__.default)();
  var shrink = shrinkProp;

  if (typeof shrink === 'undefined' && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }

  var fcs = (0,_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__.default)({
    props: props,
    muiFormControl: muiFormControl,
    states: ['margin', 'variant']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_FormLabel__WEBPACK_IMPORTED_MODULE_7__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    "data-shrink": shrink,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className, muiFormControl && classes.formControl, !disableAnimation && classes.animated, shrink && classes.shrink, fcs.margin === 'dense' && classes.marginDense, {
      'filled': classes.filled,
      'outlined': classes.outlined
    }[fcs.variant]),
    classes: {
      focused: classes.focused,
      disabled: classes.disabled,
      error: classes.error,
      required: classes.required,
      asterisk: classes.asterisk
    },
    ref: ref
  }, other));
});
 true ? InputLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The contents of the `InputLabel`.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['primary', 'secondary']),

  /**
   * If `true`, the transition animation is disabled.
   */
  disableAnimation: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, apply disabled class.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the input of this label is focused.
   */
  focused: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense']),

  /**
   * if `true`, the label will indicate that the input is required.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label is shrunk.
   */
  shrink: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['filled', 'outlined', 'standard'])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__.default)(styles, {
  name: 'MuiInputLabel'
})(InputLabel));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputLabel/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputLabel/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _InputLabel__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _InputLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Input/Input.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Input/Input.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");








var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative'
    },

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      'label + &': {
        marginTop: 16
      }
    },

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if color secondary. */
    colorSecondary: {
      '&$underline:after': {
        borderBottomColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the root element if `disableUnderline={false}`. */
    underline: {
      '&:after': {
        borderBottom: "2px solid ".concat(theme.palette.primary.main),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      },
      '&$error:after': {
        borderBottomColor: theme.palette.error.main,
        transform: 'scaleX(1)' // error is always underlined in red

      },
      '&:before': {
        borderBottom: "1px solid ".concat(bottomLineColor),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('border-bottom-color', {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&:hover:not($disabled):before': {
        borderBottom: "2px solid ".concat(theme.palette.text.primary),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          borderBottom: "1px solid ".concat(bottomLineColor)
        }
      },
      '&$disabled:before': {
        borderBottomStyle: 'dotted'
      }
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {},

    /* Styles applied to the `input` element. */
    input: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {},

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {},

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {}
  };
};
var Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Input(props, ref) {
  var disableUnderline = props.disableUnderline,
      classes = props.classes,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InputBase__WEBPACK_IMPORTED_MODULE_5__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    classes: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, classes, {
      root: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, !disableUnderline && classes.underline),
      underline: null
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other));
});
 true ? Input.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The id of the `input` element.
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__.refType,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Name attribute of the `input` element.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the `input` element will be required.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
} : 0;
Input.muiName = 'Input';
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__.default)(styles, {
  name: 'MuiInput'
})(Input));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Input/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Input/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./node_modules/@material-ui/core/esm/Input/Input.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/List/List.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/List/List.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ListContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListContext */ "./node_modules/@material-ui/core/esm/List/ListContext.js");







var styles = {
  /* Styles applied to the root element. */
  root: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative'
  },

  /* Styles applied to the root element if `disablePadding={false}`. */
  padding: {
    paddingTop: 8,
    paddingBottom: 8
  },

  /* Styles applied to the root element if dense. */
  dense: {},

  /* Styles applied to the root element if a `subheader` is provided. */
  subheader: {
    paddingTop: 0
  }
};
var List = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function List(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'ul' : _props$component,
      _props$dense = props.dense,
      dense = _props$dense === void 0 ? false : _props$dense,
      _props$disablePadding = props.disablePadding,
      disablePadding = _props$disablePadding === void 0 ? false : _props$disablePadding,
      subheader = props.subheader,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]);

  var context = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(function () {
    return {
      dense: dense
    };
  }, [dense]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ListContext__WEBPACK_IMPORTED_MODULE_5__.default.Provider, {
    value: context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className, dense && classes.dense, !disablePadding && classes.padding, subheader && classes.subheader),
    ref: ref
  }, other), subheader, children));
});
 true ? List.propTypes = {
  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   */
  dense: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, vertical padding will be removed from the list.
   */
  disablePadding: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiList'
})(List));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/List/ListContext.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/List/ListContext.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

var ListContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

if (true) {
  ListContext.displayName = 'ListContext';
}

/* harmony default export */ __webpack_exports__["default"] = (ListContext);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/List/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/List/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _List__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "./node_modules/@material-ui/core/esm/List/List.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/MenuList/MenuList.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/MenuList/MenuList.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getScrollbarSize */ "./node_modules/@material-ui/core/esm/utils/getScrollbarSize.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");











function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }

  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }

  return disableListWrap ? null : list.firstChild;
}

function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }

  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }

  return disableListWrap ? null : list.lastChild;
}

function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === undefined) {
    return true;
  }

  var text = nextFocus.innerText;

  if (text === undefined) {
    // jsdom doesn't support innerText
    text = nextFocus.textContent;
  }

  text = text.trim().toLowerCase();

  if (text.length === 0) {
    return false;
  }

  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }

  return text.indexOf(textCriteria.keys.join('')) === 0;
}

function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  var wrappedOnce = false;
  var nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);

  while (nextFocus) {
    // Prevent infinite loop.
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }

      wrappedOnce = true;
    } // Same logic as useAutocomplete.js


    var nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';

    if (!nextFocus.hasAttribute('tabindex') || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      // Move to the next element.
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return;
    }
  }
}

var useEnhancedEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__.useEffect : react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect;
/**
 * A permanently displayed menu following https://www.w3.org/TR/wai-aria-practices/#menubutton.
 * It's exposed to help customization of the [`Menu`](/api/menu/) component. If you
 * use it separately you need to move focus into the component manually. Once
 * the focus is placed inside the component it is fully keyboard accessible.
 */

var MenuList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function MenuList(props, ref) {
  var actions = props.actions,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      _props$autoFocusItem = props.autoFocusItem,
      autoFocusItem = _props$autoFocusItem === void 0 ? false : _props$autoFocusItem,
      children = props.children,
      className = props.className,
      _props$disabledItemsF = props.disabledItemsFocusable,
      disabledItemsFocusable = _props$disabledItemsF === void 0 ? false : _props$disabledItemsF,
      _props$disableListWra = props.disableListWrap,
      disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra,
      onKeyDown = props.onKeyDown,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'selectedMenu' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"]);

  var listRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  var textCriteriaRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  useEnhancedEffect(function () {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  react__WEBPACK_IMPORTED_MODULE_2__.useImperativeHandle(actions, function () {
    return {
      adjustStyleForScrollbar: function adjustStyleForScrollbar(containerElement, theme) {
        // Let's ignore that piece of logic if users are already overriding the width
        // of the menu.
        var noExplicitWidth = !listRef.current.style.width;

        if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
          var scrollbarSize = "".concat((0,_utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_6__.default)(true), "px");
          listRef.current.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = scrollbarSize;
          listRef.current.style.width = "calc(100% + ".concat(scrollbarSize, ")");
        }

        return listRef.current;
      }
    };
  }, []);

  var handleKeyDown = function handleKeyDown(event) {
    var list = listRef.current;
    var key = event.key;
    /**
     * @type {Element} - will always be defined since we are in a keydown handler
     * attached to an element. A keydown event is either dispatched to the activeElement
     * or document.body or document.documentElement. Only the first case will
     * trigger this specific handler.
     */

    var currentFocus = (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_7__.default)(list).activeElement;

    if (key === 'ArrowDown') {
      // Prevent scroll of the page
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === 'ArrowUp') {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key === 'Home') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === 'End') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key.length === 1) {
      var criteria = textCriteriaRef.current;
      var lowerKey = key.toLowerCase();
      var currTime = performance.now();

      if (criteria.keys.length > 0) {
        // Reset
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }

      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      var keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);

      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (instance) {
    // #StrictMode ready
    listRef.current = react_dom__WEBPACK_IMPORTED_MODULE_5__.findDOMNode(instance);
  }, []);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__.default)(handleOwnRef, ref);
  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */

  var activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
  // to check if there is a `selected` item. We're looking for the last `selected`
  // item and use the first valid item as a fallback

  react__WEBPACK_IMPORTED_MODULE_2__.Children.forEach(children, function (child, index) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.isValidElement(child)) {
      return;
    }

    if (true) {
      if ((0,react_is__WEBPACK_IMPORTED_MODULE_3__.isFragment)(child)) {
        console.error(["Material-UI: The Menu component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    if (!child.props.disabled) {
      if (variant === 'selectedMenu' && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  var items = react__WEBPACK_IMPORTED_MODULE_2__.Children.map(children, function (child, index) {
    if (index === activeItemIndex) {
      var newChildProps = {};

      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }

      if (child.props.tabIndex === undefined && variant === 'selectedMenu') {
        newChildProps.tabIndex = 0;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(child, newChildProps);
    }

    return child;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_List__WEBPACK_IMPORTED_MODULE_9__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    role: "menu",
    ref: handleRef,
    className: className,
    onKeyDown: handleKeyDown,
    tabIndex: autoFocus ? 0 : -1
  }, other), items);
});
 true ? MenuList.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   */
  autoFocusItem: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * If `true`, will allow focus on disabled items.
   */
  disabledItemsFocusable: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the menu items will not wrap focus.
   */
  disableListWrap: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * @ignore
   */
  onKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['menu', 'selectedMenu'])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (MenuList);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/MenuList/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/MenuList/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _MenuList__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuList */ "./node_modules/@material-ui/core/esm/MenuList/MenuList.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Menu/Menu.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Menu/Menu.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");













var RTL_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};
var LTR_ORIGIN = {
  vertical: 'top',
  horizontal: 'left'
};
var styles = {
  /* Styles applied to the `Paper` component. */
  paper: {
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tapable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: 'calc(100% - 96px)',
    // Add iOS momentum scrolling.
    WebkitOverflowScrolling: 'touch'
  },

  /* Styles applied to the `List` component via `MenuList`. */
  list: {
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  }
};
var Menu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Menu(props, ref) {
  var _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus,
      children = props.children,
      classes = props.classes,
      _props$disableAutoFoc = props.disableAutoFocusItem,
      disableAutoFocusItem = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$MenuListProps = props.MenuListProps,
      MenuListProps = _props$MenuListProps === void 0 ? {} : _props$MenuListProps,
      onClose = props.onClose,
      onEntering = props.onEntering,
      open = props.open,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      PopoverClasses = props.PopoverClasses,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'selectedMenu' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["autoFocus", "children", "classes", "disableAutoFocusItem", "MenuListProps", "onClose", "onEntering", "open", "PaperProps", "PopoverClasses", "transitionDuration", "variant"]);

  var theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_7__.default)();
  var autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  var menuListActionsRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  var contentAnchorRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);

  var getContentAnchorEl = function getContentAnchorEl() {
    return contentAnchorRef.current;
  };

  var handleEntering = function handleEntering(element, isAppearing) {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
    }

    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };

  var handleListKeyDown = function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();

      if (onClose) {
        onClose(event, 'tabKeyDown');
      }
    }
  };
  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */


  var activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
  // to check if there is a `selected` item. We're looking for the last `selected`
  // item and use the first valid item as a fallback

  react__WEBPACK_IMPORTED_MODULE_2__.Children.map(children, function (child, index) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.isValidElement(child)) {
      return;
    }

    if (true) {
      if ((0,react_is__WEBPACK_IMPORTED_MODULE_3__.isFragment)(child)) {
        console.error(["Material-UI: The Menu component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    if (!child.props.disabled) {
      if (variant !== "menu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  var items = react__WEBPACK_IMPORTED_MODULE_2__.Children.map(children, function (child, index) {
    if (index === activeItemIndex) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(child, {
        ref: function ref(instance) {
          // #StrictMode ready
          contentAnchorRef.current = react_dom__WEBPACK_IMPORTED_MODULE_6__.findDOMNode(instance);
          (0,_utils_setRef__WEBPACK_IMPORTED_MODULE_8__.default)(child.ref, instance);
        }
      });
    }

    return child;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_9__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    getContentAnchorEl: getContentAnchorEl,
    classes: PopoverClasses,
    onClose: onClose,
    onEntering: handleEntering,
    anchorOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
    transformOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
    PaperProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, PaperProps, {
      classes: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, PaperProps.classes, {
        root: classes.paper
      })
    }),
    open: open,
    ref: ref,
    transitionDuration: transitionDuration
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_MenuList__WEBPACK_IMPORTED_MODULE_10__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    onKeyDown: handleListKeyDown,
    actions: menuListActionsRef,
    autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
    autoFocusItem: autoFocusItem,
    variant: variant
  }, MenuListProps, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(classes.list, MenuListProps.className)
  }), items));
});
 true ? Menu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A HTML element, or a function that returns it.
   * It's used to set the position of the menu.
   */
  anchorEl: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_11__.HTMLElementType, (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)]),

  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   */
  disableAutoFocusItem: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Props applied to the [`MenuList`](/api/menu-list/) element.
   */
  MenuListProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired before the Menu enters.
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the Menu has entered.
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the Menu is entering.
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired before the Menu exits.
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the Menu has exited.
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the Menu is exiting.
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * If `true`, the menu is visible.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired),

  /**
   * @ignore
   */
  PaperProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * `classes` prop applied to the [`Popover`](/api/popover/) element.
   */
  PopoverClasses: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * The length of the transition in `ms`, or 'auto'
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['auto']), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
  })]),

  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['menu', 'selectedMenu'])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_12__.default)(styles, {
  name: 'MuiMenu'
})(Menu));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Modal/Modal.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Modal/Modal.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Portal */ "./node_modules/@material-ui/core/esm/Portal/index.js");
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/createChainedFunction */ "./node_modules/@material-ui/core/esm/utils/createChainedFunction.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony import */ var _styles_zIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/zIndex */ "./node_modules/@material-ui/core/esm/styles/zIndex.js");
/* harmony import */ var _ModalManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ModalManager */ "./node_modules/@material-ui/core/esm/Modal/ModalManager.js");
/* harmony import */ var _Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Unstable_TrapFocus */ "./node_modules/@material-ui/core/esm/Unstable_TrapFocus/index.js");
/* harmony import */ var _SimpleBackdrop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SimpleBackdrop */ "./node_modules/@material-ui/core/esm/Modal/SimpleBackdrop.js");

















function getContainer(container) {
  container = typeof container === 'function' ? container() : container;
  return react_dom__WEBPACK_IMPORTED_MODULE_3__.findDOMNode(container);
}

function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
} // A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.


var defaultManager = new _ModalManager__WEBPACK_IMPORTED_MODULE_5__.default();
var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0
    },

    /* Styles applied to the root element if the `Modal` has exited. */
    hidden: {
      visibility: 'hidden'
    }
  };
};
/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/api/dialog/)
 * - [Drawer](/api/drawer/)
 * - [Menu](/api/menu/)
 * - [Popover](/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */

var Modal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Modal(inProps, ref) {
  var theme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__.useTheme)();
  var props = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__.getThemeProps)({
    name: 'MuiModal',
    props: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, inProps),
    theme: theme
  });

  var _props$BackdropCompon = props.BackdropComponent,
      BackdropComponent = _props$BackdropCompon === void 0 ? _SimpleBackdrop__WEBPACK_IMPORTED_MODULE_7__.default : _props$BackdropCompon,
      BackdropProps = props.BackdropProps,
      children = props.children,
      _props$closeAfterTran = props.closeAfterTransition,
      closeAfterTransition = _props$closeAfterTran === void 0 ? false : _props$closeAfterTran,
      container = props.container,
      _props$disableAutoFoc = props.disableAutoFocus,
      disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$disableBackdro = props.disableBackdropClick,
      disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro,
      _props$disableEnforce = props.disableEnforceFocus,
      disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
      _props$disableEscapeK = props.disableEscapeKeyDown,
      disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      _props$disableRestore = props.disableRestoreFocus,
      disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
      _props$disableScrollL = props.disableScrollLock,
      disableScrollLock = _props$disableScrollL === void 0 ? false : _props$disableScrollL,
      _props$hideBackdrop = props.hideBackdrop,
      hideBackdrop = _props$hideBackdrop === void 0 ? false : _props$hideBackdrop,
      _props$keepMounted = props.keepMounted,
      keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted,
      _props$manager = props.manager,
      manager = _props$manager === void 0 ? defaultManager : _props$manager,
      onBackdropClick = props.onBackdropClick,
      onClose = props.onClose,
      onEscapeKeyDown = props.onEscapeKeyDown,
      onRendered = props.onRendered,
      open = props.open,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["BackdropComponent", "BackdropProps", "children", "closeAfterTransition", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(true),
      exited = _React$useState[0],
      setExited = _React$useState[1];

  var modal = react__WEBPACK_IMPORTED_MODULE_2__.useRef({});
  var mountNodeRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  var modalRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__.default)(modalRef, ref);
  var hasTransition = getHasTransition(props);

  var getDoc = function getDoc() {
    return (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_9__.default)(mountNodeRef.current);
  };

  var getModal = function getModal() {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };

  var handleMounted = function handleMounted() {
    manager.mount(getModal(), {
      disableScrollLock: disableScrollLock
    }); // Fix a bug on Chrome where the scroll isn't initially 0.

    modalRef.current.scrollTop = 0;
  };

  var handleOpen = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_10__.default)(function () {
    var resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer); // The element was already mounted.

    if (modalRef.current) {
      handleMounted();
    }
  });
  var isTopModal = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    return manager.isTopModal(getModal());
  }, [manager]);
  var handlePortalRef = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_10__.default)(function (node) {
    mountNodeRef.current = node;

    if (!node) {
      return;
    }

    if (onRendered) {
      onRendered();
    }

    if (open && isTopModal()) {
      handleMounted();
    } else {
      (0,_ModalManager__WEBPACK_IMPORTED_MODULE_5__.ariaHidden)(modalRef.current, true);
    }
  });
  var handleClose = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    manager.remove(getModal());
  }, [manager]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    return function () {
      handleClose();
    };
  }, [handleClose]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);

  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }

  var handleEnter = function handleEnter() {
    setExited(false);
  };

  var handleExited = function handleExited() {
    setExited(true);

    if (closeAfterTransition) {
      handleClose();
    }
  };

  var handleBackdropClick = function handleBackdropClick(event) {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (!disableBackdropClick && onClose) {
      onClose(event, 'backdropClick');
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviours like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    if (event.key !== 'Escape' || !isTopModal()) {
      return;
    }

    if (onEscapeKeyDown) {
      onEscapeKeyDown(event);
    }

    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();

      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
    }
  };

  var inlineStyle = styles(theme || {
    zIndex: _styles_zIndex__WEBPACK_IMPORTED_MODULE_11__.default
  });
  var childProps = {};

  if (children.props.tabIndex === undefined) {
    childProps.tabIndex = children.props.tabIndex || '-1';
  } // It's a Transition like component


  if (hasTransition) {
    childProps.onEnter = (0,_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_12__.default)(handleEnter, children.props.onEnter);
    childProps.onExited = (0,_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_12__.default)(handleExited, children.props.onExited);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Portal__WEBPACK_IMPORTED_MODULE_13__.default, {
    ref: handlePortalRef,
    container: container,
    disablePortal: disablePortal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    ref: handleRef,
    onKeyDown: handleKeyDown,
    role: "presentation"
  }, other, {
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, inlineStyle.root, !open && exited ? inlineStyle.hidden : {}, other.style)
  }), hideBackdrop ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(BackdropComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    open: open,
    onClick: handleBackdropClick
  }, BackdropProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_14__.default, {
    disableEnforceFocus: disableEnforceFocus,
    disableAutoFocus: disableAutoFocus,
    disableRestoreFocus: disableRestoreFocus,
    getDoc: getDoc,
    isEnabled: isTopModal,
    open: open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(children, childProps))));
});
 true ? Modal.propTypes = {
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   */
  BackdropComponent: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),

  /**
   * Props applied to the [`Backdrop`](/api/backdrop/) element.
   */
  BackdropProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * A single child content element.
   */
  children: _material_ui_utils__WEBPACK_IMPORTED_MODULE_15__.elementAcceptingRef.isRequired,

  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   */
  closeAfterTransition: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * A HTML element, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_15__.HTMLElementType, prop_types__WEBPACK_IMPORTED_MODULE_4___default().instanceOf(react__WEBPACK_IMPORTED_MODULE_2__.Component), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)]),

  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, clicking the backdrop will not fire `onClose`.
   */
  disableBackdropClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, hitting escape will not fire `onClose`.
   */
  disableEscapeKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden.
   */
  disableRestoreFocus: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Disable the scroll lock behavior.
   */
  disableScrollLock: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the backdrop is not rendered.
   */
  hideBackdrop: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   */
  keepMounted: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * @ignore
   */
  manager: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the escape key is pressed,
   * `disableEscapeKeyDown` is false and the modal is in focus.
   */
  onEscapeKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired once the children has been mounted into the `container`.
   * It signals that the `open={true}` prop took effect.
   *
   * This prop will be deprecated and removed in v5, the ref can be used instead.
   */
  onRendered: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * If `true`, the modal is open.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Modal/ModalManager.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Modal/ModalManager.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ariaHidden": function() { return /* binding */ ariaHidden; },
/* harmony export */   "default": function() { return /* binding */ ModalManager; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getScrollbarSize */ "./node_modules/@material-ui/core/esm/utils/getScrollbarSize.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_ownerWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/ownerWindow */ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js");





 // Is a vertical scrollbar displayed?

function isOverflowing(container) {
  var doc = (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_3__.default)(container);

  if (doc.body === container) {
    return (0,_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_4__.default)(doc).innerWidth > doc.documentElement.clientWidth;
  }

  return container.scrollHeight > container.clientHeight;
}

function ariaHidden(node, show) {
  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}

function getPaddingRight(node) {
  return parseInt(window.getComputedStyle(node)['padding-right'], 10) || 0;
}

function ariaHiddenSiblings(container, mountNode, currentNode) {
  var nodesToExclude = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var show = arguments.length > 4 ? arguments[4] : undefined;
  var blacklist = [mountNode, currentNode].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(nodesToExclude));
  var blacklistTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE'];
  [].forEach.call(container.children, function (node) {
    if (node.nodeType === 1 && blacklist.indexOf(node) === -1 && blacklistTagNames.indexOf(node.tagName) === -1) {
      ariaHidden(node, show);
    }
  });
}

function findIndexOf(containerInfo, callback) {
  var idx = -1;
  containerInfo.some(function (item, index) {
    if (callback(item)) {
      idx = index;
      return true;
    }

    return false;
  });
  return idx;
}

function handleContainer(containerInfo, props) {
  var restoreStyle = [];
  var restorePaddings = [];
  var container = containerInfo.container;
  var fixedNodes;

  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      var scrollbarSize = (0,_utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_5__.default)();
      restoreStyle.push({
        value: container.style.paddingRight,
        key: 'padding-right',
        el: container
      }); // Use computed style, here to get the real padding to add our scrollbar width.

      container.style['padding-right'] = "".concat(getPaddingRight(container) + scrollbarSize, "px"); // .mui-fixed is a global helper.

      fixedNodes = (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_3__.default)(container).querySelectorAll('.mui-fixed');
      [].forEach.call(fixedNodes, function (node) {
        restorePaddings.push(node.style.paddingRight);
        node.style.paddingRight = "".concat(getPaddingRight(node) + scrollbarSize, "px");
      });
    } // Improve Gatsby support
    // https://css-tricks.com/snippets/css/force-vertical-scrollbar/


    var parent = container.parentElement;
    var scrollContainer = parent.nodeName === 'HTML' && window.getComputedStyle(parent)['overflow-y'] === 'scroll' ? parent : container; // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.

    restoreStyle.push({
      value: scrollContainer.style.overflow,
      key: 'overflow',
      el: scrollContainer
    });
    scrollContainer.style.overflow = 'hidden';
  }

  var restore = function restore() {
    if (fixedNodes) {
      [].forEach.call(fixedNodes, function (node, i) {
        if (restorePaddings[i]) {
          node.style.paddingRight = restorePaddings[i];
        } else {
          node.style.removeProperty('padding-right');
        }
      });
    }

    restoreStyle.forEach(function (_ref) {
      var value = _ref.value,
          el = _ref.el,
          key = _ref.key;

      if (value) {
        el.style.setProperty(key, value);
      } else {
        el.style.removeProperty(key);
      }
    });
  };

  return restore;
}

function getHiddenSiblings(container) {
  var hiddenSiblings = [];
  [].forEach.call(container.children, function (node) {
    if (node.getAttribute && node.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(node);
    }
  });
  return hiddenSiblings;
}
/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */


var ModalManager = /*#__PURE__*/function () {
  function ModalManager() {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ModalManager);

    // this.modals[modalIndex] = modal
    this.modals = []; // this.containers[containerIndex] = {
    //   modals: [],
    //   container,
    //   restore: null,
    // }

    this.containers = [];
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ModalManager, [{
    key: "add",
    value: function add(modal, container) {
      var modalIndex = this.modals.indexOf(modal);

      if (modalIndex !== -1) {
        return modalIndex;
      }

      modalIndex = this.modals.length;
      this.modals.push(modal); // If the modal we are adding is already in the DOM.

      if (modal.modalRef) {
        ariaHidden(modal.modalRef, false);
      }

      var hiddenSiblingNodes = getHiddenSiblings(container);
      ariaHiddenSiblings(container, modal.mountNode, modal.modalRef, hiddenSiblingNodes, true);
      var containerIndex = findIndexOf(this.containers, function (item) {
        return item.container === container;
      });

      if (containerIndex !== -1) {
        this.containers[containerIndex].modals.push(modal);
        return modalIndex;
      }

      this.containers.push({
        modals: [modal],
        container: container,
        restore: null,
        hiddenSiblingNodes: hiddenSiblingNodes
      });
      return modalIndex;
    }
  }, {
    key: "mount",
    value: function mount(modal, props) {
      var containerIndex = findIndexOf(this.containers, function (item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var containerInfo = this.containers[containerIndex];

      if (!containerInfo.restore) {
        containerInfo.restore = handleContainer(containerInfo, props);
      }
    }
  }, {
    key: "remove",
    value: function remove(modal) {
      var modalIndex = this.modals.indexOf(modal);

      if (modalIndex === -1) {
        return modalIndex;
      }

      var containerIndex = findIndexOf(this.containers, function (item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var containerInfo = this.containers[containerIndex];
      containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
      this.modals.splice(modalIndex, 1); // If that was the last modal in a container, clean up the container.

      if (containerInfo.modals.length === 0) {
        // The modal might be closed before it had the chance to be mounted in the DOM.
        if (containerInfo.restore) {
          containerInfo.restore();
        }

        if (modal.modalRef) {
          // In case the modal wasn't in the DOM yet.
          ariaHidden(modal.modalRef, true);
        }

        ariaHiddenSiblings(containerInfo.container, modal.mountNode, modal.modalRef, containerInfo.hiddenSiblingNodes, false);
        this.containers.splice(containerIndex, 1);
      } else {
        // Otherwise make sure the next top modal is visible to a screen reader.
        var nextTop = containerInfo.modals[containerInfo.modals.length - 1]; // as soon as a modal is adding its modalRef is undefined. it can't set
        // aria-hidden because the dom element doesn't exist either
        // when modal was unmounted before modalRef gets null

        if (nextTop.modalRef) {
          ariaHidden(nextTop.modalRef, false);
        }
      }

      return modalIndex;
    }
  }, {
    key: "isTopModal",
    value: function isTopModal(modal) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
    }
  }]);

  return ModalManager;
}();



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Modal/SimpleBackdrop.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Modal/SimpleBackdrop.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




var styles = {
  /* Styles applied to the root element. */
  root: {
    zIndex: -1,
    position: 'fixed',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent'
  },

  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: 'transparent'
  }
};
/**
 * @ignore - internal component.
 */

var SimpleBackdrop = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function SimpleBackdrop(props, ref) {
  var _props$invisible = props.invisible,
      invisible = _props$invisible === void 0 ? false : _props$invisible,
      open = props.open,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["invisible", "open"]);

  return open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    "aria-hidden": true,
    ref: ref
  }, other, {
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, styles.root, invisible ? styles.invisible : {}, other.style)
  })) : null;
});
 true ? SimpleBackdrop.propTypes = {
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   */
  invisible: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the backdrop is open.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (SimpleBackdrop);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Modal/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Modal/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "ModalManager": function() { return /* reexport safe */ _ModalManager__WEBPACK_IMPORTED_MODULE_1__.default; }
/* harmony export */ });
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./node_modules/@material-ui/core/esm/Modal/Modal.js");
/* harmony import */ var _ModalManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalManager */ "./node_modules/@material-ui/core/esm/Modal/ModalManager.js");



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NativeSelectInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NativeSelectInput */ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/svg-icons/ArrowDropDown */ "./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Input */ "./node_modules/@material-ui/core/esm/Input/index.js");










var styles = function styles(theme) {
  return {
    /* Styles applied to the select component `root` class. */
    root: {},

    /* Styles applied to the select component `select` class. */
    select: {
      '-moz-appearance': 'none',
      // Reset
      '-webkit-appearance': 'none',
      // Reset
      // When interacting quickly, the text can end up selected.
      // Native select can't be selected either.
      userSelect: 'none',
      borderRadius: 0,
      // Reset
      minWidth: 16,
      // So it doesn't collapse.
      cursor: 'pointer',
      '&:focus': {
        // Show that it's not an text input
        backgroundColor: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
        borderRadius: 0 // Reset Chrome style

      },
      // Remove IE 11 arrow
      '&::-ms-expand': {
        display: 'none'
      },
      '&$disabled': {
        cursor: 'default'
      },
      '&[multiple]': {
        height: 'auto'
      },
      '&:not([multiple]) option, &:not([multiple]) optgroup': {
        backgroundColor: theme.palette.background.paper
      },
      '&&': {
        paddingRight: 24
      }
    },

    /* Styles applied to the select component if `variant="filled"`. */
    filled: {
      '&&': {
        paddingRight: 32
      }
    },

    /* Styles applied to the select component if `variant="outlined"`. */
    outlined: {
      borderRadius: theme.shape.borderRadius,
      '&&': {
        paddingRight: 32
      }
    },

    /* Styles applied to the select component `selectMenu` class. */
    selectMenu: {
      height: 'auto',
      // Resets for multpile select with chips
      minHeight: '1.1876em',
      // Required for select\text-field height consistency
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },

    /* Pseudo-class applied to the select component `disabled` class. */
    disabled: {},

    /* Styles applied to the icon component. */
    icon: {
      // We use a position absolute over a flexbox in order to forward the pointer events
      // to the input and to support wrapping tags..
      position: 'absolute',
      right: 0,
      top: 'calc(50% - 12px)',
      // Center vertically
      pointerEvents: 'none',
      // Don't block pointer events on the select under the icon.
      color: theme.palette.action.active,
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    },

    /* Styles applied to the icon component if the popup is open. */
    iconOpen: {
      transform: 'rotate(180deg)'
    },

    /* Styles applied to the icon component if `variant="filled"`. */
    iconFilled: {
      right: 7
    },

    /* Styles applied to the icon component if `variant="outlined"`. */
    iconOutlined: {
      right: 7
    },

    /* Styles applied to the underlying native input component. */
    nativeInput: {
      bottom: 0,
      left: 0,
      position: 'absolute',
      opacity: 0,
      pointerEvents: 'none',
      width: '100%'
    }
  };
};
var defaultInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Input__WEBPACK_IMPORTED_MODULE_4__.default, null);
/**
 * An alternative to `<Select native />` with a much smaller bundle size footprint.
 */

var NativeSelect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function NativeSelect(props, ref) {
  var children = props.children,
      classes = props.classes,
      _props$IconComponent = props.IconComponent,
      IconComponent = _props$IconComponent === void 0 ? _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_5__.default : _props$IconComponent,
      _props$input = props.input,
      input = _props$input === void 0 ? defaultInput : _props$input,
      inputProps = props.inputProps,
      variant = props.variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "classes", "IconComponent", "input", "inputProps", "variant"]);

  var muiFormControl = (0,_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__.default)();
  var fcs = (0,_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_7__.default)({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(input, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    // Most of the logic is implemented in `NativeSelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: _NativeSelectInput__WEBPACK_IMPORTED_MODULE_8__.default,
    inputProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      children: children,
      classes: classes,
      IconComponent: IconComponent,
      variant: fcs.variant,
      type: undefined
    }, inputProps, input ? input.props.inputProps : {}),
    ref: ref
  }, other));
});
 true ? NativeSelect.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The icon that displays the arrow.
   */
  IconComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().element),

  /**
   * Attributes applied to the `select` element.
   */
  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The input value. The DOM API casts this to a string.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['filled', 'outlined', 'standard'])
} : 0;
NativeSelect.muiName = 'Select';
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__.default)(styles, {
  name: 'MuiNativeSelect'
})(NativeSelect));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");







/**
 * @ignore - internal component.
 */

var NativeSelectInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function NativeSelectInput(props, ref) {
  var classes = props.classes,
      className = props.className,
      disabled = props.disabled,
      IconComponent = props.IconComponent,
      inputRef = props.inputRef,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className", "disabled", "IconComponent", "inputRef", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("select", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, // TODO v5: merge root and select
    classes.select, classes[variant], className, disabled && classes.disabled),
    disabled: disabled,
    ref: inputRef || ref
  }, other)), props.multiple ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(IconComponent, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.icon, classes["icon".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__.default)(variant))], disabled && classes.disabled)
  }));
});
 true ? NativeSelectInput.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),

  /**
   * The CSS class name of the select element.
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the select will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The icon that displays the arrow.
   */
  IconComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType.isRequired),

  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__.refType,

  /**
   * @ignore
   */
  multiple: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The input value.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['standard', 'outlined', 'filled'])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (NativeSelectInput);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/OutlinedInput/NotchedOutline.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/OutlinedInput/NotchedOutline.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      top: -5,
      left: 0,
      margin: 0,
      padding: '0 8px',
      pointerEvents: 'none',
      borderRadius: 'inherit',
      borderStyle: 'solid',
      borderWidth: 1,
      overflow: 'hidden'
    },

    /* Styles applied to the legend element when `labelWidth` is provided. */
    legend: {
      textAlign: 'left',
      padding: 0,
      lineHeight: '11px',
      // sync with `height` in `legend` styles
      transition: theme.transitions.create('width', {
        duration: 150,
        easing: theme.transitions.easing.easeOut
      })
    },

    /* Styles applied to the legend element. */
    legendLabelled: {
      display: 'block',
      width: 'auto',
      textAlign: 'left',
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: '0.75em',
      visibility: 'hidden',
      maxWidth: 0.01,
      transition: theme.transitions.create('max-width', {
        duration: 50,
        easing: theme.transitions.easing.easeOut
      }),
      '& > span': {
        paddingLeft: 5,
        paddingRight: 5,
        display: 'inline-block'
      }
    },

    /* Styles applied to the legend element is notched. */
    legendNotched: {
      maxWidth: 1000,
      transition: theme.transitions.create('max-width', {
        duration: 100,
        easing: theme.transitions.easing.easeOut,
        delay: 50
      })
    }
  };
};
/**
 * @ignore - internal component.
 */

var NotchedOutline = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function NotchedOutline(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      label = props.label,
      labelWidthProp = props.labelWidth,
      notched = props.notched,
      style = props.style,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(props, ["children", "classes", "className", "label", "labelWidth", "notched", "style"]);

  var theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_6__.default)();
  var align = theme.direction === 'rtl' ? 'right' : 'left';

  if (label !== undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("fieldset", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
      "aria-hidden": true,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(classes.root, className),
      ref: ref,
      style: style
    }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("legend", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(classes.legendLabelled, notched && classes.legendNotched)
    }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, label) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: '&#8203;'
      }
    })));
  }

  var labelWidth = labelWidthProp > 0 ? labelWidthProp * 0.75 + 8 : 0.01;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("fieldset", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    "aria-hidden": true,
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, "padding".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__.default)(align)), 8), style),
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(classes.root, className),
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("legend", {
    className: classes.legend,
    style: {
      // IE 11: fieldset with legend does not render
      // a border radius. This maintains consistency
      // by always having a legend rendered
      width: notched ? labelWidth : 0.01
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: '&#8203;'
    }
  })));
});
 true ? NotchedOutline.propTypes = {
  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * The label.
   */
  label: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),

  /**
   * The width of the label.
   */
  labelWidth: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number.isRequired),

  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired),

  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__.default)(styles, {
  name: 'PrivateNotchedOutline'
})(NotchedOutline));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _NotchedOutline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NotchedOutline */ "./node_modules/@material-ui/core/esm/OutlinedInput/NotchedOutline.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");









var styles = function styles(theme) {
  var borderColor = theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      '&:hover $notchedOutline': {
        borderColor: theme.palette.text.primary
      },
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        '&:hover $notchedOutline': {
          borderColor: borderColor
        }
      },
      '&$focused $notchedOutline': {
        borderColor: theme.palette.primary.main,
        borderWidth: 2
      },
      '&$error $notchedOutline': {
        borderColor: theme.palette.error.main
      },
      '&$disabled $notchedOutline': {
        borderColor: theme.palette.action.disabled
      }
    },

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {
      '&$focused $notchedOutline': {
        borderColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {
      paddingLeft: 14
    },

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {
      paddingRight: 14
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: '18.5px 14px',
      '&$marginDense': {
        paddingTop: 10.5,
        paddingBottom: 10.5
      }
    },

    /* Styles applied to the `NotchedOutline` element. */
    notchedOutline: {
      borderColor: borderColor
    },

    /* Styles applied to the `input` element. */
    input: {
      padding: '18.5px 14px',
      '&:-webkit-autofill': {
        WebkitBoxShadow: theme.palette.type === 'light' ? null : '0 0 0 100px #266798 inset',
        WebkitTextFillColor: theme.palette.type === 'light' ? null : '#fff',
        caretColor: theme.palette.type === 'light' ? null : '#fff',
        borderRadius: 'inherit'
      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 10.5,
      paddingBottom: 10.5
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      padding: 0
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {
      paddingLeft: 0
    },

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {
      paddingRight: 0
    }
  };
};
var OutlinedInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function OutlinedInput(props, ref) {
  var classes = props.classes,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      label = props.label,
      _props$labelWidth = props.labelWidth,
      labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      notched = props.notched,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "fullWidth", "inputComponent", "label", "labelWidth", "multiline", "notched", "type"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InputBase__WEBPACK_IMPORTED_MODULE_5__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    renderSuffix: function renderSuffix(state) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_NotchedOutline__WEBPACK_IMPORTED_MODULE_6__.default, {
        className: classes.notchedOutline,
        label: label,
        labelWidth: labelWidth,
        notched: typeof notched !== 'undefined' ? notched : Boolean(state.startAdornment || state.filled || state.focused)
      });
    },
    classes: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, classes, {
      root: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, classes.underline),
      notchedOutline: null
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other));
});
 true ? OutlinedInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The id of the `input` element.
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_7__.refType,

  /**
   * The label of the input. It is only used for layout. The actual labelling
   * is handled by `InputLabel`. If specified `labelWidth` is ignored.
   */
  label: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * The width of the label. Is ignored if `label` is provided. Prefer `label`
   * if the input label appears with a strike through.
   */
  labelWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Name attribute of the `input` element.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the `input` element will be required.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
} : 0;
OutlinedInput.muiName = 'Input';
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__.default)(styles, {
  name: 'MuiOutlinedInput'
})(OutlinedInput));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/OutlinedInput/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _OutlinedInput__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _OutlinedInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Popover/Popover.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Popover/Popover.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOffsetTop": function() { return /* binding */ getOffsetTop; },
/* harmony export */   "getOffsetLeft": function() { return /* binding */ getOffsetLeft; },
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_ownerWindow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/ownerWindow */ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js");
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/createChainedFunction */ "./node_modules/@material-ui/core/esm/utils/createChainedFunction.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _Grow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");















function getOffsetTop(rect, vertical) {
  var offset = 0;

  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }

  return offset;
}
function getOffsetLeft(rect, horizontal) {
  var offset = 0;

  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }

  return offset;
}

function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map(function (n) {
    return typeof n === 'number' ? "".concat(n, "px") : n;
  }).join(' ');
} // Sum the scrollTop between two elements.


function getScrollParent(parent, child) {
  var element = child;
  var scrollTop = 0;

  while (element && element !== parent) {
    element = element.parentElement;
    scrollTop += element.scrollTop;
  }

  return scrollTop;
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

var styles = {
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the `Paper` component. */
  paper: {
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    // So we see the popover when it's empty.
    // It's most likely on issue on userland.
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  }
};
var Popover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Popover(props, ref) {
  var action = props.action,
      anchorEl = props.anchorEl,
      _props$anchorOrigin = props.anchorOrigin,
      anchorOrigin = _props$anchorOrigin === void 0 ? {
    vertical: 'top',
    horizontal: 'left'
  } : _props$anchorOrigin,
      anchorPosition = props.anchorPosition,
      _props$anchorReferenc = props.anchorReference,
      anchorReference = _props$anchorReferenc === void 0 ? 'anchorEl' : _props$anchorReferenc,
      children = props.children,
      classes = props.classes,
      className = props.className,
      containerProp = props.container,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 8 : _props$elevation,
      getContentAnchorEl = props.getContentAnchorEl,
      _props$marginThreshol = props.marginThreshold,
      marginThreshold = _props$marginThreshol === void 0 ? 16 : _props$marginThreshol,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      open = props.open,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      _props$transformOrigi = props.transformOrigin,
      transformOrigin = _props$transformOrigi === void 0 ? {
    vertical: 'top',
    horizontal: 'left'
  } : _props$transformOrigi,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Grow__WEBPACK_IMPORTED_MODULE_6__.default : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDurationProp = _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
      _props$TransitionProp = props.TransitionProps,
      TransitionProps = _props$TransitionProp === void 0 ? {} : _props$TransitionProp,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "classes", "className", "container", "elevation", "getContentAnchorEl", "marginThreshold", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"]);

  var paperRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(); // Returns the top/left offset of the position
  // to attach to on the anchor element (or body if none is provided)

  var getAnchorOffset = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (contentAnchorOffset) {
    if (anchorReference === 'anchorPosition') {
      if (true) {
        if (!anchorPosition) {
          console.error('Material-UI: You need to provide a `anchorPosition` prop when using ' + '<Popover anchorReference="anchorPosition" />.');
        }
      }

      return anchorPosition;
    }

    var resolvedAnchorEl = getAnchorEl(anchorEl); // If an anchor element wasn't provided, just use the parent body element of this Popover

    var anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_7__.default)(paperRef.current).body;
    var anchorRect = anchorElement.getBoundingClientRect();

    if (true) {
      var box = anchorElement.getBoundingClientRect();

      if ( true && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
        console.warn(['Material-UI: The `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
      }
    }

    var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorVertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]); // Returns the vertical offset of inner content to anchor the transform on if provided

  var getContentAnchorOffset = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (element) {
    var contentAnchorOffset = 0;

    if (getContentAnchorEl && anchorReference === 'anchorEl') {
      var contentAnchorEl = getContentAnchorEl(element);

      if (contentAnchorEl && element.contains(contentAnchorEl)) {
        var scrollTop = getScrollParent(element, contentAnchorEl);
        contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
      } // != the default value


      if (true) {
        if (anchorOrigin.vertical !== 'top') {
          console.error(['Material-UI: You can not change the default `anchorOrigin.vertical` value ', 'when also providing the `getContentAnchorEl` prop to the popover component.', 'Only use one of the two props.', 'Set `getContentAnchorEl` to `null | undefined`' + ' or leave `anchorOrigin.vertical` unchanged.'].join('\n'));
        }
      }
    }

    return contentAnchorOffset;
  }, [anchorOrigin.vertical, anchorReference, getContentAnchorEl]); // Return the base transform origin using the element
  // and taking the content anchor offset into account if in use

  var getTransformOrigin = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (elemRect) {
    var contentAnchorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  var getPositioningStyle = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (element) {
    // Check if the parent has requested anchoring on an inner content node
    var contentAnchorOffset = getContentAnchorOffset(element);
    var elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    }; // Get the transform origin point on the element itself

    var elemTransformOrigin = getTransformOrigin(elemRect, contentAnchorOffset);

    if (anchorReference === 'none') {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    } // Get the offset of of the anchoring element


    var anchorOffset = getAnchorOffset(contentAnchorOffset); // Calculate element positioning

    var top = anchorOffset.top - elemTransformOrigin.vertical;
    var left = anchorOffset.left - elemTransformOrigin.horizontal;
    var bottom = top + elemRect.height;
    var right = left + elemRect.width; // Use the parent window of the anchorEl if provided

    var containerWindow = (0,_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_8__.default)(getAnchorEl(anchorEl)); // Window thresholds taking required margin into account

    var heightThreshold = containerWindow.innerHeight - marginThreshold;
    var widthThreshold = containerWindow.innerWidth - marginThreshold; // Check if the vertical axis needs shifting

    if (top < marginThreshold) {
      var diff = top - marginThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (bottom > heightThreshold) {
      var _diff = bottom - heightThreshold;

      top -= _diff;
      elemTransformOrigin.vertical += _diff;
    }

    if (true) {
      if (elemRect.height > heightThreshold && elemRect.height && heightThreshold) {
        console.error(['Material-UI: The popover component is too tall.', "Some part of it can not be seen on the screen (".concat(elemRect.height - heightThreshold, "px)."), 'Please consider adding a `max-height` to improve the user-experience.'].join('\n'));
      }
    } // Check if the horizontal axis needs shifting


    if (left < marginThreshold) {
      var _diff2 = left - marginThreshold;

      left -= _diff2;
      elemTransformOrigin.horizontal += _diff2;
    } else if (right > widthThreshold) {
      var _diff3 = right - widthThreshold;

      left -= _diff3;
      elemTransformOrigin.horizontal += _diff3;
    }

    return {
      top: "".concat(Math.round(top), "px"),
      left: "".concat(Math.round(left), "px"),
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getContentAnchorOffset, getTransformOrigin, marginThreshold]);
  var setPositioningStyles = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    var element = paperRef.current;

    if (!element) {
      return;
    }

    var positioning = getPositioningStyle(element);

    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }

    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }

    element.style.transformOrigin = positioning.transformOrigin;
  }, [getPositioningStyle]);

  var handleEntering = function handleEntering(element, isAppearing) {
    if (onEntering) {
      onEntering(element, isAppearing);
    }

    setPositioningStyles();
  };

  var handlePaperRef = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (instance) {
    // #StrictMode ready
    paperRef.current = react_dom__WEBPACK_IMPORTED_MODULE_4__.findDOMNode(instance);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (open) {
      setPositioningStyles();
    }
  });
  react__WEBPACK_IMPORTED_MODULE_2__.useImperativeHandle(action, function () {
    return open ? {
      updatePosition: function updatePosition() {
        setPositioningStyles();
      }
    } : null;
  }, [open, setPositioningStyles]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (!open) {
      return undefined;
    }

    var handleResize = (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_9__.default)(function () {
      setPositioningStyles();
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [open, setPositioningStyles]);
  var transitionDuration = transitionDurationProp;

  if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
    transitionDuration = undefined;
  } // If the container prop is provided, use that
  // If the anchorEl prop is provided, use its parent body element as the container
  // If neither are provided let the Modal take care of choosing the container


  var container = containerProp || (anchorEl ? (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_7__.default)(getAnchorEl(anchorEl)).body : undefined);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Modal__WEBPACK_IMPORTED_MODULE_10__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    container: container,
    open: open,
    ref: ref,
    BackdropProps: {
      invisible: true
    },
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(classes.root, className)
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    appear: true,
    in: open,
    onEnter: onEnter,
    onEntered: onEntered,
    onExit: onExit,
    onExited: onExited,
    onExiting: onExiting,
    timeout: transitionDuration
  }, TransitionProps, {
    onEntering: (0,_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_11__.default)(handleEntering, TransitionProps.onEntering)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Paper__WEBPACK_IMPORTED_MODULE_12__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    elevation: elevation,
    ref: handlePaperRef
  }, PaperProps, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(classes.paper, PaperProps.className)
  }), children)));
});
 true ? Popover.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: _material_ui_utils__WEBPACK_IMPORTED_MODULE_13__.refType,

  /**
   * A HTML element, or a function that returns it.
   * It's used to set the position of the popover.
   */
  anchorEl: (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_13__.chainPropTypes)(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_13__.HTMLElementType, (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)]), function (props) {
    if (props.open && (!props.anchorReference || props.anchorReference === 'anchorEl')) {
      var resolvedAnchorEl = getAnchorEl(props.anchorEl);

      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        var box = resolvedAnchorEl.getBoundingClientRect();

        if ( true && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(['Material-UI: The `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
        }
      } else {
        return new Error(['Material-UI: The `anchorEl` prop provided to the component is invalid.', "It should be an Element instance but it's `".concat(resolvedAnchorEl, "` instead.")].join('\n'));
      }
    }

    return null;
  }),

  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   */
  anchorOrigin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    horizontal: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['center', 'left', 'right']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)]).isRequired,
    vertical: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['bottom', 'center', 'top']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)]).isRequired
  }),

  /**
   * This is the position that may be used
   * to set the position of the popover.
   * The coordinates are relative to
   * the application's client area.
   */
  anchorPosition: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    left: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.isRequired),
    top: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.isRequired)
  }),

  /**
   * This determines which anchor prop to refer to to set
   * the position of the popover.
   */
  anchorReference: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['anchorEl', 'anchorPosition', 'none']),

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * A HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_13__.HTMLElementType, prop_types__WEBPACK_IMPORTED_MODULE_3___default().instanceOf(react__WEBPACK_IMPORTED_MODULE_2__.Component), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)]),

  /**
   * The elevation of the popover.
   */
  elevation: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),

  /**
   * This function is called in order to retrieve the content anchor element.
   * It's the opposite of the `anchorEl` prop.
   * The content anchor element should be an element inside the popover.
   * It's used to correctly scroll and set the position of the popover.
   * The positioning strategy tries to make the content anchor element just above the
   * anchor element.
   */
  getContentAnchorEl: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Specifies how close to the edge of the window the popover can appear.
   */
  marginThreshold: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),

  /**
   * Callback fired when the component requests to be closed.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired before the component is entering.
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the component has entered.
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the component is entering.
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired before the component is exiting.
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the component has exited.
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the component is exiting.
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * If `true`, the popover is visible.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired),

  /**
   * Props applied to the [`Paper`](/api/paper/) element.
   */
  PaperProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    component: _material_ui_utils__WEBPACK_IMPORTED_MODULE_13__.elementTypeAcceptingRef
  }),

  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   */
  transformOrigin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    horizontal: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['center', 'left', 'right']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)]).isRequired,
    vertical: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['bottom', 'center', 'top']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)]).isRequired
  }),

  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   */
  TransitionComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['auto']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
  })]),

  /**
   * Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.
   */
  TransitionProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_14__.default)(styles, {
  name: 'MuiPopover'
})(Popover));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Popover/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Popover/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Popover__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popover */ "./node_modules/@material-ui/core/esm/Popover/Popover.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Portal/Portal.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Portal/Portal.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");







function getContainer(container) {
  container = typeof container === 'function' ? container() : container; // #StrictMode ready

  return react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(container);
}

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */

var Portal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Portal(props, ref) {
  var children = props.children,
      container = props.container,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      onRendered = props.onRendered;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      mountNode = _React$useState[0],
      setMountNode = _React$useState[1];

  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children) ? children.ref : null, ref);
  useEnhancedEffect(function () {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect(function () {
    if (mountNode && !disablePortal) {
      (0,_utils_setRef__WEBPACK_IMPORTED_MODULE_4__.default)(ref, mountNode);
      return function () {
        (0,_utils_setRef__WEBPACK_IMPORTED_MODULE_4__.default)(ref, null);
      };
    }

    return undefined;
  }, [ref, mountNode, disablePortal]);
  useEnhancedEffect(function () {
    if (onRendered && (mountNode || disablePortal)) {
      onRendered();
    }
  }, [onRendered, mountNode, disablePortal]);

  if (disablePortal) {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
        ref: handleRef
      });
    }

    return children;
  }

  return mountNode ? /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(children, mountNode) : mountNode;
});
 true ? Portal.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The children to render into the `container`.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),

  /**
   * A HTML element, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.HTMLElementType, prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(react__WEBPACK_IMPORTED_MODULE_0__.Component), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)]),

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * Callback fired once the children has been mounted into the `container`.
   *
   * This prop will be deprecated and removed in v5, the ref can be used instead.
   */
  onRendered: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
} : 0;

if (true) {
  // eslint-disable-next-line
  Portal['propTypes' + ''] = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.exactProp)(Portal.propTypes);
}

/* harmony default export */ __webpack_exports__["default"] = (Portal);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Portal/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Portal/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Portal */ "./node_modules/@material-ui/core/esm/Portal/Portal.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Select/Select.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Select/Select.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _SelectInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SelectInput */ "./node_modules/@material-ui/core/esm/Select/SelectInput.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../internal/svg-icons/ArrowDropDown */ "./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _NativeSelect_NativeSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NativeSelect/NativeSelect */ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js");
/* harmony import */ var _NativeSelect_NativeSelectInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../NativeSelect/NativeSelectInput */ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js");
/* harmony import */ var _FilledInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FilledInput */ "./node_modules/@material-ui/core/esm/FilledInput/index.js");
/* harmony import */ var _OutlinedInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js");















var styles = _NativeSelect_NativeSelect__WEBPACK_IMPORTED_MODULE_4__.styles;

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Input__WEBPACK_IMPORTED_MODULE_5__.default, null);

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_FilledInput__WEBPACK_IMPORTED_MODULE_6__.default, null);

var Select = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Select(props, ref) {
  var _props$autoWidth = props.autoWidth,
      autoWidth = _props$autoWidth === void 0 ? false : _props$autoWidth,
      children = props.children,
      classes = props.classes,
      _props$displayEmpty = props.displayEmpty,
      displayEmpty = _props$displayEmpty === void 0 ? false : _props$displayEmpty,
      _props$IconComponent = props.IconComponent,
      IconComponent = _props$IconComponent === void 0 ? _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_7__.default : _props$IconComponent,
      id = props.id,
      input = props.input,
      inputProps = props.inputProps,
      label = props.label,
      labelId = props.labelId,
      _props$labelWidth = props.labelWidth,
      labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth,
      MenuProps = props.MenuProps,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? false : _props$multiple,
      _props$native = props.native,
      native = _props$native === void 0 ? false : _props$native,
      onClose = props.onClose,
      onOpen = props.onOpen,
      open = props.open,
      renderValue = props.renderValue,
      SelectDisplayProps = props.SelectDisplayProps,
      _props$variant = props.variant,
      variantProps = _props$variant === void 0 ? 'standard' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["autoWidth", "children", "classes", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "labelWidth", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"]);

  var inputComponent = native ? _NativeSelect_NativeSelectInput__WEBPACK_IMPORTED_MODULE_8__.default : _SelectInput__WEBPACK_IMPORTED_MODULE_9__.default;
  var muiFormControl = (0,_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_10__.default)();
  var fcs = (0,_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_11__.default)({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant']
  });
  var variant = fcs.variant || variantProps;
  var InputComponent = input || {
    standard: _ref,
    outlined: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_OutlinedInput__WEBPACK_IMPORTED_MODULE_12__.default, {
      label: label,
      labelWidth: labelWidth
    }),
    filled: _ref2
  }[variant];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(InputComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    // Most of the logic is implemented in `SelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: inputComponent,
    inputProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      children: children,
      IconComponent: IconComponent,
      variant: variant,
      type: undefined,
      // We render a select. We can ignore the type provided by the `Input`.
      multiple: multiple
    }, native ? {
      id: id
    } : {
      autoWidth: autoWidth,
      displayEmpty: displayEmpty,
      labelId: labelId,
      MenuProps: MenuProps,
      onClose: onClose,
      onOpen: onOpen,
      open: open,
      renderValue: renderValue,
      SelectDisplayProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        id: id
      }, SelectDisplayProps)
    }, inputProps, {
      classes: inputProps ? (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_13__.mergeClasses)({
        baseClasses: classes,
        newClasses: inputProps.classes,
        Component: Select
      }) : classes
    }, input ? input.props.inputProps : {}),
    ref: ref
  }, other));
});
 true ? Select.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function should be passed to the `renderValue` prop which returns the value to be displayed when no items are selected.
   * You can only use it when the `native` prop is `false` (default).
   */
  displayEmpty: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The icon that displays the arrow.
   */
  IconComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().element),

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * See [OutlinedInput#label](/api/outlined-input/#props)
   */
  label: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * See [OutlinedInput#label](/api/outlined-input/#props)
   */
  labelWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),

  /**
   * Props applied to the [`Menu`](/api/menu/) element.
   */
  MenuProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the component will be using a native `select` element.
   */
  native: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Control `select` open state.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The input value. Providing an empty string will select no options.
   * This prop is required when the `native` prop is `false` (default).
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['filled', 'outlined', 'standard'])
} : 0;
Select.muiName = 'Select';
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_14__.default)(styles, {
  name: 'MuiSelect'
})(Select));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Select/SelectInput.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Select/SelectInput.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Menu/Menu */ "./node_modules/@material-ui/core/esm/Menu/Menu.js");
/* harmony import */ var _InputBase_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../InputBase/utils */ "./node_modules/@material-ui/core/esm/InputBase/utils.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_useControlled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useControlled */ "./node_modules/@material-ui/core/esm/utils/useControlled.js");

















function areEqualValues(a, b) {
  if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__.default)(b) === 'object' && b !== null) {
    return a === b;
  }

  return String(a) === String(b);
}

function isEmpty(display) {
  return display == null || typeof display === 'string' && !display.trim();
}
/**
 * @ignore - internal component.
 */


var SelectInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.forwardRef(function SelectInput(props, ref) {
  var ariaLabel = props['aria-label'],
      autoFocus = props.autoFocus,
      autoWidth = props.autoWidth,
      children = props.children,
      classes = props.classes,
      className = props.className,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      displayEmpty = props.displayEmpty,
      IconComponent = props.IconComponent,
      inputRefProp = props.inputRef,
      labelId = props.labelId,
      _props$MenuProps = props.MenuProps,
      MenuProps = _props$MenuProps === void 0 ? {} : _props$MenuProps,
      multiple = props.multiple,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onClose = props.onClose,
      onFocus = props.onFocus,
      onOpen = props.onOpen,
      openProp = props.open,
      readOnly = props.readOnly,
      renderValue = props.renderValue,
      _props$SelectDisplayP = props.SelectDisplayProps,
      SelectDisplayProps = _props$SelectDisplayP === void 0 ? {} : _props$SelectDisplayP,
      tabIndexProp = props.tabIndex,
      type = props.type,
      valueProp = props.value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(props, ["aria-label", "autoFocus", "autoWidth", "children", "classes", "className", "defaultValue", "disabled", "displayEmpty", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"]);

  var _useControlled = (0,_utils_useControlled__WEBPACK_IMPORTED_MODULE_8__.default)({
    controlled: valueProp,
    default: defaultValue,
    name: 'Select'
  }),
      _useControlled2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useControlled, 2),
      value = _useControlled2[0],
      setValue = _useControlled2[1];

  var inputRef = react__WEBPACK_IMPORTED_MODULE_4__.useRef(null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__.useState(null),
      displayNode = _React$useState[0],
      setDisplayNode = _React$useState[1];

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_4__.useRef(openProp != null),
      isOpenControlled = _React$useRef.current;

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_4__.useState(),
      menuMinWidthState = _React$useState2[0],
      setMenuMinWidthState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4__.useState(false),
      openState = _React$useState3[0],
      setOpenState = _React$useState3[1];

  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__.default)(ref, inputRefProp);
  react__WEBPACK_IMPORTED_MODULE_4__.useImperativeHandle(handleRef, function () {
    return {
      focus: function focus() {
        displayNode.focus();
      },
      node: inputRef.current,
      value: value
    };
  }, [displayNode, value]);
  react__WEBPACK_IMPORTED_MODULE_4__.useEffect(function () {
    if (autoFocus && displayNode) {
      displayNode.focus();
    }
  }, [autoFocus, displayNode]);
  react__WEBPACK_IMPORTED_MODULE_4__.useEffect(function () {
    if (displayNode) {
      var label = (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_10__.default)(displayNode).getElementById(labelId);

      if (label) {
        var handler = function handler() {
          if (getSelection().isCollapsed) {
            displayNode.focus();
          }
        };

        label.addEventListener('click', handler);
        return function () {
          label.removeEventListener('click', handler);
        };
      }
    }

    return undefined;
  }, [labelId, displayNode]);

  var update = function update(open, event) {
    if (open) {
      if (onOpen) {
        onOpen(event);
      }
    } else if (onClose) {
      onClose(event);
    }

    if (!isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : displayNode.clientWidth);
      setOpenState(open);
    }
  };

  var handleMouseDown = function handleMouseDown(event) {
    // Ignore everything but left-click
    if (event.button !== 0) {
      return;
    } // Hijack the default focus behavior.


    event.preventDefault();
    displayNode.focus();
    update(true, event);
  };

  var handleClose = function handleClose(event) {
    update(false, event);
  };

  var childrenArray = react__WEBPACK_IMPORTED_MODULE_4__.Children.toArray(children); // Support autofill.

  var handleChange = function handleChange(event) {
    var index = childrenArray.map(function (child) {
      return child.props.value;
    }).indexOf(event.target.value);

    if (index === -1) {
      return;
    }

    var child = childrenArray[index];
    setValue(child.props.value);

    if (onChange) {
      onChange(event, child);
    }
  };

  var handleItemClick = function handleItemClick(child) {
    return function (event) {
      if (!multiple) {
        update(false, event);
      }

      var newValue;

      if (multiple) {
        newValue = Array.isArray(value) ? value.slice() : [];
        var itemIndex = value.indexOf(child.props.value);

        if (itemIndex === -1) {
          newValue.push(child.props.value);
        } else {
          newValue.splice(itemIndex, 1);
        }
      } else {
        newValue = child.props.value;
      }

      if (child.props.onClick) {
        child.props.onClick(event);
      }

      if (value === newValue) {
        return;
      }

      setValue(newValue);

      if (onChange) {
        event.persist(); // Preact support, target is read only property on a native event.

        Object.defineProperty(event, 'target', {
          writable: true,
          value: {
            value: newValue,
            name: name
          }
        });
        onChange(event, child);
      }
    };
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (!readOnly) {
      var validKeys = [' ', 'ArrowUp', 'ArrowDown', // The native select doesn't respond to enter on MacOS, but it's recommended by
      // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
      'Enter'];

      if (validKeys.indexOf(event.key) !== -1) {
        event.preventDefault();
        update(true, event);
      }
    }
  };

  var open = displayNode !== null && (isOpenControlled ? openProp : openState);

  var handleBlur = function handleBlur(event) {
    // if open event.stopImmediatePropagation
    if (!open && onBlur) {
      event.persist(); // Preact support, target is read only property on a native event.

      Object.defineProperty(event, 'target', {
        writable: true,
        value: {
          value: value,
          name: name
        }
      });
      onBlur(event);
    }
  };

  delete other['aria-invalid'];
  var display;
  var displaySingle;
  var displayMultiple = [];
  var computeDisplay = false;
  var foundMatch = false; // No need to display any value if the field is empty.

  if ((0,_InputBase_utils__WEBPACK_IMPORTED_MODULE_11__.isFilled)({
    value: value
  }) || displayEmpty) {
    if (renderValue) {
      display = renderValue(value);
    } else {
      computeDisplay = true;
    }
  }

  var items = childrenArray.map(function (child) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.isValidElement(child)) {
      return null;
    }

    if (true) {
      if ((0,react_is__WEBPACK_IMPORTED_MODULE_5__.isFragment)(child)) {
        console.error(["Material-UI: The Select component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    var selected;

    if (multiple) {
      if (!Array.isArray(value)) {
        throw new Error( true ? "Material-UI: The `value` prop must be an array when using the `Select` component with `multiple`." : 0);
      }

      selected = value.some(function (v) {
        return areEqualValues(v, child.props.value);
      });

      if (selected && computeDisplay) {
        displayMultiple.push(child.props.children);
      }
    } else {
      selected = areEqualValues(value, child.props.value);

      if (selected && computeDisplay) {
        displaySingle = child.props.children;
      }
    }

    if (selected) {
      foundMatch = true;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.cloneElement(child, {
      'aria-selected': selected ? 'true' : undefined,
      onClick: handleItemClick(child),
      onKeyUp: function onKeyUp(event) {
        if (event.key === ' ') {
          // otherwise our MenuItems dispatches a click event
          // it's not behavior of the native <option> and causes
          // the select to close immediately since we open on space keydown
          event.preventDefault();
        }

        if (child.props.onKeyUp) {
          child.props.onKeyUp(event);
        }
      },
      role: 'option',
      selected: selected,
      value: undefined,
      // The value is most likely not a valid HTML attribute.
      'data-value': child.props.value // Instead, we provide it as a data attribute.

    });
  });

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_4__.useEffect(function () {
      if (!foundMatch && !multiple && value !== '') {
        var values = childrenArray.map(function (child) {
          return child.props.value;
        });
        console.warn(["Material-UI: You have provided an out-of-range value `".concat(value, "` for the select ").concat(name ? "(name=\"".concat(name, "\") ") : '', "component."), "Consider providing a value that matches one of the available options or ''.", "The available values are ".concat(values.filter(function (x) {
          return x != null;
        }).map(function (x) {
          return "`".concat(x, "`");
        }).join(', ') || '""', ".")].join('\n'));
      }
    }, [foundMatch, childrenArray, multiple, name, value]);
  }

  if (computeDisplay) {
    display = multiple ? displayMultiple.join(', ') : displaySingle;
  } // Avoid performing a layout computation in the render method.


  var menuMinWidth = menuMinWidthState;

  if (!autoWidth && isOpenControlled && displayNode) {
    menuMinWidth = displayNode.clientWidth;
  }

  var tabIndex;

  if (typeof tabIndexProp !== 'undefined') {
    tabIndex = tabIndexProp;
  } else {
    tabIndex = disabled ? null : 0;
  }

  var buttonId = SelectDisplayProps.id || (name ? "mui-component-select-".concat(name) : undefined);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__.default)(classes.root, // TODO v5: merge root and select
    classes.select, classes.selectMenu, classes[variant], className, disabled && classes.disabled),
    ref: setDisplayNode,
    tabIndex: tabIndex,
    role: "button",
    "aria-disabled": disabled ? 'true' : undefined,
    "aria-expanded": open ? 'true' : undefined,
    "aria-haspopup": "listbox",
    "aria-label": ariaLabel,
    "aria-labelledby": [labelId, buttonId].filter(Boolean).join(' ') || undefined,
    onKeyDown: handleKeyDown,
    onMouseDown: disabled || readOnly ? null : handleMouseDown,
    onBlur: handleBlur,
    onFocus: onFocus
  }, SelectDisplayProps, {
    // The id is required for proper a11y
    id: buttonId
  }), isEmpty(display) ?
  /*#__PURE__*/
  // eslint-disable-next-line react/no-danger
  react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: '&#8203;'
    }
  }) : display), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    value: Array.isArray(value) ? value.join(',') : value,
    name: name,
    ref: inputRef,
    "aria-hidden": true,
    onChange: handleChange,
    tabIndex: -1,
    className: classes.nativeInput,
    autoFocus: autoFocus
  }, other)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(IconComponent, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__.default)(classes.icon, classes["icon".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_12__.default)(variant))], open && classes.iconOpen, disabled && classes.disabled)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Menu_Menu__WEBPACK_IMPORTED_MODULE_13__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    id: "menu-".concat(name || ''),
    anchorEl: displayNode,
    open: open,
    onClose: handleClose
  }, MenuProps, {
    MenuListProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      'aria-labelledby': labelId,
      role: 'listbox',
      disableListWrap: true
    }, MenuProps.MenuListProps),
    PaperProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, MenuProps.PaperProps, {
      style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        minWidth: menuMinWidth
      }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
    })
  }), items));
});
 true ? SelectInput.propTypes = {
  /**
   * @ignore
   */
  'aria-label': (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),

  /**
   * @ignore
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object.isRequired),

  /**
   * The CSS class name of the select element.
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),

  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().any),

  /**
   * If `true`, the select will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * The icon that displays the arrow.
   */
  IconComponent: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().elementType.isRequired),

  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_14__.refType,

  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),

  /**
   * Props applied to the [`Menu`](/api/menu/) element.
   */
  MenuProps: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),

  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),

  /**
   * @ignore
   */
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * @ignore
   */
  onFocus: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Control `select` open state.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * @ignore
   */
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),

  /**
   * @ignore
   */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)]),

  /**
   * @ignore
   */
  type: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().any),

  /**
   * The input value.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().any),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(['standard', 'outlined', 'filled'])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (SelectInput);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Select/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Select/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Select__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select */ "./node_modules/@material-ui/core/esm/Select/Select.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TextField/TextField.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TextField/TextField.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _FilledInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FilledInput */ "./node_modules/@material-ui/core/esm/FilledInput/index.js");
/* harmony import */ var _OutlinedInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js");
/* harmony import */ var _InputLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _FormHelperText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");














var variantComponent = {
  standard: _Input__WEBPACK_IMPORTED_MODULE_5__.default,
  filled: _FilledInput__WEBPACK_IMPORTED_MODULE_6__.default,
  outlined: _OutlinedInput__WEBPACK_IMPORTED_MODULE_7__.default
};
var styles = {
  /* Styles applied to the root element. */
  root: {}
};
/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 *
 * - [FormControl](/api/form-control/)
 * - [InputLabel](/api/input-label/)
 * - [FilledInput](/api/filled-input/)
 * - [OutlinedInput](/api/outlined-input/)
 * - [Input](/api/input/)
 * - [FormHelperText](/api/form-helper-text/)
 *
 * If you wish to alter the props applied to the `input` element, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 *
 * - using the upper case props for passing values directly to the components
 * - using the underlying components directly as shown in the demos
 */

var TextField = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function TextField(props, ref) {
  var autoComplete = props.autoComplete,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      defaultValue = props.defaultValue,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      FormHelperTextProps = props.FormHelperTextProps,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      helperText = props.helperText,
      hiddenLabel = props.hiddenLabel,
      id = props.id,
      InputLabelProps = props.InputLabelProps,
      inputProps = props.inputProps,
      InputProps = props.InputProps,
      inputRef = props.inputRef,
      label = props.label,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      placeholder = props.placeholder,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      rows = props.rows,
      rowsMax = props.rowsMax,
      _props$select = props.select,
      select = _props$select === void 0 ? false : _props$select,
      SelectProps = props.SelectProps,
      type = props.type,
      value = props.value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["autoComplete", "autoFocus", "children", "classes", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "hiddenLabel", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "rowsMax", "select", "SelectProps", "type", "value", "variant"]);

  if (true) {
    if (select && !children) {
      console.error('Material-UI: `children` must be passed when using the `TextField` component with `select`.');
    }
  }

  var InputMore = {};

  if (variant === 'outlined') {
    if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
      InputMore.notched = InputLabelProps.shrink;
    }

    if (label) {
      var _InputLabelProps$requ;

      var displayRequired = (_InputLabelProps$requ = InputLabelProps === null || InputLabelProps === void 0 ? void 0 : InputLabelProps.required) !== null && _InputLabelProps$requ !== void 0 ? _InputLabelProps$requ : required;
      InputMore.label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, label, displayRequired && "\xA0*");
    }
  }

  if (select) {
    // unset defaults from textbox inputs
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = undefined;
    }

    InputMore['aria-describedby'] = undefined;
  }

  var helperTextId = helperText && id ? "".concat(id, "-helper-text") : undefined;
  var inputLabelId = label && id ? "".concat(id, "-label") : undefined;
  var InputComponent = variantComponent[variant];
  var InputElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(InputComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    "aria-describedby": helperTextId,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    fullWidth: fullWidth,
    multiline: multiline,
    name: name,
    rows: rows,
    rowsMax: rowsMax,
    type: type,
    value: value,
    id: id,
    inputRef: inputRef,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    inputProps: inputProps
  }, InputMore, InputProps));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_FormControl__WEBPACK_IMPORTED_MODULE_8__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className),
    disabled: disabled,
    error: error,
    fullWidth: fullWidth,
    hiddenLabel: hiddenLabel,
    ref: ref,
    required: required,
    color: color,
    variant: variant
  }, other), label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InputLabel__WEBPACK_IMPORTED_MODULE_9__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    htmlFor: id,
    id: inputLabelId
  }, InputLabelProps), label), select ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Select__WEBPACK_IMPORTED_MODULE_10__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    "aria-describedby": helperTextId,
    id: id,
    labelId: inputLabelId,
    value: value,
    input: InputElement
  }, SelectProps), children) : InputElement, helperText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_FormHelperText__WEBPACK_IMPORTED_MODULE_11__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    id: helperTextId
  }, FormHelperTextProps), helperText));
});
 true ? TextField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * @ignore
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['primary', 'secondary']),

  /**
   * The default value of the `input` element.
   */
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Props applied to the [`FormHelperText`](/api/form-helper-text/) element.
   */
  FormHelperTextProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The helper text content.
   */
  helperText: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * @ignore
   */
  hiddenLabel: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Props applied to the [`InputLabel`](/api/input-label/) element.
   */
  InputLabelProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/api/filled-input/),
   * [`OutlinedInput`](/api/outlined-input/) or [`Input`](/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_12__.refType,

  /**
   * The label content.
   */
  label: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense', 'none', 'normal']),

  /**
   * If `true`, a textarea element will be rendered instead of an input.
   */
  multiline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Name attribute of the `input` element.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * @ignore
   */
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the label is displayed as required and the `input` element` will be required.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Render a [`Select`](/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   */
  select: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Props applied to the [`Select`](/api/select/) element.
   */
  SelectProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The size of the text field.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['medium', 'small']),

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['filled', 'outlined', 'standard'])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_13__.default)(styles, {
  name: 'MuiTextField'
})(TextField));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TextField/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TextField/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _TextField__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");







function getStyleValue(computedStyle, property) {
  return parseInt(computedStyle[property], 10) || 0;
}

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_2__.useEffect;
var styles = {
  /* Styles applied to the shadow textarea element. */
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: 'hidden',
    // Remove from the content flow
    position: 'absolute',
    // Ignore the scrollbar width
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: 'translateZ(0)'
  }
};
var TextareaAutosize = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function TextareaAutosize(props, ref) {
  var onChange = props.onChange,
      rows = props.rows,
      rowsMax = props.rowsMax,
      _props$rowsMin = props.rowsMin,
      rowsMinProp = _props$rowsMin === void 0 ? 1 : _props$rowsMin,
      style = props.style,
      value = props.value,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["onChange", "rows", "rowsMax", "rowsMin", "style", "value"]);

  var rowsMin = rows || rowsMinProp;

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(value != null),
      isControlled = _React$useRef.current;

  var inputRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__.default)(ref, inputRef);
  var shadowRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  var renders = react__WEBPACK_IMPORTED_MODULE_2__.useRef(0);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState({}),
      state = _React$useState[0],
      setState = _React$useState[1];

  var syncHeight = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    var input = inputRef.current;
    var computedStyle = window.getComputedStyle(input);
    var inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || 'x';

    if (inputShallow.value.slice(-1) === '\n') {
      // Certain fonts which overflow the line height will cause the textarea
      // to report a different scrollHeight depending on whether the last line
      // is empty. Make it non-empty to avoid this issue.
      inputShallow.value += ' ';
    }

    var boxSizing = computedStyle['box-sizing'];
    var padding = getStyleValue(computedStyle, 'padding-bottom') + getStyleValue(computedStyle, 'padding-top');
    var border = getStyleValue(computedStyle, 'border-bottom-width') + getStyleValue(computedStyle, 'border-top-width'); // The height of the inner content

    var innerHeight = inputShallow.scrollHeight - padding; // Measure height of a textarea with a single row

    inputShallow.value = 'x';
    var singleRowHeight = inputShallow.scrollHeight - padding; // The height of the outer content

    var outerHeight = innerHeight;

    if (rowsMin) {
      outerHeight = Math.max(Number(rowsMin) * singleRowHeight, outerHeight);
    }

    if (rowsMax) {
      outerHeight = Math.min(Number(rowsMax) * singleRowHeight, outerHeight);
    }

    outerHeight = Math.max(outerHeight, singleRowHeight); // Take the box sizing into account for applying this value as a style.

    var outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    var overflow = Math.abs(outerHeight - innerHeight) <= 1;
    setState(function (prevState) {
      // Need a large enough difference to update the height.
      // This prevents infinite rendering loop.
      if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
        renders.current += 1;
        return {
          overflow: overflow,
          outerHeightStyle: outerHeightStyle
        };
      }

      if (true) {
        if (renders.current === 20) {
          console.error(['Material-UI: Too many re-renders. The layout is unstable.', 'TextareaAutosize limits the number of renders to prevent an infinite loop.'].join('\n'));
        }
      }

      return prevState;
    });
  }, [rowsMax, rowsMin, props.placeholder]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    var handleResize = (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_5__.default)(function () {
      renders.current = 0;
      syncHeight();
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [syncHeight]);
  useEnhancedEffect(function () {
    syncHeight();
  });
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    renders.current = 0;
  }, [value]);

  var handleChange = function handleChange(event) {
    renders.current = 0;

    if (!isControlled) {
      syncHeight();
    }

    if (onChange) {
      onChange(event);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("textarea", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    value: value,
    onChange: handleChange,
    ref: handleRef // Apply the rows prop to get a "correct" first SSR paint
    ,
    rows: rowsMin,
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      height: state.outerHeightStyle,
      // Need a large enough difference to allow scrolling.
      // This prevents infinite rendering loop.
      overflow: state.overflow ? 'hidden' : null
    }, style)
  }, other)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("textarea", {
    "aria-hidden": true,
    className: props.className,
    readOnly: true,
    ref: shadowRef,
    tabIndex: -1,
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, styles.shadow, style)
  }));
});
 true ? TextareaAutosize.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * @ignore
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Use `rowsMin` instead. The prop will be removed in v5.
   *
   * @deprecated
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Maximum number of rows to display.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Minimum number of rows to display.
   */
  rowsMin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (TextareaAutosize);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TextareaAutosize/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _TextareaAutosize__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _TextareaAutosize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextareaAutosize */ "./node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Unstable_TrapFocus/Unstable_TrapFocus.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Unstable_TrapFocus/Unstable_TrapFocus.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex, camelcase */






/**
 * Utility component that locks focus inside the component.
 */

function Unstable_TrapFocus(props) {
  var children = props.children,
      _props$disableAutoFoc = props.disableAutoFocus,
      disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$disableEnforce = props.disableEnforceFocus,
      disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
      _props$disableRestore = props.disableRestoreFocus,
      disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
      getDoc = props.getDoc,
      isEnabled = props.isEnabled,
      open = props.open;
  var ignoreNextEnforceFocus = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  var sentinelStart = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var sentinelEnd = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var nodeToRestore = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  var rootRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null); // can be removed once we drop support for non ref forwarding class components

  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (instance) {
    // #StrictMode ready
    rootRef.current = react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(instance);
  }, []);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_3__.default)(children.ref, handleOwnRef);
  var prevOpenRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    prevOpenRef.current = open;
  }, [open]);

  if (!prevOpenRef.current && open && typeof window !== 'undefined') {
    // WARNING: Potentially unsafe in concurrent mode.
    // The way the read on `nodeToRestore` is setup could make this actually safe.
    // Say we render `open={false}` -> `open={true}` but never commit.
    // We have now written a state that wasn't committed. But no committed effect
    // will read this wrong value. We only read from `nodeToRestore` in effects
    // that were committed on `open={true}`
    // WARNING: Prevents the instance from being garbage collected. Should only
    // hold a weak ref.
    nodeToRestore.current = getDoc().activeElement;
  }

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (!open) {
      return;
    }

    var doc = (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_4__.default)(rootRef.current); // We might render an empty child.

    if (!disableAutoFocus && rootRef.current && !rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {
        if (true) {
          console.error(['Material-UI: The modal content node does not accept focus.', 'For the benefit of assistive technologies, ' + 'the tabIndex of the node is being set to "-1".'].join('\n'));
        }

        rootRef.current.setAttribute('tabIndex', -1);
      }

      rootRef.current.focus();
    }

    var contain = function contain() {
      var rootElement = rootRef.current; // Cleanup functions are executed lazily in React 17.
      // Contain can be called between the component being unmounted and its cleanup function being run.

      if (rootElement === null) {
        return;
      }

      if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }

      if (rootRef.current && !rootRef.current.contains(doc.activeElement)) {
        rootRef.current.focus();
      }
    };

    var loopFocus = function loopFocus(event) {
      // 9 = Tab
      if (disableEnforceFocus || !isEnabled() || event.keyCode !== 9) {
        return;
      } // Make sure the next tab starts from the right place.


      if (doc.activeElement === rootRef.current) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;

        if (event.shiftKey) {
          sentinelEnd.current.focus();
        } else {
          sentinelStart.current.focus();
        }
      }
    };

    doc.addEventListener('focus', contain, true);
    doc.addEventListener('keydown', loopFocus, true); // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area
    // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.

    var interval = setInterval(function () {
      contain();
    }, 50);
    return function () {
      clearInterval(interval);
      doc.removeEventListener('focus', contain, true);
      doc.removeEventListener('keydown', loopFocus, true); // restoreLastFocus()

      if (!disableRestoreFocus) {
        // In IE 11 it is possible for document.activeElement to be null resulting
        // in nodeToRestore.current being null.
        // Not all elements in IE 11 have a focus method.
        // Once IE 11 support is dropped the focus() call can be unconditional.
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          nodeToRestore.current.focus();
        }

        nodeToRestore.current = null;
      }
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    tabIndex: 0,
    ref: sentinelStart,
    "data-test": "sentinelStart"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
    ref: handleRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    tabIndex: 0,
    ref: sentinelEnd,
    "data-test": "sentinelEnd"
  }));
}

 true ? Unstable_TrapFocus.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A single child content element.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),

  /**
   * If `true`, the trap focus will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any trap focus children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * If `true`, the trap focus will not prevent focus from leaving the trap focus while open.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * If `true`, the trap focus will not restore focus to previously focused element once
   * trap focus is hidden.
   */
  disableRestoreFocus: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * Return the document to consider.
   * We use it to implement the restore focus between different browser documents.
   */
  getDoc: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),

  /**
   * Do we still want to enforce the focus?
   * This prop helps nesting TrapFocus elements.
   */
  isEnabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),

  /**
   * If `true`, focus will be locked.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired)
} : 0;

if (true) {
  // eslint-disable-next-line
  Unstable_TrapFocus['propTypes' + ''] = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.exactProp)(Unstable_TrapFocus.propTypes);
}

/* harmony default export */ __webpack_exports__["default"] = (Unstable_TrapFocus);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Unstable_TrapFocus/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Unstable_TrapFocus/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unstable_TrapFocus */ "./node_modules/@material-ui/core/esm/Unstable_TrapFocus/Unstable_TrapFocus.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown'));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/transitions/utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/transitions/utils.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reflow": function() { return /* binding */ reflow; },
/* harmony export */   "getTransitionProps": function() { return /* binding */ getTransitionProps; }
/* harmony export */ });
var reflow = function reflow(node) {
  return node.scrollTop;
};
function getTransitionProps(props, options) {
  var timeout = props.timeout,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style;
  return {
    duration: style.transitionDuration || typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
    delay: style.transitionDelay
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/getScrollbarSize.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/getScrollbarSize.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getScrollbarSize; }
/* harmony export */ });
// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/3ffe3a5d82f6f561b82ff78d82b32a7d14aed558/js/src/modal.js#L512-L519
function getScrollbarSize() {
  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '99px';
  scrollDiv.style.height = '99px';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarSize;
}

/***/ }),

/***/ "./component/TwitDialog.js":
/*!*********************************!*\
  !*** ./component/TwitDialog.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TwitDialog; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Clear */ "./node_modules/@material-ui/icons/Clear.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_tweets2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/tweets2 */ "./redux/tweets2.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "H:\\Master\\MiniTwitter\\front\\component\\TwitDialog.js",
    _s = $RefreshSig$();
















function TwitDialog({
  open,
  handleClose
}) {
  _s();

  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const AddTweetError = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.tweetReducer.AddTweetError);
  const AddTweetAdding = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.tweetReducer.AddTweetAdding);
  const AddTweetDone = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.tweetReducer.AddTweetDone);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
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

    dispatch((0,_redux_tweets2__WEBPACK_IMPORTED_MODULE_3__.addtweet)({
      text
    }));
    handleClose();
    setText("");
  }; // dispatch(signUpAction({ email, password, nickname }));


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__.default, {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "new-twit-dialog",
    fullWidth: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__.default, {
      id: "close",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__.default, {
        color: "primary",
        "aria-label": "close",
        onClick: handleClose,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
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

_s(TwitDialog, "QsxL8HisH5yjQfvRvPncF70TIV0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];
});

_c = TwitDialog;

var _c;

$RefreshReg$(_c, "TwitDialog");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9CYWNrZHJvcC9CYWNrZHJvcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9EaWFsb2dBY3Rpb25zL0RpYWxvZ0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vRGlhbG9nQ29udGVudC9EaWFsb2dDb250ZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0RpYWxvZ1RpdGxlL0RpYWxvZ1RpdGxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0RpYWxvZy9EaWFsb2cuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vRmFkZS9GYWRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0ZpbGxlZElucHV0L0ZpbGxlZElucHV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0Zvcm1Db250cm9sL0Zvcm1Db250cm9sLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0Zvcm1Db250cm9sL0Zvcm1Db250cm9sQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtQ29udHJvbC9mb3JtQ29udHJvbFN0YXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0Zvcm1Db250cm9sL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0Zvcm1Db250cm9sL3VzZUZvcm1Db250cm9sLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0Zvcm1IZWxwZXJUZXh0L0Zvcm1IZWxwZXJUZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0Zvcm1MYWJlbC9Gb3JtTGFiZWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vR3Jvdy9Hcm93LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0lucHV0QmFzZS9JbnB1dEJhc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vSW5wdXRCYXNlL3V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0lucHV0TGFiZWwvSW5wdXRMYWJlbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9JbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9MaXN0L0xpc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTGlzdC9MaXN0Q29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9NZW51TGlzdC9NZW51TGlzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9NZW51L01lbnUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTW9kYWwvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTW9kYWwvTW9kYWxNYW5hZ2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL01vZGFsL1NpbXBsZUJhY2tkcm9wLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL01vZGFsL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL05hdGl2ZVNlbGVjdC9OYXRpdmVTZWxlY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTmF0aXZlU2VsZWN0L05hdGl2ZVNlbGVjdElucHV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL091dGxpbmVkSW5wdXQvTm90Y2hlZE91dGxpbmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vT3V0bGluZWRJbnB1dC9PdXRsaW5lZElucHV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1BvcG92ZXIvUG9wb3Zlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Qb3J0YWwvUG9ydGFsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1NlbGVjdC9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vU2VsZWN0L1NlbGVjdElucHV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1RleHRGaWVsZC9UZXh0RmllbGQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVGV4dGFyZWFBdXRvc2l6ZS9UZXh0YXJlYUF1dG9zaXplLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1Vuc3RhYmxlX1RyYXBGb2N1cy9VbnN0YWJsZV9UcmFwRm9jdXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vaW50ZXJuYWwvc3ZnLWljb25zL0Fycm93RHJvcERvd24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdHJhbnNpdGlvbnMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvZ2V0U2Nyb2xsYmFyU2l6ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1R3aXREaWFsb2cuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWUuanMiXSwibmFtZXMiOlsiVHdpdERpYWxvZyIsIm9wZW4iLCJoYW5kbGVDbG9zZSIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiQWRkVHdlZXRFcnJvciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ0d2VldFJlZHVjZXIiLCJBZGRUd2VldEFkZGluZyIsIkFkZFR3ZWV0RG9uZSIsInVzZUVmZmVjdCIsImFsZXJ0IiwiZGF0YSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVUd2VldCIsInR5cGUiLCJhZGR0d2VldCIsIkhvbWUiLCJzZXRPcGVuIiwiUmVhY3QiLCJteUluZm8iLCJ1c2VyUmVkdWNlciIsImxvZ0luRXJyb3IiLCJ0d2VldHMiLCJMT0FEX1RXRUVUX1JFUVVFU1QiLCJoYW5kbGVDbGlja09wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDZ0M7QUFDM0Q7QUFDSTtBQUNYO0FBQ3NCO0FBQ25CO0FBQ3BCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsdURBQXVELEtBQUs7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkNBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsMENBQUk7QUFDbkUsY0FBYywyRkFBd0I7O0FBRXRDLHNCQUFzQixnREFBbUIsc0JBQXNCLDJFQUFRO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHLHVCQUF1QixnREFBbUI7QUFDN0MsZUFBZSw2Q0FBSTtBQUNuQjtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRCxLQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFjOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMERBQWdCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLDBEQUFnQjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHdEQUFjOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1FQUF5Qjs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMkRBQW1CLEVBQUUsMERBQWdCLEVBQUUsdURBQWU7QUFDNUUsWUFBWSwwREFBZ0I7QUFDNUIsV0FBVywwREFBZ0I7QUFDM0IsVUFBVSwwREFBZ0I7QUFDMUIsR0FBRztBQUNILENBQUMsR0FBRyxDQUFNO0FBQ1YsK0RBQWUsMkRBQVU7QUFDekI7QUFDQSxDQUFDLFdB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LEVBUE0sQ0FBVDs7QUFTQSxRQUFNQyxlQUFlLEdBQUcsTUFBTTtBQUM1QlAsV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsUUFBTXZCLFdBQVcsR0FBRyxNQUFNO0FBQ3hCdUIsV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNELEdBRkQ7O0FBR0Esc0JBQ0UsOERBQUMsZ0VBQUQ7QUFBVyxZQUFRLEVBQUMsSUFBcEI7QUFBQSw0QkFDRSw4REFBQyw0REFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixhQUFPLEVBQUUsQ0FBekI7QUFBQSw4QkFDRSw4REFBQywyREFBRDtBQUFVLHVCQUFlLEVBQUVPO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFLDhEQUFDLHVEQUFEO0FBQVUsY0FBTSxFQUFFRjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFRRSw4REFBQyw2REFBRDtBQUFZLGlCQUFXLEVBQUU1QixXQUF6QjtBQUFzQyxVQUFJLEVBQUVEO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOztHQW5DdUJ1QixJO1VBRVBmLG9ELEVBQ0FBLG9ELEVBRUVGLG9EOzs7S0FMS2lCLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS40MGYzZDI2NjhjZGY1ZTkzM2VjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IEZhZGUgZnJvbSAnLi4vRmFkZSc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcm9vdDoge1xuICAgIC8vIEltcHJvdmUgc2Nyb2xsYWJsZSBkaWFsb2cgc3VwcG9ydC5cbiAgICB6SW5kZXg6IC0xLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6ICd0cmFuc3BhcmVudCdcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBpbnZpc2libGU9e3RydWV9YC4gKi9cbiAgaW52aXNpYmxlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG4gIH1cbn07XG52YXIgQmFja2Ryb3AgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBCYWNrZHJvcChwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkaW52aXNpYmxlID0gcHJvcHMuaW52aXNpYmxlLFxuICAgICAgaW52aXNpYmxlID0gX3Byb3BzJGludmlzaWJsZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkaW52aXNpYmxlLFxuICAgICAgb3BlbiA9IHByb3BzLm9wZW4sXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICBfcHJvcHMkVHJhbnNpdGlvbkNvbXAgPSBwcm9wcy5UcmFuc2l0aW9uQ29tcG9uZW50LFxuICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudCA9IF9wcm9wcyRUcmFuc2l0aW9uQ29tcCA9PT0gdm9pZCAwID8gRmFkZSA6IF9wcm9wcyRUcmFuc2l0aW9uQ29tcCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJpbnZpc2libGVcIiwgXCJvcGVuXCIsIFwidHJhbnNpdGlvbkR1cmF0aW9uXCIsIFwiVHJhbnNpdGlvbkNvbXBvbmVudFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Db21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBpbjogb3BlbixcbiAgICB0aW1lb3V0OiB0cmFuc2l0aW9uRHVyYXRpb25cbiAgfSwgb3RoZXIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lLCBpbnZpc2libGUgJiYgY2xhc3Nlcy5pbnZpc2libGUpLFxuICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICByZWY6IHJlZlxuICB9LCBjaGlsZHJlbikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBCYWNrZHJvcC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYmFja2Ryb3AgaXMgaW52aXNpYmxlLlxuICAgKiBJdCBjYW4gYmUgdXNlZCB3aGVuIHJlbmRlcmluZyBhIHBvcG92ZXIgb3IgYSBjdXN0b20gc2VsZWN0IGNvbXBvbmVudC5cbiAgICovXG4gIGludmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGJhY2tkcm9wIGlzIG9wZW4uXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgZHVyYXRpb24gZm9yIHRoZSB0cmFuc2l0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAqIFlvdSBtYXkgc3BlY2lmeSBhIHNpbmdsZSB0aW1lb3V0IGZvciBhbGwgdHJhbnNpdGlvbnMsIG9yIGluZGl2aWR1YWxseSB3aXRoIGFuIG9iamVjdC5cbiAgICovXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhcHBlYXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZW50ZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZXhpdDogUHJvcFR5cGVzLm51bWJlclxuICB9KV0pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUJhY2tkcm9wJ1xufSkoQmFja2Ryb3ApOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6IDgsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgZmxleDogJzAgMCBhdXRvJ1xuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVTcGFjaW5nPXtmYWxzZX1gLiAqL1xuICBzcGFjaW5nOiB7XG4gICAgJyYgPiA6bm90KDpmaXJzdC1jaGlsZCknOiB7XG4gICAgICBtYXJnaW5MZWZ0OiA4XG4gICAgfVxuICB9XG59O1xudmFyIERpYWxvZ0FjdGlvbnMgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBEaWFsb2dBY3Rpb25zKHByb3BzLCByZWYpIHtcbiAgdmFyIF9wcm9wcyRkaXNhYmxlU3BhY2luZyA9IHByb3BzLmRpc2FibGVTcGFjaW5nLFxuICAgICAgZGlzYWJsZVNwYWNpbmcgPSBfcHJvcHMkZGlzYWJsZVNwYWNpbmcgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVTcGFjaW5nLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiZGlzYWJsZVNwYWNpbmdcIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgIWRpc2FibGVTcGFjaW5nICYmIGNsYXNzZXMuc3BhY2luZyksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gRGlhbG9nQWN0aW9ucy5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYWN0aW9ucyBkbyBub3QgaGF2ZSBhZGRpdGlvbmFsIG1hcmdpbi5cbiAgICovXG4gIGRpc2FibGVTcGFjaW5nOiBQcm9wVHlwZXMuYm9vbFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlEaWFsb2dBY3Rpb25zJ1xufSkoRGlhbG9nQWN0aW9ucyk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIGZsZXg6ICcxIDEgYXV0bycsXG4gICAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogJ3RvdWNoJyxcbiAgICAgIC8vIEFkZCBpT1MgbW9tZW50dW0gc2Nyb2xsaW5nLlxuICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICBwYWRkaW5nOiAnOHB4IDI0cHgnLFxuICAgICAgJyY6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICAgIC8vIGRpYWxvZyB3aXRob3V0IHRpdGxlXG4gICAgICAgIHBhZGRpbmdUb3A6IDIwXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpdmlkZXJzPXt0cnVlfWAuICovXG4gICAgZGl2aWRlcnM6IHtcbiAgICAgIHBhZGRpbmc6ICcxNnB4IDI0cHgnLFxuICAgICAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5kaXZpZGVyKSxcbiAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUuZGl2aWRlcilcbiAgICB9XG4gIH07XG59O1xudmFyIERpYWxvZ0NvbnRlbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBEaWFsb2dDb250ZW50KHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGRpdmlkZXJzID0gcHJvcHMuZGl2aWRlcnMsXG4gICAgICBkaXZpZGVycyA9IF9wcm9wcyRkaXZpZGVycyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGl2aWRlcnMsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImRpdmlkZXJzXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgZGl2aWRlcnMgJiYgY2xhc3Nlcy5kaXZpZGVycyksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gRGlhbG9nQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogRGlzcGxheSB0aGUgdG9wIGFuZCBib3R0b20gZGl2aWRlcnMuXG4gICAqL1xuICBkaXZpZGVyczogUHJvcFR5cGVzLmJvb2xcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpRGlhbG9nQ29udGVudCdcbn0pKERpYWxvZ0NvbnRlbnQpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4uL1R5cG9ncmFwaHknO1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHtcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogJzE2cHggMjRweCcsXG4gICAgZmxleDogJzAgMCBhdXRvJ1xuICB9XG59O1xudmFyIERpYWxvZ1RpdGxlID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gRGlhbG9nVGl0bGUocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGRpc2FibGVUeXBvZ3JhID0gcHJvcHMuZGlzYWJsZVR5cG9ncmFwaHksXG4gICAgICBkaXNhYmxlVHlwb2dyYXBoeSA9IF9wcm9wcyRkaXNhYmxlVHlwb2dyYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVR5cG9ncmEsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlzYWJsZVR5cG9ncmFwaHlcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlciksIGRpc2FibGVUeXBvZ3JhcGh5ID8gY2hpbGRyZW4gOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7XG4gICAgY29tcG9uZW50OiBcImgyXCIsXG4gICAgdmFyaWFudDogXCJoNlwiXG4gIH0sIGNoaWxkcmVuKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IERpYWxvZ1RpdGxlLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjaGlsZHJlbiB3b24ndCBiZSB3cmFwcGVkIGJ5IGEgdHlwb2dyYXBoeSBjb21wb25lbnQuXG4gICAqIEZvciBpbnN0YW5jZSwgdGhpcyBjYW4gYmUgdXNlZnVsIHRvIHJlbmRlciBhbiBoNCBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IGgyLlxuICAgKi9cbiAgZGlzYWJsZVR5cG9ncmFwaHk6IFByb3BUeXBlcy5ib29sXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aURpYWxvZ1RpdGxlJ1xufSkoRGlhbG9nVGl0bGUpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbCc7XG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnLi4vQmFja2Ryb3AnO1xuaW1wb3J0IEZhZGUgZnJvbSAnLi4vRmFkZSc7XG5pbXBvcnQgeyBkdXJhdGlvbiB9IGZyb20gJy4uL3N0eWxlcy90cmFuc2l0aW9ucyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnLi4vUGFwZXInO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgICdAbWVkaWEgcHJpbnQnOiB7XG4gICAgICAgIC8vIFVzZSAhaW1wb3J0YW50IHRvIG92ZXJyaWRlIHRoZSBNb2RhbCBpbmxpbmUtc3R5bGUuXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUgIWltcG9ydGFudCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbnRhaW5lciBlbGVtZW50IGlmIGBzY3JvbGw9XCJwYXBlclwiYC4gKi9cbiAgICBzY3JvbGxQYXBlcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbnRhaW5lciBlbGVtZW50IGlmIGBzY3JvbGw9XCJib2R5XCJgLiAqL1xuICAgIHNjcm9sbEJvZHk6IHtcbiAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICB3aWR0aDogJzAnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb250YWluZXIgZWxlbWVudC4gKi9cbiAgICBjb250YWluZXI6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgJ0BtZWRpYSBwcmludCc6IHtcbiAgICAgICAgaGVpZ2h0OiAnYXV0bydcbiAgICAgIH0sXG4gICAgICAvLyBXZSBkaXNhYmxlIHRoZSBmb2N1cyByaW5nIGZvciBtb3VzZSwgdG91Y2ggYW5kIGtleWJvYXJkIHVzZXJzLlxuICAgICAgb3V0bGluZTogMFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFBhcGVyYCBjb21wb25lbnQuICovXG4gICAgcGFwZXI6IHtcbiAgICAgIG1hcmdpbjogMzIsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgLy8gRml4IElFIDExIGlzc3VlLCB0byByZW1vdmUgYXQgc29tZSBwb2ludC5cbiAgICAgICdAbWVkaWEgcHJpbnQnOiB7XG4gICAgICAgIG92ZXJmbG93WTogJ3Zpc2libGUnLFxuICAgICAgICBib3hTaGFkb3c6ICdub25lJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFBhcGVyYCBjb21wb25lbnQgaWYgYHNjcm9sbD1cInBhcGVyXCJgLiAqL1xuICAgIHBhcGVyU2Nyb2xsUGFwZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgbWF4SGVpZ2h0OiAnY2FsYygxMDAlIC0gNjRweCknXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgUGFwZXJgIGNvbXBvbmVudCBpZiBgc2Nyb2xsPVwiYm9keVwiYC4gKi9cbiAgICBwYXBlclNjcm9sbEJvZHk6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0JyAvLyAnaW5pdGlhbCcgZG9lc24ndCB3b3JrIG9uIElFIDExXG5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgY29tcG9uZW50IGlmIGBtYXhXaWR0aD1mYWxzZWAuICovXG4gICAgcGFwZXJXaWR0aEZhbHNlOiB7XG4gICAgICBtYXhXaWR0aDogJ2NhbGMoMTAwJSAtIDY0cHgpJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFBhcGVyYCBjb21wb25lbnQgaWYgYG1heFdpZHRoPVwieHNcImAuICovXG4gICAgcGFwZXJXaWR0aFhzOiB7XG4gICAgICBtYXhXaWR0aDogTWF0aC5tYXgodGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnhzLCA0NDQpLFxuICAgICAgJyYkcGFwZXJTY3JvbGxCb2R5JzogX2RlZmluZVByb3BlcnR5KHt9LCB0aGVtZS5icmVha3BvaW50cy5kb3duKE1hdGgubWF4KHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy54cywgNDQ0KSArIDMyICogMiksIHtcbiAgICAgICAgbWF4V2lkdGg6ICdjYWxjKDEwMCUgLSA2NHB4KSdcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgUGFwZXJgIGNvbXBvbmVudCBpZiBgbWF4V2lkdGg9XCJzbVwiYC4gKi9cbiAgICBwYXBlcldpZHRoU206IHtcbiAgICAgIG1heFdpZHRoOiB0aGVtZS5icmVha3BvaW50cy52YWx1ZXMuc20sXG4gICAgICAnJiRwYXBlclNjcm9sbEJvZHknOiBfZGVmaW5lUHJvcGVydHkoe30sIHRoZW1lLmJyZWFrcG9pbnRzLmRvd24odGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnNtICsgMzIgKiAyKSwge1xuICAgICAgICBtYXhXaWR0aDogJ2NhbGMoMTAwJSAtIDY0cHgpJ1xuICAgICAgfSlcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgY29tcG9uZW50IGlmIGBtYXhXaWR0aD1cIm1kXCJgLiAqL1xuICAgIHBhcGVyV2lkdGhNZDoge1xuICAgICAgbWF4V2lkdGg6IHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy5tZCxcbiAgICAgICcmJHBhcGVyU2Nyb2xsQm9keSc6IF9kZWZpbmVQcm9wZXJ0eSh7fSwgdGhlbWUuYnJlYWtwb2ludHMuZG93bih0aGVtZS5icmVha3BvaW50cy52YWx1ZXMubWQgKyAzMiAqIDIpLCB7XG4gICAgICAgIG1heFdpZHRoOiAnY2FsYygxMDAlIC0gNjRweCknXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFBhcGVyYCBjb21wb25lbnQgaWYgYG1heFdpZHRoPVwibGdcImAuICovXG4gICAgcGFwZXJXaWR0aExnOiB7XG4gICAgICBtYXhXaWR0aDogdGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLmxnLFxuICAgICAgJyYkcGFwZXJTY3JvbGxCb2R5JzogX2RlZmluZVByb3BlcnR5KHt9LCB0aGVtZS5icmVha3BvaW50cy5kb3duKHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy5sZyArIDMyICogMiksIHtcbiAgICAgICAgbWF4V2lkdGg6ICdjYWxjKDEwMCUgLSA2NHB4KSdcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgUGFwZXJgIGNvbXBvbmVudCBpZiBgbWF4V2lkdGg9XCJ4bFwiYC4gKi9cbiAgICBwYXBlcldpZHRoWGw6IHtcbiAgICAgIG1heFdpZHRoOiB0aGVtZS5icmVha3BvaW50cy52YWx1ZXMueGwsXG4gICAgICAnJiRwYXBlclNjcm9sbEJvZHknOiBfZGVmaW5lUHJvcGVydHkoe30sIHRoZW1lLmJyZWFrcG9pbnRzLmRvd24odGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnhsICsgMzIgKiAyKSwge1xuICAgICAgICBtYXhXaWR0aDogJ2NhbGMoMTAwJSAtIDY0cHgpJ1xuICAgICAgfSlcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgY29tcG9uZW50IGlmIGBmdWxsV2lkdGg9e3RydWV9YC4gKi9cbiAgICBwYXBlckZ1bGxXaWR0aDoge1xuICAgICAgd2lkdGg6ICdjYWxjKDEwMCUgLSA2NHB4KSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgY29tcG9uZW50IGlmIGBmdWxsU2NyZWVuPXt0cnVlfWAuICovXG4gICAgcGFwZXJGdWxsU2NyZWVuOiB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgbWF4SGVpZ2h0OiAnbm9uZScsXG4gICAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgICAnJiRwYXBlclNjcm9sbEJvZHknOiB7XG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG52YXIgZGVmYXVsdFRyYW5zaXRpb25EdXJhdGlvbiA9IHtcbiAgZW50ZXI6IGR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxuICBleGl0OiBkdXJhdGlvbi5sZWF2aW5nU2NyZWVuXG59O1xuLyoqXG4gKiBEaWFsb2dzIGFyZSBvdmVybGFpZCBtb2RhbCBwYXBlciBiYXNlZCBjb21wb25lbnRzIHdpdGggYSBiYWNrZHJvcC5cbiAqL1xuXG52YXIgRGlhbG9nID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gRGlhbG9nKHByb3BzLCByZWYpIHtcbiAgdmFyIEJhY2tkcm9wUHJvcHMgPSBwcm9wcy5CYWNrZHJvcFByb3BzLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGRpc2FibGVCYWNrZHJvID0gcHJvcHMuZGlzYWJsZUJhY2tkcm9wQ2xpY2ssXG4gICAgICBkaXNhYmxlQmFja2Ryb3BDbGljayA9IF9wcm9wcyRkaXNhYmxlQmFja2RybyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUJhY2tkcm8sXG4gICAgICBfcHJvcHMkZGlzYWJsZUVzY2FwZUsgPSBwcm9wcy5kaXNhYmxlRXNjYXBlS2V5RG93bixcbiAgICAgIGRpc2FibGVFc2NhcGVLZXlEb3duID0gX3Byb3BzJGRpc2FibGVFc2NhcGVLID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlRXNjYXBlSyxcbiAgICAgIF9wcm9wcyRmdWxsU2NyZWVuID0gcHJvcHMuZnVsbFNjcmVlbixcbiAgICAgIGZ1bGxTY3JlZW4gPSBfcHJvcHMkZnVsbFNjcmVlbiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnVsbFNjcmVlbixcbiAgICAgIF9wcm9wcyRmdWxsV2lkdGggPSBwcm9wcy5mdWxsV2lkdGgsXG4gICAgICBmdWxsV2lkdGggPSBfcHJvcHMkZnVsbFdpZHRoID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRmdWxsV2lkdGgsXG4gICAgICBfcHJvcHMkbWF4V2lkdGggPSBwcm9wcy5tYXhXaWR0aCxcbiAgICAgIG1heFdpZHRoID0gX3Byb3BzJG1heFdpZHRoID09PSB2b2lkIDAgPyAnc20nIDogX3Byb3BzJG1heFdpZHRoLFxuICAgICAgb25CYWNrZHJvcENsaWNrID0gcHJvcHMub25CYWNrZHJvcENsaWNrLFxuICAgICAgb25DbG9zZSA9IHByb3BzLm9uQ2xvc2UsXG4gICAgICBvbkVudGVyID0gcHJvcHMub25FbnRlcixcbiAgICAgIG9uRW50ZXJlZCA9IHByb3BzLm9uRW50ZXJlZCxcbiAgICAgIG9uRW50ZXJpbmcgPSBwcm9wcy5vbkVudGVyaW5nLFxuICAgICAgb25Fc2NhcGVLZXlEb3duID0gcHJvcHMub25Fc2NhcGVLZXlEb3duLFxuICAgICAgb25FeGl0ID0gcHJvcHMub25FeGl0LFxuICAgICAgb25FeGl0ZWQgPSBwcm9wcy5vbkV4aXRlZCxcbiAgICAgIG9uRXhpdGluZyA9IHByb3BzLm9uRXhpdGluZyxcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuLFxuICAgICAgX3Byb3BzJFBhcGVyQ29tcG9uZW50ID0gcHJvcHMuUGFwZXJDb21wb25lbnQsXG4gICAgICBQYXBlckNvbXBvbmVudCA9IF9wcm9wcyRQYXBlckNvbXBvbmVudCA9PT0gdm9pZCAwID8gUGFwZXIgOiBfcHJvcHMkUGFwZXJDb21wb25lbnQsXG4gICAgICBfcHJvcHMkUGFwZXJQcm9wcyA9IHByb3BzLlBhcGVyUHJvcHMsXG4gICAgICBQYXBlclByb3BzID0gX3Byb3BzJFBhcGVyUHJvcHMgPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJFBhcGVyUHJvcHMsXG4gICAgICBfcHJvcHMkc2Nyb2xsID0gcHJvcHMuc2Nyb2xsLFxuICAgICAgc2Nyb2xsID0gX3Byb3BzJHNjcm9sbCA9PT0gdm9pZCAwID8gJ3BhcGVyJyA6IF9wcm9wcyRzY3JvbGwsXG4gICAgICBfcHJvcHMkVHJhbnNpdGlvbkNvbXAgPSBwcm9wcy5UcmFuc2l0aW9uQ29tcG9uZW50LFxuICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudCA9IF9wcm9wcyRUcmFuc2l0aW9uQ29tcCA9PT0gdm9pZCAwID8gRmFkZSA6IF9wcm9wcyRUcmFuc2l0aW9uQ29tcCxcbiAgICAgIF9wcm9wcyR0cmFuc2l0aW9uRHVyYSA9IHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IF9wcm9wcyR0cmFuc2l0aW9uRHVyYSA9PT0gdm9pZCAwID8gZGVmYXVsdFRyYW5zaXRpb25EdXJhdGlvbiA6IF9wcm9wcyR0cmFuc2l0aW9uRHVyYSxcbiAgICAgIFRyYW5zaXRpb25Qcm9wcyA9IHByb3BzLlRyYW5zaXRpb25Qcm9wcyxcbiAgICAgIGFyaWFEZXNjcmliZWRieSA9IHByb3BzWydhcmlhLWRlc2NyaWJlZGJ5J10sXG4gICAgICBhcmlhTGFiZWxsZWRieSA9IHByb3BzWydhcmlhLWxhYmVsbGVkYnknXSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJCYWNrZHJvcFByb3BzXCIsIFwiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlzYWJsZUJhY2tkcm9wQ2xpY2tcIiwgXCJkaXNhYmxlRXNjYXBlS2V5RG93blwiLCBcImZ1bGxTY3JlZW5cIiwgXCJmdWxsV2lkdGhcIiwgXCJtYXhXaWR0aFwiLCBcIm9uQmFja2Ryb3BDbGlja1wiLCBcIm9uQ2xvc2VcIiwgXCJvbkVudGVyXCIsIFwib25FbnRlcmVkXCIsIFwib25FbnRlcmluZ1wiLCBcIm9uRXNjYXBlS2V5RG93blwiLCBcIm9uRXhpdFwiLCBcIm9uRXhpdGVkXCIsIFwib25FeGl0aW5nXCIsIFwib3BlblwiLCBcIlBhcGVyQ29tcG9uZW50XCIsIFwiUGFwZXJQcm9wc1wiLCBcInNjcm9sbFwiLCBcIlRyYW5zaXRpb25Db21wb25lbnRcIiwgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIiwgXCJUcmFuc2l0aW9uUHJvcHNcIiwgXCJhcmlhLWRlc2NyaWJlZGJ5XCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCJdKTtcblxuICB2YXIgbW91c2VEb3duVGFyZ2V0ID0gUmVhY3QudXNlUmVmKCk7XG5cbiAgdmFyIGhhbmRsZU1vdXNlRG93biA9IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuICAgIG1vdXNlRG93blRhcmdldC5jdXJyZW50ID0gZXZlbnQudGFyZ2V0O1xuICB9O1xuXG4gIHZhciBoYW5kbGVCYWNrZHJvcENsaWNrID0gZnVuY3Rpb24gaGFuZGxlQmFja2Ryb3BDbGljayhldmVudCkge1xuICAgIC8vIElnbm9yZSB0aGUgZXZlbnRzIG5vdCBjb21pbmcgZnJvbSB0aGUgXCJiYWNrZHJvcFwiXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBjbG9zZSB0aGUgZGlhbG9nIHdoZW4gY2xpY2tpbmcgdGhlIGRpYWxvZyBjb250ZW50LlxuICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIE1ha2Ugc3VyZSB0aGUgZXZlbnQgc3RhcnRzIGFuZCBlbmRzIG9uIHRoZSBzYW1lIERPTSBlbGVtZW50LlxuXG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBtb3VzZURvd25UYXJnZXQuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1vdXNlRG93blRhcmdldC5jdXJyZW50ID0gbnVsbDtcblxuICAgIGlmIChvbkJhY2tkcm9wQ2xpY2spIHtcbiAgICAgIG9uQmFja2Ryb3BDbGljayhldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKCFkaXNhYmxlQmFja2Ryb3BDbGljayAmJiBvbkNsb3NlKSB7XG4gICAgICBvbkNsb3NlKGV2ZW50LCAnYmFja2Ryb3BDbGljaycpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpLFxuICAgIEJhY2tkcm9wQ29tcG9uZW50OiBCYWNrZHJvcCxcbiAgICBCYWNrZHJvcFByb3BzOiBfZXh0ZW5kcyh7XG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25EdXJhdGlvblxuICAgIH0sIEJhY2tkcm9wUHJvcHMpLFxuICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uOiB0cnVlLFxuICAgIGRpc2FibGVCYWNrZHJvcENsaWNrOiBkaXNhYmxlQmFja2Ryb3BDbGljayxcbiAgICBkaXNhYmxlRXNjYXBlS2V5RG93bjogZGlzYWJsZUVzY2FwZUtleURvd24sXG4gICAgb25Fc2NhcGVLZXlEb3duOiBvbkVzY2FwZUtleURvd24sXG4gICAgb25DbG9zZTogb25DbG9zZSxcbiAgICBvcGVuOiBvcGVuLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkNvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGFwcGVhcjogdHJ1ZSxcbiAgICBpbjogb3BlbixcbiAgICB0aW1lb3V0OiB0cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgb25FbnRlcjogb25FbnRlcixcbiAgICBvbkVudGVyaW5nOiBvbkVudGVyaW5nLFxuICAgIG9uRW50ZXJlZDogb25FbnRlcmVkLFxuICAgIG9uRXhpdDogb25FeGl0LFxuICAgIG9uRXhpdGluZzogb25FeGl0aW5nLFxuICAgIG9uRXhpdGVkOiBvbkV4aXRlZCxcbiAgICByb2xlOiBcIm5vbmUgcHJlc2VudGF0aW9uXCJcbiAgfSwgVHJhbnNpdGlvblByb3BzKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmNvbnRhaW5lciwgY2xhc3Nlc1tcInNjcm9sbFwiLmNvbmNhdChjYXBpdGFsaXplKHNjcm9sbCkpXSksXG4gICAgb25Nb3VzZVVwOiBoYW5kbGVCYWNrZHJvcENsaWNrLFxuICAgIG9uTW91c2VEb3duOiBoYW5kbGVNb3VzZURvd25cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUGFwZXJDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBlbGV2YXRpb246IDI0LFxuICAgIHJvbGU6IFwiZGlhbG9nXCIsXG4gICAgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6IGFyaWFEZXNjcmliZWRieSxcbiAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBhcmlhTGFiZWxsZWRieVxuICB9LCBQYXBlclByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucGFwZXIsIGNsYXNzZXNbXCJwYXBlclNjcm9sbFwiLmNvbmNhdChjYXBpdGFsaXplKHNjcm9sbCkpXSwgY2xhc3Nlc1tcInBhcGVyV2lkdGhcIi5jb25jYXQoY2FwaXRhbGl6ZShTdHJpbmcobWF4V2lkdGgpKSldLCBQYXBlclByb3BzLmNsYXNzTmFtZSwgZnVsbFNjcmVlbiAmJiBjbGFzc2VzLnBhcGVyRnVsbFNjcmVlbiwgZnVsbFdpZHRoICYmIGNsYXNzZXMucGFwZXJGdWxsV2lkdGgpXG4gIH0pLCBjaGlsZHJlbikpKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IERpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgaWQocykgb2YgdGhlIGVsZW1lbnQocykgdGhhdCBkZXNjcmliZSB0aGUgZGlhbG9nLlxuICAgKi9cbiAgJ2FyaWEtZGVzY3JpYmVkYnknOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgaWQocykgb2YgdGhlIGVsZW1lbnQocykgdGhhdCBsYWJlbCB0aGUgZGlhbG9nLlxuICAgKi9cbiAgJ2FyaWEtbGFiZWxsZWRieSc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIEJhY2tkcm9wUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIERpYWxvZyBjaGlsZHJlbiwgdXN1YWxseSB0aGUgaW5jbHVkZWQgc3ViLWNvbXBvbmVudHMuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGNsaWNraW5nIHRoZSBiYWNrZHJvcCB3aWxsIG5vdCBmaXJlIHRoZSBgb25DbG9zZWAgY2FsbGJhY2suXG4gICAqL1xuICBkaXNhYmxlQmFja2Ryb3BDbGljazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgaGl0dGluZyBlc2NhcGUgd2lsbCBub3QgZmlyZSB0aGUgYG9uQ2xvc2VgIGNhbGxiYWNrLlxuICAgKi9cbiAgZGlzYWJsZUVzY2FwZUtleURvd246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBkaWFsb2cgd2lsbCBiZSBmdWxsLXNjcmVlblxuICAgKi9cbiAgZnVsbFNjcmVlbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGRpYWxvZyBzdHJldGNoZXMgdG8gYG1heFdpZHRoYC5cbiAgICpcbiAgICogTm90aWNlIHRoYXQgdGhlIGRpYWxvZyB3aWR0aCBncm93IGlzIGxpbWl0ZWQgYnkgdGhlIGRlZmF1bHQgbWFyZ2luLlxuICAgKi9cbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHRoZSBtYXgtd2lkdGggb2YgdGhlIGRpYWxvZy5cbiAgICogVGhlIGRpYWxvZyB3aWR0aCBncm93cyB3aXRoIHRoZSBzaXplIG9mIHRoZSBzY3JlZW4uXG4gICAqIFNldCB0byBgZmFsc2VgIHRvIGRpc2FibGUgYG1heFdpZHRoYC5cbiAgICovXG4gIG1heFdpZHRoOiBQcm9wVHlwZXMub25lT2YoWydsZycsICdtZCcsICdzbScsICd4bCcsICd4cycsIGZhbHNlXSksXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGJhY2tkcm9wIGlzIGNsaWNrZWQuXG4gICAqL1xuICBvbkJhY2tkcm9wQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjb21wb25lbnQgcmVxdWVzdHMgdG8gYmUgY2xvc2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gQ2FuIGJlOiBgXCJlc2NhcGVLZXlEb3duXCJgLCBgXCJiYWNrZHJvcENsaWNrXCJgLlxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgZGlhbG9nIGVudGVycy5cbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBkaWFsb2cgaGFzIGVudGVyZWQuXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBkaWFsb2cgaXMgZW50ZXJpbmcuXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgZXNjYXBlIGtleSBpcyBwcmVzc2VkLFxuICAgKiBgZGlzYWJsZUtleWJvYXJkYCBpcyBmYWxzZSBhbmQgdGhlIG1vZGFsIGlzIGluIGZvY3VzLlxuICAgKi9cbiAgb25Fc2NhcGVLZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBkaWFsb2cgZXhpdHMuXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBkaWFsb2cgaGFzIGV4aXRlZC5cbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgZGlhbG9nIGlzIGV4aXRpbmcuXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBEaWFsb2cgaXMgb3Blbi5cbiAgICovXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCB0byByZW5kZXIgdGhlIGJvZHkgb2YgdGhlIGRpYWxvZy5cbiAgICovXG4gIFBhcGVyQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIFtgUGFwZXJgXSgvYXBpL3BhcGVyLykgZWxlbWVudC5cbiAgICovXG4gIFBhcGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIERldGVybWluZSB0aGUgY29udGFpbmVyIGZvciBzY3JvbGxpbmcgdGhlIGRpYWxvZy5cbiAgICovXG4gIHNjcm9sbDogUHJvcFR5cGVzLm9uZU9mKFsnYm9keScsICdwYXBlciddKSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgdHJhbnNpdGlvbi5cbiAgICogW0ZvbGxvdyB0aGlzIGd1aWRlXSgvY29tcG9uZW50cy90cmFuc2l0aW9ucy8jdHJhbnNpdGlvbmNvbXBvbmVudC1wcm9wKSB0byBsZWFybiBtb3JlIGFib3V0IHRoZSByZXF1aXJlbWVudHMgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgVHJhbnNpdGlvbkNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBUaGUgZHVyYXRpb24gZm9yIHRoZSB0cmFuc2l0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAqIFlvdSBtYXkgc3BlY2lmeSBhIHNpbmdsZSB0aW1lb3V0IGZvciBhbGwgdHJhbnNpdGlvbnMsIG9yIGluZGl2aWR1YWxseSB3aXRoIGFuIG9iamVjdC5cbiAgICovXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhcHBlYXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZW50ZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZXhpdDogUHJvcFR5cGVzLm51bWJlclxuICB9KV0pLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYFRyYW5zaXRpb25gXShodHRwOi8vcmVhY3Rjb21tdW5pdHkub3JnL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvdHJhbnNpdGlvbiNUcmFuc2l0aW9uLXByb3BzKSBlbGVtZW50LlxuICAgKi9cbiAgVHJhbnNpdGlvblByb3BzOiBQcm9wVHlwZXMub2JqZWN0XG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aURpYWxvZydcbn0pKERpYWxvZyk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0IHsgZHVyYXRpb24gfSBmcm9tICcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnO1xuaW1wb3J0IHVzZVRoZW1lIGZyb20gJy4uL3N0eWxlcy91c2VUaGVtZSc7XG5pbXBvcnQgeyByZWZsb3csIGdldFRyYW5zaXRpb25Qcm9wcyB9IGZyb20gJy4uL3RyYW5zaXRpb25zL3V0aWxzJztcbmltcG9ydCB1c2VGb3JrUmVmIGZyb20gJy4uL3V0aWxzL3VzZUZvcmtSZWYnO1xudmFyIHN0eWxlcyA9IHtcbiAgZW50ZXJpbmc6IHtcbiAgICBvcGFjaXR5OiAxXG4gIH0sXG4gIGVudGVyZWQ6IHtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbn07XG52YXIgZGVmYXVsdFRpbWVvdXQgPSB7XG4gIGVudGVyOiBkdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcbiAgZXhpdDogZHVyYXRpb24ubGVhdmluZ1NjcmVlblxufTtcbi8qKlxuICogVGhlIEZhZGUgdHJhbnNpdGlvbiBpcyB1c2VkIGJ5IHRoZSBbTW9kYWxdKC9jb21wb25lbnRzL21vZGFsLykgY29tcG9uZW50LlxuICogSXQgdXNlcyBbcmVhY3QtdHJhbnNpdGlvbi1ncm91cF0oaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cCkgaW50ZXJuYWxseS5cbiAqL1xuXG52YXIgRmFkZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEZhZGUocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIF9wcm9wcyRkaXNhYmxlU3RyaWN0TSA9IHByb3BzLmRpc2FibGVTdHJpY3RNb2RlQ29tcGF0LFxuICAgICAgZGlzYWJsZVN0cmljdE1vZGVDb21wYXQgPSBfcHJvcHMkZGlzYWJsZVN0cmljdE0gPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVTdHJpY3RNLFxuICAgICAgaW5Qcm9wID0gcHJvcHMuaW4sXG4gICAgICBvbkVudGVyID0gcHJvcHMub25FbnRlcixcbiAgICAgIG9uRW50ZXJlZCA9IHByb3BzLm9uRW50ZXJlZCxcbiAgICAgIG9uRW50ZXJpbmcgPSBwcm9wcy5vbkVudGVyaW5nLFxuICAgICAgb25FeGl0ID0gcHJvcHMub25FeGl0LFxuICAgICAgb25FeGl0ZWQgPSBwcm9wcy5vbkV4aXRlZCxcbiAgICAgIG9uRXhpdGluZyA9IHByb3BzLm9uRXhpdGluZyxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBfcHJvcHMkVHJhbnNpdGlvbkNvbXAgPSBwcm9wcy5UcmFuc2l0aW9uQ29tcG9uZW50LFxuICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudCA9IF9wcm9wcyRUcmFuc2l0aW9uQ29tcCA9PT0gdm9pZCAwID8gVHJhbnNpdGlvbiA6IF9wcm9wcyRUcmFuc2l0aW9uQ29tcCxcbiAgICAgIF9wcm9wcyR0aW1lb3V0ID0gcHJvcHMudGltZW91dCxcbiAgICAgIHRpbWVvdXQgPSBfcHJvcHMkdGltZW91dCA9PT0gdm9pZCAwID8gZGVmYXVsdFRpbWVvdXQgOiBfcHJvcHMkdGltZW91dCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImRpc2FibGVTdHJpY3RNb2RlQ29tcGF0XCIsIFwiaW5cIiwgXCJvbkVudGVyXCIsIFwib25FbnRlcmVkXCIsIFwib25FbnRlcmluZ1wiLCBcIm9uRXhpdFwiLCBcIm9uRXhpdGVkXCIsIFwib25FeGl0aW5nXCIsIFwic3R5bGVcIiwgXCJUcmFuc2l0aW9uQ29tcG9uZW50XCIsIFwidGltZW91dFwiXSk7XG5cbiAgdmFyIHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgdmFyIGVuYWJsZVN0cmljdE1vZGVDb21wYXQgPSB0aGVtZS51bnN0YWJsZV9zdHJpY3RNb2RlICYmICFkaXNhYmxlU3RyaWN0TW9kZUNvbXBhdDtcbiAgdmFyIG5vZGVSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciBmb3JlaWduUmVmID0gdXNlRm9ya1JlZihjaGlsZHJlbi5yZWYsIHJlZik7XG4gIHZhciBoYW5kbGVSZWYgPSB1c2VGb3JrUmVmKGVuYWJsZVN0cmljdE1vZGVDb21wYXQgPyBub2RlUmVmIDogdW5kZWZpbmVkLCBmb3JlaWduUmVmKTtcblxuICB2YXIgbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayA9IGZ1bmN0aW9uIG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5vZGVPckFwcGVhcmluZywgbWF5YmVBcHBlYXJpbmcpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3JlZiA9IGVuYWJsZVN0cmljdE1vZGVDb21wYXQgPyBbbm9kZVJlZi5jdXJyZW50LCBub2RlT3JBcHBlYXJpbmddIDogW25vZGVPckFwcGVhcmluZywgbWF5YmVBcHBlYXJpbmddLFxuICAgICAgICAgICAgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgICAgIG5vZGUgPSBfcmVmMlswXSxcbiAgICAgICAgICAgIGlzQXBwZWFyaW5nID0gX3JlZjJbMV07IC8vIG9uRW50ZXJYeHggYW5kIG9uRXhpdFh4eCBjYWxsYmFja3MgaGF2ZSBhIGRpZmZlcmVudCBhcmd1bWVudHMubGVuZ3RoIHZhbHVlLlxuXG5cbiAgICAgICAgaWYgKGlzQXBwZWFyaW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjYWxsYmFjayhub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayhub2RlLCBpc0FwcGVhcmluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBoYW5kbGVFbnRlcmluZyA9IG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2sob25FbnRlcmluZyk7XG4gIHZhciBoYW5kbGVFbnRlciA9IG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2soZnVuY3Rpb24gKG5vZGUsIGlzQXBwZWFyaW5nKSB7XG4gICAgcmVmbG93KG5vZGUpOyAvLyBTbyB0aGUgYW5pbWF0aW9uIGFsd2F5cyBzdGFydCBmcm9tIHRoZSBzdGFydC5cblxuICAgIHZhciB0cmFuc2l0aW9uUHJvcHMgPSBnZXRUcmFuc2l0aW9uUHJvcHMoe1xuICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgdGltZW91dDogdGltZW91dFxuICAgIH0sIHtcbiAgICAgIG1vZGU6ICdlbnRlcidcbiAgICB9KTtcbiAgICBub2RlLnN0eWxlLndlYmtpdFRyYW5zaXRpb24gPSB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknLCB0cmFuc2l0aW9uUHJvcHMpO1xuICAgIG5vZGUuc3R5bGUudHJhbnNpdGlvbiA9IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScsIHRyYW5zaXRpb25Qcm9wcyk7XG5cbiAgICBpZiAob25FbnRlcikge1xuICAgICAgb25FbnRlcihub2RlLCBpc0FwcGVhcmluZyk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGhhbmRsZUVudGVyZWQgPSBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrKG9uRW50ZXJlZCk7XG4gIHZhciBoYW5kbGVFeGl0aW5nID0gbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayhvbkV4aXRpbmcpO1xuICB2YXIgaGFuZGxlRXhpdCA9IG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2soZnVuY3Rpb24gKG5vZGUpIHtcbiAgICB2YXIgdHJhbnNpdGlvblByb3BzID0gZ2V0VHJhbnNpdGlvblByb3BzKHtcbiAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgIHRpbWVvdXQ6IHRpbWVvdXRcbiAgICB9LCB7XG4gICAgICBtb2RlOiAnZXhpdCdcbiAgICB9KTtcbiAgICBub2RlLnN0eWxlLndlYmtpdFRyYW5zaXRpb24gPSB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknLCB0cmFuc2l0aW9uUHJvcHMpO1xuICAgIG5vZGUuc3R5bGUudHJhbnNpdGlvbiA9IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScsIHRyYW5zaXRpb25Qcm9wcyk7XG5cbiAgICBpZiAob25FeGl0KSB7XG4gICAgICBvbkV4aXQobm9kZSk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGhhbmRsZUV4aXRlZCA9IG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2sob25FeGl0ZWQpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkNvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGFwcGVhcjogdHJ1ZSxcbiAgICBpbjogaW5Qcm9wLFxuICAgIG5vZGVSZWY6IGVuYWJsZVN0cmljdE1vZGVDb21wYXQgPyBub2RlUmVmIDogdW5kZWZpbmVkLFxuICAgIG9uRW50ZXI6IGhhbmRsZUVudGVyLFxuICAgIG9uRW50ZXJlZDogaGFuZGxlRW50ZXJlZCxcbiAgICBvbkVudGVyaW5nOiBoYW5kbGVFbnRlcmluZyxcbiAgICBvbkV4aXQ6IGhhbmRsZUV4aXQsXG4gICAgb25FeGl0ZWQ6IGhhbmRsZUV4aXRlZCxcbiAgICBvbkV4aXRpbmc6IGhhbmRsZUV4aXRpbmcsXG4gICAgdGltZW91dDogdGltZW91dFxuICB9LCBvdGhlciksIGZ1bmN0aW9uIChzdGF0ZSwgY2hpbGRQcm9wcykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCBfZXh0ZW5kcyh7XG4gICAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB2aXNpYmlsaXR5OiBzdGF0ZSA9PT0gJ2V4aXRlZCcgJiYgIWluUHJvcCA/ICdoaWRkZW4nIDogdW5kZWZpbmVkXG4gICAgICB9LCBzdHlsZXNbc3RhdGVdLCBzdHlsZSwgY2hpbGRyZW4ucHJvcHMuc3R5bGUpLFxuICAgICAgcmVmOiBoYW5kbGVSZWZcbiAgICB9LCBjaGlsZFByb3BzKSk7XG4gIH0pO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBGYWRlLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIEEgc2luZ2xlIGNoaWxkIGNvbnRlbnQgZWxlbWVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudCxcblxuICAvKipcbiAgICogRW5hYmxlIHRoaXMgcHJvcCBpZiB5b3UgZW5jb3VudGVyICdGdW5jdGlvbiBjb21wb25lbnRzIGNhbm5vdCBiZSBnaXZlbiByZWZzJyxcbiAgICogdXNlIGB1bnN0YWJsZV9jcmVhdGVTdHJpY3RNb2RlVGhlbWVgLFxuICAgKiBhbmQgY2FuJ3QgZm9yd2FyZCB0aGUgcmVmIGluIHRoZSBjaGlsZCBjb21wb25lbnQuXG4gICAqL1xuICBkaXNhYmxlU3RyaWN0TW9kZUNvbXBhdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGNvbXBvbmVudCB3aWxsIHRyYW5zaXRpb24gaW4uXG4gICAqL1xuICBpbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogVGhlIGR1cmF0aW9uIGZvciB0aGUgdHJhbnNpdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBZb3UgbWF5IHNwZWNpZnkgYSBzaW5nbGUgdGltZW91dCBmb3IgYWxsIHRyYW5zaXRpb25zLCBvciBpbmRpdmlkdWFsbHkgd2l0aCBhbiBvYmplY3QuXG4gICAqL1xuICB0aW1lb3V0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFwcGVhcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBlbnRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBleGl0OiBQcm9wVHlwZXMubnVtYmVyXG4gIH0pXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCBGYWRlOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IHJlZlR5cGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IElucHV0QmFzZSBmcm9tICcuLi9JbnB1dEJhc2UnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgdmFyIGxpZ2h0ID0gdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnO1xuICB2YXIgYm90dG9tTGluZUNvbG9yID0gbGlnaHQgPyAncmdiYSgwLCAwLCAwLCAwLjQyKScgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpJztcbiAgdmFyIGJhY2tncm91bmRDb2xvciA9IGxpZ2h0ID8gJ3JnYmEoMCwgMCwgMCwgMC4wOSknIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOSknO1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcixcbiAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcbiAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ2JhY2tncm91bmQtY29sb3InLCB7XG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVyLFxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5lYXNlT3V0XG4gICAgICB9KSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGxpZ2h0ID8gJ3JnYmEoMCwgMCwgMCwgMC4xMyknIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMyknLFxuICAgICAgICAvLyBSZXNldCBvbiB0b3VjaCBkZXZpY2VzLCBpdCBkb2Vzbid0IGFkZCBzcGVjaWZpY2l0eVxuICAgICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICcmJGZvY3VzZWQnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogbGlnaHQgPyAncmdiYSgwLCAwLCAwLCAwLjA5KScgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA5KSdcbiAgICAgIH0sXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBsaWdodCA/ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGNvbG9yIHNlY29uZGFyeS4gKi9cbiAgICBjb2xvclNlY29uZGFyeToge1xuICAgICAgJyYkdW5kZXJsaW5lOmFmdGVyJzoge1xuICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlVW5kZXJsaW5lPXtmYWxzZX1gLiAqL1xuICAgIHVuZGVybGluZToge1xuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbTogXCIycHggc29saWQgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluKSxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAvLyBEb2luZyB0aGUgb3RoZXIgd2F5IGFyb3VuZCBjcmFzaCBvbiBJRSAxMSBcIicnXCIgaHR0cHM6Ly9naXRodWIuY29tL2Nzc2luanMvanNzL2lzc3Vlcy8yNDJcbiAgICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgwKScsXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgndHJhbnNmb3JtJywge1xuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVyLFxuICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXRcbiAgICAgICAgfSksXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyAvLyBUcmFuc3BhcmVudCB0byB0aGUgaG92ZXIgc3R5bGUuXG5cbiAgICAgIH0sXG4gICAgICAnJiRmb2N1c2VkOmFmdGVyJzoge1xuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMSknXG4gICAgICB9LFxuICAgICAgJyYkZXJyb3I6YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW4sXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgxKScgLy8gZXJyb3IgaXMgYWx3YXlzIHVuZGVybGluZWQgaW4gcmVkXG5cbiAgICAgIH0sXG4gICAgICAnJjpiZWZvcmUnOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgXCIuY29uY2F0KGJvdHRvbUxpbmVDb2xvciksXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgLy8gRG9pbmcgdGhlIG90aGVyIHdheSBhcm91bmQgY3Jhc2ggb24gSUUgMTEgXCInJ1wiIGh0dHBzOi8vZ2l0aHViLmNvbS9jc3NpbmpzL2pzcy9pc3N1ZXMvMjQyXG4gICAgICAgIGNvbnRlbnQ6ICdcIlxcXFwwMGEwXCInLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnYm9yZGVyLWJvdHRvbS1jb2xvcicsIHtcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRlclxuICAgICAgICB9KSxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnIC8vIFRyYW5zcGFyZW50IHRvIHRoZSBob3ZlciBzdHlsZS5cblxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyOmJlZm9yZSc6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnkpXG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQ6YmVmb3JlJzoge1xuICAgICAgICBib3JkZXJCb3R0b21TdHlsZTogJ2RvdHRlZCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgY29tcG9uZW50IGlzIGZvY3VzZWQuICovXG4gICAgZm9jdXNlZDoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlZD17dHJ1ZX1gLiAqL1xuICAgIGRpc2FibGVkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHN0YXJ0QWRvcm5tZW50YCBpcyBwcm92aWRlZC4gKi9cbiAgICBhZG9ybmVkU3RhcnQ6IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiAxMlxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBlbmRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGFkb3JuZWRFbmQ6IHtcbiAgICAgIHBhZGRpbmdSaWdodDogMTJcbiAgICB9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZXJyb3I9e3RydWV9YC4gKi9cbiAgICBlcnJvcjoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgICBtYXJnaW5EZW5zZToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBtdWx0aWxpbmU9e3RydWV9YC4gKi9cbiAgICBtdWx0aWxpbmU6IHtcbiAgICAgIHBhZGRpbmc6ICcyN3B4IDEycHggMTBweCcsXG4gICAgICAnJiRtYXJnaW5EZW5zZSc6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogMjMsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IDZcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC4gKi9cbiAgICBpbnB1dDoge1xuICAgICAgcGFkZGluZzogJzI3cHggMTJweCAxMHB4JyxcbiAgICAgICcmOi13ZWJraXQtYXV0b2ZpbGwnOiB7XG4gICAgICAgIFdlYmtpdEJveFNoYWRvdzogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gbnVsbCA6ICcwIDAgMCAxMDBweCAjMjY2Nzk4IGluc2V0JyxcbiAgICAgICAgV2Via2l0VGV4dEZpbGxDb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gbnVsbCA6ICcjZmZmJyxcbiAgICAgICAgY2FyZXRDb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gbnVsbCA6ICcjZmZmJyxcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogJ2luaGVyaXQnLFxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogJ2luaGVyaXQnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG1hcmdpbj1cImRlbnNlXCJgLiAqL1xuICAgIGlucHV0TWFyZ2luRGVuc2U6IHtcbiAgICAgIHBhZGRpbmdUb3A6IDIzLFxuICAgICAgcGFkZGluZ0JvdHRvbTogNlxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBpZiBpbiBgPEZvcm1Db250cm9sIGhpZGRlbkxhYmVsIC8+YC4gKi9cbiAgICBpbnB1dEhpZGRlbkxhYmVsOiB7XG4gICAgICBwYWRkaW5nVG9wOiAxOCxcbiAgICAgIHBhZGRpbmdCb3R0b206IDE5LFxuICAgICAgJyYkaW5wdXRNYXJnaW5EZW5zZSc6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogMTAsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IDExXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG11bHRpbGluZT17dHJ1ZX1gLiAqL1xuICAgIGlucHV0TXVsdGlsaW5lOiB7XG4gICAgICBwYWRkaW5nOiAwXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYHN0YXJ0QWRvcm5tZW50YCBpcyBwcm92aWRlZC4gKi9cbiAgICBpbnB1dEFkb3JuZWRTdGFydDoge1xuICAgICAgcGFkZGluZ0xlZnQ6IDBcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgZW5kQWRvcm5tZW50YCBpcyBwcm92aWRlZC4gKi9cbiAgICBpbnB1dEFkb3JuZWRFbmQ6IHtcbiAgICAgIHBhZGRpbmdSaWdodDogMFxuICAgIH1cbiAgfTtcbn07XG52YXIgRmlsbGVkSW5wdXQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBGaWxsZWRJbnB1dChwcm9wcywgcmVmKSB7XG4gIHZhciBkaXNhYmxlVW5kZXJsaW5lID0gcHJvcHMuZGlzYWJsZVVuZGVybGluZSxcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgX3Byb3BzJGZ1bGxXaWR0aCA9IHByb3BzLmZ1bGxXaWR0aCxcbiAgICAgIGZ1bGxXaWR0aCA9IF9wcm9wcyRmdWxsV2lkdGggPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGZ1bGxXaWR0aCxcbiAgICAgIF9wcm9wcyRpbnB1dENvbXBvbmVudCA9IHByb3BzLmlucHV0Q29tcG9uZW50LFxuICAgICAgaW5wdXRDb21wb25lbnQgPSBfcHJvcHMkaW5wdXRDb21wb25lbnQgPT09IHZvaWQgMCA/ICdpbnB1dCcgOiBfcHJvcHMkaW5wdXRDb21wb25lbnQsXG4gICAgICBfcHJvcHMkbXVsdGlsaW5lID0gcHJvcHMubXVsdGlsaW5lLFxuICAgICAgbXVsdGlsaW5lID0gX3Byb3BzJG11bHRpbGluZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkbXVsdGlsaW5lLFxuICAgICAgX3Byb3BzJHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgdHlwZSA9IF9wcm9wcyR0eXBlID09PSB2b2lkIDAgPyAndGV4dCcgOiBfcHJvcHMkdHlwZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJkaXNhYmxlVW5kZXJsaW5lXCIsIFwiY2xhc3Nlc1wiLCBcImZ1bGxXaWR0aFwiLCBcImlucHV0Q29tcG9uZW50XCIsIFwibXVsdGlsaW5lXCIsIFwidHlwZVwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KElucHV0QmFzZSwgX2V4dGVuZHMoe1xuICAgIGNsYXNzZXM6IF9leHRlbmRzKHt9LCBjbGFzc2VzLCB7XG4gICAgICByb290OiBjbHN4KGNsYXNzZXMucm9vdCwgIWRpc2FibGVVbmRlcmxpbmUgJiYgY2xhc3Nlcy51bmRlcmxpbmUpLFxuICAgICAgdW5kZXJsaW5lOiBudWxsXG4gICAgfSksXG4gICAgZnVsbFdpZHRoOiBmdWxsV2lkdGgsXG4gICAgaW5wdXRDb21wb25lbnQ6IGlucHV0Q29tcG9uZW50LFxuICAgIG11bHRpbGluZTogbXVsdGlsaW5lLFxuICAgIHJlZjogcmVmLFxuICAgIHR5cGU6IHR5cGVcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gRmlsbGVkSW5wdXQucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhpcyBwcm9wIGhlbHBzIHVzZXJzIHRvIGZpbGwgZm9ybXMgZmFzdGVyLCBlc3BlY2lhbGx5IG9uIG1vYmlsZSBkZXZpY2VzLlxuICAgKiBUaGUgbmFtZSBjYW4gYmUgY29uZnVzaW5nLCBhcyBpdCdzIG1vcmUgbGlrZSBhbiBhdXRvZmlsbC5cbiAgICogWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IGl0IFtmb2xsb3dpbmcgdGhlIHNwZWNpZmljYXRpb25dKGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm0tY29udHJvbC1pbmZyYXN0cnVjdHVyZS5odG1sI2F1dG9maWxsKS5cbiAgICovXG4gIGF1dG9Db21wbGV0ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgZm9jdXNlZCBkdXJpbmcgdGhlIGZpcnN0IG1vdW50LlxuICAgKi9cbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGNvbXBvbmVudC4gSXQgc3VwcG9ydHMgdGhvc2UgdGhlbWUgY29sb3JzIHRoYXQgbWFrZSBzZW5zZSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGBpbnB1dGAgZWxlbWVudCB2YWx1ZS4gVXNlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBub3QgY29udHJvbGxlZC5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgbm90IGhhdmUgYW4gdW5kZXJsaW5lLlxuICAgKi9cbiAgZGlzYWJsZVVuZGVybGluZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuZCBgSW5wdXRBZG9ybm1lbnRgIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGVuZEFkb3JubWVudDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgaW5kaWNhdGUgYW4gZXJyb3IuIFRoaXMgaXMgbm9ybWFsbHkgb2J0YWluZWQgdmlhIGNvbnRleHQgZnJvbVxuICAgKiBGb3JtQ29udHJvbC5cbiAgICovXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBpbnB1dENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBbQXR0cmlidXRlc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I0F0dHJpYnV0ZXMpIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFBhc3MgYSByZWYgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UmVmOiByZWZUeXBlLFxuXG4gIC8qKlxuICAgKiBJZiBgZGVuc2VgLCB3aWxsIGFkanVzdCB2ZXJ0aWNhbCBzcGFjaW5nLiBUaGlzIGlzIG5vcm1hbGx5IG9idGFpbmVkIHZpYSBjb250ZXh0IGZyb21cbiAgICogRm9ybUNvbnRyb2wuXG4gICAqL1xuICBtYXJnaW46IFByb3BUeXBlcy5vbmVPZihbJ2RlbnNlJywgJ25vbmUnXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYSB0ZXh0YXJlYSBlbGVtZW50IHdpbGwgYmUgcmVuZGVyZWQuXG4gICAqL1xuICBtdWx0aWxpbmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBOYW1lIGF0dHJpYnV0ZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgdmFsdWUgaXMgY2hhbmdlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgdmFsdWUgYnkgYWNjZXNzaW5nIGBldmVudC50YXJnZXQudmFsdWVgIChzdHJpbmcpLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgc2hvcnQgaGludCBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0IGJlZm9yZSB0aGUgdXNlciBlbnRlcnMgYSB2YWx1ZS5cbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJdCBwcmV2ZW50cyB0aGUgdXNlciBmcm9tIGNoYW5naW5nIHRoZSB2YWx1ZSBvZiB0aGUgZmllbGRcbiAgICogKG5vdCBmcm9tIGludGVyYWN0aW5nIHdpdGggdGhlIGZpZWxkKS5cbiAgICovXG4gIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgcmVxdWlyZWQuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlbiBtdWx0aWxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93czogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlbiBtdWx0aWxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93c01heDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBTdGFydCBgSW5wdXRBZG9ybm1lbnRgIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIHN0YXJ0QWRvcm5tZW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVHlwZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LiBJdCBzaG91bGQgYmUgW2EgdmFsaWQgSFRNTDUgaW5wdXQgdHlwZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I0Zvcm1fJTNDaW5wdXQlM0VfdHlwZXMpLlxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQsIHJlcXVpcmVkIGZvciBhIGNvbnRyb2xsZWQgY29tcG9uZW50LlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnlcbn0gOiB2b2lkIDA7XG5GaWxsZWRJbnB1dC5tdWlOYW1lID0gJ0lucHV0JztcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlGaWxsZWRJbnB1dCdcbn0pKEZpbGxlZElucHV0KTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBpc0ZpbGxlZCwgaXNBZG9ybmVkU3RhcnQgfSBmcm9tICcuLi9JbnB1dEJhc2UvdXRpbHMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5pbXBvcnQgaXNNdWlFbGVtZW50IGZyb20gJy4uL3V0aWxzL2lzTXVpRWxlbWVudCc7XG5pbXBvcnQgRm9ybUNvbnRyb2xDb250ZXh0IGZyb20gJy4vRm9ybUNvbnRyb2xDb250ZXh0JztcbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAvLyBSZXNldCBmaWVsZHNldCBkZWZhdWx0IHN0eWxlLlxuICAgIG1pbldpZHRoOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIGJvcmRlcjogMCxcbiAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyAvLyBGaXggYWxpZ25tZW50IGlzc3VlIG9uIFNhZmFyaS5cblxuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG1hcmdpbj1cIm5vcm1hbFwiYC4gKi9cbiAgbWFyZ2luTm9ybWFsOiB7XG4gICAgbWFyZ2luVG9wOiAxNixcbiAgICBtYXJnaW5Cb3R0b206IDhcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgbWFyZ2luRGVuc2U6IHtcbiAgICBtYXJnaW5Ub3A6IDgsXG4gICAgbWFyZ2luQm90dG9tOiA0XG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZnVsbFdpZHRoPXt0cnVlfWAuICovXG4gIGZ1bGxXaWR0aDoge1xuICAgIHdpZHRoOiAnMTAwJSdcbiAgfVxufTtcbi8qKlxuICogUHJvdmlkZXMgY29udGV4dCBzdWNoIGFzIGZpbGxlZC9mb2N1c2VkL2Vycm9yL3JlcXVpcmVkIGZvciBmb3JtIGlucHV0cy5cbiAqIFJlbHlpbmcgb24gdGhlIGNvbnRleHQgcHJvdmlkZXMgaGlnaCBmbGV4aWJpbGl0eSBhbmQgZW5zdXJlcyB0aGF0IHRoZSBzdGF0ZSBhbHdheXMgc3RheXNcbiAqIGNvbnNpc3RlbnQgYWNyb3NzIHRoZSBjaGlsZHJlbiBvZiB0aGUgYEZvcm1Db250cm9sYC5cbiAqIFRoaXMgY29udGV4dCBpcyB1c2VkIGJ5IHRoZSBmb2xsb3dpbmcgY29tcG9uZW50czpcbiAqXG4gKiAgLSBGb3JtTGFiZWxcbiAqICAtIEZvcm1IZWxwZXJUZXh0XG4gKiAgLSBJbnB1dFxuICogIC0gSW5wdXRMYWJlbFxuICpcbiAqIFlvdSBjYW4gZmluZCBvbmUgY29tcG9zaXRpb24gZXhhbXBsZSBiZWxvdyBhbmQgbW9yZSBnb2luZyB0byBbdGhlIGRlbW9zXSgvY29tcG9uZW50cy90ZXh0LWZpZWxkcy8jY29tcG9uZW50cykuXG4gKlxuICogYGBganN4XG4gKiA8Rm9ybUNvbnRyb2w+XG4gKiAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJteS1pbnB1dFwiPkVtYWlsIGFkZHJlc3M8L0lucHV0TGFiZWw+XG4gKiAgIDxJbnB1dCBpZD1cIm15LWlucHV0XCIgYXJpYS1kZXNjcmliZWRieT1cIm15LWhlbHBlci10ZXh0XCIgLz5cbiAqICAgPEZvcm1IZWxwZXJUZXh0IGlkPVwibXktaGVscGVyLXRleHRcIj5XZSdsbCBuZXZlciBzaGFyZSB5b3VyIGVtYWlsLjwvRm9ybUhlbHBlclRleHQ+XG4gKiA8L0Zvcm1Db250cm9sPlxuICogYGBgXG4gKlxuICog4pqg77iPT25seSBvbmUgaW5wdXQgY2FuIGJlIHVzZWQgd2l0aGluIGEgRm9ybUNvbnRyb2wuXG4gKi9cblxudmFyIEZvcm1Db250cm9sID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gRm9ybUNvbnRyb2wocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBjb2xvciA9IF9wcm9wcyRjb2xvciA9PT0gdm9pZCAwID8gJ3ByaW1hcnknIDogX3Byb3BzJGNvbG9yLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdkaXYnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzYWJsZWQgPSBfcHJvcHMkZGlzYWJsZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVkLFxuICAgICAgX3Byb3BzJGVycm9yID0gcHJvcHMuZXJyb3IsXG4gICAgICBlcnJvciA9IF9wcm9wcyRlcnJvciA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZXJyb3IsXG4gICAgICBfcHJvcHMkZnVsbFdpZHRoID0gcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgZnVsbFdpZHRoID0gX3Byb3BzJGZ1bGxXaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnVsbFdpZHRoLFxuICAgICAgdmlzdWFsbHlGb2N1c2VkID0gcHJvcHMuZm9jdXNlZCxcbiAgICAgIF9wcm9wcyRoaWRkZW5MYWJlbCA9IHByb3BzLmhpZGRlbkxhYmVsLFxuICAgICAgaGlkZGVuTGFiZWwgPSBfcHJvcHMkaGlkZGVuTGFiZWwgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGhpZGRlbkxhYmVsLFxuICAgICAgX3Byb3BzJG1hcmdpbiA9IHByb3BzLm1hcmdpbixcbiAgICAgIG1hcmdpbiA9IF9wcm9wcyRtYXJnaW4gPT09IHZvaWQgMCA/ICdub25lJyA6IF9wcm9wcyRtYXJnaW4sXG4gICAgICBfcHJvcHMkcmVxdWlyZWQgPSBwcm9wcy5yZXF1aXJlZCxcbiAgICAgIHJlcXVpcmVkID0gX3Byb3BzJHJlcXVpcmVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRyZXF1aXJlZCxcbiAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnc3RhbmRhcmQnIDogX3Byb3BzJHZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJjb21wb25lbnRcIiwgXCJkaXNhYmxlZFwiLCBcImVycm9yXCIsIFwiZnVsbFdpZHRoXCIsIFwiZm9jdXNlZFwiLCBcImhpZGRlbkxhYmVsXCIsIFwibWFyZ2luXCIsIFwicmVxdWlyZWRcIiwgXCJzaXplXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBXZSBuZWVkIHRvIGl0ZXJhdGUgdGhyb3VnaCB0aGUgY2hpbGRyZW4gYW5kIGZpbmQgdGhlIElucHV0IGluIG9yZGVyXG4gICAgLy8gdG8gZnVsbHkgc3VwcG9ydCBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuXG4gICAgdmFyIGluaXRpYWxBZG9ybmVkU3RhcnQgPSBmYWxzZTtcblxuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmICghaXNNdWlFbGVtZW50KGNoaWxkLCBbJ0lucHV0JywgJ1NlbGVjdCddKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpbnB1dCA9IGlzTXVpRWxlbWVudChjaGlsZCwgWydTZWxlY3QnXSkgPyBjaGlsZC5wcm9wcy5pbnB1dCA6IGNoaWxkO1xuXG4gICAgICAgIGlmIChpbnB1dCAmJiBpc0Fkb3JuZWRTdGFydChpbnB1dC5wcm9wcykpIHtcbiAgICAgICAgICBpbml0aWFsQWRvcm5lZFN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluaXRpYWxBZG9ybmVkU3RhcnQ7XG4gIH0pLFxuICAgICAgYWRvcm5lZFN0YXJ0ID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0QWRvcm5lZFN0YXJ0ID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUyID0gUmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIC8vIFdlIG5lZWQgdG8gaXRlcmF0ZSB0aHJvdWdoIHRoZSBjaGlsZHJlbiBhbmQgZmluZCB0aGUgSW5wdXQgaW4gb3JkZXJcbiAgICAvLyB0byBmdWxseSBzdXBwb3J0IHNlcnZlci1zaWRlIHJlbmRlcmluZy5cbiAgICB2YXIgaW5pdGlhbEZpbGxlZCA9IGZhbHNlO1xuXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKCFpc011aUVsZW1lbnQoY2hpbGQsIFsnSW5wdXQnLCAnU2VsZWN0J10pKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRmlsbGVkKGNoaWxkLnByb3BzLCB0cnVlKSkge1xuICAgICAgICAgIGluaXRpYWxGaWxsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5pdGlhbEZpbGxlZDtcbiAgfSksXG4gICAgICBmaWxsZWQgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0RmlsbGVkID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMyA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIF9mb2N1c2VkID0gX1JlYWN0JHVzZVN0YXRlM1swXSxcbiAgICAgIHNldEZvY3VzZWQgPSBfUmVhY3QkdXNlU3RhdGUzWzFdO1xuXG4gIHZhciBmb2N1c2VkID0gdmlzdWFsbHlGb2N1c2VkICE9PSB1bmRlZmluZWQgPyB2aXN1YWxseUZvY3VzZWQgOiBfZm9jdXNlZDtcblxuICBpZiAoZGlzYWJsZWQgJiYgZm9jdXNlZCkge1xuICAgIHNldEZvY3VzZWQoZmFsc2UpO1xuICB9XG5cbiAgdmFyIHJlZ2lzdGVyRWZmZWN0O1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgdmFyIHJlZ2lzdGVyZWRJbnB1dCA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG5cbiAgICByZWdpc3RlckVmZmVjdCA9IGZ1bmN0aW9uIHJlZ2lzdGVyRWZmZWN0KCkge1xuICAgICAgaWYgKHJlZ2lzdGVyZWRJbnB1dC5jdXJyZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogVGhlcmUgYXJlIG11bHRpcGxlIElucHV0QmFzZSBjb21wb25lbnRzIGluc2lkZSBhIEZvcm1Db250cm9sLicsICdUaGlzIGlzIG5vdCBzdXBwb3J0ZWQuIEl0IG1pZ2h0IGNhdXNlIGluZmluaXRlIHJlbmRlcmluZyBsb29wcy4nLCAnT25seSB1c2Ugb25lIElucHV0QmFzZS4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG5cbiAgICAgIHJlZ2lzdGVyZWRJbnB1dC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlZ2lzdGVyZWRJbnB1dC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICB9O1xuICAgIH07XG4gIH1cblxuICB2YXIgb25GaWxsZWQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgc2V0RmlsbGVkKHRydWUpO1xuICB9LCBbXSk7XG4gIHZhciBvbkVtcHR5ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHNldEZpbGxlZChmYWxzZSk7XG4gIH0sIFtdKTtcbiAgdmFyIGNoaWxkQ29udGV4dCA9IHtcbiAgICBhZG9ybmVkU3RhcnQ6IGFkb3JuZWRTdGFydCxcbiAgICBzZXRBZG9ybmVkU3RhcnQ6IHNldEFkb3JuZWRTdGFydCxcbiAgICBjb2xvcjogY29sb3IsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIGVycm9yOiBlcnJvcixcbiAgICBmaWxsZWQ6IGZpbGxlZCxcbiAgICBmb2N1c2VkOiBmb2N1c2VkLFxuICAgIGZ1bGxXaWR0aDogZnVsbFdpZHRoLFxuICAgIGhpZGRlbkxhYmVsOiBoaWRkZW5MYWJlbCxcbiAgICBtYXJnaW46IChzaXplID09PSAnc21hbGwnID8gJ2RlbnNlJyA6IHVuZGVmaW5lZCkgfHwgbWFyZ2luLFxuICAgIG9uQmx1cjogZnVuY3Rpb24gb25CbHVyKCkge1xuICAgICAgc2V0Rm9jdXNlZChmYWxzZSk7XG4gICAgfSxcbiAgICBvbkVtcHR5OiBvbkVtcHR5LFxuICAgIG9uRmlsbGVkOiBvbkZpbGxlZCxcbiAgICBvbkZvY3VzOiBmdW5jdGlvbiBvbkZvY3VzKCkge1xuICAgICAgc2V0Rm9jdXNlZCh0cnVlKTtcbiAgICB9LFxuICAgIHJlZ2lzdGVyRWZmZWN0OiByZWdpc3RlckVmZmVjdCxcbiAgICByZXF1aXJlZDogcmVxdWlyZWQsXG4gICAgdmFyaWFudDogdmFyaWFudFxuICB9O1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRyb2xDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNoaWxkQ29udGV4dFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIG1hcmdpbiAhPT0gJ25vbmUnICYmIGNsYXNzZXNbXCJtYXJnaW5cIi5jb25jYXQoY2FwaXRhbGl6ZShtYXJnaW4pKV0sIGZ1bGxXaWR0aCAmJiBjbGFzc2VzLmZ1bGxXaWR0aCksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBjaGlsZHJlbikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBGb3JtQ29udHJvbC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudHMgb2YgdGhlIGZvcm0gY29udHJvbC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsLCBpbnB1dCBhbmQgaGVscGVyIHRleHQgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiBhIGRpc2FibGVkIHN0YXRlLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCBzaG91bGQgYmUgZGlzcGxheWVkIGluIGFuIGVycm9yIHN0YXRlLlxuICAgKi9cbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjb21wb25lbnQgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gZm9jdXNlZCBzdGF0ZS5cbiAgICovXG4gIGZvY3VzZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjb21wb25lbnQgd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCB3aWxsIGJlIGhpZGRlbi5cbiAgICogVGhpcyBpcyB1c2VkIHRvIGluY3JlYXNlIGRlbnNpdHkgZm9yIGEgYEZpbGxlZElucHV0YC5cbiAgICogQmUgc3VyZSB0byBhZGQgYGFyaWEtbGFiZWxgIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBoaWRkZW5MYWJlbDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGBkZW5zZWAgb3IgYG5vcm1hbGAsIHdpbGwgYWRqdXN0IHZlcnRpY2FsIHNwYWNpbmcgb2YgdGhpcyBhbmQgY29udGFpbmVkIGNvbXBvbmVudHMuXG4gICAqL1xuICBtYXJnaW46IFByb3BUeXBlcy5vbmVPZihbJ2RlbnNlJywgJ25vbmUnLCAnbm9ybWFsJ10pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCB3aWxsIGluZGljYXRlIHRoYXQgdGhlIGlucHV0IGlzIHJlcXVpcmVkLlxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgdGV4dCBmaWVsZC5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ21lZGl1bScsICdzbWFsbCddKSxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZmlsbGVkJywgJ291dGxpbmVkJywgJ3N0YW5kYXJkJ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUZvcm1Db250cm9sJ1xufSkoRm9ybUNvbnRyb2wpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG52YXIgRm9ybUNvbnRyb2xDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBGb3JtQ29udHJvbENvbnRleHQuZGlzcGxheU5hbWUgPSAnRm9ybUNvbnRyb2xDb250ZXh0Jztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvcm1Db250cm9sKCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChGb3JtQ29udHJvbENvbnRleHQpO1xufVxuZXhwb3J0IGRlZmF1bHQgRm9ybUNvbnRyb2xDb250ZXh0OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1Db250cm9sU3RhdGUoX3JlZikge1xuICB2YXIgcHJvcHMgPSBfcmVmLnByb3BzLFxuICAgICAgc3RhdGVzID0gX3JlZi5zdGF0ZXMsXG4gICAgICBtdWlGb3JtQ29udHJvbCA9IF9yZWYubXVpRm9ybUNvbnRyb2w7XG4gIHJldHVybiBzdGF0ZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHN0YXRlKSB7XG4gICAgYWNjW3N0YXRlXSA9IHByb3BzW3N0YXRlXTtcblxuICAgIGlmIChtdWlGb3JtQ29udHJvbCkge1xuICAgICAgaWYgKHR5cGVvZiBwcm9wc1tzdGF0ZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGFjY1tzdGF0ZV0gPSBtdWlGb3JtQ29udHJvbFtzdGF0ZV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufSIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0Zvcm1Db250cm9sJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlRm9ybUNvbnRyb2wgfSBmcm9tICcuL3VzZUZvcm1Db250cm9sJzsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybUNvbnRyb2xDb250ZXh0IGZyb20gJy4vRm9ybUNvbnRyb2xDb250ZXh0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcm1Db250cm9sKCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChGb3JtQ29udHJvbENvbnRleHQpO1xufSIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBmb3JtQ29udHJvbFN0YXRlIGZyb20gJy4uL0Zvcm1Db250cm9sL2Zvcm1Db250cm9sU3RhdGUnO1xuaW1wb3J0IHVzZUZvcm1Db250cm9sIGZyb20gJy4uL0Zvcm1Db250cm9sL3VzZUZvcm1Db250cm9sJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiBfZXh0ZW5kcyh7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeVxuICAgIH0sIHRoZW1lLnR5cG9ncmFwaHkuY2FwdGlvbiwge1xuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICBtYXJnaW5Ub3A6IDMsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5kaXNhYmxlZFxuICAgICAgfSxcbiAgICAgICcmJGVycm9yJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluXG4gICAgICB9XG4gICAgfSksXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBlcnJvcj17dHJ1ZX1gLiAqL1xuICAgIGVycm9yOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVkPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgbWFyZ2luPVwiZGVuc2VcImAuICovXG4gICAgbWFyZ2luRGVuc2U6IHtcbiAgICAgIG1hcmdpblRvcDogNFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiZmlsbGVkXCJgIG9yIGB2YXJpYW50PVwib3V0bGluZWRcImAuICovXG4gICAgY29udGFpbmVkOiB7XG4gICAgICBtYXJnaW5MZWZ0OiAxNCxcbiAgICAgIG1hcmdpblJpZ2h0OiAxNFxuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmb2N1c2VkPXt0cnVlfWAuICovXG4gICAgZm9jdXNlZDoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmaWxsZWQ9e3RydWV9YC4gKi9cbiAgICBmaWxsZWQ6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgcmVxdWlyZWQ9e3RydWV9YC4gKi9cbiAgICByZXF1aXJlZDoge31cbiAgfTtcbn07XG52YXIgRm9ybUhlbHBlclRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBGb3JtSGVscGVyVGV4dChwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ3AnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBlcnJvciA9IHByb3BzLmVycm9yLFxuICAgICAgZmlsbGVkID0gcHJvcHMuZmlsbGVkLFxuICAgICAgZm9jdXNlZCA9IHByb3BzLmZvY3VzZWQsXG4gICAgICBtYXJnaW4gPSBwcm9wcy5tYXJnaW4sXG4gICAgICByZXF1aXJlZCA9IHByb3BzLnJlcXVpcmVkLFxuICAgICAgdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29tcG9uZW50XCIsIFwiZGlzYWJsZWRcIiwgXCJlcnJvclwiLCBcImZpbGxlZFwiLCBcImZvY3VzZWRcIiwgXCJtYXJnaW5cIiwgXCJyZXF1aXJlZFwiLCBcInZhcmlhbnRcIl0pO1xuXG4gIHZhciBtdWlGb3JtQ29udHJvbCA9IHVzZUZvcm1Db250cm9sKCk7XG4gIHZhciBmY3MgPSBmb3JtQ29udHJvbFN0YXRlKHtcbiAgICBwcm9wczogcHJvcHMsXG4gICAgbXVpRm9ybUNvbnRyb2w6IG11aUZvcm1Db250cm9sLFxuICAgIHN0YXRlczogWyd2YXJpYW50JywgJ21hcmdpbicsICdkaXNhYmxlZCcsICdlcnJvcicsICdmaWxsZWQnLCAnZm9jdXNlZCcsICdyZXF1aXJlZCddXG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgKGZjcy52YXJpYW50ID09PSAnZmlsbGVkJyB8fCBmY3MudmFyaWFudCA9PT0gJ291dGxpbmVkJykgJiYgY2xhc3Nlcy5jb250YWluZWQsIGNsYXNzTmFtZSwgZmNzLmRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQsIGZjcy5lcnJvciAmJiBjbGFzc2VzLmVycm9yLCBmY3MuZmlsbGVkICYmIGNsYXNzZXMuZmlsbGVkLCBmY3MuZm9jdXNlZCAmJiBjbGFzc2VzLmZvY3VzZWQsIGZjcy5yZXF1aXJlZCAmJiBjbGFzc2VzLnJlcXVpcmVkLCBmY3MubWFyZ2luID09PSAnZGVuc2UnICYmIGNsYXNzZXMubWFyZ2luRGVuc2UpLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSwgY2hpbGRyZW4gPT09ICcgJyA/XG4gIC8qI19fUFVSRV9fKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgIF9faHRtbDogJyYjODIwMzsnXG4gICAgfVxuICB9KSA6IGNoaWxkcmVuKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gRm9ybUhlbHBlclRleHQucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogSWYgYCcgJ2AgaXMgcHJvdmlkZWQsIHRoZSBjb21wb25lbnQgcmVzZXJ2ZXMgb25lIGxpbmUgaGVpZ2h0IGZvciBkaXNwbGF5aW5nIGEgZnV0dXJlIG1lc3NhZ2UuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaGVscGVyIHRleHQgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiBhIGRpc2FibGVkIHN0YXRlLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGhlbHBlciB0ZXh0IHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gYW4gZXJyb3Igc3RhdGUuXG4gICAqL1xuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGhlbHBlciB0ZXh0IHNob3VsZCB1c2UgZmlsbGVkIGNsYXNzZXMga2V5LlxuICAgKi9cbiAgZmlsbGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaGVscGVyIHRleHQgc2hvdWxkIHVzZSBmb2N1c2VkIGNsYXNzZXMga2V5LlxuICAgKi9cbiAgZm9jdXNlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGBkZW5zZWAsIHdpbGwgYWRqdXN0IHZlcnRpY2FsIHNwYWNpbmcuIFRoaXMgaXMgbm9ybWFsbHkgb2J0YWluZWQgdmlhIGNvbnRleHQgZnJvbVxuICAgKiBGb3JtQ29udHJvbC5cbiAgICovXG4gIG1hcmdpbjogUHJvcFR5cGVzLm9uZU9mKFsnZGVuc2UnXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGhlbHBlciB0ZXh0IHNob3VsZCB1c2UgcmVxdWlyZWQgY2xhc3NlcyBrZXkuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2ZpbGxlZCcsICdvdXRsaW5lZCcsICdzdGFuZGFyZCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlGb3JtSGVscGVyVGV4dCdcbn0pKEZvcm1IZWxwZXJUZXh0KTsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgZm9ybUNvbnRyb2xTdGF0ZSBmcm9tICcuLi9Gb3JtQ29udHJvbC9mb3JtQ29udHJvbFN0YXRlJztcbmltcG9ydCB1c2VGb3JtQ29udHJvbCBmcm9tICcuLi9Gb3JtQ29udHJvbC91c2VGb3JtQ29udHJvbCc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiBfZXh0ZW5kcyh7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeVxuICAgIH0sIHRoZW1lLnR5cG9ncmFwaHkuYm9keTEsIHtcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgJyYkZm9jdXNlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuZGlzYWJsZWRcbiAgICAgIH0sXG4gICAgICAnJiRlcnJvcic6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpblxuICAgICAgfVxuICAgIH0pLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgY29sb3IgaXMgc2Vjb25kYXJ5LiAqL1xuICAgIGNvbG9yU2Vjb25kYXJ5OiB7XG4gICAgICAnJiRmb2N1c2VkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmb2N1c2VkPXt0cnVlfWAuICovXG4gICAgZm9jdXNlZDoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlZD17dHJ1ZX1gLiAqL1xuICAgIGRpc2FibGVkOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGVycm9yPXt0cnVlfWAuICovXG4gICAgZXJyb3I6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZmlsbGVkPXt0cnVlfWAuICovXG4gICAgZmlsbGVkOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHJlcXVpcmVkPXt0cnVlfWAuICovXG4gICAgcmVxdWlyZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGFzdGVyaXNrIGVsZW1lbnQuICovXG4gICAgYXN0ZXJpc2s6IHtcbiAgICAgICcmJGVycm9yJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluXG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbnZhciBGb3JtTGFiZWwgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBGb3JtTGFiZWwocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBDb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAnbGFiZWwnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBlcnJvciA9IHByb3BzLmVycm9yLFxuICAgICAgZmlsbGVkID0gcHJvcHMuZmlsbGVkLFxuICAgICAgZm9jdXNlZCA9IHByb3BzLmZvY3VzZWQsXG4gICAgICByZXF1aXJlZCA9IHByb3BzLnJlcXVpcmVkLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbG9yXCIsIFwiY29tcG9uZW50XCIsIFwiZGlzYWJsZWRcIiwgXCJlcnJvclwiLCBcImZpbGxlZFwiLCBcImZvY3VzZWRcIiwgXCJyZXF1aXJlZFwiXSk7XG5cbiAgdmFyIG11aUZvcm1Db250cm9sID0gdXNlRm9ybUNvbnRyb2woKTtcbiAgdmFyIGZjcyA9IGZvcm1Db250cm9sU3RhdGUoe1xuICAgIHByb3BzOiBwcm9wcyxcbiAgICBtdWlGb3JtQ29udHJvbDogbXVpRm9ybUNvbnRyb2wsXG4gICAgc3RhdGVzOiBbJ2NvbG9yJywgJ3JlcXVpcmVkJywgJ2ZvY3VzZWQnLCAnZGlzYWJsZWQnLCAnZXJyb3InLCAnZmlsbGVkJ11cbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc2VzW1wiY29sb3JcIi5jb25jYXQoY2FwaXRhbGl6ZShmY3MuY29sb3IgfHwgJ3ByaW1hcnknKSldLCBjbGFzc05hbWUsIGZjcy5kaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkLCBmY3MuZXJyb3IgJiYgY2xhc3Nlcy5lcnJvciwgZmNzLmZpbGxlZCAmJiBjbGFzc2VzLmZpbGxlZCwgZmNzLmZvY3VzZWQgJiYgY2xhc3Nlcy5mb2N1c2VkLCBmY3MucmVxdWlyZWQgJiYgY2xhc3Nlcy5yZXF1aXJlZCksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBjaGlsZHJlbiwgZmNzLnJlcXVpcmVkICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmFzdGVyaXNrLCBmY3MuZXJyb3IgJiYgY2xhc3Nlcy5lcnJvcilcbiAgfSwgXCJcXHUyMDA5XCIsICcqJykpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBGb3JtTGFiZWwucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gYSBkaXNhYmxlZCBzdGF0ZS5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbGFiZWwgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiBhbiBlcnJvciBzdGF0ZS5cbiAgICovXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbGFiZWwgc2hvdWxkIHVzZSBmaWxsZWQgY2xhc3NlcyBrZXkuXG4gICAqL1xuICBmaWxsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCBvZiB0aGlzIGxhYmVsIGlzIGZvY3VzZWQgKHVzZWQgYnkgYEZvcm1Hcm91cGAgY29tcG9uZW50cykuXG4gICAqL1xuICBmb2N1c2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbGFiZWwgd2lsbCBpbmRpY2F0ZSB0aGF0IHRoZSBpbnB1dCBpcyByZXF1aXJlZC5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlGb3JtTGFiZWwnXG59KShGb3JtTGFiZWwpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCB1c2VUaGVtZSBmcm9tICcuLi9zdHlsZXMvdXNlVGhlbWUnO1xuaW1wb3J0IHsgcmVmbG93LCBnZXRUcmFuc2l0aW9uUHJvcHMgfSBmcm9tICcuLi90cmFuc2l0aW9ucy91dGlscyc7XG5pbXBvcnQgdXNlRm9ya1JlZiBmcm9tICcuLi91dGlscy91c2VGb3JrUmVmJztcblxuZnVuY3Rpb24gZ2V0U2NhbGUodmFsdWUpIHtcbiAgcmV0dXJuIFwic2NhbGUoXCIuY29uY2F0KHZhbHVlLCBcIiwgXCIpLmNvbmNhdChNYXRoLnBvdyh2YWx1ZSwgMiksIFwiKVwiKTtcbn1cblxudmFyIHN0eWxlcyA9IHtcbiAgZW50ZXJpbmc6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zZm9ybTogZ2V0U2NhbGUoMSlcbiAgfSxcbiAgZW50ZXJlZDoge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiAnbm9uZSdcbiAgfVxufTtcbi8qKlxuICogVGhlIEdyb3cgdHJhbnNpdGlvbiBpcyB1c2VkIGJ5IHRoZSBbVG9vbHRpcF0oL2NvbXBvbmVudHMvdG9vbHRpcHMvKSBhbmRcbiAqIFtQb3BvdmVyXSgvY29tcG9uZW50cy9wb3BvdmVyLykgY29tcG9uZW50cy5cbiAqIEl0IHVzZXMgW3JlYWN0LXRyYW5zaXRpb24tZ3JvdXBdKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXApIGludGVybmFsbHkuXG4gKi9cblxudmFyIEdyb3cgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBHcm93KHByb3BzLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBfcHJvcHMkZGlzYWJsZVN0cmljdE0gPSBwcm9wcy5kaXNhYmxlU3RyaWN0TW9kZUNvbXBhdCxcbiAgICAgIGRpc2FibGVTdHJpY3RNb2RlQ29tcGF0ID0gX3Byb3BzJGRpc2FibGVTdHJpY3RNID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlU3RyaWN0TSxcbiAgICAgIGluUHJvcCA9IHByb3BzLmluLFxuICAgICAgb25FbnRlciA9IHByb3BzLm9uRW50ZXIsXG4gICAgICBvbkVudGVyZWQgPSBwcm9wcy5vbkVudGVyZWQsXG4gICAgICBvbkVudGVyaW5nID0gcHJvcHMub25FbnRlcmluZyxcbiAgICAgIG9uRXhpdCA9IHByb3BzLm9uRXhpdCxcbiAgICAgIG9uRXhpdGVkID0gcHJvcHMub25FeGl0ZWQsXG4gICAgICBvbkV4aXRpbmcgPSBwcm9wcy5vbkV4aXRpbmcsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgX3Byb3BzJHRpbWVvdXQgPSBwcm9wcy50aW1lb3V0LFxuICAgICAgdGltZW91dCA9IF9wcm9wcyR0aW1lb3V0ID09PSB2b2lkIDAgPyAnYXV0bycgOiBfcHJvcHMkdGltZW91dCxcbiAgICAgIF9wcm9wcyRUcmFuc2l0aW9uQ29tcCA9IHByb3BzLlRyYW5zaXRpb25Db21wb25lbnQsXG4gICAgICBUcmFuc2l0aW9uQ29tcG9uZW50ID0gX3Byb3BzJFRyYW5zaXRpb25Db21wID09PSB2b2lkIDAgPyBUcmFuc2l0aW9uIDogX3Byb3BzJFRyYW5zaXRpb25Db21wLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiZGlzYWJsZVN0cmljdE1vZGVDb21wYXRcIiwgXCJpblwiLCBcIm9uRW50ZXJcIiwgXCJvbkVudGVyZWRcIiwgXCJvbkVudGVyaW5nXCIsIFwib25FeGl0XCIsIFwib25FeGl0ZWRcIiwgXCJvbkV4aXRpbmdcIiwgXCJzdHlsZVwiLCBcInRpbWVvdXRcIiwgXCJUcmFuc2l0aW9uQ29tcG9uZW50XCJdKTtcblxuICB2YXIgdGltZXIgPSBSZWFjdC51c2VSZWYoKTtcbiAgdmFyIGF1dG9UaW1lb3V0ID0gUmVhY3QudXNlUmVmKCk7XG4gIHZhciB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIHZhciBlbmFibGVTdHJpY3RNb2RlQ29tcGF0ID0gdGhlbWUudW5zdGFibGVfc3RyaWN0TW9kZSAmJiAhZGlzYWJsZVN0cmljdE1vZGVDb21wYXQ7XG4gIHZhciBub2RlUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgZm9yZWlnblJlZiA9IHVzZUZvcmtSZWYoY2hpbGRyZW4ucmVmLCByZWYpO1xuICB2YXIgaGFuZGxlUmVmID0gdXNlRm9ya1JlZihlbmFibGVTdHJpY3RNb2RlQ29tcGF0ID8gbm9kZVJlZiA6IHVuZGVmaW5lZCwgZm9yZWlnblJlZik7XG5cbiAgdmFyIG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2sgPSBmdW5jdGlvbiBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChub2RlT3JBcHBlYXJpbmcsIG1heWJlQXBwZWFyaW5nKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF9yZWYgPSBlbmFibGVTdHJpY3RNb2RlQ29tcGF0ID8gW25vZGVSZWYuY3VycmVudCwgbm9kZU9yQXBwZWFyaW5nXSA6IFtub2RlT3JBcHBlYXJpbmcsIG1heWJlQXBwZWFyaW5nXSxcbiAgICAgICAgICAgIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgICAgICBub2RlID0gX3JlZjJbMF0sXG4gICAgICAgICAgICBpc0FwcGVhcmluZyA9IF9yZWYyWzFdOyAvLyBvbkVudGVyWHh4IGFuZCBvbkV4aXRYeHggY2FsbGJhY2tzIGhhdmUgYSBkaWZmZXJlbnQgYXJndW1lbnRzLmxlbmd0aCB2YWx1ZS5cblxuXG4gICAgICAgIGlmIChpc0FwcGVhcmluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY2FsbGJhY2sobm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2sobm9kZSwgaXNBcHBlYXJpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgaGFuZGxlRW50ZXJpbmcgPSBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrKG9uRW50ZXJpbmcpO1xuICB2YXIgaGFuZGxlRW50ZXIgPSBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrKGZ1bmN0aW9uIChub2RlLCBpc0FwcGVhcmluZykge1xuICAgIHJlZmxvdyhub2RlKTsgLy8gU28gdGhlIGFuaW1hdGlvbiBhbHdheXMgc3RhcnQgZnJvbSB0aGUgc3RhcnQuXG5cbiAgICB2YXIgX2dldFRyYW5zaXRpb25Qcm9wcyA9IGdldFRyYW5zaXRpb25Qcm9wcyh7XG4gICAgICBzdHlsZTogc3R5bGUsXG4gICAgICB0aW1lb3V0OiB0aW1lb3V0XG4gICAgfSwge1xuICAgICAgbW9kZTogJ2VudGVyJ1xuICAgIH0pLFxuICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSBfZ2V0VHJhbnNpdGlvblByb3BzLmR1cmF0aW9uLFxuICAgICAgICBkZWxheSA9IF9nZXRUcmFuc2l0aW9uUHJvcHMuZGVsYXk7XG5cbiAgICB2YXIgZHVyYXRpb247XG5cbiAgICBpZiAodGltZW91dCA9PT0gJ2F1dG8nKSB7XG4gICAgICBkdXJhdGlvbiA9IHRoZW1lLnRyYW5zaXRpb25zLmdldEF1dG9IZWlnaHREdXJhdGlvbihub2RlLmNsaWVudEhlaWdodCk7XG4gICAgICBhdXRvVGltZW91dC5jdXJyZW50ID0gZHVyYXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgIH1cblxuICAgIG5vZGUuc3R5bGUudHJhbnNpdGlvbiA9IFt0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknLCB7XG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBkZWxheTogZGVsYXlcbiAgICB9KSwgdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd0cmFuc2Zvcm0nLCB7XG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24gKiAwLjY2NixcbiAgICAgIGRlbGF5OiBkZWxheVxuICAgIH0pXS5qb2luKCcsJyk7XG5cbiAgICBpZiAob25FbnRlcikge1xuICAgICAgb25FbnRlcihub2RlLCBpc0FwcGVhcmluZyk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGhhbmRsZUVudGVyZWQgPSBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrKG9uRW50ZXJlZCk7XG4gIHZhciBoYW5kbGVFeGl0aW5nID0gbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayhvbkV4aXRpbmcpO1xuICB2YXIgaGFuZGxlRXhpdCA9IG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2soZnVuY3Rpb24gKG5vZGUpIHtcbiAgICB2YXIgX2dldFRyYW5zaXRpb25Qcm9wczIgPSBnZXRUcmFuc2l0aW9uUHJvcHMoe1xuICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgdGltZW91dDogdGltZW91dFxuICAgIH0sIHtcbiAgICAgIG1vZGU6ICdleGl0J1xuICAgIH0pLFxuICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSBfZ2V0VHJhbnNpdGlvblByb3BzMi5kdXJhdGlvbixcbiAgICAgICAgZGVsYXkgPSBfZ2V0VHJhbnNpdGlvblByb3BzMi5kZWxheTtcblxuICAgIHZhciBkdXJhdGlvbjtcblxuICAgIGlmICh0aW1lb3V0ID09PSAnYXV0bycpIHtcbiAgICAgIGR1cmF0aW9uID0gdGhlbWUudHJhbnNpdGlvbnMuZ2V0QXV0b0hlaWdodER1cmF0aW9uKG5vZGUuY2xpZW50SGVpZ2h0KTtcbiAgICAgIGF1dG9UaW1lb3V0LmN1cnJlbnQgPSBkdXJhdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgZHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb247XG4gICAgfVxuXG4gICAgbm9kZS5zdHlsZS50cmFuc2l0aW9uID0gW3RoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScsIHtcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIGRlbGF5OiBkZWxheVxuICAgIH0pLCB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3RyYW5zZm9ybScsIHtcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiAqIDAuNjY2LFxuICAgICAgZGVsYXk6IGRlbGF5IHx8IGR1cmF0aW9uICogMC4zMzNcbiAgICB9KV0uam9pbignLCcpO1xuICAgIG5vZGUuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9IGdldFNjYWxlKDAuNzUpO1xuXG4gICAgaWYgKG9uRXhpdCkge1xuICAgICAgb25FeGl0KG5vZGUpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBoYW5kbGVFeGl0ZWQgPSBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrKG9uRXhpdGVkKTtcblxuICB2YXIgYWRkRW5kTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRFbmRMaXN0ZW5lcihub2RlT3JOZXh0LCBtYXliZU5leHQpIHtcbiAgICB2YXIgbmV4dCA9IGVuYWJsZVN0cmljdE1vZGVDb21wYXQgPyBub2RlT3JOZXh0IDogbWF5YmVOZXh0O1xuXG4gICAgaWYgKHRpbWVvdXQgPT09ICdhdXRvJykge1xuICAgICAgdGltZXIuY3VycmVudCA9IHNldFRpbWVvdXQobmV4dCwgYXV0b1RpbWVvdXQuY3VycmVudCB8fCAwKTtcbiAgICB9XG4gIH07XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyLmN1cnJlbnQpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Db21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBhcHBlYXI6IHRydWUsXG4gICAgaW46IGluUHJvcCxcbiAgICBub2RlUmVmOiBlbmFibGVTdHJpY3RNb2RlQ29tcGF0ID8gbm9kZVJlZiA6IHVuZGVmaW5lZCxcbiAgICBvbkVudGVyOiBoYW5kbGVFbnRlcixcbiAgICBvbkVudGVyZWQ6IGhhbmRsZUVudGVyZWQsXG4gICAgb25FbnRlcmluZzogaGFuZGxlRW50ZXJpbmcsXG4gICAgb25FeGl0OiBoYW5kbGVFeGl0LFxuICAgIG9uRXhpdGVkOiBoYW5kbGVFeGl0ZWQsXG4gICAgb25FeGl0aW5nOiBoYW5kbGVFeGl0aW5nLFxuICAgIGFkZEVuZExpc3RlbmVyOiBhZGRFbmRMaXN0ZW5lcixcbiAgICB0aW1lb3V0OiB0aW1lb3V0ID09PSAnYXV0bycgPyBudWxsIDogdGltZW91dFxuICB9LCBvdGhlciksIGZ1bmN0aW9uIChzdGF0ZSwgY2hpbGRQcm9wcykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCBfZXh0ZW5kcyh7XG4gICAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB0cmFuc2Zvcm06IGdldFNjYWxlKDAuNzUpLFxuICAgICAgICB2aXNpYmlsaXR5OiBzdGF0ZSA9PT0gJ2V4aXRlZCcgJiYgIWluUHJvcCA/ICdoaWRkZW4nIDogdW5kZWZpbmVkXG4gICAgICB9LCBzdHlsZXNbc3RhdGVdLCBzdHlsZSwgY2hpbGRyZW4ucHJvcHMuc3R5bGUpLFxuICAgICAgcmVmOiBoYW5kbGVSZWZcbiAgICB9LCBjaGlsZFByb3BzKSk7XG4gIH0pO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBHcm93LnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIEEgc2luZ2xlIGNoaWxkIGNvbnRlbnQgZWxlbWVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudCxcblxuICAvKipcbiAgICogRW5hYmxlIHRoaXMgcHJvcCBpZiB5b3UgZW5jb3VudGVyICdGdW5jdGlvbiBjb21wb25lbnRzIGNhbm5vdCBiZSBnaXZlbiByZWZzJyxcbiAgICogdXNlIGB1bnN0YWJsZV9jcmVhdGVTdHJpY3RNb2RlVGhlbWVgLFxuICAgKiBhbmQgY2FuJ3QgZm9yd2FyZCB0aGUgcmVmIGluIHRoZSBjaGlsZCBjb21wb25lbnQuXG4gICAqL1xuICBkaXNhYmxlU3RyaWN0TW9kZUNvbXBhdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgc2hvdyB0aGUgY29tcG9uZW50OyB0cmlnZ2VycyB0aGUgZW50ZXIgb3IgZXhpdCBhbmltYXRpb24uXG4gICAqL1xuICBpbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogVGhlIGR1cmF0aW9uIGZvciB0aGUgdHJhbnNpdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBZb3UgbWF5IHNwZWNpZnkgYSBzaW5nbGUgdGltZW91dCBmb3IgYWxsIHRyYW5zaXRpb25zLCBvciBpbmRpdmlkdWFsbHkgd2l0aCBhbiBvYmplY3QuXG4gICAqXG4gICAqIFNldCB0byAnYXV0bycgdG8gYXV0b21hdGljYWxseSBjYWxjdWxhdGUgdHJhbnNpdGlvbiB0aW1lIGJhc2VkIG9uIGhlaWdodC5cbiAgICovXG4gIHRpbWVvdXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXBwZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGVudGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGV4aXQ6IFByb3BUeXBlcy5udW1iZXJcbiAgfSldKVxufSA6IHZvaWQgMDtcbkdyb3cubXVpU3VwcG9ydEF1dG8gPSB0cnVlO1xuZXhwb3J0IGRlZmF1bHQgR3JvdzsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBmb3JtYXRNdWlFcnJvck1lc3NhZ2UgYXMgX2Zvcm1hdE11aUVycm9yTWVzc2FnZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIjtcblxuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvY2xpY2stZXZlbnRzLWhhdmUta2V5LWV2ZW50cywganN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyByZWZUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBmb3JtQ29udHJvbFN0YXRlIGZyb20gJy4uL0Zvcm1Db250cm9sL2Zvcm1Db250cm9sU3RhdGUnO1xuaW1wb3J0IEZvcm1Db250cm9sQ29udGV4dCwgeyB1c2VGb3JtQ29udHJvbCB9IGZyb20gJy4uL0Zvcm1Db250cm9sL0Zvcm1Db250cm9sQ29udGV4dCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmltcG9ydCB1c2VGb3JrUmVmIGZyb20gJy4uL3V0aWxzL3VzZUZvcmtSZWYnO1xuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSAnLi4vVGV4dGFyZWFBdXRvc2l6ZSc7XG5pbXBvcnQgeyBpc0ZpbGxlZCB9IGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgdmFyIGxpZ2h0ID0gdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnO1xuICB2YXIgcGxhY2Vob2xkZXIgPSB7XG4gICAgY29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgIG9wYWNpdHk6IGxpZ2h0ID8gMC40MiA6IDAuNSxcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknLCB7XG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRlclxuICAgIH0pXG4gIH07XG4gIHZhciBwbGFjZWhvbGRlckhpZGRlbiA9IHtcbiAgICBvcGFjaXR5OiAnMCAhaW1wb3J0YW50J1xuICB9O1xuICB2YXIgcGxhY2Vob2xkZXJWaXNpYmxlID0ge1xuICAgIG9wYWNpdHk6IGxpZ2h0ID8gMC40MiA6IDAuNVxuICB9O1xuICByZXR1cm4ge1xuICAgICdAZ2xvYmFsJzoge1xuICAgICAgJ0BrZXlmcmFtZXMgbXVpLWF1dG8tZmlsbCc6IHt9LFxuICAgICAgJ0BrZXlmcmFtZXMgbXVpLWF1dG8tZmlsbC1jYW5jZWwnOiB7fVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IF9leHRlbmRzKHt9LCB0aGVtZS50eXBvZ3JhcGh5LmJvZHkxLCB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgICBsaW5lSGVpZ2h0OiAnMS4xODc2ZW0nLFxuICAgICAgLy8gUmVzZXQgKDE5cHgpLCBtYXRjaCB0aGUgbmF0aXZlIGlucHV0IGxpbmUtaGVpZ2h0XG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIC8vIFByZXZlbnQgcGFkZGluZyBpc3N1ZSB3aXRoIGZ1bGxXaWR0aC5cbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgY3Vyc29yOiAndGV4dCcsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5kaXNhYmxlZCxcbiAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCdcbiAgICAgIH1cbiAgICB9KSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIGNvbXBvbmVudCBpcyBhIGRlc2NlbmRhbnQgb2YgYEZvcm1Db250cm9sYC4gKi9cbiAgICBmb3JtQ29udHJvbDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBjb21wb25lbnQgaXMgZm9jdXNlZC4gKi9cbiAgICBmb2N1c2VkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVkPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc3RhcnRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGFkb3JuZWRTdGFydDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBlbmRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGFkb3JuZWRFbmQ6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZXJyb3I9e3RydWV9YC4gKi9cbiAgICBlcnJvcjoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgICBtYXJnaW5EZW5zZToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBtdWx0aWxpbmU9e3RydWV9YC4gKi9cbiAgICBtdWx0aWxpbmU6IHtcbiAgICAgIHBhZGRpbmc6IFwiXCIuY29uY2F0KDggLSAyLCBcInB4IDAgXCIpLmNvbmNhdCg4IC0gMSwgXCJweFwiKSxcbiAgICAgICcmJG1hcmdpbkRlbnNlJzoge1xuICAgICAgICBwYWRkaW5nVG9wOiA0IC0gMVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBjb2xvciBpcyBzZWNvbmRhcnkuICovXG4gICAgY29sb3JTZWNvbmRhcnk6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZnVsbFdpZHRoPXt0cnVlfWAuICovXG4gICAgZnVsbFdpZHRoOiB7XG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuICovXG4gICAgaW5wdXQ6IHtcbiAgICAgIGZvbnQ6ICdpbmhlcml0JyxcbiAgICAgIGxldHRlclNwYWNpbmc6ICdpbmhlcml0JyxcbiAgICAgIGNvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHBhZGRpbmc6IFwiXCIuY29uY2F0KDggLSAyLCBcInB4IDAgXCIpLmNvbmNhdCg4IC0gMSwgXCJweFwiKSxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcbiAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgIGhlaWdodDogJzEuMTg3NmVtJyxcbiAgICAgIC8vIFJlc2V0ICgxOXB4KSwgbWF0Y2ggdGhlIG5hdGl2ZSBpbnB1dCBsaW5lLWhlaWdodFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgLy8gUmVzZXQgZm9yIFNhZmFyaVxuICAgICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgLy8gTWFrZSB0aGUgZmxleCBpdGVtIHNocmluayB3aXRoIEZpcmVmb3hcbiAgICAgIG1pbldpZHRoOiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIC8vIEZpeCBJRSAxMSB3aWR0aCBpc3N1ZVxuICAgICAgYW5pbWF0aW9uTmFtZTogJ211aS1hdXRvLWZpbGwtY2FuY2VsJyxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMTBtcycsXG4gICAgICAnJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVyLFxuICAgICAgJyY6Oi1tb3otcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlcixcbiAgICAgIC8vIEZpcmVmb3ggMTkrXG4gICAgICAnJjotbXMtaW5wdXQtcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlcixcbiAgICAgIC8vIElFIDExXG4gICAgICAnJjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXIsXG4gICAgICAvLyBFZGdlXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogMFxuICAgICAgfSxcbiAgICAgIC8vIFJlc2V0IEZpcmVmb3ggaW52YWxpZCByZXF1aXJlZCBpbnB1dCBzdHlsZVxuICAgICAgJyY6aW52YWxpZCc6IHtcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICAnJjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbic6IHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBwYWRkaW5nIHdoZW4gdHlwZT1zZWFyY2guXG4gICAgICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICAvLyBTaG93IGFuZCBoaWRlIHRoZSBwbGFjZWhvbGRlciBsb2dpY1xuICAgICAgJ2xhYmVsW2RhdGEtc2hyaW5rPWZhbHNlXSArICRmb3JtQ29udHJvbCAmJzoge1xuICAgICAgICAnJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVySGlkZGVuLFxuICAgICAgICAnJjo6LW1vei1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVySGlkZGVuLFxuICAgICAgICAvLyBGaXJlZm94IDE5K1xuICAgICAgICAnJjotbXMtaW5wdXQtcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlckhpZGRlbixcbiAgICAgICAgLy8gSUUgMTFcbiAgICAgICAgJyY6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVySGlkZGVuLFxuICAgICAgICAvLyBFZGdlXG4gICAgICAgICcmOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXJWaXNpYmxlLFxuICAgICAgICAnJjpmb2N1czo6LW1vei1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVyVmlzaWJsZSxcbiAgICAgICAgLy8gRmlyZWZveCAxOStcbiAgICAgICAgJyY6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXJWaXNpYmxlLFxuICAgICAgICAvLyBJRSAxMVxuICAgICAgICAnJjpmb2N1czo6LW1zLWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXJWaXNpYmxlIC8vIEVkZ2VcblxuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBvcGFjaXR5OiAxIC8vIFJlc2V0IGlPUyBvcGFjaXR5XG5cbiAgICAgIH0sXG4gICAgICAnJjotd2Via2l0LWF1dG9maWxsJzoge1xuICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzUwMDBzJyxcbiAgICAgICAgYW5pbWF0aW9uTmFtZTogJ211aS1hdXRvLWZpbGwnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG1hcmdpbj1cImRlbnNlXCJgLiAqL1xuICAgIGlucHV0TWFyZ2luRGVuc2U6IHtcbiAgICAgIHBhZGRpbmdUb3A6IDQgLSAxXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG11bHRpbGluZT17dHJ1ZX1gLiAqL1xuICAgIGlucHV0TXVsdGlsaW5lOiB7XG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHJlc2l6ZTogJ25vbmUnLFxuICAgICAgcGFkZGluZzogMFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGB0eXBlPVwic2VhcmNoXCJgLiAqL1xuICAgIGlucHV0VHlwZVNlYXJjaDoge1xuICAgICAgLy8gSW1wcm92ZSB0eXBlIHNlYXJjaCBzdHlsZS5cbiAgICAgICctbW96LWFwcGVhcmFuY2UnOiAndGV4dGZpZWxkJyxcbiAgICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAndGV4dGZpZWxkJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBzdGFydEFkb3JubWVudGAgaXMgcHJvdmlkZWQuICovXG4gICAgaW5wdXRBZG9ybmVkU3RhcnQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgZW5kQWRvcm5tZW50YCBpcyBwcm92aWRlZC4gKi9cbiAgICBpbnB1dEFkb3JuZWRFbmQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgaGlkZGVuTGFiZWw9e3RydWV9YC4gKi9cbiAgICBpbnB1dEhpZGRlbkxhYmVsOiB7fVxuICB9O1xufTtcbnZhciB1c2VFbmhhbmNlZEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gUmVhY3QudXNlRWZmZWN0IDogUmVhY3QudXNlTGF5b3V0RWZmZWN0O1xuLyoqXG4gKiBgSW5wdXRCYXNlYCBjb250YWlucyBhcyBmZXcgc3R5bGVzIGFzIHBvc3NpYmxlLlxuICogSXQgYWltcyB0byBiZSBhIHNpbXBsZSBidWlsZGluZyBibG9jayBmb3IgY3JlYXRpbmcgYW4gaW5wdXQuXG4gKiBJdCBjb250YWlucyBhIGxvYWQgb2Ygc3R5bGUgcmVzZXQgYW5kIHNvbWUgc3RhdGUgbG9naWMuXG4gKi9cblxudmFyIElucHV0QmFzZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIElucHV0QmFzZShwcm9wcywgcmVmKSB7XG4gIHZhciBhcmlhRGVzY3JpYmVkYnkgPSBwcm9wc1snYXJpYS1kZXNjcmliZWRieSddLFxuICAgICAgYXV0b0NvbXBsZXRlID0gcHJvcHMuYXV0b0NvbXBsZXRlLFxuICAgICAgYXV0b0ZvY3VzID0gcHJvcHMuYXV0b0ZvY3VzLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGVuZEFkb3JubWVudCA9IHByb3BzLmVuZEFkb3JubWVudCxcbiAgICAgIGVycm9yID0gcHJvcHMuZXJyb3IsXG4gICAgICBfcHJvcHMkZnVsbFdpZHRoID0gcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgZnVsbFdpZHRoID0gX3Byb3BzJGZ1bGxXaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnVsbFdpZHRoLFxuICAgICAgaWQgPSBwcm9wcy5pZCxcbiAgICAgIF9wcm9wcyRpbnB1dENvbXBvbmVudCA9IHByb3BzLmlucHV0Q29tcG9uZW50LFxuICAgICAgaW5wdXRDb21wb25lbnQgPSBfcHJvcHMkaW5wdXRDb21wb25lbnQgPT09IHZvaWQgMCA/ICdpbnB1dCcgOiBfcHJvcHMkaW5wdXRDb21wb25lbnQsXG4gICAgICBfcHJvcHMkaW5wdXRQcm9wcyA9IHByb3BzLmlucHV0UHJvcHMsXG4gICAgICBpbnB1dFByb3BzUHJvcCA9IF9wcm9wcyRpbnB1dFByb3BzID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRpbnB1dFByb3BzLFxuICAgICAgaW5wdXRSZWZQcm9wID0gcHJvcHMuaW5wdXRSZWYsXG4gICAgICBtYXJnaW4gPSBwcm9wcy5tYXJnaW4sXG4gICAgICBfcHJvcHMkbXVsdGlsaW5lID0gcHJvcHMubXVsdGlsaW5lLFxuICAgICAgbXVsdGlsaW5lID0gX3Byb3BzJG11bHRpbGluZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkbXVsdGlsaW5lLFxuICAgICAgbmFtZSA9IHByb3BzLm5hbWUsXG4gICAgICBvbkJsdXIgPSBwcm9wcy5vbkJsdXIsXG4gICAgICBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgb25DbGljayA9IHByb3BzLm9uQ2xpY2ssXG4gICAgICBvbkZvY3VzID0gcHJvcHMub25Gb2N1cyxcbiAgICAgIG9uS2V5RG93biA9IHByb3BzLm9uS2V5RG93bixcbiAgICAgIG9uS2V5VXAgPSBwcm9wcy5vbktleVVwLFxuICAgICAgcGxhY2Vob2xkZXIgPSBwcm9wcy5wbGFjZWhvbGRlcixcbiAgICAgIHJlYWRPbmx5ID0gcHJvcHMucmVhZE9ubHksXG4gICAgICByZW5kZXJTdWZmaXggPSBwcm9wcy5yZW5kZXJTdWZmaXgsXG4gICAgICByb3dzID0gcHJvcHMucm93cyxcbiAgICAgIHJvd3NNYXggPSBwcm9wcy5yb3dzTWF4LFxuICAgICAgcm93c01pbiA9IHByb3BzLnJvd3NNaW4sXG4gICAgICBzdGFydEFkb3JubWVudCA9IHByb3BzLnN0YXJ0QWRvcm5tZW50LFxuICAgICAgX3Byb3BzJHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgdHlwZSA9IF9wcm9wcyR0eXBlID09PSB2b2lkIDAgPyAndGV4dCcgOiBfcHJvcHMkdHlwZSxcbiAgICAgIHZhbHVlUHJvcCA9IHByb3BzLnZhbHVlLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImFyaWEtZGVzY3JpYmVkYnlcIiwgXCJhdXRvQ29tcGxldGVcIiwgXCJhdXRvRm9jdXNcIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJkZWZhdWx0VmFsdWVcIiwgXCJkaXNhYmxlZFwiLCBcImVuZEFkb3JubWVudFwiLCBcImVycm9yXCIsIFwiZnVsbFdpZHRoXCIsIFwiaWRcIiwgXCJpbnB1dENvbXBvbmVudFwiLCBcImlucHV0UHJvcHNcIiwgXCJpbnB1dFJlZlwiLCBcIm1hcmdpblwiLCBcIm11bHRpbGluZVwiLCBcIm5hbWVcIiwgXCJvbkJsdXJcIiwgXCJvbkNoYW5nZVwiLCBcIm9uQ2xpY2tcIiwgXCJvbkZvY3VzXCIsIFwib25LZXlEb3duXCIsIFwib25LZXlVcFwiLCBcInBsYWNlaG9sZGVyXCIsIFwicmVhZE9ubHlcIiwgXCJyZW5kZXJTdWZmaXhcIiwgXCJyb3dzXCIsIFwicm93c01heFwiLCBcInJvd3NNaW5cIiwgXCJzdGFydEFkb3JubWVudFwiLCBcInR5cGVcIiwgXCJ2YWx1ZVwiXSk7XG5cbiAgdmFyIHZhbHVlID0gaW5wdXRQcm9wc1Byb3AudmFsdWUgIT0gbnVsbCA/IGlucHV0UHJvcHNQcm9wLnZhbHVlIDogdmFsdWVQcm9wO1xuXG4gIHZhciBfUmVhY3QkdXNlUmVmID0gUmVhY3QudXNlUmVmKHZhbHVlICE9IG51bGwpLFxuICAgICAgaXNDb250cm9sbGVkID0gX1JlYWN0JHVzZVJlZi5jdXJyZW50O1xuXG4gIHZhciBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICB2YXIgaGFuZGxlSW5wdXRSZWZXYXJuaW5nID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5ub2RlTmFtZSAhPT0gJ0lOUFVUJyAmJiAhaW5zdGFuY2UuZm9jdXMpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBZb3UgaGF2ZSBwcm92aWRlZCBhIGBpbnB1dENvbXBvbmVudGAgdG8gdGhlIGlucHV0IGNvbXBvbmVudCcsICd0aGF0IGRvZXMgbm90IGNvcnJlY3RseSBoYW5kbGUgdGhlIGBpbnB1dFJlZmAgcHJvcC4nLCAnTWFrZSBzdXJlIHRoZSBgaW5wdXRSZWZgIHByb3AgaXMgY2FsbGVkIHdpdGggYSBIVE1MSW5wdXRFbGVtZW50LiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcbiAgdmFyIGhhbmRsZUlucHV0UHJvcHNSZWZQcm9wID0gdXNlRm9ya1JlZihpbnB1dFByb3BzUHJvcC5yZWYsIGhhbmRsZUlucHV0UmVmV2FybmluZyk7XG4gIHZhciBoYW5kbGVJbnB1dFJlZlByb3AgPSB1c2VGb3JrUmVmKGlucHV0UmVmUHJvcCwgaGFuZGxlSW5wdXRQcm9wc1JlZlByb3ApO1xuICB2YXIgaGFuZGxlSW5wdXRSZWYgPSB1c2VGb3JrUmVmKGlucHV0UmVmLCBoYW5kbGVJbnB1dFJlZlByb3ApO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksXG4gICAgICBmb2N1c2VkID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0Rm9jdXNlZCA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgbXVpRm9ybUNvbnRyb2wgPSB1c2VGb3JtQ29udHJvbCgpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtdWlGb3JtQ29udHJvbCkge1xuICAgICAgICByZXR1cm4gbXVpRm9ybUNvbnRyb2wucmVnaXN0ZXJFZmZlY3QoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LCBbbXVpRm9ybUNvbnRyb2xdKTtcbiAgfVxuXG4gIHZhciBmY3MgPSBmb3JtQ29udHJvbFN0YXRlKHtcbiAgICBwcm9wczogcHJvcHMsXG4gICAgbXVpRm9ybUNvbnRyb2w6IG11aUZvcm1Db250cm9sLFxuICAgIHN0YXRlczogWydjb2xvcicsICdkaXNhYmxlZCcsICdlcnJvcicsICdoaWRkZW5MYWJlbCcsICdtYXJnaW4nLCAncmVxdWlyZWQnLCAnZmlsbGVkJ11cbiAgfSk7XG4gIGZjcy5mb2N1c2VkID0gbXVpRm9ybUNvbnRyb2wgPyBtdWlGb3JtQ29udHJvbC5mb2N1c2VkIDogZm9jdXNlZDsgLy8gVGhlIGJsdXIgd29uJ3QgZmlyZSB3aGVuIHRoZSBkaXNhYmxlZCBzdGF0ZSBpcyBzZXQgb24gYSBmb2N1c2VkIGlucHV0LlxuICAvLyBXZSBuZWVkIHRvIGJvb2sga2VlcCB0aGUgZm9jdXNlZCBzdGF0ZSBtYW51YWxseS5cblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghbXVpRm9ybUNvbnRyb2wgJiYgZGlzYWJsZWQgJiYgZm9jdXNlZCkge1xuICAgICAgc2V0Rm9jdXNlZChmYWxzZSk7XG5cbiAgICAgIGlmIChvbkJsdXIpIHtcbiAgICAgICAgb25CbHVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbbXVpRm9ybUNvbnRyb2wsIGRpc2FibGVkLCBmb2N1c2VkLCBvbkJsdXJdKTtcbiAgdmFyIG9uRmlsbGVkID0gbXVpRm9ybUNvbnRyb2wgJiYgbXVpRm9ybUNvbnRyb2wub25GaWxsZWQ7XG4gIHZhciBvbkVtcHR5ID0gbXVpRm9ybUNvbnRyb2wgJiYgbXVpRm9ybUNvbnRyb2wub25FbXB0eTtcbiAgdmFyIGNoZWNrRGlydHkgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAob2JqKSB7XG4gICAgaWYgKGlzRmlsbGVkKG9iaikpIHtcbiAgICAgIGlmIChvbkZpbGxlZCkge1xuICAgICAgICBvbkZpbGxlZCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob25FbXB0eSkge1xuICAgICAgb25FbXB0eSgpO1xuICAgIH1cbiAgfSwgW29uRmlsbGVkLCBvbkVtcHR5XSk7XG4gIHVzZUVuaGFuY2VkRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNDb250cm9sbGVkKSB7XG4gICAgICBjaGVja0RpcnR5KHtcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFt2YWx1ZSwgY2hlY2tEaXJ0eSwgaXNDb250cm9sbGVkXSk7XG5cbiAgdmFyIGhhbmRsZUZvY3VzID0gZnVuY3Rpb24gaGFuZGxlRm9jdXMoZXZlbnQpIHtcbiAgICAvLyBGaXggYSBidWcgd2l0aCBJRSAxMSB3aGVyZSB0aGUgZm9jdXMvYmx1ciBldmVudHMgYXJlIHRyaWdnZXJlZFxuICAgIC8vIHdoaWxlIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbiAgICBpZiAoZmNzLmRpc2FibGVkKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob25Gb2N1cykge1xuICAgICAgb25Gb2N1cyhldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0UHJvcHNQcm9wLm9uRm9jdXMpIHtcbiAgICAgIGlucHV0UHJvcHNQcm9wLm9uRm9jdXMoZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChtdWlGb3JtQ29udHJvbCAmJiBtdWlGb3JtQ29udHJvbC5vbkZvY3VzKSB7XG4gICAgICBtdWlGb3JtQ29udHJvbC5vbkZvY3VzKGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Rm9jdXNlZCh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZUJsdXIgPSBmdW5jdGlvbiBoYW5kbGVCbHVyKGV2ZW50KSB7XG4gICAgaWYgKG9uQmx1cikge1xuICAgICAgb25CbHVyKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaW5wdXRQcm9wc1Byb3Aub25CbHVyKSB7XG4gICAgICBpbnB1dFByb3BzUHJvcC5vbkJsdXIoZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChtdWlGb3JtQ29udHJvbCAmJiBtdWlGb3JtQ29udHJvbC5vbkJsdXIpIHtcbiAgICAgIG11aUZvcm1Db250cm9sLm9uQmx1cihldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZvY3VzZWQoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgaWYgKCFpc0NvbnRyb2xsZWQpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZXZlbnQudGFyZ2V0IHx8IGlucHV0UmVmLmN1cnJlbnQ7XG5cbiAgICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiTWF0ZXJpYWwtVUk6IEV4cGVjdGVkIHZhbGlkIGlucHV0IHRhcmdldC4gRGlkIHlvdSB1c2UgYSBjdXN0b20gYGlucHV0Q29tcG9uZW50YCBhbmQgZm9yZ2V0IHRvIGZvcndhcmQgcmVmcz8gU2VlIGh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL3IvaW5wdXQtY29tcG9uZW50LXJlZi1pbnRlcmZhY2UgZm9yIG1vcmUgaW5mby5cIiA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoMSkpO1xuICAgICAgfVxuXG4gICAgICBjaGVja0RpcnR5KHtcbiAgICAgICAgdmFsdWU6IGVsZW1lbnQudmFsdWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChpbnB1dFByb3BzUHJvcC5vbkNoYW5nZSkge1xuICAgICAgaW5wdXRQcm9wc1Byb3Aub25DaGFuZ2UuYXBwbHkoaW5wdXRQcm9wc1Byb3AsIFtldmVudF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9IC8vIFBlcmZvcm0gaW4gdGhlIHdpbGxVcGRhdGVcblxuXG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZS5hcHBseSh2b2lkIDAsIFtldmVudF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07IC8vIENoZWNrIHRoZSBpbnB1dCBzdGF0ZSBvbiBtb3VudCwgaW4gY2FzZSBpdCB3YXMgZmlsbGVkIGJ5IHRoZSB1c2VyXG4gIC8vIG9yIGF1dG8gZmlsbGVkIGJ5IHRoZSBicm93c2VyIGJlZm9yZSB0aGUgaHlkcmF0aW9uIChmb3IgU1NSKS5cblxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgY2hlY2tEaXJ0eShpbnB1dFJlZi5jdXJyZW50KTtcbiAgfSwgW10pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIHZhciBoYW5kbGVDbGljayA9IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKGlucHV0UmVmLmN1cnJlbnQgJiYgZXZlbnQuY3VycmVudFRhcmdldCA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgIG9uQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgSW5wdXRDb21wb25lbnQgPSBpbnB1dENvbXBvbmVudDtcblxuICB2YXIgaW5wdXRQcm9wcyA9IF9leHRlbmRzKHt9LCBpbnB1dFByb3BzUHJvcCwge1xuICAgIHJlZjogaGFuZGxlSW5wdXRSZWZcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBJbnB1dENvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICBpbnB1dFByb3BzID0gX2V4dGVuZHMoe1xuICAgICAgLy8gUmVuYW1lIHJlZiB0byBpbnB1dFJlZiBhcyB3ZSBkb24ndCBrbm93IHRoZVxuICAgICAgLy8gcHJvdmlkZWQgYGlucHV0Q29tcG9uZW50YCBzdHJ1Y3R1cmUuXG4gICAgICBpbnB1dFJlZjogaGFuZGxlSW5wdXRSZWYsXG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSwgaW5wdXRQcm9wcywge1xuICAgICAgcmVmOiBudWxsXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAobXVsdGlsaW5lKSB7XG4gICAgaWYgKHJvd3MgJiYgIXJvd3NNYXggJiYgIXJvd3NNaW4pIHtcbiAgICAgIElucHV0Q29tcG9uZW50ID0gJ3RleHRhcmVhJztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRQcm9wcyA9IF9leHRlbmRzKHtcbiAgICAgICAgcm93czogcm93cyxcbiAgICAgICAgcm93c01heDogcm93c01heFxuICAgICAgfSwgaW5wdXRQcm9wcyk7XG4gICAgICBJbnB1dENvbXBvbmVudCA9IFRleHRhcmVhQXV0b3NpemU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlucHV0UHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSwgaW5wdXRQcm9wcyk7XG4gIH1cblxuICB2YXIgaGFuZGxlQXV0b0ZpbGwgPSBmdW5jdGlvbiBoYW5kbGVBdXRvRmlsbChldmVudCkge1xuICAgIC8vIFByb3ZpZGUgYSBmYWtlIHZhbHVlIGFzIENocm9tZSBtaWdodCBub3QgbGV0IHlvdSBhY2Nlc3MgaXQgZm9yIHNlY3VyaXR5IHJlYXNvbnMuXG4gICAgY2hlY2tEaXJ0eShldmVudC5hbmltYXRpb25OYW1lID09PSAnbXVpLWF1dG8tZmlsbC1jYW5jZWwnID8gaW5wdXRSZWYuY3VycmVudCA6IHtcbiAgICAgIHZhbHVlOiAneCdcbiAgICB9KTtcbiAgfTtcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChtdWlGb3JtQ29udHJvbCkge1xuICAgICAgbXVpRm9ybUNvbnRyb2wuc2V0QWRvcm5lZFN0YXJ0KEJvb2xlYW4oc3RhcnRBZG9ybm1lbnQpKTtcbiAgICB9XG4gIH0sIFttdWlGb3JtQ29udHJvbCwgc3RhcnRBZG9ybm1lbnRdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc2VzW1wiY29sb3JcIi5jb25jYXQoY2FwaXRhbGl6ZShmY3MuY29sb3IgfHwgJ3ByaW1hcnknKSldLCBjbGFzc05hbWUsIGZjcy5kaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkLCBmY3MuZXJyb3IgJiYgY2xhc3Nlcy5lcnJvciwgZnVsbFdpZHRoICYmIGNsYXNzZXMuZnVsbFdpZHRoLCBmY3MuZm9jdXNlZCAmJiBjbGFzc2VzLmZvY3VzZWQsIG11aUZvcm1Db250cm9sICYmIGNsYXNzZXMuZm9ybUNvbnRyb2wsIG11bHRpbGluZSAmJiBjbGFzc2VzLm11bHRpbGluZSwgc3RhcnRBZG9ybm1lbnQgJiYgY2xhc3Nlcy5hZG9ybmVkU3RhcnQsIGVuZEFkb3JubWVudCAmJiBjbGFzc2VzLmFkb3JuZWRFbmQsIGZjcy5tYXJnaW4gPT09ICdkZW5zZScgJiYgY2xhc3Nlcy5tYXJnaW5EZW5zZSksXG4gICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBzdGFydEFkb3JubWVudCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRyb2xDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IG51bGxcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBcImFyaWEtaW52YWxpZFwiOiBmY3MuZXJyb3IsXG4gICAgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6IGFyaWFEZXNjcmliZWRieSxcbiAgICBhdXRvQ29tcGxldGU6IGF1dG9Db21wbGV0ZSxcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBkaXNhYmxlZDogZmNzLmRpc2FibGVkLFxuICAgIGlkOiBpZCxcbiAgICBvbkFuaW1hdGlvblN0YXJ0OiBoYW5kbGVBdXRvRmlsbCxcbiAgICBuYW1lOiBuYW1lLFxuICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICByZWFkT25seTogcmVhZE9ubHksXG4gICAgcmVxdWlyZWQ6IGZjcy5yZXF1aXJlZCxcbiAgICByb3dzOiByb3dzLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBvbktleURvd246IG9uS2V5RG93bixcbiAgICBvbktleVVwOiBvbktleVVwXG4gIH0sIGlucHV0UHJvcHMsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5pbnB1dCwgaW5wdXRQcm9wc1Byb3AuY2xhc3NOYW1lLCBmY3MuZGlzYWJsZWQgJiYgY2xhc3Nlcy5kaXNhYmxlZCwgbXVsdGlsaW5lICYmIGNsYXNzZXMuaW5wdXRNdWx0aWxpbmUsIGZjcy5oaWRkZW5MYWJlbCAmJiBjbGFzc2VzLmlucHV0SGlkZGVuTGFiZWwsIHN0YXJ0QWRvcm5tZW50ICYmIGNsYXNzZXMuaW5wdXRBZG9ybmVkU3RhcnQsIGVuZEFkb3JubWVudCAmJiBjbGFzc2VzLmlucHV0QWRvcm5lZEVuZCwgdHlwZSA9PT0gJ3NlYXJjaCcgJiYgY2xhc3Nlcy5pbnB1dFR5cGVTZWFyY2gsIGZjcy5tYXJnaW4gPT09ICdkZW5zZScgJiYgY2xhc3Nlcy5pbnB1dE1hcmdpbkRlbnNlKSxcbiAgICBvbkJsdXI6IGhhbmRsZUJsdXIsXG4gICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICBvbkZvY3VzOiBoYW5kbGVGb2N1c1xuICB9KSkpLCBlbmRBZG9ybm1lbnQsIHJlbmRlclN1ZmZpeCA/IHJlbmRlclN1ZmZpeChfZXh0ZW5kcyh7fSwgZmNzLCB7XG4gICAgc3RhcnRBZG9ybm1lbnQ6IHN0YXJ0QWRvcm5tZW50XG4gIH0pKSA6IG51bGwpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBJbnB1dEJhc2UucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgJ2FyaWEtZGVzY3JpYmVkYnknOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGlzIHByb3AgaGVscHMgdXNlcnMgdG8gZmlsbCBmb3JtcyBmYXN0ZXIsIGVzcGVjaWFsbHkgb24gbW9iaWxlIGRldmljZXMuXG4gICAqIFRoZSBuYW1lIGNhbiBiZSBjb25mdXNpbmcsIGFzIGl0J3MgbW9yZSBsaWtlIGFuIGF1dG9maWxsLlxuICAgKiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgaXQgW2ZvbGxvd2luZyB0aGUgc3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybS1jb250cm9sLWluZnJhc3RydWN0dXJlLmh0bWwjYXV0b2ZpbGwpLlxuICAgKi9cbiAgYXV0b0NvbXBsZXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSBmb2N1c2VkIGR1cmluZyB0aGUgZmlyc3QgbW91bnQuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5J10pLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBgaW5wdXRgIGVsZW1lbnQgdmFsdWUuIFVzZSB3aGVuIHRoZSBjb21wb25lbnQgaXMgbm90IGNvbnRyb2xsZWQuXG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGBpbnB1dGAgZWxlbWVudCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBFbmQgYElucHV0QWRvcm5tZW50YCBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBlbmRBZG9ybm1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCB3aWxsIGluZGljYXRlIGFuIGVycm9yLiBUaGlzIGlzIG5vcm1hbGx5IG9idGFpbmVkIHZpYSBjb250ZXh0IGZyb21cbiAgICogRm9ybUNvbnRyb2wuXG4gICAqL1xuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgdGFrZSB1cCB0aGUgZnVsbCB3aWR0aCBvZiBpdHMgY29udGFpbmVyLlxuICAgKi9cbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgaW5wdXRDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogW0F0dHJpYnV0ZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNBdHRyaWJ1dGVzKSBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBQYXNzIGEgcmVmIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dFJlZjogcmVmVHlwZSxcblxuICAvKipcbiAgICogSWYgYGRlbnNlYCwgd2lsbCBhZGp1c3QgdmVydGljYWwgc3BhY2luZy4gVGhpcyBpcyBub3JtYWxseSBvYnRhaW5lZCB2aWEgY29udGV4dCBmcm9tXG4gICAqIEZvcm1Db250cm9sLlxuICAgKi9cbiAgbWFyZ2luOiBQcm9wVHlwZXMub25lT2YoWydkZW5zZScsICdub25lJ10pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGEgdGV4dGFyZWEgZWxlbWVudCB3aWxsIGJlIHJlbmRlcmVkLlxuICAgKi9cbiAgbXVsdGlsaW5lOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTmFtZSBhdHRyaWJ1dGUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGlucHV0IGlzIGJsdXJyZWQuXG4gICAqXG4gICAqIE5vdGljZSB0aGF0IHRoZSBmaXJzdCBhcmd1bWVudCAoZXZlbnQpIG1pZ2h0IGJlIHVuZGVmaW5lZC5cbiAgICovXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHZhbHVlIGlzIGNoYW5nZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogWW91IGNhbiBwdWxsIG91dCB0aGUgbmV3IHZhbHVlIGJ5IGFjY2Vzc2luZyBgZXZlbnQudGFyZ2V0LnZhbHVlYCAoc3RyaW5nKS5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbktleVVwOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVGhlIHNob3J0IGhpbnQgZGlzcGxheWVkIGluIHRoZSBpbnB1dCBiZWZvcmUgdGhlIHVzZXIgZW50ZXJzIGEgdmFsdWUuXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSXQgcHJldmVudHMgdGhlIHVzZXIgZnJvbSBjaGFuZ2luZyB0aGUgdmFsdWUgb2YgdGhlIGZpZWxkXG4gICAqIChub3QgZnJvbSBpbnRlcmFjdGluZyB3aXRoIHRoZSBmaWVsZCkuXG4gICAqL1xuICByZWFkT25seTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHJlbmRlclN1ZmZpeDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGBpbnB1dGAgZWxlbWVudCB3aWxsIGJlIHJlcXVpcmVkLlxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBOdW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5IHdoZW4gbXVsdGlsaW5lIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIHJvd3M6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5IHdoZW4gbXVsdGlsaW5lIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIHJvd3NNYXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogTWluaW11bSBudW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5IHdoZW4gbXVsdGlsaW5lIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIHJvd3NNaW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogU3RhcnQgYElucHV0QWRvcm5tZW50YCBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBzdGFydEFkb3JubWVudDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFR5cGUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC4gSXQgc2hvdWxkIGJlIFthIHZhbGlkIEhUTUw1IGlucHV0IHR5cGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNGb3JtXyUzQ2lucHV0JTNFX3R5cGVzKS5cbiAgICovXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LCByZXF1aXJlZCBmb3IgYSBjb250cm9sbGVkIGNvbXBvbmVudC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55XG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUlucHV0QmFzZSdcbn0pKElucHV0QmFzZSk7IiwiLy8gU3VwcG9ydHMgZGV0ZXJtaW5hdGlvbiBvZiBpc0NvbnRyb2xsZWQoKS5cbi8vIENvbnRyb2xsZWQgaW5wdXQgYWNjZXB0cyBpdHMgY3VycmVudCB2YWx1ZSBhcyBhIHByb3AuXG4vL1xuLy8gQHNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL2Zvcm1zLmh0bWwjY29udHJvbGxlZC1jb21wb25lbnRzXG4vLyBAcGFyYW0gdmFsdWVcbi8vIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHN0cmluZyAoaW5jbHVkaW5nICcnKSBvciBudW1iZXIgKGluY2x1ZGluZyB6ZXJvKVxuZXhwb3J0IGZ1bmN0aW9uIGhhc1ZhbHVlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICEoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKTtcbn0gLy8gRGV0ZXJtaW5lIGlmIGZpZWxkIGlzIGVtcHR5IG9yIGZpbGxlZC5cbi8vIFJlc3BvbnNlIGRldGVybWluZXMgaWYgbGFiZWwgaXMgcHJlc2VudGVkIGFib3ZlIGZpZWxkIG9yIGFzIHBsYWNlaG9sZGVyLlxuLy9cbi8vIEBwYXJhbSBvYmpcbi8vIEBwYXJhbSBTU1Jcbi8vIEByZXR1cm5zIHtib29sZWFufSBGYWxzZSB3aGVuIG5vdCBwcmVzZW50IG9yIGVtcHR5IHN0cmluZy5cbi8vICAgICAgICAgICAgICAgICAgICBUcnVlIHdoZW4gYW55IG51bWJlciBvciBzdHJpbmcgd2l0aCBsZW5ndGguXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ZpbGxlZChvYmopIHtcbiAgdmFyIFNTUiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gIHJldHVybiBvYmogJiYgKGhhc1ZhbHVlKG9iai52YWx1ZSkgJiYgb2JqLnZhbHVlICE9PSAnJyB8fCBTU1IgJiYgaGFzVmFsdWUob2JqLmRlZmF1bHRWYWx1ZSkgJiYgb2JqLmRlZmF1bHRWYWx1ZSAhPT0gJycpO1xufSAvLyBEZXRlcm1pbmUgaWYgYW4gSW5wdXQgaXMgYWRvcm5lZCBvbiBzdGFydC5cbi8vIEl0J3MgY29ycmVzcG9uZGluZyB0byB0aGUgbGVmdCB3aXRoIExUUi5cbi8vXG4vLyBAcGFyYW0gb2JqXG4vLyBAcmV0dXJucyB7Ym9vbGVhbn0gRmFsc2Ugd2hlbiBubyBhZG9ybm1lbnRzLlxuLy8gICAgICAgICAgICAgICAgICAgIFRydWUgd2hlbiBhZG9ybmVkIGF0IHRoZSBzdGFydC5cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQWRvcm5lZFN0YXJ0KG9iaikge1xuICByZXR1cm4gb2JqLnN0YXJ0QWRvcm5tZW50O1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBmb3JtQ29udHJvbFN0YXRlIGZyb20gJy4uL0Zvcm1Db250cm9sL2Zvcm1Db250cm9sU3RhdGUnO1xuaW1wb3J0IHVzZUZvcm1Db250cm9sIGZyb20gJy4uL0Zvcm1Db250cm9sL3VzZUZvcm1Db250cm9sJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBGb3JtTGFiZWwgZnJvbSAnLi4vRm9ybUxhYmVsJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wIGxlZnQnXG4gICAgfSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGZvY3VzZWQ9e3RydWV9YC4gKi9cbiAgICBmb2N1c2VkOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVkPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZXJyb3I9e3RydWV9YC4gKi9cbiAgICBlcnJvcjoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGByZXF1aXJlZD17dHJ1ZX1gLiAqL1xuICAgIHJlcXVpcmVkOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSBhc3RlcmlzayBlbGVtZW50LiAqL1xuICAgIGFzdGVyaXNrOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIGNvbXBvbmVudCBpcyBhIGRlc2NlbmRhbnQgb2YgYEZvcm1Db250cm9sYC4gKi9cbiAgICBmb3JtQ29udHJvbDoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiAwLFxuICAgICAgLy8gc2xpZ2h0IGFsdGVyYXRpb24gdG8gc3BlYyBzcGFjaW5nIHRvIG1hdGNoIHZpc3VhbCBzcGVjIHJlc3VsdFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsIDI0cHgpIHNjYWxlKDEpJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgICBtYXJnaW5EZW5zZToge1xuICAgICAgLy8gQ29tcGVuc2F0aW9uIGZvciB0aGUgYElucHV0LmlucHV0RGVuc2VgIHN0eWxlLlxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsIDIxcHgpIHNjYWxlKDEpJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBzaHJpbms9e3RydWV9YC4gKi9cbiAgICBzaHJpbms6IHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwLCAxLjVweCkgc2NhbGUoMC43NSknLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wIGxlZnQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYGRpc2FibGVBbmltYXRpb249e2ZhbHNlfWAuICovXG4gICAgYW5pbWF0ZWQ6IHtcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ2NvbG9yJywgJ3RyYW5zZm9ybSddLCB7XG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVyLFxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5lYXNlT3V0XG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiZmlsbGVkXCJgLiAqL1xuICAgIGZpbGxlZDoge1xuICAgICAgLy8gQ2hyb21lJ3MgYXV0b2ZpbGwgZmVhdHVyZSBnaXZlcyB0aGUgaW5wdXQgZmllbGQgYSB5ZWxsb3cgYmFja2dyb3VuZC5cbiAgICAgIC8vIFNpbmNlIHRoZSBpbnB1dCBmaWVsZCBpcyBiZWhpbmQgdGhlIGxhYmVsIGluIHRoZSBIVE1MIHRyZWUsXG4gICAgICAvLyB0aGUgaW5wdXQgZmllbGQgaXMgZHJhd24gbGFzdCBhbmQgaGlkZXMgdGhlIGxhYmVsIHdpdGggYW4gb3BhcXVlIGJhY2tncm91bmQgY29sb3IuXG4gICAgICAvLyB6SW5kZXg6IDEgd2lsbCByYWlzZSB0aGUgbGFiZWwgYWJvdmUgb3BhcXVlIGJhY2tncm91bmQtY29sb3JzIG9mIGlucHV0LlxuICAgICAgekluZGV4OiAxLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDEycHgsIDIwcHgpIHNjYWxlKDEpJyxcbiAgICAgICcmJG1hcmdpbkRlbnNlJzoge1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMTJweCwgMTdweCkgc2NhbGUoMSknXG4gICAgICB9LFxuICAgICAgJyYkc2hyaW5rJzoge1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMTJweCwgMTBweCkgc2NhbGUoMC43NSknLFxuICAgICAgICAnJiRtYXJnaW5EZW5zZSc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMTJweCwgN3B4KSBzY2FsZSgwLjc1KSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwib3V0bGluZWRcImAuICovXG4gICAgb3V0bGluZWQ6IHtcbiAgICAgIC8vIHNlZSBjb21tZW50IGFib3ZlIG9uIGZpbGxlZC56SW5kZXhcbiAgICAgIHpJbmRleDogMSxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgxNHB4LCAyMHB4KSBzY2FsZSgxKScsXG4gICAgICAnJiRtYXJnaW5EZW5zZSc6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDE0cHgsIDEycHgpIHNjYWxlKDEpJ1xuICAgICAgfSxcbiAgICAgICcmJHNocmluayc6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDE0cHgsIC02cHgpIHNjYWxlKDAuNzUpJ1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG52YXIgSW5wdXRMYWJlbCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIElucHV0TGFiZWwocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkZGlzYWJsZUFuaW1hdGkgPSBwcm9wcy5kaXNhYmxlQW5pbWF0aW9uLFxuICAgICAgZGlzYWJsZUFuaW1hdGlvbiA9IF9wcm9wcyRkaXNhYmxlQW5pbWF0aSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUFuaW1hdGksXG4gICAgICBtYXJnaW4gPSBwcm9wcy5tYXJnaW4sXG4gICAgICBzaHJpbmtQcm9wID0gcHJvcHMuc2hyaW5rLFxuICAgICAgdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImRpc2FibGVBbmltYXRpb25cIiwgXCJtYXJnaW5cIiwgXCJzaHJpbmtcIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgbXVpRm9ybUNvbnRyb2wgPSB1c2VGb3JtQ29udHJvbCgpO1xuICB2YXIgc2hyaW5rID0gc2hyaW5rUHJvcDtcblxuICBpZiAodHlwZW9mIHNocmluayA9PT0gJ3VuZGVmaW5lZCcgJiYgbXVpRm9ybUNvbnRyb2wpIHtcbiAgICBzaHJpbmsgPSBtdWlGb3JtQ29udHJvbC5maWxsZWQgfHwgbXVpRm9ybUNvbnRyb2wuZm9jdXNlZCB8fCBtdWlGb3JtQ29udHJvbC5hZG9ybmVkU3RhcnQ7XG4gIH1cblxuICB2YXIgZmNzID0gZm9ybUNvbnRyb2xTdGF0ZSh7XG4gICAgcHJvcHM6IHByb3BzLFxuICAgIG11aUZvcm1Db250cm9sOiBtdWlGb3JtQ29udHJvbCxcbiAgICBzdGF0ZXM6IFsnbWFyZ2luJywgJ3ZhcmlhbnQnXVxuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1MYWJlbCwgX2V4dGVuZHMoe1xuICAgIFwiZGF0YS1zaHJpbmtcIjogc2hyaW5rLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgbXVpRm9ybUNvbnRyb2wgJiYgY2xhc3Nlcy5mb3JtQ29udHJvbCwgIWRpc2FibGVBbmltYXRpb24gJiYgY2xhc3Nlcy5hbmltYXRlZCwgc2hyaW5rICYmIGNsYXNzZXMuc2hyaW5rLCBmY3MubWFyZ2luID09PSAnZGVuc2UnICYmIGNsYXNzZXMubWFyZ2luRGVuc2UsIHtcbiAgICAgICdmaWxsZWQnOiBjbGFzc2VzLmZpbGxlZCxcbiAgICAgICdvdXRsaW5lZCc6IGNsYXNzZXMub3V0bGluZWRcbiAgICB9W2Zjcy52YXJpYW50XSksXG4gICAgY2xhc3Nlczoge1xuICAgICAgZm9jdXNlZDogY2xhc3Nlcy5mb2N1c2VkLFxuICAgICAgZGlzYWJsZWQ6IGNsYXNzZXMuZGlzYWJsZWQsXG4gICAgICBlcnJvcjogY2xhc3Nlcy5lcnJvcixcbiAgICAgIHJlcXVpcmVkOiBjbGFzc2VzLnJlcXVpcmVkLFxuICAgICAgYXN0ZXJpc2s6IGNsYXNzZXMuYXN0ZXJpc2tcbiAgICB9LFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IElucHV0TGFiZWwucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnRzIG9mIHRoZSBgSW5wdXRMYWJlbGAuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGNvbXBvbmVudC4gSXQgc3VwcG9ydHMgdGhvc2UgdGhlbWUgY29sb3JzIHRoYXQgbWFrZSBzZW5zZSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHRyYW5zaXRpb24gYW5pbWF0aW9uIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZUFuaW1hdGlvbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYXBwbHkgZGlzYWJsZWQgY2xhc3MuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsIHdpbGwgYmUgZGlzcGxheWVkIGluIGFuIGVycm9yIHN0YXRlLlxuICAgKi9cbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCBvZiB0aGlzIGxhYmVsIGlzIGZvY3VzZWQuXG4gICAqL1xuICBmb2N1c2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYGRlbnNlYCwgd2lsbCBhZGp1c3QgdmVydGljYWwgc3BhY2luZy4gVGhpcyBpcyBub3JtYWxseSBvYnRhaW5lZCB2aWEgY29udGV4dCBmcm9tXG4gICAqIEZvcm1Db250cm9sLlxuICAgKi9cbiAgbWFyZ2luOiBQcm9wVHlwZXMub25lT2YoWydkZW5zZSddKSxcblxuICAvKipcbiAgICogaWYgYHRydWVgLCB0aGUgbGFiZWwgd2lsbCBpbmRpY2F0ZSB0aGF0IHRoZSBpbnB1dCBpcyByZXF1aXJlZC5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbGFiZWwgaXMgc2hydW5rLlxuICAgKi9cbiAgc2hyaW5rOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZmlsbGVkJywgJ291dGxpbmVkJywgJ3N0YW5kYXJkJ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUlucHV0TGFiZWwnXG59KShJbnB1dExhYmVsKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyByZWZUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBJbnB1dEJhc2UgZnJvbSAnLi4vSW5wdXRCYXNlJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHZhciBsaWdodCA9IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JztcbiAgdmFyIGJvdHRvbUxpbmVDb2xvciA9IGxpZ2h0ID8gJ3JnYmEoMCwgMCwgMCwgMC40MiknIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSc7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBjb21wb25lbnQgaXMgYSBkZXNjZW5kYW50IG9mIGBGb3JtQ29udHJvbGAuICovXG4gICAgZm9ybUNvbnRyb2w6IHtcbiAgICAgICdsYWJlbCArICYnOiB7XG4gICAgICAgIG1hcmdpblRvcDogMTZcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgY29tcG9uZW50IGlzIGZvY3VzZWQuICovXG4gICAgZm9jdXNlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlZD17dHJ1ZX1gLiAqL1xuICAgIGRpc2FibGVkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgY29sb3Igc2Vjb25kYXJ5LiAqL1xuICAgIGNvbG9yU2Vjb25kYXJ5OiB7XG4gICAgICAnJiR1bmRlcmxpbmU6YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVVbmRlcmxpbmU9e2ZhbHNlfWAuICovXG4gICAgdW5kZXJsaW5lOiB7XG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcIjJweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4pLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIC8vIERvaW5nIHRoZSBvdGhlciB3YXkgYXJvdW5kIGNyYXNoIG9uIElFIDExIFwiJydcIiBodHRwczovL2dpdGh1Yi5jb20vY3NzaW5qcy9qc3MvaXNzdWVzLzI0MlxuICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDApJyxcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd0cmFuc2Zvcm0nLCB7XG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXIsXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dFxuICAgICAgICB9KSxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnIC8vIFRyYW5zcGFyZW50IHRvIHRoZSBob3ZlciBzdHlsZS5cblxuICAgICAgfSxcbiAgICAgICcmJGZvY3VzZWQ6YWZ0ZXInOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgxKSdcbiAgICAgIH0sXG4gICAgICAnJiRlcnJvcjphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpbixcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJyAvLyBlcnJvciBpcyBhbHdheXMgdW5kZXJsaW5lZCBpbiByZWRcblxuICAgICAgfSxcbiAgICAgICcmOmJlZm9yZSc6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCBcIi5jb25jYXQoYm90dG9tTGluZUNvbG9yKSxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAvLyBEb2luZyB0aGUgb3RoZXIgd2F5IGFyb3VuZCBjcmFzaCBvbiBJRSAxMSBcIicnXCIgaHR0cHM6Ly9naXRodWIuY29tL2Nzc2luanMvanNzL2lzc3Vlcy8yNDJcbiAgICAgICAgY29udGVudDogJ1wiXFxcXDAwYTBcIicsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdib3JkZXItYm90dG9tLWNvbG9yJywge1xuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVyXG4gICAgICAgIH0pLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScgLy8gVHJhbnNwYXJlbnQgdG8gdGhlIGhvdmVyIHN0eWxlLlxuXG4gICAgICB9LFxuICAgICAgJyY6aG92ZXI6bm90KCRkaXNhYmxlZCk6YmVmb3JlJzoge1xuICAgICAgICBib3JkZXJCb3R0b206IFwiMnB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSksXG4gICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XG4gICAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIFwiLmNvbmNhdChib3R0b21MaW5lQ29sb3IpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnJiRkaXNhYmxlZDpiZWZvcmUnOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnZG90dGVkJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBlcnJvcj17dHJ1ZX1gLiAqL1xuICAgIGVycm9yOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG1hcmdpbj1cImRlbnNlXCJgLiAqL1xuICAgIG1hcmdpbkRlbnNlOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG11bHRpbGluZT17dHJ1ZX1gLiAqL1xuICAgIG11bHRpbGluZToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmdWxsV2lkdGg9e3RydWV9YC4gKi9cbiAgICBmdWxsV2lkdGg6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC4gKi9cbiAgICBpbnB1dDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgICBpbnB1dE1hcmdpbkRlbnNlOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG11bHRpbGluZT17dHJ1ZX1gLiAqL1xuICAgIGlucHV0TXVsdGlsaW5lOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYHR5cGU9XCJzZWFyY2hcImAuICovXG4gICAgaW5wdXRUeXBlU2VhcmNoOiB7fVxuICB9O1xufTtcbnZhciBJbnB1dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIElucHV0KHByb3BzLCByZWYpIHtcbiAgdmFyIGRpc2FibGVVbmRlcmxpbmUgPSBwcm9wcy5kaXNhYmxlVW5kZXJsaW5lLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBfcHJvcHMkZnVsbFdpZHRoID0gcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgZnVsbFdpZHRoID0gX3Byb3BzJGZ1bGxXaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnVsbFdpZHRoLFxuICAgICAgX3Byb3BzJGlucHV0Q29tcG9uZW50ID0gcHJvcHMuaW5wdXRDb21wb25lbnQsXG4gICAgICBpbnB1dENvbXBvbmVudCA9IF9wcm9wcyRpbnB1dENvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2lucHV0JyA6IF9wcm9wcyRpbnB1dENvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRtdWx0aWxpbmUgPSBwcm9wcy5tdWx0aWxpbmUsXG4gICAgICBtdWx0aWxpbmUgPSBfcHJvcHMkbXVsdGlsaW5lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRtdWx0aWxpbmUsXG4gICAgICBfcHJvcHMkdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICB0eXBlID0gX3Byb3BzJHR5cGUgPT09IHZvaWQgMCA/ICd0ZXh0JyA6IF9wcm9wcyR0eXBlLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImRpc2FibGVVbmRlcmxpbmVcIiwgXCJjbGFzc2VzXCIsIFwiZnVsbFdpZHRoXCIsIFwiaW5wdXRDb21wb25lbnRcIiwgXCJtdWx0aWxpbmVcIiwgXCJ0eXBlXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRCYXNlLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NlczogX2V4dGVuZHMoe30sIGNsYXNzZXMsIHtcbiAgICAgIHJvb3Q6IGNsc3goY2xhc3Nlcy5yb290LCAhZGlzYWJsZVVuZGVybGluZSAmJiBjbGFzc2VzLnVuZGVybGluZSksXG4gICAgICB1bmRlcmxpbmU6IG51bGxcbiAgICB9KSxcbiAgICBmdWxsV2lkdGg6IGZ1bGxXaWR0aCxcbiAgICBpbnB1dENvbXBvbmVudDogaW5wdXRDb21wb25lbnQsXG4gICAgbXVsdGlsaW5lOiBtdWx0aWxpbmUsXG4gICAgcmVmOiByZWYsXG4gICAgdHlwZTogdHlwZVxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGlzIHByb3AgaGVscHMgdXNlcnMgdG8gZmlsbCBmb3JtcyBmYXN0ZXIsIGVzcGVjaWFsbHkgb24gbW9iaWxlIGRldmljZXMuXG4gICAqIFRoZSBuYW1lIGNhbiBiZSBjb25mdXNpbmcsIGFzIGl0J3MgbW9yZSBsaWtlIGFuIGF1dG9maWxsLlxuICAgKiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgaXQgW2ZvbGxvd2luZyB0aGUgc3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybS1jb250cm9sLWluZnJhc3RydWN0dXJlLmh0bWwjYXV0b2ZpbGwpLlxuICAgKi9cbiAgYXV0b0NvbXBsZXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSBmb2N1c2VkIGR1cmluZyB0aGUgZmlyc3QgbW91bnQuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgYGlucHV0YCBlbGVtZW50IHZhbHVlLiBVc2Ugd2hlbiB0aGUgY29tcG9uZW50IGlzIG5vdCBjb250cm9sbGVkLlxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCBub3QgaGF2ZSBhbiB1bmRlcmxpbmUuXG4gICAqL1xuICBkaXNhYmxlVW5kZXJsaW5lOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5kIGBJbnB1dEFkb3JubWVudGAgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgZW5kQWRvcm5tZW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCBpbmRpY2F0ZSBhbiBlcnJvci4gVGhpcyBpcyBub3JtYWxseSBvYnRhaW5lZCB2aWEgY29udGV4dCBmcm9tXG4gICAqIEZvcm1Db250cm9sLlxuICAgKi9cbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cbiAgICovXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGlucHV0Q29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFtBdHRyaWJ1dGVzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjQXR0cmlidXRlcykgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUGFzcyBhIHJlZiB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRSZWY6IHJlZlR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGBkZW5zZWAsIHdpbGwgYWRqdXN0IHZlcnRpY2FsIHNwYWNpbmcuIFRoaXMgaXMgbm9ybWFsbHkgb2J0YWluZWQgdmlhIGNvbnRleHQgZnJvbVxuICAgKiBGb3JtQ29udHJvbC5cbiAgICovXG4gIG1hcmdpbjogUHJvcFR5cGVzLm9uZU9mKFsnZGVuc2UnLCAnbm9uZSddKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBhIHRleHRhcmVhIGVsZW1lbnQgd2lsbCBiZSByZW5kZXJlZC5cbiAgICovXG4gIG11bHRpbGluZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE5hbWUgYXR0cmlidXRlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIFlvdSBjYW4gcHVsbCBvdXQgdGhlIG5ldyB2YWx1ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC52YWx1ZWAgKHN0cmluZykuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBzaG9ydCBoaW50IGRpc3BsYXllZCBpbiB0aGUgaW5wdXQgYmVmb3JlIHRoZSB1c2VyIGVudGVycyBhIHZhbHVlLlxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEl0IHByZXZlbnRzIHRoZSB1c2VyIGZyb20gY2hhbmdpbmcgdGhlIHZhbHVlIG9mIHRoZSBmaWVsZFxuICAgKiAobm90IGZyb20gaW50ZXJhY3Rpbmcgd2l0aCB0aGUgZmllbGQpLlxuICAgKi9cbiAgcmVhZE9ubHk6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSByZXF1aXJlZC5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzTWF4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIFN0YXJ0IGBJbnB1dEFkb3JubWVudGAgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgc3RhcnRBZG9ybm1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUeXBlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuIEl0IHNob3VsZCBiZSBbYSB2YWxpZCBIVE1MNSBpbnB1dCB0eXBlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjRm9ybV8lM0NpbnB1dCUzRV90eXBlcykuXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudCwgcmVxdWlyZWQgZm9yIGEgY29udHJvbGxlZCBjb21wb25lbnQuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueVxufSA6IHZvaWQgMDtcbklucHV0Lm11aU5hbWUgPSAnSW5wdXQnO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUlucHV0J1xufSkoSW5wdXQpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBMaXN0Q29udGV4dCBmcm9tICcuL0xpc3RDb250ZXh0JztcbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7XG4gICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgbWFyZ2luOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlUGFkZGluZz17ZmFsc2V9YC4gKi9cbiAgcGFkZGluZzoge1xuICAgIHBhZGRpbmdUb3A6IDgsXG4gICAgcGFkZGluZ0JvdHRvbTogOFxuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgZGVuc2UuICovXG4gIGRlbnNlOiB7fSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGEgYHN1YmhlYWRlcmAgaXMgcHJvdmlkZWQuICovXG4gIHN1YmhlYWRlcjoge1xuICAgIHBhZGRpbmdUb3A6IDBcbiAgfVxufTtcbnZhciBMaXN0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTGlzdChwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ3VsJyA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBfcHJvcHMkZGVuc2UgPSBwcm9wcy5kZW5zZSxcbiAgICAgIGRlbnNlID0gX3Byb3BzJGRlbnNlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkZW5zZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlUGFkZGluZyA9IHByb3BzLmRpc2FibGVQYWRkaW5nLFxuICAgICAgZGlzYWJsZVBhZGRpbmcgPSBfcHJvcHMkZGlzYWJsZVBhZGRpbmcgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVQYWRkaW5nLFxuICAgICAgc3ViaGVhZGVyID0gcHJvcHMuc3ViaGVhZGVyLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFwiLCBcImRlbnNlXCIsIFwiZGlzYWJsZVBhZGRpbmdcIiwgXCJzdWJoZWFkZXJcIl0pO1xuXG4gIHZhciBjb250ZXh0ID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlbnNlOiBkZW5zZVxuICAgIH07XG4gIH0sIFtkZW5zZV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29udGV4dFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIGRlbnNlICYmIGNsYXNzZXMuZGVuc2UsICFkaXNhYmxlUGFkZGluZyAmJiBjbGFzc2VzLnBhZGRpbmcsIHN1YmhlYWRlciAmJiBjbGFzc2VzLnN1YmhlYWRlciksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBzdWJoZWFkZXIsIGNoaWxkcmVuKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IExpc3QucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgY29tcGFjdCB2ZXJ0aWNhbCBwYWRkaW5nIGRlc2lnbmVkIGZvciBrZXlib2FyZCBhbmQgbW91c2UgaW5wdXQgd2lsbCBiZSB1c2VkIGZvclxuICAgKiB0aGUgbGlzdCBhbmQgbGlzdCBpdGVtcy5cbiAgICogVGhlIHByb3AgaXMgYXZhaWxhYmxlIHRvIGRlc2NlbmRhbnQgY29tcG9uZW50cyBhcyB0aGUgYGRlbnNlYCBjb250ZXh0LlxuICAgKi9cbiAgZGVuc2U6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHZlcnRpY2FsIHBhZGRpbmcgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIGxpc3QuXG4gICAqL1xuICBkaXNhYmxlUGFkZGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBzdWJoZWFkZXIsIG5vcm1hbGx5IGBMaXN0U3ViaGVhZGVyYC5cbiAgICovXG4gIHN1YmhlYWRlcjogUHJvcFR5cGVzLm5vZGVcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpTGlzdCdcbn0pKExpc3QpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG52YXIgTGlzdENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgTGlzdENvbnRleHQuZGlzcGxheU5hbWUgPSAnTGlzdENvbnRleHQnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0Q29udGV4dDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc0ZyYWdtZW50IH0gZnJvbSAncmVhY3QtaXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICcuLi91dGlscy9vd25lckRvY3VtZW50JztcbmltcG9ydCBMaXN0IGZyb20gJy4uL0xpc3QnO1xuaW1wb3J0IGdldFNjcm9sbGJhclNpemUgZnJvbSAnLi4vdXRpbHMvZ2V0U2Nyb2xsYmFyU2l6ZSc7XG5pbXBvcnQgdXNlRm9ya1JlZiBmcm9tICcuLi91dGlscy91c2VGb3JrUmVmJztcblxuZnVuY3Rpb24gbmV4dEl0ZW0obGlzdCwgaXRlbSwgZGlzYWJsZUxpc3RXcmFwKSB7XG4gIGlmIChsaXN0ID09PSBpdGVtKSB7XG4gICAgcmV0dXJuIGxpc3QuZmlyc3RDaGlsZDtcbiAgfVxuXG4gIGlmIChpdGVtICYmIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgcmV0dXJuIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICB9XG5cbiAgcmV0dXJuIGRpc2FibGVMaXN0V3JhcCA/IG51bGwgOiBsaXN0LmZpcnN0Q2hpbGQ7XG59XG5cbmZ1bmN0aW9uIHByZXZpb3VzSXRlbShsaXN0LCBpdGVtLCBkaXNhYmxlTGlzdFdyYXApIHtcbiAgaWYgKGxpc3QgPT09IGl0ZW0pIHtcbiAgICByZXR1cm4gZGlzYWJsZUxpc3RXcmFwID8gbGlzdC5maXJzdENoaWxkIDogbGlzdC5sYXN0Q2hpbGQ7XG4gIH1cblxuICBpZiAoaXRlbSAmJiBpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHtcbiAgICByZXR1cm4gaXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICB9XG5cbiAgcmV0dXJuIGRpc2FibGVMaXN0V3JhcCA/IG51bGwgOiBsaXN0Lmxhc3RDaGlsZDtcbn1cblxuZnVuY3Rpb24gdGV4dENyaXRlcmlhTWF0Y2hlcyhuZXh0Rm9jdXMsIHRleHRDcml0ZXJpYSkge1xuICBpZiAodGV4dENyaXRlcmlhID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciB0ZXh0ID0gbmV4dEZvY3VzLmlubmVyVGV4dDtcblxuICBpZiAodGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8ganNkb20gZG9lc24ndCBzdXBwb3J0IGlubmVyVGV4dFxuICAgIHRleHQgPSBuZXh0Rm9jdXMudGV4dENvbnRlbnQ7XG4gIH1cblxuICB0ZXh0ID0gdGV4dC50cmltKCkudG9Mb3dlckNhc2UoKTtcblxuICBpZiAodGV4dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodGV4dENyaXRlcmlhLnJlcGVhdGluZykge1xuICAgIHJldHVybiB0ZXh0WzBdID09PSB0ZXh0Q3JpdGVyaWEua2V5c1swXTtcbiAgfVxuXG4gIHJldHVybiB0ZXh0LmluZGV4T2YodGV4dENyaXRlcmlhLmtleXMuam9pbignJykpID09PSAwO1xufVxuXG5mdW5jdGlvbiBtb3ZlRm9jdXMobGlzdCwgY3VycmVudEZvY3VzLCBkaXNhYmxlTGlzdFdyYXAsIGRpc2FibGVkSXRlbXNGb2N1c2FibGUsIHRyYXZlcnNhbEZ1bmN0aW9uLCB0ZXh0Q3JpdGVyaWEpIHtcbiAgdmFyIHdyYXBwZWRPbmNlID0gZmFsc2U7XG4gIHZhciBuZXh0Rm9jdXMgPSB0cmF2ZXJzYWxGdW5jdGlvbihsaXN0LCBjdXJyZW50Rm9jdXMsIGN1cnJlbnRGb2N1cyA/IGRpc2FibGVMaXN0V3JhcCA6IGZhbHNlKTtcblxuICB3aGlsZSAobmV4dEZvY3VzKSB7XG4gICAgLy8gUHJldmVudCBpbmZpbml0ZSBsb29wLlxuICAgIGlmIChuZXh0Rm9jdXMgPT09IGxpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgaWYgKHdyYXBwZWRPbmNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd3JhcHBlZE9uY2UgPSB0cnVlO1xuICAgIH0gLy8gU2FtZSBsb2dpYyBhcyB1c2VBdXRvY29tcGxldGUuanNcblxuXG4gICAgdmFyIG5leHRGb2N1c0Rpc2FibGVkID0gZGlzYWJsZWRJdGVtc0ZvY3VzYWJsZSA/IGZhbHNlIDogbmV4dEZvY3VzLmRpc2FibGVkIHx8IG5leHRGb2N1cy5nZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnKSA9PT0gJ3RydWUnO1xuXG4gICAgaWYgKCFuZXh0Rm9jdXMuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpIHx8ICF0ZXh0Q3JpdGVyaWFNYXRjaGVzKG5leHRGb2N1cywgdGV4dENyaXRlcmlhKSB8fCBuZXh0Rm9jdXNEaXNhYmxlZCkge1xuICAgICAgLy8gTW92ZSB0byB0aGUgbmV4dCBlbGVtZW50LlxuICAgICAgbmV4dEZvY3VzID0gdHJhdmVyc2FsRnVuY3Rpb24obGlzdCwgbmV4dEZvY3VzLCBkaXNhYmxlTGlzdFdyYXApO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0Rm9jdXMuZm9jdXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn1cblxudmFyIHVzZUVuaGFuY2VkRWZmZWN0ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBSZWFjdC51c2VFZmZlY3QgOiBSZWFjdC51c2VMYXlvdXRFZmZlY3Q7XG4vKipcbiAqIEEgcGVybWFuZW50bHkgZGlzcGxheWVkIG1lbnUgZm9sbG93aW5nIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS1wcmFjdGljZXMvI21lbnVidXR0b24uXG4gKiBJdCdzIGV4cG9zZWQgdG8gaGVscCBjdXN0b21pemF0aW9uIG9mIHRoZSBbYE1lbnVgXSgvYXBpL21lbnUvKSBjb21wb25lbnQuIElmIHlvdVxuICogdXNlIGl0IHNlcGFyYXRlbHkgeW91IG5lZWQgdG8gbW92ZSBmb2N1cyBpbnRvIHRoZSBjb21wb25lbnQgbWFudWFsbHkuIE9uY2VcbiAqIHRoZSBmb2N1cyBpcyBwbGFjZWQgaW5zaWRlIHRoZSBjb21wb25lbnQgaXQgaXMgZnVsbHkga2V5Ym9hcmQgYWNjZXNzaWJsZS5cbiAqL1xuXG52YXIgTWVudUxpc3QgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBNZW51TGlzdChwcm9wcywgcmVmKSB7XG4gIHZhciBhY3Rpb25zID0gcHJvcHMuYWN0aW9ucyxcbiAgICAgIF9wcm9wcyRhdXRvRm9jdXMgPSBwcm9wcy5hdXRvRm9jdXMsXG4gICAgICBhdXRvRm9jdXMgPSBfcHJvcHMkYXV0b0ZvY3VzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRhdXRvRm9jdXMsXG4gICAgICBfcHJvcHMkYXV0b0ZvY3VzSXRlbSA9IHByb3BzLmF1dG9Gb2N1c0l0ZW0sXG4gICAgICBhdXRvRm9jdXNJdGVtID0gX3Byb3BzJGF1dG9Gb2N1c0l0ZW0gPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGF1dG9Gb2N1c0l0ZW0sXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGRpc2FibGVkSXRlbXNGID0gcHJvcHMuZGlzYWJsZWRJdGVtc0ZvY3VzYWJsZSxcbiAgICAgIGRpc2FibGVkSXRlbXNGb2N1c2FibGUgPSBfcHJvcHMkZGlzYWJsZWRJdGVtc0YgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVkSXRlbXNGLFxuICAgICAgX3Byb3BzJGRpc2FibGVMaXN0V3JhID0gcHJvcHMuZGlzYWJsZUxpc3RXcmFwLFxuICAgICAgZGlzYWJsZUxpc3RXcmFwID0gX3Byb3BzJGRpc2FibGVMaXN0V3JhID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlTGlzdFdyYSxcbiAgICAgIG9uS2V5RG93biA9IHByb3BzLm9uS2V5RG93bixcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ3NlbGVjdGVkTWVudScgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhY3Rpb25zXCIsIFwiYXV0b0ZvY3VzXCIsIFwiYXV0b0ZvY3VzSXRlbVwiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlzYWJsZWRJdGVtc0ZvY3VzYWJsZVwiLCBcImRpc2FibGVMaXN0V3JhcFwiLCBcIm9uS2V5RG93blwiLCBcInZhcmlhbnRcIl0pO1xuXG4gIHZhciBsaXN0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgdGV4dENyaXRlcmlhUmVmID0gUmVhY3QudXNlUmVmKHtcbiAgICBrZXlzOiBbXSxcbiAgICByZXBlYXRpbmc6IHRydWUsXG4gICAgcHJldmlvdXNLZXlNYXRjaGVkOiB0cnVlLFxuICAgIGxhc3RUaW1lOiBudWxsXG4gIH0pO1xuICB1c2VFbmhhbmNlZEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGF1dG9Gb2N1cykge1xuICAgICAgbGlzdFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuICB9LCBbYXV0b0ZvY3VzXSk7XG4gIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUoYWN0aW9ucywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhZGp1c3RTdHlsZUZvclNjcm9sbGJhcjogZnVuY3Rpb24gYWRqdXN0U3R5bGVGb3JTY3JvbGxiYXIoY29udGFpbmVyRWxlbWVudCwgdGhlbWUpIHtcbiAgICAgICAgLy8gTGV0J3MgaWdub3JlIHRoYXQgcGllY2Ugb2YgbG9naWMgaWYgdXNlcnMgYXJlIGFscmVhZHkgb3ZlcnJpZGluZyB0aGUgd2lkdGhcbiAgICAgICAgLy8gb2YgdGhlIG1lbnUuXG4gICAgICAgIHZhciBub0V4cGxpY2l0V2lkdGggPSAhbGlzdFJlZi5jdXJyZW50LnN0eWxlLndpZHRoO1xuXG4gICAgICAgIGlmIChjb250YWluZXJFbGVtZW50LmNsaWVudEhlaWdodCA8IGxpc3RSZWYuY3VycmVudC5jbGllbnRIZWlnaHQgJiYgbm9FeHBsaWNpdFdpZHRoKSB7XG4gICAgICAgICAgdmFyIHNjcm9sbGJhclNpemUgPSBcIlwiLmNvbmNhdChnZXRTY3JvbGxiYXJTaXplKHRydWUpLCBcInB4XCIpO1xuICAgICAgICAgIGxpc3RSZWYuY3VycmVudC5zdHlsZVt0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3BhZGRpbmdMZWZ0JyA6ICdwYWRkaW5nUmlnaHQnXSA9IHNjcm9sbGJhclNpemU7XG4gICAgICAgICAgbGlzdFJlZi5jdXJyZW50LnN0eWxlLndpZHRoID0gXCJjYWxjKDEwMCUgKyBcIi5jb25jYXQoc2Nyb2xsYmFyU2l6ZSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpc3RSZWYuY3VycmVudDtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgdmFyIGhhbmRsZUtleURvd24gPSBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgdmFyIGxpc3QgPSBsaXN0UmVmLmN1cnJlbnQ7XG4gICAgdmFyIGtleSA9IGV2ZW50LmtleTtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudH0gLSB3aWxsIGFsd2F5cyBiZSBkZWZpbmVkIHNpbmNlIHdlIGFyZSBpbiBhIGtleWRvd24gaGFuZGxlclxuICAgICAqIGF0dGFjaGVkIHRvIGFuIGVsZW1lbnQuIEEga2V5ZG93biBldmVudCBpcyBlaXRoZXIgZGlzcGF0Y2hlZCB0byB0aGUgYWN0aXZlRWxlbWVudFxuICAgICAqIG9yIGRvY3VtZW50LmJvZHkgb3IgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LiBPbmx5IHRoZSBmaXJzdCBjYXNlIHdpbGxcbiAgICAgKiB0cmlnZ2VyIHRoaXMgc3BlY2lmaWMgaGFuZGxlci5cbiAgICAgKi9cblxuICAgIHZhciBjdXJyZW50Rm9jdXMgPSBvd25lckRvY3VtZW50KGxpc3QpLmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAoa2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgLy8gUHJldmVudCBzY3JvbGwgb2YgdGhlIHBhZ2VcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBtb3ZlRm9jdXMobGlzdCwgY3VycmVudEZvY3VzLCBkaXNhYmxlTGlzdFdyYXAsIGRpc2FibGVkSXRlbXNGb2N1c2FibGUsIG5leHRJdGVtKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbW92ZUZvY3VzKGxpc3QsIGN1cnJlbnRGb2N1cywgZGlzYWJsZUxpc3RXcmFwLCBkaXNhYmxlZEl0ZW1zRm9jdXNhYmxlLCBwcmV2aW91c0l0ZW0pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnSG9tZScpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBtb3ZlRm9jdXMobGlzdCwgbnVsbCwgZGlzYWJsZUxpc3RXcmFwLCBkaXNhYmxlZEl0ZW1zRm9jdXNhYmxlLCBuZXh0SXRlbSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdFbmQnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbW92ZUZvY3VzKGxpc3QsIG51bGwsIGRpc2FibGVMaXN0V3JhcCwgZGlzYWJsZWRJdGVtc0ZvY3VzYWJsZSwgcHJldmlvdXNJdGVtKTtcbiAgICB9IGVsc2UgaWYgKGtleS5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjcml0ZXJpYSA9IHRleHRDcml0ZXJpYVJlZi5jdXJyZW50O1xuICAgICAgdmFyIGxvd2VyS2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICB2YXIgY3VyclRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgICAgaWYgKGNyaXRlcmlhLmtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBSZXNldFxuICAgICAgICBpZiAoY3VyclRpbWUgLSBjcml0ZXJpYS5sYXN0VGltZSA+IDUwMCkge1xuICAgICAgICAgIGNyaXRlcmlhLmtleXMgPSBbXTtcbiAgICAgICAgICBjcml0ZXJpYS5yZXBlYXRpbmcgPSB0cnVlO1xuICAgICAgICAgIGNyaXRlcmlhLnByZXZpb3VzS2V5TWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoY3JpdGVyaWEucmVwZWF0aW5nICYmIGxvd2VyS2V5ICE9PSBjcml0ZXJpYS5rZXlzWzBdKSB7XG4gICAgICAgICAgY3JpdGVyaWEucmVwZWF0aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3JpdGVyaWEubGFzdFRpbWUgPSBjdXJyVGltZTtcbiAgICAgIGNyaXRlcmlhLmtleXMucHVzaChsb3dlcktleSk7XG4gICAgICB2YXIga2VlcEZvY3VzT25DdXJyZW50ID0gY3VycmVudEZvY3VzICYmICFjcml0ZXJpYS5yZXBlYXRpbmcgJiYgdGV4dENyaXRlcmlhTWF0Y2hlcyhjdXJyZW50Rm9jdXMsIGNyaXRlcmlhKTtcblxuICAgICAgaWYgKGNyaXRlcmlhLnByZXZpb3VzS2V5TWF0Y2hlZCAmJiAoa2VlcEZvY3VzT25DdXJyZW50IHx8IG1vdmVGb2N1cyhsaXN0LCBjdXJyZW50Rm9jdXMsIGZhbHNlLCBkaXNhYmxlZEl0ZW1zRm9jdXNhYmxlLCBuZXh0SXRlbSwgY3JpdGVyaWEpKSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3JpdGVyaWEucHJldmlvdXNLZXlNYXRjaGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9uS2V5RG93bikge1xuICAgICAgb25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZU93blJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIC8vICNTdHJpY3RNb2RlIHJlYWR5XG4gICAgbGlzdFJlZi5jdXJyZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUoaW5zdGFuY2UpO1xuICB9LCBbXSk7XG4gIHZhciBoYW5kbGVSZWYgPSB1c2VGb3JrUmVmKGhhbmRsZU93blJlZiwgcmVmKTtcbiAgLyoqXG4gICAqIHRoZSBpbmRleCBvZiB0aGUgaXRlbSBzaG91bGQgcmVjZWl2ZSBmb2N1c1xuICAgKiBpbiBhIGB2YXJpYW50PVwic2VsZWN0ZWRNZW51XCJgIGl0J3MgdGhlIGZpcnN0IGBzZWxlY3RlZGAgaXRlbVxuICAgKiBvdGhlcndpc2UgaXQncyB0aGUgdmVyeSBmaXJzdCBpdGVtLlxuICAgKi9cblxuICB2YXIgYWN0aXZlSXRlbUluZGV4ID0gLTE7IC8vIHNpbmNlIHdlIGluamVjdCBmb2N1cyByZWxhdGVkIHByb3BzIGludG8gY2hpbGRyZW4gd2UgaGF2ZSB0byBkbyBhIGxvb2thaGVhZFxuICAvLyB0byBjaGVjayBpZiB0aGVyZSBpcyBhIGBzZWxlY3RlZGAgaXRlbS4gV2UncmUgbG9va2luZyBmb3IgdGhlIGxhc3QgYHNlbGVjdGVkYFxuICAvLyBpdGVtIGFuZCB1c2UgdGhlIGZpcnN0IHZhbGlkIGl0ZW0gYXMgYSBmYWxsYmFja1xuXG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICBpZiAoISAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChpc0ZyYWdtZW50KGNoaWxkKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgTWVudSBjb21wb25lbnQgZG9lc24ndCBhY2NlcHQgYSBGcmFnbWVudCBhcyBhIGNoaWxkLlwiLCAnQ29uc2lkZXIgcHJvdmlkaW5nIGFuIGFycmF5IGluc3RlYWQuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghY2hpbGQucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIGlmICh2YXJpYW50ID09PSAnc2VsZWN0ZWRNZW51JyAmJiBjaGlsZC5wcm9wcy5zZWxlY3RlZCkge1xuICAgICAgICBhY3RpdmVJdGVtSW5kZXggPSBpbmRleDtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlSXRlbUluZGV4ID09PSAtMSkge1xuICAgICAgICBhY3RpdmVJdGVtSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICB2YXIgaXRlbXMgPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPT09IGFjdGl2ZUl0ZW1JbmRleCkge1xuICAgICAgdmFyIG5ld0NoaWxkUHJvcHMgPSB7fTtcblxuICAgICAgaWYgKGF1dG9Gb2N1c0l0ZW0pIHtcbiAgICAgICAgbmV3Q2hpbGRQcm9wcy5hdXRvRm9jdXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGQucHJvcHMudGFiSW5kZXggPT09IHVuZGVmaW5lZCAmJiB2YXJpYW50ID09PSAnc2VsZWN0ZWRNZW51Jykge1xuICAgICAgICBuZXdDaGlsZFByb3BzLnRhYkluZGV4ID0gMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld0NoaWxkUHJvcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0LCBfZXh0ZW5kcyh7XG4gICAgcm9sZTogXCJtZW51XCIsXG4gICAgcmVmOiBoYW5kbGVSZWYsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgb25LZXlEb3duOiBoYW5kbGVLZXlEb3duLFxuICAgIHRhYkluZGV4OiBhdXRvRm9jdXMgPyAwIDogLTFcbiAgfSwgb3RoZXIpLCBpdGVtcyk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IE1lbnVMaXN0LnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgd2lsbCBmb2N1cyB0aGUgYFtyb2xlPVwibWVudVwiXWAgY29udGFpbmVyIGFuZCBtb3ZlIGludG8gdGFiIG9yZGVyLlxuICAgKi9cbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB3aWxsIGZvY3VzIHRoZSBmaXJzdCBtZW51aXRlbSBpZiBgdmFyaWFudD1cIm1lbnVcImAgb3Igc2VsZWN0ZWQgaXRlbVxuICAgKiBpZiBgdmFyaWFudD1cInNlbGVjdGVkTWVudVwiYC5cbiAgICovXG4gIGF1dG9Gb2N1c0l0ZW06IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBNZW51TGlzdCBjb250ZW50cywgbm9ybWFsbHkgYE1lbnVJdGVtYHMuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB3aWxsIGFsbG93IGZvY3VzIG9uIGRpc2FibGVkIGl0ZW1zLlxuICAgKi9cbiAgZGlzYWJsZWRJdGVtc0ZvY3VzYWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIG1lbnUgaXRlbXMgd2lsbCBub3Qgd3JhcCBmb2N1cy5cbiAgICovXG4gIGRpc2FibGVMaXN0V3JhcDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS4gVXNlIGBtZW51YCB0byBwcmV2ZW50IHNlbGVjdGVkIGl0ZW1zIGZyb20gaW1wYWN0aW5nIHRoZSBpbml0aWFsIGZvY3VzXG4gICAqIGFuZCB0aGUgdmVydGljYWwgYWxpZ25tZW50IHJlbGF0aXZlIHRvIHRoZSBhbmNob3IgZWxlbWVudC5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ21lbnUnLCAnc2VsZWN0ZWRNZW51J10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgTWVudUxpc3Q7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNGcmFnbWVudCB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IEhUTUxFbGVtZW50VHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgUG9wb3ZlciBmcm9tICcuLi9Qb3BvdmVyJztcbmltcG9ydCBNZW51TGlzdCBmcm9tICcuLi9NZW51TGlzdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHNldFJlZiBmcm9tICcuLi91dGlscy9zZXRSZWYnO1xuaW1wb3J0IHVzZVRoZW1lIGZyb20gJy4uL3N0eWxlcy91c2VUaGVtZSc7XG52YXIgUlRMX09SSUdJTiA9IHtcbiAgdmVydGljYWw6ICd0b3AnLFxuICBob3Jpem9udGFsOiAncmlnaHQnXG59O1xudmFyIExUUl9PUklHSU4gPSB7XG4gIHZlcnRpY2FsOiAndG9wJyxcbiAgaG9yaXpvbnRhbDogJ2xlZnQnXG59O1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgUGFwZXJgIGNvbXBvbmVudC4gKi9cbiAgcGFwZXI6IHtcbiAgICAvLyBzcGVjWjogVGhlIG1heGltdW0gaGVpZ2h0IG9mIGEgc2ltcGxlIG1lbnUgc2hvdWxkIGJlIG9uZSBvciBtb3JlIHJvd3MgbGVzcyB0aGFuIHRoZSB2aWV3XG4gICAgLy8gaGVpZ2h0LiBUaGlzIGVuc3VyZXMgYSB0YXBhYmxlIGFyZWEgb3V0c2lkZSBvZiB0aGUgc2ltcGxlIG1lbnUgd2l0aCB3aGljaCB0byBkaXNtaXNzXG4gICAgLy8gdGhlIG1lbnUuXG4gICAgbWF4SGVpZ2h0OiAnY2FsYygxMDAlIC0gOTZweCknLFxuICAgIC8vIEFkZCBpT1MgbW9tZW50dW0gc2Nyb2xsaW5nLlxuICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnXG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBMaXN0YCBjb21wb25lbnQgdmlhIGBNZW51TGlzdGAuICovXG4gIGxpc3Q6IHtcbiAgICAvLyBXZSBkaXNhYmxlIHRoZSBmb2N1cyByaW5nIGZvciBtb3VzZSwgdG91Y2ggYW5kIGtleWJvYXJkIHVzZXJzLlxuICAgIG91dGxpbmU6IDBcbiAgfVxufTtcbnZhciBNZW51ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTWVudShwcm9wcywgcmVmKSB7XG4gIHZhciBfcHJvcHMkYXV0b0ZvY3VzID0gcHJvcHMuYXV0b0ZvY3VzLFxuICAgICAgYXV0b0ZvY3VzID0gX3Byb3BzJGF1dG9Gb2N1cyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9wcm9wcyRhdXRvRm9jdXMsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBfcHJvcHMkZGlzYWJsZUF1dG9Gb2MgPSBwcm9wcy5kaXNhYmxlQXV0b0ZvY3VzSXRlbSxcbiAgICAgIGRpc2FibGVBdXRvRm9jdXNJdGVtID0gX3Byb3BzJGRpc2FibGVBdXRvRm9jID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlQXV0b0ZvYyxcbiAgICAgIF9wcm9wcyRNZW51TGlzdFByb3BzID0gcHJvcHMuTWVudUxpc3RQcm9wcyxcbiAgICAgIE1lbnVMaXN0UHJvcHMgPSBfcHJvcHMkTWVudUxpc3RQcm9wcyA9PT0gdm9pZCAwID8ge30gOiBfcHJvcHMkTWVudUxpc3RQcm9wcyxcbiAgICAgIG9uQ2xvc2UgPSBwcm9wcy5vbkNsb3NlLFxuICAgICAgb25FbnRlcmluZyA9IHByb3BzLm9uRW50ZXJpbmcsXG4gICAgICBvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIF9wcm9wcyRQYXBlclByb3BzID0gcHJvcHMuUGFwZXJQcm9wcyxcbiAgICAgIFBhcGVyUHJvcHMgPSBfcHJvcHMkUGFwZXJQcm9wcyA9PT0gdm9pZCAwID8ge30gOiBfcHJvcHMkUGFwZXJQcm9wcyxcbiAgICAgIFBvcG92ZXJDbGFzc2VzID0gcHJvcHMuUG9wb3ZlckNsYXNzZXMsXG4gICAgICBfcHJvcHMkdHJhbnNpdGlvbkR1cmEgPSBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSBfcHJvcHMkdHJhbnNpdGlvbkR1cmEgPT09IHZvaWQgMCA/ICdhdXRvJyA6IF9wcm9wcyR0cmFuc2l0aW9uRHVyYSxcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ3NlbGVjdGVkTWVudScgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhdXRvRm9jdXNcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJkaXNhYmxlQXV0b0ZvY3VzSXRlbVwiLCBcIk1lbnVMaXN0UHJvcHNcIiwgXCJvbkNsb3NlXCIsIFwib25FbnRlcmluZ1wiLCBcIm9wZW5cIiwgXCJQYXBlclByb3BzXCIsIFwiUG9wb3ZlckNsYXNzZXNcIiwgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICB2YXIgYXV0b0ZvY3VzSXRlbSA9IGF1dG9Gb2N1cyAmJiAhZGlzYWJsZUF1dG9Gb2N1c0l0ZW0gJiYgb3BlbjtcbiAgdmFyIG1lbnVMaXN0QWN0aW9uc1JlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIGNvbnRlbnRBbmNob3JSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgdmFyIGdldENvbnRlbnRBbmNob3JFbCA9IGZ1bmN0aW9uIGdldENvbnRlbnRBbmNob3JFbCgpIHtcbiAgICByZXR1cm4gY29udGVudEFuY2hvclJlZi5jdXJyZW50O1xuICB9O1xuXG4gIHZhciBoYW5kbGVFbnRlcmluZyA9IGZ1bmN0aW9uIGhhbmRsZUVudGVyaW5nKGVsZW1lbnQsIGlzQXBwZWFyaW5nKSB7XG4gICAgaWYgKG1lbnVMaXN0QWN0aW9uc1JlZi5jdXJyZW50KSB7XG4gICAgICBtZW51TGlzdEFjdGlvbnNSZWYuY3VycmVudC5hZGp1c3RTdHlsZUZvclNjcm9sbGJhcihlbGVtZW50LCB0aGVtZSk7XG4gICAgfVxuXG4gICAgaWYgKG9uRW50ZXJpbmcpIHtcbiAgICAgIG9uRW50ZXJpbmcoZWxlbWVudCwgaXNBcHBlYXJpbmcpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlTGlzdEtleURvd24gPSBmdW5jdGlvbiBoYW5kbGVMaXN0S2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdUYWInKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAob25DbG9zZSkge1xuICAgICAgICBvbkNsb3NlKGV2ZW50LCAndGFiS2V5RG93bicpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIHRoZSBpbmRleCBvZiB0aGUgaXRlbSBzaG91bGQgcmVjZWl2ZSBmb2N1c1xuICAgKiBpbiBhIGB2YXJpYW50PVwic2VsZWN0ZWRNZW51XCJgIGl0J3MgdGhlIGZpcnN0IGBzZWxlY3RlZGAgaXRlbVxuICAgKiBvdGhlcndpc2UgaXQncyB0aGUgdmVyeSBmaXJzdCBpdGVtLlxuICAgKi9cblxuXG4gIHZhciBhY3RpdmVJdGVtSW5kZXggPSAtMTsgLy8gc2luY2Ugd2UgaW5qZWN0IGZvY3VzIHJlbGF0ZWQgcHJvcHMgaW50byBjaGlsZHJlbiB3ZSBoYXZlIHRvIGRvIGEgbG9va2FoZWFkXG4gIC8vIHRvIGNoZWNrIGlmIHRoZXJlIGlzIGEgYHNlbGVjdGVkYCBpdGVtLiBXZSdyZSBsb29raW5nIGZvciB0aGUgbGFzdCBgc2VsZWN0ZWRgXG4gIC8vIGl0ZW0gYW5kIHVzZSB0aGUgZmlyc3QgdmFsaWQgaXRlbSBhcyBhIGZhbGxiYWNrXG5cbiAgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgaWYgKCEgLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoaXNGcmFnbWVudChjaGlsZCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIE1lbnUgY29tcG9uZW50IGRvZXNuJ3QgYWNjZXB0IGEgRnJhZ21lbnQgYXMgYSBjaGlsZC5cIiwgJ0NvbnNpZGVyIHByb3ZpZGluZyBhbiBhcnJheSBpbnN0ZWFkLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNoaWxkLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICBpZiAodmFyaWFudCAhPT0gXCJtZW51XCIgJiYgY2hpbGQucHJvcHMuc2VsZWN0ZWQpIHtcbiAgICAgICAgYWN0aXZlSXRlbUluZGV4ID0gaW5kZXg7XG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZUl0ZW1JbmRleCA9PT0gLTEpIHtcbiAgICAgICAgYWN0aXZlSXRlbUluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgdmFyIGl0ZW1zID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSBhY3RpdmVJdGVtSW5kZXgpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGluc3RhbmNlKSB7XG4gICAgICAgICAgLy8gI1N0cmljdE1vZGUgcmVhZHlcbiAgICAgICAgICBjb250ZW50QW5jaG9yUmVmLmN1cnJlbnQgPSBSZWFjdERPTS5maW5kRE9NTm9kZShpbnN0YW5jZSk7XG4gICAgICAgICAgc2V0UmVmKGNoaWxkLnJlZiwgaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUG9wb3ZlciwgX2V4dGVuZHMoe1xuICAgIGdldENvbnRlbnRBbmNob3JFbDogZ2V0Q29udGVudEFuY2hvckVsLFxuICAgIGNsYXNzZXM6IFBvcG92ZXJDbGFzc2VzLFxuICAgIG9uQ2xvc2U6IG9uQ2xvc2UsXG4gICAgb25FbnRlcmluZzogaGFuZGxlRW50ZXJpbmcsXG4gICAgYW5jaG9yT3JpZ2luOiB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gUlRMX09SSUdJTiA6IExUUl9PUklHSU4sXG4gICAgdHJhbnNmb3JtT3JpZ2luOiB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gUlRMX09SSUdJTiA6IExUUl9PUklHSU4sXG4gICAgUGFwZXJQcm9wczogX2V4dGVuZHMoe30sIFBhcGVyUHJvcHMsIHtcbiAgICAgIGNsYXNzZXM6IF9leHRlbmRzKHt9LCBQYXBlclByb3BzLmNsYXNzZXMsIHtcbiAgICAgICAgcm9vdDogY2xhc3Nlcy5wYXBlclxuICAgICAgfSlcbiAgICB9KSxcbiAgICBvcGVuOiBvcGVuLFxuICAgIHJlZjogcmVmLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogdHJhbnNpdGlvbkR1cmF0aW9uXG4gIH0sIG90aGVyKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUxpc3QsIF9leHRlbmRzKHtcbiAgICBvbktleURvd246IGhhbmRsZUxpc3RLZXlEb3duLFxuICAgIGFjdGlvbnM6IG1lbnVMaXN0QWN0aW9uc1JlZixcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyAmJiAoYWN0aXZlSXRlbUluZGV4ID09PSAtMSB8fCBkaXNhYmxlQXV0b0ZvY3VzSXRlbSksXG4gICAgYXV0b0ZvY3VzSXRlbTogYXV0b0ZvY3VzSXRlbSxcbiAgICB2YXJpYW50OiB2YXJpYW50XG4gIH0sIE1lbnVMaXN0UHJvcHMsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5saXN0LCBNZW51TGlzdFByb3BzLmNsYXNzTmFtZSlcbiAgfSksIGl0ZW1zKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IE1lbnUucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQSBIVE1MIGVsZW1lbnQsIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGl0LlxuICAgKiBJdCdzIHVzZWQgdG8gc2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgbWVudS5cbiAgICovXG4gIGFuY2hvckVsOiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAub25lT2ZUeXBlKFtIVE1MRWxlbWVudFR5cGUsIFByb3BUeXBlcy5mdW5jXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCAoRGVmYXVsdCkgd2lsbCBmb2N1cyB0aGUgYFtyb2xlPVwibWVudVwiXWAgaWYgbm8gZm9jdXNhYmxlIGNoaWxkIGlzIGZvdW5kLiBEaXNhYmxlZFxuICAgKiBjaGlsZHJlbiBhcmUgbm90IGZvY3VzYWJsZS4gSWYgeW91IHNldCB0aGlzIHByb3AgdG8gYGZhbHNlYCBmb2N1cyB3aWxsIGJlIHBsYWNlZFxuICAgKiBvbiB0aGUgcGFyZW50IG1vZGFsIGNvbnRhaW5lci4gVGhpcyBoYXMgc2V2ZXJlIGFjY2Vzc2liaWxpdHkgaW1wbGljYXRpb25zXG4gICAqIGFuZCBzaG91bGQgb25seSBiZSBjb25zaWRlcmVkIGlmIHlvdSBtYW5hZ2UgZm9jdXMgb3RoZXJ3aXNlLlxuICAgKi9cbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTWVudSBjb250ZW50cywgbm9ybWFsbHkgYE1lbnVJdGVtYHMuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogV2hlbiBvcGVuaW5nIHRoZSBtZW51IHdpbGwgbm90IGZvY3VzIHRoZSBhY3RpdmUgaXRlbSBidXQgdGhlIGBbcm9sZT1cIm1lbnVcIl1gXG4gICAqIHVubGVzcyBgYXV0b0ZvY3VzYCBpcyBhbHNvIHNldCB0byBgZmFsc2VgLiBOb3QgdXNpbmcgdGhlIGRlZmF1bHQgbWVhbnMgbm90XG4gICAqIGZvbGxvd2luZyBXQUktQVJJQSBhdXRob3JpbmcgcHJhY3RpY2VzLiBQbGVhc2UgYmUgY29uc2lkZXJhdGUgYWJvdXQgcG9zc2libGVcbiAgICogYWNjZXNzaWJpbGl0eSBpbXBsaWNhdGlvbnMuXG4gICAqL1xuICBkaXNhYmxlQXV0b0ZvY3VzSXRlbTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIFtgTWVudUxpc3RgXSgvYXBpL21lbnUtbGlzdC8pIGVsZW1lbnQuXG4gICAqL1xuICBNZW51TGlzdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjb21wb25lbnQgcmVxdWVzdHMgdG8gYmUgY2xvc2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gQ2FuIGJlOiBgXCJlc2NhcGVLZXlEb3duXCJgLCBgXCJiYWNrZHJvcENsaWNrXCJgLCBgXCJ0YWJLZXlEb3duXCJgLlxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgTWVudSBlbnRlcnMuXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgTWVudSBoYXMgZW50ZXJlZC5cbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIE1lbnUgaXMgZW50ZXJpbmcuXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBNZW51IGV4aXRzLlxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgTWVudSBoYXMgZXhpdGVkLlxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBNZW51IGlzIGV4aXRpbmcuXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBtZW51IGlzIHZpc2libGUuXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBQYXBlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBgY2xhc3Nlc2AgcHJvcCBhcHBsaWVkIHRvIHRoZSBbYFBvcG92ZXJgXSgvYXBpL3BvcG92ZXIvKSBlbGVtZW50LlxuICAgKi9cbiAgUG9wb3ZlckNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBsZW5ndGggb2YgdGhlIHRyYW5zaXRpb24gaW4gYG1zYCwgb3IgJ2F1dG8nXG4gICAqL1xuICB0cmFuc2l0aW9uRHVyYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXBwZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGVudGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGV4aXQ6IFByb3BUeXBlcy5udW1iZXJcbiAgfSldKSxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLiBVc2UgYG1lbnVgIHRvIHByZXZlbnQgc2VsZWN0ZWQgaXRlbXMgZnJvbSBpbXBhY3RpbmcgdGhlIGluaXRpYWwgZm9jdXNcbiAgICogYW5kIHRoZSB2ZXJ0aWNhbCBhbGlnbm1lbnQgcmVsYXRpdmUgdG8gdGhlIGFuY2hvciBlbGVtZW50LlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnbWVudScsICdzZWxlY3RlZE1lbnUnXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpTWVudSdcbn0pKE1lbnUpOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VGhlbWVQcm9wcywgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCB7IGVsZW1lbnRBY2NlcHRpbmdSZWYsIEhUTUxFbGVtZW50VHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICcuLi91dGlscy9vd25lckRvY3VtZW50JztcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vUG9ydGFsJztcbmltcG9ydCBjcmVhdGVDaGFpbmVkRnVuY3Rpb24gZnJvbSAnLi4vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJztcbmltcG9ydCB1c2VGb3JrUmVmIGZyb20gJy4uL3V0aWxzL3VzZUZvcmtSZWYnO1xuaW1wb3J0IHVzZUV2ZW50Q2FsbGJhY2sgZnJvbSAnLi4vdXRpbHMvdXNlRXZlbnRDYWxsYmFjayc7XG5pbXBvcnQgekluZGV4IGZyb20gJy4uL3N0eWxlcy96SW5kZXgnO1xuaW1wb3J0IE1vZGFsTWFuYWdlciwgeyBhcmlhSGlkZGVuIH0gZnJvbSAnLi9Nb2RhbE1hbmFnZXInO1xuaW1wb3J0IFRyYXBGb2N1cyBmcm9tICcuLi9VbnN0YWJsZV9UcmFwRm9jdXMnO1xuaW1wb3J0IFNpbXBsZUJhY2tkcm9wIGZyb20gJy4vU2ltcGxlQmFja2Ryb3AnO1xuXG5mdW5jdGlvbiBnZXRDb250YWluZXIoY29udGFpbmVyKSB7XG4gIGNvbnRhaW5lciA9IHR5cGVvZiBjb250YWluZXIgPT09ICdmdW5jdGlvbicgPyBjb250YWluZXIoKSA6IGNvbnRhaW5lcjtcbiAgcmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKGNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGdldEhhc1RyYW5zaXRpb24ocHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLmNoaWxkcmVuID8gcHJvcHMuY2hpbGRyZW4ucHJvcHMuaGFzT3duUHJvcGVydHkoJ2luJykgOiBmYWxzZTtcbn0gLy8gQSBtb2RhbCBtYW5hZ2VyIHVzZWQgdG8gdHJhY2sgYW5kIG1hbmFnZSB0aGUgc3RhdGUgb2Ygb3BlbiBNb2RhbHMuXG4vLyBNb2RhbHMgZG9uJ3Qgb3BlbiBvbiB0aGUgc2VydmVyIHNvIHRoaXMgd29uJ3QgY29uZmxpY3Qgd2l0aCBjb25jdXJyZW50IHJlcXVlc3RzLlxuXG5cbnZhciBkZWZhdWx0TWFuYWdlciA9IG5ldyBNb2RhbE1hbmFnZXIoKTtcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIHpJbmRleDogdGhlbWUuekluZGV4Lm1vZGFsLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIGBNb2RhbGAgaGFzIGV4aXRlZC4gKi9cbiAgICBoaWRkZW46IHtcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXG4gICAgfVxuICB9O1xufTtcbi8qKlxuICogTW9kYWwgaXMgYSBsb3dlci1sZXZlbCBjb25zdHJ1Y3QgdGhhdCBpcyBsZXZlcmFnZWQgYnkgdGhlIGZvbGxvd2luZyBjb21wb25lbnRzOlxuICpcbiAqIC0gW0RpYWxvZ10oL2FwaS9kaWFsb2cvKVxuICogLSBbRHJhd2VyXSgvYXBpL2RyYXdlci8pXG4gKiAtIFtNZW51XSgvYXBpL21lbnUvKVxuICogLSBbUG9wb3Zlcl0oL2FwaS9wb3BvdmVyLylcbiAqXG4gKiBJZiB5b3UgYXJlIGNyZWF0aW5nIGEgbW9kYWwgZGlhbG9nLCB5b3UgcHJvYmFibHkgd2FudCB0byB1c2UgdGhlIFtEaWFsb2ddKC9hcGkvZGlhbG9nLykgY29tcG9uZW50XG4gKiByYXRoZXIgdGhhbiBkaXJlY3RseSB1c2luZyBNb2RhbC5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBzaGFyZXMgbWFueSBjb25jZXB0cyB3aXRoIFtyZWFjdC1vdmVybGF5c10oaHR0cHM6Ly9yZWFjdC1ib290c3RyYXAuZ2l0aHViLmlvL3JlYWN0LW92ZXJsYXlzLyNtb2RhbHMpLlxuICovXG5cbnZhciBNb2RhbCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIE1vZGFsKGluUHJvcHMsIHJlZikge1xuICB2YXIgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICB2YXIgcHJvcHMgPSBnZXRUaGVtZVByb3BzKHtcbiAgICBuYW1lOiAnTXVpTW9kYWwnLFxuICAgIHByb3BzOiBfZXh0ZW5kcyh7fSwgaW5Qcm9wcyksXG4gICAgdGhlbWU6IHRoZW1lXG4gIH0pO1xuXG4gIHZhciBfcHJvcHMkQmFja2Ryb3BDb21wb24gPSBwcm9wcy5CYWNrZHJvcENvbXBvbmVudCxcbiAgICAgIEJhY2tkcm9wQ29tcG9uZW50ID0gX3Byb3BzJEJhY2tkcm9wQ29tcG9uID09PSB2b2lkIDAgPyBTaW1wbGVCYWNrZHJvcCA6IF9wcm9wcyRCYWNrZHJvcENvbXBvbixcbiAgICAgIEJhY2tkcm9wUHJvcHMgPSBwcm9wcy5CYWNrZHJvcFByb3BzLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIF9wcm9wcyRjbG9zZUFmdGVyVHJhbiA9IHByb3BzLmNsb3NlQWZ0ZXJUcmFuc2l0aW9uLFxuICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb24gPSBfcHJvcHMkY2xvc2VBZnRlclRyYW4gPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGNsb3NlQWZ0ZXJUcmFuLFxuICAgICAgY29udGFpbmVyID0gcHJvcHMuY29udGFpbmVyLFxuICAgICAgX3Byb3BzJGRpc2FibGVBdXRvRm9jID0gcHJvcHMuZGlzYWJsZUF1dG9Gb2N1cyxcbiAgICAgIGRpc2FibGVBdXRvRm9jdXMgPSBfcHJvcHMkZGlzYWJsZUF1dG9Gb2MgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVBdXRvRm9jLFxuICAgICAgX3Byb3BzJGRpc2FibGVCYWNrZHJvID0gcHJvcHMuZGlzYWJsZUJhY2tkcm9wQ2xpY2ssXG4gICAgICBkaXNhYmxlQmFja2Ryb3BDbGljayA9IF9wcm9wcyRkaXNhYmxlQmFja2RybyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUJhY2tkcm8sXG4gICAgICBfcHJvcHMkZGlzYWJsZUVuZm9yY2UgPSBwcm9wcy5kaXNhYmxlRW5mb3JjZUZvY3VzLFxuICAgICAgZGlzYWJsZUVuZm9yY2VGb2N1cyA9IF9wcm9wcyRkaXNhYmxlRW5mb3JjZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUVuZm9yY2UsXG4gICAgICBfcHJvcHMkZGlzYWJsZUVzY2FwZUsgPSBwcm9wcy5kaXNhYmxlRXNjYXBlS2V5RG93bixcbiAgICAgIGRpc2FibGVFc2NhcGVLZXlEb3duID0gX3Byb3BzJGRpc2FibGVFc2NhcGVLID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlRXNjYXBlSyxcbiAgICAgIF9wcm9wcyRkaXNhYmxlUG9ydGFsID0gcHJvcHMuZGlzYWJsZVBvcnRhbCxcbiAgICAgIGRpc2FibGVQb3J0YWwgPSBfcHJvcHMkZGlzYWJsZVBvcnRhbCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVBvcnRhbCxcbiAgICAgIF9wcm9wcyRkaXNhYmxlUmVzdG9yZSA9IHByb3BzLmRpc2FibGVSZXN0b3JlRm9jdXMsXG4gICAgICBkaXNhYmxlUmVzdG9yZUZvY3VzID0gX3Byb3BzJGRpc2FibGVSZXN0b3JlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlUmVzdG9yZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlU2Nyb2xsTCA9IHByb3BzLmRpc2FibGVTY3JvbGxMb2NrLFxuICAgICAgZGlzYWJsZVNjcm9sbExvY2sgPSBfcHJvcHMkZGlzYWJsZVNjcm9sbEwgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVTY3JvbGxMLFxuICAgICAgX3Byb3BzJGhpZGVCYWNrZHJvcCA9IHByb3BzLmhpZGVCYWNrZHJvcCxcbiAgICAgIGhpZGVCYWNrZHJvcCA9IF9wcm9wcyRoaWRlQmFja2Ryb3AgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGhpZGVCYWNrZHJvcCxcbiAgICAgIF9wcm9wcyRrZWVwTW91bnRlZCA9IHByb3BzLmtlZXBNb3VudGVkLFxuICAgICAga2VlcE1vdW50ZWQgPSBfcHJvcHMka2VlcE1vdW50ZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGtlZXBNb3VudGVkLFxuICAgICAgX3Byb3BzJG1hbmFnZXIgPSBwcm9wcy5tYW5hZ2VyLFxuICAgICAgbWFuYWdlciA9IF9wcm9wcyRtYW5hZ2VyID09PSB2b2lkIDAgPyBkZWZhdWx0TWFuYWdlciA6IF9wcm9wcyRtYW5hZ2VyLFxuICAgICAgb25CYWNrZHJvcENsaWNrID0gcHJvcHMub25CYWNrZHJvcENsaWNrLFxuICAgICAgb25DbG9zZSA9IHByb3BzLm9uQ2xvc2UsXG4gICAgICBvbkVzY2FwZUtleURvd24gPSBwcm9wcy5vbkVzY2FwZUtleURvd24sXG4gICAgICBvblJlbmRlcmVkID0gcHJvcHMub25SZW5kZXJlZCxcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcIkJhY2tkcm9wQ29tcG9uZW50XCIsIFwiQmFja2Ryb3BQcm9wc1wiLCBcImNoaWxkcmVuXCIsIFwiY2xvc2VBZnRlclRyYW5zaXRpb25cIiwgXCJjb250YWluZXJcIiwgXCJkaXNhYmxlQXV0b0ZvY3VzXCIsIFwiZGlzYWJsZUJhY2tkcm9wQ2xpY2tcIiwgXCJkaXNhYmxlRW5mb3JjZUZvY3VzXCIsIFwiZGlzYWJsZUVzY2FwZUtleURvd25cIiwgXCJkaXNhYmxlUG9ydGFsXCIsIFwiZGlzYWJsZVJlc3RvcmVGb2N1c1wiLCBcImRpc2FibGVTY3JvbGxMb2NrXCIsIFwiaGlkZUJhY2tkcm9wXCIsIFwia2VlcE1vdW50ZWRcIiwgXCJtYW5hZ2VyXCIsIFwib25CYWNrZHJvcENsaWNrXCIsIFwib25DbG9zZVwiLCBcIm9uRXNjYXBlS2V5RG93blwiLCBcIm9uUmVuZGVyZWRcIiwgXCJvcGVuXCJdKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUodHJ1ZSksXG4gICAgICBleGl0ZWQgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRFeGl0ZWQgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIG1vZGFsID0gUmVhY3QudXNlUmVmKHt9KTtcbiAgdmFyIG1vdW50Tm9kZVJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIG1vZGFsUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgaGFuZGxlUmVmID0gdXNlRm9ya1JlZihtb2RhbFJlZiwgcmVmKTtcbiAgdmFyIGhhc1RyYW5zaXRpb24gPSBnZXRIYXNUcmFuc2l0aW9uKHByb3BzKTtcblxuICB2YXIgZ2V0RG9jID0gZnVuY3Rpb24gZ2V0RG9jKCkge1xuICAgIHJldHVybiBvd25lckRvY3VtZW50KG1vdW50Tm9kZVJlZi5jdXJyZW50KTtcbiAgfTtcblxuICB2YXIgZ2V0TW9kYWwgPSBmdW5jdGlvbiBnZXRNb2RhbCgpIHtcbiAgICBtb2RhbC5jdXJyZW50Lm1vZGFsUmVmID0gbW9kYWxSZWYuY3VycmVudDtcbiAgICBtb2RhbC5jdXJyZW50Lm1vdW50Tm9kZSA9IG1vdW50Tm9kZVJlZi5jdXJyZW50O1xuICAgIHJldHVybiBtb2RhbC5jdXJyZW50O1xuICB9O1xuXG4gIHZhciBoYW5kbGVNb3VudGVkID0gZnVuY3Rpb24gaGFuZGxlTW91bnRlZCgpIHtcbiAgICBtYW5hZ2VyLm1vdW50KGdldE1vZGFsKCksIHtcbiAgICAgIGRpc2FibGVTY3JvbGxMb2NrOiBkaXNhYmxlU2Nyb2xsTG9ja1xuICAgIH0pOyAvLyBGaXggYSBidWcgb24gQ2hyb21lIHdoZXJlIHRoZSBzY3JvbGwgaXNuJ3QgaW5pdGlhbGx5IDAuXG5cbiAgICBtb2RhbFJlZi5jdXJyZW50LnNjcm9sbFRvcCA9IDA7XG4gIH07XG5cbiAgdmFyIGhhbmRsZU9wZW4gPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzb2x2ZWRDb250YWluZXIgPSBnZXRDb250YWluZXIoY29udGFpbmVyKSB8fCBnZXREb2MoKS5ib2R5O1xuICAgIG1hbmFnZXIuYWRkKGdldE1vZGFsKCksIHJlc29sdmVkQ29udGFpbmVyKTsgLy8gVGhlIGVsZW1lbnQgd2FzIGFscmVhZHkgbW91bnRlZC5cblxuICAgIGlmIChtb2RhbFJlZi5jdXJyZW50KSB7XG4gICAgICBoYW5kbGVNb3VudGVkKCk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGlzVG9wTW9kYWwgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG1hbmFnZXIuaXNUb3BNb2RhbChnZXRNb2RhbCgpKTtcbiAgfSwgW21hbmFnZXJdKTtcbiAgdmFyIGhhbmRsZVBvcnRhbFJlZiA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBtb3VudE5vZGVSZWYuY3VycmVudCA9IG5vZGU7XG5cbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob25SZW5kZXJlZCkge1xuICAgICAgb25SZW5kZXJlZCgpO1xuICAgIH1cblxuICAgIGlmIChvcGVuICYmIGlzVG9wTW9kYWwoKSkge1xuICAgICAgaGFuZGxlTW91bnRlZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcmlhSGlkZGVuKG1vZGFsUmVmLmN1cnJlbnQsIHRydWUpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBoYW5kbGVDbG9zZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBtYW5hZ2VyLnJlbW92ZShnZXRNb2RhbCgpKTtcbiAgfSwgW21hbmFnZXJdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaGFuZGxlQ2xvc2UoKTtcbiAgICB9O1xuICB9LCBbaGFuZGxlQ2xvc2VdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAob3Blbikge1xuICAgICAgaGFuZGxlT3BlbigpO1xuICAgIH0gZWxzZSBpZiAoIWhhc1RyYW5zaXRpb24gfHwgIWNsb3NlQWZ0ZXJUcmFuc2l0aW9uKSB7XG4gICAgICBoYW5kbGVDbG9zZSgpO1xuICAgIH1cbiAgfSwgW29wZW4sIGhhbmRsZUNsb3NlLCBoYXNUcmFuc2l0aW9uLCBjbG9zZUFmdGVyVHJhbnNpdGlvbiwgaGFuZGxlT3Blbl0pO1xuXG4gIGlmICgha2VlcE1vdW50ZWQgJiYgIW9wZW4gJiYgKCFoYXNUcmFuc2l0aW9uIHx8IGV4aXRlZCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBoYW5kbGVFbnRlciA9IGZ1bmN0aW9uIGhhbmRsZUVudGVyKCkge1xuICAgIHNldEV4aXRlZChmYWxzZSk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUV4aXRlZCA9IGZ1bmN0aW9uIGhhbmRsZUV4aXRlZCgpIHtcbiAgICBzZXRFeGl0ZWQodHJ1ZSk7XG5cbiAgICBpZiAoY2xvc2VBZnRlclRyYW5zaXRpb24pIHtcbiAgICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVCYWNrZHJvcENsaWNrID0gZnVuY3Rpb24gaGFuZGxlQmFja2Ryb3BDbGljayhldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob25CYWNrZHJvcENsaWNrKSB7XG4gICAgICBvbkJhY2tkcm9wQ2xpY2soZXZlbnQpO1xuICAgIH1cblxuICAgIGlmICghZGlzYWJsZUJhY2tkcm9wQ2xpY2sgJiYgb25DbG9zZSkge1xuICAgICAgb25DbG9zZShldmVudCwgJ2JhY2tkcm9wQ2xpY2snKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZUtleURvd24gPSBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgLy8gVGhlIGhhbmRsZXIgZG9lc24ndCB0YWtlIGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgaW50byBhY2NvdW50OlxuICAgIC8vXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKSBpcyBtZWFudCB0byBzdG9wIGRlZmF1bHQgYmVoYXZpb3VycyBsaWtlXG4gICAgLy8gY2xpY2tpbmcgYSBjaGVja2JveCB0byBjaGVjayBpdCwgaGl0dGluZyBhIGJ1dHRvbiB0byBzdWJtaXQgYSBmb3JtLFxuICAgIC8vIGFuZCBoaXR0aW5nIGxlZnQgYXJyb3cgdG8gbW92ZSB0aGUgY3Vyc29yIGluIGEgdGV4dCBpbnB1dCBldGMuXG4gICAgLy8gT25seSBzcGVjaWFsIEhUTUwgZWxlbWVudHMgaGF2ZSB0aGVzZSBkZWZhdWx0IGJlaGF2aW9ycy5cbiAgICBpZiAoZXZlbnQua2V5ICE9PSAnRXNjYXBlJyB8fCAhaXNUb3BNb2RhbCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9uRXNjYXBlS2V5RG93bikge1xuICAgICAgb25Fc2NhcGVLZXlEb3duKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoIWRpc2FibGVFc2NhcGVLZXlEb3duKSB7XG4gICAgICAvLyBTd2FsbG93IHRoZSBldmVudCwgaW4gY2FzZSBzb21lb25lIGlzIGxpc3RlbmluZyBmb3IgdGhlIGVzY2FwZSBrZXkgb24gdGhlIGJvZHkuXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgaWYgKG9uQ2xvc2UpIHtcbiAgICAgICAgb25DbG9zZShldmVudCwgJ2VzY2FwZUtleURvd24nKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIGlubGluZVN0eWxlID0gc3R5bGVzKHRoZW1lIHx8IHtcbiAgICB6SW5kZXg6IHpJbmRleFxuICB9KTtcbiAgdmFyIGNoaWxkUHJvcHMgPSB7fTtcblxuICBpZiAoY2hpbGRyZW4ucHJvcHMudGFiSW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgIGNoaWxkUHJvcHMudGFiSW5kZXggPSBjaGlsZHJlbi5wcm9wcy50YWJJbmRleCB8fCAnLTEnO1xuICB9IC8vIEl0J3MgYSBUcmFuc2l0aW9uIGxpa2UgY29tcG9uZW50XG5cblxuICBpZiAoaGFzVHJhbnNpdGlvbikge1xuICAgIGNoaWxkUHJvcHMub25FbnRlciA9IGNyZWF0ZUNoYWluZWRGdW5jdGlvbihoYW5kbGVFbnRlciwgY2hpbGRyZW4ucHJvcHMub25FbnRlcik7XG4gICAgY2hpbGRQcm9wcy5vbkV4aXRlZCA9IGNyZWF0ZUNoYWluZWRGdW5jdGlvbihoYW5kbGVFeGl0ZWQsIGNoaWxkcmVuLnByb3BzLm9uRXhpdGVkKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQb3J0YWwsIHtcbiAgICByZWY6IGhhbmRsZVBvcnRhbFJlZixcbiAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICBkaXNhYmxlUG9ydGFsOiBkaXNhYmxlUG9ydGFsXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICByZWY6IGhhbmRsZVJlZixcbiAgICBvbktleURvd246IGhhbmRsZUtleURvd24sXG4gICAgcm9sZTogXCJwcmVzZW50YXRpb25cIlxuICB9LCBvdGhlciwge1xuICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgaW5saW5lU3R5bGUucm9vdCwgIW9wZW4gJiYgZXhpdGVkID8gaW5saW5lU3R5bGUuaGlkZGVuIDoge30sIG90aGVyLnN0eWxlKVxuICB9KSwgaGlkZUJhY2tkcm9wID8gbnVsbCA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJhY2tkcm9wQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgb3Blbjogb3BlbixcbiAgICBvbkNsaWNrOiBoYW5kbGVCYWNrZHJvcENsaWNrXG4gIH0sIEJhY2tkcm9wUHJvcHMpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhcEZvY3VzLCB7XG4gICAgZGlzYWJsZUVuZm9yY2VGb2N1czogZGlzYWJsZUVuZm9yY2VGb2N1cyxcbiAgICBkaXNhYmxlQXV0b0ZvY3VzOiBkaXNhYmxlQXV0b0ZvY3VzLFxuICAgIGRpc2FibGVSZXN0b3JlRm9jdXM6IGRpc2FibGVSZXN0b3JlRm9jdXMsXG4gICAgZ2V0RG9jOiBnZXREb2MsXG4gICAgaXNFbmFibGVkOiBpc1RvcE1vZGFsLFxuICAgIG9wZW46IG9wZW5cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwgY2hpbGRQcm9wcykpKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IE1vZGFsLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEEgYmFja2Ryb3AgY29tcG9uZW50LiBUaGlzIHByb3AgZW5hYmxlcyBjdXN0b20gYmFja2Ryb3AgcmVuZGVyaW5nLlxuICAgKi9cbiAgQmFja2Ryb3BDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgW2BCYWNrZHJvcGBdKC9hcGkvYmFja2Ryb3AvKSBlbGVtZW50LlxuICAgKi9cbiAgQmFja2Ryb3BQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQSBzaW5nbGUgY2hpbGQgY29udGVudCBlbGVtZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IGVsZW1lbnRBY2NlcHRpbmdSZWYuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogV2hlbiBzZXQgdG8gdHJ1ZSB0aGUgTW9kYWwgd2FpdHMgdW50aWwgYSBuZXN0ZWQgVHJhbnNpdGlvbiBpcyBjb21wbGV0ZWQgYmVmb3JlIGNsb3NpbmcuXG4gICAqL1xuICBjbG9zZUFmdGVyVHJhbnNpdGlvbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEEgSFRNTCBlbGVtZW50LCBjb21wb25lbnQgaW5zdGFuY2UsIG9yIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBlaXRoZXIuXG4gICAqIFRoZSBgY29udGFpbmVyYCB3aWxsIGhhdmUgdGhlIHBvcnRhbCBjaGlsZHJlbiBhcHBlbmRlZCB0byBpdC5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgaXQgdXNlcyB0aGUgYm9keSBvZiB0aGUgdG9wLWxldmVsIGRvY3VtZW50IG9iamVjdCxcbiAgICogc28gaXQncyBzaW1wbHkgYGRvY3VtZW50LmJvZHlgIG1vc3Qgb2YgdGhlIHRpbWUuXG4gICAqL1xuICBjb250YWluZXI6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5vbmVPZlR5cGUoW0hUTUxFbGVtZW50VHlwZSwgUHJvcFR5cGVzLmluc3RhbmNlT2YoUmVhY3QuQ29tcG9uZW50KSwgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbW9kYWwgd2lsbCBub3QgYXV0b21hdGljYWxseSBzaGlmdCBmb2N1cyB0byBpdHNlbGYgd2hlbiBpdCBvcGVucywgYW5kXG4gICAqIHJlcGxhY2UgaXQgdG8gdGhlIGxhc3QgZm9jdXNlZCBlbGVtZW50IHdoZW4gaXQgY2xvc2VzLlxuICAgKiBUaGlzIGFsc28gd29ya3MgY29ycmVjdGx5IHdpdGggYW55IG1vZGFsIGNoaWxkcmVuIHRoYXQgaGF2ZSB0aGUgYGRpc2FibGVBdXRvRm9jdXNgIHByb3AuXG4gICAqXG4gICAqIEdlbmVyYWxseSB0aGlzIHNob3VsZCBuZXZlciBiZSBzZXQgdG8gYHRydWVgIGFzIGl0IG1ha2VzIHRoZSBtb2RhbCBsZXNzXG4gICAqIGFjY2Vzc2libGUgdG8gYXNzaXN0aXZlIHRlY2hub2xvZ2llcywgbGlrZSBzY3JlZW4gcmVhZGVycy5cbiAgICovXG4gIGRpc2FibGVBdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGNsaWNraW5nIHRoZSBiYWNrZHJvcCB3aWxsIG5vdCBmaXJlIGBvbkNsb3NlYC5cbiAgICovXG4gIGRpc2FibGVCYWNrZHJvcENsaWNrOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbW9kYWwgd2lsbCBub3QgcHJldmVudCBmb2N1cyBmcm9tIGxlYXZpbmcgdGhlIG1vZGFsIHdoaWxlIG9wZW4uXG4gICAqXG4gICAqIEdlbmVyYWxseSB0aGlzIHNob3VsZCBuZXZlciBiZSBzZXQgdG8gYHRydWVgIGFzIGl0IG1ha2VzIHRoZSBtb2RhbCBsZXNzXG4gICAqIGFjY2Vzc2libGUgdG8gYXNzaXN0aXZlIHRlY2hub2xvZ2llcywgbGlrZSBzY3JlZW4gcmVhZGVycy5cbiAgICovXG4gIGRpc2FibGVFbmZvcmNlRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGhpdHRpbmcgZXNjYXBlIHdpbGwgbm90IGZpcmUgYG9uQ2xvc2VgLlxuICAgKi9cbiAgZGlzYWJsZUVzY2FwZUtleURvd246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRoZSBwb3J0YWwgYmVoYXZpb3IuXG4gICAqIFRoZSBjaGlsZHJlbiBzdGF5IHdpdGhpbiBpdCdzIHBhcmVudCBET00gaGllcmFyY2h5LlxuICAgKi9cbiAgZGlzYWJsZVBvcnRhbDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIG1vZGFsIHdpbGwgbm90IHJlc3RvcmUgZm9jdXMgdG8gcHJldmlvdXNseSBmb2N1c2VkIGVsZW1lbnQgb25jZVxuICAgKiBtb2RhbCBpcyBoaWRkZW4uXG4gICAqL1xuICBkaXNhYmxlUmVzdG9yZUZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUgc2Nyb2xsIGxvY2sgYmVoYXZpb3IuXG4gICAqL1xuICBkaXNhYmxlU2Nyb2xsTG9jazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGJhY2tkcm9wIGlzIG5vdCByZW5kZXJlZC5cbiAgICovXG4gIGhpZGVCYWNrZHJvcDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEFsd2F5cyBrZWVwIHRoZSBjaGlsZHJlbiBpbiB0aGUgRE9NLlxuICAgKiBUaGlzIHByb3AgY2FuIGJlIHVzZWZ1bCBpbiBTRU8gc2l0dWF0aW9uIG9yXG4gICAqIHdoZW4geW91IHdhbnQgdG8gbWF4aW1pemUgdGhlIHJlc3BvbnNpdmVuZXNzIG9mIHRoZSBNb2RhbC5cbiAgICovXG4gIGtlZXBNb3VudGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgbWFuYWdlcjogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgYmFja2Ryb3AgaXMgY2xpY2tlZC5cbiAgICovXG4gIG9uQmFja2Ryb3BDbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCByZXF1ZXN0cyB0byBiZSBjbG9zZWQuXG4gICAqIFRoZSBgcmVhc29uYCBwYXJhbWV0ZXIgY2FuIG9wdGlvbmFsbHkgYmUgdXNlZCB0byBjb250cm9sIHRoZSByZXNwb25zZSB0byBgb25DbG9zZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiBDYW4gYmU6IGBcImVzY2FwZUtleURvd25cImAsIGBcImJhY2tkcm9wQ2xpY2tcImAuXG4gICAqL1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgZXNjYXBlIGtleSBpcyBwcmVzc2VkLFxuICAgKiBgZGlzYWJsZUVzY2FwZUtleURvd25gIGlzIGZhbHNlIGFuZCB0aGUgbW9kYWwgaXMgaW4gZm9jdXMuXG4gICAqL1xuICBvbkVzY2FwZUtleURvd246IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBvbmNlIHRoZSBjaGlsZHJlbiBoYXMgYmVlbiBtb3VudGVkIGludG8gdGhlIGBjb250YWluZXJgLlxuICAgKiBJdCBzaWduYWxzIHRoYXQgdGhlIGBvcGVuPXt0cnVlfWAgcHJvcCB0b29rIGVmZmVjdC5cbiAgICpcbiAgICogVGhpcyBwcm9wIHdpbGwgYmUgZGVwcmVjYXRlZCBhbmQgcmVtb3ZlZCBpbiB2NSwgdGhlIHJlZiBjYW4gYmUgdXNlZCBpbnN0ZWFkLlxuICAgKi9cbiAgb25SZW5kZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIG1vZGFsIGlzIG9wZW4uXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgTW9kYWw7IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheVwiO1xuaW1wb3J0IGdldFNjcm9sbGJhclNpemUgZnJvbSAnLi4vdXRpbHMvZ2V0U2Nyb2xsYmFyU2l6ZSc7XG5pbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICcuLi91dGlscy9vd25lckRvY3VtZW50JztcbmltcG9ydCBvd25lcldpbmRvdyBmcm9tICcuLi91dGlscy9vd25lcldpbmRvdyc7IC8vIElzIGEgdmVydGljYWwgc2Nyb2xsYmFyIGRpc3BsYXllZD9cblxuZnVuY3Rpb24gaXNPdmVyZmxvd2luZyhjb250YWluZXIpIHtcbiAgdmFyIGRvYyA9IG93bmVyRG9jdW1lbnQoY29udGFpbmVyKTtcblxuICBpZiAoZG9jLmJvZHkgPT09IGNvbnRhaW5lcikge1xuICAgIHJldHVybiBvd25lcldpbmRvdyhkb2MpLmlubmVyV2lkdGggPiBkb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lci5zY3JvbGxIZWlnaHQgPiBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJpYUhpZGRlbihub2RlLCBzaG93KSB7XG4gIGlmIChzaG93KSB7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgfSBlbHNlIHtcbiAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQYWRkaW5nUmlnaHQobm9kZSkge1xuICByZXR1cm4gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSlbJ3BhZGRpbmctcmlnaHQnXSwgMTApIHx8IDA7XG59XG5cbmZ1bmN0aW9uIGFyaWFIaWRkZW5TaWJsaW5ncyhjb250YWluZXIsIG1vdW50Tm9kZSwgY3VycmVudE5vZGUpIHtcbiAgdmFyIG5vZGVzVG9FeGNsdWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBbXTtcbiAgdmFyIHNob3cgPSBhcmd1bWVudHMubGVuZ3RoID4gNCA/IGFyZ3VtZW50c1s0XSA6IHVuZGVmaW5lZDtcbiAgdmFyIGJsYWNrbGlzdCA9IFttb3VudE5vZGUsIGN1cnJlbnROb2RlXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KG5vZGVzVG9FeGNsdWRlKSk7XG4gIHZhciBibGFja2xpc3RUYWdOYW1lcyA9IFsnVEVNUExBVEUnLCAnU0NSSVBUJywgJ1NUWUxFJ107XG4gIFtdLmZvckVhY2guY2FsbChjb250YWluZXIuY2hpbGRyZW4sIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgJiYgYmxhY2tsaXN0LmluZGV4T2Yobm9kZSkgPT09IC0xICYmIGJsYWNrbGlzdFRhZ05hbWVzLmluZGV4T2Yobm9kZS50YWdOYW1lKSA9PT0gLTEpIHtcbiAgICAgIGFyaWFIaWRkZW4obm9kZSwgc2hvdyk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4T2YoY29udGFpbmVySW5mbywgY2FsbGJhY2spIHtcbiAgdmFyIGlkeCA9IC0xO1xuICBjb250YWluZXJJbmZvLnNvbWUoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgaWYgKGNhbGxiYWNrKGl0ZW0pKSB7XG4gICAgICBpZHggPSBpbmRleDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG4gIHJldHVybiBpZHg7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNvbnRhaW5lcihjb250YWluZXJJbmZvLCBwcm9wcykge1xuICB2YXIgcmVzdG9yZVN0eWxlID0gW107XG4gIHZhciByZXN0b3JlUGFkZGluZ3MgPSBbXTtcbiAgdmFyIGNvbnRhaW5lciA9IGNvbnRhaW5lckluZm8uY29udGFpbmVyO1xuICB2YXIgZml4ZWROb2RlcztcblxuICBpZiAoIXByb3BzLmRpc2FibGVTY3JvbGxMb2NrKSB7XG4gICAgaWYgKGlzT3ZlcmZsb3dpbmcoY29udGFpbmVyKSkge1xuICAgICAgLy8gQ29tcHV0ZSB0aGUgc2l6ZSBiZWZvcmUgYXBwbHlpbmcgb3ZlcmZsb3cgaGlkZGVuIHRvIGF2b2lkIGFueSBzY3JvbGwganVtcHMuXG4gICAgICB2YXIgc2Nyb2xsYmFyU2l6ZSA9IGdldFNjcm9sbGJhclNpemUoKTtcbiAgICAgIHJlc3RvcmVTdHlsZS5wdXNoKHtcbiAgICAgICAgdmFsdWU6IGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nUmlnaHQsXG4gICAgICAgIGtleTogJ3BhZGRpbmctcmlnaHQnLFxuICAgICAgICBlbDogY29udGFpbmVyXG4gICAgICB9KTsgLy8gVXNlIGNvbXB1dGVkIHN0eWxlLCBoZXJlIHRvIGdldCB0aGUgcmVhbCBwYWRkaW5nIHRvIGFkZCBvdXIgc2Nyb2xsYmFyIHdpZHRoLlxuXG4gICAgICBjb250YWluZXIuc3R5bGVbJ3BhZGRpbmctcmlnaHQnXSA9IFwiXCIuY29uY2F0KGdldFBhZGRpbmdSaWdodChjb250YWluZXIpICsgc2Nyb2xsYmFyU2l6ZSwgXCJweFwiKTsgLy8gLm11aS1maXhlZCBpcyBhIGdsb2JhbCBoZWxwZXIuXG5cbiAgICAgIGZpeGVkTm9kZXMgPSBvd25lckRvY3VtZW50KGNvbnRhaW5lcikucXVlcnlTZWxlY3RvckFsbCgnLm11aS1maXhlZCcpO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKGZpeGVkTm9kZXMsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJlc3RvcmVQYWRkaW5ncy5wdXNoKG5vZGUuc3R5bGUucGFkZGluZ1JpZ2h0KTtcbiAgICAgICAgbm9kZS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIlwiLmNvbmNhdChnZXRQYWRkaW5nUmlnaHQobm9kZSkgKyBzY3JvbGxiYXJTaXplLCBcInB4XCIpO1xuICAgICAgfSk7XG4gICAgfSAvLyBJbXByb3ZlIEdhdHNieSBzdXBwb3J0XG4gICAgLy8gaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvZm9yY2UtdmVydGljYWwtc2Nyb2xsYmFyL1xuXG5cbiAgICB2YXIgcGFyZW50ID0gY29udGFpbmVyLnBhcmVudEVsZW1lbnQ7XG4gICAgdmFyIHNjcm9sbENvbnRhaW5lciA9IHBhcmVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudClbJ292ZXJmbG93LXknXSA9PT0gJ3Njcm9sbCcgPyBwYXJlbnQgOiBjb250YWluZXI7IC8vIEJsb2NrIHRoZSBzY3JvbGwgZXZlbiBpZiBubyBzY3JvbGxiYXIgaXMgdmlzaWJsZSB0byBhY2NvdW50IGZvciBtb2JpbGUga2V5Ym9hcmRcbiAgICAvLyBzY3JlZW5zaXplIHNocmluay5cblxuICAgIHJlc3RvcmVTdHlsZS5wdXNoKHtcbiAgICAgIHZhbHVlOiBzY3JvbGxDb250YWluZXIuc3R5bGUub3ZlcmZsb3csXG4gICAgICBrZXk6ICdvdmVyZmxvdycsXG4gICAgICBlbDogc2Nyb2xsQ29udGFpbmVyXG4gICAgfSk7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gIH1cblxuICB2YXIgcmVzdG9yZSA9IGZ1bmN0aW9uIHJlc3RvcmUoKSB7XG4gICAgaWYgKGZpeGVkTm9kZXMpIHtcbiAgICAgIFtdLmZvckVhY2guY2FsbChmaXhlZE5vZGVzLCBmdW5jdGlvbiAobm9kZSwgaSkge1xuICAgICAgICBpZiAocmVzdG9yZVBhZGRpbmdzW2ldKSB7XG4gICAgICAgICAgbm9kZS5zdHlsZS5wYWRkaW5nUmlnaHQgPSByZXN0b3JlUGFkZGluZ3NbaV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1yaWdodCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXN0b3JlU3R5bGUuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgICAgICBlbCA9IF9yZWYuZWwsXG4gICAgICAgICAga2V5ID0gX3JlZi5rZXk7XG5cbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHJlc3RvcmU7XG59XG5cbmZ1bmN0aW9uIGdldEhpZGRlblNpYmxpbmdzKGNvbnRhaW5lcikge1xuICB2YXIgaGlkZGVuU2libGluZ3MgPSBbXTtcbiAgW10uZm9yRWFjaC5jYWxsKGNvbnRhaW5lci5jaGlsZHJlbiwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUgJiYgbm9kZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykgPT09ICd0cnVlJykge1xuICAgICAgaGlkZGVuU2libGluZ3MucHVzaChub2RlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gaGlkZGVuU2libGluZ3M7XG59XG4vKipcbiAqIEBpZ25vcmUgLSBkbyBub3QgZG9jdW1lbnQuXG4gKlxuICogUHJvcGVyIHN0YXRlIG1hbmFnZW1lbnQgZm9yIGNvbnRhaW5lcnMgYW5kIHRoZSBtb2RhbHMgaW4gdGhvc2UgY29udGFpbmVycy5cbiAqIFNpbXBsaWZpZWQsIGJ1dCBpbnNwaXJlZCBieSByZWFjdC1vdmVybGF5J3MgTW9kYWxNYW5hZ2VyIGNsYXNzLlxuICogVXNlZCBieSB0aGUgTW9kYWwgdG8gZW5zdXJlIHByb3BlciBzdHlsaW5nIG9mIGNvbnRhaW5lcnMuXG4gKi9cblxuXG52YXIgTW9kYWxNYW5hZ2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTW9kYWxNYW5hZ2VyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb2RhbE1hbmFnZXIpO1xuXG4gICAgLy8gdGhpcy5tb2RhbHNbbW9kYWxJbmRleF0gPSBtb2RhbFxuICAgIHRoaXMubW9kYWxzID0gW107IC8vIHRoaXMuY29udGFpbmVyc1tjb250YWluZXJJbmRleF0gPSB7XG4gICAgLy8gICBtb2RhbHM6IFtdLFxuICAgIC8vICAgY29udGFpbmVyLFxuICAgIC8vICAgcmVzdG9yZTogbnVsbCxcbiAgICAvLyB9XG5cbiAgICB0aGlzLmNvbnRhaW5lcnMgPSBbXTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNb2RhbE1hbmFnZXIsIFt7XG4gICAga2V5OiBcImFkZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQobW9kYWwsIGNvbnRhaW5lcikge1xuICAgICAgdmFyIG1vZGFsSW5kZXggPSB0aGlzLm1vZGFscy5pbmRleE9mKG1vZGFsKTtcblxuICAgICAgaWYgKG1vZGFsSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBtb2RhbEluZGV4O1xuICAgICAgfVxuXG4gICAgICBtb2RhbEluZGV4ID0gdGhpcy5tb2RhbHMubGVuZ3RoO1xuICAgICAgdGhpcy5tb2RhbHMucHVzaChtb2RhbCk7IC8vIElmIHRoZSBtb2RhbCB3ZSBhcmUgYWRkaW5nIGlzIGFscmVhZHkgaW4gdGhlIERPTS5cblxuICAgICAgaWYgKG1vZGFsLm1vZGFsUmVmKSB7XG4gICAgICAgIGFyaWFIaWRkZW4obW9kYWwubW9kYWxSZWYsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGhpZGRlblNpYmxpbmdOb2RlcyA9IGdldEhpZGRlblNpYmxpbmdzKGNvbnRhaW5lcik7XG4gICAgICBhcmlhSGlkZGVuU2libGluZ3MoY29udGFpbmVyLCBtb2RhbC5tb3VudE5vZGUsIG1vZGFsLm1vZGFsUmVmLCBoaWRkZW5TaWJsaW5nTm9kZXMsIHRydWUpO1xuICAgICAgdmFyIGNvbnRhaW5lckluZGV4ID0gZmluZEluZGV4T2YodGhpcy5jb250YWluZXJzLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5jb250YWluZXIgPT09IGNvbnRhaW5lcjtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY29udGFpbmVySW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyc1tjb250YWluZXJJbmRleF0ubW9kYWxzLnB1c2gobW9kYWwpO1xuICAgICAgICByZXR1cm4gbW9kYWxJbmRleDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250YWluZXJzLnB1c2goe1xuICAgICAgICBtb2RhbHM6IFttb2RhbF0sXG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgICByZXN0b3JlOiBudWxsLFxuICAgICAgICBoaWRkZW5TaWJsaW5nTm9kZXM6IGhpZGRlblNpYmxpbmdOb2Rlc1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbW9kYWxJbmRleDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbW91bnQobW9kYWwsIHByb3BzKSB7XG4gICAgICB2YXIgY29udGFpbmVySW5kZXggPSBmaW5kSW5kZXhPZih0aGlzLmNvbnRhaW5lcnMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLm1vZGFscy5pbmRleE9mKG1vZGFsKSAhPT0gLTE7XG4gICAgICB9KTtcbiAgICAgIHZhciBjb250YWluZXJJbmZvID0gdGhpcy5jb250YWluZXJzW2NvbnRhaW5lckluZGV4XTtcblxuICAgICAgaWYgKCFjb250YWluZXJJbmZvLnJlc3RvcmUpIHtcbiAgICAgICAgY29udGFpbmVySW5mby5yZXN0b3JlID0gaGFuZGxlQ29udGFpbmVyKGNvbnRhaW5lckluZm8sIHByb3BzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShtb2RhbCkge1xuICAgICAgdmFyIG1vZGFsSW5kZXggPSB0aGlzLm1vZGFscy5pbmRleE9mKG1vZGFsKTtcblxuICAgICAgaWYgKG1vZGFsSW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBtb2RhbEluZGV4O1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGFpbmVySW5kZXggPSBmaW5kSW5kZXhPZih0aGlzLmNvbnRhaW5lcnMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLm1vZGFscy5pbmRleE9mKG1vZGFsKSAhPT0gLTE7XG4gICAgICB9KTtcbiAgICAgIHZhciBjb250YWluZXJJbmZvID0gdGhpcy5jb250YWluZXJzW2NvbnRhaW5lckluZGV4XTtcbiAgICAgIGNvbnRhaW5lckluZm8ubW9kYWxzLnNwbGljZShjb250YWluZXJJbmZvLm1vZGFscy5pbmRleE9mKG1vZGFsKSwgMSk7XG4gICAgICB0aGlzLm1vZGFscy5zcGxpY2UobW9kYWxJbmRleCwgMSk7IC8vIElmIHRoYXQgd2FzIHRoZSBsYXN0IG1vZGFsIGluIGEgY29udGFpbmVyLCBjbGVhbiB1cCB0aGUgY29udGFpbmVyLlxuXG4gICAgICBpZiAoY29udGFpbmVySW5mby5tb2RhbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIFRoZSBtb2RhbCBtaWdodCBiZSBjbG9zZWQgYmVmb3JlIGl0IGhhZCB0aGUgY2hhbmNlIHRvIGJlIG1vdW50ZWQgaW4gdGhlIERPTS5cbiAgICAgICAgaWYgKGNvbnRhaW5lckluZm8ucmVzdG9yZSkge1xuICAgICAgICAgIGNvbnRhaW5lckluZm8ucmVzdG9yZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vZGFsLm1vZGFsUmVmKSB7XG4gICAgICAgICAgLy8gSW4gY2FzZSB0aGUgbW9kYWwgd2Fzbid0IGluIHRoZSBET00geWV0LlxuICAgICAgICAgIGFyaWFIaWRkZW4obW9kYWwubW9kYWxSZWYsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJpYUhpZGRlblNpYmxpbmdzKGNvbnRhaW5lckluZm8uY29udGFpbmVyLCBtb2RhbC5tb3VudE5vZGUsIG1vZGFsLm1vZGFsUmVmLCBjb250YWluZXJJbmZvLmhpZGRlblNpYmxpbmdOb2RlcywgZmFsc2UpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lcnMuc3BsaWNlKGNvbnRhaW5lckluZGV4LCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE90aGVyd2lzZSBtYWtlIHN1cmUgdGhlIG5leHQgdG9wIG1vZGFsIGlzIHZpc2libGUgdG8gYSBzY3JlZW4gcmVhZGVyLlxuICAgICAgICB2YXIgbmV4dFRvcCA9IGNvbnRhaW5lckluZm8ubW9kYWxzW2NvbnRhaW5lckluZm8ubW9kYWxzLmxlbmd0aCAtIDFdOyAvLyBhcyBzb29uIGFzIGEgbW9kYWwgaXMgYWRkaW5nIGl0cyBtb2RhbFJlZiBpcyB1bmRlZmluZWQuIGl0IGNhbid0IHNldFxuICAgICAgICAvLyBhcmlhLWhpZGRlbiBiZWNhdXNlIHRoZSBkb20gZWxlbWVudCBkb2Vzbid0IGV4aXN0IGVpdGhlclxuICAgICAgICAvLyB3aGVuIG1vZGFsIHdhcyB1bm1vdW50ZWQgYmVmb3JlIG1vZGFsUmVmIGdldHMgbnVsbFxuXG4gICAgICAgIGlmIChuZXh0VG9wLm1vZGFsUmVmKSB7XG4gICAgICAgICAgYXJpYUhpZGRlbihuZXh0VG9wLm1vZGFsUmVmLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1vZGFsSW5kZXg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzVG9wTW9kYWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNUb3BNb2RhbChtb2RhbCkge1xuICAgICAgcmV0dXJuIHRoaXMubW9kYWxzLmxlbmd0aCA+IDAgJiYgdGhpcy5tb2RhbHNbdGhpcy5tb2RhbHMubGVuZ3RoIC0gMV0gPT09IG1vZGFsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNb2RhbE1hbmFnZXI7XG59KCk7XG5cbmV4cG9ydCB7IE1vZGFsTWFuYWdlciBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7XG4gICAgekluZGV4OiAtMSxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjUpJyxcbiAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGludmlzaWJsZT17dHJ1ZX1gLiAqL1xuICBpbnZpc2libGU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgfVxufTtcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG52YXIgU2ltcGxlQmFja2Ryb3AgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBTaW1wbGVCYWNrZHJvcChwcm9wcywgcmVmKSB7XG4gIHZhciBfcHJvcHMkaW52aXNpYmxlID0gcHJvcHMuaW52aXNpYmxlLFxuICAgICAgaW52aXNpYmxlID0gX3Byb3BzJGludmlzaWJsZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkaW52aXNpYmxlLFxuICAgICAgb3BlbiA9IHByb3BzLm9wZW4sXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiaW52aXNpYmxlXCIsIFwib3BlblwiXSk7XG5cbiAgcmV0dXJuIG9wZW4gPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyLCB7XG4gICAgc3R5bGU6IF9leHRlbmRzKHt9LCBzdHlsZXMucm9vdCwgaW52aXNpYmxlID8gc3R5bGVzLmludmlzaWJsZSA6IHt9LCBvdGhlci5zdHlsZSlcbiAgfSkpIDogbnVsbDtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gU2ltcGxlQmFja2Ryb3AucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYmFja2Ryb3AgaXMgaW52aXNpYmxlLlxuICAgKiBJdCBjYW4gYmUgdXNlZCB3aGVuIHJlbmRlcmluZyBhIHBvcG92ZXIgb3IgYSBjdXN0b20gc2VsZWN0IGNvbXBvbmVudC5cbiAgICovXG4gIGludmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGJhY2tkcm9wIGlzIG9wZW4uXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgU2ltcGxlQmFja2Ryb3A7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vTW9kYWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RhbE1hbmFnZXIgfSBmcm9tICcuL01vZGFsTWFuYWdlcic7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBOYXRpdmVTZWxlY3RJbnB1dCBmcm9tICcuL05hdGl2ZVNlbGVjdElucHV0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBmb3JtQ29udHJvbFN0YXRlIGZyb20gJy4uL0Zvcm1Db250cm9sL2Zvcm1Db250cm9sU3RhdGUnO1xuaW1wb3J0IHVzZUZvcm1Db250cm9sIGZyb20gJy4uL0Zvcm1Db250cm9sL3VzZUZvcm1Db250cm9sJztcbmltcG9ydCBBcnJvd0Ryb3BEb3duSWNvbiBmcm9tICcuLi9pbnRlcm5hbC9zdmctaWNvbnMvQXJyb3dEcm9wRG93bic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vSW5wdXQnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgc2VsZWN0IGNvbXBvbmVudCBgcm9vdGAgY2xhc3MuICovXG4gICAgcm9vdDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgc2VsZWN0IGNvbXBvbmVudCBgc2VsZWN0YCBjbGFzcy4gKi9cbiAgICBzZWxlY3Q6IHtcbiAgICAgICctbW96LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgICAvLyBSZXNldFxuICAgICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICAgIC8vIFJlc2V0XG4gICAgICAvLyBXaGVuIGludGVyYWN0aW5nIHF1aWNrbHksIHRoZSB0ZXh0IGNhbiBlbmQgdXAgc2VsZWN0ZWQuXG4gICAgICAvLyBOYXRpdmUgc2VsZWN0IGNhbid0IGJlIHNlbGVjdGVkIGVpdGhlci5cbiAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIGJvcmRlclJhZGl1czogMCxcbiAgICAgIC8vIFJlc2V0XG4gICAgICBtaW5XaWR0aDogMTYsXG4gICAgICAvLyBTbyBpdCBkb2Vzbid0IGNvbGxhcHNlLlxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgLy8gU2hvdyB0aGF0IGl0J3Mgbm90IGFuIHRleHQgaW5wdXRcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyAncmdiYSgwLCAwLCAwLCAwLjA1KScgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KScsXG4gICAgICAgIGJvcmRlclJhZGl1czogMCAvLyBSZXNldCBDaHJvbWUgc3R5bGVcblxuICAgICAgfSxcbiAgICAgIC8vIFJlbW92ZSBJRSAxMSBhcnJvd1xuICAgICAgJyY6Oi1tcy1leHBhbmQnOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBjdXJzb3I6ICdkZWZhdWx0J1xuICAgICAgfSxcbiAgICAgICcmW211bHRpcGxlXSc6IHtcbiAgICAgICAgaGVpZ2h0OiAnYXV0bydcbiAgICAgIH0sXG4gICAgICAnJjpub3QoW211bHRpcGxlXSkgb3B0aW9uLCAmOm5vdChbbXVsdGlwbGVdKSBvcHRncm91cCc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXJcbiAgICAgIH0sXG4gICAgICAnJiYnOiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogMjRcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHNlbGVjdCBjb21wb25lbnQgaWYgYHZhcmlhbnQ9XCJmaWxsZWRcImAuICovXG4gICAgZmlsbGVkOiB7XG4gICAgICAnJiYnOiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogMzJcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHNlbGVjdCBjb21wb25lbnQgaWYgYHZhcmlhbnQ9XCJvdXRsaW5lZFwiYC4gKi9cbiAgICBvdXRsaW5lZDoge1xuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXG4gICAgICAnJiYnOiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogMzJcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHNlbGVjdCBjb21wb25lbnQgYHNlbGVjdE1lbnVgIGNsYXNzLiAqL1xuICAgIHNlbGVjdE1lbnU6IHtcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgLy8gUmVzZXRzIGZvciBtdWx0cGlsZSBzZWxlY3Qgd2l0aCBjaGlwc1xuICAgICAgbWluSGVpZ2h0OiAnMS4xODc2ZW0nLFxuICAgICAgLy8gUmVxdWlyZWQgZm9yIHNlbGVjdFxcdGV4dC1maWVsZCBoZWlnaHQgY29uc2lzdGVuY3lcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgfSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSBzZWxlY3QgY29tcG9uZW50IGBkaXNhYmxlZGAgY2xhc3MuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGljb24gY29tcG9uZW50LiAqL1xuICAgIGljb246IHtcbiAgICAgIC8vIFdlIHVzZSBhIHBvc2l0aW9uIGFic29sdXRlIG92ZXIgYSBmbGV4Ym94IGluIG9yZGVyIHRvIGZvcndhcmQgdGhlIHBvaW50ZXIgZXZlbnRzXG4gICAgICAvLyB0byB0aGUgaW5wdXQgYW5kIHRvIHN1cHBvcnQgd3JhcHBpbmcgdGFncy4uXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgdG9wOiAnY2FsYyg1MCUgLSAxMnB4KScsXG4gICAgICAvLyBDZW50ZXIgdmVydGljYWxseVxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgLy8gRG9uJ3QgYmxvY2sgcG9pbnRlciBldmVudHMgb24gdGhlIHNlbGVjdCB1bmRlciB0aGUgaWNvbi5cbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5hY3RpdmUsXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmRpc2FibGVkXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBpY29uIGNvbXBvbmVudCBpZiB0aGUgcG9wdXAgaXMgb3Blbi4gKi9cbiAgICBpY29uT3Blbjoge1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDE4MGRlZyknXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBpY29uIGNvbXBvbmVudCBpZiBgdmFyaWFudD1cImZpbGxlZFwiYC4gKi9cbiAgICBpY29uRmlsbGVkOiB7XG4gICAgICByaWdodDogN1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaWNvbiBjb21wb25lbnQgaWYgYHZhcmlhbnQ9XCJvdXRsaW5lZFwiYC4gKi9cbiAgICBpY29uT3V0bGluZWQ6IHtcbiAgICAgIHJpZ2h0OiA3XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSB1bmRlcmx5aW5nIG5hdGl2ZSBpbnB1dCBjb21wb25lbnQuICovXG4gICAgbmF0aXZlSW5wdXQ6IHtcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfVxuICB9O1xufTtcbnZhciBkZWZhdWx0SW5wdXQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgbnVsbCk7XG4vKipcbiAqIEFuIGFsdGVybmF0aXZlIHRvIGA8U2VsZWN0IG5hdGl2ZSAvPmAgd2l0aCBhIG11Y2ggc21hbGxlciBidW5kbGUgc2l6ZSBmb290cHJpbnQuXG4gKi9cblxudmFyIE5hdGl2ZVNlbGVjdCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIE5hdGl2ZVNlbGVjdChwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBfcHJvcHMkSWNvbkNvbXBvbmVudCA9IHByb3BzLkljb25Db21wb25lbnQsXG4gICAgICBJY29uQ29tcG9uZW50ID0gX3Byb3BzJEljb25Db21wb25lbnQgPT09IHZvaWQgMCA/IEFycm93RHJvcERvd25JY29uIDogX3Byb3BzJEljb25Db21wb25lbnQsXG4gICAgICBfcHJvcHMkaW5wdXQgPSBwcm9wcy5pbnB1dCxcbiAgICAgIGlucHV0ID0gX3Byb3BzJGlucHV0ID09PSB2b2lkIDAgPyBkZWZhdWx0SW5wdXQgOiBfcHJvcHMkaW5wdXQsXG4gICAgICBpbnB1dFByb3BzID0gcHJvcHMuaW5wdXRQcm9wcyxcbiAgICAgIHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcIkljb25Db21wb25lbnRcIiwgXCJpbnB1dFwiLCBcImlucHV0UHJvcHNcIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgbXVpRm9ybUNvbnRyb2wgPSB1c2VGb3JtQ29udHJvbCgpO1xuICB2YXIgZmNzID0gZm9ybUNvbnRyb2xTdGF0ZSh7XG4gICAgcHJvcHM6IHByb3BzLFxuICAgIG11aUZvcm1Db250cm9sOiBtdWlGb3JtQ29udHJvbCxcbiAgICBzdGF0ZXM6IFsndmFyaWFudCddXG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChpbnB1dCwgX2V4dGVuZHMoe1xuICAgIC8vIE1vc3Qgb2YgdGhlIGxvZ2ljIGlzIGltcGxlbWVudGVkIGluIGBOYXRpdmVTZWxlY3RJbnB1dGAuXG4gICAgLy8gVGhlIGBTZWxlY3RgIGNvbXBvbmVudCBpcyBhIHNpbXBsZSBBUEkgd3JhcHBlciB0byBleHBvc2Ugc29tZXRoaW5nIGJldHRlciB0byBwbGF5IHdpdGguXG4gICAgaW5wdXRDb21wb25lbnQ6IE5hdGl2ZVNlbGVjdElucHV0LFxuICAgIGlucHV0UHJvcHM6IF9leHRlbmRzKHtcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICAgIGNsYXNzZXM6IGNsYXNzZXMsXG4gICAgICBJY29uQ29tcG9uZW50OiBJY29uQ29tcG9uZW50LFxuICAgICAgdmFyaWFudDogZmNzLnZhcmlhbnQsXG4gICAgICB0eXBlOiB1bmRlZmluZWRcbiAgICB9LCBpbnB1dFByb3BzLCBpbnB1dCA/IGlucHV0LnByb3BzLmlucHV0UHJvcHMgOiB7fSksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gTmF0aXZlU2VsZWN0LnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBvcHRpb24gZWxlbWVudHMgdG8gcG9wdWxhdGUgdGhlIHNlbGVjdCB3aXRoLlxuICAgKiBDYW4gYmUgc29tZSBgPG9wdGlvbj5gIGVsZW1lbnRzLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIHRoYXQgZGlzcGxheXMgdGhlIGFycm93LlxuICAgKi9cbiAgSWNvbkNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBBbiBgSW5wdXRgIGVsZW1lbnQ7IGRvZXMgbm90IGhhdmUgdG8gYmUgYSBtYXRlcmlhbC11aSBzcGVjaWZpYyBgSW5wdXRgLlxuICAgKi9cbiAgaW5wdXQ6IFByb3BUeXBlcy5lbGVtZW50LFxuXG4gIC8qKlxuICAgKiBBdHRyaWJ1dGVzIGFwcGxpZWQgdG8gdGhlIGBzZWxlY3RgIGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIGEgbWVudSBpdGVtIGlzIHNlbGVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIFlvdSBjYW4gcHVsbCBvdXQgdGhlIG5ldyB2YWx1ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC52YWx1ZWAgKHN0cmluZykuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBpbnB1dCB2YWx1ZS4gVGhlIERPTSBBUEkgY2FzdHMgdGhpcyB0byBhIHN0cmluZy5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydmaWxsZWQnLCAnb3V0bGluZWQnLCAnc3RhbmRhcmQnXSlcbn0gOiB2b2lkIDA7XG5OYXRpdmVTZWxlY3QubXVpTmFtZSA9ICdTZWxlY3QnO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aU5hdGl2ZVNlbGVjdCdcbn0pKE5hdGl2ZVNlbGVjdCk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgcmVmVHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG52YXIgTmF0aXZlU2VsZWN0SW5wdXQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBOYXRpdmVTZWxlY3RJbnB1dChwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBJY29uQ29tcG9uZW50ID0gcHJvcHMuSWNvbkNvbXBvbmVudCxcbiAgICAgIGlucHV0UmVmID0gcHJvcHMuaW5wdXRSZWYsXG4gICAgICBfcHJvcHMkdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICB2YXJpYW50ID0gX3Byb3BzJHZhcmlhbnQgPT09IHZvaWQgMCA/ICdzdGFuZGFyZCcgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlzYWJsZWRcIiwgXCJJY29uQ29tcG9uZW50XCIsIFwiaW5wdXRSZWZcIiwgXCJ2YXJpYW50XCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCAvLyBUT0RPIHY1OiBtZXJnZSByb290IGFuZCBzZWxlY3RcbiAgICBjbGFzc2VzLnNlbGVjdCwgY2xhc3Nlc1t2YXJpYW50XSwgY2xhc3NOYW1lLCBkaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkKSxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgcmVmOiBpbnB1dFJlZiB8fCByZWZcbiAgfSwgb3RoZXIpKSwgcHJvcHMubXVsdGlwbGUgPyBudWxsIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkNvbXBvbmVudCwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmljb24sIGNsYXNzZXNbXCJpY29uXCIuY29uY2F0KGNhcGl0YWxpemUodmFyaWFudCkpXSwgZGlzYWJsZWQgJiYgY2xhc3Nlcy5kaXNhYmxlZClcbiAgfSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBOYXRpdmVTZWxlY3RJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgb3B0aW9uIGVsZW1lbnRzIHRvIHBvcHVsYXRlIHRoZSBzZWxlY3Qgd2l0aC5cbiAgICogQ2FuIGJlIHNvbWUgYDxvcHRpb24+YCBlbGVtZW50cy5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBDU1MgY2xhc3MgbmFtZSBvZiB0aGUgc2VsZWN0IGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHNlbGVjdCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB0aGF0IGRpc3BsYXlzIHRoZSBhcnJvdy5cbiAgICovXG4gIEljb25Db21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBVc2UgdGhhdCBwcm9wIHRvIHBhc3MgYSByZWYgdG8gdGhlIG5hdGl2ZSBzZWxlY3QgZWxlbWVudC5cbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIGlucHV0UmVmOiByZWZUeXBlLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE5hbWUgYXR0cmlidXRlIG9mIHRoZSBgc2VsZWN0YCBvciBoaWRkZW4gYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiBhIG1lbnUgaXRlbSBpcyBzZWxlY3RlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgdmFsdWUgYnkgYWNjZXNzaW5nIGBldmVudC50YXJnZXQudmFsdWVgIChzdHJpbmcpLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgaW5wdXQgdmFsdWUuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnc3RhbmRhcmQnLCAnb3V0bGluZWQnLCAnZmlsbGVkJ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgTmF0aXZlU2VsZWN0SW5wdXQ7IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCB1c2VUaGVtZSBmcm9tICcuLi9zdHlsZXMvdXNlVGhlbWUnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIHRvcDogLTUsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgcGFkZGluZzogJzAgOHB4JyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIGJvcmRlclJhZGl1czogJ2luaGVyaXQnLFxuICAgICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgbGVnZW5kIGVsZW1lbnQgd2hlbiBgbGFiZWxXaWR0aGAgaXMgcHJvdmlkZWQuICovXG4gICAgbGVnZW5kOiB7XG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBsaW5lSGVpZ2h0OiAnMTFweCcsXG4gICAgICAvLyBzeW5jIHdpdGggYGhlaWdodGAgaW4gYGxlZ2VuZGAgc3R5bGVzXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xuICAgICAgICBkdXJhdGlvbjogMTUwLFxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5lYXNlT3V0XG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgbGVnZW5kIGVsZW1lbnQuICovXG4gICAgbGVnZW5kTGFiZWxsZWQ6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgaGVpZ2h0OiAxMSxcbiAgICAgIC8vIHN5bmMgd2l0aCBgbGluZUhlaWdodGAgaW4gYGxlZ2VuZGAgc3R5bGVzXG4gICAgICBmb250U2l6ZTogJzAuNzVlbScsXG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgIG1heFdpZHRoOiAwLjAxLFxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdtYXgtd2lkdGgnLCB7XG4gICAgICAgIGR1cmF0aW9uOiA1MCxcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dFxuICAgICAgfSksXG4gICAgICAnJiA+IHNwYW4nOiB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiA1LFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IDUsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBsZWdlbmQgZWxlbWVudCBpcyBub3RjaGVkLiAqL1xuICAgIGxlZ2VuZE5vdGNoZWQ6IHtcbiAgICAgIG1heFdpZHRoOiAxMDAwLFxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdtYXgtd2lkdGgnLCB7XG4gICAgICAgIGR1cmF0aW9uOiAxMDAsXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXQsXG4gICAgICAgIGRlbGF5OiA1MFxuICAgICAgfSlcbiAgICB9XG4gIH07XG59O1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbnZhciBOb3RjaGVkT3V0bGluZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIE5vdGNoZWRPdXRsaW5lKHByb3BzLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICBsYWJlbFdpZHRoUHJvcCA9IHByb3BzLmxhYmVsV2lkdGgsXG4gICAgICBub3RjaGVkID0gcHJvcHMubm90Y2hlZCxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwibGFiZWxcIiwgXCJsYWJlbFdpZHRoXCIsIFwibm90Y2hlZFwiLCBcInN0eWxlXCJdKTtcblxuICB2YXIgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICB2YXIgYWxpZ24gPSB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcblxuICBpZiAobGFiZWwgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIsIF9leHRlbmRzKHtcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSksXG4gICAgICByZWY6IHJlZixcbiAgICAgIHN0eWxlOiBzdHlsZVxuICAgIH0sIG90aGVyKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIiwge1xuICAgICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMubGVnZW5kTGFiZWxsZWQsIG5vdGNoZWQgJiYgY2xhc3Nlcy5sZWdlbmROb3RjaGVkKVxuICAgIH0sIGxhYmVsID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGxhYmVsKSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICBfX2h0bWw6ICcmIzgyMDM7J1xuICAgICAgfVxuICAgIH0pKSk7XG4gIH1cblxuICB2YXIgbGFiZWxXaWR0aCA9IGxhYmVsV2lkdGhQcm9wID4gMCA/IGxhYmVsV2lkdGhQcm9wICogMC43NSArIDggOiAwLjAxO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiLCBfZXh0ZW5kcyh7XG4gICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgIHN0eWxlOiBfZXh0ZW5kcyhfZGVmaW5lUHJvcGVydHkoe30sIFwicGFkZGluZ1wiLmNvbmNhdChjYXBpdGFsaXplKGFsaWduKSksIDgpLCBzdHlsZSksXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlciksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMubGVnZW5kLFxuICAgIHN0eWxlOiB7XG4gICAgICAvLyBJRSAxMTogZmllbGRzZXQgd2l0aCBsZWdlbmQgZG9lcyBub3QgcmVuZGVyXG4gICAgICAvLyBhIGJvcmRlciByYWRpdXMuIFRoaXMgbWFpbnRhaW5zIGNvbnNpc3RlbmN5XG4gICAgICAvLyBieSBhbHdheXMgaGF2aW5nIGEgbGVnZW5kIHJlbmRlcmVkXG4gICAgICB3aWR0aDogbm90Y2hlZCA/IGxhYmVsV2lkdGggOiAwLjAxXG4gICAgfVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICBfX2h0bWw6ICcmIzgyMDM7J1xuICAgIH1cbiAgfSkpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gTm90Y2hlZE91dGxpbmUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBsYWJlbC5cbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBsYWJlbC5cbiAgICovXG4gIGxhYmVsV2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgb3V0bGluZSBpcyBub3RjaGVkIHRvIGFjY29tbW9kYXRlIHRoZSBsYWJlbC5cbiAgICovXG4gIG5vdGNoZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ1ByaXZhdGVOb3RjaGVkT3V0bGluZSdcbn0pKE5vdGNoZWRPdXRsaW5lKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyByZWZUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBJbnB1dEJhc2UgZnJvbSAnLi4vSW5wdXRCYXNlJztcbmltcG9ydCBOb3RjaGVkT3V0bGluZSBmcm9tICcuL05vdGNoZWRPdXRsaW5lJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHZhciBib3JkZXJDb2xvciA9IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/ICdyZ2JhKDAsIDAsIDAsIDAuMjMpJyA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjMpJztcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXG4gICAgICAnJjpob3ZlciAkbm90Y2hlZE91dGxpbmUnOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeVxuICAgICAgfSxcbiAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XG4gICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XG4gICAgICAgICcmOmhvdmVyICRub3RjaGVkT3V0bGluZSc6IHtcbiAgICAgICAgICBib3JkZXJDb2xvcjogYm9yZGVyQ29sb3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICcmJGZvY3VzZWQgJG5vdGNoZWRPdXRsaW5lJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgICB9LFxuICAgICAgJyYkZXJyb3IgJG5vdGNoZWRPdXRsaW5lJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluXG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQgJG5vdGNoZWRPdXRsaW5lJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uZGlzYWJsZWRcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgY29sb3IgaXMgc2Vjb25kYXJ5LiAqL1xuICAgIGNvbG9yU2Vjb25kYXJ5OiB7XG4gICAgICAnJiRmb2N1c2VkICRub3RjaGVkT3V0bGluZSc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgY29tcG9uZW50IGlzIGZvY3VzZWQuICovXG4gICAgZm9jdXNlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlZD17dHJ1ZX1gLiAqL1xuICAgIGRpc2FibGVkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHN0YXJ0QWRvcm5tZW50YCBpcyBwcm92aWRlZC4gKi9cbiAgICBhZG9ybmVkU3RhcnQ6IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiAxNFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBlbmRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGFkb3JuZWRFbmQ6IHtcbiAgICAgIHBhZGRpbmdSaWdodDogMTRcbiAgICB9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZXJyb3I9e3RydWV9YC4gKi9cbiAgICBlcnJvcjoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgICBtYXJnaW5EZW5zZToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBtdWx0aWxpbmU9e3RydWV9YC4gKi9cbiAgICBtdWx0aWxpbmU6IHtcbiAgICAgIHBhZGRpbmc6ICcxOC41cHggMTRweCcsXG4gICAgICAnJiRtYXJnaW5EZW5zZSc6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogMTAuNSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogMTAuNVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYE5vdGNoZWRPdXRsaW5lYCBlbGVtZW50LiAqL1xuICAgIG5vdGNoZWRPdXRsaW5lOiB7XG4gICAgICBib3JkZXJDb2xvcjogYm9yZGVyQ29sb3JcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC4gKi9cbiAgICBpbnB1dDoge1xuICAgICAgcGFkZGluZzogJzE4LjVweCAxNHB4JyxcbiAgICAgICcmOi13ZWJraXQtYXV0b2ZpbGwnOiB7XG4gICAgICAgIFdlYmtpdEJveFNoYWRvdzogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gbnVsbCA6ICcwIDAgMCAxMDBweCAjMjY2Nzk4IGluc2V0JyxcbiAgICAgICAgV2Via2l0VGV4dEZpbGxDb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gbnVsbCA6ICcjZmZmJyxcbiAgICAgICAgY2FyZXRDb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gbnVsbCA6ICcjZmZmJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnaW5oZXJpdCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgbWFyZ2luPVwiZGVuc2VcImAuICovXG4gICAgaW5wdXRNYXJnaW5EZW5zZToge1xuICAgICAgcGFkZGluZ1RvcDogMTAuNSxcbiAgICAgIHBhZGRpbmdCb3R0b206IDEwLjVcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgbXVsdGlsaW5lPXt0cnVlfWAuICovXG4gICAgaW5wdXRNdWx0aWxpbmU6IHtcbiAgICAgIHBhZGRpbmc6IDBcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgc3RhcnRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGlucHV0QWRvcm5lZFN0YXJ0OiB7XG4gICAgICBwYWRkaW5nTGVmdDogMFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBlbmRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGlucHV0QWRvcm5lZEVuZDoge1xuICAgICAgcGFkZGluZ1JpZ2h0OiAwXG4gICAgfVxuICB9O1xufTtcbnZhciBPdXRsaW5lZElucHV0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gT3V0bGluZWRJbnB1dChwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIF9wcm9wcyRmdWxsV2lkdGggPSBwcm9wcy5mdWxsV2lkdGgsXG4gICAgICBmdWxsV2lkdGggPSBfcHJvcHMkZnVsbFdpZHRoID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRmdWxsV2lkdGgsXG4gICAgICBfcHJvcHMkaW5wdXRDb21wb25lbnQgPSBwcm9wcy5pbnB1dENvbXBvbmVudCxcbiAgICAgIGlucHV0Q29tcG9uZW50ID0gX3Byb3BzJGlucHV0Q29tcG9uZW50ID09PSB2b2lkIDAgPyAnaW5wdXQnIDogX3Byb3BzJGlucHV0Q29tcG9uZW50LFxuICAgICAgbGFiZWwgPSBwcm9wcy5sYWJlbCxcbiAgICAgIF9wcm9wcyRsYWJlbFdpZHRoID0gcHJvcHMubGFiZWxXaWR0aCxcbiAgICAgIGxhYmVsV2lkdGggPSBfcHJvcHMkbGFiZWxXaWR0aCA9PT0gdm9pZCAwID8gMCA6IF9wcm9wcyRsYWJlbFdpZHRoLFxuICAgICAgX3Byb3BzJG11bHRpbGluZSA9IHByb3BzLm11bHRpbGluZSxcbiAgICAgIG11bHRpbGluZSA9IF9wcm9wcyRtdWx0aWxpbmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJG11bHRpbGluZSxcbiAgICAgIG5vdGNoZWQgPSBwcm9wcy5ub3RjaGVkLFxuICAgICAgX3Byb3BzJHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgdHlwZSA9IF9wcm9wcyR0eXBlID09PSB2b2lkIDAgPyAndGV4dCcgOiBfcHJvcHMkdHlwZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiZnVsbFdpZHRoXCIsIFwiaW5wdXRDb21wb25lbnRcIiwgXCJsYWJlbFwiLCBcImxhYmVsV2lkdGhcIiwgXCJtdWx0aWxpbmVcIiwgXCJub3RjaGVkXCIsIFwidHlwZVwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KElucHV0QmFzZSwgX2V4dGVuZHMoe1xuICAgIHJlbmRlclN1ZmZpeDogZnVuY3Rpb24gcmVuZGVyU3VmZml4KHN0YXRlKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTm90Y2hlZE91dGxpbmUsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLm5vdGNoZWRPdXRsaW5lLFxuICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgIGxhYmVsV2lkdGg6IGxhYmVsV2lkdGgsXG4gICAgICAgIG5vdGNoZWQ6IHR5cGVvZiBub3RjaGVkICE9PSAndW5kZWZpbmVkJyA/IG5vdGNoZWQgOiBCb29sZWFuKHN0YXRlLnN0YXJ0QWRvcm5tZW50IHx8IHN0YXRlLmZpbGxlZCB8fCBzdGF0ZS5mb2N1c2VkKVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBjbGFzc2VzOiBfZXh0ZW5kcyh7fSwgY2xhc3Nlcywge1xuICAgICAgcm9vdDogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzZXMudW5kZXJsaW5lKSxcbiAgICAgIG5vdGNoZWRPdXRsaW5lOiBudWxsXG4gICAgfSksXG4gICAgZnVsbFdpZHRoOiBmdWxsV2lkdGgsXG4gICAgaW5wdXRDb21wb25lbnQ6IGlucHV0Q29tcG9uZW50LFxuICAgIG11bHRpbGluZTogbXVsdGlsaW5lLFxuICAgIHJlZjogcmVmLFxuICAgIHR5cGU6IHR5cGVcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gT3V0bGluZWRJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGlzIHByb3AgaGVscHMgdXNlcnMgdG8gZmlsbCBmb3JtcyBmYXN0ZXIsIGVzcGVjaWFsbHkgb24gbW9iaWxlIGRldmljZXMuXG4gICAqIFRoZSBuYW1lIGNhbiBiZSBjb25mdXNpbmcsIGFzIGl0J3MgbW9yZSBsaWtlIGFuIGF1dG9maWxsLlxuICAgKiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgaXQgW2ZvbGxvd2luZyB0aGUgc3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybS1jb250cm9sLWluZnJhc3RydWN0dXJlLmh0bWwjYXV0b2ZpbGwpLlxuICAgKi9cbiAgYXV0b0NvbXBsZXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSBmb2N1c2VkIGR1cmluZyB0aGUgZmlyc3QgbW91bnQuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgYGlucHV0YCBlbGVtZW50IHZhbHVlLiBVc2Ugd2hlbiB0aGUgY29tcG9uZW50IGlzIG5vdCBjb250cm9sbGVkLlxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5kIGBJbnB1dEFkb3JubWVudGAgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgZW5kQWRvcm5tZW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCBpbmRpY2F0ZSBhbiBlcnJvci4gVGhpcyBpcyBub3JtYWxseSBvYnRhaW5lZCB2aWEgY29udGV4dCBmcm9tXG4gICAqIEZvcm1Db250cm9sLlxuICAgKi9cbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cbiAgICovXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGlucHV0Q29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFtBdHRyaWJ1dGVzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjQXR0cmlidXRlcykgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUGFzcyBhIHJlZiB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRSZWY6IHJlZlR5cGUsXG5cbiAgLyoqXG4gICAqIFRoZSBsYWJlbCBvZiB0aGUgaW5wdXQuIEl0IGlzIG9ubHkgdXNlZCBmb3IgbGF5b3V0LiBUaGUgYWN0dWFsIGxhYmVsbGluZ1xuICAgKiBpcyBoYW5kbGVkIGJ5IGBJbnB1dExhYmVsYC4gSWYgc3BlY2lmaWVkIGBsYWJlbFdpZHRoYCBpcyBpZ25vcmVkLlxuICAgKi9cbiAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUaGUgd2lkdGggb2YgdGhlIGxhYmVsLiBJcyBpZ25vcmVkIGlmIGBsYWJlbGAgaXMgcHJvdmlkZWQuIFByZWZlciBgbGFiZWxgXG4gICAqIGlmIHRoZSBpbnB1dCBsYWJlbCBhcHBlYXJzIHdpdGggYSBzdHJpa2UgdGhyb3VnaC5cbiAgICovXG4gIGxhYmVsV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIElmIGBkZW5zZWAsIHdpbGwgYWRqdXN0IHZlcnRpY2FsIHNwYWNpbmcuIFRoaXMgaXMgbm9ybWFsbHkgb2J0YWluZWQgdmlhIGNvbnRleHQgZnJvbVxuICAgKiBGb3JtQ29udHJvbC5cbiAgICovXG4gIG1hcmdpbjogUHJvcFR5cGVzLm9uZU9mKFsnZGVuc2UnLCAnbm9uZSddKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBhIHRleHRhcmVhIGVsZW1lbnQgd2lsbCBiZSByZW5kZXJlZC5cbiAgICovXG4gIG11bHRpbGluZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE5hbWUgYXR0cmlidXRlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBvdXRsaW5lIGlzIG5vdGNoZWQgdG8gYWNjb21tb2RhdGUgdGhlIGxhYmVsLlxuICAgKi9cbiAgbm90Y2hlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHZhbHVlIGlzIGNoYW5nZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogWW91IGNhbiBwdWxsIG91dCB0aGUgbmV3IHZhbHVlIGJ5IGFjY2Vzc2luZyBgZXZlbnQudGFyZ2V0LnZhbHVlYCAoc3RyaW5nKS5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVGhlIHNob3J0IGhpbnQgZGlzcGxheWVkIGluIHRoZSBpbnB1dCBiZWZvcmUgdGhlIHVzZXIgZW50ZXJzIGEgdmFsdWUuXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSXQgcHJldmVudHMgdGhlIHVzZXIgZnJvbSBjaGFuZ2luZyB0aGUgdmFsdWUgb2YgdGhlIGZpZWxkXG4gICAqIChub3QgZnJvbSBpbnRlcmFjdGluZyB3aXRoIHRoZSBmaWVsZCkuXG4gICAqL1xuICByZWFkT25seTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGBpbnB1dGAgZWxlbWVudCB3aWxsIGJlIHJlcXVpcmVkLlxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBOdW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5IHdoZW4gbXVsdGlsaW5lIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIHJvd3M6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5IHdoZW4gbXVsdGlsaW5lIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIHJvd3NNYXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogU3RhcnQgYElucHV0QWRvcm5tZW50YCBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBzdGFydEFkb3JubWVudDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFR5cGUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC4gSXQgc2hvdWxkIGJlIFthIHZhbGlkIEhUTUw1IGlucHV0IHR5cGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNGb3JtXyUzQ2lucHV0JTNFX3R5cGVzKS5cbiAgICovXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LCByZXF1aXJlZCBmb3IgYSBjb250cm9sbGVkIGNvbXBvbmVudC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55XG59IDogdm9pZCAwO1xuT3V0bGluZWRJbnB1dC5tdWlOYW1lID0gJ0lucHV0JztcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlPdXRsaW5lZElucHV0J1xufSkoT3V0bGluZWRJbnB1dCk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjaGFpblByb3BUeXBlcywgZWxlbWVudFR5cGVBY2NlcHRpbmdSZWYsIHJlZlR5cGUsIEhUTUxFbGVtZW50VHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vdXRpbHMvZGVib3VuY2UnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICcuLi91dGlscy9vd25lckRvY3VtZW50JztcbmltcG9ydCBvd25lcldpbmRvdyBmcm9tICcuLi91dGlscy9vd25lcldpbmRvdyc7XG5pbXBvcnQgY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uIGZyb20gJy4uL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbic7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vTW9kYWwnO1xuaW1wb3J0IEdyb3cgZnJvbSAnLi4vR3Jvdyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnLi4vUGFwZXInO1xuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldFRvcChyZWN0LCB2ZXJ0aWNhbCkge1xuICB2YXIgb2Zmc2V0ID0gMDtcblxuICBpZiAodHlwZW9mIHZlcnRpY2FsID09PSAnbnVtYmVyJykge1xuICAgIG9mZnNldCA9IHZlcnRpY2FsO1xuICB9IGVsc2UgaWYgKHZlcnRpY2FsID09PSAnY2VudGVyJykge1xuICAgIG9mZnNldCA9IHJlY3QuaGVpZ2h0IC8gMjtcbiAgfSBlbHNlIGlmICh2ZXJ0aWNhbCA9PT0gJ2JvdHRvbScpIHtcbiAgICBvZmZzZXQgPSByZWN0LmhlaWdodDtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0TGVmdChyZWN0LCBob3Jpem9udGFsKSB7XG4gIHZhciBvZmZzZXQgPSAwO1xuXG4gIGlmICh0eXBlb2YgaG9yaXpvbnRhbCA9PT0gJ251bWJlcicpIHtcbiAgICBvZmZzZXQgPSBob3Jpem9udGFsO1xuICB9IGVsc2UgaWYgKGhvcml6b250YWwgPT09ICdjZW50ZXInKSB7XG4gICAgb2Zmc2V0ID0gcmVjdC53aWR0aCAvIDI7XG4gIH0gZWxzZSBpZiAoaG9yaXpvbnRhbCA9PT0gJ3JpZ2h0Jykge1xuICAgIG9mZnNldCA9IHJlY3Qud2lkdGg7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0O1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm1PcmlnaW5WYWx1ZSh0cmFuc2Zvcm1PcmlnaW4pIHtcbiAgcmV0dXJuIFt0cmFuc2Zvcm1PcmlnaW4uaG9yaXpvbnRhbCwgdHJhbnNmb3JtT3JpZ2luLnZlcnRpY2FsXS5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gdHlwZW9mIG4gPT09ICdudW1iZXInID8gXCJcIi5jb25jYXQobiwgXCJweFwiKSA6IG47XG4gIH0pLmpvaW4oJyAnKTtcbn0gLy8gU3VtIHRoZSBzY3JvbGxUb3AgYmV0d2VlbiB0d28gZWxlbWVudHMuXG5cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KHBhcmVudCwgY2hpbGQpIHtcbiAgdmFyIGVsZW1lbnQgPSBjaGlsZDtcbiAgdmFyIHNjcm9sbFRvcCA9IDA7XG5cbiAgd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudCAhPT0gcGFyZW50KSB7XG4gICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBzY3JvbGxUb3AgKz0gZWxlbWVudC5zY3JvbGxUb3A7XG4gIH1cblxuICByZXR1cm4gc2Nyb2xsVG9wO1xufVxuXG5mdW5jdGlvbiBnZXRBbmNob3JFbChhbmNob3JFbCkge1xuICByZXR1cm4gdHlwZW9mIGFuY2hvckVsID09PSAnZnVuY3Rpb24nID8gYW5jaG9yRWwoKSA6IGFuY2hvckVsO1xufVxuXG5leHBvcnQgdmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcm9vdDoge30sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgY29tcG9uZW50LiAqL1xuICBwYXBlcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgLy8gU28gd2Ugc2VlIHRoZSBwb3BvdmVyIHdoZW4gaXQncyBlbXB0eS5cbiAgICAvLyBJdCdzIG1vc3QgbGlrZWx5IG9uIGlzc3VlIG9uIHVzZXJsYW5kLlxuICAgIG1pbldpZHRoOiAxNixcbiAgICBtaW5IZWlnaHQ6IDE2LFxuICAgIG1heFdpZHRoOiAnY2FsYygxMDAlIC0gMzJweCknLFxuICAgIG1heEhlaWdodDogJ2NhbGMoMTAwJSAtIDMycHgpJyxcbiAgICAvLyBXZSBkaXNhYmxlIHRoZSBmb2N1cyByaW5nIGZvciBtb3VzZSwgdG91Y2ggYW5kIGtleWJvYXJkIHVzZXJzLlxuICAgIG91dGxpbmU6IDBcbiAgfVxufTtcbnZhciBQb3BvdmVyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gUG9wb3Zlcihwcm9wcywgcmVmKSB7XG4gIHZhciBhY3Rpb24gPSBwcm9wcy5hY3Rpb24sXG4gICAgICBhbmNob3JFbCA9IHByb3BzLmFuY2hvckVsLFxuICAgICAgX3Byb3BzJGFuY2hvck9yaWdpbiA9IHByb3BzLmFuY2hvck9yaWdpbixcbiAgICAgIGFuY2hvck9yaWdpbiA9IF9wcm9wcyRhbmNob3JPcmlnaW4gPT09IHZvaWQgMCA/IHtcbiAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgaG9yaXpvbnRhbDogJ2xlZnQnXG4gIH0gOiBfcHJvcHMkYW5jaG9yT3JpZ2luLFxuICAgICAgYW5jaG9yUG9zaXRpb24gPSBwcm9wcy5hbmNob3JQb3NpdGlvbixcbiAgICAgIF9wcm9wcyRhbmNob3JSZWZlcmVuYyA9IHByb3BzLmFuY2hvclJlZmVyZW5jZSxcbiAgICAgIGFuY2hvclJlZmVyZW5jZSA9IF9wcm9wcyRhbmNob3JSZWZlcmVuYyA9PT0gdm9pZCAwID8gJ2FuY2hvckVsJyA6IF9wcm9wcyRhbmNob3JSZWZlcmVuYyxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNvbnRhaW5lclByb3AgPSBwcm9wcy5jb250YWluZXIsXG4gICAgICBfcHJvcHMkZWxldmF0aW9uID0gcHJvcHMuZWxldmF0aW9uLFxuICAgICAgZWxldmF0aW9uID0gX3Byb3BzJGVsZXZhdGlvbiA9PT0gdm9pZCAwID8gOCA6IF9wcm9wcyRlbGV2YXRpb24sXG4gICAgICBnZXRDb250ZW50QW5jaG9yRWwgPSBwcm9wcy5nZXRDb250ZW50QW5jaG9yRWwsXG4gICAgICBfcHJvcHMkbWFyZ2luVGhyZXNob2wgPSBwcm9wcy5tYXJnaW5UaHJlc2hvbGQsXG4gICAgICBtYXJnaW5UaHJlc2hvbGQgPSBfcHJvcHMkbWFyZ2luVGhyZXNob2wgPT09IHZvaWQgMCA/IDE2IDogX3Byb3BzJG1hcmdpblRocmVzaG9sLFxuICAgICAgb25FbnRlciA9IHByb3BzLm9uRW50ZXIsXG4gICAgICBvbkVudGVyZWQgPSBwcm9wcy5vbkVudGVyZWQsXG4gICAgICBvbkVudGVyaW5nID0gcHJvcHMub25FbnRlcmluZyxcbiAgICAgIG9uRXhpdCA9IHByb3BzLm9uRXhpdCxcbiAgICAgIG9uRXhpdGVkID0gcHJvcHMub25FeGl0ZWQsXG4gICAgICBvbkV4aXRpbmcgPSBwcm9wcy5vbkV4aXRpbmcsXG4gICAgICBvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIF9wcm9wcyRQYXBlclByb3BzID0gcHJvcHMuUGFwZXJQcm9wcyxcbiAgICAgIFBhcGVyUHJvcHMgPSBfcHJvcHMkUGFwZXJQcm9wcyA9PT0gdm9pZCAwID8ge30gOiBfcHJvcHMkUGFwZXJQcm9wcyxcbiAgICAgIF9wcm9wcyR0cmFuc2Zvcm1PcmlnaSA9IHByb3BzLnRyYW5zZm9ybU9yaWdpbixcbiAgICAgIHRyYW5zZm9ybU9yaWdpbiA9IF9wcm9wcyR0cmFuc2Zvcm1PcmlnaSA9PT0gdm9pZCAwID8ge1xuICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICBob3Jpem9udGFsOiAnbGVmdCdcbiAgfSA6IF9wcm9wcyR0cmFuc2Zvcm1PcmlnaSxcbiAgICAgIF9wcm9wcyRUcmFuc2l0aW9uQ29tcCA9IHByb3BzLlRyYW5zaXRpb25Db21wb25lbnQsXG4gICAgICBUcmFuc2l0aW9uQ29tcG9uZW50ID0gX3Byb3BzJFRyYW5zaXRpb25Db21wID09PSB2b2lkIDAgPyBHcm93IDogX3Byb3BzJFRyYW5zaXRpb25Db21wLFxuICAgICAgX3Byb3BzJHRyYW5zaXRpb25EdXJhID0gcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uUHJvcCA9IF9wcm9wcyR0cmFuc2l0aW9uRHVyYSA9PT0gdm9pZCAwID8gJ2F1dG8nIDogX3Byb3BzJHRyYW5zaXRpb25EdXJhLFxuICAgICAgX3Byb3BzJFRyYW5zaXRpb25Qcm9wID0gcHJvcHMuVHJhbnNpdGlvblByb3BzLFxuICAgICAgVHJhbnNpdGlvblByb3BzID0gX3Byb3BzJFRyYW5zaXRpb25Qcm9wID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRUcmFuc2l0aW9uUHJvcCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhY3Rpb25cIiwgXCJhbmNob3JFbFwiLCBcImFuY2hvck9yaWdpblwiLCBcImFuY2hvclBvc2l0aW9uXCIsIFwiYW5jaG9yUmVmZXJlbmNlXCIsIFwiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29udGFpbmVyXCIsIFwiZWxldmF0aW9uXCIsIFwiZ2V0Q29udGVudEFuY2hvckVsXCIsIFwibWFyZ2luVGhyZXNob2xkXCIsIFwib25FbnRlclwiLCBcIm9uRW50ZXJlZFwiLCBcIm9uRW50ZXJpbmdcIiwgXCJvbkV4aXRcIiwgXCJvbkV4aXRlZFwiLCBcIm9uRXhpdGluZ1wiLCBcIm9wZW5cIiwgXCJQYXBlclByb3BzXCIsIFwidHJhbnNmb3JtT3JpZ2luXCIsIFwiVHJhbnNpdGlvbkNvbXBvbmVudFwiLCBcInRyYW5zaXRpb25EdXJhdGlvblwiLCBcIlRyYW5zaXRpb25Qcm9wc1wiXSk7XG5cbiAgdmFyIHBhcGVyUmVmID0gUmVhY3QudXNlUmVmKCk7IC8vIFJldHVybnMgdGhlIHRvcC9sZWZ0IG9mZnNldCBvZiB0aGUgcG9zaXRpb25cbiAgLy8gdG8gYXR0YWNoIHRvIG9uIHRoZSBhbmNob3IgZWxlbWVudCAob3IgYm9keSBpZiBub25lIGlzIHByb3ZpZGVkKVxuXG4gIHZhciBnZXRBbmNob3JPZmZzZXQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoY29udGVudEFuY2hvck9mZnNldCkge1xuICAgIGlmIChhbmNob3JSZWZlcmVuY2UgPT09ICdhbmNob3JQb3NpdGlvbicpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghYW5jaG9yUG9zaXRpb24pIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogWW91IG5lZWQgdG8gcHJvdmlkZSBhIGBhbmNob3JQb3NpdGlvbmAgcHJvcCB3aGVuIHVzaW5nICcgKyAnPFBvcG92ZXIgYW5jaG9yUmVmZXJlbmNlPVwiYW5jaG9yUG9zaXRpb25cIiAvPi4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYW5jaG9yUG9zaXRpb247XG4gICAgfVxuXG4gICAgdmFyIHJlc29sdmVkQW5jaG9yRWwgPSBnZXRBbmNob3JFbChhbmNob3JFbCk7IC8vIElmIGFuIGFuY2hvciBlbGVtZW50IHdhc24ndCBwcm92aWRlZCwganVzdCB1c2UgdGhlIHBhcmVudCBib2R5IGVsZW1lbnQgb2YgdGhpcyBQb3BvdmVyXG5cbiAgICB2YXIgYW5jaG9yRWxlbWVudCA9IHJlc29sdmVkQW5jaG9yRWwgJiYgcmVzb2x2ZWRBbmNob3JFbC5ub2RlVHlwZSA9PT0gMSA/IHJlc29sdmVkQW5jaG9yRWwgOiBvd25lckRvY3VtZW50KHBhcGVyUmVmLmN1cnJlbnQpLmJvZHk7XG4gICAgdmFyIGFuY2hvclJlY3QgPSBhbmNob3JFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBib3ggPSBhbmNob3JFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiBib3gudG9wID09PSAwICYmIGJveC5sZWZ0ID09PSAwICYmIGJveC5yaWdodCA9PT0gMCAmJiBib3guYm90dG9tID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihbJ01hdGVyaWFsLVVJOiBUaGUgYGFuY2hvckVsYCBwcm9wIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQgaXMgaW52YWxpZC4nLCAnVGhlIGFuY2hvciBlbGVtZW50IHNob3VsZCBiZSBwYXJ0IG9mIHRoZSBkb2N1bWVudCBsYXlvdXQuJywgXCJNYWtlIHN1cmUgdGhlIGVsZW1lbnQgaXMgcHJlc2VudCBpbiB0aGUgZG9jdW1lbnQgb3IgdGhhdCBpdCdzIG5vdCBkaXNwbGF5IG5vbmUuXCJdLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYW5jaG9yVmVydGljYWwgPSBjb250ZW50QW5jaG9yT2Zmc2V0ID09PSAwID8gYW5jaG9yT3JpZ2luLnZlcnRpY2FsIDogJ2NlbnRlcic7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogYW5jaG9yUmVjdC50b3AgKyBnZXRPZmZzZXRUb3AoYW5jaG9yUmVjdCwgYW5jaG9yVmVydGljYWwpLFxuICAgICAgbGVmdDogYW5jaG9yUmVjdC5sZWZ0ICsgZ2V0T2Zmc2V0TGVmdChhbmNob3JSZWN0LCBhbmNob3JPcmlnaW4uaG9yaXpvbnRhbClcbiAgICB9O1xuICB9LCBbYW5jaG9yRWwsIGFuY2hvck9yaWdpbi5ob3Jpem9udGFsLCBhbmNob3JPcmlnaW4udmVydGljYWwsIGFuY2hvclBvc2l0aW9uLCBhbmNob3JSZWZlcmVuY2VdKTsgLy8gUmV0dXJucyB0aGUgdmVydGljYWwgb2Zmc2V0IG9mIGlubmVyIGNvbnRlbnQgdG8gYW5jaG9yIHRoZSB0cmFuc2Zvcm0gb24gaWYgcHJvdmlkZWRcblxuICB2YXIgZ2V0Q29udGVudEFuY2hvck9mZnNldCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdmFyIGNvbnRlbnRBbmNob3JPZmZzZXQgPSAwO1xuXG4gICAgaWYgKGdldENvbnRlbnRBbmNob3JFbCAmJiBhbmNob3JSZWZlcmVuY2UgPT09ICdhbmNob3JFbCcpIHtcbiAgICAgIHZhciBjb250ZW50QW5jaG9yRWwgPSBnZXRDb250ZW50QW5jaG9yRWwoZWxlbWVudCk7XG5cbiAgICAgIGlmIChjb250ZW50QW5jaG9yRWwgJiYgZWxlbWVudC5jb250YWlucyhjb250ZW50QW5jaG9yRWwpKSB7XG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCwgY29udGVudEFuY2hvckVsKTtcbiAgICAgICAgY29udGVudEFuY2hvck9mZnNldCA9IGNvbnRlbnRBbmNob3JFbC5vZmZzZXRUb3AgKyBjb250ZW50QW5jaG9yRWwuY2xpZW50SGVpZ2h0IC8gMiAtIHNjcm9sbFRvcCB8fCAwO1xuICAgICAgfSAvLyAhPSB0aGUgZGVmYXVsdCB2YWx1ZVxuXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhbmNob3JPcmlnaW4udmVydGljYWwgIT09ICd0b3AnKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBZb3UgY2FuIG5vdCBjaGFuZ2UgdGhlIGRlZmF1bHQgYGFuY2hvck9yaWdpbi52ZXJ0aWNhbGAgdmFsdWUgJywgJ3doZW4gYWxzbyBwcm92aWRpbmcgdGhlIGBnZXRDb250ZW50QW5jaG9yRWxgIHByb3AgdG8gdGhlIHBvcG92ZXIgY29tcG9uZW50LicsICdPbmx5IHVzZSBvbmUgb2YgdGhlIHR3byBwcm9wcy4nLCAnU2V0IGBnZXRDb250ZW50QW5jaG9yRWxgIHRvIGBudWxsIHwgdW5kZWZpbmVkYCcgKyAnIG9yIGxlYXZlIGBhbmNob3JPcmlnaW4udmVydGljYWxgIHVuY2hhbmdlZC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudEFuY2hvck9mZnNldDtcbiAgfSwgW2FuY2hvck9yaWdpbi52ZXJ0aWNhbCwgYW5jaG9yUmVmZXJlbmNlLCBnZXRDb250ZW50QW5jaG9yRWxdKTsgLy8gUmV0dXJuIHRoZSBiYXNlIHRyYW5zZm9ybSBvcmlnaW4gdXNpbmcgdGhlIGVsZW1lbnRcbiAgLy8gYW5kIHRha2luZyB0aGUgY29udGVudCBhbmNob3Igb2Zmc2V0IGludG8gYWNjb3VudCBpZiBpbiB1c2VcblxuICB2YXIgZ2V0VHJhbnNmb3JtT3JpZ2luID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGVsZW1SZWN0KSB7XG4gICAgdmFyIGNvbnRlbnRBbmNob3JPZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZlcnRpY2FsOiBnZXRPZmZzZXRUb3AoZWxlbVJlY3QsIHRyYW5zZm9ybU9yaWdpbi52ZXJ0aWNhbCkgKyBjb250ZW50QW5jaG9yT2Zmc2V0LFxuICAgICAgaG9yaXpvbnRhbDogZ2V0T2Zmc2V0TGVmdChlbGVtUmVjdCwgdHJhbnNmb3JtT3JpZ2luLmhvcml6b250YWwpXG4gICAgfTtcbiAgfSwgW3RyYW5zZm9ybU9yaWdpbi5ob3Jpem9udGFsLCB0cmFuc2Zvcm1PcmlnaW4udmVydGljYWxdKTtcbiAgdmFyIGdldFBvc2l0aW9uaW5nU3R5bGUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vIENoZWNrIGlmIHRoZSBwYXJlbnQgaGFzIHJlcXVlc3RlZCBhbmNob3Jpbmcgb24gYW4gaW5uZXIgY29udGVudCBub2RlXG4gICAgdmFyIGNvbnRlbnRBbmNob3JPZmZzZXQgPSBnZXRDb250ZW50QW5jaG9yT2Zmc2V0KGVsZW1lbnQpO1xuICAgIHZhciBlbGVtUmVjdCA9IHtcbiAgICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodFxuICAgIH07IC8vIEdldCB0aGUgdHJhbnNmb3JtIG9yaWdpbiBwb2ludCBvbiB0aGUgZWxlbWVudCBpdHNlbGZcblxuICAgIHZhciBlbGVtVHJhbnNmb3JtT3JpZ2luID0gZ2V0VHJhbnNmb3JtT3JpZ2luKGVsZW1SZWN0LCBjb250ZW50QW5jaG9yT2Zmc2V0KTtcblxuICAgIGlmIChhbmNob3JSZWZlcmVuY2UgPT09ICdub25lJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBudWxsLFxuICAgICAgICBsZWZ0OiBudWxsLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IGdldFRyYW5zZm9ybU9yaWdpblZhbHVlKGVsZW1UcmFuc2Zvcm1PcmlnaW4pXG4gICAgICB9O1xuICAgIH0gLy8gR2V0IHRoZSBvZmZzZXQgb2Ygb2YgdGhlIGFuY2hvcmluZyBlbGVtZW50XG5cblxuICAgIHZhciBhbmNob3JPZmZzZXQgPSBnZXRBbmNob3JPZmZzZXQoY29udGVudEFuY2hvck9mZnNldCk7IC8vIENhbGN1bGF0ZSBlbGVtZW50IHBvc2l0aW9uaW5nXG5cbiAgICB2YXIgdG9wID0gYW5jaG9yT2Zmc2V0LnRvcCAtIGVsZW1UcmFuc2Zvcm1PcmlnaW4udmVydGljYWw7XG4gICAgdmFyIGxlZnQgPSBhbmNob3JPZmZzZXQubGVmdCAtIGVsZW1UcmFuc2Zvcm1PcmlnaW4uaG9yaXpvbnRhbDtcbiAgICB2YXIgYm90dG9tID0gdG9wICsgZWxlbVJlY3QuaGVpZ2h0O1xuICAgIHZhciByaWdodCA9IGxlZnQgKyBlbGVtUmVjdC53aWR0aDsgLy8gVXNlIHRoZSBwYXJlbnQgd2luZG93IG9mIHRoZSBhbmNob3JFbCBpZiBwcm92aWRlZFxuXG4gICAgdmFyIGNvbnRhaW5lcldpbmRvdyA9IG93bmVyV2luZG93KGdldEFuY2hvckVsKGFuY2hvckVsKSk7IC8vIFdpbmRvdyB0aHJlc2hvbGRzIHRha2luZyByZXF1aXJlZCBtYXJnaW4gaW50byBhY2NvdW50XG5cbiAgICB2YXIgaGVpZ2h0VGhyZXNob2xkID0gY29udGFpbmVyV2luZG93LmlubmVySGVpZ2h0IC0gbWFyZ2luVGhyZXNob2xkO1xuICAgIHZhciB3aWR0aFRocmVzaG9sZCA9IGNvbnRhaW5lcldpbmRvdy5pbm5lcldpZHRoIC0gbWFyZ2luVGhyZXNob2xkOyAvLyBDaGVjayBpZiB0aGUgdmVydGljYWwgYXhpcyBuZWVkcyBzaGlmdGluZ1xuXG4gICAgaWYgKHRvcCA8IG1hcmdpblRocmVzaG9sZCkge1xuICAgICAgdmFyIGRpZmYgPSB0b3AgLSBtYXJnaW5UaHJlc2hvbGQ7XG4gICAgICB0b3AgLT0gZGlmZjtcbiAgICAgIGVsZW1UcmFuc2Zvcm1PcmlnaW4udmVydGljYWwgKz0gZGlmZjtcbiAgICB9IGVsc2UgaWYgKGJvdHRvbSA+IGhlaWdodFRocmVzaG9sZCkge1xuICAgICAgdmFyIF9kaWZmID0gYm90dG9tIC0gaGVpZ2h0VGhyZXNob2xkO1xuXG4gICAgICB0b3AgLT0gX2RpZmY7XG4gICAgICBlbGVtVHJhbnNmb3JtT3JpZ2luLnZlcnRpY2FsICs9IF9kaWZmO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoZWxlbVJlY3QuaGVpZ2h0ID4gaGVpZ2h0VGhyZXNob2xkICYmIGVsZW1SZWN0LmhlaWdodCAmJiBoZWlnaHRUaHJlc2hvbGQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBUaGUgcG9wb3ZlciBjb21wb25lbnQgaXMgdG9vIHRhbGwuJywgXCJTb21lIHBhcnQgb2YgaXQgY2FuIG5vdCBiZSBzZWVuIG9uIHRoZSBzY3JlZW4gKFwiLmNvbmNhdChlbGVtUmVjdC5oZWlnaHQgLSBoZWlnaHRUaHJlc2hvbGQsIFwicHgpLlwiKSwgJ1BsZWFzZSBjb25zaWRlciBhZGRpbmcgYSBgbWF4LWhlaWdodGAgdG8gaW1wcm92ZSB0aGUgdXNlci1leHBlcmllbmNlLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9IC8vIENoZWNrIGlmIHRoZSBob3Jpem9udGFsIGF4aXMgbmVlZHMgc2hpZnRpbmdcblxuXG4gICAgaWYgKGxlZnQgPCBtYXJnaW5UaHJlc2hvbGQpIHtcbiAgICAgIHZhciBfZGlmZjIgPSBsZWZ0IC0gbWFyZ2luVGhyZXNob2xkO1xuXG4gICAgICBsZWZ0IC09IF9kaWZmMjtcbiAgICAgIGVsZW1UcmFuc2Zvcm1PcmlnaW4uaG9yaXpvbnRhbCArPSBfZGlmZjI7XG4gICAgfSBlbHNlIGlmIChyaWdodCA+IHdpZHRoVGhyZXNob2xkKSB7XG4gICAgICB2YXIgX2RpZmYzID0gcmlnaHQgLSB3aWR0aFRocmVzaG9sZDtcblxuICAgICAgbGVmdCAtPSBfZGlmZjM7XG4gICAgICBlbGVtVHJhbnNmb3JtT3JpZ2luLmhvcml6b250YWwgKz0gX2RpZmYzO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IFwiXCIuY29uY2F0KE1hdGgucm91bmQodG9wKSwgXCJweFwiKSxcbiAgICAgIGxlZnQ6IFwiXCIuY29uY2F0KE1hdGgucm91bmQobGVmdCksIFwicHhcIiksXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IGdldFRyYW5zZm9ybU9yaWdpblZhbHVlKGVsZW1UcmFuc2Zvcm1PcmlnaW4pXG4gICAgfTtcbiAgfSwgW2FuY2hvckVsLCBhbmNob3JSZWZlcmVuY2UsIGdldEFuY2hvck9mZnNldCwgZ2V0Q29udGVudEFuY2hvck9mZnNldCwgZ2V0VHJhbnNmb3JtT3JpZ2luLCBtYXJnaW5UaHJlc2hvbGRdKTtcbiAgdmFyIHNldFBvc2l0aW9uaW5nU3R5bGVzID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbGVtZW50ID0gcGFwZXJSZWYuY3VycmVudDtcblxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwb3NpdGlvbmluZyA9IGdldFBvc2l0aW9uaW5nU3R5bGUoZWxlbWVudCk7XG5cbiAgICBpZiAocG9zaXRpb25pbmcudG9wICE9PSBudWxsKSB7XG4gICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IHBvc2l0aW9uaW5nLnRvcDtcbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb25pbmcubGVmdCAhPT0gbnVsbCkge1xuICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gcG9zaXRpb25pbmcubGVmdDtcbiAgICB9XG5cbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IHBvc2l0aW9uaW5nLnRyYW5zZm9ybU9yaWdpbjtcbiAgfSwgW2dldFBvc2l0aW9uaW5nU3R5bGVdKTtcblxuICB2YXIgaGFuZGxlRW50ZXJpbmcgPSBmdW5jdGlvbiBoYW5kbGVFbnRlcmluZyhlbGVtZW50LCBpc0FwcGVhcmluZykge1xuICAgIGlmIChvbkVudGVyaW5nKSB7XG4gICAgICBvbkVudGVyaW5nKGVsZW1lbnQsIGlzQXBwZWFyaW5nKTtcbiAgICB9XG5cbiAgICBzZXRQb3NpdGlvbmluZ1N0eWxlcygpO1xuICB9O1xuXG4gIHZhciBoYW5kbGVQYXBlclJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIC8vICNTdHJpY3RNb2RlIHJlYWR5XG4gICAgcGFwZXJSZWYuY3VycmVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGluc3RhbmNlKTtcbiAgfSwgW10pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChvcGVuKSB7XG4gICAgICBzZXRQb3NpdGlvbmluZ1N0eWxlcygpO1xuICAgIH1cbiAgfSk7XG4gIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUoYWN0aW9uLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG9wZW4gPyB7XG4gICAgICB1cGRhdGVQb3NpdGlvbjogZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24oKSB7XG4gICAgICAgIHNldFBvc2l0aW9uaW5nU3R5bGVzKCk7XG4gICAgICB9XG4gICAgfSA6IG51bGw7XG4gIH0sIFtvcGVuLCBzZXRQb3NpdGlvbmluZ1N0eWxlc10pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghb3Blbikge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB2YXIgaGFuZGxlUmVzaXplID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgc2V0UG9zaXRpb25pbmdTdHlsZXMoKTtcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaGFuZGxlUmVzaXplLmNsZWFyKCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICB9O1xuICB9LCBbb3Blbiwgc2V0UG9zaXRpb25pbmdTdHlsZXNdKTtcbiAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvblByb3A7XG5cbiAgaWYgKHRyYW5zaXRpb25EdXJhdGlvblByb3AgPT09ICdhdXRvJyAmJiAhVHJhbnNpdGlvbkNvbXBvbmVudC5tdWlTdXBwb3J0QXV0bykge1xuICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfSAvLyBJZiB0aGUgY29udGFpbmVyIHByb3AgaXMgcHJvdmlkZWQsIHVzZSB0aGF0XG4gIC8vIElmIHRoZSBhbmNob3JFbCBwcm9wIGlzIHByb3ZpZGVkLCB1c2UgaXRzIHBhcmVudCBib2R5IGVsZW1lbnQgYXMgdGhlIGNvbnRhaW5lclxuICAvLyBJZiBuZWl0aGVyIGFyZSBwcm92aWRlZCBsZXQgdGhlIE1vZGFsIHRha2UgY2FyZSBvZiBjaG9vc2luZyB0aGUgY29udGFpbmVyXG5cblxuICB2YXIgY29udGFpbmVyID0gY29udGFpbmVyUHJvcCB8fCAoYW5jaG9yRWwgPyBvd25lckRvY3VtZW50KGdldEFuY2hvckVsKGFuY2hvckVsKSkuYm9keSA6IHVuZGVmaW5lZCk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbCwgX2V4dGVuZHMoe1xuICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgIG9wZW46IG9wZW4sXG4gICAgcmVmOiByZWYsXG4gICAgQmFja2Ryb3BQcm9wczoge1xuICAgICAgaW52aXNpYmxlOiB0cnVlXG4gICAgfSxcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpXG4gIH0sIG90aGVyKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkNvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGFwcGVhcjogdHJ1ZSxcbiAgICBpbjogb3BlbixcbiAgICBvbkVudGVyOiBvbkVudGVyLFxuICAgIG9uRW50ZXJlZDogb25FbnRlcmVkLFxuICAgIG9uRXhpdDogb25FeGl0LFxuICAgIG9uRXhpdGVkOiBvbkV4aXRlZCxcbiAgICBvbkV4aXRpbmc6IG9uRXhpdGluZyxcbiAgICB0aW1lb3V0OiB0cmFuc2l0aW9uRHVyYXRpb25cbiAgfSwgVHJhbnNpdGlvblByb3BzLCB7XG4gICAgb25FbnRlcmluZzogY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKGhhbmRsZUVudGVyaW5nLCBUcmFuc2l0aW9uUHJvcHMub25FbnRlcmluZylcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBhcGVyLCBfZXh0ZW5kcyh7XG4gICAgZWxldmF0aW9uOiBlbGV2YXRpb24sXG4gICAgcmVmOiBoYW5kbGVQYXBlclJlZlxuICB9LCBQYXBlclByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucGFwZXIsIFBhcGVyUHJvcHMuY2xhc3NOYW1lKVxuICB9KSwgY2hpbGRyZW4pKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFBvcG92ZXIucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQSByZWYgZm9yIGltcGVyYXRpdmUgYWN0aW9ucy5cbiAgICogSXQgY3VycmVudGx5IG9ubHkgc3VwcG9ydHMgdXBkYXRlUG9zaXRpb24oKSBhY3Rpb24uXG4gICAqL1xuICBhY3Rpb246IHJlZlR5cGUsXG5cbiAgLyoqXG4gICAqIEEgSFRNTCBlbGVtZW50LCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBpdC5cbiAgICogSXQncyB1c2VkIHRvIHNldCB0aGUgcG9zaXRpb24gb2YgdGhlIHBvcG92ZXIuXG4gICAqL1xuICBhbmNob3JFbDogY2hhaW5Qcm9wVHlwZXMoUHJvcFR5cGVzLm9uZU9mVHlwZShbSFRNTEVsZW1lbnRUeXBlLCBQcm9wVHlwZXMuZnVuY10pLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICBpZiAocHJvcHMub3BlbiAmJiAoIXByb3BzLmFuY2hvclJlZmVyZW5jZSB8fCBwcm9wcy5hbmNob3JSZWZlcmVuY2UgPT09ICdhbmNob3JFbCcpKSB7XG4gICAgICB2YXIgcmVzb2x2ZWRBbmNob3JFbCA9IGdldEFuY2hvckVsKHByb3BzLmFuY2hvckVsKTtcblxuICAgICAgaWYgKHJlc29sdmVkQW5jaG9yRWwgJiYgcmVzb2x2ZWRBbmNob3JFbC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICB2YXIgYm94ID0gcmVzb2x2ZWRBbmNob3JFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiBib3gudG9wID09PSAwICYmIGJveC5sZWZ0ID09PSAwICYmIGJveC5yaWdodCA9PT0gMCAmJiBib3guYm90dG9tID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihbJ01hdGVyaWFsLVVJOiBUaGUgYGFuY2hvckVsYCBwcm9wIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQgaXMgaW52YWxpZC4nLCAnVGhlIGFuY2hvciBlbGVtZW50IHNob3VsZCBiZSBwYXJ0IG9mIHRoZSBkb2N1bWVudCBsYXlvdXQuJywgXCJNYWtlIHN1cmUgdGhlIGVsZW1lbnQgaXMgcHJlc2VudCBpbiB0aGUgZG9jdW1lbnQgb3IgdGhhdCBpdCdzIG5vdCBkaXNwbGF5IG5vbmUuXCJdLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihbJ01hdGVyaWFsLVVJOiBUaGUgYGFuY2hvckVsYCBwcm9wIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQgaXMgaW52YWxpZC4nLCBcIkl0IHNob3VsZCBiZSBhbiBFbGVtZW50IGluc3RhbmNlIGJ1dCBpdCdzIGBcIi5jb25jYXQocmVzb2x2ZWRBbmNob3JFbCwgXCJgIGluc3RlYWQuXCIpXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0pLFxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBwb2ludCBvbiB0aGUgYW5jaG9yIHdoZXJlIHRoZSBwb3BvdmVyJ3NcbiAgICogYGFuY2hvckVsYCB3aWxsIGF0dGFjaCB0by4gVGhpcyBpcyBub3QgdXNlZCB3aGVuIHRoZVxuICAgKiBhbmNob3JSZWZlcmVuY2UgaXMgJ2FuY2hvclBvc2l0aW9uJy5cbiAgICpcbiAgICogT3B0aW9uczpcbiAgICogdmVydGljYWw6IFt0b3AsIGNlbnRlciwgYm90dG9tXTtcbiAgICogaG9yaXpvbnRhbDogW2xlZnQsIGNlbnRlciwgcmlnaHRdLlxuICAgKi9cbiAgYW5jaG9yT3JpZ2luOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGhvcml6b250YWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2NlbnRlcicsICdsZWZ0JywgJ3JpZ2h0J10pLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZCxcbiAgICB2ZXJ0aWNhbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFsnYm90dG9tJywgJ2NlbnRlcicsICd0b3AnXSksIFByb3BUeXBlcy5udW1iZXJdKS5pc1JlcXVpcmVkXG4gIH0pLFxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBwb3NpdGlvbiB0aGF0IG1heSBiZSB1c2VkXG4gICAqIHRvIHNldCB0aGUgcG9zaXRpb24gb2YgdGhlIHBvcG92ZXIuXG4gICAqIFRoZSBjb29yZGluYXRlcyBhcmUgcmVsYXRpdmUgdG9cbiAgICogdGhlIGFwcGxpY2F0aW9uJ3MgY2xpZW50IGFyZWEuXG4gICAqL1xuICBhbmNob3JQb3NpdGlvbjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBsZWZ0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdG9wOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgfSksXG5cbiAgLyoqXG4gICAqIFRoaXMgZGV0ZXJtaW5lcyB3aGljaCBhbmNob3IgcHJvcCB0byByZWZlciB0byB0byBzZXRcbiAgICogdGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BvdmVyLlxuICAgKi9cbiAgYW5jaG9yUmVmZXJlbmNlOiBQcm9wVHlwZXMub25lT2YoWydhbmNob3JFbCcsICdhbmNob3JQb3NpdGlvbicsICdub25lJ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQSBIVE1MIGVsZW1lbnQsIGNvbXBvbmVudCBpbnN0YW5jZSwgb3IgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGVpdGhlci5cbiAgICogVGhlIGBjb250YWluZXJgIHdpbGwgcGFzc2VkIHRvIHRoZSBNb2RhbCBjb21wb25lbnQuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIGl0IHVzZXMgdGhlIGJvZHkgb2YgdGhlIGFuY2hvckVsJ3MgdG9wLWxldmVsIGRvY3VtZW50IG9iamVjdCxcbiAgICogc28gaXQncyBzaW1wbHkgYGRvY3VtZW50LmJvZHlgIG1vc3Qgb2YgdGhlIHRpbWUuXG4gICAqL1xuICBjb250YWluZXI6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5vbmVPZlR5cGUoW0hUTUxFbGVtZW50VHlwZSwgUHJvcFR5cGVzLmluc3RhbmNlT2YoUmVhY3QuQ29tcG9uZW50KSwgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAvKipcbiAgICogVGhlIGVsZXZhdGlvbiBvZiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIGVsZXZhdGlvbjogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgaW4gb3JkZXIgdG8gcmV0cmlldmUgdGhlIGNvbnRlbnQgYW5jaG9yIGVsZW1lbnQuXG4gICAqIEl0J3MgdGhlIG9wcG9zaXRlIG9mIHRoZSBgYW5jaG9yRWxgIHByb3AuXG4gICAqIFRoZSBjb250ZW50IGFuY2hvciBlbGVtZW50IHNob3VsZCBiZSBhbiBlbGVtZW50IGluc2lkZSB0aGUgcG9wb3Zlci5cbiAgICogSXQncyB1c2VkIHRvIGNvcnJlY3RseSBzY3JvbGwgYW5kIHNldCB0aGUgcG9zaXRpb24gb2YgdGhlIHBvcG92ZXIuXG4gICAqIFRoZSBwb3NpdGlvbmluZyBzdHJhdGVneSB0cmllcyB0byBtYWtlIHRoZSBjb250ZW50IGFuY2hvciBlbGVtZW50IGp1c3QgYWJvdmUgdGhlXG4gICAqIGFuY2hvciBlbGVtZW50LlxuICAgKi9cbiAgZ2V0Q29udGVudEFuY2hvckVsOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIGhvdyBjbG9zZSB0byB0aGUgZWRnZSBvZiB0aGUgd2luZG93IHRoZSBwb3BvdmVyIGNhbiBhcHBlYXIuXG4gICAqL1xuICBtYXJnaW5UaHJlc2hvbGQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCByZXF1ZXN0cyB0byBiZSBjbG9zZWQuXG4gICAqL1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgZW50ZXJpbmcuXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBlbnRlcmVkLlxuICAgKi9cbiAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGVudGVyaW5nLlxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIGV4aXRpbmcuXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGV4aXRlZC5cbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGV4aXRpbmcuXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBwb3BvdmVyIGlzIHZpc2libGUuXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYFBhcGVyYF0oL2FwaS9wYXBlci8pIGVsZW1lbnQuXG4gICAqL1xuICBQYXBlclByb3BzOiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuc2hhcGUoe1xuICAgIGNvbXBvbmVudDogZWxlbWVudFR5cGVBY2NlcHRpbmdSZWZcbiAgfSksXG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIHBvaW50IG9uIHRoZSBwb3BvdmVyIHdoaWNoXG4gICAqIHdpbGwgYXR0YWNoIHRvIHRoZSBhbmNob3IncyBvcmlnaW4uXG4gICAqXG4gICAqIE9wdGlvbnM6XG4gICAqIHZlcnRpY2FsOiBbdG9wLCBjZW50ZXIsIGJvdHRvbSwgeChweCldO1xuICAgKiBob3Jpem9udGFsOiBbbGVmdCwgY2VudGVyLCByaWdodCwgeChweCldLlxuICAgKi9cbiAgdHJhbnNmb3JtT3JpZ2luOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGhvcml6b250YWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2NlbnRlcicsICdsZWZ0JywgJ3JpZ2h0J10pLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZCxcbiAgICB2ZXJ0aWNhbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFsnYm90dG9tJywgJ2NlbnRlcicsICd0b3AnXSksIFByb3BUeXBlcy5udW1iZXJdKS5pc1JlcXVpcmVkXG4gIH0pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSB0cmFuc2l0aW9uLlxuICAgKiBbRm9sbG93IHRoaXMgZ3VpZGVdKC9jb21wb25lbnRzL3RyYW5zaXRpb25zLyN0cmFuc2l0aW9uY29tcG9uZW50LXByb3ApIHRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIHJlcXVpcmVtZW50cyBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBUcmFuc2l0aW9uQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFNldCB0byAnYXV0bycgdG8gYXV0b21hdGljYWxseSBjYWxjdWxhdGUgdHJhbnNpdGlvbiB0aW1lIGJhc2VkIG9uIGhlaWdodC5cbiAgICovXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFsnYXV0byddKSwgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhcHBlYXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZW50ZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZXhpdDogUHJvcFR5cGVzLm51bWJlclxuICB9KV0pLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYFRyYW5zaXRpb25gXShodHRwOi8vcmVhY3Rjb21tdW5pdHkub3JnL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvdHJhbnNpdGlvbiNUcmFuc2l0aW9uLXByb3BzKSBlbGVtZW50LlxuICAgKi9cbiAgVHJhbnNpdGlvblByb3BzOiBQcm9wVHlwZXMub2JqZWN0XG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVBvcG92ZXInXG59KShQb3BvdmVyKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGV4YWN0UHJvcCwgSFRNTEVsZW1lbnRUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBzZXRSZWYgZnJvbSAnLi4vdXRpbHMvc2V0UmVmJztcbmltcG9ydCB1c2VGb3JrUmVmIGZyb20gJy4uL3V0aWxzL3VzZUZvcmtSZWYnO1xuXG5mdW5jdGlvbiBnZXRDb250YWluZXIoY29udGFpbmVyKSB7XG4gIGNvbnRhaW5lciA9IHR5cGVvZiBjb250YWluZXIgPT09ICdmdW5jdGlvbicgPyBjb250YWluZXIoKSA6IGNvbnRhaW5lcjsgLy8gI1N0cmljdE1vZGUgcmVhZHlcblxuICByZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUoY29udGFpbmVyKTtcbn1cblxudmFyIHVzZUVuaGFuY2VkRWZmZWN0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBSZWFjdC51c2VMYXlvdXRFZmZlY3QgOiBSZWFjdC51c2VFZmZlY3Q7XG4vKipcbiAqIFBvcnRhbHMgcHJvdmlkZSBhIGZpcnN0LWNsYXNzIHdheSB0byByZW5kZXIgY2hpbGRyZW4gaW50byBhIERPTSBub2RlXG4gKiB0aGF0IGV4aXN0cyBvdXRzaWRlIHRoZSBET00gaGllcmFyY2h5IG9mIHRoZSBwYXJlbnQgY29tcG9uZW50LlxuICovXG5cbnZhciBQb3J0YWwgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBQb3J0YWwocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNvbnRhaW5lciA9IHByb3BzLmNvbnRhaW5lcixcbiAgICAgIF9wcm9wcyRkaXNhYmxlUG9ydGFsID0gcHJvcHMuZGlzYWJsZVBvcnRhbCxcbiAgICAgIGRpc2FibGVQb3J0YWwgPSBfcHJvcHMkZGlzYWJsZVBvcnRhbCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVBvcnRhbCxcbiAgICAgIG9uUmVuZGVyZWQgPSBwcm9wcy5vblJlbmRlcmVkO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShudWxsKSxcbiAgICAgIG1vdW50Tm9kZSA9IF9SZWFjdCR1c2VTdGF0ZVswXSxcbiAgICAgIHNldE1vdW50Tm9kZSA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgaGFuZGxlUmVmID0gdXNlRm9ya1JlZiggLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSA/IGNoaWxkcmVuLnJlZiA6IG51bGwsIHJlZik7XG4gIHVzZUVuaGFuY2VkRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWRpc2FibGVQb3J0YWwpIHtcbiAgICAgIHNldE1vdW50Tm9kZShnZXRDb250YWluZXIoY29udGFpbmVyKSB8fCBkb2N1bWVudC5ib2R5KTtcbiAgICB9XG4gIH0sIFtjb250YWluZXIsIGRpc2FibGVQb3J0YWxdKTtcbiAgdXNlRW5oYW5jZWRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChtb3VudE5vZGUgJiYgIWRpc2FibGVQb3J0YWwpIHtcbiAgICAgIHNldFJlZihyZWYsIG1vdW50Tm9kZSk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRSZWYocmVmLCBudWxsKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSwgW3JlZiwgbW91bnROb2RlLCBkaXNhYmxlUG9ydGFsXSk7XG4gIHVzZUVuaGFuY2VkRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAob25SZW5kZXJlZCAmJiAobW91bnROb2RlIHx8IGRpc2FibGVQb3J0YWwpKSB7XG4gICAgICBvblJlbmRlcmVkKCk7XG4gICAgfVxuICB9LCBbb25SZW5kZXJlZCwgbW91bnROb2RlLCBkaXNhYmxlUG9ydGFsXSk7XG5cbiAgaWYgKGRpc2FibGVQb3J0YWwpIHtcbiAgICBpZiAoIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgIHJlZjogaGFuZGxlUmVmXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICByZXR1cm4gbW91bnROb2RlID8gLyojX19QVVJFX18qL1JlYWN0RE9NLmNyZWF0ZVBvcnRhbChjaGlsZHJlbiwgbW91bnROb2RlKSA6IG1vdW50Tm9kZTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gUG9ydGFsLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjaGlsZHJlbiB0byByZW5kZXIgaW50byB0aGUgYGNvbnRhaW5lcmAuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIEEgSFRNTCBlbGVtZW50LCBjb21wb25lbnQgaW5zdGFuY2UsIG9yIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBlaXRoZXIuXG4gICAqIFRoZSBgY29udGFpbmVyYCB3aWxsIGhhdmUgdGhlIHBvcnRhbCBjaGlsZHJlbiBhcHBlbmRlZCB0byBpdC5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgaXQgdXNlcyB0aGUgYm9keSBvZiB0aGUgdG9wLWxldmVsIGRvY3VtZW50IG9iamVjdCxcbiAgICogc28gaXQncyBzaW1wbHkgYGRvY3VtZW50LmJvZHlgIG1vc3Qgb2YgdGhlIHRpbWUuXG4gICAqL1xuICBjb250YWluZXI6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5vbmVPZlR5cGUoW0hUTUxFbGVtZW50VHlwZSwgUHJvcFR5cGVzLmluc3RhbmNlT2YoUmVhY3QuQ29tcG9uZW50KSwgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUgcG9ydGFsIGJlaGF2aW9yLlxuICAgKiBUaGUgY2hpbGRyZW4gc3RheSB3aXRoaW4gaXQncyBwYXJlbnQgRE9NIGhpZXJhcmNoeS5cbiAgICovXG4gIGRpc2FibGVQb3J0YWw6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBvbmNlIHRoZSBjaGlsZHJlbiBoYXMgYmVlbiBtb3VudGVkIGludG8gdGhlIGBjb250YWluZXJgLlxuICAgKlxuICAgKiBUaGlzIHByb3Agd2lsbCBiZSBkZXByZWNhdGVkIGFuZCByZW1vdmVkIGluIHY1LCB0aGUgcmVmIGNhbiBiZSB1c2VkIGluc3RlYWQuXG4gICAqL1xuICBvblJlbmRlcmVkOiBQcm9wVHlwZXMuZnVuY1xufSA6IHZvaWQgMDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIFBvcnRhbFsncHJvcFR5cGVzJyArICcnXSA9IGV4YWN0UHJvcChQb3J0YWwucHJvcFR5cGVzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9ydGFsOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBtZXJnZUNsYXNzZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBTZWxlY3RJbnB1dCBmcm9tICcuL1NlbGVjdElucHV0JztcbmltcG9ydCBmb3JtQ29udHJvbFN0YXRlIGZyb20gJy4uL0Zvcm1Db250cm9sL2Zvcm1Db250cm9sU3RhdGUnO1xuaW1wb3J0IHVzZUZvcm1Db250cm9sIGZyb20gJy4uL0Zvcm1Db250cm9sL3VzZUZvcm1Db250cm9sJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBBcnJvd0Ryb3BEb3duSWNvbiBmcm9tICcuLi9pbnRlcm5hbC9zdmctaWNvbnMvQXJyb3dEcm9wRG93bic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vSW5wdXQnO1xuaW1wb3J0IHsgc3R5bGVzIGFzIG5hdGl2ZVNlbGVjdFN0eWxlcyB9IGZyb20gJy4uL05hdGl2ZVNlbGVjdC9OYXRpdmVTZWxlY3QnO1xuaW1wb3J0IE5hdGl2ZVNlbGVjdElucHV0IGZyb20gJy4uL05hdGl2ZVNlbGVjdC9OYXRpdmVTZWxlY3RJbnB1dCc7XG5pbXBvcnQgRmlsbGVkSW5wdXQgZnJvbSAnLi4vRmlsbGVkSW5wdXQnO1xuaW1wb3J0IE91dGxpbmVkSW5wdXQgZnJvbSAnLi4vT3V0bGluZWRJbnB1dCc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IG5hdGl2ZVNlbGVjdFN0eWxlcztcblxudmFyIF9yZWYgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgbnVsbCk7XG5cbnZhciBfcmVmMiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZpbGxlZElucHV0LCBudWxsKTtcblxudmFyIFNlbGVjdCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFNlbGVjdChwcm9wcywgcmVmKSB7XG4gIHZhciBfcHJvcHMkYXV0b1dpZHRoID0gcHJvcHMuYXV0b1dpZHRoLFxuICAgICAgYXV0b1dpZHRoID0gX3Byb3BzJGF1dG9XaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkYXV0b1dpZHRoLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgX3Byb3BzJGRpc3BsYXlFbXB0eSA9IHByb3BzLmRpc3BsYXlFbXB0eSxcbiAgICAgIGRpc3BsYXlFbXB0eSA9IF9wcm9wcyRkaXNwbGF5RW1wdHkgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc3BsYXlFbXB0eSxcbiAgICAgIF9wcm9wcyRJY29uQ29tcG9uZW50ID0gcHJvcHMuSWNvbkNvbXBvbmVudCxcbiAgICAgIEljb25Db21wb25lbnQgPSBfcHJvcHMkSWNvbkNvbXBvbmVudCA9PT0gdm9pZCAwID8gQXJyb3dEcm9wRG93bkljb24gOiBfcHJvcHMkSWNvbkNvbXBvbmVudCxcbiAgICAgIGlkID0gcHJvcHMuaWQsXG4gICAgICBpbnB1dCA9IHByb3BzLmlucHV0LFxuICAgICAgaW5wdXRQcm9wcyA9IHByb3BzLmlucHV0UHJvcHMsXG4gICAgICBsYWJlbCA9IHByb3BzLmxhYmVsLFxuICAgICAgbGFiZWxJZCA9IHByb3BzLmxhYmVsSWQsXG4gICAgICBfcHJvcHMkbGFiZWxXaWR0aCA9IHByb3BzLmxhYmVsV2lkdGgsXG4gICAgICBsYWJlbFdpZHRoID0gX3Byb3BzJGxhYmVsV2lkdGggPT09IHZvaWQgMCA/IDAgOiBfcHJvcHMkbGFiZWxXaWR0aCxcbiAgICAgIE1lbnVQcm9wcyA9IHByb3BzLk1lbnVQcm9wcyxcbiAgICAgIF9wcm9wcyRtdWx0aXBsZSA9IHByb3BzLm11bHRpcGxlLFxuICAgICAgbXVsdGlwbGUgPSBfcHJvcHMkbXVsdGlwbGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJG11bHRpcGxlLFxuICAgICAgX3Byb3BzJG5hdGl2ZSA9IHByb3BzLm5hdGl2ZSxcbiAgICAgIG5hdGl2ZSA9IF9wcm9wcyRuYXRpdmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJG5hdGl2ZSxcbiAgICAgIG9uQ2xvc2UgPSBwcm9wcy5vbkNsb3NlLFxuICAgICAgb25PcGVuID0gcHJvcHMub25PcGVuLFxuICAgICAgb3BlbiA9IHByb3BzLm9wZW4sXG4gICAgICByZW5kZXJWYWx1ZSA9IHByb3BzLnJlbmRlclZhbHVlLFxuICAgICAgU2VsZWN0RGlzcGxheVByb3BzID0gcHJvcHMuU2VsZWN0RGlzcGxheVByb3BzLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudFByb3BzID0gX3Byb3BzJHZhcmlhbnQgPT09IHZvaWQgMCA/ICdzdGFuZGFyZCcgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhdXRvV2lkdGhcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJkaXNwbGF5RW1wdHlcIiwgXCJJY29uQ29tcG9uZW50XCIsIFwiaWRcIiwgXCJpbnB1dFwiLCBcImlucHV0UHJvcHNcIiwgXCJsYWJlbFwiLCBcImxhYmVsSWRcIiwgXCJsYWJlbFdpZHRoXCIsIFwiTWVudVByb3BzXCIsIFwibXVsdGlwbGVcIiwgXCJuYXRpdmVcIiwgXCJvbkNsb3NlXCIsIFwib25PcGVuXCIsIFwib3BlblwiLCBcInJlbmRlclZhbHVlXCIsIFwiU2VsZWN0RGlzcGxheVByb3BzXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgdmFyIGlucHV0Q29tcG9uZW50ID0gbmF0aXZlID8gTmF0aXZlU2VsZWN0SW5wdXQgOiBTZWxlY3RJbnB1dDtcbiAgdmFyIG11aUZvcm1Db250cm9sID0gdXNlRm9ybUNvbnRyb2woKTtcbiAgdmFyIGZjcyA9IGZvcm1Db250cm9sU3RhdGUoe1xuICAgIHByb3BzOiBwcm9wcyxcbiAgICBtdWlGb3JtQ29udHJvbDogbXVpRm9ybUNvbnRyb2wsXG4gICAgc3RhdGVzOiBbJ3ZhcmlhbnQnXVxuICB9KTtcbiAgdmFyIHZhcmlhbnQgPSBmY3MudmFyaWFudCB8fCB2YXJpYW50UHJvcHM7XG4gIHZhciBJbnB1dENvbXBvbmVudCA9IGlucHV0IHx8IHtcbiAgICBzdGFuZGFyZDogX3JlZixcbiAgICBvdXRsaW5lZDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoT3V0bGluZWRJbnB1dCwge1xuICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgbGFiZWxXaWR0aDogbGFiZWxXaWR0aFxuICAgIH0pLFxuICAgIGZpbGxlZDogX3JlZjJcbiAgfVt2YXJpYW50XTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoSW5wdXRDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAvLyBNb3N0IG9mIHRoZSBsb2dpYyBpcyBpbXBsZW1lbnRlZCBpbiBgU2VsZWN0SW5wdXRgLlxuICAgIC8vIFRoZSBgU2VsZWN0YCBjb21wb25lbnQgaXMgYSBzaW1wbGUgQVBJIHdyYXBwZXIgdG8gZXhwb3NlIHNvbWV0aGluZyBiZXR0ZXIgdG8gcGxheSB3aXRoLlxuICAgIGlucHV0Q29tcG9uZW50OiBpbnB1dENvbXBvbmVudCxcbiAgICBpbnB1dFByb3BzOiBfZXh0ZW5kcyh7XG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICBJY29uQ29tcG9uZW50OiBJY29uQ29tcG9uZW50LFxuICAgICAgdmFyaWFudDogdmFyaWFudCxcbiAgICAgIHR5cGU6IHVuZGVmaW5lZCxcbiAgICAgIC8vIFdlIHJlbmRlciBhIHNlbGVjdC4gV2UgY2FuIGlnbm9yZSB0aGUgdHlwZSBwcm92aWRlZCBieSB0aGUgYElucHV0YC5cbiAgICAgIG11bHRpcGxlOiBtdWx0aXBsZVxuICAgIH0sIG5hdGl2ZSA/IHtcbiAgICAgIGlkOiBpZFxuICAgIH0gOiB7XG4gICAgICBhdXRvV2lkdGg6IGF1dG9XaWR0aCxcbiAgICAgIGRpc3BsYXlFbXB0eTogZGlzcGxheUVtcHR5LFxuICAgICAgbGFiZWxJZDogbGFiZWxJZCxcbiAgICAgIE1lbnVQcm9wczogTWVudVByb3BzLFxuICAgICAgb25DbG9zZTogb25DbG9zZSxcbiAgICAgIG9uT3Blbjogb25PcGVuLFxuICAgICAgb3Blbjogb3BlbixcbiAgICAgIHJlbmRlclZhbHVlOiByZW5kZXJWYWx1ZSxcbiAgICAgIFNlbGVjdERpc3BsYXlQcm9wczogX2V4dGVuZHMoe1xuICAgICAgICBpZDogaWRcbiAgICAgIH0sIFNlbGVjdERpc3BsYXlQcm9wcylcbiAgICB9LCBpbnB1dFByb3BzLCB7XG4gICAgICBjbGFzc2VzOiBpbnB1dFByb3BzID8gbWVyZ2VDbGFzc2VzKHtcbiAgICAgICAgYmFzZUNsYXNzZXM6IGNsYXNzZXMsXG4gICAgICAgIG5ld0NsYXNzZXM6IGlucHV0UHJvcHMuY2xhc3NlcyxcbiAgICAgICAgQ29tcG9uZW50OiBTZWxlY3RcbiAgICAgIH0pIDogY2xhc3Nlc1xuICAgIH0sIGlucHV0ID8gaW5wdXQucHJvcHMuaW5wdXRQcm9wcyA6IHt9KSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTZWxlY3QucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgd2lkdGggb2YgdGhlIHBvcG92ZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIHNldCBhY2NvcmRpbmcgdG8gdGhlIGl0ZW1zIGluc2lkZSB0aGVcbiAgICogbWVudSwgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgYXQgbGVhc3QgdGhlIHdpZHRoIG9mIHRoZSBzZWxlY3QgaW5wdXQuXG4gICAqL1xuICBhdXRvV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgb3B0aW9uIGVsZW1lbnRzIHRvIHBvcHVsYXRlIHRoZSBzZWxlY3Qgd2l0aC5cbiAgICogQ2FuIGJlIHNvbWUgYE1lbnVJdGVtYCB3aGVuIGBuYXRpdmVgIGlzIGZhbHNlIGFuZCBgb3B0aW9uYCB3aGVuIGBuYXRpdmVgIGlzIHRydWUuXG4gICAqXG4gICAqIOKaoO+4j1RoZSBgTWVudUl0ZW1gIGVsZW1lbnRzICoqbXVzdCoqIGJlIGRpcmVjdCBkZXNjZW5kYW50cyB3aGVuIGBuYXRpdmVgIGlzIGZhbHNlLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGVsZW1lbnQgdmFsdWUuIFVzZSB3aGVuIHRoZSBjb21wb25lbnQgaXMgbm90IGNvbnRyb2xsZWQuXG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYSB2YWx1ZSBpcyBkaXNwbGF5ZWQgZXZlbiBpZiBubyBpdGVtcyBhcmUgc2VsZWN0ZWQuXG4gICAqXG4gICAqIEluIG9yZGVyIHRvIGRpc3BsYXkgYSBtZWFuaW5nZnVsIHZhbHVlLCBhIGZ1bmN0aW9uIHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIGByZW5kZXJWYWx1ZWAgcHJvcCB3aGljaCByZXR1cm5zIHRoZSB2YWx1ZSB0byBiZSBkaXNwbGF5ZWQgd2hlbiBubyBpdGVtcyBhcmUgc2VsZWN0ZWQuXG4gICAqIFlvdSBjYW4gb25seSB1c2UgaXQgd2hlbiB0aGUgYG5hdGl2ZWAgcHJvcCBpcyBgZmFsc2VgIChkZWZhdWx0KS5cbiAgICovXG4gIGRpc3BsYXlFbXB0eTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIHRoYXQgZGlzcGxheXMgdGhlIGFycm93LlxuICAgKi9cbiAgSWNvbkNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBUaGUgYGlkYCBvZiB0aGUgd3JhcHBlciBlbGVtZW50IG9yIHRoZSBgc2VsZWN0YCBlbGVtZW50IHdoZW4gYG5hdGl2ZWAuXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQW4gYElucHV0YCBlbGVtZW50OyBkb2VzIG5vdCBoYXZlIHRvIGJlIGEgbWF0ZXJpYWwtdWkgc3BlY2lmaWMgYElucHV0YC5cbiAgICovXG4gIGlucHV0OiBQcm9wVHlwZXMuZWxlbWVudCxcblxuICAvKipcbiAgICogW0F0dHJpYnV0ZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNBdHRyaWJ1dGVzKSBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqIFdoZW4gYG5hdGl2ZWAgaXMgYHRydWVgLCB0aGUgYXR0cmlidXRlcyBhcmUgYXBwbGllZCBvbiB0aGUgYHNlbGVjdGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFNlZSBbT3V0bGluZWRJbnB1dCNsYWJlbF0oL2FwaS9vdXRsaW5lZC1pbnB1dC8jcHJvcHMpXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFRoZSBJRCBvZiBhbiBlbGVtZW50IHRoYXQgYWN0cyBhcyBhbiBhZGRpdGlvbmFsIGxhYmVsLiBUaGUgU2VsZWN0IHdpbGxcbiAgICogYmUgbGFiZWxsZWQgYnkgdGhlIGFkZGl0aW9uYWwgbGFiZWwgYW5kIHRoZSBzZWxlY3RlZCB2YWx1ZS5cbiAgICovXG4gIGxhYmVsSWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFNlZSBbT3V0bGluZWRJbnB1dCNsYWJlbF0oL2FwaS9vdXRsaW5lZC1pbnB1dC8jcHJvcHMpXG4gICAqL1xuICBsYWJlbFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYE1lbnVgXSgvYXBpL21lbnUvKSBlbGVtZW50LlxuICAgKi9cbiAgTWVudVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGB2YWx1ZWAgbXVzdCBiZSBhbiBhcnJheSBhbmQgdGhlIG1lbnUgd2lsbCBzdXBwb3J0IG11bHRpcGxlIHNlbGVjdGlvbnMuXG4gICAqL1xuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGNvbXBvbmVudCB3aWxsIGJlIHVzaW5nIGEgbmF0aXZlIGBzZWxlY3RgIGVsZW1lbnQuXG4gICAqL1xuICBuYXRpdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIGEgbWVudSBpdGVtIGlzIHNlbGVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIFlvdSBjYW4gcHVsbCBvdXQgdGhlIG5ldyB2YWx1ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC52YWx1ZWAgKGFueSkuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbY2hpbGRdIFRoZSByZWFjdCBlbGVtZW50IHRoYXQgd2FzIHNlbGVjdGVkIHdoZW4gYG5hdGl2ZWAgaXMgYGZhbHNlYCAoZGVmYXVsdCkuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCByZXF1ZXN0cyB0byBiZSBjbG9zZWQuXG4gICAqIFVzZSBpbiBjb250cm9sbGVkIG1vZGUgKHNlZSBvcGVuKS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCByZXF1ZXN0cyB0byBiZSBvcGVuZWQuXG4gICAqIFVzZSBpbiBjb250cm9sbGVkIG1vZGUgKHNlZSBvcGVuKS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKi9cbiAgb25PcGVuOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ29udHJvbCBgc2VsZWN0YCBvcGVuIHN0YXRlLlxuICAgKiBZb3UgY2FuIG9ubHkgdXNlIGl0IHdoZW4gdGhlIGBuYXRpdmVgIHByb3AgaXMgYGZhbHNlYCAoZGVmYXVsdCkuXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBzZWxlY3RlZCB2YWx1ZS5cbiAgICogWW91IGNhbiBvbmx5IHVzZSBpdCB3aGVuIHRoZSBgbmF0aXZlYCBwcm9wIGlzIGBmYWxzZWAgKGRlZmF1bHQpLlxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgVGhlIGB2YWx1ZWAgcHJvdmlkZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogQHJldHVybnMge1JlYWN0Tm9kZX1cbiAgICovXG4gIHJlbmRlclZhbHVlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgY2xpY2thYmxlIGRpdiBlbGVtZW50LlxuICAgKi9cbiAgU2VsZWN0RGlzcGxheVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUaGUgaW5wdXQgdmFsdWUuIFByb3ZpZGluZyBhbiBlbXB0eSBzdHJpbmcgd2lsbCBzZWxlY3Qgbm8gb3B0aW9ucy5cbiAgICogVGhpcyBwcm9wIGlzIHJlcXVpcmVkIHdoZW4gdGhlIGBuYXRpdmVgIHByb3AgaXMgYGZhbHNlYCAoZGVmYXVsdCkuXG4gICAqIFNldCB0byBhbiBlbXB0eSBzdHJpbmcgYCcnYCBpZiB5b3UgZG9uJ3Qgd2FudCBhbnkgb2YgdGhlIGF2YWlsYWJsZSBvcHRpb25zIHRvIGJlIHNlbGVjdGVkLlxuICAgKlxuICAgKiBJZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0IGl0IG11c3QgaGF2ZSByZWZlcmVuY2UgZXF1YWxpdHkgd2l0aCB0aGUgb3B0aW9uIGluIG9yZGVyIHRvIGJlIHNlbGVjdGVkLlxuICAgKiBJZiB0aGUgdmFsdWUgaXMgbm90IGFuIG9iamVjdCwgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBtdXN0IG1hdGNoIHdpdGggdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgb3B0aW9uIGluIG9yZGVyIHRvIGJlIHNlbGVjdGVkLlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2ZpbGxlZCcsICdvdXRsaW5lZCcsICdzdGFuZGFyZCddKVxufSA6IHZvaWQgMDtcblNlbGVjdC5tdWlOYW1lID0gJ1NlbGVjdCc7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpU2VsZWN0J1xufSkoU2VsZWN0KTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS91dGlsc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNGcmFnbWVudCB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJy4uL3V0aWxzL293bmVyRG9jdW1lbnQnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5pbXBvcnQgeyByZWZUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBNZW51IGZyb20gJy4uL01lbnUvTWVudSc7XG5pbXBvcnQgeyBpc0ZpbGxlZCB9IGZyb20gJy4uL0lucHV0QmFzZS91dGlscyc7XG5pbXBvcnQgdXNlRm9ya1JlZiBmcm9tICcuLi91dGlscy91c2VGb3JrUmVmJztcbmltcG9ydCB1c2VDb250cm9sbGVkIGZyb20gJy4uL3V0aWxzL3VzZUNvbnRyb2xsZWQnO1xuXG5mdW5jdGlvbiBhcmVFcXVhbFZhbHVlcyhhLCBiKSB7XG4gIGlmIChfdHlwZW9mKGIpID09PSAnb2JqZWN0JyAmJiBiICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGEgPT09IGI7XG4gIH1cblxuICByZXR1cm4gU3RyaW5nKGEpID09PSBTdHJpbmcoYik7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkoZGlzcGxheSkge1xuICByZXR1cm4gZGlzcGxheSA9PSBudWxsIHx8IHR5cGVvZiBkaXNwbGF5ID09PSAnc3RyaW5nJyAmJiAhZGlzcGxheS50cmltKCk7XG59XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxuXG52YXIgU2VsZWN0SW5wdXQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBTZWxlY3RJbnB1dChwcm9wcywgcmVmKSB7XG4gIHZhciBhcmlhTGFiZWwgPSBwcm9wc1snYXJpYS1sYWJlbCddLFxuICAgICAgYXV0b0ZvY3VzID0gcHJvcHMuYXV0b0ZvY3VzLFxuICAgICAgYXV0b1dpZHRoID0gcHJvcHMuYXV0b1dpZHRoLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGRpc3BsYXlFbXB0eSA9IHByb3BzLmRpc3BsYXlFbXB0eSxcbiAgICAgIEljb25Db21wb25lbnQgPSBwcm9wcy5JY29uQ29tcG9uZW50LFxuICAgICAgaW5wdXRSZWZQcm9wID0gcHJvcHMuaW5wdXRSZWYsXG4gICAgICBsYWJlbElkID0gcHJvcHMubGFiZWxJZCxcbiAgICAgIF9wcm9wcyRNZW51UHJvcHMgPSBwcm9wcy5NZW51UHJvcHMsXG4gICAgICBNZW51UHJvcHMgPSBfcHJvcHMkTWVudVByb3BzID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRNZW51UHJvcHMsXG4gICAgICBtdWx0aXBsZSA9IHByb3BzLm11bHRpcGxlLFxuICAgICAgbmFtZSA9IHByb3BzLm5hbWUsXG4gICAgICBvbkJsdXIgPSBwcm9wcy5vbkJsdXIsXG4gICAgICBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgb25DbG9zZSA9IHByb3BzLm9uQ2xvc2UsXG4gICAgICBvbkZvY3VzID0gcHJvcHMub25Gb2N1cyxcbiAgICAgIG9uT3BlbiA9IHByb3BzLm9uT3BlbixcbiAgICAgIG9wZW5Qcm9wID0gcHJvcHMub3BlbixcbiAgICAgIHJlYWRPbmx5ID0gcHJvcHMucmVhZE9ubHksXG4gICAgICByZW5kZXJWYWx1ZSA9IHByb3BzLnJlbmRlclZhbHVlLFxuICAgICAgX3Byb3BzJFNlbGVjdERpc3BsYXlQID0gcHJvcHMuU2VsZWN0RGlzcGxheVByb3BzLFxuICAgICAgU2VsZWN0RGlzcGxheVByb3BzID0gX3Byb3BzJFNlbGVjdERpc3BsYXlQID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRTZWxlY3REaXNwbGF5UCxcbiAgICAgIHRhYkluZGV4UHJvcCA9IHByb3BzLnRhYkluZGV4LFxuICAgICAgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICB2YWx1ZVByb3AgPSBwcm9wcy52YWx1ZSxcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ3N0YW5kYXJkJyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImFyaWEtbGFiZWxcIiwgXCJhdXRvRm9jdXNcIiwgXCJhdXRvV2lkdGhcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJkZWZhdWx0VmFsdWVcIiwgXCJkaXNhYmxlZFwiLCBcImRpc3BsYXlFbXB0eVwiLCBcIkljb25Db21wb25lbnRcIiwgXCJpbnB1dFJlZlwiLCBcImxhYmVsSWRcIiwgXCJNZW51UHJvcHNcIiwgXCJtdWx0aXBsZVwiLCBcIm5hbWVcIiwgXCJvbkJsdXJcIiwgXCJvbkNoYW5nZVwiLCBcIm9uQ2xvc2VcIiwgXCJvbkZvY3VzXCIsIFwib25PcGVuXCIsIFwib3BlblwiLCBcInJlYWRPbmx5XCIsIFwicmVuZGVyVmFsdWVcIiwgXCJTZWxlY3REaXNwbGF5UHJvcHNcIiwgXCJ0YWJJbmRleFwiLCBcInR5cGVcIiwgXCJ2YWx1ZVwiLCBcInZhcmlhbnRcIl0pO1xuXG4gIHZhciBfdXNlQ29udHJvbGxlZCA9IHVzZUNvbnRyb2xsZWQoe1xuICAgIGNvbnRyb2xsZWQ6IHZhbHVlUHJvcCxcbiAgICBkZWZhdWx0OiBkZWZhdWx0VmFsdWUsXG4gICAgbmFtZTogJ1NlbGVjdCdcbiAgfSksXG4gICAgICBfdXNlQ29udHJvbGxlZDIgPSBfc2xpY2VkVG9BcnJheShfdXNlQ29udHJvbGxlZCwgMiksXG4gICAgICB2YWx1ZSA9IF91c2VDb250cm9sbGVkMlswXSxcbiAgICAgIHNldFZhbHVlID0gX3VzZUNvbnRyb2xsZWQyWzFdO1xuXG4gIHZhciBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUobnVsbCksXG4gICAgICBkaXNwbGF5Tm9kZSA9IF9SZWFjdCR1c2VTdGF0ZVswXSxcbiAgICAgIHNldERpc3BsYXlOb2RlID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBfUmVhY3QkdXNlUmVmID0gUmVhY3QudXNlUmVmKG9wZW5Qcm9wICE9IG51bGwpLFxuICAgICAgaXNPcGVuQ29udHJvbGxlZCA9IF9SZWFjdCR1c2VSZWYuY3VycmVudDtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMiA9IFJlYWN0LnVzZVN0YXRlKCksXG4gICAgICBtZW51TWluV2lkdGhTdGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRNZW51TWluV2lkdGhTdGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTMgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksXG4gICAgICBvcGVuU3RhdGUgPSBfUmVhY3QkdXNlU3RhdGUzWzBdLFxuICAgICAgc2V0T3BlblN0YXRlID0gX1JlYWN0JHVzZVN0YXRlM1sxXTtcblxuICB2YXIgaGFuZGxlUmVmID0gdXNlRm9ya1JlZihyZWYsIGlucHV0UmVmUHJvcCk7XG4gIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUoaGFuZGxlUmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvY3VzOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgZGlzcGxheU5vZGUuZm9jdXMoKTtcbiAgICAgIH0sXG4gICAgICBub2RlOiBpbnB1dFJlZi5jdXJyZW50LFxuICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfTtcbiAgfSwgW2Rpc3BsYXlOb2RlLCB2YWx1ZV0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChhdXRvRm9jdXMgJiYgZGlzcGxheU5vZGUpIHtcbiAgICAgIGRpc3BsYXlOb2RlLmZvY3VzKCk7XG4gICAgfVxuICB9LCBbYXV0b0ZvY3VzLCBkaXNwbGF5Tm9kZV0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChkaXNwbGF5Tm9kZSkge1xuICAgICAgdmFyIGxhYmVsID0gb3duZXJEb2N1bWVudChkaXNwbGF5Tm9kZSkuZ2V0RWxlbWVudEJ5SWQobGFiZWxJZCk7XG5cbiAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgaWYgKGdldFNlbGVjdGlvbigpLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICBkaXNwbGF5Tm9kZS5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxhYmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcik7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSwgW2xhYmVsSWQsIGRpc3BsYXlOb2RlXSk7XG5cbiAgdmFyIHVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZShvcGVuLCBldmVudCkge1xuICAgIGlmIChvcGVuKSB7XG4gICAgICBpZiAob25PcGVuKSB7XG4gICAgICAgIG9uT3BlbihldmVudCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvbkNsb3NlKSB7XG4gICAgICBvbkNsb3NlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoIWlzT3BlbkNvbnRyb2xsZWQpIHtcbiAgICAgIHNldE1lbnVNaW5XaWR0aFN0YXRlKGF1dG9XaWR0aCA/IG51bGwgOiBkaXNwbGF5Tm9kZS5jbGllbnRXaWR0aCk7XG4gICAgICBzZXRPcGVuU3RhdGUob3Blbik7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVNb3VzZURvd24gPSBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgICAvLyBJZ25vcmUgZXZlcnl0aGluZyBidXQgbGVmdC1jbGlja1xuICAgIGlmIChldmVudC5idXR0b24gIT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEhpamFjayB0aGUgZGVmYXVsdCBmb2N1cyBiZWhhdmlvci5cblxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkaXNwbGF5Tm9kZS5mb2N1cygpO1xuICAgIHVwZGF0ZSh0cnVlLCBldmVudCk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUNsb3NlID0gZnVuY3Rpb24gaGFuZGxlQ2xvc2UoZXZlbnQpIHtcbiAgICB1cGRhdGUoZmFsc2UsIGV2ZW50KTtcbiAgfTtcblxuICB2YXIgY2hpbGRyZW5BcnJheSA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pOyAvLyBTdXBwb3J0IGF1dG9maWxsLlxuXG4gIHZhciBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB2YXIgaW5kZXggPSBjaGlsZHJlbkFycmF5Lm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHJldHVybiBjaGlsZC5wcm9wcy52YWx1ZTtcbiAgICB9KS5pbmRleE9mKGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5BcnJheVtpbmRleF07XG4gICAgc2V0VmFsdWUoY2hpbGQucHJvcHMudmFsdWUpO1xuXG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShldmVudCwgY2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlSXRlbUNsaWNrID0gZnVuY3Rpb24gaGFuZGxlSXRlbUNsaWNrKGNoaWxkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgICB1cGRhdGUoZmFsc2UsIGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld1ZhbHVlO1xuXG4gICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLnNsaWNlKCkgOiBbXTtcbiAgICAgICAgdmFyIGl0ZW1JbmRleCA9IHZhbHVlLmluZGV4T2YoY2hpbGQucHJvcHMudmFsdWUpO1xuXG4gICAgICAgIGlmIChpdGVtSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgbmV3VmFsdWUucHVzaChjaGlsZC5wcm9wcy52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VmFsdWUuc3BsaWNlKGl0ZW1JbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1ZhbHVlID0gY2hpbGQucHJvcHMudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZC5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xuXG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgZXZlbnQucGVyc2lzdCgpOyAvLyBQcmVhY3Qgc3VwcG9ydCwgdGFyZ2V0IGlzIHJlYWQgb25seSBwcm9wZXJ0eSBvbiBhIG5hdGl2ZSBldmVudC5cblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlbnQsICd0YXJnZXQnLCB7XG4gICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBvbkNoYW5nZShldmVudCwgY2hpbGQpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGhhbmRsZUtleURvd24gPSBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKCFyZWFkT25seSkge1xuICAgICAgdmFyIHZhbGlkS2V5cyA9IFsnICcsICdBcnJvd1VwJywgJ0Fycm93RG93bicsIC8vIFRoZSBuYXRpdmUgc2VsZWN0IGRvZXNuJ3QgcmVzcG9uZCB0byBlbnRlciBvbiBNYWNPUywgYnV0IGl0J3MgcmVjb21tZW5kZWQgYnlcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS1wcmFjdGljZXMvZXhhbXBsZXMvbGlzdGJveC9saXN0Ym94LWNvbGxhcHNpYmxlLmh0bWxcbiAgICAgICdFbnRlciddO1xuXG4gICAgICBpZiAodmFsaWRLZXlzLmluZGV4T2YoZXZlbnQua2V5KSAhPT0gLTEpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdXBkYXRlKHRydWUsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIG9wZW4gPSBkaXNwbGF5Tm9kZSAhPT0gbnVsbCAmJiAoaXNPcGVuQ29udHJvbGxlZCA/IG9wZW5Qcm9wIDogb3BlblN0YXRlKTtcblxuICB2YXIgaGFuZGxlQmx1ciA9IGZ1bmN0aW9uIGhhbmRsZUJsdXIoZXZlbnQpIHtcbiAgICAvLyBpZiBvcGVuIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvblxuICAgIGlmICghb3BlbiAmJiBvbkJsdXIpIHtcbiAgICAgIGV2ZW50LnBlcnNpc3QoKTsgLy8gUHJlYWN0IHN1cHBvcnQsIHRhcmdldCBpcyByZWFkIG9ubHkgcHJvcGVydHkgb24gYSBuYXRpdmUgZXZlbnQuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgJ3RhcmdldCcsIHtcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBvbkJsdXIoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBkZWxldGUgb3RoZXJbJ2FyaWEtaW52YWxpZCddO1xuICB2YXIgZGlzcGxheTtcbiAgdmFyIGRpc3BsYXlTaW5nbGU7XG4gIHZhciBkaXNwbGF5TXVsdGlwbGUgPSBbXTtcbiAgdmFyIGNvbXB1dGVEaXNwbGF5ID0gZmFsc2U7XG4gIHZhciBmb3VuZE1hdGNoID0gZmFsc2U7IC8vIE5vIG5lZWQgdG8gZGlzcGxheSBhbnkgdmFsdWUgaWYgdGhlIGZpZWxkIGlzIGVtcHR5LlxuXG4gIGlmIChpc0ZpbGxlZCh7XG4gICAgdmFsdWU6IHZhbHVlXG4gIH0pIHx8IGRpc3BsYXlFbXB0eSkge1xuICAgIGlmIChyZW5kZXJWYWx1ZSkge1xuICAgICAgZGlzcGxheSA9IHJlbmRlclZhbHVlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcHV0ZURpc3BsYXkgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpdGVtcyA9IGNoaWxkcmVuQXJyYXkubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmICghIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoaXNGcmFnbWVudChjaGlsZCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIFNlbGVjdCBjb21wb25lbnQgZG9lc24ndCBhY2NlcHQgYSBGcmFnbWVudCBhcyBhIGNoaWxkLlwiLCAnQ29uc2lkZXIgcHJvdmlkaW5nIGFuIGFycmF5IGluc3RlYWQuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBzZWxlY3RlZDtcblxuICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogVGhlIGB2YWx1ZWAgcHJvcCBtdXN0IGJlIGFuIGFycmF5IHdoZW4gdXNpbmcgdGhlIGBTZWxlY3RgIGNvbXBvbmVudCB3aXRoIGBtdWx0aXBsZWAuXCIgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDIpKTtcbiAgICAgIH1cblxuICAgICAgc2VsZWN0ZWQgPSB2YWx1ZS5zb21lKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBhcmVFcXVhbFZhbHVlcyh2LCBjaGlsZC5wcm9wcy52YWx1ZSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHNlbGVjdGVkICYmIGNvbXB1dGVEaXNwbGF5KSB7XG4gICAgICAgIGRpc3BsYXlNdWx0aXBsZS5wdXNoKGNoaWxkLnByb3BzLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0ZWQgPSBhcmVFcXVhbFZhbHVlcyh2YWx1ZSwgY2hpbGQucHJvcHMudmFsdWUpO1xuXG4gICAgICBpZiAoc2VsZWN0ZWQgJiYgY29tcHV0ZURpc3BsYXkpIHtcbiAgICAgICAgZGlzcGxheVNpbmdsZSA9IGNoaWxkLnByb3BzLmNoaWxkcmVuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgZm91bmRNYXRjaCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICdhcmlhLXNlbGVjdGVkJzogc2VsZWN0ZWQgPyAndHJ1ZScgOiB1bmRlZmluZWQsXG4gICAgICBvbkNsaWNrOiBoYW5kbGVJdGVtQ2xpY2soY2hpbGQpLFxuICAgICAgb25LZXlVcDogZnVuY3Rpb24gb25LZXlVcChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnICcpIHtcbiAgICAgICAgICAvLyBvdGhlcndpc2Ugb3VyIE1lbnVJdGVtcyBkaXNwYXRjaGVzIGEgY2xpY2sgZXZlbnRcbiAgICAgICAgICAvLyBpdCdzIG5vdCBiZWhhdmlvciBvZiB0aGUgbmF0aXZlIDxvcHRpb24+IGFuZCBjYXVzZXNcbiAgICAgICAgICAvLyB0aGUgc2VsZWN0IHRvIGNsb3NlIGltbWVkaWF0ZWx5IHNpbmNlIHdlIG9wZW4gb24gc3BhY2Uga2V5ZG93blxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGQucHJvcHMub25LZXlVcCkge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uS2V5VXAoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcm9sZTogJ29wdGlvbicsXG4gICAgICBzZWxlY3RlZDogc2VsZWN0ZWQsXG4gICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgLy8gVGhlIHZhbHVlIGlzIG1vc3QgbGlrZWx5IG5vdCBhIHZhbGlkIEhUTUwgYXR0cmlidXRlLlxuICAgICAgJ2RhdGEtdmFsdWUnOiBjaGlsZC5wcm9wcy52YWx1ZSAvLyBJbnN0ZWFkLCB3ZSBwcm92aWRlIGl0IGFzIGEgZGF0YSBhdHRyaWJ1dGUuXG5cbiAgICB9KTtcbiAgfSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFmb3VuZE1hdGNoICYmICFtdWx0aXBsZSAmJiB2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IGNoaWxkcmVuQXJyYXkubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgIHJldHVybiBjaGlsZC5wcm9wcy52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUud2FybihbXCJNYXRlcmlhbC1VSTogWW91IGhhdmUgcHJvdmlkZWQgYW4gb3V0LW9mLXJhbmdlIHZhbHVlIGBcIi5jb25jYXQodmFsdWUsIFwiYCBmb3IgdGhlIHNlbGVjdCBcIikuY29uY2F0KG5hbWUgPyBcIihuYW1lPVxcXCJcIi5jb25jYXQobmFtZSwgXCJcXFwiKSBcIikgOiAnJywgXCJjb21wb25lbnQuXCIpLCBcIkNvbnNpZGVyIHByb3ZpZGluZyBhIHZhbHVlIHRoYXQgbWF0Y2hlcyBvbmUgb2YgdGhlIGF2YWlsYWJsZSBvcHRpb25zIG9yICcnLlwiLCBcIlRoZSBhdmFpbGFibGUgdmFsdWVzIGFyZSBcIi5jb25jYXQodmFsdWVzLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgICAgIHJldHVybiB4ICE9IG51bGw7XG4gICAgICAgIH0pLm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgIHJldHVybiBcImBcIi5jb25jYXQoeCwgXCJgXCIpO1xuICAgICAgICB9KS5qb2luKCcsICcpIHx8ICdcIlwiJywgXCIuXCIpXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfSwgW2ZvdW5kTWF0Y2gsIGNoaWxkcmVuQXJyYXksIG11bHRpcGxlLCBuYW1lLCB2YWx1ZV0pO1xuICB9XG5cbiAgaWYgKGNvbXB1dGVEaXNwbGF5KSB7XG4gICAgZGlzcGxheSA9IG11bHRpcGxlID8gZGlzcGxheU11bHRpcGxlLmpvaW4oJywgJykgOiBkaXNwbGF5U2luZ2xlO1xuICB9IC8vIEF2b2lkIHBlcmZvcm1pbmcgYSBsYXlvdXQgY29tcHV0YXRpb24gaW4gdGhlIHJlbmRlciBtZXRob2QuXG5cblxuICB2YXIgbWVudU1pbldpZHRoID0gbWVudU1pbldpZHRoU3RhdGU7XG5cbiAgaWYgKCFhdXRvV2lkdGggJiYgaXNPcGVuQ29udHJvbGxlZCAmJiBkaXNwbGF5Tm9kZSkge1xuICAgIG1lbnVNaW5XaWR0aCA9IGRpc3BsYXlOb2RlLmNsaWVudFdpZHRoO1xuICB9XG5cbiAgdmFyIHRhYkluZGV4O1xuXG4gIGlmICh0eXBlb2YgdGFiSW5kZXhQcm9wICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRhYkluZGV4ID0gdGFiSW5kZXhQcm9wO1xuICB9IGVsc2Uge1xuICAgIHRhYkluZGV4ID0gZGlzYWJsZWQgPyBudWxsIDogMDtcbiAgfVxuXG4gIHZhciBidXR0b25JZCA9IFNlbGVjdERpc3BsYXlQcm9wcy5pZCB8fCAobmFtZSA/IFwibXVpLWNvbXBvbmVudC1zZWxlY3QtXCIuY29uY2F0KG5hbWUpIDogdW5kZWZpbmVkKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgLy8gVE9ETyB2NTogbWVyZ2Ugcm9vdCBhbmQgc2VsZWN0XG4gICAgY2xhc3Nlcy5zZWxlY3QsIGNsYXNzZXMuc2VsZWN0TWVudSwgY2xhc3Nlc1t2YXJpYW50XSwgY2xhc3NOYW1lLCBkaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkKSxcbiAgICByZWY6IHNldERpc3BsYXlOb2RlLFxuICAgIHRhYkluZGV4OiB0YWJJbmRleCxcbiAgICByb2xlOiBcImJ1dHRvblwiLFxuICAgIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/ICd0cnVlJyA6IHVuZGVmaW5lZCxcbiAgICBcImFyaWEtZXhwYW5kZWRcIjogb3BlbiA/ICd0cnVlJyA6IHVuZGVmaW5lZCxcbiAgICBcImFyaWEtaGFzcG9wdXBcIjogXCJsaXN0Ym94XCIsXG4gICAgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbCxcbiAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBbbGFiZWxJZCwgYnV0dG9uSWRdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJykgfHwgdW5kZWZpbmVkLFxuICAgIG9uS2V5RG93bjogaGFuZGxlS2V5RG93bixcbiAgICBvbk1vdXNlRG93bjogZGlzYWJsZWQgfHwgcmVhZE9ubHkgPyBudWxsIDogaGFuZGxlTW91c2VEb3duLFxuICAgIG9uQmx1cjogaGFuZGxlQmx1cixcbiAgICBvbkZvY3VzOiBvbkZvY3VzXG4gIH0sIFNlbGVjdERpc3BsYXlQcm9wcywge1xuICAgIC8vIFRoZSBpZCBpcyByZXF1aXJlZCBmb3IgcHJvcGVyIGExMXlcbiAgICBpZDogYnV0dG9uSWRcbiAgfSksIGlzRW1wdHkoZGlzcGxheSkgP1xuICAvKiNfX1BVUkVfXyovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kYW5nZXJcbiAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICBfX2h0bWw6ICcmIzgyMDM7J1xuICAgIH1cbiAgfSkgOiBkaXNwbGF5KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBfZXh0ZW5kcyh7XG4gICAgdmFsdWU6IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUuam9pbignLCcpIDogdmFsdWUsXG4gICAgbmFtZTogbmFtZSxcbiAgICByZWY6IGlucHV0UmVmLFxuICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgIHRhYkluZGV4OiAtMSxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMubmF0aXZlSW5wdXQsXG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXNcbiAgfSwgb3RoZXIpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkNvbXBvbmVudCwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmljb24sIGNsYXNzZXNbXCJpY29uXCIuY29uY2F0KGNhcGl0YWxpemUodmFyaWFudCkpXSwgb3BlbiAmJiBjbGFzc2VzLmljb25PcGVuLCBkaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkKVxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudSwgX2V4dGVuZHMoe1xuICAgIGlkOiBcIm1lbnUtXCIuY29uY2F0KG5hbWUgfHwgJycpLFxuICAgIGFuY2hvckVsOiBkaXNwbGF5Tm9kZSxcbiAgICBvcGVuOiBvcGVuLFxuICAgIG9uQ2xvc2U6IGhhbmRsZUNsb3NlXG4gIH0sIE1lbnVQcm9wcywge1xuICAgIE1lbnVMaXN0UHJvcHM6IF9leHRlbmRzKHtcbiAgICAgICdhcmlhLWxhYmVsbGVkYnknOiBsYWJlbElkLFxuICAgICAgcm9sZTogJ2xpc3Rib3gnLFxuICAgICAgZGlzYWJsZUxpc3RXcmFwOiB0cnVlXG4gICAgfSwgTWVudVByb3BzLk1lbnVMaXN0UHJvcHMpLFxuICAgIFBhcGVyUHJvcHM6IF9leHRlbmRzKHt9LCBNZW51UHJvcHMuUGFwZXJQcm9wcywge1xuICAgICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgICAgbWluV2lkdGg6IG1lbnVNaW5XaWR0aFxuICAgICAgfSwgTWVudVByb3BzLlBhcGVyUHJvcHMgIT0gbnVsbCA/IE1lbnVQcm9wcy5QYXBlclByb3BzLnN0eWxlIDogbnVsbClcbiAgICB9KVxuICB9KSwgaXRlbXMpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gU2VsZWN0SW5wdXQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgJ2FyaWEtbGFiZWwnOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB3aWR0aCBvZiB0aGUgcG9wb3ZlciB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgc2V0IGFjY29yZGluZyB0byB0aGUgaXRlbXMgaW5zaWRlIHRoZVxuICAgKiBtZW51LCBvdGhlcndpc2UgaXQgd2lsbCBiZSBhdCBsZWFzdCB0aGUgd2lkdGggb2YgdGhlIHNlbGVjdCBpbnB1dC5cbiAgICovXG4gIGF1dG9XaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBvcHRpb24gZWxlbWVudHMgdG8gcG9wdWxhdGUgdGhlIHNlbGVjdCB3aXRoLlxuICAgKiBDYW4gYmUgc29tZSBgPE1lbnVJdGVtPmAgZWxlbWVudHMuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgQ1NTIGNsYXNzIG5hbWUgb2YgdGhlIHNlbGVjdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBlbGVtZW50IHZhbHVlLiBVc2Ugd2hlbiB0aGUgY29tcG9uZW50IGlzIG5vdCBjb250cm9sbGVkLlxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBzZWxlY3Qgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgc2VsZWN0ZWQgaXRlbSBpcyBkaXNwbGF5ZWQgZXZlbiBpZiBpdHMgdmFsdWUgaXMgZW1wdHkuXG4gICAqL1xuICBkaXNwbGF5RW1wdHk6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB0aGF0IGRpc3BsYXlzIHRoZSBhcnJvdy5cbiAgICovXG4gIEljb25Db21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBJbXBlcmF0aXZlIGhhbmRsZSBpbXBsZW1lbnRpbmcgYHsgdmFsdWU6IFQsIG5vZGU6IEhUTUxFbGVtZW50LCBmb2N1cygpOiB2b2lkIH1gXG4gICAqIEVxdWl2YWxlbnQgdG8gYHJlZmBcbiAgICovXG4gIGlucHV0UmVmOiByZWZUeXBlLFxuXG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgYW4gZWxlbWVudCB0aGF0IGFjdHMgYXMgYW4gYWRkaXRpb25hbCBsYWJlbC4gVGhlIFNlbGVjdCB3aWxsXG4gICAqIGJlIGxhYmVsbGVkIGJ5IHRoZSBhZGRpdGlvbmFsIGxhYmVsIGFuZCB0aGUgc2VsZWN0ZWQgdmFsdWUuXG4gICAqL1xuICBsYWJlbElkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYE1lbnVgXSgvYXBpL21lbnUvKSBlbGVtZW50LlxuICAgKi9cbiAgTWVudVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGB2YWx1ZWAgbXVzdCBiZSBhbiBhcnJheSBhbmQgdGhlIG1lbnUgd2lsbCBzdXBwb3J0IG11bHRpcGxlIHNlbGVjdGlvbnMuXG4gICAqL1xuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE5hbWUgYXR0cmlidXRlIG9mIHRoZSBgc2VsZWN0YCBvciBoaWRkZW4gYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiBhIG1lbnUgaXRlbSBpcyBzZWxlY3RlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgdmFsdWUgYnkgYWNjZXNzaW5nIGBldmVudC50YXJnZXQudmFsdWVgIChhbnkpLlxuICAgKiBAcGFyYW0ge29iamVjdH0gW2NoaWxkXSBUaGUgcmVhY3QgZWxlbWVudCB0aGF0IHdhcyBzZWxlY3RlZC5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IHJlcXVlc3RzIHRvIGJlIGNsb3NlZC5cbiAgICogVXNlIGluIGNvbnRyb2xsZWQgbW9kZSAoc2VlIG9wZW4pLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqL1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCByZXF1ZXN0cyB0byBiZSBvcGVuZWQuXG4gICAqIFVzZSBpbiBjb250cm9sbGVkIG1vZGUgKHNlZSBvcGVuKS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKi9cbiAgb25PcGVuOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ29udHJvbCBgc2VsZWN0YCBvcGVuIHN0YXRlLlxuICAgKi9cbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBzZWxlY3RlZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlIFRoZSBgdmFsdWVgIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIEByZXR1cm5zIHtSZWFjdE5vZGV9XG4gICAqL1xuICByZW5kZXJWYWx1ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIGNsaWNrYWJsZSBkaXYgZWxlbWVudC5cbiAgICovXG4gIFNlbGVjdERpc3BsYXlQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdGFiSW5kZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogVGhlIGlucHV0IHZhbHVlLlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3N0YW5kYXJkJywgJ291dGxpbmVkJywgJ2ZpbGxlZCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdElucHV0OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IHJlZlR5cGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IElucHV0IGZyb20gJy4uL0lucHV0JztcbmltcG9ydCBGaWxsZWRJbnB1dCBmcm9tICcuLi9GaWxsZWRJbnB1dCc7XG5pbXBvcnQgT3V0bGluZWRJbnB1dCBmcm9tICcuLi9PdXRsaW5lZElucHV0JztcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJy4uL0lucHV0TGFiZWwnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJy4uL0Zvcm1Db250cm9sJztcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tICcuLi9Gb3JtSGVscGVyVGV4dCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4uL1NlbGVjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG52YXIgdmFyaWFudENvbXBvbmVudCA9IHtcbiAgc3RhbmRhcmQ6IElucHV0LFxuICBmaWxsZWQ6IEZpbGxlZElucHV0LFxuICBvdXRsaW5lZDogT3V0bGluZWRJbnB1dFxufTtcbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7fVxufTtcbi8qKlxuICogVGhlIGBUZXh0RmllbGRgIGlzIGEgY29udmVuaWVuY2Ugd3JhcHBlciBmb3IgdGhlIG1vc3QgY29tbW9uIGNhc2VzICg4MCUpLlxuICogSXQgY2Fubm90IGJlIGFsbCB0aGluZ3MgdG8gYWxsIHBlb3BsZSwgb3RoZXJ3aXNlIHRoZSBBUEkgd291bGQgZ3JvdyBvdXQgb2YgY29udHJvbC5cbiAqXG4gKiAjIyBBZHZhbmNlZCBDb25maWd1cmF0aW9uXG4gKlxuICogSXQncyBpbXBvcnRhbnQgdG8gdW5kZXJzdGFuZCB0aGF0IHRoZSB0ZXh0IGZpZWxkIGlzIGEgc2ltcGxlIGFic3RyYWN0aW9uXG4gKiBvbiB0b3Agb2YgdGhlIGZvbGxvd2luZyBjb21wb25lbnRzOlxuICpcbiAqIC0gW0Zvcm1Db250cm9sXSgvYXBpL2Zvcm0tY29udHJvbC8pXG4gKiAtIFtJbnB1dExhYmVsXSgvYXBpL2lucHV0LWxhYmVsLylcbiAqIC0gW0ZpbGxlZElucHV0XSgvYXBpL2ZpbGxlZC1pbnB1dC8pXG4gKiAtIFtPdXRsaW5lZElucHV0XSgvYXBpL291dGxpbmVkLWlucHV0LylcbiAqIC0gW0lucHV0XSgvYXBpL2lucHV0LylcbiAqIC0gW0Zvcm1IZWxwZXJUZXh0XSgvYXBpL2Zvcm0taGVscGVyLXRleHQvKVxuICpcbiAqIElmIHlvdSB3aXNoIHRvIGFsdGVyIHRoZSBwcm9wcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQsIHlvdSBjYW4gZG8gc28gYXMgZm9sbG93czpcbiAqXG4gKiBgYGBqc3hcbiAqIGNvbnN0IGlucHV0UHJvcHMgPSB7XG4gKiAgIHN0ZXA6IDMwMCxcbiAqIH07XG4gKlxuICogcmV0dXJuIDxUZXh0RmllbGQgaWQ9XCJ0aW1lXCIgdHlwZT1cInRpbWVcIiBpbnB1dFByb3BzPXtpbnB1dFByb3BzfSAvPjtcbiAqIGBgYFxuICpcbiAqIEZvciBhZHZhbmNlZCBjYXNlcywgcGxlYXNlIGxvb2sgYXQgdGhlIHNvdXJjZSBvZiBUZXh0RmllbGQgYnkgY2xpY2tpbmcgb24gdGhlXG4gKiBcIkVkaXQgdGhpcyBwYWdlXCIgYnV0dG9uIGFib3ZlLiBDb25zaWRlciBlaXRoZXI6XG4gKlxuICogLSB1c2luZyB0aGUgdXBwZXIgY2FzZSBwcm9wcyBmb3IgcGFzc2luZyB2YWx1ZXMgZGlyZWN0bHkgdG8gdGhlIGNvbXBvbmVudHNcbiAqIC0gdXNpbmcgdGhlIHVuZGVybHlpbmcgY29tcG9uZW50cyBkaXJlY3RseSBhcyBzaG93biBpbiB0aGUgZGVtb3NcbiAqL1xuXG52YXIgVGV4dEZpZWxkID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVGV4dEZpZWxkKHByb3BzLCByZWYpIHtcbiAgdmFyIGF1dG9Db21wbGV0ZSA9IHByb3BzLmF1dG9Db21wbGV0ZSxcbiAgICAgIF9wcm9wcyRhdXRvRm9jdXMgPSBwcm9wcy5hdXRvRm9jdXMsXG4gICAgICBhdXRvRm9jdXMgPSBfcHJvcHMkYXV0b0ZvY3VzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRhdXRvRm9jdXMsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGNvbG9yID0gX3Byb3BzJGNvbG9yID09PSB2b2lkIDAgPyAncHJpbWFyeScgOiBfcHJvcHMkY29sb3IsXG4gICAgICBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICBfcHJvcHMkZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkID0gX3Byb3BzJGRpc2FibGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlZCxcbiAgICAgIF9wcm9wcyRlcnJvciA9IHByb3BzLmVycm9yLFxuICAgICAgZXJyb3IgPSBfcHJvcHMkZXJyb3IgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGVycm9yLFxuICAgICAgRm9ybUhlbHBlclRleHRQcm9wcyA9IHByb3BzLkZvcm1IZWxwZXJUZXh0UHJvcHMsXG4gICAgICBfcHJvcHMkZnVsbFdpZHRoID0gcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgZnVsbFdpZHRoID0gX3Byb3BzJGZ1bGxXaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnVsbFdpZHRoLFxuICAgICAgaGVscGVyVGV4dCA9IHByb3BzLmhlbHBlclRleHQsXG4gICAgICBoaWRkZW5MYWJlbCA9IHByb3BzLmhpZGRlbkxhYmVsLFxuICAgICAgaWQgPSBwcm9wcy5pZCxcbiAgICAgIElucHV0TGFiZWxQcm9wcyA9IHByb3BzLklucHV0TGFiZWxQcm9wcyxcbiAgICAgIGlucHV0UHJvcHMgPSBwcm9wcy5pbnB1dFByb3BzLFxuICAgICAgSW5wdXRQcm9wcyA9IHByb3BzLklucHV0UHJvcHMsXG4gICAgICBpbnB1dFJlZiA9IHByb3BzLmlucHV0UmVmLFxuICAgICAgbGFiZWwgPSBwcm9wcy5sYWJlbCxcbiAgICAgIF9wcm9wcyRtdWx0aWxpbmUgPSBwcm9wcy5tdWx0aWxpbmUsXG4gICAgICBtdWx0aWxpbmUgPSBfcHJvcHMkbXVsdGlsaW5lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRtdWx0aWxpbmUsXG4gICAgICBuYW1lID0gcHJvcHMubmFtZSxcbiAgICAgIG9uQmx1ciA9IHByb3BzLm9uQmx1cixcbiAgICAgIG9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2UsXG4gICAgICBvbkZvY3VzID0gcHJvcHMub25Gb2N1cyxcbiAgICAgIHBsYWNlaG9sZGVyID0gcHJvcHMucGxhY2Vob2xkZXIsXG4gICAgICBfcHJvcHMkcmVxdWlyZWQgPSBwcm9wcy5yZXF1aXJlZCxcbiAgICAgIHJlcXVpcmVkID0gX3Byb3BzJHJlcXVpcmVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRyZXF1aXJlZCxcbiAgICAgIHJvd3MgPSBwcm9wcy5yb3dzLFxuICAgICAgcm93c01heCA9IHByb3BzLnJvd3NNYXgsXG4gICAgICBfcHJvcHMkc2VsZWN0ID0gcHJvcHMuc2VsZWN0LFxuICAgICAgc2VsZWN0ID0gX3Byb3BzJHNlbGVjdCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkc2VsZWN0LFxuICAgICAgU2VsZWN0UHJvcHMgPSBwcm9wcy5TZWxlY3RQcm9wcyxcbiAgICAgIHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ3N0YW5kYXJkJyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImF1dG9Db21wbGV0ZVwiLCBcImF1dG9Gb2N1c1wiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbG9yXCIsIFwiZGVmYXVsdFZhbHVlXCIsIFwiZGlzYWJsZWRcIiwgXCJlcnJvclwiLCBcIkZvcm1IZWxwZXJUZXh0UHJvcHNcIiwgXCJmdWxsV2lkdGhcIiwgXCJoZWxwZXJUZXh0XCIsIFwiaGlkZGVuTGFiZWxcIiwgXCJpZFwiLCBcIklucHV0TGFiZWxQcm9wc1wiLCBcImlucHV0UHJvcHNcIiwgXCJJbnB1dFByb3BzXCIsIFwiaW5wdXRSZWZcIiwgXCJsYWJlbFwiLCBcIm11bHRpbGluZVwiLCBcIm5hbWVcIiwgXCJvbkJsdXJcIiwgXCJvbkNoYW5nZVwiLCBcIm9uRm9jdXNcIiwgXCJwbGFjZWhvbGRlclwiLCBcInJlcXVpcmVkXCIsIFwicm93c1wiLCBcInJvd3NNYXhcIiwgXCJzZWxlY3RcIiwgXCJTZWxlY3RQcm9wc1wiLCBcInR5cGVcIiwgXCJ2YWx1ZVwiLCBcInZhcmlhbnRcIl0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHNlbGVjdCAmJiAhY2hpbGRyZW4pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBgY2hpbGRyZW5gIG11c3QgYmUgcGFzc2VkIHdoZW4gdXNpbmcgdGhlIGBUZXh0RmllbGRgIGNvbXBvbmVudCB3aXRoIGBzZWxlY3RgLicpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBJbnB1dE1vcmUgPSB7fTtcblxuICBpZiAodmFyaWFudCA9PT0gJ291dGxpbmVkJykge1xuICAgIGlmIChJbnB1dExhYmVsUHJvcHMgJiYgdHlwZW9mIElucHV0TGFiZWxQcm9wcy5zaHJpbmsgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBJbnB1dE1vcmUubm90Y2hlZCA9IElucHV0TGFiZWxQcm9wcy5zaHJpbms7XG4gICAgfVxuXG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICB2YXIgX0lucHV0TGFiZWxQcm9wcyRyZXF1O1xuXG4gICAgICB2YXIgZGlzcGxheVJlcXVpcmVkID0gKF9JbnB1dExhYmVsUHJvcHMkcmVxdSA9IElucHV0TGFiZWxQcm9wcyA9PT0gbnVsbCB8fCBJbnB1dExhYmVsUHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IElucHV0TGFiZWxQcm9wcy5yZXF1aXJlZCkgIT09IG51bGwgJiYgX0lucHV0TGFiZWxQcm9wcyRyZXF1ICE9PSB2b2lkIDAgPyBfSW5wdXRMYWJlbFByb3BzJHJlcXUgOiByZXF1aXJlZDtcbiAgICAgIElucHV0TW9yZS5sYWJlbCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBsYWJlbCwgZGlzcGxheVJlcXVpcmVkICYmIFwiXFx4QTAqXCIpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzZWxlY3QpIHtcbiAgICAvLyB1bnNldCBkZWZhdWx0cyBmcm9tIHRleHRib3ggaW5wdXRzXG4gICAgaWYgKCFTZWxlY3RQcm9wcyB8fCAhU2VsZWN0UHJvcHMubmF0aXZlKSB7XG4gICAgICBJbnB1dE1vcmUuaWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgSW5wdXRNb3JlWydhcmlhLWRlc2NyaWJlZGJ5J10gPSB1bmRlZmluZWQ7XG4gIH1cblxuICB2YXIgaGVscGVyVGV4dElkID0gaGVscGVyVGV4dCAmJiBpZCA/IFwiXCIuY29uY2F0KGlkLCBcIi1oZWxwZXItdGV4dFwiKSA6IHVuZGVmaW5lZDtcbiAgdmFyIGlucHV0TGFiZWxJZCA9IGxhYmVsICYmIGlkID8gXCJcIi5jb25jYXQoaWQsIFwiLWxhYmVsXCIpIDogdW5kZWZpbmVkO1xuICB2YXIgSW5wdXRDb21wb25lbnQgPSB2YXJpYW50Q29tcG9uZW50W3ZhcmlhbnRdO1xuICB2YXIgSW5wdXRFbGVtZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBcImFyaWEtZGVzY3JpYmVkYnlcIjogaGVscGVyVGV4dElkLFxuICAgIGF1dG9Db21wbGV0ZTogYXV0b0NvbXBsZXRlLFxuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIGZ1bGxXaWR0aDogZnVsbFdpZHRoLFxuICAgIG11bHRpbGluZTogbXVsdGlsaW5lLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgcm93czogcm93cyxcbiAgICByb3dzTWF4OiByb3dzTWF4LFxuICAgIHR5cGU6IHR5cGUsXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGlkOiBpZCxcbiAgICBpbnB1dFJlZjogaW5wdXRSZWYsXG4gICAgb25CbHVyOiBvbkJsdXIsXG4gICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgIG9uRm9jdXM6IG9uRm9jdXMsXG4gICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgIGlucHV0UHJvcHM6IGlucHV0UHJvcHNcbiAgfSwgSW5wdXRNb3JlLCBJbnB1dFByb3BzKSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udHJvbCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSksXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIGVycm9yOiBlcnJvcixcbiAgICBmdWxsV2lkdGg6IGZ1bGxXaWR0aCxcbiAgICBoaWRkZW5MYWJlbDogaGlkZGVuTGFiZWwsXG4gICAgcmVmOiByZWYsXG4gICAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICAgIGNvbG9yOiBjb2xvcixcbiAgICB2YXJpYW50OiB2YXJpYW50XG4gIH0sIG90aGVyKSwgbGFiZWwgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRMYWJlbCwgX2V4dGVuZHMoe1xuICAgIGh0bWxGb3I6IGlkLFxuICAgIGlkOiBpbnB1dExhYmVsSWRcbiAgfSwgSW5wdXRMYWJlbFByb3BzKSwgbGFiZWwpLCBzZWxlY3QgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3QsIF9leHRlbmRzKHtcbiAgICBcImFyaWEtZGVzY3JpYmVkYnlcIjogaGVscGVyVGV4dElkLFxuICAgIGlkOiBpZCxcbiAgICBsYWJlbElkOiBpbnB1dExhYmVsSWQsXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGlucHV0OiBJbnB1dEVsZW1lbnRcbiAgfSwgU2VsZWN0UHJvcHMpLCBjaGlsZHJlbikgOiBJbnB1dEVsZW1lbnQsIGhlbHBlclRleHQgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUhlbHBlclRleHQsIF9leHRlbmRzKHtcbiAgICBpZDogaGVscGVyVGV4dElkXG4gIH0sIEZvcm1IZWxwZXJUZXh0UHJvcHMpLCBoZWxwZXJUZXh0KSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRleHRGaWVsZC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGlzIHByb3AgaGVscHMgdXNlcnMgdG8gZmlsbCBmb3JtcyBmYXN0ZXIsIGVzcGVjaWFsbHkgb24gbW9iaWxlIGRldmljZXMuXG4gICAqIFRoZSBuYW1lIGNhbiBiZSBjb25mdXNpbmcsIGFzIGl0J3MgbW9yZSBsaWtlIGFuIGF1dG9maWxsLlxuICAgKiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgaXQgW2ZvbGxvd2luZyB0aGUgc3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybS1jb250cm9sLWluZnJhc3RydWN0dXJlLmh0bWwjYXV0b2ZpbGwpLlxuICAgKi9cbiAgYXV0b0NvbXBsZXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSBmb2N1c2VkIGR1cmluZyB0aGUgZmlyc3QgbW91bnQuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGNvbXBvbmVudC4gSXQgc3VwcG9ydHMgdGhvc2UgdGhlbWUgY29sb3JzIHRoYXQgbWFrZSBzZW5zZSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGBpbnB1dGAgZWxlbWVudCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCB3aWxsIGJlIGRpc3BsYXllZCBpbiBhbiBlcnJvciBzdGF0ZS5cbiAgICovXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgW2BGb3JtSGVscGVyVGV4dGBdKC9hcGkvZm9ybS1oZWxwZXItdGV4dC8pIGVsZW1lbnQuXG4gICAqL1xuICBGb3JtSGVscGVyVGV4dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cbiAgICovXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBoZWxwZXIgdGV4dCBjb250ZW50LlxuICAgKi9cbiAgaGVscGVyVGV4dDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGhpZGRlbkxhYmVsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqIFVzZSB0aGlzIHByb3AgdG8gbWFrZSBgbGFiZWxgIGFuZCBgaGVscGVyVGV4dGAgYWNjZXNzaWJsZSBmb3Igc2NyZWVuIHJlYWRlcnMuXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgW2BJbnB1dExhYmVsYF0oL2FwaS9pbnB1dC1sYWJlbC8pIGVsZW1lbnQuXG4gICAqL1xuICBJbnB1dExhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFtBdHRyaWJ1dGVzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjQXR0cmlidXRlcykgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgSW5wdXQgZWxlbWVudC5cbiAgICogSXQgd2lsbCBiZSBhIFtgRmlsbGVkSW5wdXRgXSgvYXBpL2ZpbGxlZC1pbnB1dC8pLFxuICAgKiBbYE91dGxpbmVkSW5wdXRgXSgvYXBpL291dGxpbmVkLWlucHV0Lykgb3IgW2BJbnB1dGBdKC9hcGkvaW5wdXQvKVxuICAgKiBjb21wb25lbnQgZGVwZW5kaW5nIG9uIHRoZSBgdmFyaWFudGAgcHJvcCB2YWx1ZS5cbiAgICovXG4gIElucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFBhc3MgYSByZWYgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UmVmOiByZWZUeXBlLFxuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgY29udGVudC5cbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogSWYgYGRlbnNlYCBvciBgbm9ybWFsYCwgd2lsbCBhZGp1c3QgdmVydGljYWwgc3BhY2luZyBvZiB0aGlzIGFuZCBjb250YWluZWQgY29tcG9uZW50cy5cbiAgICovXG4gIG1hcmdpbjogUHJvcFR5cGVzLm9uZU9mKFsnZGVuc2UnLCAnbm9uZScsICdub3JtYWwnXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYSB0ZXh0YXJlYSBlbGVtZW50IHdpbGwgYmUgcmVuZGVyZWQgaW5zdGVhZCBvZiBhbiBpbnB1dC5cbiAgICovXG4gIG11bHRpbGluZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE5hbWUgYXR0cmlidXRlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIFlvdSBjYW4gcHVsbCBvdXQgdGhlIG5ldyB2YWx1ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC52YWx1ZWAgKHN0cmluZykuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgc2hvcnQgaGludCBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0IGJlZm9yZSB0aGUgdXNlciBlbnRlcnMgYSB2YWx1ZS5cbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCBpcyBkaXNwbGF5ZWQgYXMgcmVxdWlyZWQgYW5kIHRoZSBgaW5wdXRgIGVsZW1lbnRgIHdpbGwgYmUgcmVxdWlyZWQuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlbiBtdWx0aWxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93czogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlbiBtdWx0aWxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93c01heDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBSZW5kZXIgYSBbYFNlbGVjdGBdKC9hcGkvc2VsZWN0LykgZWxlbWVudCB3aGlsZSBwYXNzaW5nIHRoZSBJbnB1dCBlbGVtZW50IHRvIGBTZWxlY3RgIGFzIGBpbnB1dGAgcGFyYW1ldGVyLlxuICAgKiBJZiB0aGlzIG9wdGlvbiBpcyBzZXQgeW91IG11c3QgcGFzcyB0aGUgb3B0aW9ucyBvZiB0aGUgc2VsZWN0IGFzIGNoaWxkcmVuLlxuICAgKi9cbiAgc2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgW2BTZWxlY3RgXSgvYXBpL3NlbGVjdC8pIGVsZW1lbnQuXG4gICAqL1xuICBTZWxlY3RQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIHRleHQgZmllbGQuXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydtZWRpdW0nLCAnc21hbGwnXSksXG5cbiAgLyoqXG4gICAqIFR5cGUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC4gSXQgc2hvdWxkIGJlIFthIHZhbGlkIEhUTUw1IGlucHV0IHR5cGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNGb3JtXyUzQ2lucHV0JTNFX3R5cGVzKS5cbiAgICovXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LCByZXF1aXJlZCBmb3IgYSBjb250cm9sbGVkIGNvbXBvbmVudC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydmaWxsZWQnLCAnb3V0bGluZWQnLCAnc3RhbmRhcmQnXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpVGV4dEZpZWxkJ1xufSkoVGV4dEZpZWxkKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uL3V0aWxzL2RlYm91bmNlJztcbmltcG9ydCB1c2VGb3JrUmVmIGZyb20gJy4uL3V0aWxzL3VzZUZvcmtSZWYnO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVZhbHVlKGNvbXB1dGVkU3R5bGUsIHByb3BlcnR5KSB7XG4gIHJldHVybiBwYXJzZUludChjb21wdXRlZFN0eWxlW3Byb3BlcnR5XSwgMTApIHx8IDA7XG59XG5cbnZhciB1c2VFbmhhbmNlZEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gUmVhY3QudXNlTGF5b3V0RWZmZWN0IDogUmVhY3QudXNlRWZmZWN0O1xudmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHNoYWRvdyB0ZXh0YXJlYSBlbGVtZW50LiAqL1xuICBzaGFkb3c6IHtcbiAgICAvLyBWaXNpYmlsaXR5IG5lZWRlZCB0byBoaWRlIHRoZSBleHRyYSB0ZXh0IGFyZWEgb24gaVBhZHNcbiAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAvLyBSZW1vdmUgZnJvbSB0aGUgY29udGVudCBmbG93XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgLy8gSWdub3JlIHRoZSBzY3JvbGxiYXIgd2lkdGhcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIC8vIENyZWF0ZSBhIG5ldyBsYXllciwgaW5jcmVhc2UgdGhlIGlzb2xhdGlvbiBvZiB0aGUgY29tcHV0ZWQgdmFsdWVzXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWigwKSdcbiAgfVxufTtcbnZhciBUZXh0YXJlYUF1dG9zaXplID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVGV4dGFyZWFBdXRvc2l6ZShwcm9wcywgcmVmKSB7XG4gIHZhciBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgcm93cyA9IHByb3BzLnJvd3MsXG4gICAgICByb3dzTWF4ID0gcHJvcHMucm93c01heCxcbiAgICAgIF9wcm9wcyRyb3dzTWluID0gcHJvcHMucm93c01pbixcbiAgICAgIHJvd3NNaW5Qcm9wID0gX3Byb3BzJHJvd3NNaW4gPT09IHZvaWQgMCA/IDEgOiBfcHJvcHMkcm93c01pbixcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcIm9uQ2hhbmdlXCIsIFwicm93c1wiLCBcInJvd3NNYXhcIiwgXCJyb3dzTWluXCIsIFwic3R5bGVcIiwgXCJ2YWx1ZVwiXSk7XG5cbiAgdmFyIHJvd3NNaW4gPSByb3dzIHx8IHJvd3NNaW5Qcm9wO1xuXG4gIHZhciBfUmVhY3QkdXNlUmVmID0gUmVhY3QudXNlUmVmKHZhbHVlICE9IG51bGwpLFxuICAgICAgaXNDb250cm9sbGVkID0gX1JlYWN0JHVzZVJlZi5jdXJyZW50O1xuXG4gIHZhciBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIGhhbmRsZVJlZiA9IHVzZUZvcmtSZWYocmVmLCBpbnB1dFJlZik7XG4gIHZhciBzaGFkb3dSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciByZW5kZXJzID0gUmVhY3QudXNlUmVmKDApO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSh7fSksXG4gICAgICBzdGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZVswXSxcbiAgICAgIHNldFN0YXRlID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBzeW5jSGVpZ2h0ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbnB1dCA9IGlucHV0UmVmLmN1cnJlbnQ7XG4gICAgdmFyIGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpbnB1dCk7XG4gICAgdmFyIGlucHV0U2hhbGxvdyA9IHNoYWRvd1JlZi5jdXJyZW50O1xuICAgIGlucHV0U2hhbGxvdy5zdHlsZS53aWR0aCA9IGNvbXB1dGVkU3R5bGUud2lkdGg7XG4gICAgaW5wdXRTaGFsbG93LnZhbHVlID0gaW5wdXQudmFsdWUgfHwgcHJvcHMucGxhY2Vob2xkZXIgfHwgJ3gnO1xuXG4gICAgaWYgKGlucHV0U2hhbGxvdy52YWx1ZS5zbGljZSgtMSkgPT09ICdcXG4nKSB7XG4gICAgICAvLyBDZXJ0YWluIGZvbnRzIHdoaWNoIG92ZXJmbG93IHRoZSBsaW5lIGhlaWdodCB3aWxsIGNhdXNlIHRoZSB0ZXh0YXJlYVxuICAgICAgLy8gdG8gcmVwb3J0IGEgZGlmZmVyZW50IHNjcm9sbEhlaWdodCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgbGFzdCBsaW5lXG4gICAgICAvLyBpcyBlbXB0eS4gTWFrZSBpdCBub24tZW1wdHkgdG8gYXZvaWQgdGhpcyBpc3N1ZS5cbiAgICAgIGlucHV0U2hhbGxvdy52YWx1ZSArPSAnICc7XG4gICAgfVxuXG4gICAgdmFyIGJveFNpemluZyA9IGNvbXB1dGVkU3R5bGVbJ2JveC1zaXppbmcnXTtcbiAgICB2YXIgcGFkZGluZyA9IGdldFN0eWxlVmFsdWUoY29tcHV0ZWRTdHlsZSwgJ3BhZGRpbmctYm90dG9tJykgKyBnZXRTdHlsZVZhbHVlKGNvbXB1dGVkU3R5bGUsICdwYWRkaW5nLXRvcCcpO1xuICAgIHZhciBib3JkZXIgPSBnZXRTdHlsZVZhbHVlKGNvbXB1dGVkU3R5bGUsICdib3JkZXItYm90dG9tLXdpZHRoJykgKyBnZXRTdHlsZVZhbHVlKGNvbXB1dGVkU3R5bGUsICdib3JkZXItdG9wLXdpZHRoJyk7IC8vIFRoZSBoZWlnaHQgb2YgdGhlIGlubmVyIGNvbnRlbnRcblxuICAgIHZhciBpbm5lckhlaWdodCA9IGlucHV0U2hhbGxvdy5zY3JvbGxIZWlnaHQgLSBwYWRkaW5nOyAvLyBNZWFzdXJlIGhlaWdodCBvZiBhIHRleHRhcmVhIHdpdGggYSBzaW5nbGUgcm93XG5cbiAgICBpbnB1dFNoYWxsb3cudmFsdWUgPSAneCc7XG4gICAgdmFyIHNpbmdsZVJvd0hlaWdodCA9IGlucHV0U2hhbGxvdy5zY3JvbGxIZWlnaHQgLSBwYWRkaW5nOyAvLyBUaGUgaGVpZ2h0IG9mIHRoZSBvdXRlciBjb250ZW50XG5cbiAgICB2YXIgb3V0ZXJIZWlnaHQgPSBpbm5lckhlaWdodDtcblxuICAgIGlmIChyb3dzTWluKSB7XG4gICAgICBvdXRlckhlaWdodCA9IE1hdGgubWF4KE51bWJlcihyb3dzTWluKSAqIHNpbmdsZVJvd0hlaWdodCwgb3V0ZXJIZWlnaHQpO1xuICAgIH1cblxuICAgIGlmIChyb3dzTWF4KSB7XG4gICAgICBvdXRlckhlaWdodCA9IE1hdGgubWluKE51bWJlcihyb3dzTWF4KSAqIHNpbmdsZVJvd0hlaWdodCwgb3V0ZXJIZWlnaHQpO1xuICAgIH1cblxuICAgIG91dGVySGVpZ2h0ID0gTWF0aC5tYXgob3V0ZXJIZWlnaHQsIHNpbmdsZVJvd0hlaWdodCk7IC8vIFRha2UgdGhlIGJveCBzaXppbmcgaW50byBhY2NvdW50IGZvciBhcHBseWluZyB0aGlzIHZhbHVlIGFzIGEgc3R5bGUuXG5cbiAgICB2YXIgb3V0ZXJIZWlnaHRTdHlsZSA9IG91dGVySGVpZ2h0ICsgKGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnID8gcGFkZGluZyArIGJvcmRlciA6IDApO1xuICAgIHZhciBvdmVyZmxvdyA9IE1hdGguYWJzKG91dGVySGVpZ2h0IC0gaW5uZXJIZWlnaHQpIDw9IDE7XG4gICAgc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgLy8gTmVlZCBhIGxhcmdlIGVub3VnaCBkaWZmZXJlbmNlIHRvIHVwZGF0ZSB0aGUgaGVpZ2h0LlxuICAgICAgLy8gVGhpcyBwcmV2ZW50cyBpbmZpbml0ZSByZW5kZXJpbmcgbG9vcC5cbiAgICAgIGlmIChyZW5kZXJzLmN1cnJlbnQgPCAyMCAmJiAob3V0ZXJIZWlnaHRTdHlsZSA+IDAgJiYgTWF0aC5hYnMoKHByZXZTdGF0ZS5vdXRlckhlaWdodFN0eWxlIHx8IDApIC0gb3V0ZXJIZWlnaHRTdHlsZSkgPiAxIHx8IHByZXZTdGF0ZS5vdmVyZmxvdyAhPT0gb3ZlcmZsb3cpKSB7XG4gICAgICAgIHJlbmRlcnMuY3VycmVudCArPSAxO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG92ZXJmbG93OiBvdmVyZmxvdyxcbiAgICAgICAgICBvdXRlckhlaWdodFN0eWxlOiBvdXRlckhlaWdodFN0eWxlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChyZW5kZXJzLmN1cnJlbnQgPT09IDIwKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBUb28gbWFueSByZS1yZW5kZXJzLiBUaGUgbGF5b3V0IGlzIHVuc3RhYmxlLicsICdUZXh0YXJlYUF1dG9zaXplIGxpbWl0cyB0aGUgbnVtYmVyIG9mIHJlbmRlcnMgdG8gcHJldmVudCBhbiBpbmZpbml0ZSBsb29wLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgIH0pO1xuICB9LCBbcm93c01heCwgcm93c01pbiwgcHJvcHMucGxhY2Vob2xkZXJdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlUmVzaXplID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgcmVuZGVycy5jdXJyZW50ID0gMDtcbiAgICAgIHN5bmNIZWlnaHQoKTtcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaGFuZGxlUmVzaXplLmNsZWFyKCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICB9O1xuICB9LCBbc3luY0hlaWdodF0pO1xuICB1c2VFbmhhbmNlZEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgc3luY0hlaWdodCgpO1xuICB9KTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZW5kZXJzLmN1cnJlbnQgPSAwO1xuICB9LCBbdmFsdWVdKTtcblxuICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgcmVuZGVycy5jdXJyZW50ID0gMDtcblxuICAgIGlmICghaXNDb250cm9sbGVkKSB7XG4gICAgICBzeW5jSGVpZ2h0KCk7XG4gICAgfVxuXG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBfZXh0ZW5kcyh7XG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgcmVmOiBoYW5kbGVSZWYgLy8gQXBwbHkgdGhlIHJvd3MgcHJvcCB0byBnZXQgYSBcImNvcnJlY3RcIiBmaXJzdCBTU1IgcGFpbnRcbiAgICAsXG4gICAgcm93czogcm93c01pbixcbiAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgaGVpZ2h0OiBzdGF0ZS5vdXRlckhlaWdodFN0eWxlLFxuICAgICAgLy8gTmVlZCBhIGxhcmdlIGVub3VnaCBkaWZmZXJlbmNlIHRvIGFsbG93IHNjcm9sbGluZy5cbiAgICAgIC8vIFRoaXMgcHJldmVudHMgaW5maW5pdGUgcmVuZGVyaW5nIGxvb3AuXG4gICAgICBvdmVyZmxvdzogc3RhdGUub3ZlcmZsb3cgPyAnaGlkZGVuJyA6IG51bGxcbiAgICB9LCBzdHlsZSlcbiAgfSwgb3RoZXIpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lLFxuICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgIHJlZjogc2hhZG93UmVmLFxuICAgIHRhYkluZGV4OiAtMSxcbiAgICBzdHlsZTogX2V4dGVuZHMoe30sIHN0eWxlcy5zaGFkb3csIHN0eWxlKVxuICB9KSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRleHRhcmVhQXV0b3NpemUucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBVc2UgYHJvd3NNaW5gIGluc3RlYWQuIFRoZSBwcm9wIHdpbGwgYmUgcmVtb3ZlZCBpbiB2NS5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIHJvd3M6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5LlxuICAgKi9cbiAgcm93c01heDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBNaW5pbXVtIG51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkuXG4gICAqL1xuICByb3dzTWluOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhQXV0b3NpemU7IiwiLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4sIGpzeC1hMTF5L25vLW5vbmludGVyYWN0aXZlLXRhYmluZGV4LCBjYW1lbGNhc2UgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnLi4vdXRpbHMvb3duZXJEb2N1bWVudCc7XG5pbXBvcnQgdXNlRm9ya1JlZiBmcm9tICcuLi91dGlscy91c2VGb3JrUmVmJztcbmltcG9ydCB7IGV4YWN0UHJvcCB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG4vKipcbiAqIFV0aWxpdHkgY29tcG9uZW50IHRoYXQgbG9ja3MgZm9jdXMgaW5zaWRlIHRoZSBjb21wb25lbnQuXG4gKi9cblxuZnVuY3Rpb24gVW5zdGFibGVfVHJhcEZvY3VzKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgX3Byb3BzJGRpc2FibGVBdXRvRm9jID0gcHJvcHMuZGlzYWJsZUF1dG9Gb2N1cyxcbiAgICAgIGRpc2FibGVBdXRvRm9jdXMgPSBfcHJvcHMkZGlzYWJsZUF1dG9Gb2MgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVBdXRvRm9jLFxuICAgICAgX3Byb3BzJGRpc2FibGVFbmZvcmNlID0gcHJvcHMuZGlzYWJsZUVuZm9yY2VGb2N1cyxcbiAgICAgIGRpc2FibGVFbmZvcmNlRm9jdXMgPSBfcHJvcHMkZGlzYWJsZUVuZm9yY2UgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVFbmZvcmNlLFxuICAgICAgX3Byb3BzJGRpc2FibGVSZXN0b3JlID0gcHJvcHMuZGlzYWJsZVJlc3RvcmVGb2N1cyxcbiAgICAgIGRpc2FibGVSZXN0b3JlRm9jdXMgPSBfcHJvcHMkZGlzYWJsZVJlc3RvcmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVSZXN0b3JlLFxuICAgICAgZ2V0RG9jID0gcHJvcHMuZ2V0RG9jLFxuICAgICAgaXNFbmFibGVkID0gcHJvcHMuaXNFbmFibGVkLFxuICAgICAgb3BlbiA9IHByb3BzLm9wZW47XG4gIHZhciBpZ25vcmVOZXh0RW5mb3JjZUZvY3VzID0gUmVhY3QudXNlUmVmKCk7XG4gIHZhciBzZW50aW5lbFN0YXJ0ID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgc2VudGluZWxFbmQgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciBub2RlVG9SZXN0b3JlID0gUmVhY3QudXNlUmVmKCk7XG4gIHZhciByb290UmVmID0gUmVhY3QudXNlUmVmKG51bGwpOyAvLyBjYW4gYmUgcmVtb3ZlZCBvbmNlIHdlIGRyb3Agc3VwcG9ydCBmb3Igbm9uIHJlZiBmb3J3YXJkaW5nIGNsYXNzIGNvbXBvbmVudHNcblxuICB2YXIgaGFuZGxlT3duUmVmID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgLy8gI1N0cmljdE1vZGUgcmVhZHlcbiAgICByb290UmVmLmN1cnJlbnQgPSBSZWFjdERPTS5maW5kRE9NTm9kZShpbnN0YW5jZSk7XG4gIH0sIFtdKTtcbiAgdmFyIGhhbmRsZVJlZiA9IHVzZUZvcmtSZWYoY2hpbGRyZW4ucmVmLCBoYW5kbGVPd25SZWYpO1xuICB2YXIgcHJldk9wZW5SZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBwcmV2T3BlblJlZi5jdXJyZW50ID0gb3BlbjtcbiAgfSwgW29wZW5dKTtcblxuICBpZiAoIXByZXZPcGVuUmVmLmN1cnJlbnQgJiYgb3BlbiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIFdBUk5JTkc6IFBvdGVudGlhbGx5IHVuc2FmZSBpbiBjb25jdXJyZW50IG1vZGUuXG4gICAgLy8gVGhlIHdheSB0aGUgcmVhZCBvbiBgbm9kZVRvUmVzdG9yZWAgaXMgc2V0dXAgY291bGQgbWFrZSB0aGlzIGFjdHVhbGx5IHNhZmUuXG4gICAgLy8gU2F5IHdlIHJlbmRlciBgb3Blbj17ZmFsc2V9YCAtPiBgb3Blbj17dHJ1ZX1gIGJ1dCBuZXZlciBjb21taXQuXG4gICAgLy8gV2UgaGF2ZSBub3cgd3JpdHRlbiBhIHN0YXRlIHRoYXQgd2Fzbid0IGNvbW1pdHRlZC4gQnV0IG5vIGNvbW1pdHRlZCBlZmZlY3RcbiAgICAvLyB3aWxsIHJlYWQgdGhpcyB3cm9uZyB2YWx1ZS4gV2Ugb25seSByZWFkIGZyb20gYG5vZGVUb1Jlc3RvcmVgIGluIGVmZmVjdHNcbiAgICAvLyB0aGF0IHdlcmUgY29tbWl0dGVkIG9uIGBvcGVuPXt0cnVlfWBcbiAgICAvLyBXQVJOSU5HOiBQcmV2ZW50cyB0aGUgaW5zdGFuY2UgZnJvbSBiZWluZyBnYXJiYWdlIGNvbGxlY3RlZC4gU2hvdWxkIG9ubHlcbiAgICAvLyBob2xkIGEgd2VhayByZWYuXG4gICAgbm9kZVRvUmVzdG9yZS5jdXJyZW50ID0gZ2V0RG9jKCkuYWN0aXZlRWxlbWVudDtcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFvcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRvYyA9IG93bmVyRG9jdW1lbnQocm9vdFJlZi5jdXJyZW50KTsgLy8gV2UgbWlnaHQgcmVuZGVyIGFuIGVtcHR5IGNoaWxkLlxuXG4gICAgaWYgKCFkaXNhYmxlQXV0b0ZvY3VzICYmIHJvb3RSZWYuY3VycmVudCAmJiAhcm9vdFJlZi5jdXJyZW50LmNvbnRhaW5zKGRvYy5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgaWYgKCFyb290UmVmLmN1cnJlbnQuaGFzQXR0cmlidXRlKCd0YWJJbmRleCcpKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBUaGUgbW9kYWwgY29udGVudCBub2RlIGRvZXMgbm90IGFjY2VwdCBmb2N1cy4nLCAnRm9yIHRoZSBiZW5lZml0IG9mIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMsICcgKyAndGhlIHRhYkluZGV4IG9mIHRoZSBub2RlIGlzIGJlaW5nIHNldCB0byBcIi0xXCIuJ10uam9pbignXFxuJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcm9vdFJlZi5jdXJyZW50LnNldEF0dHJpYnV0ZSgndGFiSW5kZXgnLCAtMSk7XG4gICAgICB9XG5cbiAgICAgIHJvb3RSZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIHZhciBjb250YWluID0gZnVuY3Rpb24gY29udGFpbigpIHtcbiAgICAgIHZhciByb290RWxlbWVudCA9IHJvb3RSZWYuY3VycmVudDsgLy8gQ2xlYW51cCBmdW5jdGlvbnMgYXJlIGV4ZWN1dGVkIGxhemlseSBpbiBSZWFjdCAxNy5cbiAgICAgIC8vIENvbnRhaW4gY2FuIGJlIGNhbGxlZCBiZXR3ZWVuIHRoZSBjb21wb25lbnQgYmVpbmcgdW5tb3VudGVkIGFuZCBpdHMgY2xlYW51cCBmdW5jdGlvbiBiZWluZyBydW4uXG5cbiAgICAgIGlmIChyb290RWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghZG9jLmhhc0ZvY3VzKCkgfHwgZGlzYWJsZUVuZm9yY2VGb2N1cyB8fCAhaXNFbmFibGVkKCkgfHwgaWdub3JlTmV4dEVuZm9yY2VGb2N1cy5jdXJyZW50KSB7XG4gICAgICAgIGlnbm9yZU5leHRFbmZvcmNlRm9jdXMuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChyb290UmVmLmN1cnJlbnQgJiYgIXJvb3RSZWYuY3VycmVudC5jb250YWlucyhkb2MuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgcm9vdFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBsb29wRm9jdXMgPSBmdW5jdGlvbiBsb29wRm9jdXMoZXZlbnQpIHtcbiAgICAgIC8vIDkgPSBUYWJcbiAgICAgIGlmIChkaXNhYmxlRW5mb3JjZUZvY3VzIHx8ICFpc0VuYWJsZWQoKSB8fCBldmVudC5rZXlDb2RlICE9PSA5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gTWFrZSBzdXJlIHRoZSBuZXh0IHRhYiBzdGFydHMgZnJvbSB0aGUgcmlnaHQgcGxhY2UuXG5cblxuICAgICAgaWYgKGRvYy5hY3RpdmVFbGVtZW50ID09PSByb290UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byBpZ25vcmUgdGhlIG5leHQgY29udGFpbiBhc1xuICAgICAgICAvLyBpdCB3aWxsIHRyeSB0byBtb3ZlIHRoZSBmb2N1cyBiYWNrIHRvIHRoZSByb290UmVmIGVsZW1lbnQuXG4gICAgICAgIGlnbm9yZU5leHRFbmZvcmNlRm9jdXMuY3VycmVudCA9IHRydWU7XG5cbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgc2VudGluZWxFbmQuY3VycmVudC5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbnRpbmVsU3RhcnQuY3VycmVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGNvbnRhaW4sIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbG9vcEZvY3VzLCB0cnVlKTsgLy8gV2l0aCBFZGdlLCBTYWZhcmkgYW5kIEZpcmVmb3gsIG5vIGZvY3VzIHJlbGF0ZWQgZXZlbnRzIGFyZSBmaXJlZCB3aGVuIHRoZSBmb2N1c2VkIGFyZWEgc3RvcHMgYmVpbmcgYSBmb2N1c2VkIGFyZWFcbiAgICAvLyBlLmcuIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU1OTU2MS5cbiAgICAvL1xuICAgIC8vIFRoZSB3aGF0d2cgc3BlYyBkZWZpbmVzIGhvdyB0aGUgYnJvd3NlciBzaG91bGQgYmVoYXZlIGJ1dCBkb2VzIG5vdCBleHBsaWNpdGx5IG1lbnRpb24gYW55IGV2ZW50czpcbiAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2ZvY3VzLWZpeHVwLXJ1bGUuXG5cbiAgICB2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICBjb250YWluKCk7XG4gICAgfSwgNTApO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIGNvbnRhaW4sIHRydWUpO1xuICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBsb29wRm9jdXMsIHRydWUpOyAvLyByZXN0b3JlTGFzdEZvY3VzKClcblxuICAgICAgaWYgKCFkaXNhYmxlUmVzdG9yZUZvY3VzKSB7XG4gICAgICAgIC8vIEluIElFIDExIGl0IGlzIHBvc3NpYmxlIGZvciBkb2N1bWVudC5hY3RpdmVFbGVtZW50IHRvIGJlIG51bGwgcmVzdWx0aW5nXG4gICAgICAgIC8vIGluIG5vZGVUb1Jlc3RvcmUuY3VycmVudCBiZWluZyBudWxsLlxuICAgICAgICAvLyBOb3QgYWxsIGVsZW1lbnRzIGluIElFIDExIGhhdmUgYSBmb2N1cyBtZXRob2QuXG4gICAgICAgIC8vIE9uY2UgSUUgMTEgc3VwcG9ydCBpcyBkcm9wcGVkIHRoZSBmb2N1cygpIGNhbGwgY2FuIGJlIHVuY29uZGl0aW9uYWwuXG4gICAgICAgIGlmIChub2RlVG9SZXN0b3JlLmN1cnJlbnQgJiYgbm9kZVRvUmVzdG9yZS5jdXJyZW50LmZvY3VzKSB7XG4gICAgICAgICAgbm9kZVRvUmVzdG9yZS5jdXJyZW50LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlVG9SZXN0b3JlLmN1cnJlbnQgPSBudWxsO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtkaXNhYmxlQXV0b0ZvY3VzLCBkaXNhYmxlRW5mb3JjZUZvY3VzLCBkaXNhYmxlUmVzdG9yZUZvY3VzLCBpc0VuYWJsZWQsIG9wZW5dKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgdGFiSW5kZXg6IDAsXG4gICAgcmVmOiBzZW50aW5lbFN0YXJ0LFxuICAgIFwiZGF0YS10ZXN0XCI6IFwic2VudGluZWxTdGFydFwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgcmVmOiBoYW5kbGVSZWZcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICB0YWJJbmRleDogMCxcbiAgICByZWY6IHNlbnRpbmVsRW5kLFxuICAgIFwiZGF0YS10ZXN0XCI6IFwic2VudGluZWxFbmRcIlxuICB9KSk7XG59XG5cbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVuc3RhYmxlX1RyYXBGb2N1cy5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBBIHNpbmdsZSBjaGlsZCBjb250ZW50IGVsZW1lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHRyYXAgZm9jdXMgd2lsbCBub3QgYXV0b21hdGljYWxseSBzaGlmdCBmb2N1cyB0byBpdHNlbGYgd2hlbiBpdCBvcGVucywgYW5kXG4gICAqIHJlcGxhY2UgaXQgdG8gdGhlIGxhc3QgZm9jdXNlZCBlbGVtZW50IHdoZW4gaXQgY2xvc2VzLlxuICAgKiBUaGlzIGFsc28gd29ya3MgY29ycmVjdGx5IHdpdGggYW55IHRyYXAgZm9jdXMgY2hpbGRyZW4gdGhhdCBoYXZlIHRoZSBgZGlzYWJsZUF1dG9Gb2N1c2AgcHJvcC5cbiAgICpcbiAgICogR2VuZXJhbGx5IHRoaXMgc2hvdWxkIG5ldmVyIGJlIHNldCB0byBgdHJ1ZWAgYXMgaXQgbWFrZXMgdGhlIHRyYXAgZm9jdXMgbGVzc1xuICAgKiBhY2Nlc3NpYmxlIHRvIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMsIGxpa2Ugc2NyZWVuIHJlYWRlcnMuXG4gICAqL1xuICBkaXNhYmxlQXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgdHJhcCBmb2N1cyB3aWxsIG5vdCBwcmV2ZW50IGZvY3VzIGZyb20gbGVhdmluZyB0aGUgdHJhcCBmb2N1cyB3aGlsZSBvcGVuLlxuICAgKlxuICAgKiBHZW5lcmFsbHkgdGhpcyBzaG91bGQgbmV2ZXIgYmUgc2V0IHRvIGB0cnVlYCBhcyBpdCBtYWtlcyB0aGUgdHJhcCBmb2N1cyBsZXNzXG4gICAqIGFjY2Vzc2libGUgdG8gYXNzaXN0aXZlIHRlY2hub2xvZ2llcywgbGlrZSBzY3JlZW4gcmVhZGVycy5cbiAgICovXG4gIGRpc2FibGVFbmZvcmNlRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0cmFwIGZvY3VzIHdpbGwgbm90IHJlc3RvcmUgZm9jdXMgdG8gcHJldmlvdXNseSBmb2N1c2VkIGVsZW1lbnQgb25jZVxuICAgKiB0cmFwIGZvY3VzIGlzIGhpZGRlbi5cbiAgICovXG4gIGRpc2FibGVSZXN0b3JlRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGRvY3VtZW50IHRvIGNvbnNpZGVyLlxuICAgKiBXZSB1c2UgaXQgdG8gaW1wbGVtZW50IHRoZSByZXN0b3JlIGZvY3VzIGJldHdlZW4gZGlmZmVyZW50IGJyb3dzZXIgZG9jdW1lbnRzLlxuICAgKi9cbiAgZ2V0RG9jOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBEbyB3ZSBzdGlsbCB3YW50IHRvIGVuZm9yY2UgdGhlIGZvY3VzP1xuICAgKiBUaGlzIHByb3AgaGVscHMgbmVzdGluZyBUcmFwRm9jdXMgZWxlbWVudHMuXG4gICAqL1xuICBpc0VuYWJsZWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgZm9jdXMgd2lsbCBiZSBsb2NrZWQuXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG59IDogdm9pZCAwO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgVW5zdGFibGVfVHJhcEZvY3VzWydwcm9wVHlwZXMnICsgJyddID0gZXhhY3RQcm9wKFVuc3RhYmxlX1RyYXBGb2N1cy5wcm9wVHlwZXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBVbnN0YWJsZV9UcmFwRm9jdXM7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNNyAxMGw1IDUgNS01elwiXG59KSwgJ0Fycm93RHJvcERvd24nKTsiLCJleHBvcnQgdmFyIHJlZmxvdyA9IGZ1bmN0aW9uIHJlZmxvdyhub2RlKSB7XG4gIHJldHVybiBub2RlLnNjcm9sbFRvcDtcbn07XG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNpdGlvblByb3BzKHByb3BzLCBvcHRpb25zKSB7XG4gIHZhciB0aW1lb3V0ID0gcHJvcHMudGltZW91dCxcbiAgICAgIF9wcm9wcyRzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgc3R5bGUgPSBfcHJvcHMkc3R5bGUgPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJHN0eWxlO1xuICByZXR1cm4ge1xuICAgIGR1cmF0aW9uOiBzdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gfHwgdHlwZW9mIHRpbWVvdXQgPT09ICdudW1iZXInID8gdGltZW91dCA6IHRpbWVvdXRbb3B0aW9ucy5tb2RlXSB8fCAwLFxuICAgIGRlbGF5OiBzdHlsZS50cmFuc2l0aW9uRGVsYXlcbiAgfTtcbn0iLCIvLyBBIGNoYW5nZSBvZiB0aGUgYnJvd3NlciB6b29tIGNoYW5nZSB0aGUgc2Nyb2xsYmFyIHNpemUuXG4vLyBDcmVkaXQgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvM2ZmZTNhNWQ4MmY2ZjU2MWI4MmZmNzhkODJiMzJhN2QxNGFlZDU1OC9qcy9zcmMvbW9kYWwuanMjTDUxMi1MNTE5XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxiYXJTaXplKCkge1xuICB2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNjcm9sbERpdi5zdHlsZS53aWR0aCA9ICc5OXB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLmhlaWdodCA9ICc5OXB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgc2Nyb2xsRGl2LnN0eWxlLnRvcCA9ICctOTk5OXB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgdmFyIHNjcm9sbGJhclNpemUgPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgcmV0dXJuIHNjcm9sbGJhclNpemU7XG59IiwiaW1wb3J0IEF2YXRhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBDbGVhckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbGVhclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XHJcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCI7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0d2VldFJlZHVjZXIgZnJvbSBcIi4uL3JlZHV4L3R3ZWV0czJcIjtcclxuaW1wb3J0IHsgYWRkdHdlZXQgfSBmcm9tIFwiLi4vcmVkdXgvdHdlZXRzMlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHdpdERpYWxvZyh7IG9wZW4sIGhhbmRsZUNsb3NlIH0pIHtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgQWRkVHdlZXRFcnJvciA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS50d2VldFJlZHVjZXIuQWRkVHdlZXRFcnJvclxyXG4gICk7XHJcbiAgY29uc3QgQWRkVHdlZXRBZGRpbmcgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUudHdlZXRSZWR1Y2VyLkFkZFR3ZWV0QWRkaW5nXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgQWRkVHdlZXREb25lID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50d2VldFJlZHVjZXIuQWRkVHdlZXREb25lKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChBZGRUd2VldEVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KEFkZFR3ZWV0RXJyb3IuZGF0YSk7XHJcbiAgICB9XHJcbiAgICBpZiAoQWRkVHdlZXREb25lKSB7XHJcbiAgICAgIHNldFRleHQoXCJcIik7XHJcbiAgICB9XHJcbiAgfSwgW0FkZFR3ZWV0RG9uZSwgQWRkVHdlZXRFcnJvcl0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFRleHQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVR3ZWV0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQudHlwZSAhPT0gXCJjbGlja1wiKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0ZXh0ID09PSBcIlwiKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGRpc3BhdGNoKGFkZHR3ZWV0KHsgdGV4dCB9KSk7XHJcbiAgICBoYW5kbGVDbG9zZSgpO1xyXG4gICAgc2V0VGV4dChcIlwiKTtcclxuICB9O1xyXG5cclxuICAvLyBkaXNwYXRjaChzaWduVXBBY3Rpb24oeyBlbWFpbCwgcGFzc3dvcmQsIG5pY2tuYW1lIH0pKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEaWFsb2dcclxuICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5ldy10d2l0LWRpYWxvZ1wiXHJcbiAgICAgIGZ1bGxXaWR0aFxyXG4gICAgPlxyXG4gICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJjbG9zZVwiPlxyXG4gICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJjbG9zZVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgIDxDbGVhckljb24gLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDwvRGlhbG9nVGl0bGU+XHJcblxyXG4gICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8QXZhdGFyIGFsdD1cInVzZXJuYW1lXCIgYXJpYS1sYWJlbD1cInByb2ZpbGVcIiAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBpZD1cIndyaXRlLW5ldy10d2l0XCJcclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICByb3dzPXs5fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLrrLTsiqjsnbzsnbQg7J287Ja064KY6rOgIOyeiOuCmOyalD9cIlxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG5cclxuICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVHdlZXR9XHJcbiAgICAgICAgICBsb2FkaW5nPXtBZGRUd2VldEFkZGluZ31cclxuICAgICAgICA+XHJcbiAgICAgICAgICDtirjsnJdcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgPC9EaWFsb2c+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgVHdpdExpbmUgZnJvbSBcIi4uL2NvbXBvbmVudC9Ud2l0LmpzXCI7XHJcbmltcG9ydCBJbmZvQm94IGZyb20gXCIuLi9jb21wb25lbnQvSW5mb0JveC5qc1wiO1xyXG5pbXBvcnQgVHdpdERpYWxvZyBmcm9tIFwiLi4vY29tcG9uZW50L1R3aXREaWFsb2cuanNcIjtcclxuaW1wb3J0IFR3aXRNZW51IGZyb20gXCIuLi9jb21wb25lbnQvVHdpdE1lbnUuanNcIjtcclxuXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgTE9BRF9UV0VFVF9SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHV4L3R3ZWV0czIuanNcIjtcclxuaW1wb3J0IHsgTE9BRF9JTkZPX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdXgvdXNlci5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgbXlJbmZvID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyUmVkdWNlci5sb2dJbkVycm9yKTtcclxuICBjb25zdCB0d2VldHMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnR3ZWV0UmVkdWNlci50d2VldHMpO1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBkaXNwYXRjaCh7XHJcbiAgICAvLyAgIHR5cGU6IExPQURfSU5GT19SRVFVRVNULFxyXG4gICAgLy8gfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPQURfVFdFRVRfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgPFR3aXRNZW51IGhhbmRsZUNsaWNrT3Blbj17aGFuZGxlQ2xpY2tPcGVufSAvPlxyXG5cclxuICAgICAgICA8VHdpdExpbmUgdHdlZXRzPXt0d2VldHN9IC8+XHJcbiAgICAgICAgPEluZm9Cb3ggLz5cclxuICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgPFR3aXREaWFsb2cgaGFuZGxlQ2xvc2U9e2hhbmRsZUNsb3NlfSBvcGVuPXtvcGVufSAvPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9