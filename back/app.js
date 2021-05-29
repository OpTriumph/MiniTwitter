const express = require("express");
const app = express();
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const passport = require("passport");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/post", postRouter);
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.listen(3065, () => {
  console.log("Running Server..");
});
