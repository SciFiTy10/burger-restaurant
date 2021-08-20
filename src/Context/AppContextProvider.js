import React, { useState, useReducer } from "react";
import { cartReducer } from "../Reducers/cartReducer";

import { AppContext } from "./app-context";

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
  //create state for cart and dispatch to reducer method
  const [cart, dispatchCart] = useReducer(cartReducer, []);
  //create state for controlling the cart dialog
  const [cartIsOpen, setCartIsOpen] = useState(false);
  //create state for controlling the confirm dialog
  const [confirmIsOpen, setConfirmIsOpen] = useState(false);
  //create state for the item to be completely removed from cart
  const [itemToBeRemoved, setItemToBeRemoved] = useState({});
  //create state for managing the opening of the snackbar
  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false);

  //handler function for adding to the cart
  const cartAddHandler = (item) => {
    //ensure the item is non-empty
    if (item) {
      //dispatch the item to the reducer
      dispatchCart({ type: "ADD_ITEM", payload: item });
    }
  };
  //handler function for removing 1 of an item from the cart
  const cartRemoveHandler = (item) => {
    //ensure the item is non-empty
    if (item) {
      //dispatch the item to the reducer
      dispatchCart({ type: "REMOVE_ITEM", payload: item });
    }
  };
  //handler function for storing the item to be removed completely from the cart
  const setItemToBeCompletelyRemovedFromCartHandler = (item) => {
    //update the state
    setItemToBeRemoved(item);
  };
  //handler function for removing an item completely from the cart
  const removeItemCompletelyFromCartHandler = (item) => {
    //ensure the item is non-empty
    if (item) {
      //dispatch the item to the reducer
      dispatchCart({ type: "REMOVE_ITEM_COMPLETELY_FROM_CART", payload: item });
    }
  };
  //handler function for controlling the open and close of the cart dialog
  const cartDialogHandler = (isOpen) => {
    setCartIsOpen(isOpen);
  };
  //handler function for controlling the open and close of the confirm dialog
  const confirmDialogHandler = (isOpen) => {
    setConfirmIsOpen(isOpen);
  };
  //handler function for controlling the open and close of the snackbar
  const snackbarHandler = (isOpen) => {
    setSnackbarIsOpen(isOpen);
  };
  return (
    <AppContext.Provider
      value={{
        menu,
        cart,
        cartAddHandler,
        cartRemoveHandler,
        cartIsOpen,
        cartDialogHandler,
        confirmIsOpen,
        confirmDialogHandler,
        setItemToBeCompletelyRemovedFromCartHandler,
        removeItemCompletelyFromCartHandler,
        itemToBeRemoved,
        snackbarIsOpen,
        snackbarHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;