import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ProfileDialog from "../component/ProfileDialog";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_REQUEST } from "../redux/user";
import { useEffect } from "react";
import Router from "next/router";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
  profilebutton: {
    borderRadius: 30,
    fontSize: 20,
    margin: theme.spacing(0.5),
    background: "#ffffff",
  },
}));

export default function TwitProfile() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const myInfo = useSelector((state) => state.userReducer.myInfo);
  const logoutDone = useSelector((state) => state.userReducer.logOutDone);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    if (logoutDone) {
      Router.replace("/");
    }
  }, [logoutDone]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid item xs>
        <Paper variant="outlined" className={classes.paper}>
          <Typography>
            <b>{myInfo ? myInfo.nickname : ""}</b>
          </Typography>
        </Paper>

        <Paper variant="outlined" className={classes.paper}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <Avatar
                alt="username"
                aria-label="profile"
                style={{ width: 126, height: 126 }}
              />
            </Grid>

            <Grid item container direction="row">
              <Grid item xs>
                <Typography variant="h4">
                  <b>{myInfo ? myInfo.nickname : ""}</b>
                </Typography>
              </Grid>

              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.profilebutton}
                  onClick={handleClickOpen}
                >
                  프로필 수정
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.profilebutton}
                  disabled
                >
                  팔로우
                </Button>
              </Grid>
            </Grid>

            <Grid item xs>
              <Typography variant="body1">
                미니트위터 자기소개란. Test
              </Typography>
            </Grid>
            <Grid item container direction="row">
              <Grid item container spacing={4} xs>
                <Grid item>
                  <Typography variant="body1" component="span">
                    <b>0</b> 팔로잉
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" component="span">
                    <b>0</b> 팔로워
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" component="span">
                    <b> {myInfo ? myInfo.createdAt.slice(0, 10) : ""}</b> 가입
                  </Typography>
                </Grid>
              </Grid>

              <Grid item>
                <Button
                  color="primary"
                  onClick={() =>
                    dispatch({
                      type: LOGOUT_REQUEST,
                    })
                  }
                >
                  로그아웃
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <ProfileDialog open={open} handleClose={handleClose} />
    </>
  );
}
