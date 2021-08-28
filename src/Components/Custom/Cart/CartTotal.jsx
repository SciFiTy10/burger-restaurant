import React from "react";
import Typography from "../../UI/Typography/Typography";
import GridItem from "../../Layout/Grid/GridItem";
import ListItem from "../../UI/List/ListItem";
import Box from "../../Layout/Box/Box";
const CartTotal = (props) => {
  //get the cart total
  const total = props.cart.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0.0);
  return (
    <ListItem>
      <GridItem xs={10}>
        <Typography variant="body1" component="span">
          <Box fontWeight="fontWeightBold">Total</Box>
        </Typography>
      </GridItem>
      <GridItem xs={2}>
        <Typography variant="body1">${total.toFixed(2)}</Typography>
      </GridItem>
    </ListItem>
  );
};

export default CartTotal;
