import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme/theme";
import Header from "./Header/Header";
import MainContent from "./Main/MainContent";
import React, { useState } from "react";
import { CssBaseline } from "@material-ui/core";

const App = () => {
  const titleText = "Big Kahuna Burger";
  const [cartCount, setCartCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header titleText={titleText} cartCount={cartCount} />
      <MainContent />
    </ThemeProvider>
  );
};

export default App;
