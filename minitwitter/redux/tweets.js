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
  tweetCommenting: false,
  tweetCommentDone: false,
  tweetCommentError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null,
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
      state.tweets = state.tweets.concat(action.payload);
    },

    fetchTweetsFail: (state, action) => {
      state.tweetLoading = false;
      state.tweetLoadingError = action.payload;
    },
    //////////////////////////////////////////
    fetchUserTweets: (state, action) => {
      state.tweetLoading = true;
    },

    fetchUserTweetsSuccess: (state, action) => {
      state.tweetLoading = false;
      state.tweets = state.tweets.concat(action.payload);
    },

    fetchUserTweetsFail: (state, action) => {
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
    /////////////////////////////////////////
    addComment: (state, action) => {
      state.tweetCommenting = true;
    },
    addCommentSuccess: (state, action) => {
      let theOne = state.tweets.find((found) => found.id === action.payload.id);
      state.tweetCommenting = false;
      state.tweetCommentDone = true;
      theOne.comments.unshift(action.payload);
    },
    addCommentFail: (state, action) => {
      state.tweetCommenting = false;
      state.tweetCommentError = action.payload;
    },
    //////////////////////////////////////
    retweetTweet: (state, action) => {
      state.retweetLoading = true;
    },
    retweetTweetSuccess: (state, action) => {
      state.retweetLoading = false;
      state.retweetDone = true;
      state.tweets.unshift(action.payload);
    },
    retweetTweetFail: (state, action) => {
      state.retweetLoading = false;
      state.retweetError = action.payload;
    },
  },
});

export default tweetSlice;
