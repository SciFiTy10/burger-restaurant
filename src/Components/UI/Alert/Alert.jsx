import React from "react";
import MuiAlert from "@material-ui/lab/Alert";

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
