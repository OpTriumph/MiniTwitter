import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { green } from "@material-ui/core/colors";
import ClearIcon from "@material-ui/icons/Clear";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import Typhography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_TWEET_REQUEST } from "../redux/post";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
}));

function Tweet({ tweet }) {
  const dispatch = useDispatch();
  const DeleteTweetError = useSelector(
    (state) => state.tweetReducer.DeleteTweetError
  );
  const Tweetwritter = useSelector((state) => state.userReducer.myInfo);
  const [like, setLike] = useState(false);
  const [retweet, setRetweet] = useState(false);

  useEffect(() => {
    if (DeleteTweetError) {
      if (DeleteTweetError.statue === 403) alert("이미 삭제된 트윗입니다.");
      else alert(DeleteTweetError.data);
    }
  }, [DeleteTweetError]);
  return (
    <Card>
      <CardHeader
        avatar={
          <IconButton size="small">
            <Avatar alt="username" aria-label="profile" />
          </IconButton>
        }
        action={
          <IconButton
            aria-label="delete"
            onClick={() => {
              if (Tweetwritter.id !== tweet.UserId)
                alert("자신의 트윗만 삭제할 수 있습니다.");
              else {
                dispatch({
                  type: DELETE_TWEET_REQUEST,
                  data: tweet.id,
                });
              }
            }}
          >
            <ClearIcon />
          </IconButton>
        }
        title={
          <Typhography variant="h6">
            <b>{tweet.User.nickname}</b>
          </Typhography>
        }
        subheader={
          <>
            <Typhography variant="body2" component="span">
              {tweet.createdAt.slice(0, 10)}
            </Typhography>
          </>
        }
      />
      <CardContent>
        <Typhography variant="body1">{tweet.content}</Typhography>
      </CardContent>

      <CardActions>
        <IconButton aria-label="mention" component="span">
          <ChatBubbleOutlineIcon />
        </IconButton>
        <Typography component="span" variant="body2">
          {tweet.Comments.length}
        </Typography>

        <IconButton
          aria-label="retweet"
          component="span"
          onClick={() => setRetweet(!retweet)}
        >
          {retweet ? (
            <RepeatIcon style={{ color: green[500] }} />
          ) : (
            <RepeatIcon />
          )}
        </IconButton>
        <Typography component="span" variant="body2">
          0
        </Typography>

        <IconButton
          aria-label="like"
          component="span"
          onClick={() => setLike(!like)}
        >
          {like ? <FavoriteIcon color="secondary" /> : <FavoriteBorderIcon />}
        </IconButton>
        <Typography component="span" variant="body2">
          {tweet.Likers.length}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default function TwitLine({ tweets }) {
  const classes = useStyles();

  return (
    <Grid item xs>
      <Paper variant="outlined" className={classes.paper}>
        <b>최신트윗</b>
      </Paper>
      {tweets.map((tweet) =>
        tweet ? <Tweet key={tweet.id} tweet={tweet} /> : null
      )}
    </Grid>
  );
}
