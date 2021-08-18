import React, { useContext } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import { AppContext } from "../Context/app-context";

const ConfirmDialog = () => {
  const ctx = useContext(AppContext);

  //handler for closing the dialog
  const onCloseHandler = () => {
    ctx.onConfirmClick(false);
  };
  //handler for removing the item from the cart
  const removeItemFromCartHandler = () => {
    //remove the item completely from the cart
    ctx.onRemoveItemCompletelyFromCart(ctx.itemToBeRemoved);
    //close the dialog
    onCloseHandler();
  };
  return (
    <Dialog onClose={onCloseHandler} open={ctx.confirmIsOpen}>
      <DialogContent>
        <p>
          Are you sure you want to remove "{ctx.itemToBeRemoved.title}" from
          your order?
        </p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseHandler}>Close</Button>
        <Button onClick={removeItemFromCartHandler}>Remove</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
