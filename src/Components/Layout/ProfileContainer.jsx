import React from "react";
import theme from "../../Theme/theme";
import SideContainer from "./Section/SideContainer";
import MiddleContainer from "./Section/MiddleContainer";
import MenuContainer from "../Custom/Menu/Container/MenuContainer";
import UserInfoContainer from "../Custom/User/Container/UserInfoContainer";
import MuiGrid from "@material-ui/core/Grid";

const ProfileContainer = () => {
  const styles = {
    root: {
      background: theme.palette.secondary,
    },
  };

  return (
    <MuiGrid container style={styles.root}>
      <SideContainer />
      <MiddleContainer>
        <UserInfoContainer />
      </MiddleContainer>
      <SideContainer />
    </MuiGrid>
  );
};

export default ProfileContainer;
