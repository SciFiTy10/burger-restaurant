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
  const menuItems = [
    {
      id: 1,
      title: "Royale w/Cheese",
      description: "You know what they call a quarter pounder in France?",
      price: "12.99",
    },
  ];
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
          <Menu menuItems={menuItems} />
        </Box>
      </Grid>
      <Hidden xsDown>
        <Grid item md={2}></Grid>
      </Hidden>
    </Grid>
  );
};

export default MainContent;
