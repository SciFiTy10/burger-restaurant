import React from "react";
import { render, screen } from "@testing-library/react";
import AppContextProvider from "../../../../../../Context/AppContextProvider";
import DialogContainer from "../../Container/DialogContainer";
import Header from "../../../../../Layout/Header/Header";
import Menu from "../../../../Menu/Menu";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { cyan } from "@material-ui/core/colors";

describe("removing an item from the cart", () => {
  it("removes one of an item which exists in the cart", () => {
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

    //add one of the item from the cart
    userEvent.click(getByTestId("add one Royale With Cheese cart 1"));

    //remove one of the item from the cart
    userEvent.click(getByTestId("remove one Royale With Cheese cart 1"));

    //there should be a count of 1 for the item in the cart
    expect(
      screen
        .getByTestId("amount of Royale With Cheese cart 1")
        .querySelector("input")
    ).toHaveValue("1");
  });
});
