import React from "react";
import MuiAppBar from "@material-ui/core/AppBar";

const AppBar = (props) => {
  return (
    <MuiAppBar position={props.position} className={props.className}>
      {props.children}
    </MuiAppBar>
  );
};

export default AppBar;
