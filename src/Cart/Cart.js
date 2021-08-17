import React, { Fragment, useContext } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Divider,
  List,
} from "@material-ui/core";
import { AppContext } from "../Context/app-context";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

const Cart = () => {
  const ctx = useContext(AppContext);
  const onCloseHandler = () => {
    ctx.onCartClick(false);
  };
  return (
    <Dialog onClose={onCloseHandler} open={ctx.cartIsOpen}>
      <DialogContent>
        <List component="nav" aria-label="cart">
          {ctx.cart.length > 0
            ? ctx.cart.map((item) => {
                return (
                  <Fragment key={item.id}>
                    <CartItem
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      amount={item.amount}
                      onAddItem={ctx.onAddItem}
                      onRemoveItem={ctx.onRemoveItem}
                    />
                    <Divider />
                  </Fragment>
                );
              })
            : null}
        </List>
        <CartTotal />
      </DialogContent>
      <DialogActions>
        <Button>Close</Button>
        <Button>Order</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Cart;
