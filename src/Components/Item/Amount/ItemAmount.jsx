import React from "react";
import MuiTextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

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

const ItemAmount = (props) => {
  const classes = useStyles();

  return (
    <MuiTextField
      className={classes.root}
      label="Amount"
      type="number"
      inputProps={props.inputProps}
      value={props.amount}
      size="small"
    />
  );
};

export default ItemAmount;
