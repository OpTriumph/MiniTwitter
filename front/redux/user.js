export const initialState = {
  logInLoading: false, //try to login
  logInDone: false,
  logInError: null,

  logOutLoading: false,
  logOutDone: false,
  logOutError: null,

  loadInfoLoading: false, //load user info of logined
  loadInfoDone: false,
  loadInfoError: null,

  signUpLoading: false, //try to signup
  signUpDone: false,
  signUpError: null,

  changeNameLoading: false,
  changeNameDone: false,
  changeNameError: null,

  myInfo: null, //Info of me
  userInfo: null, //Info of other user
};

export const LOGIN_REQUEST = "user/LOGIN_REQUEST";
export const LOGIN_SUCCESS = "user/LOGIN_SUCESS";
export const LOGIN_FAIL = "user/LOGIN_FAIL";

export const LOGOUT_REQUEST = "user/LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "user/LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "user/LOGOUT_FAIL";

export const SIGNUP_REQUEST = "user/SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "user/SIGNUP_SUCESS";
export const SIGNUP_FAIL = "user/SIGNUP_FAIL";

export const LOAD_INFO_REQUEST = "user/LOAD_INFO_REQUEST";
export const LOAD_INFO_SUCCESS = "user/LOAD_INFO_SUCESS";
export const LOAD_INFO_FAIL = "user/LOAD_INFO_FAIL";

export const CHANGE_NAME_REQUEST = "user/CHANGE_NAME_REQUEST";
export const CHANGE_NAME_SUCCESS = "user/CHANGE_NAME_SUCCESS";
export const CHANGE_NAME_FAIL = "user/CHANGE_NAME_FAIL";

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
      return {
        ...state,
        logInLoading: true,
        logInDone: false,
        logInError: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        logInDone: true,
        logInLoading: false,
        logInError: null,
        myInfo: action.data,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        logInLoading: false,
        logInError: action.error,
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        logOutLoading: true,
        logOutDone: false,
        logOutError: null,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        logOutLoading: false,
        logOutDone: true,
        logOutError: null,
        logInDone: false,
        myInfo: null,
        userInfo: null,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        logOutLoading: false,
        logOutError: action.error,
      };

    case SIGNUP_REQUEST:
      return {
        ...state,
        signUpLoading: true,
        signUpDone: false,
        signUpError: null,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        signUpDone: true,
      };

    case SIGNUP_FAIL:
      return {
        ...state,
        signUpLoading: false,
        signUpError: action.error,
      };

    case LOAD_INFO_REQUEST:
      return {
        ...state,
        loadInfoLoading: true,
        loadInfoDone: false,
        loadInfoError: null,
      };

    case LOAD_INFO_SUCCESS:
      return {
        ...state,
        loadInfoDone: true,
        loadInfoLoading: false,
        myInfo: action.data,
      };
    case LOAD_INFO_FAIL:
      return {
        ...state,
        loadInfoLoading: false,
        loadInfoError: action.error,
      };

    case CHANGE_NAME_REQUEST:
      return {
        ...state,
        changeNameLoading: true,
        changeNameDone: false,
        changeNameError: null,
      };

    case CHANGE_NAME_SUCCESS:
      return {
        ...state,
        changeNameLoading: false,
        changeNameDone: true,
        myInfo: action.data,
      };
    case CHANGE_NAME_FAIL:
      return {
        ...state,
        changeNameLoading: false,
        changeNameError: action.error,
      };

    default:
      return state;
  }
};

export default userReducer;
