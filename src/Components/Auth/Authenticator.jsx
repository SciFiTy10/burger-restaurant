import React from "react";
import { Auth, Amplify } from "aws-amplify";
import MuiButton from "@material-ui/core/Button";

import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);

const username = "tyridings10@gmail.com";
const password = "Cheeks123!";

async function signUp() {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
    });
    console.log(user);
  } catch (error) {
    console.log("error signing up:", error);
  }
}

const Authenticator = () => {
  //grab the context object
  return <MuiButton onClick={signUp}>Submit</MuiButton>;
};

export default Authenticator;
