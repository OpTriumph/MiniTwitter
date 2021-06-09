const passport = require("passport");
const kakao = require("./kakao");
const naver = require("./naver");
const local = require("./local");
module.exports = () => {
  //로그인 성공 시 req.login 함수 호출되면서 이 함수가 호출된다.
  // 역할: 서버 메모리를 아끼기 위해 많은 사용자 정보 중에서 필요한 부분만 메모리에 저장하도록함. (여기에서는 id)
  // 서버쪽에 [{ id: 3, cookie: 'asvxzc' }] 저장, cookie는 프론트로 보냄
  //user 정보 전달 받아 session에 저장을 하는 함수
  //session이 있어야 페이지가 이동해도 로그인 정보가 유지된다.
  passport.serializeUser((user, done) => {
    done(null, user.id); //서버에러, 성공
  });
  // 항상 작동(모든 관련 요청)
  // 세션에 저장된 정보를 읽어오는 함수
  // 프론트에서 cookie를 보내면, 서버는 메모리에서 cookie와 매칭된 id를 찾은 뒤 그 id로 DB에서 user 정보를 불러옴.
  // 최종적으로, req.user에 해당 user 정보 들어간다.
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      done(null, user);
    } catch (error) {
      console.error(error);
    }
  });
  local();
  kakao();
  //naver();
};
