import React from "react";
import MuiGrid from "@material-ui/core/Grid";

const MiddleContainer = (props) => {
  return (
    <MuiGrid item xs={12} sm={10}>
      {props.children}
    </MuiGrid>
  );
};

export default MiddleContainer;
