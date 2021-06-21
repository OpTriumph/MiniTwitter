import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  ADD_TWEET_REQUEST,
  ADD_TWEET_SUCCESS,
  ADD_TWEET_FAIL,
  LOAD_TWEET_REQUEST,
  LOAD_TWEET_SUCCESS,
  LOAD_TWEET_FAIL,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_FAIL,
  DELETE_TWEET_REQUEST,
  DELETE_TWEET_SUCCESS,
  DELETE_TWEET_FAIL,
  LIKE_TWEET_REQUEST,
  LIKE_TWEET_SUCCESS,
  LIKE_TWEET_FAIL,
  UNLIKE_TWEET_REQUEST,
  UNLIKE_TWEET_SUCCESS,
  UNLIKE_TWEET_FAIL,
} from "../redux/post.js";

function addTweet(data) {
  return axios.post("http://localhost:3065/post", data, {
    withCredentials: true,
  });
}

function* handleAddTweet(action) {
  try {
    const result = yield call(addTweet, action.data);
    yield put({
      type: ADD_TWEET_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_TWEET_FAIL,
      error: err.response.data,
    });
  }
}

function addComment(data) {
  return axios.post(`http://localhost:3065/${postid}/comment`, data, {
    withCredentials: true,
  });
}

function* handleAddComment(action) {
  try {
    const result = yield call(addComment, action.data);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_COMMENT_FAIL,
      error: err.response,
    });
  }
}

function loadTweet() {
  return axios.get("http://localhost:3065/posts", { withCredentials: true });
}
function* handleloadTweets() {
  try {
    const res = yield call(loadTweet);
    yield put({
      type: LOAD_TWEET_SUCCESS,
      data: res.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_TWEET_FAIL,
      error: err.response,
    });
  }
}

function likeTweet(data) {
  return axios.patch(
    "http://localhost:3065/post/${post_id}/like",
    {},
    {
      withCredentials: true,
    }
  );
}

function* handlelikeTweet(action) {
  try {
    const result = yield call(likeTweet);
    yield put({
      type: LIKE_TWEET_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LIKE_TWEET_FAIL,
      error: err.response.data,
    });
  }
}

function unlikeTweet(data) {
  return axios.post("http://localhost:3065/", data, {
    withCredentials: true,
  });
}

function* handleunlikeTweet(action) {
  try {
    const result = yield call(unlikeTweet, action.data);
    yield put({
      type: UNLIKE_TWEET_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UNLIKE_TWEET_FAIL,
      error: err.response.data,
    });
  }
}

function deleteTweet(postid) {
  const url = `http://localhost:3065/post/${postid}`;
  return axios.delete(url, {
    withCredentials: true,
  });
}

function* handledeleteTweet(action) {
  try {
    yield call(deleteTweet, action.data);
    yield put({
      type: DELETE_TWEET_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: DELETE_TWEET_FAIL,
      error: err.response.data,
    });
  }
}

export default function* tweetSaga() {
  yield takeLatest(ADD_TWEET_REQUEST, handleAddTweet);
  yield takeLatest(ADD_COMMENT_REQUEST, handleAddComment);
  yield takeLatest(LOAD_TWEET_REQUEST, handleloadTweets);
  //yield takeLatest(LIKE_TWEET_REQUEST, handlelikeTweet);
  //yield takeLatest(UNLIKE_TWEET_REQUEST, handleunlikeTweet);
  yield takeLatest(DELETE_TWEET_REQUEST, handledeleteTweet);
}
