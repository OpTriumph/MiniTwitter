const express = require("express");
const router = express.Router();
const passport = require("passport");
const KaKaoStrategy = require("passport-kakao").Strategy;

passport.use(
  "kakao",
  new KaKaoStrategy(
    {
      clientID: "7133581b6627adad28bb03e47c394fc7",
      callbackURL: "http://localhost:3065/auth/kakao/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      done(null, profile);
    }
  )
);

router.get("/", (req, res) => {
  res.send("hi boy");
});

router.get("/kakao", passport.authenticate("kakao"));

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

module.exports = router;
