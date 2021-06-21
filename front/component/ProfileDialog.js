import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";

export default function TwitDialog({ open, handleClose }) {
  const [Bio, setBio] = React.useState("미니트위터 자기소개란. Test");

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };
  const [name, setName] = React.useState("유저이름2");
  const handleNameChange = (event) => {
    setName(event.target.value);
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
        <Typography component="span" variant="h6">
          <b>프로필 수정</b>
        </Typography>
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
            <IconButton>
              <Avatar
                alt="username"
                aria-label="profile"
                style={{ width: 126, height: 126 }}
              />
            </IconButton>
          </Grid>
          <Grid item>
            <TextField
              id="change-my-name"
              variant="outlined"
              value={name}
              label="name"
              fullWidth
              onChange={handleNameChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="change-my-bio"
              multiline
              variant="outlined"
              value={Bio}
              rows={5}
              label="Bio"
              fullWidth
              onChange={handleBioChange}
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
          disabled={!name && !Bio}
        >
          저장
        </Button>
      </DialogActions>
    </Dialog>
  );
}
