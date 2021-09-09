import React from "react";
import MuiHidden from "@material-ui/core/Hidden";
import GridItem from "../../Spacing/Grid/GridItem";

const SideContainer = () => {
  return (
    <MuiHidden xsDown>
      <GridItem sm={1} />
    </MuiHidden>
  );
};

export default SideContainer;
