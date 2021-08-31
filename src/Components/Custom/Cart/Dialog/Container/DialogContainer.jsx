import React, { useContext } from "react";
import CartDialog from "../CartDialog";
import RemoveFromCartDialog from "../RemoveFromCartDialog";
import { AppContext } from "../../../../../Context/app-context";

const DialogContainer = () => {
  const ctx = useContext(AppContext);
  return (
    <>
      {ctx.cartIsOpen && <CartDialog />}
      {ctx.confirmIsOpen && <RemoveFromCartDialog />}
    </>
  );
};

export default DialogContainer;
