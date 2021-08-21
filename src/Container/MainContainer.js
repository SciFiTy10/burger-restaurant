import React from "react";
import { Grid } from "@material-ui/core";
import theme from "../Theme/theme";
import SideContainer from "./SideContainer";
import MiddleContainer from "./MiddleContainer";

const MainContainer = () => {
  const styles = {
    root: {
      background: theme.palette.secondary,
    },
  };

  return (
    <Grid container style={styles.root}>
      <SideContainer />
      <MiddleContainer />
      <SideContainer />
    </Grid>
  );
};

export default MainContainer;
