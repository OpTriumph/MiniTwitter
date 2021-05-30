import Head from "next/head";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Provider } from "react-redux";
import createStore from "../redux/store";
// Create a theme instance.
const store = createStore();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(29,161,242,1.00)",
      contrastText: "#ffffff",
    },
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <meta
            name="viewport"
            content="width=divce-width, initial-scale=1.0, minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
          />
          <title>MniTwitter</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
