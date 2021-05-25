import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TwitLine from "../component/Twit.js";
import InfoBox from "../component/InfoBox.js";
import TwitDialog from "../component/TwitDialog.js";
import TwitMenu from "../component/TwitMenu.js";

import { v4 as uuid } from "uuid";
import { useState } from "react";
export default function Home() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const MOCK_DATA = [
    {
      id: "1111",
      text: "this is ",
      likes: 0,
      comments: [],
    },
  ];

  const [tweets, setTweets] = useState(MOCK_DATA);
  const addTweet = (text) => {
    const tweet = {
      id: uuid(),
      text,
      // likes,
    };
    const newTweets = [...tweets, tweet];
    setTweets(newTweets);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <TwitMenu handleClickOpen={handleClickOpen} />

        <TwitLine tweets={tweets} />
        <InfoBox />
      </Grid>

      <TwitDialog addTweet={addTweet} handleClose={handleClose} open={open} />
    </Container>
  );
}
