import { all, put, call, takeLatest, take } from "redux-saga/effects";
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
  return axios.post("http://localhost:3065/post/comment", data, {
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
      error: err.response.data,
    });
  }
}

function* handleloadTweets() {
  try {
    const result = yield call(() => axios.get("  http://localhost:3065/posts"));

    yield put({
      type: LOAD_TWEET_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_TWEET_FAIL,
      error: err.response,
    });
  }
}
function deleteTweet(data) {
  return axios.delete(`http://localhost:3065/posts/${data}`, {
    // withCredentials: true,
  });
}

function* handleDeleteTweet(action) {
  console.log(action);
  try {
    const result = yield call(deleteTweet, action.payload);
    yield put({
      type: DELETE_TWEET_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: DELETE_TWEET_FAIL,
      error: err.response.data,
    });
  }
}
// function* handleloadTweets() {
//   try {
//     const result = yield call(() =>
//       axios.get("https://jsonplaceholder.typicode.com/posts")
//     );

//     yield put({
//       type: LOAD_TWEET_SUCCESS,
//       data: result.data,
//     });
//   } catch (err) {
//     console.error(err);
//     yield put({
//       type: LOAD_TWEET_FAIL,
//       error: err.response,
//     });
//   }
// }

export default function* tweetSaga() {
  yield takeLatest(ADD_TWEET_REQUEST, handleAddTweet);
  yield takeLatest(ADD_COMMENT_REQUEST, handleAddComment);
  yield takeLatest(LOAD_TWEET_REQUEST, handleloadTweets);
  yield takeLatest(DELETE_TWEET_REQUEST, handleDeleteTweet);
}
