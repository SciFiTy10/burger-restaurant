import React from "react";
import { Box, Typography } from "@material-ui/core";

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
