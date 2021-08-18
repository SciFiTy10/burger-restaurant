import React from "react";
import {
  Box,
  Button,
  ListItem,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";

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
    props.onAddItem(item);
  };

  const removeItemHandler = () => {
    //create an item to send
    const item = {
      id: props.id,
      title: props.title,
      price: props.price,
      amount: 1,
    };
    //send the item to the handler
    props.onRemoveItem(item);
  };
  return (
    <>
      <ListItem>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="body1">{props.title}</Typography>
            <Box fontStyle="italic" mb={1}>
              <Typography variant="body1" component="div">
                {props.description}
              </Typography>
            </Box>
            <Typography variant="subtitle1" component="span">
              ${props.price} x {props.amount}
            </Typography>
          </Grid>
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
        </Grid>
      </ListItem>
    </>
  );
};

export default CartItem;
