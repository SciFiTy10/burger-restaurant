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
  const [cart, setCart] = useState([]);

  const cartHandler = (id, quantity) => {
    //create a variable for the current state
    const currentCart = [...cart];
    //determine whether the cart contains this item
    const existingItem = currentCart.filter((item) => item.id === id)[0];
    //check if the item exists
    if (existingItem !== undefined) {
      //get the existing amount
      const currentAmount = existingItem.amount;
      //determine the new amount
      const newAmount =
        currentAmount + quantity <= 0 ? 0 : currentAmount + quantity;
      //update the quantity on the existingItem
      existingItem.amount = newAmount;
      //update the currentCart with the updated object
      const newCart = currentCart.map((item) =>
        item.id === id ? existingItem : item
      );
      //update the state of the cart
      setCart(newCart);
    } else {
      //the item doesn't exist yet so we need to add it to the cart
      setCart([{ id: id, amount: quantity }, ...cart]);
    }
  };
  return (
    <AppContext.Provider
      value={{
        menuList: menuList,
        cart: cart,
        onItemChange: cartHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
