import React from "react";
import TextField from "../../UI/TextField/TextField";

const Email = (props) => {
  return (
    <label htmlFor={`enter your email`}>
      <TextField
        dataTestId={props.dataTestId}
        id={props.id}
        inputProps={{
          id: props.id,
        }}
        variant="outlined"
        color="primary"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </label>
  );
};

export default Email;
