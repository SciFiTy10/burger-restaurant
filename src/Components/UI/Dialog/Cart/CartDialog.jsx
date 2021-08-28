import React, { useContext } from "react";
import Dialog from "../Dialog";
import Button from "../../../UI/Button/Button";
import DialogActions from "../DialogActions";
import DialogContent from "../DialogContent";
import Typography from "../../../UI/Typography/Typography";
import List from "../../../UI/List/List";
import { AppContext } from "../../../../Context/app-context";
import Cart from "../../../Custom/Cart/Cart";
import CartTotal from "../../../Custom/Cart/CartTotal";

const CartDialog = () => {
  //grab the context object
  const ctx = useContext(AppContext);
  //handler function for closing the cart dialog
  const onCloseHandler = () => {
    ctx.cartDialogHandler(false);
  };
  //variable for tracking whether the cart is empty
  const cartIsEmpty = ctx.cart.length === 0;
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
          <Button ariaLabel="order button" color="primary">
            Order
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default CartDialog;
