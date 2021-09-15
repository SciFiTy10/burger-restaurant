import React, { useContext } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import MuiAppBar from "@material-ui/core/AppBar";
import MuiToolbar from "@material-ui/core/Toolbar";
import MuiTypography from "@material-ui/core/Typography";
import MuiIconButton from "@material-ui/core/IconButton";
import MuiBadge from "@material-ui/core/Badge";
import { AppContext } from "../../../Context/app-context";
import MuiLunchDiningIcon from "@material-ui/core/Icon";
import MuiShoppingCartIcon from "@material-ui/core/Icon";

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

  return (
    <>
      <MuiAppBar position="fixed" className={classes.backgroundColor}>
        <MuiToolbar>
          <MuiLunchDiningIcon>lunch_dining</MuiLunchDiningIcon>
          <MuiTypography variant="h6" className={classes.title}>
            {ctx.titleText}
          </MuiTypography>
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
