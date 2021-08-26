import React from "react";
import MuiButton from "@material-ui/core/Button";

const Button = (props) => {
  return (
    <MuiButton
      className={props.className}
      onClick={props.onClick}
      color={props.color}
      aria-label={props.ariaLabel}
      fullWidth={props.fullWidth}
      disabled={props.disabled}
      component={props.component}
    >
      {props.children}
    </MuiButton>
  );
};

export default Button;
