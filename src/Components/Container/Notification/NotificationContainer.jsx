import React, { useContext } from "react";
import { AppContext } from "../../../Context/app-context";
import AddToCartNotification from "../../Custom/Notification/AddToCartNotification";

const NotificationContainer = () => {
  const ctx = useContext(AppContext);
  return <>{ctx.snackbar && <AddToCartNotification />}</>;
};

export default NotificationContainer;
