import React, { useState, useReducer } from "react";

export const AppContext = React.createContext({
  menuList: [],
  cart: [],
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      //create a variable for the current state
      const currentCart = [...state];
      //determine whether the cart contains this item
      const existingItem = currentCart.filter(
        (item) => item.id === action.payload.id
      )[0];
      //check if the item exists
      if (existingItem !== undefined) {
        //get the existing amount
        const currentAmount = existingItem.amount;
        //determine the new amount
        const newAmount = currentAmount + action.payload.amount;
        //update the quantity on the existingItem
        existingItem.amount = newAmount;
        //update the currentCart with the updated object
        const newCart = currentCart.map((item) =>
          item.id === action.payload.id ? existingItem : item
        );
        //update the state of the cart
        return newCart;
      } else {
        //the item doesn't exist yet so we need to add it to the cart
        return [...state, action.payload];
      }
    case "REMOVE_ITEM":
      break;
    default:
      return state;
  }
};

const AppContextProvider = (props) => {
  //create state for menu list
  const [menu, setMenu] = useState([
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
  const [cart, dispatch] = useReducer(cartReducer, []);

  const [cartIsOpen, setCartIsOpen] = useState(false);
  const cartAddHandler = (item) => {
    //ensure the item is non-empty
    if (item) {
      //dispatch the item to the reducer
      dispatch({ type: "ADD_ITEM", payload: item });
    }
  };

  const cartRemoveHandler = (item) => {
    //ensure the item is non-empty
    if (item) {
      //dispatch the item to the reducer
      dispatch({ type: "REMOVE_ITEM", payload: item });
    }
  };

  const cartClickHandler = (isOpen) => {
    setCartIsOpen(isOpen);
  };
  return (
    <AppContext.Provider
      value={{
        menu,
        cart,
        onAddItem: cartAddHandler,
        onRemoveItem: cartRemoveHandler,
        cartIsOpen,
        onCartClick: cartClickHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
