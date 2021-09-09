import React from "react";
import Box from "../../../Spacing/Box/Box";
import MuiTypography from "@material-ui/core/Typography";

const ItemDescription = (props) => {
  return (
    <Box fontStyle="italic">
      <MuiTypography variant="subtitle1" component="div">
        {props.description}
      </MuiTypography>
    </Box>
  );
};

export default ItemDescription;
