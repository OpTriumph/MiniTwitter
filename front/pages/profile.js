import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TwitDialog from "../component/TwitDialog.js";
import TwitMenu from "../component/TwitMenu.js";
import TwitProfile from "../component/TwitProfile";
import { LOAD_INFO_REQUEST } from "../redux/user.js";
import { useSelector, useDispatch } from "react-redux";

export default function Profile() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const myInfo = useSelector((state) => state.userReducer.myInfo);
  useEffect(() => {
    dispatch({
      type: LOAD_INFO_REQUEST,
    });
  }, []);
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
        <TwitProfile user={myInfo} />
      </Grid>

      <TwitDialog handleClose={handleClose} open={open} />
    </Container>
  );
}
