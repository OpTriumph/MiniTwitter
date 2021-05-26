import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TwitDialog from "../component/TwitDialog.js";
import TwitMenu from "../component/TwitMenu.js";
import TwitProfile from "../component/TwitProfile";
import ProfileDialog from "../component/ProfileDialog";
import { useSelector } from "react-redux";
export default function profile() {
  const [open, setOpen] = React.useState(false);
  const [openPro, setOpenPro] = React.useState(false);

  const User = useSelector((state) => state.User);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClosePro = () => {
    setOpenPro(false);
  };
  const handleClickOpenPro = () => {
    setOpenPro(true);
  };
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <TwitMenu handleClickOpen={handleClickOpen} />
        <TwitProfile User={User} handleClickOpenPro={handleClickOpenPro} />
      </Grid>
      <ProfileDialog handleClosePro={handleClosePro} openPro={openPro} />

      <TwitDialog handleClose={handleClose} open={open} />
    </Container>
  );
}
