import React from "react";
import TextField from "../../UI/TextField/TextField";

const Password = (props) => {
  return (
    <label htmlFor={`enter your password`}>
      <TextField
        dataTestId={props.dataTestId}
        id={props.id}
        inputProps={{
          id: props.id,
        }}
        variant="outlined"
        color="primary"
        placeholder={props.placeholder}
      />
    </label>
  );
};

export default Password;