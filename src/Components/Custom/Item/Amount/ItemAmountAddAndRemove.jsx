import React from "react";
import GridItem from "../../../Layout/Grid/GridItem";
import Button from "../../../UI/Button/Button";
import Icon from "../../../UI/Icon/Icon";
import ItemAmount from "./ItemAmount";
import { createItem } from "../../../../Functions/createItem";
import Box from "../../../Layout/Box/Box";
import HideOnPhone from "../../../Hidden/HideOnPhone";
import HideOnLargerThanPhone from "../../../Hidden/HideOnLargerThanPhone";

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
      <Box textAlign="center">
        <Button
          ariaLabel="add one of item"
          onClick={addItemHandler}
          color="primary"
        >
          <Icon>add</Icon>
        </Button>
      </Box>
      <ItemAmount
        inputProps={{ min: 0, readOnly: true }}
        amount={props.amount}
        variant="outlined"
      />
      <Box textAlign="center">
        <Button
          ariaLabel="remove one of item"
          onClick={removeItemHandler}
          color="primary"
        >
          <Icon>remove</Icon>
        </Button>
      </Box>
    </>
  );
};

export default ItemAmountAddAndRemove;
