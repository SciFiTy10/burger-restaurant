import React from "react";
import GridItem from "../../Grid/GridItem";
import IconButton from "../../Button/IconButton";
import { Add, Remove } from "@material-ui/icons";
import ItemAmount from "./ItemAmount";

const ItemAmountAddAndRemove = (props) => {
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
  };

  const removeItemHandler = () => {
    //create an item to send
    const item = {
      id: props.id,
      title: props.title,
      price: props.price,
      amount: 1,
    };
    //check whether this is the last one of this item
    if (props.amount === 1) {
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
    <>
      <GridItem xs={2}>
        <IconButton ariaLabel="remove one of item" onClick={removeItemHandler}>
          <Remove />
        </IconButton>
      </GridItem>
      <GridItem xs={2}>
        <ItemAmount
          inputProps={{ min: 0, readOnly: true }}
          amount={props.amount}
        />
      </GridItem>
      <GridItem xs={2}>
        <IconButton ariaLabel="add one of item" onClick={addItemHandler}>
          <Add />
        </IconButton>
      </GridItem>
    </>
  );
};

export default ItemAmountAddAndRemove;
