import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { logIn } from "../redux/user";

const useStyles = makeStyles((theme) => ({
  submit: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
  },
}));

export default function SignInSide() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleId = (event) => {
    setId(event.target.value);
  };
  const handlePassward = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    if (event.type !== "click") {
      return;
    } else if (id !== "" && password !== "") {
      return;
    }
    dispatch(logIn({ id, passward }));
    setId("");
    setPassward("");
  };

  const classes = useStyles();
  return (
    <>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="ID"
        label="아이디"
        name="ID"
        onChange={handleId}
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="비밀번호"
        onChange={handlePassward}
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
          onClick={handleLogin}
        >
          로그인
        </Button>
      </Link>
    </>
  );
}
