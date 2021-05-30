import {
  configureStore,
  combineReducers,
  createSelector,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { tweets, tweetsReducer } from "../redux/tweets";
import { watchTweetLoad } from "../sagas/tweets";

export const rootReducer = combineReducers({
  [tweets]: tweetsReducer,
});

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([watchTweetLoad()]);
}

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [sagaMiddleware],
  });
  sagaMiddleware.run(rootSaga);
  return store;
};
export default createStore;
// import { configureStore } from "@reduxjs/toolkit";

// import { tweetsReducer } from "./tweets";
// import { userReducer } from "./user";

// const store = configureStore({
//   reducer: {
//     tweets: tweetsReducer,
//     User: userReducer,
//   },
// });

// export default store;
