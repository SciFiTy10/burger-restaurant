import React from "react";
import MuiTextField from "@material-ui/core/TextField";

const ItemAmount = (props) => {
  return (
    <MuiTextField
      label="Amount"
      type="number"
      inputProps={props.inputProps}
      value={props.amount}
      size="small"
    />
  );
};

export default ItemAmount;
