import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import TwitterIcon from "@material-ui/icons/Twitter";

import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logInAction } from "../redux/user";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
  },
  buttons: {
    marginTop: theme.spacing(1),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const logInError = useSelector((state) => state.userReducer.logInError);
  const logInDone = useSelector((state) => state.userReducer.logInDone);

  useEffect(() => {
    if (logInError) {
      if (logInError.status === 401)
        alert(
          "잘못된 이메일이나 비밀번호입니다.\n이메일과 비밀번호를 확인해주세요"
        );
      else alert(logInError.data);
    }
    if (logInDone) Router.push("/home");
  }, [logInError, logInDone]);
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <TwitterIcon fontSize="large" color="primary" />

        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="이메일"
            name="email"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="비밀번호"
            name="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            color="primary"
            onClick={() => {
              Router.push("signup");
            }}
          >
            회원가입
          </Button>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {
              dispatch(logInAction({ email, password }));
            }}
          >
            로그인
          </Button>
        </form>
        <div className={classes.buttons}>
          <Link href="http://localhost:3065/auth/naver">
            <Button disableRipple size="small">
              <Image
                src="/btnG_완성형.png"
                alt="Naver Id login"
                width={180}
                height={40}
              />
            </Button>
          </Link>
          <Link href="http://localhost:3065/auth/kakao">
            <Button disableRipple size="small">
              <Image
                src="/kakao_login_medium_narrow.png"
                alt="Kakao Id login"
                width={180}
                height={40}
              />
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
