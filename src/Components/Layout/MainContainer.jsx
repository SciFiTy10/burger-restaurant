import React from "react";
import theme from "../../Theme/theme";
import SideContainer from "./Section/SideContainer";
import MiddleContainer from "./Section/MiddleContainer";
import WelcomeContainer from "../Custom/Welcome/Container/WelcomeContainer";
import MenuContainer from "../Custom/Menu/Container/MenuContainer";
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
      <MiddleContainer>
        <WelcomeContainer />
        <MenuContainer />
      </MiddleContainer>
      <SideContainer />
    </MuiGrid>
  );
};

export default MainContainer;
