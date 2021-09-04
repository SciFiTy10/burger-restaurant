import React from "react";
import { useMediaQuery } from "@material-ui/core";
import Box from "../../../Spacing/Box/Box";
import Welcome from "../Welcome";

const WelcomeContainer = () => {
  //determine whether this is a phone screen size or not
  const isPhoneScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  //create a variable for managing the margin depending on the screensize
  const margin = isPhoneScreen ? 5 : 10;
  return (
    <Box m={margin}>
      <Welcome />
    </Box>
  );
};

export default WelcomeContainer;
