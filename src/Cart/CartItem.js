import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import ListItemContainer from "../Container/Content/ListItemContainer";
import ItemInfoContainer from "../Container/Item/ItemInfoContainer";

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
    <ListItemContainer>
      <ItemInfoContainer
        isCart={true}
        xsSpacing={6}
        titleVariant="body1"
        title={props.title}
        description={props.description}
        price={props.price}
        amount={props.amount}
      ></ItemInfoContainer>
      <Grid item xs={2}>
        <Button
          onClick={removeItemHandler}
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <Remove />
        </Button>
      </Grid>
      <Grid item xs={2}>
        <TextField
          label="Amount"
          type="number"
          inputProps={{ min: 0, readOnly: true }}
          value={props.amount}
          size="small"
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          onClick={addItemHandler}
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <Add />
        </Button>
      </Grid>
    </ListItemContainer>
  );
};

export default CartItem;
