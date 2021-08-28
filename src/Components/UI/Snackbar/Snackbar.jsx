import React from "react";
import MuiSnackbar from "@material-ui/core/Snackbar";
import { slideUp, slideDown } from "../../Transitions/Slide/slideTransition";
// const SlideTransition = React.forwardRef((props, ref) => (
//   <Slide {...props} ref={ref} direction="up" />
// ));
const Snackbar = (props) => {
  const transitionComponent =
    props.slideDirection === "up" ? slideUp : slideDown;
  return (
    <MuiSnackbar
      anchorOrigin={props.anchorOrigin}
      open={props.open}
      autoHideDuration={props.autoHideDuration}
      onClose={props.onClose}
      TransitionComponent={transitionComponent}
    ></MuiSnackbar>
  );
};

export default Snackbar;

//{props.children}
