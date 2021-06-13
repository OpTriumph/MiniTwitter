import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";

import userReducer from "./user";
import { combineReducers } from "redux";

import { all } from "redux-saga/effects";
import userSaga from "../sagas/user";

const bindMiddleware = (middleware) => {
  return composeWithDevTools(applyMiddleware(...middleware));
  //return applyMiddleware(...middleware)
};

const rootReducer = combineReducers({
  userReducer,
});

function* rootSaga() {
  yield all([userSaga()]);
}

const createTweetStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(createTweetStore, { debug: true });