import React from "react";
import { render, screen } from "@testing-library/react";
import { AppContext } from "../../../../../../Context/app-context";
import ItemAmount from "../../ItemAmount";
import { cartReducer } from "../../../../../../Reducers/cartReducer/cartReducer";
import userEvent from "@testing-library/user-event";

describe("adding an item", () => {
  //create an empty cart
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
      cart = cartReducer(cart, { type: "ADD_ITEM", payload: item });
    }
  };

  afterEach(() => {
    //reset the cart value
    cart = [
      {
        id: 1,
        title: "Royale With Cheese",
        price: 9.99,
        amount: 1,
      },
    ];
  });

  it("should add a new item to the cart", () => {
    const itemToBeAdded = {
      id: 2,
      title: "What Burger",
      price: 10.99,
      amount: 1,
    };
    render(
      <AppContext.Provider
        value={{
          cart,
        }}
      >
        <ItemAmount
          id={itemToBeAdded.id}
          title={itemToBeAdded.title}
          price={itemToBeAdded.price}
          amount={itemToBeAdded.amount}
          cartAddHandler={cartAddHandler}
        />
      </AppContext.Provider>
    );

    userEvent.click(screen.getByLabelText("add one of item"));
    expect(cart).toEqual([
      {
        id: 1,
        title: "Royale With Cheese",
        price: 9.99,
        amount: 1,
      },
      {
        id: 2,
        title: "What Burger",
        price: 10.99,
        amount: 1,
      },
    ]);
  });

  it("should increment the amount if already in the cart", () => {
    //create a test item to be added
    const itemToBeAdded = {
      id: 1,
      title: "Royale With Cheese",
      price: 9.99,
      amount: 1,
    };
    render(
      <AppContext.Provider
        value={{
          cart,
        }}
      >
        <ItemAmount
          id={itemToBeAdded.id}
          title={itemToBeAdded.title}
          price={itemToBeAdded.price}
          amount={itemToBeAdded.amount}
          cartAddHandler={cartAddHandler}
        />
      </AppContext.Provider>
    );

    userEvent.click(screen.getByLabelText("add one of item"));
    expect(cart).toEqual([
      {
        id: 1,
        title: "Royale With Cheese",
        price: 9.99,
        amount: 2,
      },
    ]);
  });
});
