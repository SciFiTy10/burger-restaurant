import React, { useContext } from "react";
import { AppContext } from "../../../../Context/app-context";
import CartNotification from "../CartNotification";
import OrderNotification from "../OrderNotification";
import SignUpNotification from "../SignUpNotification";

const NotificationContainer = () => {
  const ctx = useContext(AppContext);
  return (
    <>
      {ctx.snackbar.open && ctx.snackbar.type === "cart" && (
        <CartNotification />
      )}
      {ctx.snackbar.open && ctx.snackbar.type === "order" && (
        <OrderNotification />
      )}
      {ctx.snackbar.open && ctx.snackbar.type === "sign up" && (
        <SignUpNotification />
      )}
    </>
  );
};

export default NotificationContainer;
