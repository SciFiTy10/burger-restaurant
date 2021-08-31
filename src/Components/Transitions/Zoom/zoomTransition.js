import React from "react";
import MuiZoom from "@material-ui/core/Zoom";

//because we are not forwarding the reference on the Zoom component where it's used
//we must forward the reference per Material UI's documentation

export const zoom = React.forwardRef((props, ref) => (
  <MuiZoom {...props} ref={ref} in />
));
