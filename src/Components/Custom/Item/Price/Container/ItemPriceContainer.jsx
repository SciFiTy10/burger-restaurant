import React from "react";
import MuiBox from "@material-ui/core/Box";
import MuiTypography from "@material-ui/core/Typography";
const ItemPriceContainer = (props) => {
  return (
    <MuiTypography variant="subtitle1" component="div">
      <MuiBox mt={props.mt}>{props.children}</MuiBox>
    </MuiTypography>
  );
};

export default ItemPriceContainer;
