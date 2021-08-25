import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MuiAppBar from "@material-ui/core/AppBar";
import MuiToolbar from "@material-ui/core/Toolbar";
import MuiTypography from "@material-ui/core/Typography";
import IconButton from "../../UI/Button/IconButton";
import MuiBadge from "@material-ui/core/Badge";
import { AppContext } from "../../../Context/app-context";
import Icon from "../../UI/Icon/Icon";

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
  const classes = useStyles();
  const ctx = useContext(AppContext);
  //create state for the header title
  const [titleText, setTitleText] = useState("Big Kahuna Burger");
  //get the total amount of items in the cart
  const itemsInCart = ctx.cart.reduce((total, item) => {
    return total + item.amount;
  }, 0);
  //handler function for managing the opening and closing of the cartdialog
  const cartOpenHandler = () => {
    ctx.cartDialogHandler(true);
  };
  return (
    <>
      <MuiAppBar position="fixed" className={classes.backgroundColor}>
        <MuiToolbar>
          <Icon>lunch_dining</Icon>
          <MuiTypography variant="h6" className={classes.title}>
            {titleText}
          </MuiTypography>
          <IconButton
            color="inherit"
            onClick={cartOpenHandler}
            ariaLabel="shopping cart button"
          >
            <MuiBadge badgeContent={itemsInCart} color="secondary">
              <Icon>shopping_cart</Icon>
            </MuiBadge>
          </IconButton>
        </MuiToolbar>
      </MuiAppBar>
      <MuiToolbar />
    </>
  );
};

export default Header;
