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
  //create state for email field
  const [email, setEmail] = useState("");
  const [emailHasError, setEmailHasError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState("");
  //create state for password field
  const [password, setPassword] = useState("");
  const [passwordHasError, setPasswordHasError] = useState(false);
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

  //handler function for navigating to the create account dialog
  const onCreateAccountHandler = () => {
    //close the sign in dialog
    ctx.signInDialogHandler(false);
    //open the create account dialog
    ctx.signUpDialogHandler(true);
  };

  //handler function for showing the password
  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
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

  //function for validating password
  const validatePassword = (event) => {
    //get the password string
    const password = event.target.value;
    //if the password string is empty
    if (password.length === 0) {
      //set the error value to true
      setPasswordHasError(true);
      //set the error text
      setPasswordErrorText("Password is required.");
    }
    //if there is an password string, but it's not in the correct format
    else if (
      password.length > 0 &&
      new RegExp(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/
      ).test(password) === false
    ) {
      //set the error value to true
      setPasswordHasError(true);
      //set the error text
      setPasswordErrorText(
        "Password must be at least 8 characters and contain at least 1 lowercase letter, 1 uppercase letter, 1 numeric digit, and 1 special character (ex: !#%&)"
      );
    }
    //password is in the correct format
    else {
      //set the error value to false
      setPasswordHasError(false);
      //reset the error text
      setPasswordErrorText("");
    }
  };

  return (
    <Dialog
      onClose={(event, reason) => {
        if (reason !== "backdropClick") {
          onCloseHandler();
        }
      }}
      open={ctx.signInDialogIsOpen}
      fullWidth
      maxWidth="sm"
    >
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
              onBlur={validatePassword}
              onClick={showPasswordHandler}
              placeholder="Enter your password"
              error={passwordHasError}
              helperText={passwordErrorText}
              showPassword={showPassword}
              type={showPassword ? "text" : "password"}
            />
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
          disabled={
            email.length === 0 ||
            emailHasError ||
            password.length === 0 ||
            passwordHasError
          }
        >
          Sign In
        </MuiButton>
      </MuiDialogActions>
    </Dialog>
  );
};

export default SignInDialog;
