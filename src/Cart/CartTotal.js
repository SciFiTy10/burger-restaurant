import React from "react";
import { Grid, Typography } from "@material-ui/core";

const CartTotal = (props) => {
  //get the cart total
  const total = props.cart.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0.0);
  return (
    <Grid container>
      <Grid item xs={10}>
        <Typography variant="body1">Total Amount</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body1">${total}</Typography>
      </Grid>
    </Grid>
  );
};

export default CartTotal;
