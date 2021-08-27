import React, { useContext } from "react";
import { AppContext } from "../../../Context/app-context";
import CartNotification from "../../Custom/Notification/CartNotification";

const NotificationContainer = () => {
  const ctx = useContext(AppContext);
  return <>{ctx.snackbar.open && <CartNotification />}</>;
};

export default NotificationContainer;
