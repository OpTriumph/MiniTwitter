const express = require("express");
const router = express.Router();
const passport = require("passport");
const KaKaoStrategy = require("passport-kakao").Strategy;

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
