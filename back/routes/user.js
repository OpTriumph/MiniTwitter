const express = require("express");

const passport = require("passport");

//const {User, Post} = require('../models');
//const isLoggedIn, isNotLoggedIn} = require('./middlewares');
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

module.exports = router;
