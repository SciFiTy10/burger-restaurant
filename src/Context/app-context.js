import React, { useState } from "react";

export const AppContext = React.createContext({
  menuList: [],
  cart: [],
});

const AppContextProvider = (props) => {
  //create state for menu list
  const [menuList, setMenuList] = useState([
    {
      id: 1,
      title: "Royale With Cheese",
      description: "You know what they call a quarter pounder in France?",
      price: 9.99,
    },
    {
      id: 2,
      title: "What Burger",
      description:
        "What ain't no burger I ever heard of, they speak English in what?",
      price: 10.99,
    },
    {
      id: 3,
      title: "Marvin Special",
      description: "The only burger in town without a top bun",
      price: 8.99,
    },
    {
      id: 4,
      title: "Ezekiel 25:17 Burger",
      description: "Take the path of the righteous man by eating this burger",
      price: 12.99,
    },
    {
      id: 5,
      title: "Big Kahuna Burger",
      description: "I hear this one is a tasty burger",
      price: 11.99,
    },
  ]);
  const [cart, setCart] = useState([{}]);

  const cartHandler = (id, quantity) => {
    //create a variable for the current state
    
    //check if the item exists
    if(){

    }
    else{

      setCart({})
    }
    const item = {
      id: id,
      amount: quantity
    }
  }
  return (
    <AppContext.Provider
      value={{
        menuList: menuList,
        cart: cart,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
