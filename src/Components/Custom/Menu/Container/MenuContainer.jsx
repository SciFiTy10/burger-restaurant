import React from "react";
import { useMediaQuery } from "@material-ui/core";
import Box from "../../../Spacing/Box/Box";
import Menu from "../Menu";
import Card from "../../../UI/Card/Card";
import CardContent from "../../../UI/Card/CardContent";
import List from "../../../UI/List/List";

const MenuContainer = () => {
  //determine whether this is a phone screen size or not
  const isPhoneScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  //create variables for managing the margin depending on the screensize
  const marginSides = isPhoneScreen ? 2 : {};
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
