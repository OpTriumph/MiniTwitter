import { createReducer, createAction, createSelector } from "@reduxjs/toolkit";
// import { MOCK_DATA } from "../pages/home";
import { v4 as uuid } from "uuid";

const initialState = {
  tweets: [],
  tweetLoading: false,
  tweetLoadingDone: false,
  tweetLoadingError: null,
  // tweetLiking: false,
  // tweetLikingDone: false,
  // tweetLikingError: null,
  // tweetUnliking: false,
  // tweetUnlikingDone: false,
  // tweetUnlikingError: null,
  // tweetRemoving: false,
  // tweetRemovingDone: false,
  // tweetRemovingError: null,
  // tweetPosting: false,
  // tweetPostingDone: false,
  // tweetPostingError: null,
};

const tweetReducers = {
  load: (state) => {
    state.tweetLoading = true;
  },
  loadSuccess: (state, { payload: tweets }) => {
    state.tweetLoading = false;
    state.tweets = tweets;
    state.tweetLoadingDone = true;
  },
  loadFail: (state, { payload: error }) => {
    state.tweetLoading = false;
    state.tweetLoadingError = error;
  },
};

const name = "tweets";
const tweetSlice = createSlice({
  name,
  initialState,
  tweetReducers,
});

const selectAllState = createSelector(
  (state) => state.tweetLoading,
  (state) => state.tweet,
  (state) => state.tweetLoadingError,
  (state) => state.tweetLoadingDone,
  (tweetLoading, tweet, tweetLoadingError, tweetLoadingDone) => {
    return { tweetLoading, tweet, tweetLoadingError, tweetLoadingDone };
  }
);

export const tweetSelector = {
  all: (state) => selectAllState(state[tweets]),
};

export const tweets = slice.name;
export const tweetsReducer = slice.reducer;
export const tweetsAction = slice.actions;

// const MOCK_DATA = [
//   {
//     id: "1111",
//     user: { userName: "MockUser", userid: "238151-8dsdf91-412" },
//     text: "this is a Mock tweet ",
//     like: 11,
//     retweet: 21,
//     mention: [],
//     time: "May 25",
//   },
// ];

// export const addTweet = createAction("tweets/add");
// export const deleteTweet = createAction("tweets/delete");
// export const likeTweet = createAction("tweets/like");
// const timestamp = require("time-stamp");

// export const tweetsReducer = createReducer(MOCK_DATA, (builder) => {
//   builder
//     .addCase(addTweet, (state, action) => {
//       const tweet = {
//         id: uuid(),
//         text: action.payload,
//         like: 0,
//         retweet: 0,
//         user: {
//           userid: uuid(),
//           userName: "MockUser",
//           userInfo: "implementing info",
//         },
//         mention: [],
//         time: timestamp("YYYY/MM/DD HH:mm:ss"),
//       };
//       state.push(tweet);
//     })
//     .addCase(likeTweet, (state, action) => {
//       const tweet = state.find((tweet) => tweet.id === action.payload);
//       tweet.like = tweet.like + 1;
//     })
//     .addCase(deleteTweet, (state, action) => {
//       const index = state.findIndex((tweet) => tweet.id === action.payload);
//       state.splice(index, 1);
//     });
// });
