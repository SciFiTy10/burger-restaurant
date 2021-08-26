import React from "react";
import Button from "../../../UI/Button/Button";
import Icon from "../../../UI/Icon/Icon";
import ItemAmount from "./ItemAmount";
import { createItem } from "../../../../Functions/createItem";
import InputAdornment from "../../../UI/TextField/InputAdornment";
const ItemAmountAddAndRemove = (props) => {
  const addItemHandler = () => {
    //create an item to send
    const item = createItem(props.id, props.title, props.price);
    //send the item to the handler
    props.cartAddHandler(item);
  };

  const removeItemHandler = () => {
    //create an item to send
    const item = createItem(props.id, props.title, props.price);
    //check whether this is the last one of this item
    if (Number(props.amount) === 1) {
      //update the state for the item to be completely removed
      props.setItemToBeCompletelyRemovedFromCartHandler(item);
      //close the cart dialog
      props.cartDialogHandler(false);
      //open the confirm dialog for deleting the item
      props.confirmDialogHandler(true);
    } else {
      //send the item to the handler
      props.cartRemoveHandler(item);
    }
  };
  return (
    <ItemAmount
      inputProps={{
        min: 0,
        readOnly: true,
        startAdornment: (
          <InputAdornment position="start">
            <Button
              ariaLabel="remove one of item"
              onClick={removeItemHandler}
              color="primary"
            >
              <Icon>remove</Icon>
            </Button>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <Button
              ariaLabel="add one of item"
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

export default ItemAmountAddAndRemove;
