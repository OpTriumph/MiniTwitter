import { configureStore } from "@reduxjs/toolkit";
// import { filterReducer } from "./filter";
import { tweetsReducer } from "./tweets";

const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
  },
});

export default store;
