import React from "react";
import MuiSlide from "@material-ui/core/Slide";

//because we are not forwarding the reference on the Slide component where it's used
//we must forward the reference per Material UI's documentation

export const slideUp = React.forwardRef((props, ref) => (
  <MuiSlide {...props} ref={ref} direction="up" in />
));

export const slideDown = React.forwardRef((props, ref) => (
  <MuiSlide {...props} ref={ref} direction="down" in />
));
