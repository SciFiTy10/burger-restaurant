import React from "react";
import MuiBox from "@material-ui/core/Box";

const Box = (props) => {
  return (
    <MuiBox
      m={props.m}
      mt={props.mt}
      mx={props.mx}
      mb={props.mb}
      fontStyle={props.fontStyle}
      fontWeight={props.fontWeight}
      textAlign={props.textAlign}
    >
      {props.children}
    </MuiBox>
  );
};

export default Box;
