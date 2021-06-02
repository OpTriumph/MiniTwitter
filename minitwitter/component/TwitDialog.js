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

// export default function TwitDialog({ open, handleClose }) {
//   const [text, setText] = useState("");

//   const dispatch = useDispatch();

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   const handleTweet = (event) => {
//     if (event.type !== "click") {
//       return;
//     }
//     if (text === "") {
//       return;
//     }
//     handleClose();
//     dispatch(addTweet(text));
//     setText("");
//   };

//   return (
//     <Dialog
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="new-twit-dialog"
//       fullWidth
//     >
//       <DialogTitle id="close">
//         <IconButton color="primary" aria-label="delete" onClick={handleClose}>
//           <ClearIcon />
//         </IconButton>
//       </DialogTitle>

//       <DialogContent>
//         <Grid container spacing={2}>
//           <Grid item>
//             <Avatar alt="username" aria-label="profile" />
//           </Grid>

//           <Grid item xs>
//             <TextField
//               id="write-new-twit"
//               autoFocus
//               multiline
//               rows={9}
//               value={text}
//               onChange={handleChange}
//               placeholder="무슨일이 일어나고 있나요?"
//               fullWidth
//             />
//           </Grid>
//         </Grid>
//       </DialogContent>

//       <DialogActions>
//         <Button
//           color="primary"
//           variant="contained"
//           size="large"
//           onClick={handleTweet}
//         >
//           트윗
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// }

export default function TwitDialog({ open, handleClose }) {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

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
    handleClose();
    dispatch(addTweet(text));
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
        <IconButton color="primary" aria-label="delete" onClick={handleClose}>
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
          color="primary"
          variant="contained"
          size="large"
          onClick={handleTweet}
        >
          트윗
        </Button>
      </DialogActions>
    </Dialog>
  );
}
