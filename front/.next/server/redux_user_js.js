exports.id = "redux_user_js";
exports.ids = ["redux_user_js"];
exports.modules = {

/***/ "./redux/user.js":
/*!***********************!*\
  !*** ./redux/user.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "LOGIN_REQUEST": function() { return /* binding */ LOGIN_REQUEST; },
/* harmony export */   "LOGIN_SUCCESS": function() { return /* binding */ LOGIN_SUCCESS; },
/* harmony export */   "LOGIN_FAIL": function() { return /* binding */ LOGIN_FAIL; },
/* harmony export */   "SIGNUP_REQUEST": function() { return /* binding */ SIGNUP_REQUEST; },
/* harmony export */   "SIGNUP_SUCCESS": function() { return /* binding */ SIGNUP_SUCCESS; },
/* harmony export */   "SIGNUP_FAIL": function() { return /* binding */ SIGNUP_FAIL; },
/* harmony export */   "LOAD_INFO_REQUEST": function() { return /* binding */ LOAD_INFO_REQUEST; },
/* harmony export */   "LOAD_INFOP_SUCCESS": function() { return /* binding */ LOAD_INFOP_SUCCESS; },
/* harmony export */   "LOAD_INFO_FAIL": function() { return /* binding */ LOAD_INFO_FAIL; },
/* harmony export */   "logInAction": function() { return /* binding */ logInAction; },
/* harmony export */   "signUpAction": function() { return /* binding */ signUpAction; }
/* harmony export */ });
const initialState = {
  logInLoading: false,
  //try to login
  logInDone: false,
  logInError: null,
  loadInfoLoading: false,
  //load user info of logined
  loadInfoDone: false,
  loadInfoError: null,
  signUpLoading: false,
  //try to signup
  signUpDone: false,
  signUpError: null,
  myInfo: null,
  //Info of me
  userInfo: null //Info of other user

};
const LOGIN_REQUEST = "user/LOGIN_REQUEST";
const LOGIN_SUCCESS = "user/LOGIN_SUCESS";
const LOGIN_FAIL = "user/LOGIN_FAIL";
const SIGNUP_REQUEST = "user/SIGNUP_REQUEST";
const SIGNUP_SUCCESS = "user/SIGNUP_SUCESS";
const SIGNUP_FAIL = "user/SIGNUP_FAIL";
const LOAD_INFO_REQUEST = "user/LOAD_INFO_REQUEST";
const LOAD_INFOP_SUCCESS = "user/LOAD_INFO_SUCESS";
const LOAD_INFO_FAIL = "user/LOAD_INFO_FAIL";
const logInAction = data => {
  return {
    type: LOGIN_REQUEST,
    payload: data
  };
};
const signUpAction = data => {
  return {
    type: SIGNUP_REQUEST,
    payload: data
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      state.logInLoading = true;
      state.logInDone = false;
      state.logInError = null;
      break;

    case LOGIN_SUCCESS:
      state.logInDone = true;
      state.logInLoading = false;
      state.logInError = null;
      state.myInfo = action.data;
      break;

    case LOGIN_FAIL:
      state.logInLoading = false;
      state.logInError = action.error;
      break;

    case SIGNUP_REQUEST:
      state.signUpLoading = true;
      state.signUpDone = false;
      state.signUpError = null;
      break;

    case SIGNUP_SUCCESS:
      state.signUpLoading = false;
      state.signUpDone = true;
      break;

    case SIGNUP_FAIL:
      state.signUpLoading = false;
      state.signUpError = action.error;
      break;

    default:
      break;
  }

  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pdHdpdHRlci8uL3JlZHV4L3VzZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvYWRJbmZvTG9hZGluZyIsImxvYWRJbmZvRG9uZSIsImxvYWRJbmZvRXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwibXlJbmZvIiwidXNlckluZm8iLCJMT0dJTl9SRVFVRVNUIiwiTE9HSU5fU1VDQ0VTUyIsIkxPR0lOX0ZBSUwiLCJTSUdOVVBfUkVRVUVTVCIsIlNJR05VUF9TVUNDRVNTIiwiU0lHTlVQX0ZBSUwiLCJMT0FEX0lORk9fUkVRVUVTVCIsIkxPQURfSU5GT1BfU1VDQ0VTUyIsIkxPQURfSU5GT19GQUlMIiwibG9nSW5BY3Rpb24iLCJkYXRhIiwidHlwZSIsInBheWxvYWQiLCJzaWduVXBBY3Rpb24iLCJ1c2VyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsWUFBWSxHQUFHO0FBQzFCQyxjQUFZLEVBQUUsS0FEWTtBQUNMO0FBQ3JCQyxXQUFTLEVBQUUsS0FGZTtBQUcxQkMsWUFBVSxFQUFFLElBSGM7QUFLMUJDLGlCQUFlLEVBQUUsS0FMUztBQUtGO0FBQ3hCQyxjQUFZLEVBQUUsS0FOWTtBQU8xQkMsZUFBYSxFQUFFLElBUFc7QUFTMUJDLGVBQWEsRUFBRSxLQVRXO0FBU0o7QUFDdEJDLFlBQVUsRUFBRSxLQVZjO0FBVzFCQyxhQUFXLEVBQUUsSUFYYTtBQWExQkMsUUFBTSxFQUFFLElBYmtCO0FBYVo7QUFDZEMsVUFBUSxFQUFFLElBZGdCLENBY1Y7O0FBZFUsQ0FBckI7QUFpQkEsTUFBTUMsYUFBYSxHQUFHLG9CQUF0QjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxtQkFBdEI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsaUJBQW5CO0FBRUEsTUFBTUMsY0FBYyxHQUFHLHFCQUF2QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxvQkFBdkI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsa0JBQXBCO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsd0JBQTFCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsdUJBQTNCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLHFCQUF2QjtBQUVBLE1BQU1DLFdBQVcsR0FBSUMsSUFBRCxJQUFVO0FBQ25DLFNBQU87QUFDTEMsUUFBSSxFQUFFWCxhQUREO0FBRUxZLFdBQU8sRUFBRUY7QUFGSixHQUFQO0FBSUQsQ0FMTTtBQU1BLE1BQU1HLFlBQVksR0FBSUgsSUFBRCxJQUFVO0FBQ3BDLFNBQU87QUFDTEMsUUFBSSxFQUFFUixjQUREO0FBRUxTLFdBQU8sRUFBRUY7QUFGSixHQUFQO0FBSUQsQ0FMTTs7QUFPUCxNQUFNSSxXQUFXLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHM0IsWUFBVCxFQUF1QjRCLE1BQXZCLEtBQWtDO0FBQ3BELFVBQVFBLE1BQU0sQ0FBQ0wsSUFBZjtBQUNFLFNBQUtYLGFBQUw7QUFDRWUsV0FBSyxDQUFDMUIsWUFBTixHQUFxQixJQUFyQjtBQUNBMEIsV0FBSyxDQUFDekIsU0FBTixHQUFrQixLQUFsQjtBQUNBeUIsV0FBSyxDQUFDeEIsVUFBTixHQUFtQixJQUFuQjtBQUNBOztBQUNGLFNBQUtVLGFBQUw7QUFDRWMsV0FBSyxDQUFDekIsU0FBTixHQUFrQixJQUFsQjtBQUNBeUIsV0FBSyxDQUFDMUIsWUFBTixHQUFxQixLQUFyQjtBQUNBMEIsV0FBSyxDQUFDeEIsVUFBTixHQUFtQixJQUFuQjtBQUNBd0IsV0FBSyxDQUFDakIsTUFBTixHQUFla0IsTUFBTSxDQUFDTixJQUF0QjtBQUNBOztBQUNGLFNBQUtSLFVBQUw7QUFDRWEsV0FBSyxDQUFDMUIsWUFBTixHQUFxQixLQUFyQjtBQUNBMEIsV0FBSyxDQUFDeEIsVUFBTixHQUFtQnlCLE1BQU0sQ0FBQ0MsS0FBMUI7QUFDQTs7QUFFRixTQUFLZCxjQUFMO0FBQ0VZLFdBQUssQ0FBQ3BCLGFBQU4sR0FBc0IsSUFBdEI7QUFDQW9CLFdBQUssQ0FBQ25CLFVBQU4sR0FBbUIsS0FBbkI7QUFDQW1CLFdBQUssQ0FBQ2xCLFdBQU4sR0FBb0IsSUFBcEI7QUFDQTs7QUFFRixTQUFLTyxjQUFMO0FBQ0VXLFdBQUssQ0FBQ3BCLGFBQU4sR0FBc0IsS0FBdEI7QUFDQW9CLFdBQUssQ0FBQ25CLFVBQU4sR0FBbUIsSUFBbkI7QUFDQTs7QUFDRixTQUFLUyxXQUFMO0FBQ0VVLFdBQUssQ0FBQ3BCLGFBQU4sR0FBc0IsS0FBdEI7QUFDQW9CLFdBQUssQ0FBQ2xCLFdBQU4sR0FBb0JtQixNQUFNLENBQUNDLEtBQTNCO0FBQ0E7O0FBRUY7QUFDRTtBQWpDSjs7QUFtQ0EsU0FBT0YsS0FBUDtBQUNELENBckNEOztBQXVDQSwrREFBZUQsV0FBZixFIiwiZmlsZSI6InJlZHV4X3VzZXJfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vdHJ5IHRvIGxvZ2luXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLFxyXG5cclxuICBsb2FkSW5mb0xvYWRpbmc6IGZhbHNlLCAvL2xvYWQgdXNlciBpbmZvIG9mIGxvZ2luZWRcclxuICBsb2FkSW5mb0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRJbmZvRXJyb3I6IG51bGwsXHJcblxyXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvL3RyeSB0byBzaWdudXBcclxuICBzaWduVXBEb25lOiBmYWxzZSxcclxuICBzaWduVXBFcnJvcjogbnVsbCxcclxuXHJcbiAgbXlJbmZvOiBudWxsLCAvL0luZm8gb2YgbWVcclxuICB1c2VySW5mbzogbnVsbCwgLy9JbmZvIG9mIG90aGVyIHVzZXJcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dJTl9SRVFVRVNUID0gXCJ1c2VyL0xPR0lOX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR0lOX1NVQ0NFU1MgPSBcInVzZXIvTE9HSU5fU1VDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dJTl9GQUlMID0gXCJ1c2VyL0xPR0lOX0ZBSUxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfUkVRVUVTVCA9IFwidXNlci9TSUdOVVBfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgU0lHTlVQX1NVQ0NFU1MgPSBcInVzZXIvU0lHTlVQX1NVQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgU0lHTlVQX0ZBSUwgPSBcInVzZXIvU0lHTlVQX0ZBSUxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0lORk9fUkVRVUVTVCA9IFwidXNlci9MT0FEX0lORk9fUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9JTkZPUF9TVUNDRVNTID0gXCJ1c2VyL0xPQURfSU5GT19TVUNFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfSU5GT19GQUlMID0gXCJ1c2VyL0xPQURfSU5GT19GQUlMXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nSW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dJTl9SRVFVRVNULFxyXG4gICAgcGF5bG9hZDogZGF0YSxcclxuICB9O1xyXG59O1xyXG5leHBvcnQgY29uc3Qgc2lnblVwQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0lHTlVQX1JFUVVFU1QsXHJcbiAgICBwYXlsb2FkOiBkYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCB1c2VyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBMT0dJTl9SRVFVRVNUOlxyXG4gICAgICBzdGF0ZS5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBzdGF0ZS5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgc3RhdGUubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dJTl9TVUNDRVNTOlxyXG4gICAgICBzdGF0ZS5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICBzdGF0ZS5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgc3RhdGUubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgIHN0YXRlLm15SW5mbyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HSU5fRkFJTDpcclxuICAgICAgc3RhdGUubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHN0YXRlLmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgU0lHTlVQX1JFUVVFU1Q6XHJcbiAgICAgIHN0YXRlLnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBzdGF0ZS5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgIHN0YXRlLnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBTSUdOVVBfU1VDQ0VTUzpcclxuICAgICAgc3RhdGUuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBzdGF0ZS5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05VUF9GQUlMOlxyXG4gICAgICBzdGF0ZS5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHN0YXRlLnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=