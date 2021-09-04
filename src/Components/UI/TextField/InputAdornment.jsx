import React from "react";
import MuiInputAdornment from "@material-ui/core/InputAdornment";

const InputAdornment = (props) => {
  return (
    <MuiInputAdornment position={props.position}>
      {props.children}
    </MuiInputAdornment>
  );
};

export default InputAdornment;
