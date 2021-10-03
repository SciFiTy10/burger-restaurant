import React, { useContext, useState } from "react";
import { Auth } from "aws-amplify";
import Dialog from "../../UI/Dialog/Dialog";
import { AppContext } from "../../../Context/app-context";
import MuiTypography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import MuiButton from "@material-ui/core/Button";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiBox from "@material-ui/core/Box";
import MuiGrid from "@material-ui/core/Grid";
import Email from "../UI/Email";
import Password from "../UI/Password";
import { Typography } from "@material-ui/core";

const SignInDialog = () => {
  //grab the context object
  const ctx = useContext(AppContext);
  //create state for managing the sign in fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signIn() {
    try {
      const user = await Auth.signIn(email, password);
    } catch (error) {
      console.log("error signing in", error);
    }
  }
  //handle the input from the email textfield
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  //handle the input from the password textfield
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  //handler function for closing the sign in dialog
  const onCloseHandler = () => {
    //close the sign in dialog
    ctx.signInDialogHandler(false);
  };
  //handler function for handling sign in
  const onSignInHandler = () => {
    //call the signIn method
    signIn();
  };

  //handler function for navigating to the reset password dialog
  const onResetPasswordHandler = () => {
    //close the sign in dialog
    ctx.signInDialogHandler(false);
    //open the reset password dialog
    ctx.resetPasswordDialogHandler(true);
  };

  //handler function for navigating to the create account dialog
  const onCreateAccountHandler = () => {
    //close the sign in dialog
    ctx.signInDialogHandler(false);
    //open the create account dialog
    ctx.signUpDialogHandler(true);
  };

  return (
    <Dialog onClose={onCloseHandler} open={ctx.signInDialogIsOpen}>
      <MuiDialogTitle>Sign into your account</MuiDialogTitle>
      <MuiDialogContent id="dialog-description">
        <MuiBox mb={2}>
          <MuiGrid item xs={12}>
            <MuiTypography>Email *</MuiTypography>
          </MuiGrid>
          <MuiGrid item xs={12}>
            <Email
              id="sign in email"
              dataTestId="sign in email"
              value={email}
              onChange={emailHandler}
              placeholder="Enter your email"
            />
          </MuiGrid>
        </MuiBox>
        <MuiBox mb={2}>
          <MuiGrid item xs={12}>
            <MuiTypography>Password *</MuiTypography>
          </MuiGrid>
          <MuiGrid>
            <Password
              id="sign in password"
              dataTestId="sign in password"
              value={password}
              onChange={passwordHandler}
              placeholder="Enter your password"
            />
          </MuiGrid>
        </MuiBox>
        <MuiBox mb={2}>
          <MuiGrid item xs={12}>
            <MuiTypography>
              Forgot your password?{" "}
              <MuiLink
                component="button"
                underline="none"
                onClick={onResetPasswordHandler}
                color="primary"
              >
                Reset password
              </MuiLink>
            </MuiTypography>
          </MuiGrid>
        </MuiBox>
      </MuiDialogContent>
      <MuiDialogActions>
        <MuiTypography>No account?</MuiTypography>
        <MuiLink
          component="button"
          underline="none"
          onClick={onCreateAccountHandler}
          color="primary"
        >
          Create account
        </MuiLink>
        <MuiButton onClick={onCloseHandler} aria-label="close button">
          Close
        </MuiButton>
        <MuiButton
          aria-label="sign in button"
          color="primary"
          onClick={onSignInHandler}
        >
          Sign In
        </MuiButton>
      </MuiDialogActions>
    </Dialog>
  );
};

export default SignInDialog;
