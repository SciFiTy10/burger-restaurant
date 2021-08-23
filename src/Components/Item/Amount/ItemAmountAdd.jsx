import React, { useState } from "react";
import GridItem from "../../Grid/GridItem";
import ItemAmount from "./ItemAmount";
import { Box, Button } from "@material-ui/core";

const ItemAmountAdd = (props) => {
  const [amount, setAmount] = useState(1);

  const addItemHandler = (props) => {
    //create an item to send
    const item = {
      id: props.id,
      title: props.title,
      price: props.price,
      amount: amount,
    };
    //send the item to the handler
    props.cartAddHandler(item);
    //determine the string for what was added
    const addedString =
      item.amount === 1
        ? `1 ${item.title} was added to the cart.`
        : `${item.amount} ${item.title}s were added to the cart`;
    //create the data to send to the snackbar
    const snackbar = {
      open: true,
      message: `Success! ${addedString}`,
    };
    //display the snackbar
    props.snackbarHandler(snackbar);
  };
  //handler function to update the amount
  const amountChangeHandler = (event) => {
    setAmount(Number(event.target.value));
  };
  return (
    <GridItem xs={1}>
      <ItemAmount
        className={props.className}
        inputProps={{ min: 0 }}
        amount={amount}
        onChange={amountChangeHandler}
      />
      <Box mt={1}>
        <Button disabled={amount === 0} onClick={addItemHandler} fullWidth>
          + Add
        </Button>
      </Box>
    </GridItem>
  );
};

export default ItemAmountAdd;
