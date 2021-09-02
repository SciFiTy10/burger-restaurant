import React from "react";
import { render, screen } from "@testing-library/react";
import ItemAmount from "../../ItemAmount";
import { cartReducer } from "../../../../../../Reducers/cartReducer/cartReducer";
import CartDialog from "../../../../cart/Dialog/CartDialog";
import Cart from "../../../../Cart/Cart";
import CartItem from "../../../../Cart/CartItem";
import AppContextProvider from "../../../../../../Context/AppContextProvider";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("adding an item", () => {
  //create a cart
  let cart = [
    {
      id: 1,
      title: "Royale With Cheese",
      price: 9.99,
      amount: 1,
    },
  ];

  //handler function for adding an item to the cart
  const cartAddHandler = (item) => {
    //ensure the item is non-empty
    if (item) {
      //dispatch the item to the reducer
      dispatchCart({ type: "ADD_ITEM", payload: item });
    }
  };

  // afterEach(() => {
  //   //reset the cart
  //   cart = [
  //     {
  //       id: 1,
  //       title: "Royale With Cheese",
  //       price: 9.99,
  //       amount: 1,
  //     },
  //   ];
  // });

  // it("should add a new item to the cart", () => {
  //   const itemToBeAdded = {
  //     id: 2,
  //     title: "What Burger",
  //     price: 10.99,
  //     amount: 1,
  //   };
  //   render(
  //     <AppContext.Provider
  //       value={{
  //         cart,
  //       }}
  //     >
  //       <ItemAmount
  //         id={itemToBeAdded.id}
  //         title={itemToBeAdded.title}
  //         price={itemToBeAdded.price}
  //         amount={itemToBeAdded.amount}
  //         cartAddHandler={cartAddHandler}
  //       />
  //     </AppContext.Provider>
  //   );

  //   userEvent.click(screen.getByLabelText("add one of item"));
  //   expect(cart).toEqual([
  //     {
  //       id: 1,
  //       title: "Royale With Cheese",
  //       price: 9.99,
  //       amount: 1,
  //     },
  //     {
  //       id: 2,
  //       title: "What Burger",
  //       price: 10.99,
  //       amount: 1,
  //     },
  //   ]);
  // });

  // test("if the item is already in the cart, it should increment the amount of the same item by 1", () => {
  //   //create a test item to be added
  //   const itemToBeAdded = {
  //     id: 1,
  //     title: "Royale With Cheese",
  //     price: 9.99,
  //     amount: 1,
  //   };
  //   render(
  //     <AppContext.Provider
  //       value={{
  //         cart,
  //       }}
  //     >
  //       <ItemAmount
  //         id={itemToBeAdded.id}
  //         title={itemToBeAdded.title}
  //         price={itemToBeAdded.price}
  //         amount={itemToBeAdded.amount}
  //         cartAddHandler={cartAddHandler}
  //       />
  //     </AppContext.Provider>
  //   );

  //   userEvent.click(screen.getByLabelText("add one of item"));
  //   expect(cart).toEqual([
  //     {
  //       id: 1,
  //       title: "Royale With Cheese",
  //       price: 9.99,
  //       amount: 2,
  //     },
  //   ]);
  // });

  it("should increment the text field value by 1", () => {
    //create a test item to be added
    // const itemToBeAdded = {
    //   id: 1,
    //   title: "Royale With Cheese",
    //   price: 9.99,
    //   amount: 1,
    // };
    // //get the cart item's amount
    //const amount = cart.find((item) => item.id === itemToBeAdded.id);
    render(
      <AppContextProvider
        value={{
          cart,
          cartAddHandler,
        }}
      >
        <ItemAmount
          id={cart[0].id}
          title={cart[0].title}
          price={cart[0].price}
          amount={cart[0].amount}
          cartAddHandler={cartAddHandler}
        />
      </AppContextProvider>
    );

    userEvent.click(screen.getByLabelText("add one of item"));
    console.log(cart);
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});
