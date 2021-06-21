import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TwitDialog from "../component/TwitDialog.js";
import TwitMenu from "../component/TwitMenu.js";
import TwitProfile from "../component/TwitProfile";
import { LOAD_INFO_REQUEST } from "../redux/user.js";
import { useSelector, useDispatch } from "react-redux";
import TweetLine from "../component/TweetLine";
import { LOAD_MY_TWEET_REQUEST } from "../redux/post.js";

export default function Profile() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const myInfo = useSelector((state) => state.userReducer.myInfo);
  const mytweets = useSelector((state) => state.tweetReducer.mytweets);

  useEffect(() => {
    dispatch({
      type: LOAD_INFO_REQUEST,
    });
    dispatch({
      type: LOAD_MY_TWEET_REQUEST,
    });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <TwitMenu handleClickOpen={handleClickOpen} />
        <Grid item container direction="column" xs>
          <TwitProfile user={myInfo} />
          <TweetLine tweets={mytweets} />
        </Grid>
      </Grid>

      <TwitDialog handleClose={handleClose} open={open} />
    </Container>
  );
}
