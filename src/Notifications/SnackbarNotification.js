import React, { useContext } from "react";
import { Button, IconButton, Snackbar, useMediaQuery } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import CloseIcon from "@material-ui/icons/Close";
import { AppContext } from "../Context/app-context";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.text.secondary,
  },
}));

const SnackbarNotification = () => {
  const classes = useStyles();
  //get the context object
  const ctx = useContext(AppContext);
  //determine whether this is a small screen size or not
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  //create the anchor origin depending on the screensize
  const anchorOrigin = isSmallScreen
    ? { vertical: "bottom", horizontal: "center" }
    : { vertical: "top", horizontal: "center" };
  //handler function for closing the snackbar
  const closeSnackbarHandler = () => {
    ctx.snackbarHandler({ open: false, message: "" });
  };
  //handler function for showing the cart
  const showCartHandler = () => {
    //show the cart
    ctx.cartDialogHandler(true);
    //close the snackbar
    closeSnackbarHandler();
  };
  //create a variable for holding the action for the snackbar
  const action = (
    <>
      <Button className={classes.button} onClick={showCartHandler}>
        Show Cart
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        onClick={closeSnackbarHandler}
      >
        <CloseIcon className={classes.button} fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      open={ctx.snackbar.open}
      autoHideDuration={4000}
      onClose={closeSnackbarHandler}
    >
      <Alert
        severity="success"
        variant="filled"
        onClose={closeSnackbarHandler}
        action={action}
      >
        {ctx.snackbar.message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarNotification;
