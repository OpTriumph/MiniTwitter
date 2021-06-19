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
import tweetReducer from "../redux/tweets2";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
}));

function Twit({ tweet }) {
  const dispatch = useDispatch();
  const { id, title, userId, likes } = tweet || {};
  // const liked = tweets.likers.find((v) => v.id === id);
  const classes = useStyles();
  const handledelete = () => {
    if (!id) {
      return alert("need to login first");
    }
    return dispatch(tweetSlice.actions.deleteTweet(id));
  };

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
              @{id} · May 25
            </Typhography>
          </>
        }
      />
      <CardContent>
        <Typhography variant="body1">{title}</Typhography>
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

export default function TwitLine({ tweets }) {
  if (tweets.length < 1) return null;
  console.log(tweets.shift());
  console.log("test");
  const classes = useStyles();

  return (
    <Grid item xs>
      <Paper variant="outlined" className={classes.paper}>
        <b>최신 트윗</b>
      </Paper>

      {/* <Twit /> */}
      {tweets
        // .slice(0)
        .shift()
        .reverse()
        .map((tweet) => (
          <Twit
            key={tweet.id}
            tweet={tweet}
            // likeTweet={likeTweet}
            // deleteTweet={deleteTweet}
          />
        ))}
      <Paper variant="outlined" className={classes.paper}>
        <Twit />
        <Twit />
      </Paper>
    </Grid>
  );
}
