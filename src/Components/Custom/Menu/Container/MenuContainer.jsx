import React from "react";
import { useMediaQuery } from "@material-ui/core";
import MuiBox from "@material-ui/core/Box";
import Menu from "../Menu";
import MuiCard from "@material-ui/core/Card";
import MuiCardContent from "@material-ui/core/CardContent";
import List from "../../../UI/List/List";

const MenuContainer = () => {
  //determine whether this is a phone screen size or not
  const isPhoneScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  //create variables for managing the margin depending on the screensize
  const marginSides = isPhoneScreen ? 2 : {};
  return (
    <MuiBox mt={5} mx={marginSides} mb={2}>
      <MuiCard>
        <MuiCardContent>
          <List component="ul" ariaLabel="menu">
            <Menu />
          </List>
        </MuiCardContent>
      </MuiCard>
    </MuiBox>
  );
};

export default MenuContainer;
