import React from "react";
import MuiToolbar from "@material-ui/core/Toolbar";

const Toolbar = (props) => {
  return <MuiToolbar>{props.children}</MuiToolbar>;
};

export default Toolbar;
