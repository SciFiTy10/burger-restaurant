import React from "react";
import theme from "../../Theme/theme";
import SideContainer from "./SideContainer";
import MiddleContainer from "./MiddleContainer";
import GridContainer from "../Grid/GridContainer";

const MainContainer = () => {
  const styles = {
    root: {
      background: theme.palette.secondary,
    },
  };

  return (
    <GridContainer style={styles.root}>
      <SideContainer />
      <MiddleContainer />
      <SideContainer />
    </GridContainer>
  );
};

export default MainContainer;
