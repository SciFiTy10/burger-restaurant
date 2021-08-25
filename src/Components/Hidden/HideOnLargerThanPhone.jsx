import React from "react";
import Hidden from "./Hidden";
const HideOnLargerThanPhone = (props) => {
  return <Hidden smUp>{props.children}</Hidden>;
};

export default HideOnLargerThanPhone;
