import React from "react";
import Typography from "../../UI/Typography/Typography";

const ItemTitle = (props) => {
  return <Typography variant={props.variant}>{props.title}</Typography>;
};

export default ItemTitle;
