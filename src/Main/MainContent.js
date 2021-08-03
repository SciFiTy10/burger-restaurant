import React from "react";
import { Box, Grid, Hidden } from "@material-ui/core";
import Welcome from "./Welcome";
import BackgroundImage from "../Assets/burger.jpg";

const MainContent = () => {
  const styles = {
    root: {
      backgroundImage: `url(${BackgroundImage})`,
      backgroundRepeat: "space repeat",
      backgroundSize: "90px 90px",
    },
  };
  return (
    <Grid container style={styles.root}>
      <Hidden xsDown>
        <Grid item md={3}></Grid>
      </Hidden>
      <Grid item xs={12} md={6}>
        <Box p={10}>
          <Welcome />
        </Box>
      </Grid>
      <Hidden xsDown>
        <Grid item md={3}></Grid>
      </Hidden>
    </Grid>
  );
};

export default MainContent;
