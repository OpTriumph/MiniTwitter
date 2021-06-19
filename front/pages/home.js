import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TwitLine from "../component/Twit.js";
import InfoBox from "../component/InfoBox.js";
import TwitDialog from "../component/TwitDialog.js";
import TwitMenu from "../component/TwitMenu.js";

import { useDispatch, useSelector } from "react-redux";

import { LOAD_TWEET_REQUEST } from "../redux/tweets2.js";
import { LOAD_INFO_REQUEST } from "../redux/user.js";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const myInfo = useSelector((state) => state.userReducer.logInError);
  const tweets = useSelector((state) => state.tweetReducer.tweets);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch({
    //   type: LOAD_INFO_REQUEST,
    // });
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

        <TwitLine tweets={tweets} />
        <InfoBox />
      </Grid>

      <TwitDialog handleClose={handleClose} open={open} />
    </Container>
  );
}
