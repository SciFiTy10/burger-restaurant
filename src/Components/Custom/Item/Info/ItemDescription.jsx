import React from "react";
import Box from "../../UI/Box/Box";
import Typography from "../../UI/Typography/Typography";

const ItemDescription = (props) => {
  return (
    <Box fontStyle="italic">
      <Typography variant="subtitle1" component="div">
        {props.description}
      </Typography>
    </Box>
  );
};

export default ItemDescription;
