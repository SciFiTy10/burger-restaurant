import React from "react";
import Typography from "../../../UI/Typography/Typography";
import Box from "../../../Layout/Box/Box";

const ItemTitle = (props) => {
  return (
    <Box fontWeight={props.fontWeight}>
      <Typography variant={props.variant}>{props.children}</Typography>
    </Box>
  );
};

export default ItemTitle;
