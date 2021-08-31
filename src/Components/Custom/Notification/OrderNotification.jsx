import React, { useContext } from "react";
import IconButton from "../../UI/Button/IconButton";
import Icon from "../../UI/Icon/Icon";
import Alert from "../../UI/Alert/Alert";
import { AppContext } from "../../../Context/app-context";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import Snackbar from "../../UI/Snackbar/Snackbar";

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.text.secondary,
  },
}));

const OrderNotification = () => {
  //get the styles object
  const classes = useStyles();
  //get the context object
  const ctx = useContext(AppContext);
  //determine whether this is a small screen size or not
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  //create the anchor origin depending on the screensize
  const anchorOrigin = isSmallScreen
    ? { vertical: "bottom", horizontal: "center" }
    : { vertical: "top", horizontal: "center" };
  //set the slide direction for the snackbar transition
  const slideDirection = isSmallScreen ? "up" : "down";
  //handler function for closing the snackbar
  const closeSnackbarHandler = () => {
    ctx.snackbarHandler({ open: false, message: "" });
  };

  //create a variable for holding the action for the snackbar
  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close snackbar"
        onClick={closeSnackbarHandler}
      >
        <Icon className={classes.button} fontSize="small">
          close
        </Icon>
      </IconButton>
    </>
  );
  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      open={ctx.snackbar.open}
      autoHideDuration={4000}
      onClose={closeSnackbarHandler}
      slideDirection={slideDirection}
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

export default OrderNotification;