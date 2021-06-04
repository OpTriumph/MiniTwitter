import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import TwitterIcon from "@material-ui/icons/Twitter";

import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import Link from "next/link";

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
            id="ID"
            label="아이디"
            name="ID"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
          />
          <Button color="primary">회원가입</Button>
          <Link href="home">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              로그인
            </Button>
          </Link>
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
