import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import TwitterIcon from "@material-ui/icons/Twitter";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../redux/user";
import { ReqDialog } from "dialog_requirement-twtpj";

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
}));

export default function SignInSide() {
  const [valid, setValid] = React.useState(false);
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [check, setCheck] = React.useState("");
  const dispatch = useDispatch();
  const signUpError = useSelector((state) => state.userReducer.signUpError);
  const signUpDone = useSelector((state) => state.userReducer.signUpDone);
  const userNameRequirement = [
    {
      text: "Must be at least 3 characters",
      validator: (val) => val.length >= 3,
    },
  ];
  const passwordRequirement = [
    {
      text: "Must be at least 5 characters",
      validator: (val) => val.length >= 5,
    },
  ];
  useEffect(() => {
    if (signUpError) {
      alert(signUpError.data);
    }
    if (signUpDone) Router.push("/");
  }, [signUpError, signUpDone]);

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <TwitterIcon fontSize="large" color="primary" />
        <Typography variant="h5">계정을 생성하세요</Typography>

        <form>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="email"
            name="email"
            type="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <ReqDialog
            value={nickname}
            Requirements={userNameRequirement}
            onValidChange={(isValid) => setValid(isValid)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nickname"
            label="nickname"
            name="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <ReqDialog
            value={password}
            Requirements={passwordRequirement}
            onValidChange={(isValid) => setValid(isValid)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            error={password === check ? false : true}
            helperText={password === check ? "" : "Different password"}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password-check"
            label="password check"
            type="password"
            id="password-check"
            value={check}
            onChange={(e) => setCheck(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            disabled={!valid || !nickname || !password}
            className={classes.submit}
            onClick={() => {
              dispatch(signUpAction({ email, password, nickname }));
            }}
          >
            가입
          </Button>
        </form>
      </div>
    </Container>
  );
}
