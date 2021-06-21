import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TweetLine from "../component/TweetLine.js";
import InfoBox from "../component/InfoBox.js";
import TwitDialog from "../component/TwitDialog.js";
import TwitMenu from "../component/TwitMenu.js";
import { LOAD_INFO_REQUEST } from "../redux/user.js";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_TWEET_REQUEST } from "../redux/post.js";

export default function Home() {
  const dispatch = useDispatch();
  const myInfo = useSelector((state) => state.userReducer.myInfo);
  const tweets = useSelector((state) => state.tweetReducer.tweets);

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    dispatch({
      type: LOAD_INFO_REQUEST,
    });
    dispatch({
      type: LOAD_TWEET_REQUEST,
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

        <TweetLine tweets={tweets} />
        <InfoBox />
      </Grid>

      <TwitDialog handleClose={handleClose} open={open} user={myInfo} />
    </Container>
  );
}
