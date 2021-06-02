const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/", (req, res) => {
  res.send("hi boy");
});

router.get("/kakao", passport.authenticate("kakao"));

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "localhost:3000/",
  }),
  (req, res) => {
    res.redirect("http://localhost:3000/home");
  }
);

module.exports = router;
