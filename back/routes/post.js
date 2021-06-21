const express = require("express");
const { Post, User, Comment } = require("../models");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      //로그인 된 상황이면(세션이 존재할 경우) 라우터 접근 시 deserialize가 호출되며 req.user에 user id가 담겨있다.
      //UserId 컬럼은 belongsTo 관계에 의해 생성된 칼럼이다.(belongsToMany에서도 생성된다.)
      UserId: req.user.id,
    });
    // DB에 포스트 추가 후 작성자, 코멘트 정보 (+코멘트 작성자의 id와 nickname), 좋아요 누른 사람의 정보를 담아서 전송한다.
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
          ],
        },
        {
          model: User,
          attributes: ["id", "nickname"],
        },
        {
          model: User,
          as: "Likers",
          attributes: ["id"],
        },
      ],
    });
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.post("/comment", async (req, res, next) => {
  try {
    const comment = await Comment.create({
      content: req.body.content,
      PostId: req.body.postId,
      UserId: req.user.id,
    });
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [
        {
          model: User,
          attributes: ["id", "nickname"],
        },
      ],
    });
    res.status(201).json(fullComment);
  } catch {
    console.error(error);
    next(error);
  }
});

router.get("/mypost", async (req, res) => {
  try {
    if (!req.isAuthenticated()) res.status(401).send("로그인이 필요합니다.");
    const myPost = await Post.findAll({
      where: {
        UserId: req.user.id,
      },
    });
    res.status(200).json(myPost);
  } catch (err) {
    console.error(error);
    next(error);
  }
});

router.delete("/:postId", async (req, res) => {
  if (!req.isAuthenticated()) res.status(401).send("로그인이 필요합니다.");
  try {
    await Post.destroy({
      where: {
        id: req.params.postId,
      },
    });
    res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
