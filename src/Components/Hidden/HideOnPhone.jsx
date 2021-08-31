import React from "react";
import Hidden from "./Hidden";

const HideOnPhone = (props) => {
  return <Hidden xsDown>{props.children}</Hidden>;
};

export default HideOnPhone;
