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
          /*const user = await User.findOne({
            where: { snsId: profile.id, provider : 'kakao'},
          });
          if (user){
            done(null,exUser);
          } else {
            const newUser = await User.create({
              email:profile._json && profile._json.kakao_account_email,
              nick: profile.displayName,
              snsId:profile.id,
              provider:'kakao',
            });
            done(null, newUser)
          }*/
          return done(null, profile);
        } catch (error) {
          console.error(error);
          return done(error);
        }
      }
    )
  );
};
