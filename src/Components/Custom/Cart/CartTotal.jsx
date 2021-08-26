import React from "react";
import Typography from "../../UI/Typography/Typography";
import GridItem from "../../Layout/Grid/GridItem";
import ListItem from "../../UI/List/ListItem";
const CartTotal = (props) => {
  //get the cart total
  const total = props.cart.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0.0);
  return (
    <ListItem>
      <GridItem xs={10}>
        <Typography variant="body1">Total</Typography>
      </GridItem>
      <GridItem xs={2}>
        <Typography variant="body1">${total}</Typography>
      </GridItem>
    </ListItem>
  );
};

export default CartTotal;
