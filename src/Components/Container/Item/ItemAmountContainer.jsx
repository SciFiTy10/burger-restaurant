import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ItemAmountAdd from "../../Item/Amount/ItemAmountAdd";
import ItemAmountAddAndRemove from "../../Item/Amount/ItemAmountAddAndRemove";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputBase-input": {
      textAlign: "center",
    },
    "& .MuiFormLabel-root": {
      color: theme.palette.text.primary,
    },
  },
}));

const ItemAmountContainer = (props) => {
  const classes = useStyles();

  return (
    <>
      {props.isCart ? (
        <ItemAmountAdd
          className={classes.root}
          id={props.id}
          title={props.title}
          price={props.price}
          cartAddHandler={props.cartAddHandler}
          snackbarHandler={props.snackbarhandler}
        />
      ) : (
        <ItemAmountAddAndRemove className={classes.root} />
      )}
    </>
  );
};

export default ItemAmountContainer;
