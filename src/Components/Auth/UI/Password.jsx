import React from "react";
import TextField from "../../UI/TextField/TextField";
import MuiInputAdornment from "@material-ui/core/InputAdornment";
import MuiIconButton from "@material-ui/core/IconButton";
import MuiVisibility from "@material-ui/icons/Visibility";
import MuiVisibilityOff from "@material-ui/icons/VisibilityOff";

const Password = (props) => {
  return (
    <label htmlFor={`enter your password`}>
      <TextField
        value={props.value}
        type={props.type}
        dataTestId={props.dataTestId}
        id={props.id}
        inputProps={{
          id: props.id,
          endAdornment: (
            <MuiInputAdornment position="end">
              <MuiIconButton
                aria-label="toggle password visibility"
                onClick={props.onClick}
                edge="end"
              >
                {props.showPassword ? <MuiVisibility /> : <MuiVisibilityOff />}
              </MuiIconButton>
            </MuiInputAdornment>
          ),
        }}
        variant="outlined"
        color="primary"
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        componenttype="auth"
        error={props.error}
        helperText={props.helperText}
        amount={props.value}
      />
    </label>
  );
};

export default Password;
