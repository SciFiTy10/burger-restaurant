import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme/theme";
import Header from "./Header/Header";
import MainContent from "./Main/MainContent";
import React from "react";
import { CssBaseline } from "@material-ui/core";
import AppContextProvider from "./Context/AppContextProvider";
import CartDialog from "./Dialogs/CartDialog";
import ConfirmDialog from "./Dialogs/ConfirmDialog";
import SnackbarNotification from "./Notifications/SnackbarNotification";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>
        <Header />
        <MainContent />
        <CartDialog />
        <ConfirmDialog />
        <SnackbarNotification />
      </AppContextProvider>
    </ThemeProvider>
  );
};

export default App;
