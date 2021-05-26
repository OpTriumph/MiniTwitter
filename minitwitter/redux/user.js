import { createReducer, createAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
const timestamp = require("time-stamp");

const MOCK_USER = {
  userid: uuid(),
  userName: "MockUser1",
  tweets: [],
  userInfo: "This is the mock user",
  follower: [],
  following: [],
  signUpDate: "2021/05/26 13:52:48",
};

const initialState = {
  loggedIn: false,
  user: null,
  logInPayload: {},
  signUpPayload: {},
};

export const signUp = createAction("user/signup");
export const logIn = createAction("user/logIn");
export const logOut = createAction("user/logOut");

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signUp, (state, action) => {
      const user = {
        ...state,
        signUpPayload: action.payload,
        signUpDate: timestamp("YYYY/MM/DD HH:mm:ss"),
      };
      state = user;
    })
    .addCase(logIn, (state, action) => {
      const user = {
        ...state,
        logInPayload: action.payload,
        user: MOCK_USER,
        loggedIn: true,
      };
      state = user;
      user = [];
    })
    .addCase(logOut, (state, action) => {
      const user = {
        ...state,
        user: null,
        loggedIn: false,
      };
      state = user;
    });
});
