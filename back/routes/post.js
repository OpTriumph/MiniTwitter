const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  res.json({ id: 1, content: "hi" });
});

router.delete("/", (req, res) => {});

module.exports = router;
