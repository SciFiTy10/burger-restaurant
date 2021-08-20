import React, { useContext } from "react";
import { Snackbar, useMediaQuery } from "@material-ui/core";
import AppContext from "../Context/app-context";

const Snackbar = () => {
  //get the context object
  const ctx = useContext(AppContext);
  //determine whether this is a small screen size or not
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  //create the anchor origin depending on the screensize
  const anchorOrigin = isSmallScreen
    ? { vertical: "bottom", horizontal: "center" }
    : { vertical: "top", horizontal: "center" };
  //create a variable for holding the action for the snackbar
  const action = (
    <>
      <Button onClick={ctx.cartDialogHandler}>Show Cart</Button>
      <IconButton
        size="small"
        aria-label="close"
        onClick={closeSnackbarHandler}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  //handler function for closing the snackbar
  const closeSnackbarHandler = () => {
    ctx.snackbarHandler(false);
  };
  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      open={ctx.snackbarIsOpen}
      onClose={closeSnackbarHandler}
      message={ctx.snackbarMessage}
      action={action}
    ></Snackbar>
  );
};

export default Snackbar;
