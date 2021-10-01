import React, { useContext } from "react";
import { AppContext } from "../../Context/app-context";
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignIn } from "@aws-amplify/ui-react";

import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);

const Authenticator = (props) => {
  //grab the context object
  const ctx = useContext(AppContext);
  return (
    <>
      {ctx.signInDialogIsOpen ? (
        <AmplifyAuthenticator>
          <AmplifySignIn headerText="My Custom Sign In Header" slot="sign-in" />
          {props.children}
        </AmplifyAuthenticator>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
};

export default Authenticator;
