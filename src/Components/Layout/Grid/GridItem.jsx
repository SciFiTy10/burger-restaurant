import React from "react";
import MuiGrid from "@material-ui/core/Grid";
const GridItem = (props) => {
  return (
    <MuiGrid
      item
      xs={props.xs}
      sm={props.sm}
      justifyContent={props.justifyContent}
    >
      {props.children}
    </MuiGrid>
  );
};

export default GridItem;
