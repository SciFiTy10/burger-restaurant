import React, { useContext } from "react";
import { AppContext } from "../../Context/app-context";
import Dialog from "../UI/Dialog/Dialog";
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
        <Dialog open={ctx.signInDialogIsOpen}>
          <AmplifyAuthenticator>
            <AmplifySignIn
              headerText="My Custom Sign In Header"
              slot="sign-in"
            />
          </AmplifyAuthenticator>
        </Dialog>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
};

export default Authenticator;
