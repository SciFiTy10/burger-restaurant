import React from "react";
import MuiAlert from "@material-ui/lab/Alert";

//because we are not forwarding the reference on the Alert component where it's used
//we must forward the reference per Material UI's documentation

const Alert = React.forwardRef((props, ref) => (
  <MuiAlert
    ref={ref}
    severity={props.severity}
    variant={props.variant}
    onClose={props.onClose}
    action={props.action}
  >
    {props.children}
  </MuiAlert>
));

export default Alert;
