const express = require("express");
const router = express.Router();
const passport = require("passport");
const { User, Post } = require("../models");
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
    // req.login이 passport.serializeUser 호출(user 매개변수가 이 함수의 매개변수로 넘어감.)
    // 내부적으로 res.setHeader('Cookie', cxlhy(random한 문자열))를 통해 쿠키를 보내주고, 세션도 연결해준다.
    // 브라우저에서 어떠한 요청이 올 때마다 data와 동시에 cxlhy가 전달이 되고, 서버는 이를 통해 사용자를 파악(로그인 시 response header의 set-cookie 확인)
    // user의 모든 정보를 들기는 무거우므로 user.id만 cookie와 매칭시킨다.
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
    res.cookie("hi", 0);
    res.send("hi");
  }
);

module.exports = router;
