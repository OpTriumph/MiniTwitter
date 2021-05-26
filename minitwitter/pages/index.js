import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TwitterIcon from "@material-ui/icons/Twitter";

import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import Login from "../component/Login";
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
          <Login />
        </form>
        <div className={classes.buttons}>
          <Button>
            <Image
              src="/btnG_완성형.png"
              alt="Naver Id login"
              width={180}
              height={40}
            />
          </Button>

          <Button>
            <Image
              src="/kakao_login_medium_narrow.png"
              alt="Kakao Id login"
              width={180}
              height={40}
            />
          </Button>
        </div>
      </div>
    </Container>
  );
}
