const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");

//const {User, Post} = require('../models');
/**
 * @swagger
 *  tags:
 *    name: Users
 *    description: User management
 */

const router = express.Router();
/**
 * @swagger
 * path:
 *  /user:
 *    get:
 *      summary: "Select User"
 *      tags: [Users]
 *      response:
 *        "200":
 *          description: A user schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 *
 */
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

router.post("/", async (req, res, next) => {
  try {
    if (req.user) {
      // from passport.deserialize()
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/logout", (req, res, next) => {
  req.logout();
  req.session.destroy();
  req.send("ok");
});

module.exports = router;
