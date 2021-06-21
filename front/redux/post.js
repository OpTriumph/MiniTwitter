export const initialState = {
  AddTweetLoadding: false,
  AddTweetDone: false,
  AddTweetError: null,

  DeleteTweetLoading: false,
  DeleteTweetDone: false,
  DeleteTweetError: null,

  tweets: [],
  // post: {},
  LoadTweetLoading: false,
  LoadTweetDone: false,
  LoadTweetError: null,

  LikeTweetLoading: false,
  LikeTweetDone: false,
  LIkeTweetError: null,

  UnlikeTweetLoading: false,
  UnlikeTweetDone: false,
  UnlikeTweetError: null,

  AddcommentLoading: false,
  AddcommentDone: false,
  AddcommentError: null,
};

export const ADD_TWEET_REQUEST = "post/ADD_TWEET_REQUEST";
export const ADD_TWEET_SUCCESS = "post/ADD_TWEET_SUCCESS";
export const ADD_TWEET_FAIL = "post/ADD_TWEET_FAIL";

export const ADD_COMMENT_REQUEST = "post/ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "post/ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAIL = "post/ADD_COMMENT_FAIL";

export const LOAD_TWEET_REQUEST = "post/LOAD_TWEET_REQUEST";
export const LOAD_TWEET_SUCCESS = "post/LOAD_TWEET_SUCCESS";
export const LOAD_TWEET_FAIL = "post/LOAD_TWEET_FAIL";

export const DELETE_TWEET_REQUEST = "post/DELETE_TWEET_REQUEST";
export const DELETE_TWEET_SUCCESS = "post/DELETE_TWEET_SUCCESS";
export const DELETE_TWEET_FAIL = "post/DELETE_TWEET_FAIL";

export const LIKE_TWEET_REQUEST = "post/LIKE_TWEET_REQUEST";
export const LIKE_TWEET_SUCCESS = "post/LIKE_TWEET_SUCCESS";
export const LIKE_TWEET_FAIL = "post/LIKE_TWEET_FAIL";

export const UNLIKE_TWEET_REQUEST = "post/UNLIKE_TWEET_REQUEST";
export const UNLIKE_TWEET_SUCCESS = "post/UNLIKE_TWEET_SUCCESS";
export const UNLIKE_TWEET_FAIL = "post/UNLIKE_TWEET_FAIL";

const tweetReducer = (state = initialState, action) => {
  // let post = tweets.find((v) => v.id === action.data.id);
  // let post = state.tweets.find((v) => v.id === action.data.id);
  switch (action.type) {
    case ADD_TWEET_REQUEST:
      return {
        ...state,
        AddTweetLoadding: true,
        AddTweetDone: false,
        AddTweetError: null,
      };

    case ADD_TWEET_SUCCESS:
      return {
        ...state,
        AddTweetLoadding: false,
        AddTweetDone: true,
        tweets: [action.data].concat(state.tweets),
      };

    case ADD_TWEET_FAIL:
      return {
        ...state,
        AddTweetLoadding: false,
        AddTweetError: action.error,
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
        ...state,
        LoadTweetLoading: false,
        LoadTweetDone: true,
        LoadTweetError: null,
        tweets: action.data,
      };

    case LOAD_TWEET_FAIL:
      return {
        ...state,
        LoadTweetLoading: false,
        LoadTweetError: action.error,
      };
    case DELETE_TWEET_REQUEST:
      return {
        ...state,
        DeleteTweetLoading: true,
        DeleteTweetError: null,
        DeleteTweetDone: false,
      };
    case DELETE_TWEET_SUCCESS:
      return {
        ...state,
        DeleteTweetLoading: false,
        DeleteTweetDone: true,
        tweets: state.tweets.filter((info) => info.id !== action.data),
      };
    case DELETE_TWEET_FAIL:
      return {
        ...state,
        DeleteTweetLoading: false,
        DeleteTweetError: action.error,
        DeleteTweetDone: false,
      };

    case LIKE_TWEET_REQUEST:
      return {
        ...state,
        LikeTweetLoading: true,
        LikeTweetDone: false,
        LikeTweetError: null,
      };
    case LIKE_TWEET_SUCCESS:
      return {
        ...state,
        LikeTweetLoading: false,
        LikeTweetDone: true,
      };
    case LIKE_TWEET_FAIL:
      return {
        ...state,
        LikeTweetLoading: false,
        LikeTweetDone: false,
        LikeTweetError: action.error,
      };

    case UNLIKE_TWEET_REQUEST:
      return {
        ...state,
        UnlikeTweetLoading: true,
        UnlikeTweetDone: false,
        UnlikeTweetError: null,
      };

    case UNLIKE_TWEET_SUCCESS:
      return {
        ...state,
        UnlikeTweetLoading: false,
        UnlikeTweetDone: true,
      };
    case UNLIKE_TWEET_FAIL:
      return {
        ...state,
        UnlikeTweetLoading: false,
        UnlikeTweetDone: false,
        UnlikeTweetError: action.error,
      };

    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        AddcommentLoAdding: true,
        AddcommentDone: false,
        AddcommentError: null,
      };

    case ADD_COMMENT_SUCCESS:
      // let post = state.tweets.find((v) => v.id === action.data.id);
      // console.log("!!!!!!!!!!result", result.data);

      return {
        ...state,
        // tweets: [action.data].concat(state.tweets),
        // tweets: state.tweets.filter((info) => info.id !== action.data),

        post: state.tweets.find((v) => v.id === action.data.id),
        post: [action.data].concat(state.post),
        // tweet
        // tweets: state.tweets
        AddcommentLoAdding: false,
        AddcommentDone: true,
      };

    case ADD_COMMENT_FAIL:
      return {
        ...state,
        AddcommentLoAdding: false,
        AddcommentDone: false,
        AddcommentError: action.data,
      };

    default:
      return state;
  }
};

export default tweetReducer;
