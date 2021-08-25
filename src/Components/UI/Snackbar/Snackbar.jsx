import React from "react";
import MuiSnackbar from "@material-ui/core/Snackbar";
const Snackbar = (props) => {
  return (
    <MuiSnackbar
      anchorOrigin={props.anchorOrigin}
      open={props.open}
      autoHideDuration={props.autoHideDuration}
      onClose={props.onClick}
    >
      {props.children}
    </MuiSnackbar>
  );
};

export default Snackbar;
