import React from "react";
import MuiDialog from "@material-ui/core/Dialog";
import { zoom } from "../../Transitions/Zoom/zoomTransition";

//because we are not forwarding the reference on the Dialog component where it's used
//we must forward the reference per Material UI's documentation

const Dialog = React.forwardRef((props, ref) => (
  <MuiDialog
    role="dialog"
    aria-modal={true}
    aria-describedby="dialog-description"
    ref={ref}
    onClose={props.onClose}
    open={props.open}
    TransitionComponent={zoom}
    transitionDuration={500}
  >
    {props.children}
  </MuiDialog>
));

export default Dialog;
