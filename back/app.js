const express = require("express");
const app = express();
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const passport = require("passport");
const passportConfig = require("./passport");
const { swaggerUi, specs } = require("./swagger");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

app.use(cookieParser());
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(
  passport.session({
    saveUninitialized: false,
    resave: false,
  })
);
passportConfig();

app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.get("/", (req, res) => {
  res.send("hi");
});

app.use("/post", postRouter);
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.listen(3065, () => {
  console.log("Running Server..");
});
