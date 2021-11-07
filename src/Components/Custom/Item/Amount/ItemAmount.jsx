import React from "react";
import MuiButton from "@material-ui/core/Button";
import MuiAddIcon from "@material-ui/icons/Add";
import MuiRemoveIcon from "@material-ui/icons/Remove";
import TextField from "../../../UI/TextField/TextField";
import MuiInputAdornment from "@material-ui/core/InputAdornment";

const ItemAmount = (props) => {
  //handler function for adding an item to the cart
  const addItemHandler = () => {
    //create an item to send
    const item = {
      id: props.id,
      title: props.title,
      price: props.price,
      amount: 1,
    };
    //send the item to the handler
    props.cartAddHandler(item);
    //if this is a menu item
    if (props.itemType === "menu") {
      //create the snackbar object
      const snackbar = {
        type: "cart",
        message: `Success! 1 ${item.title} was added to the cart`,
        open: true,
      };
      //display the snackbar
      props.snackbarHandler(snackbar);
    }
  };

  //handler function for removing an item from the cart
  const removeItemHandler = () => {
    //create an item to send
    const item = {
      id: props.id,
      title: props.title,
      price: props.price,
      amount: 1,
    };
    //check whether this is the last one of this item
    if (Number(props.amount) === 1) {
      //update the state for the item to be completely removed
      props.setItemToBeCompletelyRemovedFromCartHandler(item);
      //close the cart dialog
      props.cartDialogHandler(false);
      //open the confirm dialog for deleting the item
      props.removeFromCartDialogHandler(true);
    } else {
      //send the item to the handler
      props.cartRemoveHandler(item);
      //if this is a menu item
      if (props.itemType === "menu") {
        //create the snackbar object
        const snackbar = {
          type: "cart",
          message: `Success! 1 ${item.title} was removed from the cart`,
          open: true,
        };
        //display the snackbar
        props.snackbarHandler(snackbar);
      }
    }
  };

  return (
    <label htmlFor={`amount of ${props.title}`}>
      <TextField
        dataTestId={`amount of ${props.title} ${props.itemType} ${props.id}`}
        id={props.id}
        inputProps={{
          id: `amount of ${props.title}`,
          min: 0,
          readOnly: true,
          startAdornment: (
            <MuiInputAdornment position="start">
              <MuiButton
                data-testid={`remove one ${props.title} ${props.itemType} ${props.id}`}
                aria-label={`remove one ${props.title}`}
                onClick={removeItemHandler}
                color="primary"
                disabled={props.amount === 0}
              >
                <MuiRemoveIcon />
              </MuiButton>
            </MuiInputAdornment>
          ),
          endAdornment: (
            <MuiInputAdornment position="end">
              <MuiButton
                data-testid={`add one ${props.title} ${props.itemType} ${props.id}`}
                aria-label={`add one ${props.title}`}
                onClick={addItemHandler}
                color="primary"
              >
                <MuiAddIcon />
              </MuiButton>
            </MuiInputAdornment>
          ),
        }}
        value={props.amount}
        variant="outlined"
        label={props.label}
        color="primary"
      />
    </label>
  );
};

export default ItemAmount;
