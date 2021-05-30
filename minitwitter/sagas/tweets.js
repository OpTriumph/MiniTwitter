import { call, put, takeLatest } from "redux-saga";
import axios from "axios";
import { tweetsAction } from "../redux/tweets";

const loadTweet = () => {
  return axios.get(`https://my-json-server.typicode.com/OpTriumph/demo/db`);
};

function* handleTweetLoad() {
  const { loadSucess, loadFail } = tweetsAction;
  try {
    const tweets = yield call(loadTweet);
    yield put(loadSucess(tweets));
  } catch (error) {
    yield put(loadFail(error));
  }
}

export function* watchTweetLoad() {
  const { load } = tweetsAction;
  yield takeLatest(load, handleTweetLoad);
}
