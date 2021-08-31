import React from "react";
import MuiDialog from "@material-ui/core/Dialog";
import { zoom } from "../../Transitions/Zoom/zoomTransition";
// const Dialog = (props) => {
//   return (
//     <MuiDialog onClose={props.onClose} open={props.open}>
//       {props.children}
//     </MuiDialog>
//   );
// };

const Dialog = React.forwardRef((props, ref) => (
  <MuiDialog
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
