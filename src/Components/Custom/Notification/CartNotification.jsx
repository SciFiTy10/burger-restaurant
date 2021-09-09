import React, { useContext } from "react";
import { useMediaQuery } from "@material-ui/core";
import MuiButton from "@material-ui/core/Button";
import Snackbar from "../../UI/Snackbar/Snackbar";
import MuiIconButton from "@material-ui/core/IconButton";
import MuiCloseIcon from "@material-ui/icons/Close";
import Alert from "../../UI/Alert/Alert";
import { AppContext } from "../../../Context/app-context";
import { makeStyles } from "@material-ui/core/styles";

//set white for the button text
const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.text.secondary,
  },
}));

const CartNotification = () => {
  //get the styles object
  const classes = useStyles();
  //get the context object
  const ctx = useContext(AppContext);
  //determine whether this is a phone screen size or not
  const isPhoneScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  //create the anchor origin depending on the screensize
  const anchorOrigin = isPhoneScreen
    ? { vertical: "bottom", horizontal: "center" }
    : { vertical: "top", horizontal: "center" };
  //set the slide direction for the snackbar transition
  const slideDirection = isPhoneScreen ? "up" : "down";
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

  //create an action for the snackbar which holds a button to show the cart and close the snackbar
  const action = (
    <>
      <MuiButton
        className={classes.button}
        onClick={showCartHandler}
        aria-label="show cart button"
      >
        Show Cart
      </MuiButton>
      <MuiIconButton
        size="small"
        aria-label="close snackbar"
        onClick={closeSnackbarHandler}
      >
        <MuiCloseIcon className={classes.button} fontSize="small" />
      </MuiIconButton>
    </>
  );

  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      open={ctx.snackbar.open}
      autoHideDuration={4000}
      onClose={closeSnackbarHandler}
      slideDirection={slideDirection}
      ariaLabel={ctx.snackbar.message}
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

export default CartNotification;
