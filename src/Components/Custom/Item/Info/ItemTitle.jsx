import React from "react";
import MuiTypography from "@material-ui/core/Typography";
import Box from "../../../Spacing/Box/Box";

const ItemTitle = (props) => {
  return (
    <MuiTypography variant={props.variant} component="span">
      <Box fontWeight={props.fontWeight}>{props.children}</Box>
    </MuiTypography>
  );
};

export default ItemTitle;
