import React from "react";
import { Box, useMediaQuery } from "@material-ui/core";
import Menu from "../../Menu/Menu";
const MenuContainer = () => {
  //determine whether this is a small screen size or not
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  //create variables for managing the margin depending on the screensize
  const marginSides = isSmallScreen ? 2 : {};
  const marginBottom = marginSides;
  return (
    <Box mt={5} mx={marginSides} mb={marginBottom}>
      <Menu />
    </Box>
  );
};

export default MenuContainer;