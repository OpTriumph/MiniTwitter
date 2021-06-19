import { all, put, call, takeLatest, take } from "redux-saga/effects";
import axios from "axios";

import {
  ADD_TWEET_REQUEST,
  ADD_TWEET_SUCCESS,
  ADD_TWEET_FAIL,
  LOAD_TWEET_REQUEST,
  LOAD_TWEET_SUCCESS,
  LOAD_TWEET_FAIL,
} from "../redux/tweets2";

function addPost(data) {
  return axios.post("https://jsonplaceholder.typicode.com/posts", {
    text: data,
  });
}

function* handleaddPost(action) {
  try {
    const result = yield call(addPost, action.payload);
    yield put({
      type: ADD_TWEET_SUCCESS,
      data: result.data,
    });
    // yield put({
    //   type: ADD_TWEET_TO_ME,
    //   data: result.data.id,
    // });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_TWEET_FAIL,
      error: err.response.data,
    });
  }
}

// function loadTweets(data) {
//   return axios.get(`https://jsonplaceholder.typicode.com/posts`);
// }

function* handleloadTweets() {
  try {
    const result = yield call(() =>
      axios.get("https://jsonplaceholder.typicode.com/posts")
    );

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

export default function* tweetSaga() {
  yield takeLatest(ADD_TWEET_REQUEST, handleaddPost);
  yield takeLatest(LOAD_TWEET_REQUEST, handleloadTweets);
}
