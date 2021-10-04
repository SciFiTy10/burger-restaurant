import React, { useState } from "react";
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

const UserInfoContainer = () => {
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
  return (
    <MuiBox mt={5} mx={marginSides} mb={2}>
      <MuiCard>
        <MuiCardHeader
          title="Hi, Ty!"
          action={
            <MuiButton
              aria-label="back to main page"
              onClick={toHomePageHandler}
              color="primary"
            >
              Check out our menu
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
