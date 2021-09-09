import React from "react";
import MuiBox from "@material-ui/core/Box";
import MuiTypography from "@material-ui/core/Typography";

const ItemDescription = (props) => {
  return (
    <MuiBox fontStyle="italic">
      <MuiTypography variant="subtitle1" component="div">
        {props.description}
      </MuiTypography>
    </MuiBox>
  );
};

export default ItemDescription;
