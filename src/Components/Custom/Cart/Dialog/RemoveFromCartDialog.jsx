import React, { useContext } from "react";
import Dialog from "../../../UI/Dialog/Dialog";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiButton from "@material-ui/core/Button";
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
      <MuiDialogContent id="dialog-description">
        <p>
          Are you sure you want to remove "{ctx.itemToBeRemoved.title}" from
          your order?
        </p>
      </MuiDialogContent>
      <MuiDialogActions>
        <MuiButton onClick={onCloseHandler} aria-label="close button">
          Close
        </MuiButton>
        <MuiButton
          onClick={removeItemFromCartHandler}
          aria-label="remove button"
          color="primary"
        >
          Remove
        </MuiButton>
      </MuiDialogActions>
    </Dialog>
  );
};

export default RemoveFromCartDialog;
