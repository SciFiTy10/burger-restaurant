import React, { useContext, useState } from "react";

import Dialog from "../../UI/Dialog/Dialog";
import { AppContext } from "../../../Context/app-context";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Email from "../UI/Email";

async function signIn() {
  try {
    const user = await Auth.signIn(username, password);
  } catch (error) {
    console.log("error signing in", error);
  }
}
//handle the input from the email textfield
const emailHandler = (event) => {
  setEmail(event.target.value);
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

const SignInDialog = () => {
  //grab the context object
  const ctx = useContext(AppContext);
  //create state for managing the sign in fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Dialog onClose={onCloseHandler} open={ctx.signInDialogIsOpen}>
      <MuiDialogTitle>Sign into your account</MuiDialogTitle>
      <MuiDialogContent id="dialog-description">
        <Email
          label="*Email"
          id="sign in email"
          dataTestId="sign in email"
          value={email}
          onChange={emailHandler}
        />
      </MuiDialogContent>
      <MuiDialogActions>
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
