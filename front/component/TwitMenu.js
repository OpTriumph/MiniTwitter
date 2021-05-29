import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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
        >
          홈
        </Button>
      </Link>
      <Link href="profile">
        <Button
          size="large"
          startIcon={<PersonIcon />}
          className={classes.button}
        >
          프로필
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
        트윗
      </Button>
    </Grid>
  );
}
