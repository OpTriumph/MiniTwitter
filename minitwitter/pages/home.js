import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TwitLine from "../component/Twit.js";
import InfoBox from "../component/InfoBox.js";
import TwitDialog from "../component/TwitDialog.js";
import TwitMenu from "../component/TwitMenu.js";

// import { v4 as uuid } from "uuid";
// import { useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const timestamp = require("time-stamp");
  const tweets = useSelector((state) => state.tweets);
  const [open, setOpen] = React.useState(false);

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
