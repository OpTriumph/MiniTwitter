export const initialState = {
  AddTweetAdding: false,
  AddTweetDone: false,
  AddTweetError: null,
  tweets: [],
  LoadTweetLoading: false,
  LoadTweetDone: false,
  LoadTweetError: null,

  LikeTweetLoading: false,
  LikeTweetDone: false,
  LikeTweetError: null,
  UnlikeTweetLoading: false,
  UnlikeTweetDone: false,
  UnlikeTweetError: null,
  DeleteTweetLoading: false,
  DeleteTweetDone: false,
  DeleteTweetError: null,
};

export const ADD_TWEET_REQUEST = "ADD_TWEET_REQUEST";
export const ADD_TWEET_SUCCESS = "ADD_TWEET_SUCCESS";
export const ADD_TWEET_FAIL = "ADD_TWEET_FAIL";
export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAIL = "ADD_COMMENT_FAIL";
export const LOAD_TWEET_REQUEST = "LOAD_TWEET_REQUEST";
export const LOAD_TWEET_SUCCESS = "LOAD_TWEET_SUCCESS";
export const LOAD_TWEET_FAIL = "LOAD_TWEET_FAIL";
export const LIKE_TWEET_REQUEST = "LIKE_TWEET_REQUEST";
export const LIKE_TWEET_SUCCESS = "LIKE_TWEET_SUCCESS";
export const LIKE_TWEET_FAIL = "LIKE_TWEET_FAIL";
export const UNLIKE_TWEET_REQUEST = "UNLIKE_TWEET_REQUEST";
export const UNLIKE_TWEET_SUCCESS = "UNLIKE_TWEET_SUCCESS";
export const UNLIKE_TWEET_FAIL = "UNLIKE_TWEET_FAIL";
export const DELETE_TWEET_REQUEST = "DELETE_TWEET_REQUEST";
export const DELETE_TWEET_SUCCESS = "DELETE_TWEET_SUCCESS";
export const DELETE_TWEET_FAIL = "DELETE_TWEET_FAIL";

export const addTweetAction = (data) => {
  return {
    type: ADD_TWEET_REQUEST,
    payload: data,
  };
};

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
      console.log(state.tweets);
      break;
    case ADD_TWEET_FAIL:
      state.AddTweetAdding = false;
      state.AddTweetError = action;
      break;

    case DELETE_TWEET_REQUEST:
      return {
        ...state,
        DeleteTweetLoading: true,
        DeleteTweetDone: false,
        DeleteTweetError: null,
      };
    case DELETE_TWEET_SUCCESS:
      return {
        ...state,
        DeleteTweetLoading: false,
        DeleteTweetDone: true,
        tweets: tweets.filter((v) => v.id !== action.data.id),
      };
    case DELETE_TWEET_FAIL:
      return {
        ...state,
        DeleteTweetLoading: false,
        DeleteTweetError: action.error,
      };
    case LOAD_TWEET_REQUEST:
      return {
        ...state,
        LoadTweetLoading: true,
        LoadTweetDone: false,
        LoadTweetError: null,
      };
    case LOAD_TWEET_SUCCESS:
      return {
        LoadTweetLoading: false,
        LoadTweetDone: true,
        LoadTweetError: null,
        tweets: action.data,
      };
    case LOAD_TWEET_FAIL:
      state.LoadTweetLoading = false;
      state.LoadTweetError = action.error;
      break;
    case LIKE_TWEET_REQUEST:
      state.LikeTweetLoading = true;
      state.LikeTweetDone = false;
      state.LikeTweetError = null;
      break;
    case LIKE_TWEET_SUCCESS:
      const post = state.tweets.find((v) => v.id === action.data.id);
      post.Likers.push({ id: action.data.email });
      state.LikeTweetLoading = false;
      state.LikeTweetDone = true;
      break;
    case LIKE_TWEET_FAIL:
      state.LikeTweetLoading = false;
      state.LikeTweetError = action.error;
      break;
    default:
      break;
  }
  return state;
};

export default tweetReducer;
