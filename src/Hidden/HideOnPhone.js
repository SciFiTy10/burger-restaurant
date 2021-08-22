import React from "react";
import { Hidden } from "@material-ui/core";
const HideOnPhone = (props) => {
  return <Hidden xsDown>{props.children}</Hidden>;
};

export default HideOnPhone;
