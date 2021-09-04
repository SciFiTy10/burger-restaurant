import React from "react";
import WelcomeContainer from "../../Custom/Welcome/Container/WelcomeContainer";
import MenuContainer from "../../Custom/Menu/Container/MenuContainer";
import GridItem from "../../Spacing/Grid/GridItem";

const MiddleContainer = () => {
  return (
    <GridItem xs={12} sm={10}>
      <WelcomeContainer />
      <MenuContainer />
    </GridItem>
  );
};

export default MiddleContainer;
