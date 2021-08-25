import React from "react";
import Typography from "../../../UI/Typography/Typography";
import Box from "../../../Layout/Box/Box";

const ItemTitle = (props) => {
  return (
    <Typography variant={props.variant}>
      <Box fontWeight={props.fontWeight}>{props.children}</Box>
    </Typography>
  );
};

export default ItemTitle;
