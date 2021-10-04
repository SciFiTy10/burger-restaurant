import React, { useContext } from "react";
import Header from "../Components/Layout/Header/Header";
import ProfileContainer from "../Components/Layout/ProfileContainer";
import AuthDialogContainer from "../Components/Auth/Dialog/Container/AuthDialogContainer";
import CartDialogContainer from "../Components/Custom/Cart/Dialog/Container/CartDialogContainer";
import NotificationContainer from "../Components/Custom/Notification/Container/NotificationContainer";
import { AppContext } from "../Context/app-context";
import { Redirect } from "react-router-dom";

const ProfilePage = () => {
  //grab the context
  const ctx = useContext(AppContext);
  return (
    <>
      {!ctx.isSignedIn ? (
        <Redirect to="/" />
      ) : (
        <>
          <Header />
          <ProfileContainer />
          <AuthDialogContainer />
          <CartDialogContainer />
          <NotificationContainer />
        </>
      )}
    </>
  );
};

export default ProfilePage;
