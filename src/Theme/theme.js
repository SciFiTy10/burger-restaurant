import { createTheme } from "@material-ui/core/styles";

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

export default theme;
