import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme/theme";
import Header from "./Header/Header";
import MainContainer from "./Container/MainContainer";
import DialogContainer from "./Container/Dialog/DialogContainer";
import React from "react";
import { CssBaseline } from "@material-ui/core";
import AppContextProvider from "./Context/AppContextProvider";
import SnackbarNotification from "./Notification/SnackbarNotification";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>
        <Header />
        <MainContainer />
        <DialogContainer />
        <SnackbarNotification />
      </AppContextProvider>
    </ThemeProvider>
  );
};

export default App;
