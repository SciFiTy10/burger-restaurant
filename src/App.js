import "./App.css";
import Header from "./Header/Header";
import React, { useState } from "react";

const App = () => {
  const titleText = "Big Kahuna Burger";
  const [cartCount, setCartCount] = useState(0);

  return <Header titleText={titleText} cartCount={cartCount} />;
};

export default App;
