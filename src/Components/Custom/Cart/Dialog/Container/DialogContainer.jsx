import React, { useContext } from "react";
import CartDialog from "../CartDialog";
import RemoveFromCartDialog from "../RemoveFromCartDialog";
import { AppContext } from "../../../../../Context/app-context";

const DialogContainer = () => {
  //grab the context object
  const ctx = useContext(AppContext);
  return (
    <>
      {ctx.cartDialogIsOpen && <CartDialog />}
      {ctx.removeFromCartDialogIsOpen && <RemoveFromCartDialog />}
    </>
  );
};

export default DialogContainer;
