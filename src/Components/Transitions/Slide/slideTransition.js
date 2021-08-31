import React from "react";
import MuiSlide from "@material-ui/core/Slide";

export const slideUp = React.forwardRef((props, ref) => (
  <MuiSlide {...props} ref={ref} direction="up" in />
));

export const slideDown = React.forwardRef((props, ref) => (
  <MuiSlide {...props} ref={ref} direction="down" in />
));
