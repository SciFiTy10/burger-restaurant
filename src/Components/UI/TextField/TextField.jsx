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

const TextField = (props) => {
  const classes = useStyles();

  return (
    <MuiTextField
      label={props.label}
      className={classes.root}
      type="number"
      InputProps={props.inputProps}
      value={props.amount}
      size="small"
      onChange={props.onChange}
      variant={props.variant}
      color={props.color}
    />
  );
};
export default TextField;
