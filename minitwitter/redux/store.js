import { configureStore } from "@reduxjs/toolkit";
// import { filterReducer } from "./filter";
import { tweetsReducer } from "./tweets";
import { userReducer } from "./user";

const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    user: userReducer,
  },
});

export default store;
