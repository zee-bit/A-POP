import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import GlobalThemeContextProvider from "./components/ThemeProvider";
import theme from "./theme";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./graphql/client";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalThemeContextProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </GlobalThemeContextProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.register();
