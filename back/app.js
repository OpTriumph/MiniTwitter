const express = require("express");
const cors = require("cors");
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const postsRouter = require("./routes/posts");
const passport = require("passport");
const passportConfig = require("./passport");
const { swaggerUi, specs } = require("./swagger");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const { sequelize } = require("./models");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
passportConfig();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(
  session({
    secret: "hi",
    saveUninitialized: false,
    resave: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

sequelize
  .sync({ force: false }) // true시 서버 재실행마다 테이블 재생성
  .then(() => {
    console.log("success connection DB");
  })
  .catch(console.error);

app.use("/post", postRouter);
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/posts", postsRouter);
app.listen(3065, () => {
  console.log("Running Server..");
});
