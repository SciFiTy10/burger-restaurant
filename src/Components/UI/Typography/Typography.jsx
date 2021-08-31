import React from "react";
import MuiTypography from "@material-ui/core/Typography";

const Typography = (props) => {
  return (
    <MuiTypography
      variant={props.variant}
      component={props.component}
      align={props.align}
      className={props.className}
    >
      {props.children}
    </MuiTypography>
  );
};

export default Typography;
