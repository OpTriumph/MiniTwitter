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

  changeNameLoading: false,
  changeNameDone: false,
  changeNameError: null,

  changeBioLoading: false,
  changeBioDone: false,
  changeBioError: null,

  myInfo: null, //Info of me
  userInfo: null, //Info of other user
};
const dummyUser = (data) => ({
  ...data,
  nickname: "FakeUser",
  id: 1,
  Bio: "this is fake user",
  Posts: [{ id: 1 }],
  Followings: [
    { nickname: "부기초" },
    { nickname: "Chanho Lee" },
    { nickname: "neue zeal" },
  ],
  Followers: [
    { nickname: "부기초" },
    { nickname: "Chanho Lee" },
    { nickname: "neue zeal" },
  ],
});

export const LOGIN_REQUEST = "user/LOGIN_REQUEST";
export const LOGIN_SUCCESS = "user/LOGIN_SUCESS";
export const LOGIN_FAIL = "user/LOGIN_FAIL";

export const SIGNUP_REQUEST = "user/SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "user/SIGNUP_SUCESS";
export const SIGNUP_FAIL = "user/SIGNUP_FAIL";

export const LOAD_INFO_REQUEST = "user/LOAD_INFO_REQUEST";
export const LOAD_INFOP_SUCCESS = "user/LOAD_INFO_SUCESS";
export const LOAD_INFO_FAIL = "user/LOAD_INFO_FAIL";

export const CHANGE_NAME_REQUEST = "user/LOAD_NAME_REQUEST";
export const CHANGE_NAME_SUCCESS = "user/LOAD_NAME_SUCESS";
export const CHANGE_NAME_FAIL = "user/LOAD_NAME_FAIL";

export const CHANGE_BIO_REQUEST = "user/LOAD_BIO_REQUEST";
export const CHANGE_BIO_SUCCESS = "user/LOAD_BIO_SUCESS";
export const CHANGE_BIO_FAIL = "user/LOAD_BIO_FAIL";

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
    case LOAD_INFO_REQUEST:
      state.loadInfoLoading = true;
      state.loadInfoDone = false;
      state.loadInfoError = null;
      break;
    case LOAD_INFOP_SUCCESS:
      state.loadInfoLoading = false;
      state.myInfo = dummyUser(action.data);
      state.loadInfoError = null;
      break;
    case LOAD_INFO_FAIL:
      state.loadInfoLoading = false;
      state.loadInfoError = action.error;
      break;
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

    case CHANGE_NAME_REQUEST:
      state.changeNameLoading = true;
      state.changeNameDone = false;
      state.changeNameError = null;
      break;
    case CHANGE_Name_SUCCESS:
      state.changeNameLoading = false;
      state.changeNameDone = true;

      state.myInfo.nickname = action.data.nickname;
      state.changeNameError = null;
      break;
    case CHANGE_NAME_FAIL:
      state.changeNameLoading = false;
      state.changeNameError = action.error;
      break;
    case CHANGE_BIO_REQUEST:
      state.changeBioLoading = true;
      state.changBioDone = false;
      state.changeBioError = null;
      break;
    case CHANGE_BIO_SUCCESS:
      state.changeBioDone = true;
      state.changeBioLoading = false;
      state.myInfo.Bio = action.data.nickname;
      state.changeBioError = null;
      break;
    case CHANGE_BIO_FAIL:
      state.changeBioLoading = false;
      state.changeBioError = action.error;
      break;

    default:
      break;
  }
  return state;
};

export default userReducer;
