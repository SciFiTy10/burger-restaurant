import React from "react";
import MuiTypography from "@material-ui/core/Typography";
import GridItem from "../../Spacing/Grid/GridItem";
import ListItem from "../../UI/List/ListItem";
import Box from "../../Spacing/Box/Box";
const CartTotal = (props) => {
  //get the cart total
  const total = props.cart.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0.0);
  return (
    <ListItem>
      <GridItem xs={10}>
        <MuiTypography variant="body1" component="span">
          <Box fontWeight="fontWeightBold">Total</Box>
        </MuiTypography>
      </GridItem>
      <GridItem xs={2}>
        <MuiTypography variant="body1">${total.toFixed(2)}</MuiTypography>
      </GridItem>
    </ListItem>
  );
};

export default CartTotal;
