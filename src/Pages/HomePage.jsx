import React from "react";
import Header from "../Components/Layout/Header/Header";
import MainContainer from "../Components/Layout/MainContainer";
import CartDialogContainer from "../Components/Custom/Cart/Dialog/Container/CartDialogContainer";
import NotificationContainer from "../Components/Custom/Notification/Container/NotificationContainer";
import AuthDialogContainer from "../Components/Auth/Dialog/Container/AuthDialogContainer";

const HomePage = () => {
  return (
    <>
      <Header />
      <MainContainer />
      <AuthDialogContainer />
      <CartDialogContainer />
      <NotificationContainer />
    </>
  );
};

export default HomePage;
