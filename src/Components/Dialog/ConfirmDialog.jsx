import React, { useContext } from "react";
import MuiDialog from "@material-ui/core/Dialog";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import TextButton from "../Button/TextButton";
import { AppContext } from "../../Context/app-context";

const ConfirmDialog = () => {
  const ctx = useContext(AppContext);

  //handler for closing the dialog
  const onCloseHandler = () => {
    //close the confirm dialog
    ctx.confirmDialogHandler(false);
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
    <MuiDialog onClose={onCloseHandler} open={ctx.confirmIsOpen}>
      <MuiDialogContent>
        <p>
          Are you sure you want to remove "{ctx.itemToBeRemoved.title}" from
          your order?
        </p>
      </MuiDialogContent>
      <MuiDialogActions>
        <TextButton onClick={onCloseHandler}>Close</TextButton>
        <TextButton onClick={removeItemFromCartHandler}>Remove</TextButton>
      </MuiDialogActions>
    </MuiDialog>
  );
};

export default ConfirmDialog;
