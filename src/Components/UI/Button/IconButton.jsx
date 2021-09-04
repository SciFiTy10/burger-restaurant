import React from "react";
import MuiIconButton from "@material-ui/core/IconButton";

const IconButton = (props) => {
  return (
    <MuiIconButton
      color={props.color}
      onClick={props.onClick}
      size={props.size}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </MuiIconButton>
  );
};

export default IconButton;
