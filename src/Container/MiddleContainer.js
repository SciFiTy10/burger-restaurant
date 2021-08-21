import React from "react";
import { Grid } from "@material-ui/core";
import WelcomeContainer from "./Content/WelcomeContainer";
import MenuContainer from "./Content/MenuContainer";

const MiddleContainer = () => {
  return (
    <Grid item xs={12} sm={10}>
      <WelcomeContainer />
      <MenuContainer />
    </Grid>
  );
};

export default MiddleContainer;
