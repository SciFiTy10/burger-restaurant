import React, { Fragment, useContext } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  List,
  Typography,
} from "@material-ui/core";
import { AppContext } from "../Context/app-context";
import CartItem from "../Cart/CartItem";
import CartTotal from "../Cart/CartTotal";

const CartDialog = () => {
  const ctx = useContext(AppContext);
  const onCloseHandler = () => {
    ctx.cartDialogHandler(false);
  };
  let cartIsEmpty = ctx.cart.length === 0;
  return (
    <Dialog onClose={onCloseHandler} open={ctx.cartIsOpen}>
      <DialogContent>
        {cartIsEmpty ? (
          <Typography variant="body1">Cart Is Empty</Typography>
        ) : (
          <>
            <List component="nav" aria-label="cart">
              {ctx.cart.map((item) => {
                return (
                  <Fragment key={item.id}>
                    <CartItem
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      amount={item.amount}
                      cartAddHandler={ctx.cartAddHandler}
                      cartRemoveHandler={ctx.cartRemoveHandler}
                      cartDialogHandler={ctx.cartDialogHandler}
                      confirmDialogHandler={ctx.confirmDialogHandler}
                      setItemToBeCompletelyRemovedFromCartHandler={
                        ctx.setItemToBeCompletelyRemovedFromCartHandler
                      }
                    />
                    <Divider />
                  </Fragment>
                );
              })}
            </List>
            <CartTotal cart={ctx.cart} />
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseHandler}>Close</Button>
        {cartIsEmpty ? null : <Button>Order</Button>}
      </DialogActions>
    </Dialog>
  );
};

export default CartDialog;
