import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme/theme";
import Header from "./Header/Header";
import MainContent from "./Main/MainContent";
import React, { useState } from "react";
import { CssBaseline } from "@material-ui/core";
import AppContextProvider from "./Context/AppContextProvider";
import Cart from "./Cart/Cart";
import ConfirmDialog from "./Dialogs/ConfirmDialog";

const App = () => {
  const titleText = "Big Kahuna Burger";
  const [cartCount, setCartCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>
        <Header titleText={titleText} />
        <MainContent />
        <Cart />
        <ConfirmDialog />
      </AppContextProvider>
    </ThemeProvider>
  );
};

export default App;
