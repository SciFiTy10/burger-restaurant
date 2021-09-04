import React from "react";
import MuiCardHeader from "@material-ui/core/CardHeader";

const CardHeader = (props) => {
  return (
    <MuiCardHeader
      title={props.title}
      titleTypographyProps={props.titleTypographyProps}
    >
      {props.children}
    </MuiCardHeader>
  );
};

export default CardHeader;
