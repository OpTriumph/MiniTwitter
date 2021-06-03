import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  tweets: [],
  tweet: {},
  error: {},
};

const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    fetchTweets: (state, action) => {
      state.isLoading = true;
      state.tweets = [];
      state.tweet = {};
      state.error = {};
    },

    fetchTweetsSuccess: (state, action) => {
      state.isLoading = false;
      state.tweets = action.payload;
    },

    fetchTweetsFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    fetchTweet: (state, action) => {
      state.isLoading = true;
      state.tweet = {};
      state.error = {};
    },

    fetchTweetSuccess: (state, action) => {
      state.isLoading = false;
      state.tweet = action.payload;
    },

    fetchTweetFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    ////////////////////////////////////////////////////////

    addTweet: (state, action) => {
      state.isLoading = true;
    },
    addTweetSuccess: (state, action) => {
      state.isLoading = false;
      state.tweets.unshift(action.payload);
    },
    addTweetFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    ////////////////////////////////
    likeTweet: (state, action) => {
      state.isLoading = true;
    },
    likeTweetSuccess: (state, action) => {
      state.isLoading = false;
      state.tweet = state.push(tweet);
    },
    likeTweetFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default tweetSlice;
