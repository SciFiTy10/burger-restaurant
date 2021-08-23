import React from "react";
import MuiBox from "@material-ui/core/Box";
import MuiTypography from "@material-ui/core/Typography";
const ItemPriceContainer = (props) => {
  return (
    <MuiBox mt={1}>
      <MuiTypography variant="subtitle1" component="div">
        {props.children}
      </MuiTypography>
    </MuiBox>
  );
};

export default ItemPriceContainer;
