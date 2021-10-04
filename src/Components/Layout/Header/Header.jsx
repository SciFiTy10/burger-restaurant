import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MuiAppBar from "@material-ui/core/AppBar";
import MuiToolbar from "@material-ui/core/Toolbar";
import MuiTypography from "@material-ui/core/Typography";
import MuiIconButton from "@material-ui/core/IconButton";
import MuiBadge from "@material-ui/core/Badge";
import MuiButton from "@material-ui/core/Button";
import { AppContext } from "../../../Context/app-context";
import MuiLunchDiningIcon from "@material-ui/core/Icon";
import MuiShoppingCartIcon from "@material-ui/core/Icon";
import MuiAccountCircle from "@material-ui/core/Icon";
import { useHistory } from "react-router-dom";

//set up the styles for the app bar
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
  backgroundColor: {
    backgroundColor: theme.palette.primary,
  },
}));

const Header = () => {
  //grab the styles object
  const classes = useStyles();
  //grab the context object
  const ctx = useContext(AppContext);
  //grab the history object
  const history = useHistory();

  //get the total amount of items in the cart
  const itemsInCart = ctx.cart.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  //handler function for managing the opening and closing of the cartdialog
  const cartOpenHandler = () => {
    //close the snackbar
    ctx.snackbarHandler(false);
    //open the cart dialog
    ctx.cartDialogHandler(true);
  };

  //handler function for showing the signin dialog
  const signInDialogOpenHandler = () => {
    //show the signInDialog
    ctx.signInDialogHandler(true);
  };

  //handler function for returning to the home page
  const toHomePageHandler = () => {
    history.push("/");
  };

  //handler function for navigating to the profile page
  const toProfilePageHandler = () => {
    history.push("/profile");
  };

  //determine which auth button to render
  let authButton = !ctx.isSignedIn ? (
    <MuiButton
      onClick={signInDialogOpenHandler}
      color="inherit"
      aria-label="sign in button"
    >
      Sign In
    </MuiButton>
  ) : (
    <MuiIconButton
      color="inherit"
      onClick={toProfilePageHandler}
      aria-label="profile page button"
    >
      <MuiAccountCircle>account_circle</MuiAccountCircle>
    </MuiIconButton>
  );

  return (
    <>
      <MuiAppBar position="fixed" className={classes.backgroundColor}>
        <MuiToolbar>
          <MuiIconButton color="inherit" onClick={toHomePageHandler}>
            <MuiLunchDiningIcon>lunch_dining</MuiLunchDiningIcon>
          </MuiIconButton>

          <MuiTypography variant="h6" className={classes.title}>
            {ctx.titleText}
          </MuiTypography>
          <>{authButton}</>
          <MuiIconButton
            color="inherit"
            onClick={cartOpenHandler}
            aria-label="shopping cart button"
          >
            <MuiBadge badgeContent={itemsInCart} color="secondary">
              <MuiShoppingCartIcon>shopping_cart</MuiShoppingCartIcon>
            </MuiBadge>
          </MuiIconButton>
        </MuiToolbar>
      </MuiAppBar>
      <MuiToolbar />
    </>
  );
};

export default Header;
