import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_REQUEST,
} from "../redux/user";

function loginPost(data) {
  return axios.post(
    "http://localhost:3065/auth/login",
    {
      email: data.email,
      password: data.password,
    },
    { withCredentials: true }
  );
}

function* loginRequest(action) {
  try {
    const res = yield call(loginPost, action.payload);
    yield put({
      type: LOGIN_SUCCESS,
      data: res.data,
    });
  } catch (error) {
    yield put({
      type: LOGIN_FAIL,
      error: error.response,
    });
  }
}

function signupPost(data) {
  return axios.post("http://localhost:3065/user", {
    email: data.email,
    password: data.password,
    nickname: data.nickname,
  });
}
function* signupRequest(action) {
  try {
    yield call(signupPost, action.payload);
    yield put({
      type: SIGNUP_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: SIGNUP_FAIL,
      error: error.response,
    });
  }
}
function logoutPost() {
  return axios.post("http://localhost:3065/user/logout");
}
function* logoutRequest(action) {
  try {
    yield call(logoutPost);
    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: LOGOUT_FAIL,
      error: error,
    });
  }
}
export default function* userSaga() {
  yield takeLatest(LOGIN_REQUEST, loginRequest);
  yield takeLatest(SIGNUP_REQUEST, signupRequest);
  yield takeLatest(LOGOUT_REQUEST, logoutRequest);
}
