import React, { useContext } from "react";
import Dialog from "../../../UI/Dialog/Dialog";
import Button from "../../../UI/Button/Button";
import DialogActions from "../../../UI/Dialog/DialogActions";
import DialogContent from "../../../UI/Dialog/DialogContent";
import Typography from "../../../UI/Typography/Typography";
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
    ctx.cartDialogHandler(false);
  };
  //handler function for ordering the items in the cart
  const onOrderHandler = () => {
    //order the items
    ctx.cartOrderHandler();
    //close the cart dialog
    ctx.cartDialogHandler(false);
  };
  return (
    <Dialog onClose={onCloseHandler} open={ctx.cartIsOpen}>
      <DialogContent>
        {cartIsEmpty ? (
          <Typography variant="body1">Cart Is Empty</Typography>
        ) : (
          <>
            <List component="nav" ariaLabel="cart">
              <Cart
                cart={ctx.cart}
                cartAddHandler={ctx.cartAddHandler}
                cartRemoveHandler={ctx.cartRemoveHandler}
                cartDialogHandler={ctx.cartDialogHandler}
                confirmDialogHandler={ctx.confirmDialogHandler}
                setItemToBeCompletelyRemovedFromCartHandler={
                  ctx.setItemToBeCompletelyRemovedFromCartHandler
                }
              />
            </List>
            <CartTotal cart={ctx.cart} />
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseHandler} ariaLabel="close button">
          Close
        </Button>
        {cartIsEmpty ? null : (
          <Button
            ariaLabel="order button"
            color="primary"
            onClick={onOrderHandler}
          >
            Order
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default CartDialog;
