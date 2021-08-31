import React, { useContext } from "react";
import Dialog from "../../../UI/Dialog/Dialog";
import DialogActions from "../../../UI/Dialog/DialogActions";
import DialogContent from "../../../UI/Dialog/DialogContent";
import Button from "../../../UI/Button/Button";
import { AppContext } from "../../../../Context/app-context";

const RemoveFromCartDialog = () => {
  //get the context object
  const ctx = useContext(AppContext);
  //handler for closing the dialog
  const onCloseHandler = () => {
    //close the confirm dialog
    ctx.removeFromCartDialogHandler(false);
    //open the cart dialog
    ctx.cartDialogHandler(true);
  };
  //handler for removing the item from the cart
  const removeItemFromCartHandler = () => {
    //remove the item completely from the cart
    ctx.removeItemCompletelyFromCartHandler(ctx.itemToBeRemoved);
    //close the dialog
    onCloseHandler();
  };
  return (
    <Dialog onClose={onCloseHandler} open={ctx.removeFromCartDialogIsOpen}>
      <DialogContent>
        <p>
          Are you sure you want to remove "{ctx.itemToBeRemoved.title}" from
          your order?
        </p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseHandler} ariaLabel="close button">
          Close
        </Button>
        <Button
          onClick={removeItemFromCartHandler}
          ariaLabel="remove button"
          color="primary"
        >
          Remove
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RemoveFromCartDialog;
