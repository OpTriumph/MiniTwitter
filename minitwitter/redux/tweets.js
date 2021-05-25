import { createReducer, createAction } from "@reduxjs/toolkit";
// import { MOCK_DATA } from "../pages/home";
import { v4 as uuid } from "uuid";

const MOCK_DATA = [
  {
    id: "1111",
    text: "this is ",
    like: 0,
    retweet: 0,
    mention: [],
    user: "React",
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
        mention: [],
        user: "",
        time: timestamp("YYYY/MM/DD:mm:ss"),
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
// const [mention, setMention] = useState("");

// const addTweet = (text) => {
//   const tweet = {
//     id: uuid(),
//     text,
//     like: 0,
//     retweet: 0,
//     mention: [],
//     user: "",
//     time: timestamp("YYYY/MM/DD:mm:ss"),
//   };
//   const newTweets = [...tweets, tweet];
//   setTweets(newTweets);
// };

// const likeTweet = (id) => {
//   const newTweet = tweets.map((tweet) => {
//     if (tweet.id === id) return { ...tweet, like: tweet.like + 1 };
//     return tweet;
//   });
//   setTweets(newTweet);
// };

// const doRetweet = (id) => {
//   const newTweet = tweets.map((tweet) => {
//     if (tweet.id === id) return { ...tweet, like: tweet.like + 1 };
//     return tweet;
//   });
//   setTweets(newTweet);
// };

// const deleteTweet = (id) => {
//   const newTweets = tweets.filter((tweet) => tweet.id !== id);
//   setTweets(newTweets);
// };
