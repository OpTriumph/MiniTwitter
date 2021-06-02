const passport = require("passport");
const kakao = require("./kakao");
const naver = require("./naver");

module.exports = () => {
  //로그인 성공 시 user 정보 전달 받아 session에 저장을 하는 함수
  //session이 있어야 페이지가 이동해도 로그인 정보가 유지된다.
  passport.serializeUser((user, done) => {
    done(null, user.id); //서버에러, 성공
  });
  //항상 작동(모든 로그인 요청)
  //세션에 저장된 정보를 읽어오는 함수
  //그래서, user.js의 req.user에 이 정보가 들어가있다.
  passport.deserializeUser(async (id, done) => {
    try {
      //const user = await User.findOne({ where: { id } });
      done(null, user);
    } catch (error) {
      console.error(error);
    }
  });
  //local();
  kakao();
  //naver();
};
