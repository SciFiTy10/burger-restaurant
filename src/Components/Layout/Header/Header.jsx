import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "../../UI/AppBar/AppBar";
import Toolbar from "../../UI/Toolbar/Toolbar";
import Typography from "../../UI/Typography/Typography";
import IconButton from "../../UI/Button/IconButton";
import Badge from "../../UI/Badge/Badge";
import { AppContext } from "../../../Context/app-context";
import Icon from "../../UI/Icon/Icon";

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
      <AppBar position="fixed" className={classes.backgroundColor}>
        <Toolbar>
          <Icon>lunch_dining</Icon>
          <Typography variant="h6" className={classes.title}>
            {ctx.titleText}
          </Typography>
          <IconButton
            color="inherit"
            onClick={cartOpenHandler}
            ariaLabel="shopping cart button"
          >
            <Badge badgeContent={itemsInCart} color="secondary">
              <Icon>shopping_cart</Icon>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
