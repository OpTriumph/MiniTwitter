const passport = require("passport");
const KaKaoStrategy = require("passport-kakao").Strategy;
const { User } = require("../models");
module.exports = () => {
  passport.use(
    "kakao",
    new KaKaoStrategy(
      {
        clientID: "ccc2f19988054fd8a8f8b37022c69746",
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
            const newUser = await User.create({
              provider: "kakao",
              nickname: profile.displayName,
              id: profile.id,
              email: profile._json.kakao_account.email
                ? profile._json.kakao_account.email
                : null,
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
