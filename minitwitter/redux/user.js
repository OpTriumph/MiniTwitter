import { createReducer, createAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
const timestamp = require("time-stamp");

const MOCK_USER = {
  userid: "mockuser",
  userName: "MockUser1",
  tweets: [],
  userInfo: "This is the mock user",
  follower: ["a", "s", "s"],
  following: ["d", "s", "s"],
  signUpDate: "2021/05/26 13:52:48",
};

export const signUp = createAction("user/signup");
export const logIn = createAction("user/login");
export const logOut = createAction("user/logout");
export const changeName = createAction("user/changename");
export const changeInfo = createAction("user/changeinfo");

export const userReducer = createReducer(MOCK_USER, (builder) => {
  builder
    .addCase(signUp, (state, action) => {
      (state.signUpPayload = action.payload),
        (state.signUpDate = timestamp("YYYY/MM/DD HH:mm:ss"));
    })
    .addCase(logIn, (state, action) => {
      (state.userid = action.payload),
        (state.signUpDate = timestamp("YYYY/MM/DD HH:mm:ss")),
        (state.loggedIn = true);
    })
    .addCase(logOut, (state, action) => {
      (state.user = null), (state.loggedIn = false);
    })
    .addCase(changeInfo, (state, action) => {
      state.userInfo = action.payload;
    })
    .addCase(changeName, (state, action) => {
      state.userName = action.payload;
    });
});

estestestesteste;
