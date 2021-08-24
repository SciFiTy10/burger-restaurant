import React from "react";
import MuiTypography from "@material-ui/core/Typography";

const ItemTitle = (props) => {
  return <MuiTypography variant={props.variant}>{props.title}</MuiTypography>;
};

export default ItemTitle;
