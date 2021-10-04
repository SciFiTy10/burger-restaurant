import React, { useContext } from "react";
import { AppContext } from "../../../../Context/app-context";

import SignInDialog from "../SignInDialog";
import SignUpDialog from "../SignUpDialog";

const AuthDialogContainer = () => {
  //grab the context object
  const ctx = useContext(AppContext);
  return (
    <>
      {ctx.signInDialogIsOpen && <SignInDialog />}
      {ctx.signUpDialogIsOpen && <SignUpDialog />}
    </>
  );
};

export default AuthDialogContainer;
