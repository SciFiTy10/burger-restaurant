import React, { useContext } from "react";
import CartDialog from "../../Dialog/CartDialog";
import ConfirmDialog from "../../Dialog/ConfirmDialog";
import { AppContext } from "../../../Context/app-context";

const DialogContainer = () => {
  const ctx = useContext(AppContext);
  return (
    <>
      {ctx.cartIsOpen && <CartDialog />}
      {ctx.confirmIsOpen && <ConfirmDialog />}
    </>
  );
};

export default DialogContainer;
