import React from "react";
import Box from "../../Layout/Box/Box";
import Typography from "../../UI/Typography/Typography";
const ItemPriceContainer = (props) => {
  return (
    <Typography variant="subtitle1" component="div">
      <Box mt={props.mt}>{props.children}</Box>
    </Typography>
  );
};

export default ItemPriceContainer;
