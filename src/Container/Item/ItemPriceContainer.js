import React from "react";
import { Box, Typography } from "@material-ui/core";
const ItemPriceContainer = (props) => {
  return (
    <Box mt={1}>
      <Typography variant="subtitle1" component="div">
        {props.children}
      </Typography>
    </Box>
  );
};

export default ItemPriceContainer;
