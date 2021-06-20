import { all, put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  LOAD_INFO_REQUEST,
  LOAD_INFOP_SUCCESS,
  LOAD_INFO_FAIL,
} from "../redux/user";

function loadInfo(data) {
  return axios.get("http://localhost:3065/user");
}

function* loadInfoRequest(action) {
  try {
    const res = yield call(loadInfo, action.data, {
      withCredentials: true,
    });
    yield put({
      type: LOAD_INFOP_SUCCESS,
      data: res.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_INFO_FAIL,
      error: error.response.data,
    });
  }
}

function loginPost(data) {
  return axios.post(
    "http://localhost:3065/auth/login",
    {
      email: data.email,
      password: data.password,
    },
    {
      withCredentials: true,
    }
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
    const res = yield call(signupPost, action.payload);
    yield put({
      type: SIGNUP_SUCCESS,
      data: res.data,
    });
  } catch (error) {
    yield put({
      type: SIGNUP_FAIL,
      error: error.response,
    });
  }
}

export default function* userSaga() {
  yield takeLatest(LOGIN_REQUEST, loginRequest);
  yield takeLatest(SIGNUP_REQUEST, signupRequest);
  yield takeLatest(LOAD_INFO_REQUEST, loadInfoRequest);
}
