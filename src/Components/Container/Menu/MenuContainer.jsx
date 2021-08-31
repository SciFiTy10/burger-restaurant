import React from "react";
import { useMediaQuery } from "@material-ui/core";
import Box from "../../Layout/Box/Box";
import Menu from "../../Custom/Menu/Menu";
import Card from "../../UI/Card/Card";
import CardContent from "../../UI/Card/CardContent";
import List from "../../UI/List/List";

const MenuContainer = () => {
  //determine whether this is a small screen size or not
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  //create variables for managing the margin depending on the screensize
  const marginSides = isSmallScreen ? 2 : {};
  return (
    <Box mt={5} mx={marginSides} mb={2}>
      <Card>
        <CardContent>
          <List component="nav" ariaLabel="menu">
            <Menu />
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MenuContainer;
