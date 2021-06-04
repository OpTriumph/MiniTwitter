const express = require("express");
const router = express.Router();
const passport = require("passport");

router.post("/login", (req, res, next) => {
  //미들웨어 중첩
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      // server error 발생 시 next로 한 번에 처리
      console.error(err);
      return next(err);
    }
    if (info) {
      //client error
      return res.status(401).send(info.reason);
    }
    return req.login(user, async () => {
      const userInfo = await User.findOne({
        where: { id: user.id },
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
      return res.status(200).json(userInfo);
    });
  })(req, res, next);
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
