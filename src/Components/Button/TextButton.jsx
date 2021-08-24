import React from "react";
import MuiButton from "@material-ui/core/Button";

const TextButton = (props) => {
  return <MuiButton onClick={props.onClick}>{props.children}</MuiButton>;
};

export default TextButton;
