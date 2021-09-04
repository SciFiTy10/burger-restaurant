import React from "react";
import MuiCard from "@material-ui/core/Card";

const Card = (props) => {
  return <MuiCard>{props.children}</MuiCard>;
};

export default Card;
