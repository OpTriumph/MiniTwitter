import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TwitLine from "../component/Twit.js";
import InfoBox from "../component/InfoBox.js";
import TwitDialog from "../component/TwitDialog.js";
import TwitMenu from "../component/TwitMenu.js";

import { Provider, useDispatch, useSelector } from "react-redux";
import createTweetStore from "../redux/store";
import tweetSlice from "../redux/tweets";

// import { v4 as uuid } from "uuid";
// import { useState } from "react";

export default function Home() {
  const tweet = useSelector(({ tweetReducer }) => tweetReducer.tweets);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  //   const timestamp = require("time-stamp");
  //   const tweets = useSelector((state) => state.tweets);

  //   const [open, setOpen] = React.useState(false);

  useEffect(() => {
    dispatch(tweetSlice.actions.fetchTweets());
  }, []);

  // const listItems = tweet.map((item) => (
  //   <div>
  //     <p key={item.id} tweet={item.title} />
  //   </div>
  // ));

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

        <TwitLine tweets={tweet} />
        <InfoBox />
      </Grid>

      <TwitDialog handleClose={handleClose} open={open} />
    </Container>
  );
}
