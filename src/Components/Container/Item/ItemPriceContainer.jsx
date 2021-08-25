import React from "react";
import Box from "../../Layout/Box/Box";
import Typography from "../../UI/Typography/Typography";
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
