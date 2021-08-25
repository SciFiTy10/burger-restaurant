import React from "react";
import Typography from "../UI/Typography/Typography";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";

const CartTotal = (props) => {
  //get the cart total
  const total = props.cart.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0.0);
  return (
    <GridContainer>
      <GridItem xs={10}>
        <Typography variant="body1">Total Amount</Typography>
      </GridItem>
      <GridItem xs={2}>
        <Typography variant="body1">${total}</Typography>
      </GridItem>
    </GridContainer>
  );
};

export default CartTotal;
