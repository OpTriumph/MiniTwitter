const express = require("express");
const router = express.Router();
const passport = require("passport");

//const {User, Post} = require('../models');
//const isLoggedIn, isNotLoggedIn} = require('./middlewares');

router.get("/", async (req, res, next) => {
  try {
    if (req.user) {
      // from passport.deserialize()
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
