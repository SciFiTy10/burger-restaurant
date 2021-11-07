import React from "react";
import TextField from "../../UI/TextField/TextField";

const Email = (props) => {
  return (
    <label htmlFor={`enter your email`}>
      <TextField
        value={props.value}
        type={props.type}
        dataTestId={props.dataTestId}
        id={props.id}
        inputProps={{
          id: props.id,
        }}
        variant="outlined"
        color="primary"
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        componenttype="auth"
        error={props.error}
        helperText={props.helperText}
      />
    </label>
  );
};

export default Email;
