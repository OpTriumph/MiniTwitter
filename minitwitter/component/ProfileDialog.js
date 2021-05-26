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

import { changeInfo, changeName } from "../redux/user";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function ProfileDialog({ openPro, handleClosePro }) {
  const [name, setName] = useState("");
  const [Info, setInfo] = useState("");

  const dispatch = useDispatch();

  const handleUserProfile = (event) => {
    if (event.type !== "click") {
      return;
    }
    handleClosePro();
    dispatch(changeName(name));
    dispatch(changeInfo(Info));
    setInfo("");
    setName("");
  };

  const handleUserInfo = (event) => {
    setInfo(event.target.value);
  };
  const handleUserName = (event) => {
    setName(event.target.value);
  };

  return (
    <Dialog
      open={openPro}
      onClose={handleClosePro}
      aria-labelledby="new-twit-dialog"
    >
      <DialogTitle id="close">
        <IconButton
          color="primary"
          aria-label="delete"
          onClick={handleClosePro}
        >
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
              rows={2}
              onChange={handleUserName}
              placeholder="Complete Your User Name"
              fullWidth
            />
            <TextField
              id="write-new-twit"
              autoFocus
              multiline
              rows={4}
              onChange={handleUserInfo}
              placeholder="Complete Your Bio!"
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
          onClick={handleUserProfile}
        >
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
}
