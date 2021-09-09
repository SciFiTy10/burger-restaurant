import React, { useContext } from "react";
import Dialog from "../../../UI/Dialog/Dialog";
import MuiButton from "@material-ui/core/Button";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiTypography from "@material-ui/core/Typography";
import List from "../../../UI/List/List";
import { AppContext } from "../../../../Context/app-context";
import Cart from "../Cart";
import CartTotal from "../CartTotal";

const CartDialog = () => {
  //grab the context object
  const ctx = useContext(AppContext);
  //variable for tracking whether the cart is empty
  const cartIsEmpty = ctx.cart.length === 0;
  //handler function for closing the cart dialog
  const onCloseHandler = () => {
    //close the cart dialog
    ctx.cartDialogHandler(false);
  };
  //handler function for ordering the items in the cart
  const onOrderHandler = () => {
    //order the items
    ctx.cartOrderHandler();
    //create the snackbar object
    const snackbar = {
      type: "order",
      message: "Success! Your order was submitted.",
      open: true,
    };
    //display the snackbar
    ctx.snackbarHandler(snackbar);
    //close the cart dialog
    ctx.cartDialogHandler(false);
  };
  return (
    <Dialog onClose={onCloseHandler} open={ctx.cartDialogIsOpen}>
      <MuiDialogContent id="dialog-description">
        {cartIsEmpty ? (
          <MuiTypography variant="body1">Cart Is Empty</MuiTypography>
        ) : (
          <>
            <List component="nav" ariaLabel="cart">
              <Cart
                cart={ctx.cart}
                cartAddHandler={ctx.cartAddHandler}
                cartRemoveHandler={ctx.cartRemoveHandler}
                cartDialogHandler={ctx.cartDialogHandler}
                removeFromCartDialogHandler={ctx.removeFromCartDialogHandler}
                setItemToBeCompletelyRemovedFromCartHandler={
                  ctx.setItemToBeCompletelyRemovedFromCartHandler
                }
              />
            </List>
            <CartTotal cart={ctx.cart} />
          </>
        )}
      </MuiDialogContent>
      <MuiDialogActions>
        <MuiButton onClick={onCloseHandler} aria-label="close button">
          Close
        </MuiButton>
        {cartIsEmpty ? null : (
          <MuiButton
            aria-label="order button"
            color="primary"
            onClick={onOrderHandler}
          >
            Order
          </MuiButton>
        )}
      </MuiDialogActions>
    </Dialog>
  );
};

export default CartDialog;
