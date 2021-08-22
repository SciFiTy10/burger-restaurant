import React from "react";
import Grid from "@material-ui/core/Grid";
const GridItemContainer = (props) => {
  return (
    <Grid item xs={props.xsSpacing} sm={props.smSpacing}>
      {props.children}
    </Grid>
  );
};

export default GridItemContainer;
