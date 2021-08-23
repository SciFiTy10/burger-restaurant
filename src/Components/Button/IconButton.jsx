import React from "react";
import MuiButton from "@material-ui/core/Button";

const IconButton = (props) => {
  return (
    <MuiButton
      onClick={props.onClick}
      color="primary"
      aria-label={props.ariaLabel}
      component="span"
    >
      {props.children}
    </MuiButton>
  );
};

export default IconButton;
