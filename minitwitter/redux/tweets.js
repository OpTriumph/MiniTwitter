import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  tweets: [],
  tweet: {},
  error: {},
  likeTweetLoading: false,
  likeTweetDone: false,
  likeTweetError: null,
  addTweetLoading: false,
  addTweetDone: false,
  addTweetError: null,
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

    // fetchTweet: (state, action) => {
    //   state.isLoading = true;
    //   state.tweet = {};
    //   state.error = {};
    // },

    // fetchTweetSuccess: (state, action) => {
    //   state.isLoading = false;
    //   state.tweet = action.payload;
    // },

    // fetchTweetFail: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    ////////////////////////////////////////////////////////

    addTweet: (state, action) => {
      state.addTweetLoading = true;
    },
    addTweetSuccess: (state, action) => {
      state.addTweetLoading = false;
      state.addTweetDone = true;
      state.tweets.unshift(action.payload);
    },
    addTweetFail: (state, action) => {
      state.addTweetLoading = false;
      state.addTweetError = action.payload;
    },

    ////////////////////////////////
    likeTweet: (state, action) => {
      state.likeTweetLoading = true;
    },
    likeTweetSuccess: (state, action) => {
      let theOne = state.tweets.find((found) => found.id === action.payload.id);
      state.likeTweetLoading = false;
      state.likeTweetDone = true;
      state.tweet.likes += 1;
    },
    likeTweetFail: (state, action) => {
      state.likeTweetLoading = false;
      state.likeTweetError = action.payload;
    },
  },
});

export default tweetSlice;
