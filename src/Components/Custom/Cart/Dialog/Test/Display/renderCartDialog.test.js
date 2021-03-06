import React from "react";
import { render, screen } from "@testing-library/react";
import AppContextProvider from "../../../../../../Context/AppContextProvider";
import DialogContainer from "../../Container/DialogContainer";
import Header from "../../../../../Layout/Header/Header";
import Menu from "../../../../Menu/Menu";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("cart", () => {
  it("renders an empty cart dialog", () => {
    const { getByText, getByLabelText } = render(
      <AppContextProvider>
        <Header />
        <DialogContainer />
      </AppContextProvider>
    );

    //click the cart button
    userEvent.click(getByLabelText("shopping cart button"));
    //check whether the Cart is empty text displayed
    expect(screen.getByText("Cart Is Empty")).toBeInTheDocument();
  });

  it("renders a cart with an item", () => {
    const { getByLabelText, getByTestId } = render(
      <AppContextProvider>
        <Header />
        <Menu />
        <DialogContainer />
      </AppContextProvider>
    );

    //add an item from the menu
    userEvent.click(getByTestId("add one Royale With Cheese menu 1"));

    //click the cart button
    userEvent.click(getByLabelText("shopping cart button"));

    //there should be a count of 1 for the item in the cart
    expect(
      screen
        .getByTestId("amount of Royale With Cheese cart 1")
        .querySelector("input")
    ).toHaveValue("1");
  });
});
