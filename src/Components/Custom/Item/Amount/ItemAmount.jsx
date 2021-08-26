import React from "react";
import TextField from "../../../UI/TextField/TextField";

const ItemAmount = (props) => {
  return (
    <TextField
      label={props.label}
      inputProps={props.inputProps}
      amount={props.amount}
      onChange={props.onChange}
      variant={props.variant}
      color={props.color}
    />
  );
};

export default ItemAmount;
