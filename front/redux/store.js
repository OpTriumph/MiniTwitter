import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import tweetReducer from "./post";
import userReducer from "./user";
import { combineReducers } from "redux";

import { all } from "redux-saga/effects";
import userSaga from "../sagas/user";
import tweetSaga from "../sagas/post";

const bindMiddleware = (middleware) => {
  return composeWithDevTools(applyMiddleware(...middleware));
  //return applyMiddleware(...middleware)
};

const rootReducer = combineReducers({
  userReducer,
  tweetReducer,
});

function* rootSaga() {
  yield all([userSaga(), tweetSaga()]);
}

const createTweetStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(createTweetStore, { debug: true });
