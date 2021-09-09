import React from "react";
import MuiTypography from "@material-ui/core/Typography";
import MuiBox from "@material-ui/core/Box";

const ItemTitle = (props) => {
  return (
    <MuiTypography variant={props.variant} component="span">
      <MuiBox fontWeight={props.fontWeight}>{props.children}</MuiBox>
    </MuiTypography>
  );
};

export default ItemTitle;
