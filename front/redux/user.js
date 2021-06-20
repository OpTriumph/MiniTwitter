export const initialState = {
  logInLoading: false, //try to login
  logInDone: false,
  logInError: null,

  loadInfoLoading: false, //load user info of logined
  loadInfoDone: false,
  loadInfoError: null,

  signUpLoading: false, //try to signup
  signUpDone: false,
  signUpError: null,

  myInfo: null, //Info of me
  userInfo: null, //Info of other user
};

export const LOGIN_REQUEST = "user/LOGIN_REQUEST";
export const LOGIN_SUCCESS = "user/LOGIN_SUCESS";
export const LOGIN_FAIL = "user/LOGIN_FAIL";

export const SIGNUP_REQUEST = "user/SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "user/SIGNUP_SUCESS";
export const SIGNUP_FAIL = "user/SIGNUP_FAIL";

export const LOAD_INFO_REQUEST = "user/LOAD_INFO_REQUEST";
export const LOAD_INFO_SUCCESS = "user/LOAD_INFO_SUCESS";
export const LOAD_INFO_FAIL = "user/LOAD_INFO_FAIL";

export const logInAction = (data) => {
  return {
    type: LOGIN_REQUEST,
    payload: data,
  };
};
export const signUpAction = (data) => {
  return {
    type: SIGNUP_REQUEST,
    payload: data,
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
    case LOAD_INFO_REQUEST:
      state.loadInfoLoading = true;
      state.loadInfoDone = false;
      state.loadInfoError = null;
      break;
    case LOAD_INFO_SUCCESS:
      state.loadInfoLoading = false;
      state.myInfo = action.data;
      state.loadInfoError = null;
      break;
    case LOAD_INFO_FAIL:
      state.loadInfoLoading = false;
      state.loadInfoError = action.error;
      break;
    default:
      break;
  }
  return state;
};

export default userReducer;
