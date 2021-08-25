import React, { useContext } from "react";
import CartDialog from "../../UI/Dialog/Cart/CartDialog";
import ConfirmDialog from "../../UI/Dialog/Confirm/ConfirmDialog";
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
