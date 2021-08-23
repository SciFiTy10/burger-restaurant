import React from "react";
import { Box, useMediaQuery } from "@material-ui/core";
import Welcome from "../../Welcome/Welcome";
const WelcomeContainer = () => {
  //determine whether this is a small screen size or not
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  //create a variable for managing the margin depending on the screensize
  const margin = isSmallScreen ? 5 : 10;
  return (
    <Box m={margin}>
      <Welcome />
    </Box>
  );
};

export default WelcomeContainer;
