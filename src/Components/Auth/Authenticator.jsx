import React from "react";
import Amplify from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp,
  AmplifyForgotPassword,
} from "@aws-amplify/ui-react";

import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);

const Authenticator = () => {
  //grab the context object
  return (
    <AmplifyAuthenticator>
      <AmplifySignIn
        headerText="Sign In"
        formFields={[{ type: "email" }, { type: "password" }]}
        slot="sign-in"
      />
      <AmplifySignUp
        headerText="Create an account"
        formFields={[{ type: "email" }, { type: "password" }]}
        slot="sign-up"
      />
      <AmplifyForgotPassword
        headerText="Reset Password"
        slot="forgot-password"
        formFields={[{ type: "email" }]}
      ></AmplifyForgotPassword>
    </AmplifyAuthenticator>
  );
};

export default Authenticator;
