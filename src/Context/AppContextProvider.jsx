import React, { useState, useReducer, useEffect } from "react";
import { cartReducer } from "../Reducers/cartReducer/cartReducer";
import { AppContext } from "./app-context";
import { Auth } from "aws-amplify";

const AppContextProvider = (props) => {
  //create state for the title
  const [titleText, setTitleText] = useState("Big Kahuna Burger");
  //create state for the menu
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
  //create state for the cart and dispatch to reducer method
  const [cart, dispatchCart] = useReducer(cartReducer, []);
  //create state for controlling the cart dialog
  const [cartDialogIsOpen, setCartDialogIsOpen] = useState(false);
  //create state for controlling the removeFromCart dialog
  const [removeFromCartDialogIsOpen, setRemoveFromCartDialogIsOpen] =
    useState(false);
  //create state for the item to be completely removed from cart
  const [itemToBeRemoved, setItemToBeRemoved] = useState({});
  //create state for managing the snackbar
  const [snackbar, setSnackbar] = useState({});
  //create state for tracking whether the user is signed in
  const [isSignedIn, setIsSignedIn] = useState(false);
  //create state for showing the signInDialog
  const [signInDialogIsOpen, setSignInDialogIsOpen] = useState(false);
  //create state for showing the signUpDialog
  const [signUpDialogIsOpen, setSignUpDialogIsOpen] = useState(false);
  //create state for managing the logged in user
  const [user, setUser] = useState({});

  //use effect hook for setting up the default cart state based on localStorage
  useEffect(() => {
    //load the existing cart data from localStorage
    const cartData = JSON.parse(localStorage.getItem("cart"));
    //if the cartData is empty
    if (cartData === null) {
      //set the cartData equal to the default from the reducer
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      //if cartData has data, then we populate the cart state with that
      dispatchCart({ type: "LOAD_ITEMS", payload: cartData });
    }
  }, []);

  //use effect hook for updating localStorage with the latest from the cart
  useEffect(() => {
    //the cart state has updated, so localStorage will now be updated
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //use effect hook for managing the current user
  useEffect(() => {
    //make a call to get the current user
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user);
        console.log(user);
      })
      .catch((err) => console.log(err));
  }, []);

  //handler function for adding an item to the cart
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

  //handler function for ordering the items in the cart
  const cartOrderHandler = () => {
    //dispatch the order from the reducer
    dispatchCart({ type: "ORDER_ITEMS", payload: [] });
  };

  //handler function for controlling the open and close of the cart dialog
  const cartDialogHandler = (isOpen) => {
    //update the cart dialog state
    setCartDialogIsOpen(isOpen);
  };

  //handler function for controlling the open and close of the confirm dialog
  const removeFromCartDialogHandler = (isOpen) => {
    //update the remove from cart dialog state
    setRemoveFromCartDialogIsOpen(isOpen);
  };
  //handler function for controlling the snackbar
  const snackbarHandler = (snackbar) => {
    //update the snackbar state
    setSnackbar(snackbar);
  };
  //handler function for controlling whether the user is signed in
  const signInHandler = (isSignedIn) => {
    setIsSignedIn(isSignedIn);
  };
  //handler function for controlling whether the signInDialog is open
  const signInDialogHandler = (isOpen) => {
    setSignInDialogIsOpen(isOpen);
  };
  //handler function for controlling whether the signUpDialog is open
  const signUpDialogHandler = (isOpen) => {
    setSignUpDialogIsOpen(isOpen);
  };

  //handler function for updating the user
  const userHandler = (user) => {
    setUser(user);
  };

  return (
    <AppContext.Provider
      value={{
        titleText,
        menu,
        cart,
        cartAddHandler,
        cartRemoveHandler,
        cartDialogIsOpen,
        cartDialogHandler,
        removeFromCartDialogIsOpen,
        removeFromCartDialogHandler,
        setItemToBeCompletelyRemovedFromCartHandler,
        removeItemCompletelyFromCartHandler,
        cartOrderHandler,
        itemToBeRemoved,
        snackbar,
        snackbarHandler,
        isSignedIn,
        signInHandler,
        signInDialogIsOpen,
        signInDialogHandler,
        signUpDialogIsOpen,
        signUpDialogHandler,
        user,
        userHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
