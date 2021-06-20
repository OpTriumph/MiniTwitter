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

function MyInfo({ data }) {
  const { Followers, Followings } = data || {};

  return (
    <Grid item container direction="row" spacing={4}>
      <Grid item>
        <Typography variant="body1" component="span">
          <b>{Followings.length}</b> 팔로잉
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" component="span">
          <b>{Followers.length}</b> 팔로워
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" component="span">
          <b> 2021년 5월</b> 가입
        </Typography>
      </Grid>
    </Grid>
  );
}

export default function TwitProfile({ data }) {
  const { id, nickname, Bio } = data || {};

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
            <b>{console.log(data)}</b>
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
                  <b>{nickname}</b>
                </Typography>
                <Typography variant="h6" style={{ color: "#afafaf" }}>
                  @{id}
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
              <Typography variant="body1">{Bio}</Typography>
            </Grid>

            <MyInfo data={data} />
          </Grid>
        </Paper>
      </Grid>
      <ProfileDialog open={open} handleClose={handleClose} />
    </>
  );
}
