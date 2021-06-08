const express = require("express");
const { Post, User, Comment } = require("../models");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
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
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/:postId", async (req, res) => {
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
