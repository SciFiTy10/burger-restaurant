import React from "react";
import Box from "../../../../Spacing/Box/Box";
import MuiTypography from "@material-ui/core/Typography";
const ItemPriceContainer = (props) => {
  return (
    <MuiTypography variant="subtitle1" component="div">
      <Box mt={props.mt}>{props.children}</Box>
    </MuiTypography>
  );
};

export default ItemPriceContainer;
