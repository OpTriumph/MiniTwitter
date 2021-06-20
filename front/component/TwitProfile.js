import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ProfileDialog from "../component/ProfileDialog";

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

function MyInfo({ user }) {
  return (
    <Grid item container direction="row" spacing={4}>
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
          {/*  or with <b>{user.createdAt}</b> 가입 */}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default function TwitProfile({ user }) {
  // const { author, Bio } = user || {};
  console.log("this", user);

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
            <b></b>
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
                  <b>{user.name}</b>
                  {/* user.nickname */}
                </Typography>
                <Typography variant="h6" style={{ color: "#afafaf" }}>
                  {/* @아이디2 */}@{user.email}
                  {/* //or print useremal with @{user.email} */}
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
                {/* 미니트위터 자기소개란. Test */}
                {user.Bio}
                {/* // {user.Bio} */}
              </Typography>
            </Grid>

            <MyInfo user={user} />
          </Grid>
        </Paper>
      </Grid>
      <ProfileDialog open={open} handleClose={handleClose} />
    </>
  );
}
