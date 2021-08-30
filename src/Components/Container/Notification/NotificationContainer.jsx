import React, { useContext } from "react";
import { AppContext } from "../../../Context/app-context";
import CartNotification from "../../Custom/Notification/CartNotification";
import OrderNotification from "../../Custom/Notification/OrderNotification";

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
    </>
  );
};

export default NotificationContainer;
