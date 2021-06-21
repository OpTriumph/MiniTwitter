import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
// import { ReqDialog } from "dialog_requirement-twtpj";
import { useSelector, useDispatch } from "react-redux";
import React, { useCallback, useEffect } from "react";
import { ADD_COMMENT_REQUEST } from "../redux/post";

export default function TwitDialog({ open, handleClose, ID }) {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweetReducer.tweets);
  const post = tweets.find((v) => v.id === 2);
  const [Comment, setComment] = React.useState("Leaving a comment...");
  const [valid, setValid] = React.useState(false);

  const CommentRequirement = [
    {
      text: "Must be at least 10 characters",
      validator: (val) => val.length >= 10,
    },
  ];

  //   const handleComment = () => {
  //     if (!Comment) {
  //       alert(tweet);
  //     } else {
  //       dispatch({
  //         type: ADD_COMMENT_REQUEST,
  //         data: {
  //           content: Comment,
  //           id: ID,
  //         },
  //       });
  //       handleClose();
  //       setComment("");
  //     }
  //   };

  const handleComment = useCallback(() => {
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { content: Comment, id: ID },
    });
  }, [Comment, ID]);

  const handleBioChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="new-twit-dialog"
      fullWidth
    >
      <DialogTitle id="close">
        <IconButton
          component="span"
          color="primary"
          aria-label="close"
          onClick={handleClose}
        >
          <ClearIcon />
        </IconButton>
        {/* <Typography component="span" variant="h6">
          <b>Leave a comment</b>
        </Typography> */}
      </DialogTitle>

      <DialogContent scroll="body">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item>
            {/* <ReqDialog
              value={Comment}
              Requirements={CommentRequirement}
              onValidChange={(isValid) => setValid(isValid)}
            /> */}
            <TextField
              id="change-my-bio"
              multiline
              variant="outlined"
              value={Comment}
              rows={5}
              label="Comment"
              autoFocus
              placeholder="Leave a comment..."
              fullWidth
              onChange={handleBioChange}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleComment}
          color="primary"
          variant="contained"
          size="large"
          //   disabled={!valid || (!name && !Comment)}
        >
          저장
        </Button>
      </DialogActions>
    </Dialog>
  );
}
