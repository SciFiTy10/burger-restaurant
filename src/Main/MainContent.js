import React from "react";
import { Box, Grid, Hidden } from "@material-ui/core";
import Welcome from "./Welcome";
import Menu from "./Menu";
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
        <Grid item md={2}></Grid>
      </Hidden>
      <Grid item xs={12} md={8}>
        <Box m={10}>
          <Welcome />
        </Box>
        <Box mt={5}>
          <Menu />
        </Box>
      </Grid>
      <Hidden xsDown>
        <Grid item md={2}></Grid>
      </Hidden>
    </Grid>
  );
};

export default MainContent;