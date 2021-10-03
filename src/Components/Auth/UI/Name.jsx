import React from "react";

import TextField from "../../UI/TextField/TextField";

const Name = (props) => {
  return (
    <label htmlFor={`enter your name`}>
      <TextField
        dataTestId={`sign up name`}
        id={props.id}
        inputProps={{
          id: `sign up name`,
        }}
        variant="outlined"
        label={props.label}
        color="primary"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </label>
  );
};

export default Name;
