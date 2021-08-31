import React from "react";
import MuiZoom from "@material-ui/core/Zoom";

export const zoom = React.forwardRef((props, ref) => (
  <MuiZoom {...props} ref={ref} in />
));
