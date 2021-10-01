import React from "react";
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignIn } from "@aws-amplify/ui-react";

import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);

const Authenticator = () => {
  //grab the context object
  return (
    <AmplifyAuthenticator>
      <AmplifySignIn headerText="My Custom Sign In Header" slot="sign-in" />
    </AmplifyAuthenticator>
  );
};

export default Authenticator;
