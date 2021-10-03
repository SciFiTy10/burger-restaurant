import React, { useContext } from "react";
import { AppContext } from "../../../../Context/app-context";
import CartNotification from "../CartNotification";
import OrderNotification from "../OrderNotification";
import AuthNotification from "../AuthNotification";

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
      {ctx.snackbar.open &&
        (ctx.snackbar.type === "sign up" ||
          ctx.snackbar.type === "sign in") && <AuthNotification />}
    </>
  );
};

export default NotificationContainer;
