import React from "react";
import WelcomeContainer from "../../Custom/Welcome/Container/WelcomeContainer";
import MenuContainer from "../../Custom/Menu/Container/MenuContainer";
import MuiGrid from "@material-ui/core/Grid";

const MiddleContainer = () => {
  return (
    <MuiGrid item xs={12} sm={10}>
      <WelcomeContainer />
      <MenuContainer />
    </MuiGrid>
  );
};

export default MiddleContainer;
