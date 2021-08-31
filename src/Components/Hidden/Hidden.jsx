import React from "react";
import MuiHidden from "@material-ui/core/Hidden";

const Hidden = (props) => {
  return (
    <MuiHidden xsDown={props.xsDown} smUp={props.smUp}>
      {props.children}
    </MuiHidden>
  );
};

export default Hidden;
