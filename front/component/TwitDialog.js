import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TWEET_REQUEST } from "../redux/post";
import { ReqDialog } from "dialog_requirement-twtpj";
import { addTweetAction } from "../redux/post";
import tweetReducer from "../redux/post";

export default function TwitDialog({ open, handleClose }) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [valid, setValid] = useState(false);

  const AddTweetError = useSelector(
    (state) => state.tweetReducer.AddTweetError
  );
  const AddTweetAdding = useSelector(
    (state) => state.tweetReducer.AddTweetAdding
  );

  const AddTweetDone = useSelector((state) => state.tweetReducer.AddTweetDone);

  const tweetRequirement = [
    {
      text: "Must be at least 1 characters",
      validator: (val) => val.length >= 1,
    },
  ];
  const onChangeText = (e) => {
    setText(e.target.value);
    console.log(text);
  };
  useEffect(() => {
    if (AddTweetError) {
      alert(AddTweetError.data);
    }
    if (AddTweetDone) {
      setText(""), handleClose;
    }
  }, [AddTweetError, AddTweetDone]);

  const handleTweet = (event) => {
    if (event.type !== "click") {
      return;
    }
    if (text === "") {
      return;
    }
    dispatch(addTweetAction({ text }));
    handleClose();
    setText("");
  };

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
            <ReqDialog
              value={text}
              Requirements={tweetRequirement}
              onValidChange={(isValid) => setValid(isValid)}
            />
            <TextField
              id="write-new-twit"
              autoFocus
              multiline
              value={text}
              onChange={onChangeText}
              rows={9}
              placeholder="무슨일이 일어나고 있나요?"
              fullWidth
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={handleTweet}
          color="primary"
          variant="contained"
          size="large"
          disabled={!valid || !text}
          loading={AddTweetAdding}
        >
          트윗
        </Button>
      </DialogActions>
    </Dialog>
  );
}
