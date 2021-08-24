import React, { Fragment, useContext } from "react";
import MuiButton from "@material-ui/core/Button";
import MuiDialog from "@material-ui/core/Dialog";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDivider from "@material-ui/core/Divider";
import MuiTypography from "@material-ui/core/Typography";
import List from "../List/List";
import { AppContext } from "../../Context/app-context";
import CartItem from "../Cart/CartItem";
import CartTotal from "../Cart/CartTotal";

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
    <MuiDialog onClose={onCloseHandler} open={ctx.cartIsOpen}>
      <MuiDialogContent>
        {cartIsEmpty ? (
          <MuiTypography variant="body1">Cart Is Empty</MuiTypography>
        ) : (
          <>
            <List component="nav" ariaLabel="cart">
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
                    <MuiDivider />
                  </Fragment>
                );
              })}
            </List>
            <CartTotal cart={ctx.cart} />
          </>
        )}
      </MuiDialogContent>
      <MuiDialogActions>
        <MuiButton onClick={onCloseHandler}>Close</MuiButton>
        {cartIsEmpty ? null : <MuiButton>Order</MuiButton>}
      </MuiDialogActions>
    </MuiDialog>
  );
};

export default CartDialog;
