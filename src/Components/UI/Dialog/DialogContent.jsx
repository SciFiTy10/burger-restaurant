import React from "react";
import MuiDialogContent from "@material-ui/core/DialogContent";

const DialogContent = (props) => {
  return (
    <MuiDialogContent id="dialog-description">
      {props.children}
    </MuiDialogContent>
  );
};

export default DialogContent;
