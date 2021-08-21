import React from "react";
import { Grid, Hidden } from "@material-ui/core";

const SideContainer = () => {
  return (
    <Hidden xsDown>
      <Grid item sm={1}></Grid>
    </Hidden>
  );
};

export default SideContainer;
