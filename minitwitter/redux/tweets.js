import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tweets: [],
  tweet: {},
  tweetLoading: false,
  tweetLoadingDone: false,
  tweetLoadingError: null,
  likeTweetLoading: false,
  likeTweetDone: false,
  likeTweetError: null,
  unlikeTweetLoading: false,
  unlikeTweetDone: false,
  unlikeTweetError: null,
  addTweetLoading: false,
  addTweetDone: false,
  addTweetError: null,
  deleteTweetLoading: false,
  deleteTweetDone: false,
  deleteTweetError: null,
};

const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    fetchTweets: (state, action) => {
      state.tweetLoading = true;
    },

    fetchTweetsSuccess: (state, action) => {
      state.tweetLoading = false;
      state.tweets = action.payload;
    },

    fetchTweetsFail: (state, action) => {
      state.tweetLoading = false;
      state.tweetLoadingError = action.payload;
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
    deleteTweet: (state, action) => {
      state.deleteTweetLoading = true;
    },
    deleteTweetSuccess: (state, action) => {
      state.deleteTweetLoading = false;
      state.deleteTweetDone = true;
      state.tweets = state.tweets.filter((v) => v.id !== action.payload.id);
    },
    deleteTweetFail: (state, action) => {
      state.deleteTweetLoading = false;
      state.deleteTweetError = action.payload;
    },
    ////////////////////////////////
    likeTweet: (state, action) => {
      state.likeTweetLoading = true;
    },
    likeTweetSuccess: (state, action) => {
      let theOne = state.tweets.find((found) => found.id === action.payload.id);
      state.likeTweetLoading = false;
      state.likeTweetDone = true;
      theOne.tweet.likes += 1;
    },
    likeTweetFail: (state, action) => {
      state.likeTweetLoading = false;
      state.likeTweetError = action.payload;
    },
    ///////////////////////////////
    unlikeTweet: (state, action) => {
      state.unlikeTweetLoading = true;
    },
    unlikeTweetSuccess: (state, action) => {
      let theOne = state.tweets.find((found) => found.id === action.payload.id);
      state.unlikeTweetLoading = false;
      state.unlikeTweetDone = true;
      theOne.tweet.likes -= 1;
    },
    unlikeTweetFail: (state, action) => {
      state.unlikeTweetLoading = false;
      state.unlikeTweetError = action.payload;
    },
  },
});

export default tweetSlice;
