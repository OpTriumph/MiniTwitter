import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TwitDialog from "../component/TwitDialog.js";
import TwitMenu from "../component/TwitMenu.js";
import TwitProfile from "../component/TwitProfile";

import { useSelector, useDispatch } from "react-redux";
import { LOAD_INFO_REQUEST } from "../redux/user";
// import { LOAD_POSTS_REQUEST } from "../reducers/posts";

export default function Profile() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const myInfo = useSelector((state) => state.userReducer.myInfo);
  console.log(myInfo);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch({
      type: LOAD_INFO_REQUEST,
    });
    // dispatch({
    //   type: LOAD_POSTS_REQUEST,
    // });
  }, []);
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <TwitMenu handleClickOpen={handleClickOpen} />
        <TwitProfile data={myInfo} />
      </Grid>

      <TwitDialog handleClose={handleClose} open={open} />
    </Container>
  );
}
