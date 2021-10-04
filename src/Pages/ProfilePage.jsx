import React from "react";
import Header from "../Components/Layout/Header/Header";
import ProfileContainer from "../Components/Layout/ProfileContainer";
import AuthDialogContainer from "../Components/Auth/Dialog/Container/AuthDialogContainer";
import CartDialogContainer from "../Components/Custom/Cart/Dialog/Container/CartDialogContainer";
import NotificationContainer from "../Components/Custom/Notification/Container/NotificationContainer";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <ProfileContainer />
      <AuthDialogContainer />
      <CartDialogContainer />
      <NotificationContainer />
    </>
  );
};

export default ProfilePage;
