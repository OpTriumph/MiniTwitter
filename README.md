# 2021 COSE490 Mini Twitter

## 현재까지 구현된 기능

- 기본적 마크업 페이지 제작
- Kakao Login
- Naver Login
-
![](https://media.giphy.com/media/QduFxOexewLbBj58zZ/giphy.gif)



- local 회원가입
- 
![](https://media.giphy.com/media/W9RYlwpHHiLxDoCSaC/giphy.gif)
-
-
-
- local 로그인
- 로그인 화면으로 접속하여 로그인 버튼을 누르면 home으로 접속

![](https://media.giphy.com/media/lURbSzcGqWpOwlVdp9/giphy.gif)
-
-
-
-
- profile 페이지에서 logout 가능
- 왼쪽 메뉴의 home, profile을 클릭하면 각각의 페이지로 이동
- 
![](https://media.giphy.com/media/C5SZmxx3rmUx3Hc7qF/giphy.gif)
-
-
-
-
- profile 페이지에서 tweet 가능
- 

![](https://media.giphy.com/media/gmYWkGinUGG6cUc9HG/giphy.gif)


- 트윗 버튼을 누르면 다이얼로그 창이 나와 트윗 입력 가능
- 새로운 트윗은 home 화면 상단에 출력
-
![](https://media.giphy.com/media/uViekL1QugDdq3h5gb/giphy.gif)
-
-
-
-
- 개인의 트윗 삭제 가능
- 
![](https://media.giphy.com/media/aBdouascNT725DpT7O/giphy.gif)
-
-
-
-
-
- 트윗을 좋아요, retweet을 누르면 화면에 표시
- Comment 버튼을 누르면 comment창 나와 입력 가능
- 


## 실행
 
```
### 백엔드
#MySQL DB를 사용함으로 로콜DB 실행하면 백엔드와 연결가능#
#MYSQL 실행후 /back/config/config.js의 MYSQL password 를 로컬MYSQL password으로 변경

1. cd back
2. npm i
3. npm run dev

### 프런틓엔드

cd front
npm i
yarn dev
```

자동으로 페이지가 열리지 않으므로 주소창에 http://localhost:3000/ 을 입력하여 확인

## 폴더와 파일 구조

```
|
+-- component                    (페이지에 사용되는 component들을 분리한 폴더)
|      +-- InfoBox.js            (home 페이지 오른쪽 시간, 날씨 박스)
|      +-- Twit.js               (home 페이지 트윗과 타임라인 표시)
|      +-- TwitDialog.js         (트윗버튼 클릭시 나오는 트윗 작성 다이얼로그)
|      +-- TwitMenu.js           (home과 profile 페이지 왼쪽의 메뉴들)
|      +-- TwitProfile.js        (profile 페이지)
|      +-- ProfileDialog.js      (profile 수정 다이얼로그)
|
+-- pages                        (각 웹페이지들을 포함하는 폴더)
|      +-- _app.js               (title, theme 색상 지정)
|      +-- _docmument.js         (material-ui link 적용)
|      +-- home.js               (트위터 homepage)
|      +-- index.js              (로그인 페이지. 처음 이 페이지가 열림)
|      +-- profile.js            (프로필 페이지)
|      +-- signup.js             (회원가입 페이지. 로그인 페이지에서 접근 가능)

+-- public                                      (페이지에서 사용할 이미지파일들)
|      +-- btnG_완성형.png                     (네이버 로그인 이미지)
|      +-- kakao_login_medium_narrow.png       (카카오 로그인 이미지)
|      +-- weather.jpg                         (시간 날씨 박스에 나타나는 이미지)
|
+-- redux
|      +-- store.js                     (redux, redux-saga store)
|      +-- user.js                      (login, signup, logout의 reducer)
|      +-- post.js                      (loadTweet, addTweet, deleteTweet, addComment, like/unlikeTweet의 reducer)

+-- sagas
|      +-- user.js                     (redux/user에서 사용되는 saga)
|      +-- post.js                     (redux/post에서 사용되는 saga)

```

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
