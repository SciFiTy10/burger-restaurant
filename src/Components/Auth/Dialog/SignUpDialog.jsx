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
import { AppContext } from "../../../Context/app-context";

const SignUpDialog = () => {
  //grab the context object
  const ctx = useContext(AppContext);
  //create state for managing the sign in fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signUp() {
    try {
      const { user } = await Auth.signUp({
        email,
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
      //find a way to display an error here
      //there may already be an account set up
      console.log("error signing up:", error);
    }
  }
  //handle the input from the name textfield
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  //handle the input from the email textfield
  const emailHandler = (event) => {
    setEmail(event.target.value);
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
              placeholder="Enter your name"
            />
          </MuiGrid>
        </MuiBox>
        <MuiBox mb={2}>
          <MuiGrid item xs={2}>
            <MuiTypography>Email *</MuiTypography>
          </MuiGrid>
          <MuiGrid item xs={2}>
            <Email
              id="sign up email"
              dataTestId="sign in email"
              value={email}
              onChange={emailHandler}
              placeholder="Enter your email"
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
        >
          Create Account
        </MuiButton>
      </MuiDialogActions>
    </Dialog>
  );
};

export default SignUpDialog;
