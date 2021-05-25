# 2021 COSE490 Mini Twitter

## 현재까지 구현된 기능

- 기본적 마크업 페이지 제작
- 로그인 화면으로 접속하여 로그인 버튼을 누르면 home으로 접속
- 왼쪽 메뉴의 home, profile을 클릭하면 각각의 페이지로 이동
- 트윗 버튼을 누르면 다이얼로그 창이 나와 트윗 입력 가능
- 
------------Trying to implement simple functions with redux------------
- Can Post new tweets and will showup in the "newest tweet" section.
- Can Like the tweets
- Can Delete the tweets


## Setup

- next.js
  - next CRA 사용
  ```
  npx create-next-app
  ```
  - node*modules에 설치  (package.json 설정 변경 필요)
  ```
  yarn add next
  ```
- material-ui
  ```
  yarn add @material-ui/core
  yarn add @material-ui/icons
  ```
  

- time-stamp
  ```
  npm install --save time-stamp
  ```
- react-redux
- redux
- reduxjs/toolkit
  ```
  yarn add @reduxjs/toolkit redux react-redux
  ```
## 실행

```
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
|
+-- pages                        (각 웹페이지들을 포함하는 폴더)
|      +-- _app.js               (title, theme 색상 지정)
|      +-- _docmument.js         (material-ui link 적용)
|      +-- home.js               (트위터 homepage)
|      +-- index.js              (로그인 페이지. 처음 이 페이지가 열림)
|      +-- profile.js            (프로필 페이지)
|
+-- redux
|      +-- store.js              (Store configuration)
|      +-- tweets.js             (Reducer)
|
+--public                                      (페이지에서 사용할 이미지파일들)
       +-- btnG_완성형.png                     (네이버 로그인 이미지)
       +-- kakao_login_medium_narrow.png       (카카오 로그인 이미지)
       +-- weather.jpg                         (시간 날씨 박스에 나타나는 이미지)
```

## 참고 사이트 & 코드

- next.js: https://nextjs.org/
- material-ui: https://material-ui.com/
- nextjs + material-ui: https://github.com/mui-org/material-ui/tree/next/examples/nextjs
- material-ui signin template: https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in
- Naver api(로그인 이미지):https://developers.naver.com/docs/login/bi/bi.md
- Kakao api(로그인 이미지): https://developers.kakao.com/tool/resource/login
- redux.js https://redux.js.org/
- react-redux.js https://react-redux.js.org/
- react-Toolkit.js https://redux-toolkit.js.org/

