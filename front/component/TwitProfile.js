import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ProfileDialog from "../component/ProfileDialog";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_REQUEST } from "../redux/user";
import Router from "next/router";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
  profilebutton: {
    padding: theme.spacing(1.5),
    borderRadius: 30,
    fontSize: 20,
    margin: theme.spacing(0.5),
    background: "#ffffff",
  },
}));

function MyInfo() {
  const dispatch = useDispatch();
  const logoutDone = useSelector((state) => state.userReducer.logOutDone);
  useEffect(() => {
    if (logoutDone) {
      Router.replace("/");
    }
  }, [logoutDone]);

  return (
    <Grid container direction="row" spacing={2}>
      <Grid item container direction="row" spacing={4} xs={10}>
        <Grid item>
          <Typography variant="body1" component="span">
            <b>55</b> 팔로잉
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" component="span">
            <b>24</b> 팔로워
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" component="span">
            <b> 2021년 5월</b> 가입
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs>
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
  );
}

export default function TwitProfile() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
            <b>유저 이름2</b>
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
                  <b>유저 이름2</b>
                </Typography>
                <Typography variant="h6" style={{ color: "#afafaf" }}>
                  @아이디2
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

            <MyInfo />
          </Grid>
        </Paper>
      </Grid>
      <ProfileDialog open={open} handleClose={handleClose} />
    </>
  );
}
