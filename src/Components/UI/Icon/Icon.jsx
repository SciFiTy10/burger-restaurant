import React from "react";
import MuiIcon from "@material-ui/core/Icon";
const Icon = (props) => {
  return (
    <MuiIcon className={props.className} fontSize={props.fontSize}>
      {props.children}
    </MuiIcon>
  );
};

export default Icon;
