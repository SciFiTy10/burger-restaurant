import React, { useContext } from "react";

import { Dialog, DialogContent } from "@material-ui/core";
import { AppContext } from "../Context/app-context";

const ConfirmDialog = () => {
  const ctx = useContext(AppContext);
  const onCloseHandler = () => {
    ctx.onCartClick(false);
  };
  //handler for closing the dialog
  const onCloseHandler = () => {
    ctx.onConfirmClick(false);
  };
  //handler for removing the item from the cart
  const removeItemFromCartHandler = () => {
    //call to remove from cart goes here
  };
  return (
    <Dialog onClose={onCloseHandler} open={ctx.cartIsOpen}>
      <DialogContent>
        <p>Are you sure you want to remove the {item} from your order?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseHandler}>Close</Button>
        <Button onClick={removeItemFromCartHandler}>Remove</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
