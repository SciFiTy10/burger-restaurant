import React from "react";
import Header from "../Components/Layout/Header/Header";
import MainContainer from "../Components/Layout/MainContainer";
import DialogContainer from "../Components/Custom/Cart/Dialog/Container/DialogContainer";
import NotificationContainer from "../Components/Custom/Notification/Container/NotificationContainer";

const Home = () => {
  return (
    <>
      <Header />
      <MainContainer />
      <DialogContainer />
      <NotificationContainer />
    </>
  );
};

export default Home;
