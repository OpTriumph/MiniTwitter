const express = require("express");
const bcrypt = require("bcrypt");
const { User, Post } = require("../models");

const router = express.Router();

// 로그인 여부에 상관없이 매번 새로고침마다 전달되는 요청이다.
router.get("/", async (req, res, next) => {
  try {
    if (req.user) {
      // deserializeUser 호출 되면서, 만약 서버에서 로그인이 되어 있는 상황이라면 req.user에 로그인 된 사용자 정보가 들어간다.
      const userInfo = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Post,
            // 숫자만 활용할 예정이므로 id만 전송해서 과부하를 줄인다.
            attributes: ["id"],
          },
        ],
      });
      return res.status(200).json(userInfo);
    } else {
      return res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//Sign-up

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

router.post("/logout", (req, res, next) => {
  req.logout(); // req.user 객체 제거
  req.session.destroy(); // req.session 내용 제거
  res.cookie("connect.sid", "", { maxAge: 0 }); //client측 쿠키 삭제
  res.status(200).send("ok");
});

module.exports = router;
