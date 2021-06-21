const passport = require("passport");
const NaverStrategy = require("passport-naver").Strategy;
const { User } = require("../models");

module.exports = () => {
  passport.use(
    "naver",
    new NaverStrategy(
      {
        clientID: "auIH0YHsHMZnq55wDEKF",
        clientSecret: "h_LIvb1_Ba",
        callbackURL: "http://localhost:3065/auth/naver/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const user = await User.findOne({
            where: { email: profile.emails[0].value, provider: "naver" },
          });
          if (user) {
            done(null, user);
          } else {
            const newUser = await User.create({
              provider: "naver",
              nickname: profile.displayName,
              email: profile.emails[0].value,
            });
            done(null, newUser);
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};
