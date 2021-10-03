import React, { useContext, useState } from "react";
import { Auth } from "aws-amplify";
import Dialog from "../../UI/Dialog/Dialog";
import MuiGrid from "@material-ui/core/Grid";
import MuiTypography from "@material-ui/core/Typography";
import MuiBox from "@material-ui/core/Box";
import MuiButton from "@material-ui/core/Button";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Name from "../UI/Name";
import Email from "../UI/Email";
import Password from "../UI/Password";
import { AppContext } from "../../../Context/app-context";

const SignUpDialog = () => {
  //grab the context object
  const ctx = useContext(AppContext);
  //create state for managing the name field
  const [name, setName] = useState("");
  const [nameHasError, setNameHasError] = useState(false);
  const [nameErrorText, setNameErrorText] = useState("");
  //create state for managing the email field
  const [email, setEmail] = useState("");
  const [emailHasError, setEmailHasError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState("");
  //create state for managing the password
  const [password, setPassword] = useState("");
  const [passwordHasError, setPasswordHasError] = useState(false);
  const [passwordErrorText, setPasswordErrorText] = useState("");
  //create state for managing confirm password
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordHasError, setConfirmPasswordHasError] = useState(false);
  const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState("");

  async function signUp() {
    try {
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          name,
        },
      });

      //create the snackbar object
      const snackbar = {
        type: "sign up",
        message: `Welcome ${name}!`,
        open: true,
      };
      //display the snackbar
      ctx.snackbarHandler(snackbar);
      //close the cart dialog
      ctx.signUpDialogHandler(false);
    } catch (error) {
      //create the snackbar error object
      const snackbar = {
        type: "sign up",
        message:
          "Error: something went wrong. Please check your input fields and try again.",
        open: true,
      };
      //display the snackbar
      ctx.snackbarHandler(snackbar);
      //print error to the console
      console.log("error signing up:", error);
    }
  }
  //handle the input from the name textfield
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  //handle the input from the email textfield
  const emailHandler = (event) => {
    setEmail(event.target.value.toLowerCase());
  };
  //handle the input from the password textfield
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  //handle the input from the email textfield
  const confirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  //handler function for closing the sign up dialog
  const onCloseHandler = () => {
    //close the sign up dialog
    ctx.signUpDialogHandler(false);
  };
  //handler function for handling sign up
  const onSignUpHandler = () => {
    //call the signUp method
    signUp();
  };

  //function for validating the name string
  const validateName = (event) => {
    //get the name string
    const name = event.target.value;
    //if the name string is empty
    if (name.length === 0) {
      //set the error value to true
      setNameHasError(true);
      //set the error text
      setNameErrorText("Name is required.");
    }
    //the name is in the correct format
    else {
      //set the error value to false
      setNameHasError(false);
      //reset the error text
      setNameErrorText("");
    }
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

  //function for validating confirm password
  const validateConfirmPassword = (event) => {
    //get the password string
    const confirmPassword = event.target.value;
    //if the confirmPassword string is empty
    if (confirmPassword.length === 0) {
      //set the error value to true
      setConfirmPasswordHasError(true);
      //set the error text
      setConfirmPasswordErrorText("Please re-enter your password.");
    }
    //if there is an password string, but it's not in the correct format
    else if (password !== confirmPassword) {
      //set the error value to true
      setConfirmPasswordHasError(true);
      //set the error text
      setConfirmPasswordErrorText(
        "Confirm Password must match password above."
      );
    }
    //password is in the correct format
    else {
      //set the error value to false
      setConfirmPasswordHasError(false);
      //reset the error text
      setConfirmPasswordErrorText("");
    }
  };

  return (
    <Dialog onClose={onCloseHandler} open={ctx.signUpDialogIsOpen}>
      <MuiDialogTitle>Create a new account</MuiDialogTitle>
      <MuiDialogContent id="dialog-description">
        <MuiBox mb={2}>
          <MuiGrid item xs={12}>
            <MuiTypography>Name *</MuiTypography>
          </MuiGrid>
          <MuiGrid item xs={12}>
            <Name
              id="sign up name"
              value={name}
              onChange={nameHandler}
              onBlur={validateName}
              placeholder="Enter your name"
              error={nameHasError}
              helperText={nameErrorText}
            />
          </MuiGrid>
        </MuiBox>
        <MuiBox mb={2}>
          <MuiGrid item xs={12}>
            <MuiTypography>Email *</MuiTypography>
          </MuiGrid>
          <MuiGrid item xs={12}>
            <Email
              id="sign up email"
              dataTestId="sign up email"
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
          <MuiGrid item xs={12}>
            <Password
              id="sign up password"
              dataTestId="sign up password"
              value={password}
              onChange={passwordHandler}
              onBlur={validatePassword}
              placeholder="Enter your password"
              error={passwordHasError}
              helperText={passwordErrorText}
            />
          </MuiGrid>
        </MuiBox>
        <MuiBox mb={2}>
          <MuiGrid item xs={12}>
            <MuiTypography>Confirm Password *</MuiTypography>
          </MuiGrid>
          <MuiGrid item xs={12}>
            <Email
              id="sign up confirm password"
              dataTestId="sign up confirm password"
              value={confirmPassword}
              onChange={confirmPasswordHandler}
              onBlur={validateConfirmPassword}
              placeholder="Re-enter your password"
              error={confirmPasswordHasError}
              helperText={confirmPasswordErrorText}
            />
          </MuiGrid>
        </MuiBox>
      </MuiDialogContent>
      <MuiDialogActions>
        <MuiButton onClick={onCloseHandler} aria-label="close button">
          Close
        </MuiButton>
        <MuiButton
          aria-label="sign up button"
          color="primary"
          onClick={onSignUpHandler}
          disabled={
            nameHasError ||
            emailHasError ||
            passwordHasError ||
            confirmPasswordHasError
          }
        >
          Create Account
        </MuiButton>
      </MuiDialogActions>
    </Dialog>
  );
};

export default SignUpDialog;
