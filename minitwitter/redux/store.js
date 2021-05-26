import { configureStore } from "@reduxjs/toolkit";

import { tweetsReducer } from "./tweets";
import { userReducer } from "./user";

const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    User: userReducer,
  },
});

export default store;
