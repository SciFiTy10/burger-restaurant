import React from "react";
import { Add, Remove } from "@material-ui/icons";
import ListItem from "../List/ListItem";
import ItemInfoContainer from "../../Container/Item/ItemInfoContainer";
import GridItem from "../../Grid/GridItem";
import IconButton from "../Button/IconButton";
import ItemAmount from "../../Item/ItemAmount";

const CartItem = (props) => {
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
    <ListItem>
      <ItemInfoContainer
        isCart={true}
        xs={6}
        titleVariant="body1"
        title={props.title}
        description={props.description}
        price={props.price}
        amount={props.amount}
      ></ItemInfoContainer>
      <GridItem xs={2}>
        <IconButton ariaLabel="remove one of item" onClick={removeItemHandler}>
          <Remove />
        </IconButton>
      </GridItem>
      <GridItem xs={2}>
        <ItemAmount
          label="Amount"
          type="number"
          inputProps={{ min: 0, readOnly: true }}
          amount={props.amount}
          size="small"
        />
      </GridItem>
      <GridItem xs={2}>
        <IconButton ariaLabel="add one of item" onClick={addItemHandler}>
          <Add />
        </IconButton>
      </GridItem>
    </ListItem>
  );
};

export default CartItem;
