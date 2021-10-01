import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MuiAppBar from "@material-ui/core/AppBar";
import MuiToolbar from "@material-ui/core/Toolbar";
import MuiTypography from "@material-ui/core/Typography";
import MuiButton from "@material-ui/core/Button";
import MuiLunchDiningIcon from "@material-ui/core/Icon";
import { AppContext } from "../../../Context/app-context";
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

const SignInHeader = () => {
  //grab the styles object
  const classes = useStyles();
  //grab the context object
  const ctx = useContext(AppContext);
  //set up the useHistory hook
  const history = useHistory();

  //handler function for managing the opening and closing of the signin/sign up dialog
  const backToHomeHandler = () => {
    //go to the sign in page
    history.push("/");
  };

  return (
    <>
      <MuiAppBar position="fixed" className={classes.backgroundColor}>
        <MuiToolbar>
          <MuiLunchDiningIcon>lunch_dining</MuiLunchDiningIcon>
          <MuiTypography variant="h6" className={classes.title}>
            {ctx.titleText}
          </MuiTypography>
          <MuiButton
            onClick={backToHomeHandler}
            color="inherit"
            aria-label="back to home page button"
          >
            Back To Home Page
          </MuiButton>
        </MuiToolbar>
      </MuiAppBar>
      <MuiToolbar />
    </>
  );
};

export default SignInHeader;
