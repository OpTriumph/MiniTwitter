import createSagaMiddleware from "redux-saga";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { all } from "redux-saga/effects";
import tweetSlice from "../redux/tweets";
import tweetSaga from "../sagas/tweets";

const rootSaga = function* () {
  yield all([...tweetSaga]);
};

const createTweetStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    combineReducers({
      tweetReducer: tweetSlice.reducer,
    }),
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default createTweetStore;
