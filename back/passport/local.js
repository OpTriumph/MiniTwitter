const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const bcrypt = require("bcrypt");
const { User } = require("../models");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({
            where: { email },
          });
          if (!user) {
            return done(null, false, { reason: "이메일이 존재하지 않습니다." });
          }
          const result = await bcrypt.compare(password, user.password);
          if (!result) {
            return done(null, false, { reason: "비밀번호를 확인 해 주세요" });
          }
          return done(null, user); // 이메일, 비밀번호 일치
        } catch (error) {
          console.error(error);
          return done(error);
        }
      }
    )
  );
};
