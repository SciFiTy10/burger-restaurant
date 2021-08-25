import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme/theme";
import Header from "./Components/Header/Header";
import MainContainer from "./Components/Container/MainContainer";
import DialogContainer from "./Components/Container/Dialog/DialogContainer";
import NotificationContainer from "./Components/Container/Notification/NotificationContainer";
import React from "react";
import { CssBaseline } from "@material-ui/core";
import AppContextProvider from "./Context/AppContextProvider";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>
        <Header />
        <MainContainer />
        <DialogContainer />
        <NotificationContainer />
      </AppContextProvider>
    </ThemeProvider>
  );
};

export default App;
