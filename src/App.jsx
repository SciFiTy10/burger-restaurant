import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme/theme";
import Header from "./Components/Layout/Header/Header";
import MainContainer from "./Components/Layout/MainContainer";
import DialogContainer from "./Components/Custom/Cart/Dialog/Container/DialogContainer";
import NotificationContainer from "./Components/Custom/Notification/Container/NotificationContainer";
import React from "react";
import { CssBaseline } from "@material-ui/core";
import AppContextProvider from "./Context/AppContextProvider";
import Authenticator from "./Components/Auth/Authenticator";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>
        <Authenticator>
          <Header />
          <MainContainer />
          <DialogContainer />
          <NotificationContainer />
        </Authenticator>
      </AppContextProvider>
    </ThemeProvider>
  );
};

export default App;
