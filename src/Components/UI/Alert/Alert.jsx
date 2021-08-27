import React from "react";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = (props) => {
  return (
    <MuiAlert
      severity={props.severity}
      variant={props.variant}
      onClose={props.onClose}
      action={props.action}
    >
      {props.children}
    </MuiAlert>
  );
};

export default Alert;
