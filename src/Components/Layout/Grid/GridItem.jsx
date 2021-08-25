import React from "react";
import MuiGrid from "@material-ui/core/Grid";
const GridItem = (props) => {
  return (
    <MuiGrid item xs={props.xs} sm={props.sm}>
      {props.children}
    </MuiGrid>
  );
};

export default GridItem;
