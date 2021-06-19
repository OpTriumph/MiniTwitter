const passport = require("passport");
const KaKaoStrategy = require("passport-kakao").Strategy;
const { User } = require("../models");
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
            where: { id: profile.id, provider: "kakao" },
          });
          if (user) {
            done(null, user);
          } else {
            console.log(profile);
            const newUser = await User.create({
              provider: "kakao",
              nickname: profile.displayName,
              id: profile.id,
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
