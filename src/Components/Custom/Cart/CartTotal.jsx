import React from "react";
import MuiTypography from "@material-ui/core/Typography";
import MuiGrid from "@material-ui/core/Grid";
import ListItem from "../../UI/List/ListItem";
import MuiBox from "@material-ui/core/Box";
const CartTotal = (props) => {
  //get the cart total
  const total = props.cart.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0.0);
  return (
    <ListItem>
      <MuiGrid item xs={10}>
        <MuiTypography variant="body1" component="span">
          <MuiBox fontWeight="fontWeightBold">Total</MuiBox>
        </MuiTypography>
      </MuiGrid>
      <MuiGrid item xs={2}>
        <MuiTypography variant="body1">${total.toFixed(2)}</MuiTypography>
      </MuiGrid>
    </ListItem>
  );
};

export default CartTotal;
