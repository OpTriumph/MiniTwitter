// import Avatar from "@material-ui/core/Avatar";
// import Paper from "@material-ui/core/Paper";
// import IconButton from "@material-ui/core/IconButton";
// import RepeatIcon from "@material-ui/icons/Repeat";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
// import ClearIcon from "@material-ui/icons/Clear";
// import Typography from "@material-ui/core/Typography";
// import React from "react";
// import Typhography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: theme.spacing(2),
//     margin: "auto",
//   },
// }));

// function Twit() {
//   const classes = useStyles();
//   return (
//     <Card>
//       <CardHeader
//         avatar={
//           <IconButton size="small">
//             <Avatar alt="username" aria-label="profile" />
//           </IconButton>
//         }
//         action={
//           <IconButton aria-label="delete">
//             <ClearIcon />
//           </IconButton>
//         }
//         title={
//           <Typhography variant="h6">
//             <b>임시 유저1</b>
//           </Typhography>
//         }
//         subheader={
//           <>
//             <Typhography variant="body2" component="span">
//               @TempUser1 · May 25
//             </Typhography>
//           </>
//         }
//       />
//       <CardContent>
//         <Typhography variant="body1">무슨 일이 일어나고 있나요?</Typhography>
//       </CardContent>

//       <CardActions>
//         <IconButton aria-label="mention" component="span">
//           <ChatBubbleOutlineIcon />
//         </IconButton>
//         <Typography component="span" variant="body2">
//           0
//         </Typography>

//         <IconButton aria-label="retweet" component="span">
//           <RepeatIcon />
//         </IconButton>
//         <Typography component="span" variant="body2">
//           14
//         </Typography>

//         <IconButton aria-label="like" component="span">
//           <FavoriteBorderIcon />
//         </IconButton>
//         <Typography component="span" variant="body2">
//           33
//         </Typography>
//       </CardActions>
//     </Card>
//   );
// }

// export default function TwitLine() {
//   const classes = useStyles();
//   return (
//     <Grid item xs>
//       <Paper variant="outlined" className={classes.paper}>
//         <b>최신 트윗</b>
//       </Paper>
//       <Twit />
//       <Paper variant="outlined" className={classes.paper}>
//         <Twit />
//         <Twit />
//       </Paper>
//     </Grid>
//   );
// }

import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ClearIcon from "@material-ui/icons/Clear";
import Typography from "@material-ui/core/Typography";
import React, { useState, useCallback } from "react";
import Typhography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import { useDispatch, useSelector } from "react-redux";
import { DELETE_TWEET_REQUEST } from "../redux/post";
// import * from "../redux/post";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
}));

function Twit({ tweet, user }) {
  const dispatch = useDispatch();

  const { id, content, userId, likes } = tweet || {};

  // const handleDel = (event) => {
  //   if (event.type !== "click") {
  //     return;
  //   }

  //   dispatch({
  //     type: DELETE_TWEET_REQUEST,
  //     data: tweet.id,
  //   });
  // };

  const handleDelete = useCallback(() => {
    if (!id) {
      return alert("need login");
    }
    return dispatch({
      type: DELETE_TWEET_REQUEST,
      data: {
        data: tweet.id,
      },
    });
  }, [id]);

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
          <IconButton onClick={handleDelete} aria-label="delete">
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
              @{id}· May 25
            </Typhography>
          </>
        }
      />
      <CardContent>
        <Typhography variant="body1">{content}</Typhography>
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

export default function TwitLine({ tweets, user }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  // const DeleteTweetError = useSelector(
  //   (state) => state.tweetReducer.DeleteTweetError
  // );
  // const DeleteTweetDone = useSelector(
  //   (state) => state.tweetReducer.DeleteTweetDone
  // );
  // const DeleteTweetError = useSelector(
  //   (state) => state.tweetReducer.DeleteTweetError
  // );
  // useEffect(() => {
  //   if (DeleteTweetError) {
  //     alert(DeleteTweetError.data);
  //   }
  //   if (DeleteTweetDone) {
  //     setText(""), handleClose;
  //   }
  // }, [AddTweetError, AddTweetDone]);

  return (
    <Grid item xs>
      <Paper variant="outlined" className={classes.paper}>
        <b>최신 트윗</b>
      </Paper>
      {tweets.map((tweet) => (
        <Twit key={tweet.id} tweet={tweet} user={user} />
      ))}
      <Paper variant="outlined" className={classes.paper}>
        {/* <Twit />
        <Twit /> */}
      </Paper>
    </Grid>
  );
}
