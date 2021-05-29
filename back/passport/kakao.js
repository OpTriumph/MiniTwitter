const passport = require("passport");
const KaKaoStrategy = require("passport-kakao").Strategy;

module.exports = () => {
  passport.use(
    "kakao",
    new KaKaoStrategy(
      {
        clientID: "7133581b6627adad28bb03e47c394fc7",
        callbackURL: "http://localhost:3065/auth/kakao/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const user = await User.findOne({
            where: {},
          });
          console.log(profile);
          done(null, profile);
        } catch (error) {
          console.error(error);
          return done(error);
        }
      }
    )
  );
};
