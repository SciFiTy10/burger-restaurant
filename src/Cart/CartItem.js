import React from "react";
import { Box, ListItem, Grid, Typography } from "@material-ui/core";

const CartItem = (props) => {
  return (
    <>
      <ListItem>
        <Grid container>
          <Grid item xs={8}>
            <Typography variant="h6">{props.title}</Typography>
            <Box fontStyle="italic" mb={1}>
              <Typography variant="subtitle1" component="div">
                {props.description}
              </Typography>
            </Box>
            <Typography variant="subtitle1" component="span">
              ${props.price * props.amount}
            </Typography>
            <Typography variant="subtitle1" component="span">
              {props.amount}
            </Typography>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={1}>
            <Box mt={1}>
              <Button onClick={addItemHandler}>-</Button>
            </Box>
            <Box mt={1}>
              <Button onClick={addItemHandler}>+</Button>
            </Box>
          </Grid>
        </Grid>
      </ListItem>
    </>
  );
};

export default CartItem;
