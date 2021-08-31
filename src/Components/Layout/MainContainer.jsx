import React from "react";
import theme from "../../Theme/theme";
import SideContainer from "./Section/SideContainer";
import MiddleContainer from "./Section/MiddleContainer";
import GridContainer from "../Spacing/Grid/GridContainer";

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
