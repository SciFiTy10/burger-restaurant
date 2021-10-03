import React from "react";
import MuiTextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

//set the textfield to center its content and have the color of the outline match the theme
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
  //grab the classes object
  const classes = useStyles();

  return (
    <MuiTextField
      data-testid={props.dataTestId}
      label={props.label}
      className={classes.root}
      InputProps={props.inputProps}
      value={props.amount}
      size="small"
      onChange={props.onChange}
      variant={props.variant}
      color={props.color}
      placeholder={props.placeholder}
    />
  );
};
export default TextField;
