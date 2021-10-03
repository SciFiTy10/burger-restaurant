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

const SignInDialog = () => {
  //grab the context object
  const ctx = useContext(AppContext);
  //create state for managing the sign in fields
  const [email, setEmail] = useState("");
  const [emailHasError, setEmailHasError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState("");
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

  //function for validating email string
  const validateEmail = (event) => {
    //get the email string
    const email = event.target.value.toLowerCase();
    //if the email string is empty
    if (email.length === 0) {
      //set the error value to true
      setEmailHasError(true);
      //set the error text
      setEmailErrorText("Email is required.");
    }
    //if there is an email string, but it's not in the correct format
    else if (
      email.length > 0 &&
      new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email) ===
        false
    ) {
      //set the error value to true
      setEmailHasError(true);
      //set the error text
      setEmailErrorText("Email must be in valid format (ex: user@test.com)");
    }
    //email is in the correct format
    else {
      //set the error value to false
      setEmailHasError(false);
      //reset the error text
      setEmailErrorText("");
    }
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
              onBlur={validateEmail}
              placeholder="Enter your email"
              error={emailHasError}
              helperText={emailErrorText}
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
            <MuiTypography variant="body2">
              Forgot your password?{" "}
              <MuiLink
                variant="body2"
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
        <MuiBox mt={6}>
          <MuiGrid item xs={12}>
            <MuiTypography variant="body2">
              No account?{" "}
              <MuiLink
                variant="body2"
                component="button"
                underline="none"
                onClick={onCreateAccountHandler}
                color="primary"
              >
                Create account
              </MuiLink>
            </MuiTypography>
          </MuiGrid>
        </MuiBox>
      </MuiDialogContent>
      <MuiDialogActions>
        <MuiButton onClick={onCloseHandler} aria-label="close button">
          Close
        </MuiButton>
        <MuiButton
          aria-label="sign in button"
          color="primary"
          onClick={onSignInHandler}
          disabled={emailHasError}
        >
          Sign In
        </MuiButton>
      </MuiDialogActions>
    </Dialog>
  );
};

export default SignInDialog;
