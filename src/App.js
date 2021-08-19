import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme/theme";
import Header from "./Header/Header";
import MainContent from "./Main/MainContent";
import React from "react";
import { CssBaseline } from "@material-ui/core";
import AppContextProvider from "./Context/AppContextProvider";
import CartDialog from "./Dialogs/CartDialog";
import ConfirmDialog from "./Dialogs/ConfirmDialog";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>
        <Header />
        <MainContent />
        <CartDialog />
        <ConfirmDialog />
      </AppContextProvider>
    </ThemeProvider>
  );
};

export default App;
