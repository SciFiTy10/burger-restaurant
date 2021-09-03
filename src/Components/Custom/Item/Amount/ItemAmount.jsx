import React from "react";
import Button from "../../../UI/Button/Button";
import Icon from "../../../UI/Icon/Icon";
import TextField from "../../../UI/TextField/TextField";
import InputAdornment from "../../../UI/TextField/InputAdornment";

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
    <TextField
      dataTestId={`amount of ${props.title} ${props.itemType} ${props.id}`}
      id={props.id}
      inputProps={{
        title: `amount of ${props.title} ${props.itemType} ${props.id}`,
        min: 0,
        readOnly: true,
        startAdornment: (
          <InputAdornment position="start">
            <Button
              dataTestId={`remove one ${props.title} ${props.itemType} ${props.id}`}
              ariaLabel={`remove one ${props.title}`}
              onClick={removeItemHandler}
              color="primary"
              disabled={props.amount === 0}
            >
              <Icon>remove</Icon>
            </Button>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <Button
              dataTestId={`add one ${props.title} ${props.itemType} ${props.id}`}
              ariaLabel={`add one ${props.title}`}
              onClick={addItemHandler}
              color="primary"
            >
              <Icon>add</Icon>
            </Button>
          </InputAdornment>
        ),
      }}
      amount={props.amount}
      variant="outlined"
      label={props.label}
      color="primary"
    />
  );
};

export default ItemAmount;
