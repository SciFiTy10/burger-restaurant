import React from "react";
import { render, screen } from "@testing-library/react";
import { AppContext } from "../../../../../../Context/app-context";
import ItemAmount from "../../ItemAmount";
import { cartReducer } from "../../../../../../Reducers/cartReducer/cartReducer";
import userEvent from "@testing-library/user-event";

describe("adding an item", () => {
  //create initial cart state
  let cart = [];
  //handler function for adding an item to the cart
  const cartAddHandler = (item) => {
    //ensure the item is non-empty
    if (item) {
      //dispatch the item to the reducer
      cart = cartReducer(cart, { type: "ADD_ITEM", payload: item });
    }
  };
  //create a test item to be added
  const testAddItem = {
    id: 1,
    title: "Royale With Cheese",
    price: 9.99,
    amount: 1,
  };

  it("should add a new item to the cart", () => {
    render(
      <AppContext.Provider
        value={{
          cart,
        }}
      >
        <ItemAmount
          id={testAddItem.id}
          title={testAddItem.title}
          price={testAddItem.price}
          amount={testAddItem.amount}
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
    ]);
  });
});
