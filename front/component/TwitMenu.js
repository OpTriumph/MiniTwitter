import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";

import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  button: {
    padding: theme.spacing(2),
    borderRadius: 30,
    fontSize: 20,
  },
}));
export default function TwitMenu({ handleClickOpen }) {
  const classes = useStyles();
  const router = useRouter();
  return (
    <Grid item container xs={3} direction="column" spacing={2}>
      <Link href="home">
        <IconButton color="primary">
          <TwitterIcon fontSize="large" />
        </IconButton>
      </Link>
      <Link href="home">
        <Button
          size="large"
          startIcon={<HomeIcon />}
          className={classes.button}
          color={router.asPath === "/home" ? "primary" : "default"}
        >
          <b>홈</b>
        </Button>
      </Link>
      <Link href="profile">
        <Button
          size="large"
          startIcon={<PersonIcon />}
          className={classes.button}
          color={router.asPath === "/profile" ? "primary" : "default"}
        >
          <b>프로필</b>
        </Button>
      </Link>
      <Button
        variant="contained"
        size="large"
        color="primary"
        startIcon={<TwitterIcon />}
        className={classes.button}
        onClick={handleClickOpen}
      >
        <b>트윗</b>
      </Button>
    </Grid>
  );
}
