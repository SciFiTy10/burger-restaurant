import React, { useState, useContext } from "react";
import { useMediaQuery } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import MuiBox from "@material-ui/core/Box";
import MuiTypography from "@material-ui/core/Typography";
import Menu from "../../Menu/Menu";
import MuiCard from "@material-ui/core/Card";
import MuiCardHeader from "@material-ui/core/CardHeader";
import MuiCardContent from "@material-ui/core/CardContent";
import List from "../../../UI/List/List";
import MuiButton from "@material-ui/core/Button";
import { AppContext } from "../../../../Context/app-context";
import { Amplify, Auth } from "aws-amplify";

import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const UserInfoContainer = () => {
  //grab the context object
  const ctx = useContext(AppContext);
  //temp state for only showing the button
  const [orders, setOrders] = useState([]);
  //grab the history object
  const history = useHistory();
  //determine whether this is a phone screen size or not
  const isPhoneScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  //create variables for managing the margin depending on the screensize
  const marginSides = isPhoneScreen ? 2 : {};

  //handler function for returning to the home page
  const toHomePageHandler = () => {
    history.push("/");
  };
  async function signOut() {
    try {
      await Auth.signOut();
      //create the snackbar object
      const snackbar = {
        type: "sign out",
        message: `See you later ${ctx.user.attributes.name}!`,
        open: true,
      };
      //update the current user state
      ctx.userHandler({});
      //mark the user as signed out
      ctx.signInHandler(false);
      //display the snackbar
      ctx.snackbarHandler(snackbar);
      //shift back to the main page
      history.replace("/");
    } catch (error) {
      //create the snackbar error object
      const snackbar = {
        type: "sign out",
        message: "Error: something went wrong. Please contact the site admin.",
        open: true,
      };
      //display the snackbar
      ctx.snackbarHandler(snackbar);
      console.log("error signing out: ", error);
    }
  }
  //handler function for logging out
  const signOutHandler = () => {
    //call logout
    signOut();
  };
  return (
    <MuiBox mt={5} mx={marginSides} mb={2}>
      <MuiCard>
        <MuiCardHeader
          title="Hi, Ty!"
          action={
            <MuiButton
              aria-label="back to main page"
              onClick={signOutHandler}
              color="primary"
            >
              Logout
            </MuiButton>
          }
        />
        <MuiCardContent>
          <MuiTypography variant="h5">Your Orders</MuiTypography>
          {orders.length === 0 ? (
            <MuiBox
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <MuiTypography variant="subtitle1">
                Looks like you haven't ordered anything yet.
              </MuiTypography>
              <MuiButton
                aria-label="back to main page"
                onClick={toHomePageHandler}
                color="primary"
              >
                Check out our menu
              </MuiButton>
            </MuiBox>
          ) : (
            <List component="ul" ariaLabel="menu">
              <Menu />
            </List>
          )}
        </MuiCardContent>
      </MuiCard>
    </MuiBox>
  );
};

export default UserInfoContainer;
