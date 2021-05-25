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
  const timestamp = require("time-stamp");

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
      like: 0,
      retweet: 0,
      mention: [],
      user: "React",
      time: "May 25",
    },
  ];

  const [tweets, setTweets] = useState(MOCK_DATA);
  const addTweet = (text) => {
    const tweet = {
      id: uuid(),
      text,
      like: 0,
      retweet: 0,
      mention: [],
      user: "",
      time: timestamp("YYYY/MM/DD:mm:ss"),
    };
    const newTweets = [...tweets, tweet];
    setTweets(newTweets);
  };

  const likeTweet = (id) => {
    const newTweet = tweets.map((tweet) => {
      if (tweet.id === id) return { ...tweet, like: tweet.like + 1 };
      return tweet;
    });
    setTweets(newTweet);
  };

  const deleteTweet = (id) => {
    const newTweets = tweets.filter((tweet) => tweet.id !== id);
    setTweets(newTweets);
  };
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <TwitMenu handleClickOpen={handleClickOpen} />

        <TwitLine
          tweets={tweets}
          likeTweet={likeTweet}
          deleteTweet={deleteTweet}
        />
        <InfoBox />
      </Grid>

      <TwitDialog addTweet={addTweet} handleClose={handleClose} open={open} />
    </Container>
  );
}
