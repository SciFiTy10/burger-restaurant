import React from "react";
import MuiTypography from "@material-ui/core/Typography";
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
        <MuiTypography variant="body1">Total Amount</MuiTypography>
      </GridItem>
      <GridItem xs={2}>
        <MuiTypography variant="body1">${total}</MuiTypography>
      </GridItem>
    </GridContainer>
  );
};

export default CartTotal;
