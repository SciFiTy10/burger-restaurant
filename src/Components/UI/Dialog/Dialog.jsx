import React from "react";
import MuiDialog from "@material-ui/core/Dialog";
const Dialog = (props) => {
  return (
    <MuiDialog onClose={props.onClose} open={props.open}>
      {props.children}
    </MuiDialog>
  );
};

export default Dialog;
