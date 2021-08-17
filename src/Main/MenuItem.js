import React, { useState } from "react";
import {
  Box,
  Button,
  ListItem,
  TextField,
  Typography,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormLabel-root": {
      color: theme.palette.text.secondary,
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: theme.palette.text.secondary,
    },
    "& .MuiInputBase-input": {
      textAlign: "center",
    },
  },
}));

const MenuItem = (props) => {
  const classes = useStyles();

  const [amount, setAmount] = useState(1);

  const addItemHandler = () => {
    //create an item to send
    const item = {
      id: props.id,
      title: props.title,
      price: props.price,
      amount: amount,
    };
    //send the item to the handler
    props.onAddItem(item);
  };

  const amountChangeHandler = (event) => {
    setAmount(Number(event.target.value));
  };
  return (
    <ListItem>
      <Grid container>
        <Grid item xs={8}>
          <Typography variant="h6">{props.title}</Typography>
          <Box fontStyle="italic" mb={1}>
            <Typography variant="subtitle1" component="div">
              {props.description}
            </Typography>
          </Box>
          <Typography variant="subtitle1" component="div">
            ${props.price}
          </Typography>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={1}>
          <div>
            <TextField
              className={classes.root}
              label="Amount"
              type="number"
              inputProps={{ min: 0 }}
              value={amount}
              onChange={amountChangeHandler}
              size="small"
            />
          </div>
          <Box mt={1}>
            <Button disabled={amount === 0} onClick={addItemHandler}>
              + Add
            </Button>
          </Box>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default MenuItem;
