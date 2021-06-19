import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import tweetReducer from "../redux/tweets2";
import { addtweet } from "../redux/tweets2";

export default function TwitDialog({ open, handleClose }) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const AddTweetError = useSelector(
    (state) => state.tweetReducer.AddTweetError
  );
  const AddTweetAdding = useSelector(
    (state) => state.tweetReducer.AddTweetAdding
  );

  const AddTweetDone = useSelector((state) => state.tweetReducer.AddTweetDone);

  useEffect(() => {
    if (AddTweetError) {
      alert(AddTweetError.data);
    }
    if (AddTweetDone) {
      setText("");
    }
  }, [AddTweetDone, AddTweetError]);

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleTweet = (event) => {
    if (event.type !== "click") {
      return;
    }
    if (text === "") {
      return;
    }
    dispatch(addtweet({ text }));
    handleClose();
    setText("");
  };

  // dispatch(signUpAction({ email, password, nickname }));

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="new-twit-dialog"
      fullWidth
    >
      <DialogTitle id="close">
        <IconButton color="primary" aria-label="close" onClick={handleClose}>
          <ClearIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar alt="username" aria-label="profile" />
          </Grid>

          <Grid item xs>
            <TextField
              id="write-new-twit"
              autoFocus
              multiline
              rows={9}
              value={text}
              onChange={handleChange}
              placeholder="무슨일이 일어나고 있나요?"
              fullWidth
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={handleClose}
          color="primary"
          variant="contained"
          size="large"
          onClick={handleTweet}
          loading={AddTweetAdding}
        >
          트윗
        </Button>
      </DialogActions>
    </Dialog>
  );
}
