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
import { useHistory, useLocation } from "react-router-dom";

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
  //track which page the user is on
  const [page, setPage] = useState("");
  //grab the history object
  const history = useHistory();
  //grab the location object
  const location = useLocation();
  //listen for the page and adjust the state when that occurs
  useEffect(() => {
    //update the page
    setPage(location.pathname);
  }, [location.pathname]);

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

  //handler function for managing which page to navigate to
  const toSignInPageHandler = () => {
    //go to the sign in page
    history.push("/signin");
  };
  const backToHomePageHandler = () => {
    //go to the sign in page
    history.push("/");
  };

  //determine which auth button to render
  let authButton = !ctx.isSignedIn ? (
    <MuiButton
      onClick={toSignInPageHandler}
      color="inherit"
      aria-label="sign in button"
    >
      Sign In
    </MuiButton>
  ) : (
    <MuiIconButton
      color="inherit"
      onClick={cartOpenHandler}
      aria-label="profile page button"
    >
      <MuiAccountCircle>account_circle</MuiAccountCircle>
    </MuiIconButton>
  );

  return (
    <>
      <MuiAppBar position="fixed" className={classes.backgroundColor}>
        <MuiToolbar>
          <MuiLunchDiningIcon>lunch_dining</MuiLunchDiningIcon>
          <MuiTypography variant="h6" className={classes.title}>
            {ctx.titleText}
          </MuiTypography>
          {page === "/" ? (
            <>
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
            </>
          ) : (
            <MuiButton
              onClick={backToHomePageHandler}
              color="inherit"
              aria-label="back to home page button"
            >
              Back To Home Page
            </MuiButton>
          )}
        </MuiToolbar>
      </MuiAppBar>
      <MuiToolbar />
    </>
  );
};

export default Header;
