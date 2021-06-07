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

const handlefetchUserTweets = function* () {
  try {
    const response = yield call(() =>
      axios.get(
        `https://my-json-server.typicode.com/OpTriumph/demo/user/${data}/posts`
      )
    );
    yield put(tweetSlice.actions.fetchUserTweetsSuccess(response.data));
  } catch (error) {
    yield put(tweetSlice.actions.fetchUserTweetsFail(error));
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
    const response = yield call(
      () =>
        axios.post(`https://my-json-server.typicode.com/OpTriumph/demo/posts`)
      // axios.post(`localhost:3065/post`)
    );
    yield put(tweetSlice.actions.addTweetSuccess(response.data));
  } catch (error) {
    yield put(tweetSlice.actions.addTweetFail(error));
  }
};

const handledeleteTweet = function* (action) {
  try {
    const data = action.payload.id;
    console.log("delete post:", data);
    const response = yield call(
      () =>
        axios.delete(
          `https://my-json-server.typicode.com/OpTriumph/demo/posts/${data}`
        )
      // axios.post(`localhost:3065/post/${data.id}`)
    );
    yield put(tweetSlice.actions.deleteTweetSuccess(response.data));
  } catch (error) {
    yield put(tweetSlice.actions.deleteTweetFail(error));
  }
};

const handlelikeTweet = function* (action) {
  try {
    const data = action.payload;
    console.log("post liked");
    const response = yield call(() =>
      axios.post(
        `https://my-json-server.typicode.com/OpTriumph/demo/posts/${data}/likes`
      )
    );
    yield put(tweetSlice.actions.likeTweetSuccess(response.data));
  } catch (error) {
    yield put(tweetSlice.actions.likeTweetFail(error));
  }
};

const handleunlikeTweet = function* (action) {
  try {
    const data = action.payload;
    console.log("post unliked");
    const response = yield call(() =>
      axios.delete(
        `https://my-json-server.typicode.com/OpTriumph/demo/posts/${data}/likes`
      )
    );
    yield put(tweetSlice.actions.unlikeTweetSuccess(response.data));
  } catch (error) {
    yield put(tweetSlice.actions.unlikeTweetFail(error));
  }
};

const handleaddComment = function* (action) {
  try {
    const data = action.payload;
    console.log("addin comment", data);
    const response = yield call(
      () =>
        axios.post(
          `https://my-json-server.typicode.com/OpTriumph/demo/posts/${data.id}/comment`
        )
      // axios.post(`localhost:3065/post/${data.id}/comment`)
    );
    yield put(tweetSlice.actions.addCommentSuccess(response.data));
  } catch (error) {
    yield put(tweetSlice.actions.addCommentFail(error));
  }
};

const handleRetweet = function* (action) {
  try {
    const data = action.payload;
    console.log("retweet", data);
    const response = yield call(() =>
      axios.post(
        `https://my-json-server.typicode.com/OpTriumph/demo/posts/${data}/retweet`
      )
    );
    yield put(tweetSlice.actions.retweetTweetSuccess(response.data));
  } catch (error) {
    yield put(tweetSlice.actions.retweetTweetFail(error));
  }
};

const tweetSaga = [
  takeLatest(tweetSlice.actions.fetchTweets, handlefetchTweets),
  takeLatest(tweetSlice.actions.deleteTweetSuccess, handledeleteTweet),
  // takeLatest(tweetSlice.actions.fetchTweetSuccess, handlefetchTweetSuccess),
  takeLatest(tweetSlice.actions.addTweet, handleaddTweet),
  takeLatest(tweetSlice.actions.likeTweet, handlelikeTweet),
  takeLatest(tweetSlice.actions.unlikeTweet, handleunlikeTweet),
  takeLatest(tweetSlice.actions.addComment, handleaddComment),
  takeLatest(tweetSlice.actions.retweetTweet, handleRetweet),
];
export default tweetSaga;
