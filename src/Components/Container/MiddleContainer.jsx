import React from "react";
import WelcomeContainer from "./Welcome/WelcomeContainer";
import MenuContainer from "./Menu/MenuContainer";
import GridItem from "../Layout/Grid/GridItem";

const MiddleContainer = () => {
  return (
    <GridItem xs={12} sm={10}>
      <WelcomeContainer />
      <MenuContainer />
    </GridItem>
  );
};

export default MiddleContainer;
