// import React, { useEffect } from "react";
// import Grid from "@material-ui/core/Grid";
// import Container from "@material-ui/core/Container";
// import TwitLine from "../component/Twit.js";
// import InfoBox from "../component/InfoBox.js";
// import TwitDialog from "../component/TwitDialog.js";
// import TwitMenu from "../component/TwitMenu.js";
// import { LOAD_INFO_REQUEST } from "../redux/user.js";
// import { useDispatch, useSelector } from "react-redux";

// export default function Home() {
//   const dispatch = useDispatch();
//   const myInfo = useSelector((state) => state.userReducer.myInfo);
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   useEffect(() => {
//     dispatch({
//       type: LOAD_INFO_REQUEST,
//     });
//   }, []);
//   return (
//     <Container maxWidth="lg">
//       <Grid container spacing={2}>
//         <TwitMenu handleClickOpen={handleClickOpen} />

//         <TwitLine />
//         <InfoBox />
//       </Grid>

//       <TwitDialog handleClose={handleClose} open={open} user={myInfo} />
//     </Container>
//   );
// }
import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TwitLine from "../component/Twit.js";
import InfoBox from "../component/InfoBox.js";
import TwitDialog from "../component/TwitDialog.js";
import TwitMenu from "../component/TwitMenu.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_INFO_REQUEST } from "../redux/user.js";
import { LOAD_TWEET_REQUEST } from "../redux/post.js";

export default function Home() {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweetReducer.tweets);
  const myInfo = useSelector((state) => state.userReducer.myInfo);
  console.log(myInfo);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    dispatch({
      type: LOAD_INFO_REQUEST,
    });

    dispatch({
      type: LOAD_TWEET_REQUEST,
    });
  }, []);
  console.log(tweets);
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
        <TwitLine tweets={tweets} user={myInfo} />
        <InfoBox />
      </Grid>

      <TwitDialog handleClose={handleClose} open={open} user={myInfo} />
    </Container>
  );
}
