const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { User, Post } = require("../models");

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
      // deserializeUser 호출 되면서 req.user에 로그인 된 사용자 정보가 들어간다.
      const userInfo = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Post,
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followings",
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followers",
            attributes: ["id"],
          },
        ],
      });
      res.status(200).json(userInfo);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});
/**
 * @swagger
 * path:
 *  /user:
 *    post:
 *      summary: "Sign-up"
 *      tags: [Users]
 *      response:
 *        "200":
 *          description: Sign-up
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 *
 */
router.post("/", async (req, res, next) => {
  try {
    const existed = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (existed) return res.status(403).send("이미 사용 중인 아이디입니다.");
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(201).send("ok");
  } catch (error) {
    console.error(error);
    next(error);
  }
});
/**
 * @swagger
 * path:
 *  /user:
 *    post:
 *      summary: "Logout"
 *      tags: [Users]
 *      response:
 *        "200":
 *          description: logout
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 *
 */

router.post("/logout", (req, res, next) => {
  req.logout(); // req.user 객체 제거
  req.session.destroy(); // req.session 내용 제거
  req.status(200).send("ok");
});

module.exports = router;
