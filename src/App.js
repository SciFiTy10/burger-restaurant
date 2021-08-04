import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Header from "./Header/Header";
import MainContent from "./Main/MainContent";
import React, { useState } from "react";
import { CssBaseline } from "@material-ui/core";

const App = () => {
  const titleText = "Big Kahuna Burger";
  const [cartCount, setCartCount] = useState(0);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#A52A2A",
      },
      secondary: {
        main: "#681A1A",
      },
      text: {
        primary: "#fff",
      },
    },
    overrides: {
      MuiCard: {
        root: {
          backgroundColor: "#A52A2A",
          color: "white",
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header titleText={titleText} cartCount={cartCount} />
      <MainContent />
    </ThemeProvider>
  );
};

export default App;
