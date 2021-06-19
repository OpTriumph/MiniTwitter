export const initialState = {
  AddTweetAdding: false,
  AddTweetDone: false,
  AddTweetError: null,
  tweets: [],
  LoadTweetLoading: false,
  LoadTweetDone: false,
  LoadTweetError: null,
};

export const ADD_TWEET_REQUEST = "ADD_TWEET_REQUEST";
export const ADD_TWEET_SUCCESS = "ADD_TWEET_SUCCESS ";
export const ADD_TWEET_FAIL = "ADD_TWEET_FAIL ";
export const LOAD_TWEET_REQUEST = "LOAD_TWEET_REQUEST";
export const LOAD_TWEET_SUCCESS = "LOAD_TWEET_SUCCESS";
export const LOAD_TWEET_FAIL = "LOAD_TWEET_FAIL";

export const addtweet = (data) => ({
  type: ADD_TWEET_REQUEST,
  data,
});

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TWEET_REQUEST:
      state.AddTweetAdding = true;
      state.AddTweetDone = false;
      state.AddTweetError = null;
      break;
    case ADD_TWEET_SUCCESS:
      state.AddTweetAdding = false;
      state.AddTweetDone = true;
      state.tweets.unshift(action.data);
      break;
    case ADD_TWEET_FAIL:
      state.AddTweetAdding = false;
      state.AddTweetError = action.error;
      break;
    case LOAD_TWEET_REQUEST:
      state.LoadTweetLoading = true;
      state.LoadTweetDone = false;
      state.LoadTweetError = null;
    case LOAD_TWEET_SUCCESS:
      state.LoadTweetLoading = false;
      state.LoadTweetDone = true;
      state.LoadTweetError = null;
      state.tweets.concat(action.data);

    case LOAD_TWEET_FAIL:
      state.LoadTweetLoading = false;
      state.LoadTweetError = action.error;
    default:
      break;
  }
  return state;
};

export default tweetReducer;
