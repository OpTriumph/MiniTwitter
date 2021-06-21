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
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TWEET_REQUEST } from "../redux/post";

export default function TwitDialog({ open, handleClose }) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const handleTweet = () => {
    if (!text) {
      alert("게시글을 작성하세요.");
    } else {
      dispatch({
        type: ADD_TWEET_REQUEST,
        data: {
          content: text,
        },
      });
      handleClose();
    }
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
          disabled={!text}
        >
          트윗
        </Button>
      </DialogActions>
    </Dialog>
  );
}
