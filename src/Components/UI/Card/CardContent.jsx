import React from "react";
import MuiCardContent from "@material-ui/core/CardContent";

const CardContent = (props) => {
  return <MuiCardContent>{props.children}</MuiCardContent>;
};

export default CardContent;
