import { all, put, call, takeLatest, take } from "redux-saga/effects";
import axios from "axios";

import {
  ADD_TWEET_REQUEST,
  ADD_TWEET_SUCCESS,
  ADD_TWEET_FAIL,
  LOAD_TWEET_REQUEST,
  LOAD_TWEET_SUCCESS,
  LOAD_TWEET_FAIL,
} from "../redux/post.js";

function addTweet(data) {
  console.log(data);
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
  yield takeLatest(ADD_TWEET_REQUEST, handleAddTweet);
}
