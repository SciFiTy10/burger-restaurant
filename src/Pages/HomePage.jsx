import React from "react";
import MainHeader from "../Components/Layout/Header/MainHeader";
import MainContainer from "../Components/Layout/MainContainer";
import DialogContainer from "../Components/Custom/Cart/Dialog/Container/DialogContainer";
import NotificationContainer from "../Components/Custom/Notification/Container/NotificationContainer";

const Home = () => {
  return (
    <>
      <MainHeader />
      <MainContainer />
      <DialogContainer />
      <NotificationContainer />
    </>
  );
};

export default Home;
