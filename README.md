# 2021 COSE490 7조 Mini Twitter

## 구현된 기능

- 기본적 마크업 페이지 제작
- Kakao Login
- Naver Login
- local 회원가입과 로그인
- 로그인 화면으로 접속하여 로그인 버튼을 누르면 home으로 접속
- 왼쪽 메뉴의 home, profile을 클릭하면 각각의 페이지로 이동
- 트윗 버튼을 누르면 다이얼로그 창이 나와 트윗 입력 가능
- 새로운 트윗은 home 화면 상단에 출력
- 자신이 작성한 트윗만 삭제 가능
- profile 페이지에서 자신이 작성한 트윗만 보기 가능
- profile 페이지에서 로그아웃 가능
- 좋아요, retweet을 눌렀는지 여부 표시
- Comment 버튼을 누르면 comment창 나와 입력 가능

## 실행
 
```
### 백엔드
#MySQL DB를 백엔드와 연결#
#MYSQL 실행후 /back/config/config.js의 MYSQL password 를 로컬MYSQL password으로 변경

1. cd back
2. npm i
3. npm run dev

### 프런트엔드

cd front
npm i
yarn dev
```

자동으로 페이지가 열리지 않으므로 주소창에 http://localhost:3000/ 을 입력하여 확인

## 데모 영상


## 위키

API등 자세한 정보 확인 가능 

https://github.com/OpTriumph/MiniTwitter/wiki


## 참고 사이트 & 코드

- next.js: https://nextjs.org/
- material-ui: https://material-ui.com/
- nextjs + material-ui: https://github.com/mui-org/material-ui/tree/next/examples/nextjs
- material-ui signin template: https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in
- Naver api(로그인 이미지):https://developers.naver.com/docs/login/bi/bi.md
- Kakao api(로그인 이미지): https://developers.kakao.com/tool/resource/login
- redux-saga: https://redux-saga.js.org/docs/introduction/BeginnerTutorial/
- redux: https://redux.js.org/introduction/getting-started
- storybook: https://storybook.js.org/tutorials/
- rollup: https://rollupjs.org/guide/en/#tutorial
