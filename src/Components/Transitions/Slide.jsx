import React from "react";
import MuiSlide from "@material-ui/core/Slide";
const Slide = (props) => {
  return (
    <MuiSlide
      direction={props.direction}
      in={props.in}
      mountOnEnter
      unmountOnExit
    />
  );
};

export default Slide;
