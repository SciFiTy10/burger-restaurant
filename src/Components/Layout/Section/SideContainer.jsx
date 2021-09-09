import React from "react";
import MuiHidden from "@material-ui/core/Hidden";
import MuiGrid from "@material-ui/core/Grid";

const SideContainer = () => {
  return (
    <MuiHidden xsDown>
      <MuiGrid item sm={1} />
    </MuiHidden>
  );
};

export default SideContainer;
