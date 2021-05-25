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

function Twit({ tweet, likeTweet, deleteTweet }) {
  const { id, text, like, retweet, mention, time, user } = tweet || {};
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
          <IconButton aria-label="delete" onClick={() => deleteTweet(id)}>
            <ClearIcon />
          </IconButton>
        }
        title={
          <Typhography variant="h6">
            <b>{user}</b>
          </Typhography>
        }
        subheader={
          <>
            <Typhography variant="body2" component="span">
              @{user} · {time}
            </Typhography>
          </>
        }
      />
      <CardContent>
        <Typhography variant="body1">{text}</Typhography>
      </CardContent>

      <CardActions>
        <IconButton aria-label="mention" component="span">
          <ChatBubbleOutlineIcon />
        </IconButton>
        <Typography component="span" variant="body2">
          {mention}
        </Typography>

        <IconButton aria-label="retweet" component="span">
          <RepeatIcon />
        </IconButton>
        <Typography component="span" variant="body2">
          {retweet}
        </Typography>

        <IconButton
          aria-label="like"
          component="span"
          onClick={() => likeTweet(id)}
        >
          <FavoriteBorderIcon />
        </IconButton>
        <Typography component="span" variant="body2">
          {like}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default function TwitLine({ tweets = [], likeTweet, deleteTweet }) {
  // const [like, setLike] = React.useState(0);
  if (tweets.length < 1) return null;

  const classes = useStyles();
  return (
    <Grid item xs>
      <Paper variant="outlined" className={classes.paper}>
        <b>최신 트윗</b>
      </Paper>
      <Twit />
      <Paper variant="outlined" className={classes.paper}>
        {tweets.map((tweet) => (
          <Twit
            key={tweet.id}
            tweet={tweet}
            likeTweet={likeTweet}
            deleteTweet={deleteTweet}
          />
        ))}
      </Paper>
    </Grid>
  );
}
