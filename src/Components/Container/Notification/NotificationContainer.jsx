import React, { useContext } from "react";
import { AppContext } from "../../../Context/app-context";
import AddToCartNotification from "../../Notification/AddToCartNotification";

const NotificationContainer = () => {
  const ctx = useContext(AppContext);
  return <>{ctx.snackbar && <AddToCartNotification />}</>;
};

export default NotificationContainer;
