import React from "react";
import MuiGrid from "@material-ui/core/Grid";

const GridContainer = (props) => {
  return <MuiGrid container>{props.children}</MuiGrid>;
};

export default GridContainer;
