import { call, put, select, takeLatest } from "redux-saga/effects";
import axios from "axios";
import tweetSlice from "../redux/tweets";

const handlefetchTweets = function* () {
  try {
    const response = yield call(() =>
      axios.get(`https://my-json-server.typicode.com/OpTriumph/demo/posts`)
    );
    yield put(tweetSlice.actions.fetchTweetsSuccess(response.data));
  } catch (error) {
    yield put(tweetSlice.actions.fetchTweetsFail(error));
  }
};

// const handlefetchTweetsSuccess = function* (action) {
//   const data = action.payload;
//   const id = data[0].id;

//   try {
//     const response = yield call(
//       (id) => axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`),
//       id
//     );
//     yield put(tweetSlice.actions.fetchTweetSuccess(response.data));
//   } catch (error) {
//     yield put(tweetSlice.actions.fetchTweetsFail(error));
//   }
// };

// const handlefetchTweetSuccess = function* () {
//   const state = yield select(({ tweetReducer }) => tweetReducer);
//   console.log("handlefetchTweetSuccess", state);
// };

const handleaddTweet = function* (action) {
  try {
    const data = action.payload;
    console.log("addin post with", data);
    const response = yield call(() =>
      axios.post(`https://my-json-server.typicode.com/OpTriumph/demo/posts`)
    );
    yield put(tweetSlice.actions.addTweetSuccess(response.data));
  } catch (error) {
    yield put(tweetSlice.actions.addTweetFail(error));
  }
};

const handleLikeTweet = function* (action) {
  const data = action.payload;
  const id = data.id;
  try {
    const response = yield call(
      (id) =>
        axios.patch(
          `https://my-json-server.typicode.com/OpTriumph/demo/posts/${id}`
        ),
      id
    );
    yield put(tweetSlice.actions.likeTweetSuccess(response.data));
  } catch (error) {
    yield put(tweetSlice.actions.likeTweetFail(error));
  }
};

const tweetSaga = [
  takeLatest(tweetSlice.actions.fetchTweets, handlefetchTweets),
  // takeLatest(tweetSlice.actions.fetchTweetsSuccess, handlefetchTweetsSuccess),
  // takeLatest(tweetSlice.actions.fetchTweetSuccess, handlefetchTweetSuccess),
  takeLatest(tweetSlice.actions.addTweet, handleaddTweet),
  // takeLatest(tweetSlice.action.likeTweet, handleLikeTweet),
];
export default tweetSaga;
