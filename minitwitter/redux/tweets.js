import { createReducer, createAction } from "@reduxjs/toolkit";
// import { MOCK_DATA } from "../pages/home";
import { v4 as uuid } from "uuid";

const MOCK_DATA = [
  {
    id: "1111",
    text: "this is a Mock tweet ",
    like: 11,
    retweet: 21,
    user: {
      userid: "tweet1",
      userName: "MockUser",
    },
    mention: [],

    time: "May 25",
  },
];

export const addTweet = createAction("tweets/add");
export const deleteTweet = createAction("tweets/delete");
export const likeTweet = createAction("tweets/like");
const timestamp = require("time-stamp");

export const tweetsReducer = createReducer(MOCK_DATA, (builder) => {
  builder
    .addCase(addTweet, (state, action) => {
      const tweet = {
        id: uuid(),
        text: action.payload,
        like: 0,
        retweet: 0,
        user: {
          userid: uuid(),
          userName: "MockUser",
          userInfo: "implementing info",
        },
        mention: [],
        time: timestamp("YYYY/MM/DD HH:mm:ss"),
      };
      state.push(tweet);
    })
    .addCase(likeTweet, (state, action) => {
      const tweet = state.find((tweet) => tweet.id === action.payload);
      tweet.like = tweet.like + 1;
    })
    .addCase(deleteTweet, (state, action) => {
      const index = state.findIndex((tweet) => tweet.id === action.payload);
      state.splice(index, 1);
    });
});
