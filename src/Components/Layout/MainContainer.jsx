import React from "react";
import theme from "../../Theme/theme";
import SideContainer from "./Section/SideContainer";
import MiddleContainer from "./Section/MiddleContainer";
import MuiGrid from "@material-ui/core/Grid";

const MainContainer = () => {
  const styles = {
    root: {
      background: theme.palette.secondary,
    },
  };

  return (
    <MuiGrid container style={styles.root}>
      <SideContainer />
      <MiddleContainer />
      <SideContainer />
    </MuiGrid>
  );
};

export default MainContainer;
