import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ClearIcon from "@material-ui/icons/Clear";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Typhography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
}));

function Twit() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        avatar={
          <IconButton size="small">
            <Avatar alt="username" aria-label="profile" />
          </IconButton>
        }
        action={
          <IconButton aria-label="delete">
            <ClearIcon />
          </IconButton>
        }
        title={
          <Typhography variant="h6">
            <b>임시 유저1</b>
          </Typhography>
        }
        subheader={
          <>
            <Typhography variant="body2" component="span">
              @TempUser1 · May 25
            </Typhography>
          </>
        }
      />
      <CardContent>
        <Typhography variant="body1">무슨 일이 일어나고 있나요?</Typhography>
      </CardContent>

      <CardActions>
        <IconButton aria-label="mention" component="span">
          <ChatBubbleOutlineIcon />
        </IconButton>
        <Typography component="span" variant="body2">
          0
        </Typography>

        <IconButton aria-label="retweet" component="span">
          <RepeatIcon />
        </IconButton>
        <Typography component="span" variant="body2">
          14
        </Typography>

        <IconButton aria-label="like" component="span">
          <FavoriteBorderIcon />
        </IconButton>
        <Typography component="span" variant="body2">
          33
        </Typography>
      </CardActions>
    </Card>
  );
}

export default function TwitLine() {
  const classes = useStyles();
  return (
    <Grid item xs>
      <Paper variant="outlined" className={classes.paper}>
        <b>최신 트윗</b>
      </Paper>
      <Twit />
      <Paper variant="outlined" className={classes.paper}>
        <Twit />
        <Twit />
      </Paper>
    </Grid>
  );
}